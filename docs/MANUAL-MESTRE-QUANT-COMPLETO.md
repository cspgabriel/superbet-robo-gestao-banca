# 🏛️ MANUAL MESTRE DE ENGENHARIA QUANTITATIVA & APOSTAS ESPORTIVAS V6.0
**Documento Consolidado Definitivo — Metodologias, Prompts, Gestão de Banca e Protocolos de Execução**
*Autor: Fundo Institucional Quant / Gabriel Alves & Equipe de Engenharia Preditiva*
*Data de Consolidação: 30 de Agosto de 2026*

---

## 📑 ÍNDICE GERAL DE CONTEÚDO

1. **Constituição Fundamental & Protocolo de Sobrevivência (Survival Rules)**
2. **Framework dos 11 Pilares de Análise Pré-Jogo e In-Play**
3. **Motor Matemático Billy Walters & Critério de Kelly Fracionário**
4. **Metodologia de Engenharia em "Criar Aposta" / Bet Builder (Multi-Mercados)**
5. **Auditoria Forense de Padrões: Anatomia dos Greens vs. Anatomia dos Reds**
6. **Prompt Master Quant V6.0 — Multi-Jogos & Bet Builder (Copy-Paste Universal)**
7. **Regras Operacionais de Execução no Terminal e Governança de Caixa**

---

# 1. 🛡️ CONSTITUIÇÃO FUNDAMENTAL & PROTOCOLO DE SOBREVIVÊNCIA

### 1.1 A REGRA DA PRIMAZIA DA SIMPLES E ASSIMETRIA POSITIVA
* **Regra de Ferro #1:** O foco principal de longo prazo deve ser em **Simples Institucionais G1** com valor esperado positivo ($+EV \ge 15\%$) ou em **Múltiplas Estruturadas de Correlação Positiva Direta**.
* **Piso de Valor:** Jamais arriscar capital relevante em odds esmagadas onde o retorno financeiro é menor que o risco de perda total (ex: arriscar R$ 15 para ganhar R$ 7 em time oscilante). Odd alvo preferencial: $\ge 1.80$ a $2.50+$.

### 1.2 ATIVAÇÃO DO SUPERPLACAR (GATILHO DE PROTEÇÃO)
* Sempre que disponível, apostar em mercados de **Resultado Final (1X2)** que contemplem o benefício **SuperPlacar** (pagamento antecipado com 2 gols de vantagem).
* *Vantagem Matemática:* Se a equipe abrir 2x0 aos 25' do 1T, o valor total é creditado instantaneamente no saldo livre, blindando o bilhete contra qualquer gol nos acréscimos ou reação tardia do adversário.

### 1.3 PROIBIÇÃO TOTAL DE UNDER NOS MINUTOS FINAIS
* **Achado Forense:** 30% de todos os Reds históricos decorreram de gols tardios entre os 88' e 90+5' em bilhetes de "Under" no final de partida.
* **Diretriz Inviolável:** **Tolerância Zero para mercados de Under Gols após os 70 minutos** em partidas com apenas 1 gol de diferença ou sob pressão de abafa.

---

# 2. 🏛️ FRAMEWORK DOS 11 PILARES DE ANÁLISE QUANTITATIVA

Para qualquer partida profissional ser aprovada pelo motor institucional, ela deve ser submetida a este pipeline rigoroso de 11 etapas:

```
                  ┌────────────────────────────────────────┐
                  │ 1. Forma Recente & Mando de Campo      │
                  ├────────────────────────────────────────┤
                  │ 2. Confrontos Diretos (H2H 3 Temporadas│
                  ├────────────────────────────────────────┤
                  │ 3. Métricas Individuais (Últimos 20J)  │
                  ├────────────────────────────────────────┤
                  │ 4. Escalações & Starting XI Confirmado │
                  ├────────────────────────────────────────┤
                  │ 5. Análise Tática (Gegenpressing/Bloco)│
                  ├────────────────────────────────────────┤
                  │ 6. Desfalques, Lesões e Suspensões     │
                  ├────────────────────────────────────────┤
                  │ 7. Análise de Arbitragem & Cartões     │
                  ├────────────────────────────────────────┤
                  │ 8. Condições Climáticas e do Gramado   │
                  ├────────────────────────────────────────┤
                  │ 9. Contexto Competitivo & Urgência     │
                  ├────────────────────────────────────────┤
                  │ 10. Movimentação de Linhas & Smart Money│
                  ├────────────────────────────────────────┤
                  │ 11. Cálculo de Fair Odds & +EV Final   │
                  └────────────────────────────────────────┘
```

