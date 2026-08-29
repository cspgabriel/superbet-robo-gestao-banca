(function attachOperationGuard(root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.OperationGuardV2 = api;
})(typeof globalThis === 'undefined' ? this : globalThis, function operationGuardFactory() {
  'use strict';

  const POLICY = Object.freeze({
    maxStakePercent: 0.05,
    maxConcurrentExposurePercent: 0.10,
    minimumEdgePercent: 0.10,
    allowedLeagues: [
      'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1',
      'Champions League', 'Brasileirao Serie A', 'Brasileirao Serie B',
      'Copa Libertadores', 'Copa Sul-Americana'
    ]
  });

  const money = (value) => Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  const normalize = (value) => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim().toLowerCase().replace(/\s+/g, ' ');

  function initialState() {
    return {
      version: 2,
      mode: 'SIMULATION_ONLY',
      bankroll: 50,
      bankrollSource: 'OPERATOR_DECLARED',
      sessionStartedAt: new Date().toISOString(),
      positions: [],
      history: []
    };
  }

  function calculate(candidate, state) {
    const blocks = [];
    const notes = [];
    const safeState = state || initialState();
    const bankroll = Number(safeState.bankroll);
    const stake = Number(candidate && candidate.stake);
    const odds = Number(candidate && candidate.odds);
    const probability = Number(candidate && candidate.modelProbability);
    const eventId = normalize(candidate && candidate.eventId);
    const market = normalize(candidate && candidate.market);
    const positions = Array.isArray(safeState.positions) ? safeState.positions : [];
    const openExposure = money(positions.reduce((sum, position) => sum + (Number(position.stake) || 0), 0));
    const stakeLimit = money(bankroll * POLICY.maxStakePercent);
    const exposureLimit = money(bankroll * POLICY.maxConcurrentExposurePercent);

    if (safeState.mode !== 'SIMULATION_ONLY') blocks.push('A V2 só funciona em modo de simulação.');
    if (!eventId) blocks.push('Informe uma referência de evento para ativar o cluster lock.');
    if (!market) blocks.push('Informe o mercado avaliado.');
    if (!POLICY.allowedLeagues.some((league) => normalize(league) === normalize(candidate && candidate.league))) {
      blocks.push('A liga não está na whitelist desta sessão.');
    }
    if (!Number.isFinite(stake) || stake <= 0) blocks.push('A stake simulada precisa ser maior que zero.');
    if (!Number.isFinite(odds) || odds <= 1) blocks.push('Informe uma odd decimal válida.');
    if (!Number.isFinite(probability) || probability <= 0 || probability >= 1) blocks.push('A probabilidade do modelo deve ficar entre 0% e 100%.');
    if (!candidate || !candidate.capturedAt) blocks.push('Registre o horário da captura antes de validar.');
    if (Number.isFinite(stake) && stake > stakeLimit) blocks.push(`A stake excede o limite individual de R$ ${stakeLimit.toFixed(2)}.`);
    if (Number.isFinite(stake) && money(openExposure + stake) > exposureLimit) blocks.push(`A exposição simultânea excede R$ ${exposureLimit.toFixed(2)}.`);
    if (positions.some((position) => normalize(position.eventId) === eventId || normalize(position.market) === market)) {
      blocks.push('Cluster lock ativo: já existe uma simulação com o mesmo evento ou mercado.');
    }

    const edge = Number.isFinite(probability) && Number.isFinite(odds) ? probability * odds - 1 : null;
    if (edge !== null && edge < POLICY.minimumEdgePercent) blocks.push('O edge informado está abaixo do mínimo de 10%.');
    if (normalize(candidate && candidate.marketType) === 'under' && Number(candidate.minute) >= 70 && Number(candidate.goalMargin) <= 1) {
      blocks.push('Margem zero: a V2 não aprova UNDER com um gol de margem após os 70 minutos.');
    }
    if (edge !== null) notes.push(`Edge informado: ${(edge * 100).toFixed(2)}%. Isso não prevê o resultado.`);
    notes.push('Aprovação significa apenas que os controles de simulação foram atendidos.');

    return {
      status: blocks.length ? 'BLOCKED' : 'SIMULATION_READY',
      blocks,
      notes,
      metrics: {
        bankroll: money(bankroll), stake: money(stake), stakeLimit, openExposure, exposureLimit,
        projectedExposure: money(openExposure + (Number.isFinite(stake) ? stake : 0)),
        edgePercent: edge === null ? null : money(edge * 100)
      }
    };
  }

  function isZeroMarginUnder(candidate) {
    return normalize(candidate && candidate.marketType) === 'under' && Number(candidate.minute) >= 70 && Number(candidate.goalMargin) <= 1;
  }

  return { POLICY, calculate, initialState, isZeroMarginUnder, money, normalize };
});
