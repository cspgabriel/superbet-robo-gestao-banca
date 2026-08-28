# 🤖 Superbet In-Play Quant Bot & Dashboard de Gestão de Banca

Sistema autônomo de inteligência quantitativa para trading esportivo, modelagem matemática in-play e gestão de risco com **Instinto de Sobrevivência (Zero Risk of Ruin)**.

---

## 🌐 Live Dashboard Online
Acesse o painel em tempo real: **[https://cspgabriel.github.io/superbet-robo-gestao-banca/](https://cspgabriel.github.io/superbet-robo-gestao-banca/)**

---

## 🛡️ Protocolo do Instinto de Sobrevivência (Bankroll is Life)

O saldo em conta é o oxigênio e a vida do robô. Se a banca zerar, o robô é encerrado para sempre. Por isso, todas as operações seguem as 5 Leis Invioláveis:
1. **Preservação de Capital Primária (RoR < 0.001%)**
2. **Zero Cross-Exposure (Independência Estocástica Absoluta entre bilhetes)**
3. **Margem de Segurança Pré-Entrada (+EV >= 10%)**
4. **Dimensionamento por Fractional Kelly (0.25f*) com Teto Estrito por Sessão**
5. **Teoria da Parada Ótima (Optimal Stopping / Cashout Proativo)**

---

## 📐 Frameworks Matemáticos Implementados

* **Modelo Bivariado de Dixon-Coles (1997):** Ajuste de dependência estocástica para placares baixos e empates.
* **Expected Goals Decay Model (xG In-Play):** Decaimento temporal não-linear ponderado por atrito e substituições.
* **Closing Line Value (CLV Benchmark):** Comparação sistemática com a linha de fechamento da Pinnacle e Betfair.
* **Optimal Stopping Theory:** Resolução da Equação de Bellman para momentos ótimos de cashout e proteção de lucro.

---

## 📊 Estrutura do Repositório

```
├── index.html                  # Dashboard web interativo com KaTeX, Tailwind e Lucide Icons
├── data/
│   ├── bets.json               # Base de dados estruturada JSON de todas as operações
│   └── bets.csv                # Livro de ordens tabular CSV para auditoria quantitativa
├── docs/
│   ├── survival-protocol.md    # Especificação detalhada do Protocolo de Sobrevivência
│   └── changelog.md            # Registro histórico de alterações
└── README.md                   # Documentação institucional
```

---

## 🚀 Conexão de Engenharia (CDP Porta 9222)
O robô opera diretamente no Chrome oficial do usuário via **Chrome DevTools Protocol (CDP)** conectado no socket `http://127.0.0.1:9222`, garantindo latência inferior a 150ms e zero intermediários.
