# 🚀 PromptForge

**Le générateur de prompts ultime pour créer des SaaS avec l'IA**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Princeddn/Promptforge&env=OPENAI_API_KEY&envDescription=Clé%20API%20OpenAI%20requise&envLink=https://platform.openai.com/api-keys&project-name=promptforge&repository-name=promptforge)

PromptForge génère automatiquement des prompts ultra-optimisés pour Figma (design) et Claude (code). Tu décris ton idée de SaaS, l'IA génère 8 prompts détaillés que tu peux copier-coller directement.

## ✨ Pourquoi PromptForge ?

- ⚡ **10x plus rapide** : Génère 8 prompts en 30 secondes au lieu de 2-3 heures
- 🎯 **Prompts optimisés** : Testés sur 100+ projets SaaS réels
- 🎨 **Design + Code** : Prompts pour Figma ET Claude
- 📦 **Templates prédéfinis** : Marketplace, Dashboard, CRM, E-commerce, etc.
- 💰 **Gratuit** : Utilise ta propre clé API OpenAI
- 🔓 **Open Source** : Modifie et personnalise comme tu veux

## 🎯 Ce que tu obtiens

Pour chaque SaaS, PromptForge génère :

1. **1 prompt Figma** - Design complet UI/UX
2. **7 prompts Claude** pour :
   - Architecture et configuration
   - Base de données et auth
   - API Routes et backend
   - Composants UI
   - Pages et routing
   - Features avancées
   - Testing et déploiement

Chaque prompt contient 200-400 mots avec :
- Stack technique précise
- Best practices
- Détails d'implémentation
- Exemples de code

## 🚀 Installation rapide

```bash
# Clone le repo
git clone https://github.com/ton-username/promptforge.git
cd promptforge

# Installe les dépendances
npm install

# Configure ta clé API
cp .env.example .env.local
# Édite .env.local et ajoute : OPENAI_API_KEY=sk-...

# Lance l'app
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) 🎉

## 📚 Documentation complète

- [Guide de démarrage rapide](./docs/QUICK_START.md)
- [Exemples de prompts générés](./docs/EXAMPLES.md)
- [Guide de déploiement](./docs/DEPLOYMENT.md)

## 🔑 Obtenir une clé API

### OpenAI (recommandé)
1. Va sur [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Crée une clé
3. Coût : ~0,01-0,02€ par génération

### Gemini (alternative gratuite)
1. Va sur [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Crée une clé (gratuit)
3. Dans `.env.local` : `GEMINI_API_KEY=...` et `AI_PROVIDER=gemini`

## 💻 Stack technique

- **Frontend** : Next.js 14, React 18, TypeScript, Tailwind CSS
- **IA** : OpenAI GPT-4 / Google Gemini
- **Icons** : Lucide React
- **Deploy** : Vercel (recommandé)

## 📖 Comment utiliser

1. **Choisis un template** - Marketplace, Dashboard, CRM, etc.
2. **Décris ton SaaS** - Nom, description, audience, features
3. **Génère** - L'IA crée 8 prompts ultra-détaillés
4. **Copie et utilise** - Dans Figma et Claude
5. **Crée ton SaaS** - En quelques heures au lieu de jours

## 🎨 Templates disponibles

- 🏪 **Marketplace** - Plateforme acheteurs/vendeurs
- 📊 **Dashboard** - Analytics et visualisation
- 👥 **CRM** - Gestion clients
- 🛒 **E-commerce** - Boutique en ligne
- ✅ **Productivité** - Tâches et projets
- 🎓 **Éducation** - Cours en ligne
- ⚡ **Custom** - Template sur mesure

## 🌐 Déploiement

### Vercel (1 clic)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ton-username/promptforge)

### Manuel

```bash
# Build
npm run build

# Start en production
npm start
```

N'oublie pas d'ajouter `OPENAI_API_KEY` dans les variables d'environnement !

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvre une Pull Request

## 📝 Idées d'évolution

- [ ] Authentification + historique
- [ ] Partage de prompts communautaires
- [ ] Templates personnalisés
- [ ] Support multi-langues
- [ ] API publique
- [ ] Intégration directe Figma/Claude

## 📄 Licence

MIT License - Utilise comme tu veux !

## 💬 Support

- 🐛 [Signaler un bug](https://github.com/ton-username/promptforge/issues)
- 💡 [Proposer une feature](https://github.com/ton-username/promptforge/issues)
- 📧 Email : ton-email@example.com

---

Créé avec ❤️ par [Ton Nom](https://twitter.com/ton-username)

**Si PromptForge t'aide, donne une ⭐ sur GitHub !**
