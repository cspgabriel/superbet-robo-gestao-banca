# 🧠 FRAMEWORK QUANTITATIVO DE ANÁLISE ESPORTIVA EM 11 PILARES & PIPELINE MULTI-JOGOS
**Sistema Autônomo de Inteligência Esportiva, Value Betting (+EV) e Prognósticos Sem Truncamento**
*Versão: 4.4.0 — Superbet Quant Automaton*

---

## 🏛️ PARTE 1: OS 11 PILARES DA COLETA DE DADOS E INTELIGÊNCIA PREDITIVA

### 1. 📊 Análise de Desempenho da Equipe
* **Amostragem:** Últimas 5 a 10 partidas oficiais para diagnosticar tendência de forma e momentum.
* **Fator Mando de Campo:** Comparativo rigoroso entre métricas de mandante vs visitante (eficiência ofensiva, média de posse, conversão de chances).
* **Compatibilidade de Estilos:** Desempenho histórico contra equipes de arquétipo similar (ex: bloco baixo vs pressão alta).

### 2. ⚔️ Confrontos Diretos (Head-to-Head - H2H)
* **Histórico Recente:** Tendências das últimas 3 temporadas priorizando jogos com os elencos/treinadores atuais.
* **Padrões Identificados:** Média histórica de gols, tendência de Ambas Marcam, volume de cartões e dominância psicológica de mando.

### 3. 🏃‍♂️ Métricas de Desempenho Individual de Jogadores
* **Amostragem:** Últimos 20 jogos individuais para identificar regularidade e picos de produção.
* **Métricas Analisadas:** Gols, finalizações totais, chutes no alvo, assistências, assistências esperadas (xA), passes-chave, desarmes e interceptações.
* **Destaques de Impacto:** Playmakers criadores de jogadas e finalizadores em sequência de gols.

### 4. 📋 Escalações Confirmadas e Profundidade de Elenco
* **Starting XI & Desfalques:** Verificação via web search de escalações confirmadas 1h antes, ausências por lesão, suspensões ou poupança de titulares.
* **Banco de Reservas:** Capacidade de mudança tática e jogadores de impacto no 2º tempo.

### 5. ♟️ Análise Tática e Confronto de Estilos
* **Arquétipos Táticos:** Posse de bola estruturada vs contra-ataque rápido vs pressão pós-perda (Gegenpressing) vs bloco defensivo baixo.
* **Vulnerabilidades Mapeadas:** Eficiência em bolas paradas defensivas/ofensivas e vulnerabilidade a transições rápidas.

### 6. 🏆 Contexto da Partida e Nível de Motivação
* **Importância do Jogo:** Disputa de título, vaga continental, luta contra o rebaixamento ou mata-mata eliminatório.
* **Assimetria Motivacional:** Diferença de necessidade de vitória entre os dois times (ex: time sem pretensões vs time precisando vencer).

### 7. 🌦️ Fatores Ambientais e Externos
* **Clima:** Temperatura extrema, chuva forte (impacto no controle e aceleração da bola) e vento (interferência em lançamentos longos e bolas aéreas).
* **Gramado:** Dimensões do campo, tipo de grama (natural vs sintética) e estado de conservação.

### 8. 🟨 Tendências de Arbitragem
* **Métricas do Árbitro:** Média de faltas por jogo, média de cartões amarelos e vermelhos, frequência de pênaltis marcados.
* **Estilo Disciplinar:** Árbitros rigorosos que favorecem mercados de Over Cartões vs árbitros permissivos.

### 9. ✈️ Cronograma, Congestionamento de Calendário e Fadiga
* **Intervalo de Descanso:** Tempo desde o último jogo oficial (< 72h = zona crítica de fadiga).
* **Deslocamento:** Distância de viagens e fuso horário em competições internacionais.

### 10. 📈 Movimentação de Mercado e Value Betting (+EV)
* **Odds Implícitas:** Cálculo da probabilidade implícita da odd: {imp} = \frac{1}{\text{Odd}}$.
* **Assimetria de Valor (+EV):** Identificação de desajustes onde {real} > P_{imp} + 7\%$.

### 11. 🔬 Estatísticas Avançadas (Métricas Quantitativas)
* **Expected Goals (xG) & Expected Goals Against (xGA):** Criação e concessão real de perigo de gol.
* **Métricas de Pressão:** Passes permitidos por ação defensiva (PPDA), posse no terço final e precisão de finalização.

---

## 🎯 PARTE 2: AS 3 PRINCIPAIS PREVISÕES POR JOGO (ESTRUTURAÇÃO PADRONIZADA)

Para cada jogo selecionado na rodada, o motor deve gerar obrigatoriamente **3 prognósticos estruturados** divididos por nível de risco:

`markdown
### 🏟️ [MANDANTE] x [VISITANTE] — [LIGA / HORÁRIO]

#### 🟢 Previsão 1 (Baixo Risco • Confiança 85%+):
* **Mercado:** Ex: Dupla Chance / Over 1.5 Gols / Handicap Positivo
* **Odd Estimada:** 1.35 a 1.60
* **Justificativa Quantitativa:** xG acumulado + solidez defensiva do mandante.

#### 🟡 Previsão 2 (Médio Risco / Valor Ótimo • Confiança 70%+):
* **Mercado:** Ex: Resultado Final (1X2) / Ambas Marcam / Over 2.5 Gols
* **Odd Estimada:** 1.65 a 2.25 (Padrão G1)
* **Justificativa Quantitativa:** Assimetria de retorno e pressão territorial no Starting XI.

#### 🔴 Previsão 3 (Alto Risco / Alta Assimetria • Confiança 50%+):
* **Mercado:** Ex: Jogador Marcar a Qualquer Momento / Handicap -1.5 / Over 3.5 Gols
* **Odd Estimada:** 2.30 a 4.00+
* **Justificativa Quantitativa:** Gatilho individual de artilheiro em sequência de gols.
`

---

## 🛠️ PARTE 3: SOLUÇÃO DO BUG DO PROGNÓSTICO MULTI-JOGOS

### ⚠️ Diagnóstico da Causa Raiz:
* Em prompts longos ou automações com listas de jogos, o modelo sofria esgotamento de tokens de saída ou perda de contexto sequencial ao processar o jogo 1 com profundidade máxima, ignorando os jogos subsequentes (2, 3, 4...).

### 🛡️ Protocolo de Execução Modular (Batch-Per-Game Architecture):
1. **Processamento Individualizado (Game-by-Game Loop):** Cada partida é tratada como uma unidade modular de execução independente.
2. **Buffer de Contexto Fechado:** Os dados do Jogo 1 são gravados e descarregados no ledger antes de iniciar a análise do Jogo 2.
3. **Validação de Completude:** O motor só considera a rodada finalizada se a contagem de jogos analisados for igual ao total de jogos selecionados.

---

## 🌐 WHITELIST OFICIAL DE COMPETIÇÕES
* 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League
* 🇪🇸 La Liga
* 🇮🇹 Serie A
* 🇩🇪 Bundesliga
* 🇫🇷 Ligue 1
* 🇪🇺 UEFA Champions League & Europa League
* 🇧🇷 Brasileirão Série A & Série B
* 🇵🇹 Liga Portugal
* 🇳🇱 Eredivisie
* 🇸🇦 Saudi Pro League
