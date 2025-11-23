'use client';

import React from 'react';
import { saasTemplates } from '@/lib/templates';
import { SaaSType } from '@/lib/types';
import Card from './ui/Card';

interface TemplateSelectorProps {
  selected: SaaSType;
  onSelect: (template: SaaSType) => void;
}

export default function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Choisis un template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {saasTemplates.map((template) => (
          <Card
            key={template.id}
            hover
            className={`cursor-pointer ${
              selected === template.id
                ? 'border-blue-500 bg-blue-900/20'
                : 'hover:border-gray-600'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{template.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-400">{template.description}</p>
              </div>
            </div>

            {template.features.length > 0 && (
              <div className="mt-4 space-y-1">
                {template.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
