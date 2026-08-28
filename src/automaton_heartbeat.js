const http = require("http");
const fs = require("fs");
const path = require("path");

const REPO_DIR = "c:\\\\Users\\\\cspga\\\\OneDrive\\\\Documentos\\\\CLAUDE CODE\\\\superbet-robo-gestao-banca";
const TARGET_BANKROLL = 100.00;

console.log("=================================================");
console.log("🤖 AUTOMATON QUANT HEARTBEAT DAEMON RUNNING");
console.log("🎯 TARGET GOAL: R$ " + TARGET_BANKROLL.toFixed(2));
console.log("=================================================");

let tickCount = 0;

function getChromeTabs() {
  return new Promise((resolve) => {
    http.get("http://127.0.0.1:9222/json", (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve([]);
        }
      });
    }).on("error", () => resolve([]));
  });
}

async function heartbeatTick() {
  tickCount++;
  const timeStr = new Date().toLocaleTimeString("pt-BR");

  try {
    const tabs = await getChromeTabs();
    const superbetTab = tabs.find(t => t.url && t.url.includes("superbet.bet.br"));

    console.log("[" + timeStr + "] 💓 Pulse #" + tickCount + " | Chrome Connected: " + tabs.length + " tabs | Superbet: " + (superbetTab ? "ONLINE" : "OFFLINE"));

    // Sync database state periodically
    if (tickCount % 4 === 0) {
      const betsPath = path.join(REPO_DIR, "data", "bets.json");
      if (fs.existsSync(betsPath)) {
        const bets = JSON.parse(fs.readFileSync(betsPath, "utf8"));
        bets.ultima_atualizacao = new Date().toISOString();
        bets.heartbeat_pulse = tickCount;
        fs.writeFileSync(betsPath, JSON.stringify(bets, null, 2), "utf8");
      }
    }
  } catch (err) {
    console.error("[" + timeStr + "] Error in pulse:", err.message);
  }

  setTimeout(heartbeatTick, 15000);
}

heartbeatTick();
