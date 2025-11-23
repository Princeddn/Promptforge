# 🚀 Guide de déploiement

Déploie PromptForge en production en quelques minutes.

## Option 1 : Vercel (recommandé)

**Temps : 3 minutes**

### Pourquoi Vercel ?

- ✅ Déploiement en 1 clic
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Preview deployments
- ✅ 100% gratuit pour hobby projects

### Étapes

1. **Push ton code sur GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ton-username/promptforge.git
git push -u origin main
```

2. **Connecte Vercel**

- Va sur [vercel.com](https://vercel.com)
- Clique "New Project"
- Importe ton repo GitHub
- Vercel détecte automatiquement Next.js

3. **Ajoute les variables d'environnement**

Dans Vercel > Settings > Environment Variables :

```
OPENAI_API_KEY=sk-your-key-here
AI_PROVIDER=openai
```

4. **Deploy !**

Clique "Deploy" et attends 2 minutes.

Ton app sera live sur : `https://promptforge.vercel.app`

### Mises à jour automatiques

Chaque push sur `main` redéploie automatiquement ! 🎉

## Option 2 : Railway

**Temps : 5 minutes**

1. Va sur [railway.app](https://railway.app)
2. "New Project" > "Deploy from GitHub repo"
3. Sélectionne ton repo
4. Ajoute les variables d'environnement
5. Deploy

## Option 3 : Netlify

**Temps : 5 minutes**

1. Va sur [netlify.com](https://netlify.com)
2. "Add new site" > "Import from Git"
3. Connecte ton repo
4. Build command : `npm run build`
5. Publish directory : `.next`
6. Ajoute les variables d'environnement
7. Deploy

## Option 4 : VPS (DigitalOcean, Linode, etc.)

**Temps : 15-30 minutes**

### Prérequis

- Un serveur Ubuntu 22.04
- Nom de domaine (optionnel)

### Installation

```bash
# 1. SSH dans ton serveur
ssh root@ton-ip

# 2. Installe Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt-get install -y nodejs

# 3. Installe PM2
npm install -g pm2

# 4. Clone le projet
git clone https://github.com/ton-username/promptforge.git
cd promptforge

# 5. Installe les dépendances
npm install

# 6. Configure l'environnement
nano .env.local
# Ajoute OPENAI_API_KEY=...

# 7. Build
npm run build

# 8. Lance avec PM2
pm2 start npm --name "promptforge" -- start
pm2 save
pm2 startup

# 9. Configure Nginx
apt install nginx
nano /etc/nginx/sites-available/promptforge
```

**Configuration Nginx :**

```nginx
server {
    listen 80;
    server_name ton-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Active le site
ln -s /etc/nginx/sites-available/promptforge /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# SSL avec Certbot (optionnel)
apt install certbot python3-certbot-nginx
certbot --nginx -d ton-domaine.com
```

## Option 5 : Docker

**Temps : 10 minutes**

Crée un `Dockerfile` :

```dockerfile
FROM node:20-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Build et run :**

```bash
docker build -t promptforge .
docker run -p 3000:3000 -e OPENAI_API_KEY=sk-... promptforge
```

## Configuration domaine personnalisé

### Sur Vercel

1. Settings > Domains
2. Ajoute ton domaine
3. Configure les DNS chez ton registrar :
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### Sur VPS

Utilise Nginx + Certbot (voir Option 4)

## Variables d'environnement en production

**Obligatoires :**

```env
OPENAI_API_KEY=sk-...
AI_PROVIDER=openai
```

**Optionnelles :**

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry (monitoring)
SENTRY_DSN=https://...

# Limites
RATE_LIMIT_PER_HOUR=10
```

## Monitoring et logs

### Sur Vercel

- Vercel Analytics intégré
- Logs dans le dashboard

### Sentry (recommandé)

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Logflare / Logtail

Pour agréger les logs de production

## Backups

Si tu utilises un VPS :

```bash
# Script backup automatique
nano /root/backup-promptforge.sh
```

```bash
#!/bin/bash
DATE=$(date +%Y%m%d-%H%M%S)
cd /root/promptforge
git pull
tar -czf /root/backups/promptforge-$DATE.tar.gz .
find /root/backups -mtime +30 -delete
```

```bash
chmod +x /root/backup-promptforge.sh
crontab -e
# Ajoute : 0 3 * * * /root/backup-promptforge.sh
```

## Coûts estimés

| Service | Coût mensuel |
|---------|--------------|
| Vercel (hobby) | **Gratuit** |
| Railway (hobby) | **Gratuit** → 5$/mois |
| Netlify | **Gratuit** |
| DigitalOcean Droplet | 6$/mois |
| OpenAI API | ~5€/mois (500 générations) |

**Total recommandé : Gratuit avec Vercel + OpenAI pay-as-you-go**

## Checklist avant déploiement

- [ ] Variables d'environnement configurées
- [ ] Build local réussi (`npm run build`)
- [ ] Tests passent
- [ ] `.env.local` dans `.gitignore`
- [ ] README à jour
- [ ] Licence ajoutée

## Troubleshooting

### Build échoue sur Vercel

```bash
# Teste le build localement
npm run build
```

Si ça marche localement, vérifie :
- Variables d'environnement
- Version Node.js (doit être 18+)

### App lente en production

- Active Vercel Edge Config
- Ajoute du caching :
```typescript
export const revalidate = 3600 // 1h
```

### Erreurs API 429 (rate limit)

Configure un rate limiter :

```typescript
// middleware.ts
import { Ratelimit } from "@upstash/ratelimit";

export async function middleware(req: Request) {
  const ip = req.headers.get("x-forwarded-for");
  const { success } = await ratelimit.limit(ip);
  if (!success) return new Response("Too many requests", { status: 429 });
}
```

---

**Besoin d'aide ?** [Ouvre une issue](https://github.com/ton-username/promptforge/issues)
