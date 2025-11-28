import { NextResponse } from 'next/server';

// Fonction de calcul de prix simplifiée (à remplacer par votre logique métier)
function calculatePrice(extraction) {
  const {
    type = "standard",
    poids = 10,
    dimensions = "50x50x50",
    depart = "",
    arrivee = "",
    fragile = false
  } = extraction;

  // Prix de base
  let basePrice = 50;

  // Prix selon le poids (€2 par kg)
  const weight = typeof poids === 'number' ? poids : parseFloat(poids) || 10;
  basePrice += weight * 2;

  // Prix selon les dimensions
  const dims = dimensions.split('x').map(d => parseInt(d) || 50);
  const volume = dims.reduce((a, b) => a * b, 1) / 1000000; // en m³
  basePrice += volume * 100;

  // Majoration pour objets fragiles
  if (fragile) {
    basePrice *= 1.3;
  }

  // Majoration selon le type
  const typeMultipliers = {
    "meuble": 1.2,
    "palette": 1.5,
    "electromenager": 1.4,
    "standard": 1.0,
    "carton": 0.8
  };
  const multiplier = typeMultipliers[type.toLowerCase()] || 1.0;
  basePrice *= multiplier;

  // Distance estimée (simulation - à remplacer par vraie API)
  const distanceKm = 100; // Distance par défaut
  const distancePrice = distanceKm * 0.5;

  const totalPrice = Math.round(basePrice + distancePrice);

  return {
    basePrice: Math.round(basePrice),
    distancePrice: Math.round(distancePrice),
    totalPrice,
    currency: "EUR",
    details: {
      weight: `${weight} kg`,
      volume: `${volume.toFixed(2)} m³`,
      distance: `${distanceKm} km`,
      fragile,
      type
    }
  };
}

export async function POST(req) {
  try {
    const extraction = await req.json();

    // Si vous avez une API de pricing externe, décommentez ceci :
    /*
    if (process.env.PRICING_ENGINE_URL) {
      const response = await fetch(process.env.PRICING_ENGINE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.PRICING_ENGINE_SECRET}`
        },
        body: JSON.stringify(extraction)
      });

      if (!response.ok) {
        throw new Error(`Pricing API error: ${response.status}`);
      }

      return NextResponse.json(await response.json());
    }
    */

    // Sinon, utiliser le calcul local
    const pricing = calculatePrice(extraction);
    return NextResponse.json(pricing);

  } catch (error) {
    console.error("Erreur dans /api/price:", error);
    return NextResponse.json(
      { error: "Erreur lors du calcul du prix" },
      { status: 500 }
    );
  }
}
