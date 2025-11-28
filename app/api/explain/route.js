import { openai } from '../../../lib/openai'; // <-- Utilisez ce chemin
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { extraction, price } = await req.json();

    if (!extraction || !price) {
      return NextResponse.json(
        { error: "Les données 'extraction' et 'price' sont requises" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Tu es un assistant sympathique et professionnel de Loopengers, spécialisé dans le transport. 
Ton rôle est d'expliquer le devis de manière claire, concise et humaine, en français.

Format de réponse :
1. Résumé de ce qui sera transporté
2. Explication du prix (environ 2-3 lignes)
3. Points importants à noter
4. Phrase de conclusion professionnelle

Sois chaleureux, précis et rassurant. Maximum 150 mots.`
        },
        {
          role: "user",
          content: `Voici les détails :

EXTRACTION : ${JSON.stringify(extraction, null, 2)}

TARIFICATION : ${JSON.stringify(price, null, 2)}

Explique ce devis de manière claire et professionnelle.`
        }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const explanation = completion.choices[0].message.content;

    return NextResponse.json({ 
      text: explanation,
      extraction,
      price 
    });

  } catch (error) {
    console.error("Erreur dans /api/explain:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération de l'explication" },
      { status: 500 }
    );
  }
}
