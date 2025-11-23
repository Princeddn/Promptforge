'use client';

import React, { useState } from 'react';
import { SaaSInput, SaaSType, GenerationResult } from '@/lib/types';
import TemplateSelector from './TemplateSelector';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import Card from './ui/Card';
import PromptDisplay from './PromptDisplay';
import { Sparkles, Loader2 } from 'lucide-react';

export default function PromptGenerator() {
  const [step, setStep] = useState<1 | 2>(1);
  const [template, setTemplate] = useState<SaaSType>('marketplace');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    targetAudience: '',
    keyFeatures: '',
    monetization: '',
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const input: SaaSInput = {
        name: formData.name,
        description: formData.description,
        targetAudience: formData.targetAudience,
        keyFeatures: formData.keyFeatures.split('\n').filter(f => f.trim()),
        monetization: formData.monetization,
        template,
      };

      const response = await fetch('/api/generate-prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la génération');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la génération des prompts. Vérifie ta clé API.');
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return <PromptDisplay result={result} onReset={() => setResult(null)} />;
  }

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="flex items-center justify-center gap-4">
        <div className={`flex items-center gap-2 ${step === 1 ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-700'}`}>
            1
          </div>
          <span className="font-medium">Template</span>
        </div>
        <div className="w-16 h-0.5 bg-gray-700" />
        <div className={`flex items-center gap-2 ${step === 2 ? 'text-blue-400' : 'text-gray-500'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-700'}`}>
            2
          </div>
          <span className="font-medium">Détails</span>
        </div>
      </div>

      {step === 1 && (
        <>
          <TemplateSelector selected={template} onSelect={setTemplate} />
          <div className="flex justify-end">
            <Button onClick={() => setStep(2)} size="lg">
              Suivant
            </Button>
          </div>
        </>
      )}

      {step === 2 && (
        <Card>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Décris ton SaaS</h2>
              <Button variant="outline" onClick={() => setStep(1)} size="sm">
                ← Retour
              </Button>
            </div>

            <Input
              label="Nom du SaaS"
              placeholder="Ex: TaskFlow"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Textarea
              label="Description"
              placeholder="Ex: Application de gestion de tâches pour équipes tech"
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <Input
              label="Audience cible"
              placeholder="Ex: Équipes tech de 5-20 personnes"
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            />

            <Textarea
              label="Fonctionnalités clés (une par ligne)"
              placeholder="Ex:&#10;Kanban board&#10;Sprints&#10;Intégration Git"
              rows={5}
              value={formData.keyFeatures}
              onChange={(e) => setFormData({ ...formData, keyFeatures: e.target.value })}
            />

            <Input
              label="Monétisation"
              placeholder="Ex: Free + Pro à 15€/user/mois"
              value={formData.monetization}
              onChange={(e) => setFormData({ ...formData, monetization: e.target.value })}
            />

            <Button
              onClick={handleGenerate}
              disabled={loading || !formData.name || !formData.description}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2" size={20} />
                  Générer les prompts
                </>
              )}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}
