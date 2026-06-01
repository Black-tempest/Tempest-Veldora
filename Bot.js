const login = require("fca-unofficial");
const fs = require("fs-extra");
const path = require("path");
const config = require("./config.json");

const appstatePath = path.join(__dirname, "appstate.json");

if (!fs.existsSync(appstatePath)) {
  console.log("❌ appstate.json introuvable !");
  process.exit(1);
}

const appstate = JSON.parse(fs.readFileSync(appstatePath, "utf8"));

login({ appState: appstate }, (err, api) => {
  if (err) {
    console.log("❌ Erreur de connexion:", err);
    process.exit(2);
  }

  console.log("✅ Dark-Angel connecté !");

  api.setOptions({
    listenEvents: true,
    selfListen: false,
    logLevel: "error"
  });

  const commands = new Map();
  const commandsPath = path.join(__dirname, "commands");

  if (fs.existsSync(commandsPath)) {
    fs.readdirSync(commandsPath)
      .filter(file => file.endsWith(".js"))
      .forEach(file => {
        const cmd = require(path.join(commandsPath, file));
        commands.set(cmd.config.name.toLowerCase(), cmd);
        console.log(`📦 ${cmd.config.name} chargée`);
      });
  }

  api.listenMqtt((err, event) => {
    if (err) return;

    if (event.type === "message") {
      const message = event.body?.trim();
      if (!message || !message.startsWith(config.prefix)) return;

      const args = message.slice(config.prefix.length).trim().split(/\s+/);
      const commandName = args.shift().toLowerCase();
      const command = commands.get(commandName);

      if (!command) return;

      command.run({ api, event, args, config });
    }
  });
});

