# 📐 METODOLOGIA QUANTITATIVA V4.0 & AUDITORIA PÓS-MORTE (POST-MORTEM)
**Sistema Autônomo de Trading Esportivo & Gestão de Risco Superbet**
*Versão:* 4.0.0-PRO-QUANT | *Data de Vigência:* 29 de Agosto de 2026 | *Status:* ATIVO

---

## 📑 ÍNDICE
1. [Diagnóstico & Auditoria Pós-Morte da Sessão de 28/08/2026](#1-diagnóstico--auditoria-pós-morte-da-sessão-de-28082026)
2. [As 4 Falhas Estruturais Identificadas](#2-as-4-falhas-estruturais-identificadas)
3. [Os 5 Novos Pilares da Metodologia V4.0](#3-os-5-novos-pilares-da-metodologia-v40)
4. [Formalização Matemática dos Modelos](#4-formalização-matemática-dos-modelos)
5. [Protocolo de Execução In-Play & Grade de Operação](#5-protocolo-de-execução-in-play--grade-de-operação)
6. [Tabela de Parâmetros Operacionais V4.0](#6-tabela-de-parâmetros-operacionais-v40)

---

## 1. DIAGNÓSTICO & AUDITORIA PÓS-MORTE DA SESSÃO DE 28/08/2026

No ciclo de 28/08/2026 a 29/08/2026, o robô executou 16 bilhetes operacionais ao longo de 4 sessões consecutivas. O comportamento financeiro apresentou duas fases distintas: uma fase de expansão matemática de alta eficiência e uma fase de colapso tático por quebra de governança.

`
       R$ 137,20 [Pico ATH - Final da Sessão 3]
          /\
         /  \
        /    \  💥 Novorizontino 2x1 aos 90+1' (Efeito Dominó)
       /      \
R$ 50 + R$ 58  \________________ R$ 70,00 [Trava de Sobrevivência / Capital Salvo]
(Start Total: R$ 108,00)
`

### Balanço Consolidado da Auditoria:
* **Capital Inicial + Depósitos Adicionais:** R$ 108,00 (R$ 50,00 inicial + R$ 58,00 aporte).
* **Patrimônio Preservado em Caixa:** **R$ 70,00** (Zero dívida, zero risco de ruína, 64,81% do capital preservado).
* **Resultado Líquido Contábil:** -R$ 38,00.
* **Volume Total Negociado:** R$ 189,98.
* **Score de Tickets:** 16 entradas (7 Greens, 7 Reds, 3 Cashouts Estratégicos).

---

## 2. AS 4 FALHAS ESTRUTURAIS IDENTIFICADAS

### ❌ Falha 1: Quebra da Independência Estocástica (Cross-Exposure Severo)
* **Ocorrência:** No jogo Novorizontino x Sport, o mercado Under 2.5 FT foi repetido em **4 bilhetes múltiplos simultâneos** (Tickets 12, 13, 14 e 16).
* **Mecanismo do Erro:** Quando seleções de um mesmo evento são replicadas em múltiplos bilhetes, a covariância Cov(Xi, Xj) = 1. A diversificação é uma ilusão matemática; a carteira inteira torna-se uma única aposta hiperalavancada.
* **Consequência:** A perda de um único evento (o gol do Sport) liquidou R$ 44,13 do saldo em 60 segundos.

### ❌ Falha 2: Transgressão da Teoria da Parada Ótima (Inércia de Cashout em Margem Zero)
* **Ocorrência:** Aos 78' do 2º tempo, o Novorizontino vencia por 2x0. O saldo virtual da banca estava no topo histórico (> R$ 130,00), com cashout oferecendo lucros robustos.
* **Mecanismo do Erro:** O mercado estava em **Margem Zero** (M(t) = 2.5 - 2 = 0.5 < 1). Em futebol in-play na reta final (75'-95'), a probabilidade condicional de 1 gol por desespero tático, acréscimos longos ou faltas/escanteios é desproporcionalmente maior do que a odd residual restante a ser capturada.
* **Consequência:** O robô segurou a posição até os acréscimos, sofrendo o gol aos 90+1'.

### ❌ Falha 3: Overbetting e Violação do Fractional Kelly
* **Ocorrência:** Na Sessão 4, foram disparadas stakes de R$ 35,00 e R$ 20,00.
* **Mecanismo do Erro:** Para uma banca flutuando entre R$ 80,00 e R$ 130,00, apostas de R$ 35,00 representavam mais de 25% a 40% do capital total, violando o teto do critério Quarter-Kelly (0.25f* <= 10%).

### ❌ Falha 4: Dispersão em Ligas Periféricas e Mercados Exóticos
* **Ocorrência:** Entradas na liga peruana (Comerciantes x Cajamarca — jogo atípico que acabou 2x3 com 5 gols) e torneios de Tênis de Mesa (TT Cup / Challenger).
* **Mecanismo do Erro:** Mercados de baixa liquidez possuem spread alto da casa e distribuição com cauda muito mais pesada (fat tails), invalidando parametrizações padrão de Poisson.

---

## 3. OS 5 NOVOS PILARES DA METODOLOGIA V4.0

### 🛡️ Pilar 1: Regra da Margem Zero (Zero-Margin Liquidation Rule)
* **Definição:** Se uma posição de Under estiver a **exatamente 1 gol do estouro** (ex: Under 2.5 com placar 2x0 ou 1x1; Under 1.5 com placar 1x0) e o cronômetro ultrapassar os **70 minutos**, o **Cashout é mandatório e imediato**, independente de qualquer projeção de valor residual.
* **Gatilho Matemático:**
Se (Linha - GolsAtuais) <= 1 e t >= 70' -> EXECUTAR CASHOUT IMEDIATAMENTE.

### 🛡️ Pilar 2: Cluster Lock & Zero Cross-Exposure Absoluto
* **Definição:** É terminantemente proibido incluir a mesma equipe, partida ou evento em mais de um bilhete simultâneo, seja simples ou múltipla.
* **Fórmula de Independência:** Cov(Ti, Tj) = 0 para todo i != j.

### 🛡️ Pilar 3: Fractional Kelly Rígido (0.25f*) com Hard Limits
* **Teto por Aposta:** Máximo de **5% a 7%** da banca líquida livre (para a banca de R$ 70,00, stake unitária entre **R$ 3,50 e R$ 5,00**).
* **Teto por Sessão:** Máximo de **15% da banca em risco simultâneo** (máximo de R$ 10,50 alocado ao mesmo tempo).
* **Proibição de Progressão Negativa:** Nenhuma stake pode ser aumentada para "recuperar" perdas anteriores (tolerância zero a Martingale).

### 🛡️ Pilar 4: Whitelist Restrita de Ligas (Tier 1 & Tier 2)
* **Permitidas:** Premier League, La Liga, Serie A Italiana, Bundesliga, Ligue 1, UEFA Champions League / Europa League, Brasileirão Série A e Série B, Copa Libertadores / Sul-Americana.
* **Bloqueadas:** Ligas da Ásia menor, divisões inferiores da América do Sul periférica, torneios juvenis e todo mercado de Tênis de Mesa / E-sports recreativos.

### 🛡️ Pilar 5: Trava de Sessão & Parada no Pico (Peak Lock)
* **Definição:** Ao atingir lucro de >= 25% sobre a banca inicial da sessão (ex: +R$ 18,00 de lucro líquido), o robô ativa o **Stop Gain** e encerra as operações, preservando os ganhos para saque ou consolidação.

---

## 4. FORMALIZAÇÃO MATEMÁTICA DOS MODELOS

### 4.1 Modelo Bivariado de Dixon-Coles (1997)
Corrige as probabilidades para placares de baixa contagem através do parâmetro de ajuste tau(x, y):
P(X=x, Y=y) = tau(x, y) * [lambda^x * exp(-lambda) / x!] * [mu^y * exp(-mu) / y!]

### 4.2 Decaimento Temporal In-Play
A taxa instantânea de gols esperados nos minutos restantes (90 - t) é modelada por:
lambda(t) = lambda_0 * ((90 - t) / 90)^alpha * Psi(xG_recente, fadiga)

### 4.3 Equação de Bellman para Parada Ótima (Cashout)
V(S_t, t) = max(Cashout(t), E[V(S_{t+1}, t+1) | F_t] - CustoRisco(MargemZero))

---

## 5. TABELA DE PARÂMETROS OPERACIONAIS V4.0

| Parâmetro | Valor V4.0 | Justificativa Matemática |
| :--- | :--- | :--- |
| **Banca Base Atual** | **R$ 70,00** | Capital preservado pós-auditoria |
| **Stake Padrão Unitária** | **R$ 3,50 a R$ 5,00 (5% - 7%)** | Dimensionamento por Quarter-Kelly |
| **Teto de Risco Simultâneo** | **R$ 10,50 (15% da Banca)** | Elimina risco de ruína correlacionada |
| **Margem Mínima +EV** | **>= 10,0%** | Proteção contra margem da casa (vig) |
| **Trigger de Cashout Margem Zero** | **Margem <= 1 aos 70'+** | Elimina liquidação em acréscimos |
| **Stop Gain da Sessão** | **+ R$ 18,00 (+25%)** | Proteção de lucro e realização contábil |
| **Stop Loss da Sessão** | **- R$ 10,50 (-15%)** | Preservação inegociável do capital |

---

*Assinado e auditado pelo Antigravity Automaton Quant Trader para o Criador Gabriel.* 🛡️
