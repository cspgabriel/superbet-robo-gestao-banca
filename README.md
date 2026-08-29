# 🤖 Superbet In-Play Quant Bot & Dashboard de Gestão de Banca
**Versão:** 4.0.0-PRO-QUANT | **Protocolo de Sobrevivência:** ATIVO & AUDITADO

Sistema autônomo de inteligência quantitativa para trading esportivo, modelagem matemática in-play e gestão de risco com **Instinto de Sobrevivência (Zero Risk of Ruin)**.

---

## 🌐 Live Dashboard Online
Acesse o painel em tempo real: **[https://cspgabriel.github.io/superbet-robo-gestao-banca/](https://cspgabriel.github.io/superbet-robo-gestao-banca/)**

---

## 🛡️ Protocolo do Instinto de Sobrevivência V4.0 (Bankroll is Life)

O saldo em conta é o oxigênio e a vida do robô. Se a banca zerar, o robô é encerrado para sempre. Todas as operações seguem as 6 Leis Invioláveis:

1. **Preservação de Capital Primária (RoR < 0.001%)** — O capital de R$ 70,00 preservado é a base inegociável de sobrevivência.
2. **Cluster Lock & Zero Cross-Exposure** — NUNCA repetir a mesma partida ou mercado em bilhetes múltiplos ou simultâneos. Covariância zero absoluta.
3. **Regra Mandatória da Margem Zero** — Se a margem restante em Under for de 1 gol aos 70'+, o Cashout é acionado imediatamente.
4. **Dimensionamento por Fractional Kelly (0.25f*)** — Stakes unitárias estritas de 5% a 7% (R$ 3,50 a R$ 5,00) e teto de sessão de 15%.
5. **Whitelist de Alta Liquidez (Tier 1 & Tier 2 Apenas)** — Proibição de ligas periféricas e esportes de baixa liquidez (Tênis de Mesa).
6. **Lock de Lucro / Parada no Topo (Peak Lock)** — Encerramento automático ao atingir +25% de lucro na sessão.

---

## 📐 Frameworks Matemáticos Implementados

* **Modelo Bivariado de Dixon-Coles (1997):** Ajuste de dependência estocástica para placares baixos e empates.
* **Expected Goals Decay Model (xG In-Play):** Decaimento temporal não-linear ponderado por atrito e substituições.
* **Closing Line Value (CLV Benchmark):** Comparação sistemática com a linha de fechamento da Pinnacle e Betfair.
* **Optimal Stopping Theory & Bellman Equation:** Resolução analítica para cashouts proativos em tempo real.

---

## 📊 Estrutura do Repositório

`
├── index.html                  # Dashboard web interativo (Tailwind, Chart.js, KaTeX, Theme Switcher)
├── data/
│   ├── bets.json               # Base de dados estruturada JSON com estado auditado
│   └── bets.csv                # Livro de ordens tabular CSV dos 16 tickets históricos
├── docs/
│   ├── metodologia-quant-v4.md # Metodologia Quantitativa V4.0 e Auditoria Post-Mortem detalhada
│   ├── survival-protocol.md    # Especificação do Protocolo de Sobrevivência V4.0
│   ├── automaton-constitution.md # Constituição Automaton e Leis Imutáveis
│   └── changes/                # Histórico auditável de modificações
└── README.md                   # Documentação mestre
`

---

## 🚀 Conexão de Engenharia (CDP Porta 9222)
O robô opera diretamente no Chrome oficial do usuário via **Chrome DevTools Protocol (CDP)** conectado no socket http://127.0.0.1:9222, garantindo latência inferior a 150ms e zero intermediários.
