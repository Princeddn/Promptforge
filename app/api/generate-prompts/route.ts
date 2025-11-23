import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { SYSTEM_PROMPT, generateUserPrompt } from '@/lib/prompts';
import { SaaSInput, GeneratedPrompt } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const input: SaaSInput = await req.json();

    // Validation
    if (!input.name || !input.description || !input.template) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    // Initialiser le client OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Générer le prompt utilisateur
    const userPrompt = generateUserPrompt(input);

    // Appel à OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const responseContent = completion.choices[0].message.content;

    if (!responseContent) {
      throw new Error('Pas de réponse de l\'IA');
    }

    const result = JSON.parse(responseContent);

    return NextResponse.json({
      prompts: result.prompts,
      metadata: {
        generatedAt: new Date().toISOString(),
        saasName: input.name,
        template: input.template,
      },
    });
  } catch (error) {
    console.error('Erreur génération:', error);

    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: `Erreur OpenAI: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de la génération des prompts' },
      { status: 500 }
    );
  }
}
