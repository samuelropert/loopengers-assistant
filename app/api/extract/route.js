import { openai } from '../../../lib/openai'; // <-- Utilisez ce chemin
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { input } = await req.json();

    if (!input || typeof input !== 'string') {
      return NextResponse.json(
        { error: "Le champ 'input' est requis" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Tu es un expert en logistique. Analyse la description de l'utilisateur et extrait les informations suivantes au format JSON :
- type: type d'objet (meuble, carton, palette, etc.)
- dimensions: dimensions estimées (longueur x largeur x hauteur en cm)
- matiere: matière principale (bois, métal, carton, etc.)
- poids: poids estimé en kg
- depart: ville ou adresse de départ
- arrivee: ville ou adresse d'arrivée
- fragile: booléen indiquant si l'objet est fragile

Si une information n'est pas fournie, utilise une estimation raisonnable basée sur le type d'objet.`
        },
        {
          role: "user",
          content: input
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const extractedData = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(extractedData);

  } catch (error) {
    console.error("Erreur dans /api/extract:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'extraction des données" },
      { status: 500 }
    );
  }
}
