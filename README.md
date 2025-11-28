# 🚚 Loopengers - Assistant Vocal pour Devis Transport

Application Next.js avec assistant vocal pour générer des devis de transport instantanés.

## ✨ Fonctionnalités

- 🎙️ **Reconnaissance vocale** : Parlez pour décrire votre objet à transporter
- ⌨️ **Saisie textuelle** : Alternative au mode vocal
- 🤖 **IA intelligente** : Extraction automatique des informations (dimensions, poids, trajet)
- 💰 **Calcul de prix** : Tarification automatique basée sur les paramètres
- 💬 **Explication claire** : Présentation humaine et détaillée du devis

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparation

1. **Cloner ou créer le projet** :
   ```bash
   # Créez un nouveau dépôt Git
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Pusher sur GitHub** :
   ```bash
   # Créez un repo sur GitHub puis :
   git remote add origin https://github.com/VOTRE-USERNAME/loopengers-assistant.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Configuration Vercel

1. **Connectez-vous à Vercel** : https://vercel.com

2. **Importez votre projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository GitHub

3. **Configurez les variables d'environnement** :
   
   Dans les settings du projet Vercel, ajoutez :
   
   ```
   OPENAI_API_KEY=sk-votre-clé-openai
   NEXT_PUBLIC_OPENAI_KEY=sk-votre-clé-openai
   ```

   **⚠️ IMPORTANT** : Pour obtenir votre clé OpenAI :
   - Rendez-vous sur https://platform.openai.com/api-keys
   - Créez une nouvelle clé API
   - Copiez-la immédiatement (elle ne sera plus visible après)

4. **Déployez** :
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes
   - ✅ Votre app est en ligne !

## 🛠️ Développement Local

### Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn
- Clé API OpenAI

### Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Créer le fichier .env.local
cp .env.example .env.local

# 3. Éditer .env.local et ajouter votre clé OpenAI
# OPENAI_API_KEY=sk-...
# NEXT_PUBLIC_OPENAI_KEY=sk-...

# 4. Lancer le serveur de développement
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur.

## 📁 Structure du Projet

```
loopengers-assistant/
├── app/
│   ├── layout.jsx              # Layout principal
│   ├── page.jsx                # Page d'accueil
│   ├── globals.css             # Styles globaux
│   ├── assistant/
│   │   └── page.jsx            # Page de l'assistant
│   └── api/
│       ├── extract/
│       │   └── route.js        # Extraction des infos via IA
│       ├── price/
│       │   └── route.js        # Calcul du prix
│       └── explain/
│           └── route.js        # Génération de l'explication
├── components/
│   ├── ChatBox.jsx             # Interface de chat
│   └── VoiceRecorder.jsx       # Enregistreur vocal
├── lib/
│   └── openai.js               # Client OpenAI
├── package.json
├── next.config.js
└── .env.example
```

## 🔧 Configuration

### Variables d'environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `OPENAI_API_KEY` | Clé API OpenAI (serveur) | ✅ Oui |
| `NEXT_PUBLIC_OPENAI_KEY` | Clé API OpenAI (client) | ✅ Oui |
| `PRICING_ENGINE_URL` | URL de votre API de pricing personnalisée | ❌ Non |
| `PRICING_ENGINE_SECRET` | Token d'authentification pour l'API | ❌ Non |

### Personnalisation du Pricing

Le calcul de prix est actuellement simulé dans `app/api/price/route.js`.

Pour utiliser votre propre API de pricing :

1. Décommentez le code dans `app/api/price/route.js`
2. Configurez les variables `PRICING_ENGINE_URL` et `PRICING_ENGINE_SECRET`

## 🎯 Utilisation

1. **Accédez à l'application** : Cliquez sur "Ouvrir l'assistant vocal"

2. **Mode Vocal** :
   - Cliquez sur "🎙️ Parler"
   - Autorisez l'accès au microphone
   - Parlez naturellement (ex: "Je veux transporter un canapé de Paris à Lyon")
   - Cliquez sur "⏹️ Arrêter"

3. **Mode Texte** :
   - Tapez votre demande dans le champ de saisie
   - Appuyez sur Entrée ou cliquez sur "Envoyer"

4. **Recevez votre devis** :
   - L'assistant analyse votre demande
   - Calcule le prix
   - Vous présente le devis de manière claire

## 🐛 Résolution des Problèmes

### "Votre navigateur ne supporte pas la reconnaissance vocale"

- Utilisez Chrome, Edge ou Safari
- Vérifiez que vous êtes en HTTPS (Vercel le fait automatiquement)

### "Erreur lors de l'extraction des données"

- Vérifiez que votre clé OpenAI est valide
- Assurez-vous d'avoir des crédits sur votre compte OpenAI

### Build échoue sur Vercel

- Vérifiez que toutes les variables d'environnement sont configurées
- Consultez les logs de build dans Vercel

## 📝 Technologies Utilisées

- **Next.js 14** : Framework React
- **OpenAI GPT-4** : Intelligence artificielle
- **Web Speech API** : Reconnaissance vocale
- **Vercel** : Hébergement et déploiement

## 🔒 Sécurité

⚠️ **Important** :
- Ne commitez JAMAIS vos clés API dans Git
- Utilisez toujours des variables d'environnement
- Le `.env.local` est dans `.gitignore` par défaut

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez la documentation OpenAI : https://platform.openai.com/docs

## 📄 Licence

MIT License - Libre d'utilisation

---

Développé avec ❤️ pour Loopengers
