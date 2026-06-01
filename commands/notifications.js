module.exports = {
  config: {
    name: "notifications",
    aliases: ["notif", "notifs"],
    version: "1.0.0",
    author: "Veldora Tempest",
    countDown: 5,
    role: 2,
    shortDescription: "Envoie une notification à tous les groupes",
    category: "admin"
  },

  run: async ({ api, event, args }) => {
    if (!args[0]) {
      return api.sendMessage("❌ Tu dois écrire un message.\nEx: -notifications Bonjour à tous !", event.threadID);
    }

    const message = args.join(" ");
    const threads = await api.getThreadList(100, null, ["INBOX"]);
    const groups = threads.filter(t => t.isGroup);

    if (groups.length === 0) {
      return api.sendMessage("❌ Aucun groupe trouvé.", event.threadID);
    }

    let sent = 0;
    for (const group of groups) {
      try {
        await api.sendMessage(`📢 | Notification Dark-Angel\n\n${message}`, group.threadID);
        sent++;
      } catch (e) {}
    }

    api.sendMessage(`✅ Notification envoyée dans ${sent} groupe(s).`, event.threadID);
  }
};
