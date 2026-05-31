<div align="center">

<img src="./1780107634402.jpg" width="280" alt="Dark-Angel"/>

# ⚡ Dark-Angel ⚡

> *"Dans l'ombre, je veille. Dans le silence, j'agis."*

[![Version](https://img.shields.io/badge/version-1.0.0-red.svg)](https://github.com/Black-Tempest/Tempest-Veldora/releases)
[![Node.js](https://img.shields.io/badge/Node.js-18+-darkgreen.svg)]()
[![Platform](https://img.shields.io/badge/platform-Messenger-blue.svg)]()
[![Status](https://img.shields.io/badge/status-actif-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-black.svg)](LICENSE)
[![Author](https://img.shields.io/badge/author-Black--Tempest-darkred.svg)](https://github.com/Black-Tempest)

</div>

---

## 🌑 Qui est Dark-Angel ?

**Dark-Angel** est un bot Messenger surpuissant, taillé dans l'ombre.  
Développé avec **Node.js**, il répond automatiquement aux messages Facebook Messenger avec rapidité et précision.

Inspiré par la puissance des ténèbres, **Dark-Angel** ne dort jamais. Il est toujours là, en attente — prêt à répondre à chaque message.

---

## ⚔️ Fonctionnalités

| Fonctionnalité | Statut |
|----------------|--------|
| 💬 Réponses automatiques aux messages | ✅ Actif |
| 🔁 Webhook Facebook Messenger | ✅ Actif |
| 🛡️ Vérification sécurisée des tokens | ✅ Actif |
| ⚡ Réponses ultra-rapides | ✅ Actif |
| 🌐 Hébergement cloud (Replit) | ✅ Supporté |
| 🧠 Commandes personnalisées | 🔧 En développement |
| 🎭 Personnalité configurable | 🔧 En développement |

---

## 🚀 Installation

### 📱 Depuis ton téléphone (Replit)
> La méthode la plus simple, aucun PC requis.

1. Va sur [replit.com](https://replit.com) et connecte-toi
2. Clique **+ Create Repl** → **Import from GitHub**
3. Colle : `https://github.com/Black-Tempest/Tempest-Veldora`
4. Va dans l'onglet **Secrets** et ajoute tes variables
5. Clique **▶ Run** — c'est tout !

### 💻 Depuis un PC
```bash
# 1. Cloner le repo
git clone https://github.com/Black-Tempest/Tempest-Veldora.git
cd Tempest-Veldora

# 2. Installer les dépendances
npm install

# 3. Configurer les variables
cp .env.example .env
# Édite le fichier .env avec tes tokens

# 4. Lancer le bot
npm start
```

---

## ⚙️ Configuration

Crée un fichier `.env` à la racine du projet :

```env
# Token de ta page Facebook
PAGE_ACCESS_TOKEN=ton_token_facebook_ici

# Mot secret que tu inventes toi-même
VERIFY_TOKEN=dark_angel_secret_2024

# Port du serveur (laisser 3000 par défaut)
PORT=3000
```

> ⚠️ **Ne partage JAMAIS ton `.env`** — il contient tes clés secrètes !

---

## 📁 Structure du projet

```
Tempest-Veldora/
│
├── 📄 index.js           ← Cœur du bot
├── 📦 package.json       ← Dépendances Node.js
├── 🔒 .env               ← Clés secrètes (privé)
├── 📝 .env.example       ← Modèle de configuration
├── 🚫 .gitignore         ← Fichiers ignorés par Git
├── 📜 README.md          ← Ce fichier
│
└── 📁 assets/
    └── 🖼️ dark-angel.jpg  ← Image du bot
```

---

## 🛠️ Commandes disponibles

```bash
npm start       # Lance le bot en production
npm run dev     # Lance avec redémarrage automatique
```

---

## 🔑 Obtenir tes tokens Facebook

<details>
<summary>📋 Clique ici pour voir les étapes</summary>

1. Va sur [developers.facebook.com](https://developers.facebook.com)
2. Clique **My Apps** → **Create App**
3. Choisis le type **Business**
4. Dans le dashboard, ajoute le produit **Messenger**
5. Connecte ta **Page Facebook**
6. Génère un **Page Access Token**
7. Copie-le dans ton `.env`
8. Configure le **Webhook** avec l'URL de ton Replit

</details>

---

## 📊 Stack technique

```
Runtime     →  Node.js 18+
Framework   →  Express.js
API         →  Facebook Messenger Platform
Hébergement →  Replit (cloud)
Langage     →  JavaScript (ES6+)
```

---

## 🗺️ Roadmap

- [x] Webhook Messenger fonctionnel
- [x] Réponses automatiques de base
- [ ] Commandes slash personnalisées
- [ ] Réponses avec images et boutons
- [ ] Système de menu interactif
- [ ] Support multi-pages Facebook
- [ ] Intégration IA pour réponses intelligentes

---

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée ta branche : `git checkout -b feature/ma-fonctionnalite`
3. Commit : `git commit -m "Ajout de ma fonctionnalité"`
4. Push : `git push origin feature/ma-fonctionnalite`
5. Ouvre une **Pull Request**

---

## 📜 Licence

Distribué sous licence **MIT**. Voir [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**⚡ Dark-Angel — Forgé dans l'ombre, déployé dans la lumière ⚡**

*by [Black-Tempest](https://github.com/Black-Tempest)*

</div>
￼Enter
