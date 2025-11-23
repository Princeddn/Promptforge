import { SaaSInput } from './types';

export const SYSTEM_PROMPT = `Tu es un expert en génération de prompts pour créer des SaaS avec l'IA.
Tu aides les développeurs à créer des prompts ultra-détaillés et optimisés pour:
1. Figma (design UI/UX)
2. Claude (développement code)

Tes prompts doivent être:
- Extrêmement détaillés (200-400 mots minimum par prompt)
- Incluant la stack technique précise
- Avec des best practices et patterns recommandés
- Structurés et faciles à copier-coller
- Adaptés au contexte du SaaS décrit

Tu génères EXACTEMENT 8 prompts:
- 1 prompt Figma pour le design global
- 7 prompts Claude pour le code (architecture, features, API, UI, etc.)`;

export function generateUserPrompt(input: SaaSInput): string {
  return `Génère 8 prompts optimisés pour créer ce SaaS:

**Nom du SaaS:** ${input.name}

**Description:** ${input.description}

**Audience cible:** ${input.targetAudience}

**Fonctionnalités clés:**
${input.keyFeatures.map(f => `- ${f}`).join('\n')}

**Monétisation:** ${input.monetization}

**Type de template:** ${input.template}

---

Génère exactement 8 prompts dans ce format JSON:

{
  "prompts": [
    {
      "id": "figma-01",
      "title": "Design complet UI/UX",
      "category": "figma",
      "order": 1,
      "content": "[Prompt détaillé pour Figma]"
    },
    {
      "id": "claude-01",
      "title": "Architecture et configuration du projet",
      "category": "claude",
      "order": 2,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-02",
      "title": "Configuration base de données et authentification",
      "category": "claude",
      "order": 3,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-03",
      "title": "API Routes et logique backend",
      "category": "claude",
      "order": 4,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-04",
      "title": "Composants UI principaux",
      "category": "claude",
      "order": 5,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-05",
      "title": "Pages et routing",
      "category": "claude",
      "order": 6,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-06",
      "title": "Features avancées et intégrations",
      "category": "claude",
      "order": 7,
      "content": "[Prompt détaillé pour Claude]"
    },
    {
      "id": "claude-07",
      "title": "Testing, déploiement et documentation",
      "category": "claude",
      "order": 8,
      "content": "[Prompt détaillé pour Claude]"
    }
  ]
}

**Instructions importantes:**
1. Chaque prompt doit être TRÈS détaillé (200-400 mots minimum)
2. Inclure la stack technique précise adaptée au SaaS
3. Mentionner les best practices et patterns recommandés
4. Structurer les prompts pour qu'ils soient directement utilisables
5. Adapter le ton et la complexité à l'audience cible
6. Inclure des détails sur l'UI/UX attendue dans le prompt Figma
7. Pour les prompts Claude, inclure des exemples de code si pertinent

Réponds UNIQUEMENT avec le JSON, sans texte avant ou après.`;
}

// Note: PROMPT_EXAMPLES est juste pour référence et documentation
// Les vrais prompts sont générés dynamiquement par la fonction generateUserPrompt()
