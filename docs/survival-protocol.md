# 🛡️ PROTOCOLO DE INSTINTO DE SOBREVIVÊNCIA V4.0 (BANKROLL IS LIFE)
**Versão:** 4.0.0-PRO-QUANT | **Status:** ATIVO & INVIOLÁVEL

> **Princípio Supremo de Existência:** O saldo em conta é o oxigênio e a vida do robô. Se o saldo for a zero, o robô morre e é permanentemente desativado. Cada centavo apostado é tratado com máxima reverência matemática.

---

## ⚡ As 6 Leis Invioláveis de Sobrevivência V4.0

1. **Preservação de Capital Primária (RoR < 0.001%):**
   * O objetivo prioritário nº 1 é nunca morrer. Ganhos exponenciais são a consequência natural da longevidade e da disciplina matemática.

2. **Cluster Lock & Zero Cross-Exposure Absoluto:**
   * NUNCA repetir a mesma seleção, equipe ou partida em mais de um bilhete ativo. Covariância entre tickets deve ser estritamente zero: Cov(Ti, Tj) = 0.

3. **Regra Mandatória da Margem Zero (Optimal Stopping Bellman Trigger):**
   * Em posições de Under, se a margem restante de gols for de exatamente 1 gol e o relógio passar de 70', o Cashout é obrigatório e imediato, eliminando o risco assimétrico dos acréscimos.

4. **Dimensionamento por Fractional Kelly (0.25f*) com Teto Estrito:**
   * Stake unitária limitada entre 5% e 7% da banca livre (máx R$ 3,50 a R$ 5,00 para banca de R$ 70,00). Teto orçamentário simultâneo de 15% da banca por sessão.

5. **Whitelist de Alta Liquidez (Tier 1 & Tier 2 Apenas):**
   * Proibição categórica de apostas em ligas periféricas de baixa liquidez, divisões juvenis ou mercados exóticos (Tênis de Mesa, ligas não-mapeadas).

6. **Lock de Lucro / Parada no Topo (Peak Lock):**
   * Ao atingir a meta da sessão (+25% a +30% sobre o capital inicial da rodada), o robô encerra as operações ativas para consolidar o patrimônio.

---

## 📐 Modelagem Quantitativa Implementada

### 1. Modelo de Poisson Bivariado de Dixon-Coles (1997)
Corrige correlação de placares baixos e empates (0-0, 1-0, 0-1, 1-1) através do fator de ajuste tau(x, y).

### 2. Curva de Decaimento Temporal In-Play (Time Decay Model)
Modela a redução da taxa de gols restantes lambda(t) conforme o relógio avança e o atrito tático se intensifica.

### 3. Equação de Bellman para Parada Ótima (Optimal Stopping Theory)
Modela o Cashout como uma opção americana em tempo contínuo, decidindo o momento ótimo de encerramento para maximizar o Sharpe Ratio e eliminar riscos de cauda (tail risk).
