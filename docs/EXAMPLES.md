# 📝 Exemples de prompts générés

Voici des exemples de prompts générés par PromptForge pour différents types de SaaS.

## Exemple 1 : Dashboard Analytics

### Input utilisateur

```
Nom : TaskFlow
Type : Dashboard Analytics
Description : Application de gestion de tâches pour équipes tech
Audience : Équipes de développement 5-20 personnes
Features :
- Kanban board avec drag & drop
- Sprints et planning
- Intégration Git (GitHub/GitLab)
- Time tracking
- Reporting et analytics
Monétisation : Free (5 users) + Pro à 15€/user/mois
```

### Prompt Figma généré (extrait)

```
Crée un design complet pour "TaskFlow", un SaaS de gestion de tâches
pour équipes tech de 5-20 personnes.

**Objectif:** Interface moderne, intuitive et productivité-focused.

**Pages à designer:**
1. Landing page
   - Hero avec démo interactive du Kanban
   - Features : Board, Sprints, Git integration, Analytics
   - Pricing : Free vs Pro
   - CTA : "Essai gratuit 14 jours"

2. Dashboard principal
   - Navigation latérale : Boards, Sprints, Reports, Settings
   - Vue Kanban : colonnes TODO/IN PROGRESS/DONE avec cards
   - Filtres : Par sprint, assignee, label, date
   - Quick actions : New task, New sprint

3. Page Sprint Planning
   - Timeline avec sprints
   - Drag & drop des tâches
   - Vélocité et burndown chart

**Style:**
- Palette : #2563eb (primary blue), #10b981 (success green),
  #f59e0b (warning), #ef4444 (urgent)
- Typographie : Inter pour UI, JetBrains Mono pour code
- Spacing : 4/8/16/24/32px
- Dark mode par défaut avec option light

**Composants UI:**
- Task cards : titre, assignee avatar, labels, time estimate
- Status badges : TODO/IN PROGRESS/DONE
- Buttons : Primary (gradient blue), Secondary (gray), Danger (red)
- Modals : Create task, Sprint details, Settings
...
```

### Prompt Claude généré (extrait)

```
Tu es un expert développeur fullstack spécialisé en Next.js et React.

Crée "TaskFlow", un SaaS de gestion de tâches pour équipes tech
de 5-20 personnes.

**Stack technique:**
- Frontend: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- UI: DnD Kit (drag & drop), Recharts (analytics), Lucide icons
- Backend: Next.js API Routes, tRPC pour type safety
- Database: PostgreSQL avec Prisma ORM
- Auth: NextAuth.js (GitHub, Google OAuth)
- Real-time: WebSockets avec Socket.io
- Cache: Redis pour performance
- Déploiement: Vercel + Supabase (PostgreSQL)

**Architecture du projet:**
```
taskflow/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── boards/
│   │   ├── sprints/
│   │   └── reports/
│   └── api/
│       ├── auth/
│       ├── tasks/
│       ├── sprints/
│       └── analytics/
├── components/
│   ├── kanban/
│   ├── sprints/
│   └── ui/
├── lib/
│   ├── db/
│   ├── auth/
│   └── utils/
└── prisma/
    └── schema.prisma
```

**Schema Prisma:**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  tasks     Task[]
  team      Team     @relation(fields: [teamId], references: [id])
  teamId    String
  createdAt DateTime @default(now())
}

model Board {
  id          String   @id @default(cuid())
  name        String
  description String?
  columns     Column[]
  team        Team     @relation(fields: [teamId], references: [id])
  teamId      String
  createdAt   DateTime @default(now())
}

model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      Status   @default(TODO)
  priority    Priority @default(MEDIUM)
  estimate    Int?
  assignee    User?    @relation(fields: [assigneeId], references: [id])
  assigneeId  String?
  sprint      Sprint?  @relation(fields: [sprintId], references: [id])
  sprintId    String?
  createdAt   DateTime @default(now())
}

enum Status {
  TODO
  IN_PROGRESS
  DONE
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}
```

