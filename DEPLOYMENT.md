# 🚀 Guide de Déploiement Vercel - Étape par Étape

Ce guide vous accompagne pour déployer votre application sur Vercel en 10 minutes.

## ✅ Checklist Pré-Déploiement

Avant de commencer, assurez-vous d'avoir :

- [ ] Un compte GitHub (gratuit)
- [ ] Un compte Vercel (gratuit) - https://vercel.com
- [ ] Une clé API OpenAI - https://platform.openai.com/api-keys
- [ ] Git installé sur votre ordinateur

## 📋 Étape 1 : Obtenir une Clé API OpenAI

1. Rendez-vous sur https://platform.openai.com/api-keys
2. Connectez-vous ou créez un compte
3. Cliquez sur "Create new secret key"
4. Donnez-lui un nom (ex: "Loopengers Assistant")
5. **Copiez la clé immédiatement** (elle commence par `sk-...`)
6. ⚠️ Gardez-la en sécurité, vous en aurez besoin

💰 **Budget** : OpenAI facture à l'utilisation. Pour tester, 5-10$ de crédit suffisent largement.

## 📋 Étape 2 : Préparer le Code sur GitHub

### Option A : Via l'interface GitHub (le plus simple)

1. Allez sur https://github.com
2. Cliquez sur le bouton "+" en haut à droite → "New repository"
3. Nommez le repository : `loopengers-assistant`
4. Choisissez "Private" si vous voulez que ce soit privé
5. NE PAS initialiser avec README (on a déjà les fichiers)
6. Cliquez sur "Create repository"

