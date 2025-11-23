# 🚀 Guide de démarrage rapide

Ce guide te permet de lancer PromptForge en **moins de 5 minutes**.

## Prérequis

- Node.js 18+ installé
- Une clé API OpenAI ou Gemini

## Installation en 4 étapes

### 1. Clone et installe

```bash
git clone https://github.com/ton-username/promptforge.git
cd promptforge
npm install
```

### 2. Configure ta clé API

```bash
cp .env.example .env.local
```

Édite `.env.local` et ajoute ta clé :

```env
# OpenAI (recommandé)
OPENAI_API_KEY=sk-your-key-here
AI_PROVIDER=openai

# OU Gemini (gratuit)
# GEMINI_API_KEY=your-key-here
# AI_PROVIDER=gemini
```

### 3. Lance l'app

```bash
npm run dev
```

### 4. Ouvre dans le navigateur

Va sur [http://localhost:3000](http://localhost:3000)

C'est tout ! 🎉

## Premier test

1. Clique sur "Commencer gratuitement"
2. Choisis le template "Dashboard Analytics"
3. Remplis le formulaire :
   - **Nom** : TaskFlow
   - **Description** : Gestion de tâches pour devs
   - **Audience** : Équipes tech 5-20 personnes
   - **Features** :
     ```
     Kanban board
     Sprints
     Intégration Git
     ```
   - **Monétisation** : Free + Pro à 15€/user/mois
4. Clique sur "Générer les prompts"
5. Attends 10-30 secondes
6. Tu reçois 8 prompts prêts à l'emploi !

## Utiliser les prompts

### Prompts Figma 🎨

1. Va sur [Figma](https://figma.com)
2. Crée un nouveau fichier
3. Utilise "Make Designs" ou un plugin IA
4. Colle le prompt Figma généré
5. Affine si nécessaire

### Prompts Claude 💻

1. Va sur [Claude.ai](https://claude.ai)
2. Commence une nouvelle conversation
3. Colle les prompts Claude un par un (dans l'ordre !)
4. Claude génère le code
5. Teste et itère

## Télécharger les prompts

Clique sur "Télécharger" pour obtenir un fichier Markdown avec tous les prompts.

Format :
```
# Prompts pour TaskFlow

## 1. Design complet UI/UX
[Prompt Figma]

## 2. Architecture et configuration
[Prompt Claude]

...
```

## Résolution de problèmes

### Erreur "API Key invalid"

→ Vérifie que ta clé API est correcte dans `.env.local`

### Erreur "Network error"

→ Vérifie ta connexion internet et les quotas API

### Prompts vides ou incomplets

→ Essaie de régénérer ou de fournir plus de détails

### L'app ne démarre pas

```bash
# Supprime node_modules et réinstalle
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Prochaines étapes

- [Voir des exemples de prompts](./EXAMPLES.md)
- [Déployer en production](./DEPLOYMENT.md)
- [Contribuer au projet](../README.md#contribution)

---

Besoin d'aide ? [Ouvre une issue](https://github.com/ton-username/promptforge/issues)
