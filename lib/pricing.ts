// York Region postal code prefixes
const YORK_REGION_PREFIXES = ['L3P', 'L3R', 'L3S', 'L4A', 'L4B', 'L4C', 'L4E', 'L6E'];

// Maple, ON coordinates (approximate center)
const MAPLE_COORDINATES = {
  lat: 43.8614,
  lng: -79.5085
};

export function isYorkRegion(postalCode: string): boolean {
  const prefix = postalCode.substring(0, 3).toUpperCase();
  return YORK_REGION_PREFIXES.includes(prefix);
}

// Note: In a production environment, this would use a real geocoding service
export function calculateDistanceFromMaple(postalCode: string): number {
  // This is a simplified example using hardcoded distances
  // In production, you would use a geocoding service to calculate real distances
  const distances: { [key: string]: number } = {
    'M1B': 25, // Scarborough
    'M5S': 30, // Downtown Toronto
    'L1T': 45, // Ajax
    'L6Y': 20, // Brampton
    'L5B': 35, // Mississauga
  };
  
  const prefix = postalCode.substring(0, 3).toUpperCase();
  return distances[prefix] || 30; // Default to 30km if unknown
}

interface PricingResult {
  basePrice: number;
  additionalPrice: number;
  totalPrice: number;
}

export function calculatePrice(postalCode: string, adults: number): PricingResult {
  let basePrice: number;
  let additionalPrice: number;

  if (isYorkRegion(postalCode)) {
    basePrice = 50;
    additionalPrice = 35;
  } else {
    const distance = calculateDistanceFromMaple(postalCode);
    const X = 1.5 * distance + 15;
    basePrice = X;
    additionalPrice = X * 0.7;
  }

  const totalPrice = basePrice + (additionalPrice * (adults - 1));

  return {
    basePrice,
    additionalPrice,
    totalPrice
  };
}