7. **Uploadez vos fichiers** :
   - Cliquez sur "uploading an existing file"
   - Glissez-déposez TOUS les fichiers du projet
   - ⚠️ NE PAS uploader le fichier `.env.local` (s'il existe)
   - Écrivez un message de commit : "Initial commit"
   - Cliquez sur "Commit changes"

### Option B : Via la ligne de commande

```bash
# Dans le dossier de votre projet
git init
git add .
git commit -m "Initial commit"

# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/loopengers-assistant.git
git branch -M main
git push -u origin main
```

## 📋 Étape 3 : Déployer sur Vercel

### 3.1 Connexion à Vercel

1. Allez sur https://vercel.com
2. Cliquez sur "Sign Up" ou "Log In"
3. **Connectez-vous avec GitHub** (option recommandée)
4. Autorisez Vercel à accéder à vos repositories

### 3.2 Importer le Projet

1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez `loopengers-assistant`
4. Cliquez sur **"Import"**

### 3.3 Configurer le Projet

1. **Framework Preset** : Next.js (détecté automatiquement) ✅
2. **Root Directory** : `.` (laisser par défaut)
3. **Build Command** : `npm run build` (auto)
4. **Output Directory** : `.next` (auto)

### 3.4 Ajouter les Variables d'Environnement

⚠️ **ÉTAPE CRUCIALE** - Sans cela, l'app ne fonctionnera pas !

1. Développez la section **"Environment Variables"**

2. Ajoutez la première variable :
   ```
   Nom  : OPENAI_API_KEY
   Valeur : sk-votre-clé-complète-ici
   ```

3. Ajoutez la deuxième variable :
   ```
   Nom  : NEXT_PUBLIC_OPENAI_KEY
   Valeur : sk-votre-clé-complète-ici
   ```
   
   ℹ️ Oui, c'est la même clé pour les deux variables.

4. Sélectionnez **tous les environnements** : Production, Preview, Development

### 3.5 Déployer !

1. Cliquez sur le gros bouton bleu **"Deploy"**
2. ☕ Attendez 2-3 minutes (vous verrez les logs de build)
3. ✅ Quand vous voyez "Congratulations!", c'est prêt !

### 3.6 Accéder à votre Application

1. Cliquez sur le screenshot de votre app
2. Ou cliquez sur **"Visit"**
3. Votre app est en ligne à l'URL : `https://loopengers-assistant-xxx.vercel.app`

## 🎉 Étape 4 : Tester l'Application

1. Ouvrez votre app déployée
2. Cliquez sur "Ouvrir l'assistant vocal"
3. Testez le mode vocal :
   - Cliquez sur "🎙️ Parler"
   - Autorisez le microphone (une seule fois)
   - Dites : "Je veux transporter un canapé de Paris à Lyon"
4. Testez le mode texte :
   - Tapez une demande
   - Cliquez sur "Envoyer"

## 🔧 Étape 5 : Personnaliser le Domaine (Optionnel)

1. Dans votre projet Vercel, allez dans **"Settings"** → **"Domains"**
2. Cliquez sur **"Add"**
3. Entrez votre domaine personnalisé (ex: `assistant.loopengers.com`)
4. Suivez les instructions pour configurer le DNS

## 🐛 Problèmes Courants

### ❌ "Build failed"

**Cause** : Variables d'environnement manquantes

**Solution** :
1. Allez dans Settings → Environment Variables
2. Vérifiez que `OPENAI_API_KEY` et `NEXT_PUBLIC_OPENAI_KEY` sont présentes
3. Cliquez sur "Redeploy" dans l'onglet Deployments

### ❌ "Erreur lors de l'extraction"

**Cause** : Clé API invalide ou sans crédits

**Solution** :
1. Vérifiez votre clé sur https://platform.openai.com/api-keys
2. Vérifiez votre solde : https://platform.openai.com/usage
3. Rechargez des crédits si nécessaire

### ❌ "La reconnaissance vocale ne fonctionne pas"

**Causes possibles** :
- Navigateur non supporté → Utilisez Chrome, Edge ou Safari
- Permission microphone refusée → Autorisez dans les paramètres du navigateur
- HTTP au lieu de HTTPS → Vercel utilise HTTPS par défaut, c'est bon ✅

### ❌ "Module not found: Can't resolve '@/...'"

**Cause** : Alias de chemin non configuré

**Solution** : Le fichier `jsconfig.json` devrait être présent. Si le problème persiste :
1. Vérifiez que `jsconfig.json` existe à la racine
2. Redéployez le projet

## 🔄 Mises à Jour et Redéploiement

### Pour mettre à jour votre app :

1. Modifiez votre code localement
2. Commitez et pushez sur GitHub :
   ```bash
   git add .
   git commit -m "Description de vos changements"
   git push
   ```
3. Vercel redéploie automatiquement ! 🎉

### Pour redéployer manuellement :

1. Allez dans l'onglet "Deployments"
2. Cliquez sur "..." à droite du dernier déploiement
3. Cliquez sur "Redeploy"

## 📊 Monitoring

### Voir les logs en temps réel :

1. Dans Vercel, ouvrez votre projet
2. Allez dans "Deployments"
3. Cliquez sur le déploiement actuel
4. Vous verrez tous les logs de build et runtime

### Analytics (optionnel) :

1. Dans Settings → Analytics
2. Activez Vercel Analytics
3. Suivez les performances et le trafic

## 💡 Conseils Pro

1. **Testez localement d'abord** :
   ```bash
   npm run dev
   ```
   Corrigez les erreurs avant de déployer.

2. **Utilisez les Preview Deployments** :
   - Chaque push sur une branche crée un aperçu
   - Testez avant de merger en production

3. **Configurez les variables par environnement** :
   - Production : clé API avec quota élevé
   - Preview/Dev : clé API de test

4. **Surveillez votre usage OpenAI** :
   - https://platform.openai.com/usage
   - Configurez des alertes de budget

## 🎓 Ressources Utiles

- Documentation Vercel : https://vercel.com/docs
- Documentation Next.js : https://nextjs.org/docs
- Documentation OpenAI : https://platform.openai.com/docs
- Support Vercel : https://vercel.com/support

## ✅ Checklist Finale

Avant de considérer le déploiement comme terminé :

- [ ] L'app est accessible via l'URL Vercel
- [ ] La page d'accueil s'affiche correctement
- [ ] L'assistant vocal fonctionne
- [ ] Les devis sont générés sans erreur
- [ ] Les logs Vercel ne montrent pas d'erreur critique
- [ ] Vous avez testé avec plusieurs types de demandes

## 🎉 Félicitations !

Votre application est maintenant en ligne et opérationnelle !

Pour toute question, consultez les logs Vercel ou la documentation OpenAI.

---

**Prochaines étapes suggérées :**
- Personnaliser le design
- Ajouter une vraie API de pricing
- Implémenter un système de sauvegarde des devis
- Ajouter l'authentification utilisateur
