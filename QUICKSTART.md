# ⚡ Quick Start - Loopengers Assistant

## 🎯 Démarrage en 3 Minutes

### Option 1 : Développement Local

```bash
# 1. Extraire le projet
tar -xzf loopengers-assistant.tar.gz
cd loopengers-assistant

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env.local
# Éditez .env.local et ajoutez votre clé OpenAI

# 4. Lancer l'application
npm run dev
```

Ouvrez http://localhost:3000

---

### Option 2 : Déploiement Vercel (Recommandé)

```bash
# 1. Initialiser Git
cd loopengers-assistant
git init
git add .
git commit -m "Initial commit"

# 2. Créer un repo GitHub
# Allez sur github.com → New repository → loopengers-assistant

# 3. Pousser le code
git remote add origin https://github.com/VOTRE-USERNAME/loopengers-assistant.git
git push -u origin main

# 4. Déployer sur Vercel
# Allez sur vercel.com
# Import → Sélectionnez votre repo
# Ajoutez la variable : OPENAI_API_KEY=sk-...
# Deploy !
```

✅ Votre app sera en ligne en 2-3 minutes !

---

## 🔑 Obtenir une Clé OpenAI

1. Allez sur https://platform.openai.com/api-keys
2. Créez un compte ou connectez-vous
3. Cliquez sur "Create new secret key"
4. Copiez la clé (commence par `sk-...`)
5. ⚠️ Ne la partagez JAMAIS publiquement

**Budget recommandé** : 5-10$ pour commencer (suffisant pour des centaines de tests)

---

## 📁 Structure du Projet

```
loopengers-assistant/
├── 📄 README.md              ← Documentation complète
├── 📄 DEPLOYMENT.md          ← Guide de déploiement détaillé
├── 📄 CORRECTIONS.md         ← Liste des corrections apportées
├── 📄 QUICKSTART.md          ← Ce fichier
├── 📄 package.json           ← Dépendances
├── 📄 next.config.js         ← Configuration Next.js
├── 📄 .env.example           ← Template variables d'env
│
├── 📂 app/                   ← Pages et routes
│   ├── layout.jsx            ← Layout principal
│   ├── page.jsx              ← Page d'accueil
│   ├── globals.css           ← Styles globaux
│   ├── 📂 assistant/
│   │   └── page.jsx          ← Page de l'assistant
│   └── 📂 api/               ← Routes API
│       ├── extract/route.js  ← Extraction via IA
│       ├── price/route.js    ← Calcul du prix
│       └── explain/route.js  ← Génération explication
│
├── 📂 components/            ← Composants React
│   ├── ChatBox.jsx           ← Interface de chat
│   └── VoiceRecorder.jsx     ← Enregistreur vocal
│
└── 📂 lib/                   ← Utilitaires
    └── openai.js             ← Client OpenAI
```

---

## ✅ Vérification Post-Installation

### Tester localement :

1. La page d'accueil s'affiche : http://localhost:3000 ✅
2. Cliquer sur "Ouvrir l'assistant vocal" ✅
3. Tester le mode vocal (autoriser le micro) ✅
4. Tester le mode texte ✅
5. Vérifier qu'un devis est généré ✅

### Vérifier sur Vercel :

1. L'URL fonctionne (ex: `https://loopengers-xxx.vercel.app`) ✅
2. Les variables d'environnement sont configurées ✅
3. Aucune erreur dans les logs Vercel ✅
4. L'assistant répond correctement ✅

---

## 🐛 Problèmes Fréquents

### "Module not found: 'openai'"
```bash
npm install openai
```

### "Invalid API key"
Vérifiez votre clé dans `.env.local` ou les variables Vercel

### "Microphone not working"
- Vérifiez les permissions du navigateur
- Utilisez HTTPS (Vercel le fait automatiquement)
- Utilisez Chrome, Edge ou Safari (pas Firefox)

### "Build failed on Vercel"
- Vérifiez que `OPENAI_API_KEY` est configurée
- Consultez les logs de build dans Vercel

---

## 🎨 Personnalisation

### Changer les couleurs :

Éditez `app/globals.css` et les styles inline dans les composants.

### Modifier le pricing :

Éditez `app/api/price/route.js` → fonction `calculatePrice()`

### Ajouter des champs :

Modifiez le prompt dans `app/api/extract/route.js`

---

## 📚 Documentation

- **README.md** : Vue d'ensemble complète
- **DEPLOYMENT.md** : Guide de déploiement pas à pas
- **CORRECTIONS.md** : Détail des corrections techniques

---

## 🆘 Support

- Issues GitHub : Ouvrez une issue
- Documentation Next.js : https://nextjs.org/docs
- Documentation OpenAI : https://platform.openai.com/docs
- Support Vercel : https://vercel.com/support

---

## ✨ Fonctionnalités

- 🎙️ Reconnaissance vocale (Web Speech API)
- ⌨️ Saisie textuelle
- 🤖 Extraction d'informations par IA (GPT-4o-mini)
- 💰 Calcul de prix automatique
- 💬 Explication naturelle du devis (GPT-4o)
- 📱 Interface responsive
- ⚡ Déploiement rapide sur Vercel

---

## 🚀 Prochaines Étapes

Après avoir déployé votre MVP :

1. 📊 Intégrer une vraie API de pricing
2. 🗄️ Ajouter une base de données (Supabase, MongoDB)
3. 🔐 Implémenter l'authentification (NextAuth.js)
4. 📍 Utiliser une vraie API de géolocalisation
5. 💳 Ajouter un système de paiement (Stripe)
6. 📧 Envoyer les devis par email
7. 📱 Créer une app mobile (React Native)

---

## 🎉 Félicitations !

Vous avez maintenant une application d'assistant vocal fonctionnelle !

**Temps total estimé** :
- Installation locale : 5 minutes
- Déploiement Vercel : 10 minutes

Besoin d'aide ? Consultez `DEPLOYMENT.md` pour le guide détaillé.

---

**Version** : 1.0.0  
**Dernière mise à jour** : Novembre 2024
