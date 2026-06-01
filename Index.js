/**
 * Dark-Angel Messenger Bot by Veldora Tempest
 */

const express = require("express");
const { spawn } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("DARK-ANGEL RUNNING \n author: Veldora Tempest \n Status: smooth 🖤");
});

app.get("/ping", (req, res) => {
  res.send("Dark-Angel est vivant 🖤");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

function startProject() {
  const child = spawn("node", ["bot.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (code) => {
    if (code === 2) {
      console.log("Restarting Dark-Angel...");
      startProject();
    }
  });
}

startProject();

