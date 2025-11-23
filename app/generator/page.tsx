import Link from 'next/link';
import PromptGenerator from '@/components/PromptGenerator';
import { ArrowLeft } from 'lucide-react';

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Retour
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Générateur de Prompts
          </h1>
          <p className="text-gray-400">
            Décris ton SaaS et obtiens 8 prompts ultra-optimisés pour Figma et Claude
          </p>
        </div>

        {/* Generator */}
        <PromptGenerator />
      </div>
    </main>
  );
}
