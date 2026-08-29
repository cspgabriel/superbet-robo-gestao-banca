# Metodologia V2: autonomia de controle, não autonomia financeira

## Estado atual

O motor V2 é autônomo para **bloquear** cenários que não atendem seus contratos. Ele não estima odds, não coleta dados de terceiros, não envia ações e não apresenta uma validação como recomendação financeira.

## Ciclo operacional

1. **Observação**: registrar evento, liga, mercado, odd, horário da captura e probabilidade declarada pelo modelo.
2. **Elegibilidade**: whitelist de ligas e evidência completa. Dados ausentes encerram a avaliação.
3. **Risco de carteira**: teto individual, exposição agregada e cluster lock por evento/mercado.
4. **Abstenção**: edge insuficiente, exposição correlacionada, contexto incompleto ou gatilho de margem zero retornam `BLOCKED`.
5. **Aprendizado**: somente depois de resultados históricos suficientes, medir calibração, Brier score, log loss e resultado fora da amostra antes de alterar uma probabilidade do modelo.

## Fundamento

- O modelo de [Dixon e Coles (1997)](https://www.research.lancs.ac.uk/portal/en/publications/modelling-association-football-scores-and-inefficiencies-in-the-football-betting-market%28d16276a2-d6e0-483b-a708-1d29663f1992%29.html) é um ponto de partida para placares de futebol, não uma prova de edge em tempo real.
- Probabilidades precisam ser avaliadas por calibração e regras próprias de pontuação, como Brier e log loss; a documentação de [calibração probabilística](https://scikit-learn.org/stable/modules/calibration.html) descreve essa separação entre confiabilidade e discriminação.
- O trabalho de [Kelly (1956)](https://onlinelibrary.wiley.com/doi/abs/10.1002/j.1538-7305.1956.tb03809.x) pressupõe probabilidades e odds conhecidas; a V2 trata estimativas não calibradas como motivo para abstenção, não como licença para aumentar risco.

## Próximo nível, somente com dados verificáveis

Para uma avaliação científica, o repositório precisa de uma fonte licenciada de partidas/odds, snapshots timestampados, esquema de resultados, divisão temporal treino-validação-teste, registro de versão do modelo e relatório de calibração. Sem isso, qualquer `modelProbability` no painel continua sendo apenas uma entrada manual.
