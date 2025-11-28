#!/bin/bash

# Script de vérification du projet Loopengers Assistant
# Usage: bash verify.sh

echo "🔍 Vérification du projet Loopengers Assistant"
echo "=============================================="
echo ""

# Compteur d'erreurs
ERRORS=0

# Fonction pour checker un fichier
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1"
    else
        echo "❌ MANQUANT: $1"
        ((ERRORS++))
    fi
}

# Fonction pour checker un dossier
check_dir() {
    if [ -d "$1" ]; then
        echo "✅ $1/"
    else
        echo "❌ MANQUANT: $1/"
        ((ERRORS++))
    fi
}

echo "📁 Vérification de la structure..."
check_file "package.json"
check_file "next.config.js"
check_file "jsconfig.json"
check_file ".env.example"
check_file ".gitignore"
check_file "README.md"
check_file "DEPLOYMENT.md"

echo ""
echo "📂 Vérification du dossier app/..."
check_file "app/layout.jsx"
check_file "app/page.jsx"
check_file "app/globals.css"

echo ""
echo "📂 Vérification du dossier app/assistant/..."
check_dir "app/assistant"
check_file "app/assistant/page.jsx"

echo ""
echo "📂 Vérification des routes API..."
check_dir "app/api"
check_dir "app/api/extract"
check_file "app/api/extract/route.js"
check_dir "app/api/price"
check_file "app/api/price/route.js"
check_dir "app/api/explain"
check_file "app/api/explain/route.js"

echo ""
echo "📂 Vérification du dossier components/..."
check_dir "components"
check_file "components/ChatBox.jsx"
check_file "components/VoiceRecorder.jsx"

echo ""
echo "📂 Vérification du dossier lib/..."
check_dir "lib"
check_file "lib/openai.js"

echo ""
echo "=============================================="
if [ $ERRORS -eq 0 ]; then
    echo "✅ Tous les fichiers sont présents!"
    echo ""
    echo "🚀 Prochaines étapes:"
    echo "1. Copier .env.example vers .env.local"
    echo "2. Ajouter votre clé OpenAI dans .env.local"
    echo "3. Exécuter: npm install"
    echo "4. Exécuter: npm run dev"
    echo "5. Ou déployer sur Vercel (voir DEPLOYMENT.md)"
else
    echo "❌ $ERRORS fichier(s) manquant(s)!"
    echo "Vérifiez que tous les fichiers ont été créés."
fi
echo "=============================================="