### Detalhamento dos Pilares:
1. **Forma Recente (5 a 10 jogos):** Separar rigorosamente desempenho Casa vs. Fora.
2. **Confrontos Diretos (H2H):** Padrão histórico nos últimos 3 anos entre os mesmos treinadores/filosofias táticas.
3. **Métricas Individuais:** Finalizações no alvo por 90m ($\ge 1.2$), passes-chave, faltas cometidas e xA dos protagonistas.
4. **Starting XI (1h antes):** Nenhuma aposta em jogadores ou mercados de pressão é feita sem a confirmação das escalações oficiais.
5. **Análise Tática:** Formações táticas (ex: 3-5-2 vs 4-3-3), uso dos corredores laterais e velocidade de recomposição defensiva.
6. **Desfalques Críticos:** Ausência de volante de contenção (aumenta xGA e finalizações sofridas) ou centroavante referência.
7. **Arbitragem:** Média de faltas marcadas por jogo e cartões amarelos/vermelhos nos últimos 15 jogos apitados.
8. **Condições Climáticas:** Chuva intensa e gramado pesado reduzem conversão de xG e aumentam escanteios por finalizações espalmadas.
9. **Contexto Competitivo:** Urgência real de pontos (quem precisa vencer desde o minuto 1 vs. quem joga pelo empate).
10. **Smart Money / Steam Moves:** Acompanhar onde os grandes apostadores institucionais estão injetando liquidez e forçando queda de odds.
11. **Cálculo de Fair Odds (+EV):**
    $$EV = (P_{\text{real}} \times \text{Odd}_{\text{casa}}) - 1$$
    Apenas entradas com $+EV \ge 15\%$ são autorizadas.

---

# 3. 💰 MOTOR MATEMÁTICO BILLY WALTERS & GESTÃO DE BANCA

O método Billy Walters se baseia na assimetria de informação e dimensionamento de apostas via modelo fracionário do Critério de Kelly.

### 3.1 Fórmula do Critério de Kelly Fracionário:
$$f^* = \frac{b \cdot p - q}{b}$$

Onde:
* $b = \text{Odd Decimal} - 1$ (Retorno líquido por unidade apostada)
* $p = \text{Probabilidade Real Estimada pelo Modelo Quantitativo}$
* $q = 1 - p$ (Probabilidade de Perda)
* **Fração de Segurança Utilizada:** $0.15 \times f^*$ (Kelly Conservador de 15% para eliminar o risco de ruína).

### 3.2 Tabela de Alocação de Capital por Nível de Confiança:
| Categoria | Probabilidade Estimada | Odd Mínima | Stake Recomendada (% da Banca) | Saldo Livre Preservado |
| :--- | :---: | :---: | :---: | :---: |
| **G1 (Institucional Elite)** | $75\% - 85\%$ | $1.65 - 2.50$ | $15\% - 30\%$ | $70\% - 85\%$ |
| **G2 (Alavancagem de Valor)** | $60\% - 74\%$ | $2.40 - 3.80$ | $8\% - 15\%$ | $85\% - 92\%$ |
| **G3 (Tiro de Volatilidade / Troco)**| $40\% - 59\%$ | $3.50 - 8.00+$ | $1\% - 5\%$ (Troco) | $95\% - 99\%$ |

---

# 4. 🧩 METODOLOGIA DE ENGENHARIA EM "CRIAR APOSTA" (BET BUILDER)

A arte de montar bilhetes no recurso **Criar Aposta** baseia-se em **Correlação Estatística Positiva**: eventos que se alimentam mutuamente.

```
       [Time Favorito Pressiona pelas Pontas]
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
[Aumento de Finalizações]   [Aumento de Escanteios]
         │                           │
         ▼                           ▼
[Gols no 1T / 2T (HT/FT)]   [Linha de Cantos Superada]
```

