import React from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import { Sparkles, Zap, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">
            Générateur de prompts IA pour SaaS
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Crée ton SaaS avec l'IA
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            en quelques heures
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          PromptForge génère des prompts ultra-optimisés pour Figma et Claude.
          <br />
          Tu décris ton idée, l'IA génère les prompts parfaits. C'est tout.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/generator">
            <Button size="lg" className="min-w-[200px]">
              <Zap size={20} className="mr-2" />
              Commencer gratuitement
            </Button>
          </Link>
          <a
            href="https://github.com/ton-username/promptforge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="min-w-[200px]">
              <Rocket size={20} className="mr-2" />
              Voir sur GitHub
            </Button>
          </a>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              10x plus rapide
            </h3>
            <p className="text-gray-400">
              Génère 8 prompts ultra-détaillés en 30 secondes
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Prompts optimisés
            </h3>
            <p className="text-gray-400">
              Testés sur 100+ projets SaaS réels
            </p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Gratuit & Open Source
            </h3>
            <p className="text-gray-400">
              Utilise ta propre clé API OpenAI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
