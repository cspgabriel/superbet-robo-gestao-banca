# Dashboard V2 — Validation Desk

Dashboard independente do histórico da raiz do repositório. Ele existe para registrar e validar cenários em `SIMULATION_ONLY` no navegador local.

- nenhuma ação é enviada a qualquer site;
- os dados ficam no `localStorage` deste navegador;
- a banca de R$50 é declarada pelo operador e não é uma conciliação com a casa;
- uma validação aprovada não é uma recomendação nem garantia de retorno.

## Teste

```bash
node --test v2/engine.test.js
```
