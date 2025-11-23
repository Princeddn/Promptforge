import { SaaSTemplate } from './types';

export const saasTemplates: SaaSTemplate[] = [
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Plateforme de mise en relation acheteurs/vendeurs',
    icon: '🏪',
    features: [
      'Système d\'annonces',
      'Profils vendeurs/acheteurs',
      'Messagerie intégrée',
      'Système de paiement',
      'Notations et avis',
      'Recherche avancée'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      backend: ['Next.js API Routes', 'tRPC', 'Prisma'],
      database: ['PostgreSQL', 'Redis (cache)'],
      auth: ['NextAuth.js', 'OAuth (Google, GitHub)']
    }
  },
  {
    id: 'dashboard',
    name: 'Dashboard Analytics',
    description: 'Tableau de bord avec visualisation de données',
    icon: '📊',
    features: [
      'Graphiques interactifs',
      'KPIs temps réel',
      'Exports PDF/CSV',
      'Filtres avancés',
      'Notifications',
      'API REST'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Recharts', 'Tailwind CSS'],
      backend: ['Next.js API Routes', 'Prisma'],
      database: ['PostgreSQL', 'TimescaleDB'],
      auth: ['NextAuth.js', 'JWT']
    }
  },
  {
    id: 'crm',
    name: 'CRM / Gestion clients',
    description: 'Outil de gestion de la relation client',
    icon: '👥',
    features: [
      'Fiches contacts',
      'Pipeline de ventes',
      'Historique des interactions',
      'Tâches et rappels',
      'Email tracking',
      'Reporting'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'React DnD'],
      backend: ['Next.js API Routes', 'Prisma'],
      database: ['PostgreSQL'],
      auth: ['NextAuth.js', 'Roles & Permissions']
    }
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Boutique en ligne complète',
    icon: '🛒',
    features: [
      'Catalogue produits',
      'Panier d\'achat',
      'Paiement en ligne',
      'Gestion des commandes',
      'Suivi de livraison',
      'Panel admin'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS'],
      backend: ['Next.js API Routes', 'Stripe', 'Prisma'],
      database: ['PostgreSQL', 'S3 (images)'],
      auth: ['NextAuth.js', 'Customer accounts']
    }
  },
  {
    id: 'productivity',
    name: 'Productivité',
    description: 'Outil de gestion de tâches et projets',
    icon: '✅',
    features: [
      'Kanban board',
      'Listes de tâches',
      'Calendrier',
      'Collaboration temps réel',
      'Commentaires',
      'Intégrations'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'DnD Kit'],
      backend: ['Next.js API Routes', 'Prisma', 'WebSockets'],
      database: ['PostgreSQL', 'Redis'],
      auth: ['NextAuth.js', 'Team workspaces']
    }
  },
  {
    id: 'education',
    name: 'Éducation / Cours en ligne',
    description: 'Plateforme d\'apprentissage en ligne',
    icon: '🎓',
    features: [
      'Catalogue de cours',
      'Lecteur vidéo',
      'Quiz et exercices',
      'Suivi de progression',
      'Certificats',
      'Forum communauté'
    ],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'Video.js'],
      backend: ['Next.js API Routes', 'Prisma'],
      database: ['PostgreSQL', 'S3 (vidéos)'],
      auth: ['NextAuth.js', 'Student/Teacher roles']
    }
  },
  {
    id: 'custom',
    name: 'Personnalisé',
    description: 'Créez votre propre template sur mesure',
    icon: '⚡',
    features: [],
    stack: {
      frontend: ['Next.js', 'React', 'Tailwind CSS'],
      backend: ['Next.js API Routes'],
      database: ['PostgreSQL'],
      auth: ['NextAuth.js']
    }
  }
];

export function getTemplate(id: string): SaaSTemplate | undefined {
  return saasTemplates.find(t => t.id === id);
}