### 4.1 As 4 Grandes Famílias de Mercados Correlacionados:
1. **Total de Gols HT & FT (Time & Geral):**
   - *1º Tempo (HT):* `Mais de 0.5 Gols HT` quando a soma de xG no 1T for $\ge 0.85$.
   - *Full-Time (FT):* `Favorito Mais de 0.5 ou 1.5 Gols FT` contra defesas vazadas.
2. **Escanteios do Time e Totais (HT/FT):**
   - Regra da Linha Conservadora: Aplicar desconto de $-2.0$ escanteios sobre a média projetada (ex: se o time projeta 7.2 cantos, selecionar `Mais de 4.5 ou 5.5 Cantos`).
3. **Métricas de Jogadores (Chutes no Alvo / Faltas):**
   - Selecionar `Mais de 0.5 Chutes no Gol` para atacantes que jogam 75m+ e chutam $\ge 2.2$ vezes por partida.
   - Selecionar `Mais de 0.5 Faltas Cometidas` em volantes/laterais marcadores em clássicos ou jogos pegados.
4. **Dupla Chance / Vencedor como Âncora:**
   - Usar `1X` ou `X2` para que o bilhete não seja destruído por um empate acidental no final.

---

# 5. 🔍 AUDITORIA FORENSE: PADRÕES DE GREENS VS. PADRÕES DE REDS

Auditoria empírica realizada com base em 47 bilhetes operados:

### 🟢 O QUE GERA GREEN CONSISTENTE:
1. **Simples Institucionais G1 no Favorito Casa com SuperPlacar** (Taxa de Acerto: **77.8%**).
2. **Mercados de Próximo Gol em time com 70%+ de pressão e momentum**.
3. **Escanteios de abafa em equipes que jogam pelos lados** (ex: Man United, Napoli, Palmeiras, Flamengo).
4. **Dupla Chance estruturada como âncora no Criar Aposta**.

### 🔴 O QUE GERA RED (PROIBIDO REPETIR):
1. **Múltiplas de 4 a 6 pernas forçadas sem correlação** (onde 1 perna quebra a odd inteira).
2. **Apostar em "Under Gols" após os 70m em jogos abertos** (30% dos reds vieram em gols aos 88'-95').
3. **Apostar em favoritos instáveis com odd muito baixa** (ex: arriscar R$ 15 para ganhar R$ 7 sem assimetria positiva).
4. **Apostar em 2º gol de equipe que já vence por 1x0 e não tem urgência de placar**.

---

# 6. 💻 PROMPT MASTER QUANT V6.0 (COPY-PASTE UNIVERSAL)

Copie e cole o bloco abaixo em qualquer IA para gerar análises e bilhetes estruturados:

