# 🚀 Déploiement Vercel - Guide complet

## Option 1 : En 1 clic (RECOMMANDÉ)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Princeddn/Promptforge)

1. Clique sur le bouton ci-dessus
2. Connecte-toi avec GitHub
3. Ajoute ta clé `OPENAI_API_KEY`
4. Deploy !

## Option 2 : Via le dashboard

### 1. Connexion
- Va sur https://vercel.com
- Connecte-toi avec GitHub

### 2. Import du projet
- Clique "Add New... → Project"
- Sélectionne "Princeddn/Promptforge"
- Branche: `claude/promptforge-saas-015XFKtJ8psB1y662nQ1zR4q`

### 3. Variables d'environnement

Ajoute dans "Environment Variables" :

```
OPENAI_API_KEY=sk-votre-clé-ici
```

**Obtenir une clé OpenAI :**
- Va sur https://platform.openai.com/api-keys
- Crée une nouvelle clé
- Coût : ~0.01-0.02€ par génération

### 4. Déploiement
- Clique "Deploy"
- Attends 2-3 minutes
- Ton site sera sur : `https://promptforge-xxx.vercel.app`

## Option 3 : Via Vercel CLI

### Installation
```bash
npm install -g vercel
```

### Connexion
```bash
vercel login
```

### Premier déploiement
```bash
cd /home/user/Promptforge
vercel
```

Réponds aux questions :
- Set up and deploy? **Y**
- Which scope? **Ton compte**
- Link to existing project? **N**
- Project name? **promptforge**
- Directory? **./`**
- Override settings? **N**

### Ajouter les variables d'environnement
```bash
vercel env add OPENAI_API_KEY
```

Colle ta clé OpenAI quand demandé.

### Déploiement en production
```bash
vercel --prod
```

## 🔄 Mises à jour automatiques

Une fois déployé, chaque push sur ta branche GitHub déclenchera automatiquement un nouveau déploiement sur Vercel !

```bash
git add .
git commit -m "Update feature X"
git push
# → Vercel redéploie automatiquement
```

## 🌐 Domaine personnalisé (optionnel)

1. Dans Vercel → Settings → Domains
2. Ajoute ton domaine (ex: `promptforge.com`)
3. Configure les DNS chez ton registrar :
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

## 📊 Monitoring

Vercel offre automatiquement :
- ✅ Analytics
- ✅ Logs en temps réel
- ✅ Performance monitoring
- ✅ Error tracking

Accède-y via le dashboard Vercel.

## 🐛 Troubleshooting

### Build échoue
```bash
# Teste le build localement
npm run build
```

Si ça marche localement, vérifie :
- Variables d'environnement dans Vercel
- Version Node.js (doit être 18+)

### Erreur "OPENAI_API_KEY not found"
- Va dans Settings → Environment Variables
- Ajoute `OPENAI_API_KEY=sk-...`
- Redéploie

### Site lent
- Active Vercel Edge Functions
- Utilise le caching :
```typescript
export const revalidate = 3600; // 1 heure
```

## 💰 Coûts

- **Vercel Hobby** : GRATUIT
  - Bande passante illimitée
  - Builds illimités
  - HTTPS automatique

- **OpenAI API** : Pay-as-you-go
  - ~0.01-0.02€ par génération
  - ~5€/mois pour 500 générations

## ✅ Checklist finale

- [ ] Repo GitHub créé et code pushé
- [ ] Clé OpenAI obtenue
- [ ] Projet déployé sur Vercel
- [ ] Variable `OPENAI_API_KEY` configurée
- [ ] Site testé et fonctionnel
- [ ] Domaine personnalisé configuré (optionnel)

---

**Ton site est live !** 🎉

Partage-le sur :
- Twitter / X
- ProductHunt
- Reddit (r/SideProject, r/webdev)
- Dev.to
