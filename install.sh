#!/bin/bash

echo "🚀 Installation de PromptForge..."
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérification Node.js
echo "📦 Vérification des prérequis..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé${NC}"
    echo "Installe Node.js 18+ depuis https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version 18+ requis (actuellement: $(node -v))${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node -v)${NC}"

# Installation dépendances
echo ""
echo "📥 Installation des dépendances..."
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Dépendances installées${NC}"

# Configuration .env
echo ""
if [ ! -f .env.local ]; then
    echo "⚙️  Configuration de l'environnement..."
    cp .env.example .env.local
    echo -e "${BLUE}📝 Édite .env.local et ajoute ta clé API OpenAI${NC}"
else
    echo -e "${GREEN}✓ .env.local existe déjà${NC}"
fi

# Succès
echo ""
echo -e "${GREEN}🎉 Installation terminée !${NC}"
echo ""
echo "Prochaines étapes :"
echo -e "1. Édite ${BLUE}.env.local${NC} et ajoute ta clé API"
echo -e "2. Lance ${BLUE}npm run dev${NC}"
echo -e "3. Ouvre ${BLUE}http://localhost:3000${NC}"
echo ""
echo "📚 Documentation : ./docs/QUICK_START.md"
echo ""
