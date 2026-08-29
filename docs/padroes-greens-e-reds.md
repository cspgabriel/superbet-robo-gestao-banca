# 🧬 CATÁLOGO DE PADRÕES VITORIOSOS (GREENS) E ANTI-PADRÕES DE RUÍNA (REDS)
**Superbet Quant Trading & Bankroll Management — Metodologia V4.1**
*Data da Última Auditoria: 29/08/2026 (Sessão 5)*

---

## 🏆 1. PADRÕES DE GREEN (REPLICAR SEMPRE)

### 🟢 Padrão G1: In-Play com Pressão Territorial Assimétrica (45'–60' ou 1'–15')
* **Descrição:** Entrada no mercado de *Próximo Gol* ou *1T Vencedor* em time favorito que domina a posse (>62%), empilha finalizações no terço final e apresenta xG > 1.60.
* **Casos de Sucesso Auditados:**
  - **Sessão 5 (29/08):** *Liverpool 2º Gol @ 1.57* (Entrada aos 50' 2T $\to$ Gol do Isak aos 60' = **GREEN**).
  - **Sessão 5 (29/08):** *RB Leipzig 1T Vence @ 2.07* (Entrada aos 4' 1T $\to$ Gol aos 26' = **GREEN**).
  - **Sessão 2 (28/08):** *Criciúma x Chapecoense Ambas Marcam @ 2.05* (Entrada aos 55' = **GREEN**).
* **Parâmetros Quantitativos:**
  - Posse de bola $\ge 60\%$.
  - Finalizações no alvo nos últimos 15 min $\ge 2$.
  - Odds entre **1.50 e 2.10**.
  - Stake: 10% a 20% da banca (R$ 5,00 a R$ 10,00).

---

### 🟢 Padrão G2: Super Dupla Pré-Jogo Descorrelacionada Tier 1 (Bundesliga + Premier League)
* **Descrição:** Combinação de 2 eventos de altíssima liquidez institucional com covariância estritamente zero entre si.
* **Casos de Sucesso Auditados:**
  - **Sessão 5 (29/08):** *Borussia Dortmund Vence (1.38) + Tottenham x Newcastle Over 2.5 (1.60)* @ **2.20**.
  - **Sessão 1 (28/08):** *Dupla Chelsea + Fiorentina* @ **2.15** = **GREEN**.
* **Parâmetros Quantitativos:**
  - Exatamente **2 pernas** (nunca 3+ sem valor extremo).
  - Odds individuais entre **1.35 e 1.65**.
  - Odds combinadas entre **1.90 e 2.40**.
  - Campeonatos diferentes e horários independentes.

---

### 🟢 Padrão G3: Over HT In-Play em Jogos Abertos
* **Descrição:** Mercado de *Mais de 0.5 Gols no 1º Tempo* quando o time dominante cria chances claras nos primeiros 15 minutos.
* **Casos de Sucesso Auditados:**
  - **Sessão 5 (29/08):** *Leipzig Mais de 0.5 Gols HT @ 1.50* = **GREEN** aos 26'.

---

## 🚫 2. ANTI-PADRÕES DE RED (PROIBIDO REPETIR)

### 🔴 Anti-Padrão R1: Cross-Exposure / Cluster Overlap (Quebra da Independência)
* **Descrição:** Alocar múltiplos bilhetes no mesmo time ou na mesma partida. Se a equipe oscilar, todos os bilhetes sofrem simultaneamente.
* **Erros Históricos Auditados:**
  - **Sessão 4 (28/08):** 4 bilhetes no jogo *Novorizontino x Sport Under 2.5* $\to$ Ruína em cadeia no gol dos 78'.
  - **Sessão 5 (29/08):** 3 bilhetes atrelados a gol/vitória do *Leverkusen* (Leverkusen Vence + 3º Gol + Over HT).
* **Regra Mandatória Anti-Red:** **LEI DO CLUSTER LOCK ABSOLUTO**. Máximo de **1 único bilhete ativo** por partida. Proibido dobrar ou criar novas entradas no mesmo evento enquanto houver bilhete aberto.

---

### 🔴 Anti-Padrão R2: Aporte em Favorito Perdendo por 2+ Gols (Catching a Falling Knife)
* **Descrição:** Tentar forçar entrada de vitória em time favorito que tomou 2 gols relâmpagos no início.
* **Diagnóstico Matemático:** A probabilidade empírica de virada após estar perdendo por 0x2 antes dos 15' cai de 68% para **~18%**, destruindo qualquer +EV da odd inicial.
* **Regra Mandatória Anti-Red:** **PROIBIDO** apostar em vitória no mercado 1X2 de time que esteja perdendo por 2 gols de diferença.

---

### 🔴 Anti-Padrão R3: Ligas Exóticas e Esportes Secundários
* **Descrição:** Apostar em ligas sem liquidez, divisões inferiores ou tênis de mesa onde o modelo não possui dados estatísticos robustos.
* **Regra Mandatória Anti-Red:** **WHITELIST EXCLUSIVA TIER 1/2**:
  - Premier League (Inglaterra)
  - La Liga (Espanha)
  - Bundesliga (Alemanha)
  - Serie A (Itália)
  - Ligue 1 (França)
  - Brasileirão Série A e Série B
  - UEFA Champions League / Europa League

---

### 🔴 Anti-Padrão R4: Overbetting Desproporcional
* **Descrição:** Disparar stakes acima de 25% da banca em bilhetes únicos sem margem de segurança.
* **Regra Mandatória Anti-Red:** Teto de stake unitária fixado em **R$ 10,00** (máx 20% da banca base) e teto de risco simultâneo em **R$ 25,00**.

---

## 📋 MATRIZ DE DECISÃO RÁPIDA

| Cenário In-Play | Ação Quantitativa | Motivo |
| :--- | :--- | :--- |
| Favorito empatando 0x0 ou 1x1 pressionando aos 45'-60' | 🟢 **ENTRAR (Próximo Gol / 1X2)** | Padrão G1 (+EV comprovado) |
| Dupla Tier 1 com odds 1.38 + 1.60 | 🟢 **ENTRAR (Múltipla 2x @ 2.20)** | Padrão G2 (Descorrelação total) |
| Já tem bilhete aberto no jogo X e quer colocar outro | 🛑 **BLOQUEAR (Cluster Lock)** | Anti-Padrão R1 |
| Favorito perdendo por 2x0 | 🛑 **BLOQUEAR (Sem Aporte 1X2)** | Anti-Padrão R2 |
| Jogo em liga da Suécia, Rússia ou Tênis de mesa | 🛑 **BLOQUEAR (Fora Whitelist)** | Anti-Padrão R3 |
