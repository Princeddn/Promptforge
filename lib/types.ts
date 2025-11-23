export type SaaSType =
  | 'marketplace'
  | 'dashboard'
  | 'crm'
  | 'ecommerce'
  | 'productivity'
  | 'education'
  | 'custom';

export interface SaaSTemplate {
  id: SaaSType;
  name: string;
  description: string;
  icon: string;
  features: string[];
  stack: {
    frontend: string[];
    backend: string[];
    database: string[];
    auth: string[];
  };
}

export interface SaaSInput {
  name: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  monetization: string;
  template: SaaSType;
}

export interface GeneratedPrompt {
  id: string;
  title: string;
  content: string;
  category: 'figma' | 'claude';
  order: number;
}

export interface GenerationResult {
  prompts: GeneratedPrompt[];
  metadata: {
    generatedAt: string;
    saasName: string;
    template: SaaSType;
  };
}
