module.exports = {
  config: {
    name: "help",
    aliases: ["aide", "menu"],
    version: "1.0.0",
    author: "Veldora Tempest",
    countDown: 5,
    role: 0,
    shortDescription: "Affiche la liste des commandes",
    category: "info"
  },

  run: async ({ api, event, args, config }) => {
    const fs = require("fs-extra");
    const path = require("path");
    const commandsPath = path.join(__dirname);
    const files = fs.readdirSync(commandsPath).filter(f => f.endsWith(".js"));

    if (args[0]) {
      const cmdName = args[0].toLowerCase();
      const cmdFile = files.find(f => f.replace(".js", "") === cmdName);
      if (!cmdFile) return api.sendMessage(`❌ Commande "${cmdName}" introuvable.`, event.threadID);

      const cmd = require(path.join(commandsPath, cmdFile));
      const c = cmd.config;
      return api.sendMessage(
        `⚡ Dark-Angel — ${c.name}\n` +
        `${"─".repeat(25)}\n` +
        `📌 Description: ${c.shortDescription}\n` +
        `🏷️ Catégorie: ${c.category}\n` +
        `👤 Rôle requis: ${c.role === 0 ? "Tout le monde" : c.role === 1 ? "Admin groupe" : "Admin bot"}\n` +
        `⏱️ Cooldown: ${c.countDown}s\n` +
        `🔀 Alias: ${c.aliases?.join(", ") || "aucun"}`,
        event.threadID
      );
    }

    const categories = {};
    for (const file of files) {
      const cmd = require(path.join(commandsPath, file));
      const cat = cmd.config.category || "autres";
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(cmd.config.name);
    }

    let msg = `⚡ Dark-Angel — Menu\n${"─".repeat(25)}\n`;
    msg += `Prefix: ${config.prefix}\n\n`;

    for (const [cat, cmds] of Object.entries(categories)) {
      msg += `『 ${cat.toUpperCase()} 』\n`;
      cmds.forEach(cmd => msg += `  ${config.prefix}${cmd}\n`);
      msg += "\n";
    }

    msg += `${"─".repeat(25)}\n`;
    msg += `💡 Tape ${config.prefix}help [commande] pour plus d'infos`;

    api.sendMessage(msg, event.threadID);
  }
};

