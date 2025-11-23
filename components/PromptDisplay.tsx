'use client';

import React, { useState } from 'react';
import { GenerationResult } from '@/lib/types';
import Card from './ui/Card';
import Button from './ui/Button';
import { Copy, Download, Check, RefreshCw } from 'lucide-react';

interface PromptDisplayProps {
  result: GenerationResult;
  onReset: () => void;
}

export default function PromptDisplay({ result, onReset }: PromptDisplayProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = () => {
    let markdown = `# Prompts pour ${result.metadata.saasName}\n\n`;
    markdown += `Généré le: ${new Date(result.metadata.generatedAt).toLocaleDateString('fr-FR')}\n\n`;
    markdown += `Template: ${result.metadata.template}\n\n`;
    markdown += `---\n\n`;

    result.prompts.forEach((prompt) => {
      markdown += `## ${prompt.order}. ${prompt.title}\n\n`;
      markdown += `**Catégorie:** ${prompt.category === 'figma' ? 'Figma Design' : 'Claude Code'}\n\n`;
      markdown += `${prompt.content}\n\n`;
      markdown += `---\n\n`;
    });

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompts-${result.metadata.saasName.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const figmaPrompts = result.prompts.filter(p => p.category === 'figma');
  const claudePrompts = result.prompts.filter(p => p.category === 'claude');

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Prompts pour {result.metadata.saasName}
            </h2>
            <p className="text-gray-400">
              {result.prompts.length} prompts générés
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleDownload}>
              <Download size={18} className="mr-2" />
              Télécharger
            </Button>
            <Button variant="outline" onClick={onReset}>
              <RefreshCw size={18} className="mr-2" />
              Nouveau
            </Button>
          </div>
        </div>
      </Card>

      {/* Figma Prompts */}
      {figmaPrompts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Prompts Figma
          </h3>
          {figmaPrompts.map((prompt) => (
            <Card key={prompt.id}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold text-white">
                    {prompt.order}. {prompt.title}
                  </h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(prompt.content, prompt.id)}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copié
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copier
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-invert max-w-none">
                  <pre className="bg-gray-900/50 p-4 rounded-lg text-sm text-gray-300 whitespace-pre-wrap">
                    {prompt.content}
                  </pre>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Claude Prompts */}
      {claudePrompts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">💻</span>
            Prompts Claude
          </h3>
          {claudePrompts.map((prompt) => (
            <Card key={prompt.id}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold text-white">
                    {prompt.order}. {prompt.title}
                  </h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(prompt.content, prompt.id)}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={16} className="mr-2" />
                        Copié
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="mr-2" />
                        Copier
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-invert max-w-none">
                  <pre className="bg-gray-900/50 p-4 rounded-lg text-sm text-gray-300 whitespace-pre-wrap">
                    {prompt.content}
                  </pre>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