**Features à implémenter:**

1. **Kanban Board interactif**
   - Drag & drop avec @dnd-kit/core
   - Colonnes personnalisables
   - Real-time updates via WebSockets
   - Filtres : assignee, sprint, label, date

2. **Sprint Planning**
   - Création de sprints avec dates
   - Assignment de tâches au sprint
   - Calcul automatique de vélocité
   - Burndown chart avec Recharts

3. **Intégration Git**
   - Connexion GitHub/GitLab OAuth
   - Sync auto des commits avec tasks
   - Affichage des PRs liées
   - Webhooks pour updates

4. **Analytics**
   - Dashboard avec KPIs
   - Graphiques de productivité
   - Export PDF/CSV
   - Comparaison sprints

**Best practices:**
- TypeScript strict mode
- Server Components par défaut
- API Routes avec validation Zod
- Error boundaries
- Loading states
- Optimistic updates
- Rate limiting
- CSRF protection

**Monétisation:**
Freemium model:
- Free: 5 users, 3 boards
- Pro (15€/user/mois): unlimited users/boards, analytics, integrations

Implémente avec Stripe Checkout et webhooks pour subscription management.

Génère le code complet, production-ready avec commentaires.
```

## Exemple 2 : Marketplace

### Input utilisateur

```
Nom : SkillSwap
Type : Marketplace
Description : Plateforme d'échange de compétences entre freelances
Audience : Freelances créatifs et tech
Features :
- Profils complets avec portfolio
- Système d'offres et demandes
- Messagerie sécurisée
- Système de reviews
- Paiement intégré
Monétisation : Commission 10% sur chaque échange
```

### Prompts générés

Les prompts incluront :
- Design Figma avec pages marketplace, profils, messagerie
- Stack Next.js + Stripe pour paiements
- Schema avec Users, Services, Bookings, Reviews
- Système de messaging real-time
- Payment flow avec escrow
- Rating system
- etc.

## Exemple 3 : CRM

### Input utilisateur

```
Nom : ClientHub
Type : CRM
Description : CRM simple pour freelances et petites agences
Audience : Freelances et agences 1-10 personnes
Features :
- Fiches contacts enrichies
- Pipeline de ventes visuel
- Email tracking
- Tâches et rappels
- Facturation simple
Monétisation : 29€/mois par utilisateur
```

### Prompts générés

Les prompts incluront :
- Design avec liste contacts, pipeline Kanban, formulaires
- Stack avec Next.js + tRPC + Prisma
- Intégration email (SendGrid/Resend)
- Schema CRM complet
- Système de facturation
- Dashboard analytics
- etc.

## Tips pour de meilleurs prompts

### ✅ Bonne description

```
Description : Application de suivi de fitness avec plans personnalisés,
tracking nutrition, et communauté. Interface simple et motivante.
```

### ❌ Description trop vague

```
Description : App de sport
```

### ✅ Bonnes features

```
Features :
- Scan de codes-barres pour nutrition
- Plans d'entraînement IA personnalisés
- Social feed avec challenges
- Intégration Apple Health/Google Fit
- Graphiques de progression
```

### ❌ Features trop génériques

```
Features :
- Profils
- Dashboard
```

## Personnalisation post-génération

Tu peux demander à Claude de :

1. **Ajuster le design**
   ```
   Garde le même concept mais rends le design plus minimaliste
   avec une palette pastel
   ```

2. **Changer la stack**
   ```
   Remplace Prisma par Drizzle ORM et utilise PlanetScale
   au lieu de PostgreSQL
   ```

3. **Ajouter des features**
   ```
   Ajoute un système de notifications push avec Firebase
   Cloud Messaging
   ```

4. **Simplifier**
   ```
   Version MVP sans analytics ni intégrations tierces,
   juste les features core
   ```

---

**Astuce :** Commence toujours par le MVP et itère ensuite !