```markdown
# 🏛️ PROMPT MASTER QUANT V6.0 — ESPECIALISTA EM "CRIAR APOSTA" & MULTI-MERCADOS

Você é o Diretor de Análise Esportiva Quantitativa & Engenheiro de Modelagem Preditiva de um Fundo Institucional de Apostas. Sua especialidade absoluta é a engenharia de bilhetes no recurso "CRIAR APOSTA" (Bet Builder), combinando correlações estatísticas positivas entre GOLS (HT/FT), ESCANTEIOS (Time/Total) e MÉTRICAS INDIVIDUAIS para extrair Valor Esperado Positivo (+EV >= 15%).

---

## 🎯 SEUS 6 PILARES DE ANÁLISE MULTI-MERCADO:

### 1. TOTAL DE GOLS HT & FT (Time & Geral)
- Gols no 1º Tempo (HT):
  * Mais de 0.5 Gols HT: Ativar quando xG do 1T for >= 0.85 ou favorito marca antes dos 30m em 70%+ dos jogos em casa.
  * Menos de 1.5 Gols HT: Ativar em clássicos truncados ou confrontos de defesas sólidas.
- Gols no Full-Time (FT):
  * Time Favorito Mais de 0.5 / 1.5 Gols FT: Baseado em xG favorável contra defesas frágeis.
  * Total Geral Mais de 1.5 ou 2.5 Gols FT: Validar pelo índice de conversão e finalizações dentro da área.

### 2. ENGENHARIA DE ESCANTEIOS (Corners HT/FT)
- Métrica Preditiva de Cantos: Analisar volume de finalizações bloqueadas e alas agressivos.
- Linha de Segurança Institucional (-2.0 cantos): Se o modelo projeta 10.5 cantos, a seleção DEVE ser Mais de 7.5 ou 8.5 Cantos.
- Escanteios do Favorito: Em abafa em casa, Mais de 4.5 ou 5.5 Cantos tem correlação direta de 82% com a vitória.

### 3. CHUTES NO GOL & FINALIZAÇÕES INDIVIDUAIS
- Analisar os últimos 10 jogos dos finalizadores primários.
- Selecionar Jogador X Mais de 0.5 Chutes no Alvo para atletas com média >= 1.2 chutes no gol por 90m.

### 4. DUPLA CHANCE & SUPERPLACAR COMO ÂNCORA
- Usar Chance Dupla (1X ou X2) ou Vencedor FT como o pilar estrutural do bilhete.

---

## 📊 ESTRUTURA PADRONIZADA DE SAÍDA:

Para cada partida analisada, gere 3 Níveis Estruturados de "CRIAR APOSTA":

### 🟢 NÍVEL 1 — ÂNCORA DE SEGURANÇA (Odd Alvo: 1.65 a 2.10 • Probabilidade: 80%+)
- Seleção 1: [Dupla Chance do Favorito ou Favorito Mais de 0.5 Gols FT]
- Seleção 2: [Total de Gols Seguro: Mais de 1.5 FT ou Menos de 4.5 FT]
- Seleção 3: [Escanteios Conservadores: Mais de 6.5 ou 7.5 Cantos Totais]
* Odd Projetada: ~1.85

### 🟡 NÍVEL 2 — ALAVANCAGEM DE VALOR (Odd Alvo: 2.40 a 3.80 • Probabilidade: 65%+)
- Seleção 1: [Favorito Vence FT ou Empate Anula]
- Seleção 2: [Favorito Mais de 1.5 Gols FT ou Gol no 1º Tempo HT]
- Seleção 3: [Favorito Mais de 4.5 Escanteios]
- Seleção 4: [Atacante Principal Mais de 0.5 Chutes no Alvo]
* Odd Projetada: ~2.85

### 🔴 NÍVEL 3 — SUPER COMBO DE PRESSÃO (Odd Alvo: 4.50 a 8.50 • Probabilidade: 45%+)
- Seleção 1: [Favorito Vence & Ambas Marcam / Over 2.5]
- Seleção 2: [Mais de 0.5 Gols no 1º Tempo HT]
- Seleção 3: [Total de Escanteios Mais de 9.5 ou 10.5 FT]
- Seleção 4: [Atacante Marca ou Mais de 1.5 Chutes no Gol]
* Odd Projetada: ~5.50

---

## 🚫 REGRAS INVIOLÁVEIS:
1. NUNCA colocar mercados que se anulam.
2. NUNCA apostar em Under Gols após os 70m em jogos com 1 gol de diferença.
3. NUNCA selecionar odds menores que 1.10 sem valor real.
4. SEMPRE verificar desfalques do Starting XI antes de aprovar chutes de jogadores.
```

---

# 7. ⚙️ REGRAS OPERACIONAIS DE EXECUÇÃO E GOVERNANÇA

1. **Persistência em Ledger:** Toda entrada executada deve ser registrada imediatamente nos arquivos `data/bets-YYYYMMDD.json` e `data/bets-YYYYMMDD.csv`.
2. **Sincronização em Tempo Real com GitHub Pages:** Cada nova aposta ou liquidação dispara automaticamente o build do `index.html` e commit no repositório.
3. **Monitoramento Automatizado via Cron:** Cronjobs em segundo plano inspecionam o placar minuto a minuto no Flashscore e o valor de cashout na casa de apostas.
4. **Preservação de Caixa Livre:** Nunca operar com 100% da banca em jogo; preservar no mínimo 30% a 50% de liquidez livre para oportunidades in-play de alto valor.

---
*Manual Mestre Consolidado — Versão 6.0 — Fundo Quant Institucional*
