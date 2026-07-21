/**
 * Egypt-market catalog snapshot sourced from ContactCars' official new-car
 * specs/prices catalogue and dealer search feed.
 *
 * This is intentionally a checked-in snapshot: the dropdowns remain stable
 * between deploys, while the source metadata makes refreshes auditable.
 */

export const EGYPT_MARKET_SOURCE = {
  "provider": "ContactCars Egypt",
  "catalogUrl": "https://www.contactcars.com/en/new-cars",
  "dealerUrl": "https://www.contactcars.com/en/new-cars",
  "retrievedOn": "2026-07-21",
  "catalogRecords": 388,
  "makeCount": 74,
  "modelCount": 354,
  "variantCount": 779,
  "dealerCount": 75
};

export type MarketVariantSeed = { nameEn: string; nameAr: string; slug: string; year: number; engine: string | null; price: number; };
export type MarketModelSeed = { nameEn: string; nameAr: string; slug: string; yearStart: number; yearEnd: number; variants: MarketVariantSeed[]; };
export type MarketMakeSeed = { nameEn: string; nameAr: string; slug: string; models: MarketModelSeed[]; };
export type MarketDealerSeed = { nameEn: string; nameAr: string; slug: string; city: string | null; governorate: string | null; phone: string | null; };

export const EGYPT_MARKET_MAKES: MarketMakeSeed[] = [
  {
    "nameEn": "Alfa Romeo",
    "nameAr": "ألفاروميو",
    "slug": "alfa-romeo",
    "models": [
      {
        "nameEn": "Giulia",
        "nameAr": "جوليا",
        "slug": "giulia",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Sprint",
            "nameAr": "Sprint",
            "slug": "sprint",
            "year": 2025,
            "engine": "Sprint",
            "price": 2749000
          },
          {
            "nameEn": "Veloce",
            "nameAr": "Veloce",
            "slug": "veloce",
            "year": 2025,
            "engine": "Veloce",
            "price": 3149000
          }
        ]
      },
      {
        "nameEn": "Stelvio",
        "nameAr": "ستلفيو",
        "slug": "stelvio",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Sprint",
            "nameAr": "Sprint",
            "slug": "sprint",
            "year": 2025,
            "engine": "Sprint",
            "price": 3325000
          },
          {
            "nameEn": "Veloce",
            "nameAr": "Veloce",
            "slug": "veloce",
            "year": 2025,
            "engine": "Veloce",
            "price": 3550000
          }
        ]
      },
      {
        "nameEn": "Tonale",
        "nameAr": "تونالي",
        "slug": "tonale",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Sprint",
            "nameAr": "Sprint",
            "slug": "sprint",
            "year": 2025,
            "engine": "Sprint",
            "price": 2625000
          },
          {
            "nameEn": "Veloce",
            "nameAr": "Veloce",
            "slug": "veloce",
            "year": 2025,
            "engine": "Veloce",
            "price": 2825000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Arcfox",
    "nameAr": "أرك فوكس",
    "slug": "arcfox",
    "models": [
      {
        "nameEn": "Alpha S5",
        "nameAr": "ألفا S5",
        "slug": "alpha-s5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Air",
            "nameAr": "إير",
            "slug": "air",
            "year": 2026,
            "engine": "Air",
            "price": 1450000
          },
          {
            "nameEn": "Max",
            "nameAr": "ماكس",
            "slug": "max",
            "year": 2026,
            "engine": "Max",
            "price": 1950000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1600000
          }
        ]
      },
      {
        "nameEn": "Alpha T5",
        "nameAr": "ألفا T5",
        "slug": "alpha-t5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Air",
            "nameAr": "إير",
            "slug": "air",
            "year": 2026,
            "engine": "Air",
            "price": 1500000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1650000
          }
        ]
      },
      {
        "nameEn": "KOALA S",
        "nameAr": "كوالا إس",
        "slug": "koala-s",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Air",
            "nameAr": "إير",
            "slug": "air",
            "year": 2026,
            "engine": "Air",
            "price": 1175000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1250000
          }
        ]
      },
      {
        "nameEn": "T 1",
        "nameAr": "T 1",
        "slug": "t-1",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Max",
            "nameAr": "ماكس",
            "slug": "max",
            "year": 2026,
            "engine": "Max",
            "price": 1070000
          },
          {
            "nameEn": "Plus",
            "nameAr": "بلس",
            "slug": "plus",
            "year": 2026,
            "engine": "Plus",
            "price": 995000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 925000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Audi",
    "nameAr": "أودي",
    "slug": "audi",
    "models": [
      {
        "nameEn": "A3",
        "nameAr": "A3",
        "slug": "a3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Sedan S-Line",
            "nameAr": "Sedan S-Line",
            "slug": "sedan-s-line",
            "year": 2026,
            "engine": "Sedan S-Line",
            "price": 2599000
          },
          {
            "nameEn": "Sportback S-Line",
            "nameAr": "Sportback S-Line",
            "slug": "sportback-s-line",
            "year": 2026,
            "engine": "Sportback S-Line",
            "price": 2525000
          }
        ]
      },
      {
        "nameEn": "A5",
        "nameAr": "A5",
        "slug": "a5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Advanced",
            "nameAr": "أدفانسد",
            "slug": "advanced",
            "year": 2026,
            "engine": "Advanced",
            "price": 3449000
          },
          {
            "nameEn": "S-Line",
            "nameAr": "S-Line",
            "slug": "s-line",
            "year": 2026,
            "engine": "S-Line",
            "price": 3949000
          }
        ]
      },
      {
        "nameEn": "A6",
        "nameAr": "A6",
        "slug": "a6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Advanced",
            "nameAr": "أدفانسد",
            "slug": "advanced",
            "year": 2026,
            "engine": "Advanced",
            "price": 4749000
          },
          {
            "nameEn": "S-Line Plus",
            "nameAr": "S-Line Plus",
            "slug": "s-line-plus",
            "year": 2026,
            "engine": "S-Line Plus",
            "price": 5249000
          }
        ]
      },
      {
        "nameEn": "Q2",
        "nameAr": "Q2",
        "slug": "q2",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "S-line",
            "nameAr": "S-line",
            "slug": "s-line",
            "year": 2026,
            "engine": "S-line",
            "price": 2399000
          }
        ]
      },
      {
        "nameEn": "Q3",
        "nameAr": "Q3",
        "slug": "q3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 2799000
          },
          {
            "nameEn": "S-Line",
            "nameAr": "S-Line",
            "slug": "s-line",
            "year": 2026,
            "engine": "S-Line",
            "price": 2999000
          },
          {
            "nameEn": "Sportback - Premium",
            "nameAr": "Sportback - Premium",
            "slug": "sportback-premium",
            "year": 2026,
            "engine": "Sportback - Premium",
            "price": 2999000
          },
          {
            "nameEn": "Sportback - Sline",
            "nameAr": "Sportback - Sline",
            "slug": "sportback-sline",
            "year": 2026,
            "engine": "Sportback - Sline",
            "price": 3249000
          }
        ]
      },
      {
        "nameEn": "Q4 e Tron",
        "nameAr": "Q4 e Tron",
        "slug": "q4-e-tron",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "40 e-tron",
            "nameAr": "40 e-tron",
            "slug": "40-e-tron",
            "year": 2025,
            "engine": "40 e-tron",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Q7",
        "nameAr": "Q7",
        "slug": "q7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "S line Plus",
            "nameAr": "S line Plus",
            "slug": "s-line-plus",
            "year": 2026,
            "engine": "S line Plus",
            "price": 6199000
          },
          {
            "nameEn": "S-line",
            "nameAr": "S-line",
            "slug": "s-line",
            "year": 2026,
            "engine": "S-line",
            "price": 5750000
          }
        ]
      },
      {
        "nameEn": "Q8",
        "nameAr": "Q8",
        "slug": "q8",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "S-line plus",
            "nameAr": "S-line plus",
            "slug": "s-line-plus",
            "year": 2026,
            "engine": "S-line plus",
            "price": 7900000
          }
        ]
      },
      {
        "nameEn": "Q8 e-tron",
        "nameAr": "Q8 e-tron",
        "slug": "q8-e-tron",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "Sportback",
            "nameAr": "سبورت باك",
            "slug": "sportback",
            "year": 2024,
            "engine": "Sportback",
            "price": 5200000
          },
          {
            "nameEn": "Sportback With Virtual Mirrors",
            "nameAr": "Sportback With Virtual Mirrors",
            "slug": "sportback-with-virtual-mirrors",
            "year": 2024,
            "engine": "Sportback With Virtual Mirrors",
            "price": 5350000
          },
          {
            "nameEn": "SUV",
            "nameAr": "SUV",
            "slug": "suv",
            "year": 2024,
            "engine": "SUV",
            "price": 4990000
          },
          {
            "nameEn": "SUV With Virtual Mirrors",
            "nameAr": "SUV With Virtual Mirrors",
            "slug": "suv-with-virtual-mirrors",
            "year": 2024,
            "engine": "SUV With Virtual Mirrors",
            "price": 5150000
          }
        ]
      },
      {
        "nameEn": "RS e-tron GT",
        "nameAr": "RS e-tron GT",
        "slug": "rs-e-tron-gt",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "S-Line",
            "nameAr": "S-Line",
            "slug": "s-line",
            "year": 2025,
            "engine": "S-Line",
            "price": 6400000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Avatr",
    "nameAr": "أفاتر",
    "slug": "avatr",
    "models": [
      {
        "nameEn": "07",
        "nameAr": "07",
        "slug": "07",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "AWD Premium",
            "nameAr": "AWD Premium",
            "slug": "awd-premium",
            "year": 2027,
            "engine": "AWD Premium",
            "price": 2690000
          },
          {
            "nameEn": "AWD Premium Vision",
            "nameAr": "AWD Premium Vision",
            "slug": "awd-premium-vision",
            "year": 2027,
            "engine": "AWD Premium Vision",
            "price": 2790000
          },
          {
            "nameEn": "RWD Luxury",
            "nameAr": "RWD Luxury",
            "slug": "rwd-luxury",
            "year": 2027,
            "engine": "RWD Luxury",
            "price": 2290000
          }
        ]
      },
      {
        "nameEn": "11",
        "nameAr": "11",
        "slug": "11",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 2990000
          },
          {
            "nameEn": "Performance",
            "nameAr": "بيرفورمانس",
            "slug": "performance",
            "year": 2026,
            "engine": "Performance",
            "price": 3330000
          },
          {
            "nameEn": "Premium (4 Seats)",
            "nameAr": "Premium (4 Seats)",
            "slug": "premium-4-seats",
            "year": 2026,
            "engine": "Premium (4 Seats)",
            "price": 3530000
          }
        ]
      },
      {
        "nameEn": "12",
        "nameAr": "12",
        "slug": "12",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2026,
            "engine": "GT",
            "price": 3580000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 3050000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "BAIC",
    "nameAr": "بايك",
    "slug": "baic",
    "models": [
      {
        "nameEn": "BJ30",
        "nameAr": "BJ30",
        "slug": "bj30",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Off road - Hybrid",
            "nameAr": "Off road - Hybrid",
            "slug": "off-road-hybrid",
            "year": 2026,
            "engine": "Off road - Hybrid",
            "price": 1775000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1575000
          },
          {
            "nameEn": "Ultra - Hybrid",
            "nameAr": "Ultra - Hybrid",
            "slug": "ultra-hybrid",
            "year": 2026,
            "engine": "Ultra - Hybrid",
            "price": 1675000
          }
        ]
      },
      {
        "nameEn": "U5 Plus",
        "nameAr": "U5 Plus",
        "slug": "u5-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 850000
          },
          {
            "nameEn": "Top Line",
            "nameAr": "Top Line",
            "slug": "top-line",
            "year": 2026,
            "engine": "Top Line",
            "price": 975000
          }
        ]
      },
      {
        "nameEn": "X 55",
        "nameAr": "X 55",
        "slug": "x-55",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "High Line",
            "nameAr": "High Line",
            "slug": "high-line",
            "year": 2026,
            "engine": "High Line",
            "price": 1200000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1415000
          },
          {
            "nameEn": "Top Line",
            "nameAr": "Top Line",
            "slug": "top-line",
            "year": 2026,
            "engine": "Top Line",
            "price": 1300000
          }
        ]
      },
      {
        "nameEn": "X35",
        "nameAr": "X35",
        "slug": "x35",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 900000
          }
        ]
      },
      {
        "nameEn": "X7",
        "nameAr": "X7",
        "slug": "x7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "High Line",
            "nameAr": "High Line",
            "slug": "high-line",
            "year": 2026,
            "engine": "High Line",
            "price": 1430000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1580000
          },
          {
            "nameEn": "Top Line",
            "nameAr": "Top Line",
            "slug": "top-line",
            "year": 2026,
            "engine": "Top Line",
            "price": 1505000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "BAW",
    "nameAr": "باو",
    "slug": "baw",
    "models": [
      {
        "nameEn": "M7",
        "nameAr": "M7",
        "slug": "m7",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "1.6 M/T",
            "nameAr": "1.6 M/T",
            "slug": "1-6-m-t",
            "year": 2027,
            "engine": "1.6 M/T",
            "price": 990000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Bestune",
    "nameAr": "بيستون",
    "slug": "bestune",
    "models": [
      {
        "nameEn": "B70",
        "nameAr": "B70",
        "slug": "b70",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Deluxe",
            "nameAr": "Deluxe",
            "slug": "deluxe",
            "year": 2025,
            "engine": "Deluxe",
            "price": 1305000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1325000
          }
        ]
      },
      {
        "nameEn": "T55",
        "nameAr": "T55",
        "slug": "t55",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Premium Plus",
            "nameAr": "Premium Plus",
            "slug": "premium-plus",
            "year": 2025,
            "engine": "Premium Plus",
            "price": 1055000
          }
        ]
      },
      {
        "nameEn": "T77",
        "nameAr": "T77",
        "slug": "t77",
        "yearStart": 2023,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T Turbo Comfort",
            "nameAr": "1.5 A/T Turbo Comfort",
            "slug": "1-5-a-t-turbo-comfort",
            "year": 2023,
            "engine": "1.5 A/T Turbo Comfort",
            "price": 1070000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1275000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "BMW",
    "nameAr": "بي ام دبليو",
    "slug": "bmw",
    "models": [
      {
        "nameEn": "118i",
        "nameAr": "118i",
        "slug": "118i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "M Sport",
            "nameAr": "M Sport",
            "slug": "m-sport",
            "year": 2026,
            "engine": "M Sport",
            "price": 2550000
          }
        ]
      },
      {
        "nameEn": "320i",
        "nameAr": "320i",
        "slug": "320i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury Ultimate",
            "nameAr": "Luxury Ultimate",
            "slug": "luxury-ultimate",
            "year": 2026,
            "engine": "Luxury Ultimate",
            "price": 3500000
          },
          {
            "nameEn": "M Sport Ultimate",
            "nameAr": "M Sport Ultimate",
            "slug": "m-sport-ultimate",
            "year": 2026,
            "engine": "M Sport Ultimate",
            "price": 3750000
          }
        ]
      },
      {
        "nameEn": "340i",
        "nameAr": "340i",
        "slug": "340i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "xDrive",
            "nameAr": "xDrive",
            "slug": "xdrive",
            "year": 2026,
            "engine": "xDrive",
            "price": 6750000
          }
        ]
      },
      {
        "nameEn": "420i Convertible",
        "nameAr": "420i كابورليه",
        "slug": "420i-convertible",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "M Sport",
            "nameAr": "M Sport",
            "slug": "m-sport",
            "year": 2026,
            "engine": "M Sport",
            "price": 5200000
          }
        ]
      },
      {
        "nameEn": "420i Gran Coupe",
        "nameAr": "420i جران كوبيه",
        "slug": "420i-gran-coupe",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Gran Coupe - M Sport",
            "nameAr": "Gran Coupe - M Sport",
            "slug": "gran-coupe-m-sport",
            "year": 2026,
            "engine": "Gran Coupe - M Sport",
            "price": 4950000
          }
        ]
      },
      {
        "nameEn": "440i Coupe",
        "nameAr": "M440i Coupe",
        "slug": "440i-coupe",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "xDrive",
            "nameAr": "xDrive",
            "slug": "xdrive",
            "year": 2026,
            "engine": "xDrive",
            "price": 7650000
          }
        ]
      },
      {
        "nameEn": "520i",
        "nameAr": "520i",
        "slug": "520i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 4500000
          },
          {
            "nameEn": "M Sport",
            "nameAr": "M Sport",
            "slug": "m-sport",
            "year": 2026,
            "engine": "M Sport",
            "price": 4900000
          }
        ]
      },
      {
        "nameEn": "530i",
        "nameAr": "530i",
        "slug": "530i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 6100000
          },
          {
            "nameEn": "M Sport",
            "nameAr": "M Sport",
            "slug": "m-sport",
            "year": 2026,
            "engine": "M Sport",
            "price": 6200000
          }
        ]
      },
      {
        "nameEn": "740i",
        "nameAr": "740i",
        "slug": "740i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Pure Excellence",
            "nameAr": "Pure Excellence",
            "slug": "pure-excellence",
            "year": 2026,
            "engine": "Pure Excellence",
            "price": 11200000
          }
        ]
      },
      {
        "nameEn": "760i",
        "nameAr": "760i",
        "slug": "760i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "xDrive M Sport",
            "nameAr": "xDrive M Sport",
            "slug": "xdrive-m-sport",
            "year": 2026,
            "engine": "xDrive M Sport",
            "price": 13400000
          }
        ]
      },
      {
        "nameEn": "i4",
        "nameAr": "i4",
        "slug": "i4",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "eDrive40 M Sport",
            "nameAr": "eDrive40 M Sport",
            "slug": "edrive40-m-sport",
            "year": 2026,
            "engine": "eDrive40 M Sport",
            "price": 5100000
          }
        ]
      },
      {
        "nameEn": "i5",
        "nameAr": "i5",
        "slug": "i5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "eDrive40 M Sport",
            "nameAr": "eDrive40 M Sport",
            "slug": "edrive40-m-sport",
            "year": 2026,
            "engine": "eDrive40 M Sport",
            "price": 6250000
          }
        ]
      },
      {
        "nameEn": "i7",
        "nameAr": "i7",
        "slug": "i7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "xDrive60",
            "nameAr": "xDrive60",
            "slug": "xdrive60",
            "year": 2026,
            "engine": "xDrive60",
            "price": 11000000
          }
        ]
      },
      {
        "nameEn": "iX",
        "nameAr": "iX",
        "slug": "ix",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "xDrive60 M Sport",
            "nameAr": "xDrive60 M Sport",
            "slug": "xdrive60-m-sport",
            "year": 2026,
            "engine": "xDrive60 M Sport",
            "price": 7700000
          }
        ]
      },
      {
        "nameEn": "iX1",
        "nameAr": "iX1",
        "slug": "ix1",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "eDrive20 ­ M Sport",
            "nameAr": "eDrive20 ­ M Sport",
            "slug": "edrive20-m-sport",
            "year": 2026,
            "engine": "eDrive20 ­ M Sport",
            "price": 3800000
          }
        ]
      },
      {
        "nameEn": "iX2",
        "nameAr": "iX2",
        "slug": "ix2",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "eDrive20 ­ M Sport",
            "nameAr": "eDrive20 ­ M Sport",
            "slug": "edrive20-m-sport",
            "year": 2026,
            "engine": "eDrive20 ­ M Sport",
            "price": 3900000
          }
        ]
      },
      {
        "nameEn": "iX3 Neue Klasse",
        "nameAr": "iX3 Neue Klasse",
        "slug": "ix3-neue-klasse",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "50 xDrive ­ M Sport",
            "nameAr": "50 xDrive ­ M Sport",
            "slug": "50-xdrive-m-sport",
            "year": 2027,
            "engine": "50 xDrive ­ M Sport",
            "price": 4900000
          }
        ]
      },
      {
        "nameEn": "M3",
        "nameAr": "M3",
        "slug": "m3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Competition M xDrive",
            "nameAr": "Competition M xDrive",
            "slug": "competition-m-xdrive",
            "year": 2026,
            "engine": "Competition M xDrive",
            "price": 11450000
          }
        ]
      },
      {
        "nameEn": "M5",
        "nameAr": "M5",
        "slug": "m5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4.4 A/T",
            "nameAr": "4.4 A/T",
            "slug": "4-4-a-t",
            "year": 2026,
            "engine": "4.4 A/T",
            "price": 13850000
          }
        ]
      },
      {
        "nameEn": "X1",
        "nameAr": "X1",
        "slug": "x1",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "sDrive18i ­ M Sport",
            "nameAr": "sDrive18i ­ M Sport",
            "slug": "sdrive18i-m-sport",
            "year": 2026,
            "engine": "sDrive18i ­ M Sport",
            "price": 3500000
          },
          {
            "nameEn": "sDrive18i ­ xLine",
            "nameAr": "sDrive18i ­ xLine",
            "slug": "sdrive18i-xline",
            "year": 2026,
            "engine": "sDrive18i ­ xLine",
            "price": 3200000
          }
        ]
      },
      {
        "nameEn": "X2",
        "nameAr": "X2",
        "slug": "x2",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "sDrive18i ­ M Sport",
            "nameAr": "sDrive18i ­ M Sport",
            "slug": "sdrive18i-m-sport",
            "year": 2026,
            "engine": "sDrive18i ­ M Sport",
            "price": 3600000
          }
        ]
      },
      {
        "nameEn": "X3",
        "nameAr": "X3",
        "slug": "x3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "20 ­- xLine",
            "nameAr": "20 ­- xLine",
            "slug": "20-xline",
            "year": 2026,
            "engine": "20 ­- xLine",
            "price": 4350000
          },
          {
            "nameEn": "30 xDrive",
            "nameAr": "30 xDrive",
            "slug": "30-xdrive",
            "year": 2026,
            "engine": "30 xDrive",
            "price": 5300000
          }
        ]
      },
      {
        "nameEn": "X5",
        "nameAr": "X5",
        "slug": "x5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "M60i",
            "nameAr": "M60i",
            "slug": "m60i",
            "year": 2026,
            "engine": "M60i",
            "price": 8750000
          },
          {
            "nameEn": "xDrive40i ­ xLine",
            "nameAr": "xDrive40i ­ xLine",
            "slug": "xdrive40i-xline",
            "year": 2026,
            "engine": "xDrive40i ­ xLine",
            "price": 7300000
          }
        ]
      },
      {
        "nameEn": "X6",
        "nameAr": "X6",
        "slug": "x6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "M60i",
            "nameAr": "M60i",
            "slug": "m60i",
            "year": 2026,
            "engine": "M60i",
            "price": 9250000
          },
          {
            "nameEn": "xDrive40i M Sport",
            "nameAr": "xDrive40i M Sport",
            "slug": "xdrive40i-m-sport",
            "year": 2026,
            "engine": "xDrive40i M Sport",
            "price": 7950000
          }
        ]
      },
      {
        "nameEn": "X7",
        "nameAr": "X7",
        "slug": "x7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "M60i",
            "nameAr": "M60i",
            "slug": "m60i",
            "year": 2026,
            "engine": "M60i",
            "price": 10200000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "BYD",
    "nameAr": "بي واى دى",
    "slug": "byd",
    "models": [
      {
        "nameEn": "Atto 8",
        "nameAr": "Atto 8",
        "slug": "atto-8",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 2849000
          }
        ]
      },
      {
        "nameEn": "Dolphin Surf",
        "nameAr": "دولفين سيرف",
        "slug": "dolphin-surf",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2027,
            "engine": "EV",
            "price": 949900
          }
        ]
      },
      {
        "nameEn": "M9",
        "nameAr": "M9",
        "slug": "m9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 3850000
          },
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 3300000
          }
        ]
      },
      {
        "nameEn": "Seal U",
        "nameAr": "سيل يو",
        "slug": "seal-u",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2024,
            "engine": "Comfort",
            "price": 1
          },
          {
            "nameEn": "Design",
            "nameAr": "Design",
            "slug": "design",
            "year": 2024,
            "engine": "Design",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Sealion 5",
        "nameAr": "سيليون 5",
        "slug": "sealion-5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1650000
          },
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "Sealion 6",
        "nameAr": "سيليون 6",
        "slug": "sealion-6",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "DM-i Luxury",
            "nameAr": "DM-i Luxury",
            "slug": "dm-i-luxury",
            "year": 2026,
            "engine": "DM-i Luxury",
            "price": 2100000
          },
          {
            "nameEn": "DM-i Ultra",
            "nameAr": "DM-i Ultra",
            "slug": "dm-i-ultra",
            "year": 2026,
            "engine": "DM-i Ultra",
            "price": 1900000
          },
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2026,
            "engine": "EV",
            "price": 1700000
          },
          {
            "nameEn": "DMi Luxury",
            "nameAr": "DMi Luxury",
            "slug": "dmi-luxury",
            "year": 2027,
            "engine": "DMi Luxury",
            "price": 2149900
          },
          {
            "nameEn": "DMi Ultra",
            "nameAr": "DMi Ultra",
            "slug": "dmi-ultra",
            "year": 2027,
            "engine": "DMi Ultra",
            "price": 1949900
          },
          {
            "nameEn": "EV Luxury",
            "nameAr": "EV Luxury",
            "slug": "ev-luxury",
            "year": 2027,
            "engine": "EV Luxury",
            "price": 1799000
          },
          {
            "nameEn": "EV Ultra",
            "nameAr": "EV Ultra",
            "slug": "ev-ultra",
            "year": 2027,
            "engine": "EV Ultra",
            "price": 1749900
          }
        ]
      },
      {
        "nameEn": "Shark 6 DMO",
        "nameAr": "شارك 6 دي إم آو",
        "slug": "shark-6-dmo",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "DMO",
            "nameAr": "DMO",
            "slug": "dmo",
            "year": 2026,
            "engine": "DMO",
            "price": 3359900
          }
        ]
      },
      {
        "nameEn": "Ti7",
        "nameAr": "Ti7",
        "slug": "ti7",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury 4WD",
            "nameAr": "Luxury 4WD",
            "slug": "luxury-4wd",
            "year": 2027,
            "engine": "Luxury 4WD",
            "price": 2799000
          },
          {
            "nameEn": "Ultra 2WD",
            "nameAr": "Ultra 2WD",
            "slug": "ultra-2wd",
            "year": 2027,
            "engine": "Ultra 2WD",
            "price": 2349000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Cadillac",
    "nameAr": "كاديلاك",
    "slug": "cadillac",
    "models": [
      {
        "nameEn": "Escalade IQ",
        "nameAr": "إسكاليد IQ",
        "slug": "escalade-iq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premium Sport AWD",
            "nameAr": "Premium Sport AWD",
            "slug": "premium-sport-awd",
            "year": 2026,
            "engine": "Premium Sport AWD",
            "price": 10949900
          }
        ]
      },
      {
        "nameEn": "Escalade IQL",
        "nameAr": "إسكاليد IQL",
        "slug": "escalade-iql",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premium Luxury AWD",
            "nameAr": "Premium Luxury AWD",
            "slug": "premium-luxury-awd",
            "year": 2026,
            "engine": "Premium Luxury AWD",
            "price": 12249900
          }
        ]
      },
      {
        "nameEn": "Lyriq",
        "nameAr": "ليريك",
        "slug": "lyriq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Signature Luxury AWD",
            "nameAr": "Signature Luxury AWD",
            "slug": "signature-luxury-awd",
            "year": 2026,
            "engine": "Signature Luxury AWD",
            "price": 5649900
          }
        ]
      },
      {
        "nameEn": "Optiq",
        "nameAr": "أوبتيك",
        "slug": "optiq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premium Luxury AWD",
            "nameAr": "Premium Luxury AWD",
            "slug": "premium-luxury-awd",
            "year": 2026,
            "engine": "Premium Luxury AWD",
            "price": 4149900
          }
        ]
      },
      {
        "nameEn": "Vistiq",
        "nameAr": "فيستيك",
        "slug": "vistiq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury AWD",
            "nameAr": "Luxury AWD",
            "slug": "luxury-awd",
            "year": 2026,
            "engine": "Luxury AWD",
            "price": 6490900
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Changan",
    "nameAr": "شانجان",
    "slug": "changan",
    "models": [
      {
        "nameEn": "CS35 PLUS",
        "nameAr": "CS35 PLUS",
        "slug": "cs35-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "ELITE",
            "nameAr": "ELITE",
            "slug": "elite",
            "year": 2026,
            "engine": "ELITE",
            "price": 1049000
          },
          {
            "nameEn": "FLAGSHIP",
            "nameAr": "FLAGSHIP",
            "slug": "flagship",
            "year": 2026,
            "engine": "FLAGSHIP",
            "price": 1249000
          },
          {
            "nameEn": "PREMIUM",
            "nameAr": "PREMIUM",
            "slug": "premium",
            "year": 2026,
            "engine": "PREMIUM",
            "price": 1149000
          }
        ]
      },
      {
        "nameEn": "CS55-Plus",
        "nameAr": "CS55 بلس",
        "slug": "cs55-plus",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Elite (Local)",
            "nameAr": "Elite (Local)",
            "slug": "elite-local",
            "year": 2026,
            "engine": "Elite (Local)",
            "price": 1100000
          },
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1375000
          },
          {
            "nameEn": "Premium (Local)",
            "nameAr": "Premium (Local)",
            "slug": "premium-local",
            "year": 2026,
            "engine": "Premium (Local)",
            "price": 1230000
          },
          {
            "nameEn": "Elite",
            "nameAr": "إليت",
            "slug": "elite",
            "year": 2027,
            "engine": "Elite",
            "price": 1130000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1260000
          }
        ]
      },
      {
        "nameEn": "CS75 Plus",
        "nameAr": "CS75 Plus",
        "slug": "cs75-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "FLAGSHIP",
            "nameAr": "FLAGSHIP",
            "slug": "flagship",
            "year": 2026,
            "engine": "FLAGSHIP",
            "price": 1630000
          },
          {
            "nameEn": "PREMIUM",
            "nameAr": "PREMIUM",
            "slug": "premium",
            "year": 2026,
            "engine": "PREMIUM",
            "price": 1480000
          }
        ]
      },
      {
        "nameEn": "EADO",
        "nameAr": "إيدو",
        "slug": "eado",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Elite",
            "nameAr": "إليت",
            "slug": "elite",
            "year": 2026,
            "engine": "Elite",
            "price": 875000
          },
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 925000
          }
        ]
      },
      {
        "nameEn": "Eado Plus",
        "nameAr": "إيدو بلس",
        "slug": "eado-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Elite",
            "nameAr": "إليت",
            "slug": "elite",
            "year": 2026,
            "engine": "Elite",
            "price": 1049000
          },
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1200000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1100000
          }
        ]
      },
      {
        "nameEn": "UNI-T",
        "nameAr": "UNI-T",
        "slug": "uni-t",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1499000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1399000
          }
        ]
      },
      {
        "nameEn": "UNI-V",
        "nameAr": "UNI-V",
        "slug": "uni-v",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1325000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Chery",
    "nameAr": "شيري",
    "slug": "chery",
    "models": [
      {
        "nameEn": "Arrizo 5",
        "nameAr": "اريزو 5",
        "slug": "arrizo-5",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "CVT Baseline",
            "nameAr": "CVT Baseline",
            "slug": "cvt-baseline",
            "year": 2026,
            "engine": "CVT Baseline",
            "price": 765000
          },
          {
            "nameEn": "CVT Highline",
            "nameAr": "CVT Highline",
            "slug": "cvt-highline",
            "year": 2026,
            "engine": "CVT Highline",
            "price": 805000
          },
          {
            "nameEn": "M/T Baseline",
            "nameAr": "M/T Baseline",
            "slug": "m-t-baseline",
            "year": 2026,
            "engine": "M/T Baseline",
            "price": 720000
          },
          {
            "nameEn": "1.5 CVT Basic",
            "nameAr": "1.5 CVT Basic",
            "slug": "1-5-cvt-basic",
            "year": 2027,
            "engine": "1.5 CVT Basic",
            "price": 775000
          },
          {
            "nameEn": "1.5 CVT Comfort",
            "nameAr": "1.5 CVT Comfort",
            "slug": "1-5-cvt-comfort",
            "year": 2027,
            "engine": "1.5 CVT Comfort",
            "price": 815000
          },
          {
            "nameEn": "1.5 MT Basic",
            "nameAr": "1.5 MT Basic",
            "slug": "1-5-mt-basic",
            "year": 2027,
            "engine": "1.5 MT Basic",
            "price": 730000
          }
        ]
      },
      {
        "nameEn": "Arrizo 6 GT",
        "nameAr": "أريزو 6 جي تي",
        "slug": "arrizo-6-gt",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 989000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1049000
          },
          {
            "nameEn": "1.5T DCT Comfort",
            "nameAr": "1.5T DCT Comfort",
            "slug": "1-5t-dct-comfort",
            "year": 2027,
            "engine": "1.5T DCT Comfort",
            "price": 995000
          },
          {
            "nameEn": "1.5T DCT Luxury",
            "nameAr": "1.5T DCT Luxury",
            "slug": "1-5t-dct-luxury",
            "year": 2027,
            "engine": "1.5T DCT Luxury",
            "price": 1060000
          }
        ]
      },
      {
        "nameEn": "Arrizo 8",
        "nameAr": "اريزو 8",
        "slug": "arrizo-8",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1380000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1300000
          }
        ]
      },
      {
        "nameEn": "eQ7",
        "nameAr": "إي كيو 7",
        "slug": "eq7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1599000
          }
        ]
      },
      {
        "nameEn": "Tiggo 3",
        "nameAr": "تيجو 3",
        "slug": "tiggo-3",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "Facelift CVT Tinted Glass",
            "nameAr": "Facelift CVT Tinted Glass",
            "slug": "facelift-cvt-tinted-glass",
            "year": 2024,
            "engine": "Facelift CVT Tinted Glass",
            "price": 830000
          }
        ]
      },
      {
        "nameEn": "Tiggo 4 PRO",
        "nameAr": "تيجو 4 برو",
        "slug": "tiggo-4-pro",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 950000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 990000
          },
          {
            "nameEn": "Luxury Turbo",
            "nameAr": "Luxury Turbo",
            "slug": "luxury-turbo",
            "year": 2026,
            "engine": "Luxury Turbo",
            "price": 1055000
          },
          {
            "nameEn": "COMFORT",
            "nameAr": "COMFORT",
            "slug": "comfort-2",
            "year": 2027,
            "engine": "COMFORT",
            "price": 960000
          },
          {
            "nameEn": "LUXURY",
            "nameAr": "LUXURY",
            "slug": "luxury-2",
            "year": 2027,
            "engine": "LUXURY",
            "price": 1000000
          },
          {
            "nameEn": "LUXURY TURBO",
            "nameAr": "LUXURY TURBO",
            "slug": "luxury-turbo-2",
            "year": 2027,
            "engine": "LUXURY TURBO",
            "price": 1065000
          }
        ]
      },
      {
        "nameEn": "Tiggo 7",
        "nameAr": "تيجو 7",
        "slug": "tiggo-7",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1000000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1070000
          },
          {
            "nameEn": "COMFORT",
            "nameAr": "COMFORT",
            "slug": "comfort-2",
            "year": 2027,
            "engine": "COMFORT",
            "price": 1010000
          },
          {
            "nameEn": "LUXURY",
            "nameAr": "LUXURY",
            "slug": "luxury-2",
            "year": 2027,
            "engine": "LUXURY",
            "price": 1080000
          }
        ]
      },
      {
        "nameEn": "Tiggo 7 Pro",
        "nameAr": "تيجو 7 برو",
        "slug": "tiggo-7-pro",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1130000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1230000
          }
        ]
      },
      {
        "nameEn": "Tiggo 7 Pro Max",
        "nameAr": "تيجو 7 برو ماكس",
        "slug": "tiggo-7-pro-max",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1300000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1400000
          },
          {
            "nameEn": "COMFORT",
            "nameAr": "COMFORT",
            "slug": "comfort-2",
            "year": 2027,
            "engine": "COMFORT",
            "price": 1320000
          },
          {
            "nameEn": "LUXURY",
            "nameAr": "LUXURY",
            "slug": "luxury-2",
            "year": 2027,
            "engine": "LUXURY",
            "price": 1420000
          }
        ]
      },
      {
        "nameEn": "Tiggo 8",
        "nameAr": "تيجو 8",
        "slug": "tiggo-8",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort 7 Seat",
            "nameAr": "Comfort 7 Seat",
            "slug": "comfort-7-seat",
            "year": 2026,
            "engine": "Comfort 7 Seat",
            "price": 1155000
          },
          {
            "nameEn": "Luxury 5 Seat",
            "nameAr": "Luxury 5 Seat",
            "slug": "luxury-5-seat",
            "year": 2026,
            "engine": "Luxury 5 Seat",
            "price": 1215000
          },
          {
            "nameEn": "Luxury 7 Seat",
            "nameAr": "Luxury 7 Seat",
            "slug": "luxury-7-seat",
            "year": 2026,
            "engine": "Luxury 7 Seat",
            "price": 1255000
          },
          {
            "nameEn": "COMFORT 7 Seat",
            "nameAr": "COMFORT 7 Seat",
            "slug": "comfort-7-seat-2",
            "year": 2027,
            "engine": "COMFORT 7 Seat",
            "price": 1170000
          },
          {
            "nameEn": "LUXURY 5 Seat",
            "nameAr": "LUXURY 5 Seat",
            "slug": "luxury-5-seat-2",
            "year": 2027,
            "engine": "LUXURY 5 Seat",
            "price": 1230000
          },
          {
            "nameEn": "LUXURY 7 Seat",
            "nameAr": "LUXURY 7 Seat",
            "slug": "luxury-7-seat-2",
            "year": 2027,
            "engine": "LUXURY 7 Seat",
            "price": 1270000
          }
        ]
      },
      {
        "nameEn": "Tiggo 8 PRO",
        "nameAr": "تيجو 8 برو",
        "slug": "tiggo-8-pro",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1475000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1375000
          }
        ]
      },
      {
        "nameEn": "Tiggo 8 Pro Max",
        "nameAr": "تيجو 8 برو ماكس",
        "slug": "tiggo-8-pro-max",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1690000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1590000
          },
          {
            "nameEn": "1.6T 6DCT Flagship",
            "nameAr": "1.6T 6DCT Flagship",
            "slug": "1-6t-6dct-flagship",
            "year": 2027,
            "engine": "1.6T 6DCT Flagship",
            "price": 1720000
          },
          {
            "nameEn": "1.6T 6DCT Luxury",
            "nameAr": "1.6T 6DCT Luxury",
            "slug": "1-6t-6dct-luxury",
            "year": 2027,
            "engine": "1.6T 6DCT Luxury",
            "price": 1620000
          }
        ]
      },
      {
        "nameEn": "Tiggo 9",
        "nameAr": "تيجو 9",
        "slug": "tiggo-9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "PHEV 1.5T DHT LUXURY",
            "nameAr": "PHEV 1.5T DHT LUXURY",
            "slug": "phev-1-5t-dht-luxury",
            "year": 2026,
            "engine": "PHEV 1.5T DHT LUXURY",
            "price": 2100000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Chevrolet",
    "nameAr": "شيفروليه",
    "slug": "chevrolet",
    "models": [
      {
        "nameEn": "Captiva",
        "nameAr": "كابتيفا",
        "slug": "captiva",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "LV3 (7 Seats)",
            "nameAr": "LV3 (7 Seats)",
            "slug": "lv3-7-seats",
            "year": 2026,
            "engine": "LV3 (7 Seats)",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "Captiva EV",
        "nameAr": "كابتيفا EV",
        "slug": "captiva-ev",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premier",
            "nameAr": "Premier",
            "slug": "premier",
            "year": 2026,
            "engine": "Premier",
            "price": 1499000
          }
        ]
      },
      {
        "nameEn": "N300",
        "nameAr": "N300",
        "slug": "n300",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Baseline",
            "nameAr": "Baseline",
            "slug": "baseline",
            "year": 2025,
            "engine": "Baseline",
            "price": 435500
          }
        ]
      },
      {
        "nameEn": "Optra",
        "nameAr": "اوبترا",
        "slug": "optra",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "LS",
            "nameAr": "LS",
            "slug": "ls",
            "year": 2026,
            "engine": "LS",
            "price": 745000
          },
          {
            "nameEn": "LT",
            "nameAr": "LT",
            "slug": "lt",
            "year": 2026,
            "engine": "LT",
            "price": 770000
          },
          {
            "nameEn": "LS",
            "nameAr": "LS",
            "slug": "ls-2",
            "year": 2027,
            "engine": "LS",
            "price": 765000
          },
          {
            "nameEn": "LT",
            "nameAr": "LT",
            "slug": "lt-2",
            "year": 2027,
            "engine": "LT",
            "price": 790000
          }
        ]
      },
      {
        "nameEn": "S10 Max",
        "nameAr": "S10 Max",
        "slug": "s10-max",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "2.0 A/T",
            "nameAr": "2.0 A/T",
            "slug": "2-0-a-t",
            "year": 2026,
            "engine": "2.0 A/T",
            "price": 5400000
          }
        ]
      },
      {
        "nameEn": "Spark EUV",
        "nameAr": "سبارك EUV",
        "slug": "spark-euv",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "ACTIV",
            "nameAr": "ACTIV",
            "slug": "activ",
            "year": 2026,
            "engine": "ACTIV",
            "price": 1099000
          }
        ]
      },
      {
        "nameEn": "TFR",
        "nameAr": "الدبابة TFR",
        "slug": "tfr",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1165000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Citroen",
    "nameAr": "ستروين",
    "slug": "citroen",
    "models": [
      {
        "nameEn": "C4 Facelift",
        "nameAr": "C4 Facelift",
        "slug": "c4-facelift",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Shine",
            "nameAr": "Shine",
            "slug": "shine",
            "year": 2026,
            "engine": "Shine",
            "price": 1495000
          }
        ]
      },
      {
        "nameEn": "C4 X",
        "nameAr": "C4 X",
        "slug": "c4-x",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Feel",
            "nameAr": "Feel",
            "slug": "feel",
            "year": 2026,
            "engine": "Feel",
            "price": 1290000
          },
          {
            "nameEn": "Shine",
            "nameAr": "Shine",
            "slug": "shine",
            "year": 2026,
            "engine": "Shine",
            "price": 1420000
          }
        ]
      },
      {
        "nameEn": "C5 Aircross",
        "nameAr": "C5 اير كروس",
        "slug": "c5-aircross",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Advanced",
            "nameAr": "أدفانسد",
            "slug": "advanced",
            "year": 2027,
            "engine": "Advanced",
            "price": 1695000
          },
          {
            "nameEn": "Ultimate",
            "nameAr": "ألتيمايت",
            "slug": "ultimate",
            "year": 2027,
            "engine": "Ultimate",
            "price": 1935000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Cupra",
    "nameAr": "كوبرا",
    "slug": "cupra",
    "models": [
      {
        "nameEn": "Formentor",
        "nameAr": "فورمينتور",
        "slug": "formentor",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5 eTSI",
            "nameAr": "1.5 eTSI",
            "slug": "1-5-etsi",
            "year": 2026,
            "engine": "1.5 eTSI",
            "price": 2099000
          }
        ]
      },
      {
        "nameEn": "Leon",
        "nameAr": "ليون",
        "slug": "leon",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.4L",
            "nameAr": "1.4L",
            "slug": "1-4l",
            "year": 2026,
            "engine": "1.4L",
            "price": 1949000
          }
        ]
      },
      {
        "nameEn": "Terramar",
        "nameAr": "تيرامار",
        "slug": "terramar",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Control",
            "nameAr": "Control",
            "slug": "control",
            "year": 2026,
            "engine": "Control",
            "price": 2449000
          },
          {
            "nameEn": "Impulse",
            "nameAr": "Impulse",
            "slug": "impulse",
            "year": 2026,
            "engine": "Impulse",
            "price": 2349000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Deepal",
    "nameAr": "ديبال",
    "slug": "deepal",
    "models": [
      {
        "nameEn": "G318",
        "nameAr": "G318",
        "slug": "g318",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "ADVENTURE",
            "nameAr": "ADVENTURE",
            "slug": "adventure",
            "year": 2026,
            "engine": "ADVENTURE",
            "price": 2300000
          },
          {
            "nameEn": "PREMIUM",
            "nameAr": "PREMIUM",
            "slug": "premium",
            "year": 2026,
            "engine": "PREMIUM",
            "price": 2150000
          }
        ]
      },
      {
        "nameEn": "S05",
        "nameAr": "S05",
        "slug": "s05",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BEV",
            "nameAr": "BEV",
            "slug": "bev",
            "year": 2026,
            "engine": "BEV",
            "price": 1825000
          },
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2026,
            "engine": "REEV",
            "price": 1675000
          }
        ]
      },
      {
        "nameEn": "S07",
        "nameAr": "S07",
        "slug": "s07",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BEV",
            "nameAr": "BEV",
            "slug": "bev",
            "year": 2026,
            "engine": "BEV",
            "price": 2090000
          },
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2026,
            "engine": "REEV",
            "price": 2000000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "DFSK",
    "nameAr": "دي إف إس كيه",
    "slug": "dfsk",
    "models": [
      {
        "nameEn": "600",
        "nameAr": "600",
        "slug": "600",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5 A/T",
            "nameAr": "1.5 A/T",
            "slug": "1-5-a-t",
            "year": 2026,
            "engine": "1.5 A/T",
            "price": 1388900
          }
        ]
      },
      {
        "nameEn": "E5",
        "nameAr": "E5",
        "slug": "e5",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2027,
            "engine": "REEV",
            "price": 1294900
          }
        ]
      },
      {
        "nameEn": "E5 Plus",
        "nameAr": "E5 بلس",
        "slug": "e5-plus",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2027,
            "engine": "REEV",
            "price": 1494900
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Dongfeng",
    "nameAr": "دونج فينج",
    "slug": "dongfeng",
    "models": [
      {
        "nameEn": "007",
        "nameAr": "007",
        "slug": "007",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2026,
            "engine": "REEV",
            "price": 1550000
          }
        ]
      },
      {
        "nameEn": "008",
        "nameAr": "008",
        "slug": "008",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2026,
            "engine": "REEV",
            "price": 1950000
          }
        ]
      },
      {
        "nameEn": "Box",
        "nameAr": "بوكس",
        "slug": "box",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "330",
            "nameAr": "330",
            "slug": "330",
            "year": 2026,
            "engine": "330",
            "price": 770000
          },
          {
            "nameEn": "430",
            "nameAr": "430",
            "slug": "430",
            "year": 2026,
            "engine": "430",
            "price": 870000
          }
        ]
      },
      {
        "nameEn": "Mage",
        "nameAr": "ميج",
        "slug": "mage",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1190000
          },
          {
            "nameEn": "Signature",
            "nameAr": "Signature",
            "slug": "signature",
            "year": 2026,
            "engine": "Signature",
            "price": 1290000
          }
        ]
      },
      {
        "nameEn": "Mage EV",
        "nameAr": "ميج إي في",
        "slug": "mage-ev",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "445",
            "nameAr": "445",
            "slug": "445",
            "year": 2026,
            "engine": "445",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Shine",
        "nameAr": "شاين",
        "slug": "shine",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Advance",
            "nameAr": "أدفانس",
            "slug": "advance",
            "year": 2026,
            "engine": "Advance",
            "price": 790000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 945000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Dongfeng Aeolus",
    "nameAr": "دونج فينج أيولوس",
    "slug": "dongfeng-aeolus",
    "models": [
      {
        "nameEn": "A30",
        "nameAr": "A30",
        "slug": "a30",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "1.5 A/T SHINE -Limited Edition",
            "nameAr": "1.5 A/T SHINE -Limited Edition",
            "slug": "1-5-a-t-shine-limited-edition",
            "year": 2024,
            "engine": "1.5 A/T SHINE -Limited Edition",
            "price": 1185000
          }
        ]
      },
      {
        "nameEn": "E70 Pro",
        "nameAr": "إي 70 برو",
        "slug": "e70-pro",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "E70 pro",
            "nameAr": "E70 pro",
            "slug": "e70-pro",
            "year": 2023,
            "engine": "E70 pro",
            "price": 1125000
          }
        ]
      },
      {
        "nameEn": "Huge Hybrid",
        "nameAr": "هيوج هايبرد",
        "slug": "huge-hybrid",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Hybrid",
            "nameAr": "Hybrid",
            "slug": "hybrid",
            "year": 2025,
            "engine": "Hybrid",
            "price": 1495000
          },
          {
            "nameEn": "Hybrid Special Color",
            "nameAr": "Hybrid Special Color",
            "slug": "hybrid-special-color",
            "year": 2025,
            "engine": "Hybrid Special Color",
            "price": 1545000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "DS",
    "nameAr": "دي إس",
    "slug": "ds",
    "models": [
      {
        "nameEn": "DS 4",
        "nameAr": "DS 4",
        "slug": "ds-4",
        "yearStart": 2024,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.6 A/T Trocadéro",
            "nameAr": "1.6 A/T Trocadéro",
            "slug": "1-6-a-t-trocadero",
            "year": 2024,
            "engine": "1.6 A/T Trocadéro",
            "price": 2200000
          },
          {
            "nameEn": "1.6 A/T Performance Line",
            "nameAr": "1.6 A/T Performance Line",
            "slug": "1-6-a-t-performance-line",
            "year": 2025,
            "engine": "1.6 A/T Performance Line",
            "price": 2060000
          }
        ]
      },
      {
        "nameEn": "DS 7",
        "nameAr": "DS 7",
        "slug": "ds-7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Etoile",
            "nameAr": "Etoile",
            "slug": "etoile",
            "year": 2026,
            "engine": "Etoile",
            "price": 2450000
          },
          {
            "nameEn": "Pallas",
            "nameAr": "Pallas",
            "slug": "pallas",
            "year": 2026,
            "engine": "Pallas",
            "price": 2250000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "EXEED",
    "nameAr": "إكسيد",
    "slug": "exeed",
    "models": [
      {
        "nameEn": "ES",
        "nameAr": "ES",
        "slug": "es",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2027,
            "engine": "Comfort",
            "price": 1990000
          },
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2027,
            "engine": "Flagship",
            "price": 2440000
          }
        ]
      },
      {
        "nameEn": "ET",
        "nameAr": "ET",
        "slug": "et",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2027,
            "engine": "Flagship",
            "price": 2690000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 2490000
          }
        ]
      },
      {
        "nameEn": "LX",
        "nameAr": "LX",
        "slug": "lx",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 1440000
          }
        ]
      },
      {
        "nameEn": "RX",
        "nameAr": "RX",
        "slug": "rx",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2027,
            "engine": "Flagship",
            "price": 2450000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 2050000
          }
        ]
      },
      {
        "nameEn": "VX",
        "nameAr": "VX",
        "slug": "vx",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2027,
            "engine": "Flagship",
            "price": 2920000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 2620000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Fiat",
    "nameAr": "فيات",
    "slug": "fiat",
    "models": [
      {
        "nameEn": "500X",
        "nameAr": "500X",
        "slug": "500x",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.4 AT Cross",
            "nameAr": "1.4 AT Cross",
            "slug": "1-4-at-cross",
            "year": 2026,
            "engine": "1.4 AT Cross",
            "price": 1100000
          }
        ]
      },
      {
        "nameEn": "E-Ulysee",
        "nameAr": "إي يوليسي",
        "slug": "e-ulysee",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Lounge",
            "nameAr": "Lounge",
            "slug": "lounge",
            "year": 2026,
            "engine": "Lounge",
            "price": 2790000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Forthing",
    "nameAr": "فورثينج",
    "slug": "forthing",
    "models": [
      {
        "nameEn": "S7",
        "nameAr": "S7",
        "slug": "s7",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2027,
            "engine": "EV",
            "price": 1290000
          },
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2027,
            "engine": "REEV",
            "price": 1370000
          }
        ]
      },
      {
        "nameEn": "T5 Evo",
        "nameAr": "T5 Evo",
        "slug": "t5-evo",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Exclusive",
            "nameAr": "إكسكلوسف",
            "slug": "exclusive",
            "year": 2027,
            "engine": "Exclusive",
            "price": 1190000
          }
        ]
      },
      {
        "nameEn": "T5 Friday",
        "nameAr": "T5 Friday",
        "slug": "t5-friday",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2027,
            "engine": "EV",
            "price": 1380000
          },
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2027,
            "engine": "REEV",
            "price": 1390000
          }
        ]
      },
      {
        "nameEn": "U-Tour",
        "nameAr": "U-Tour",
        "slug": "u-tour",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Exclusive",
            "nameAr": "إكسكلوسف",
            "slug": "exclusive",
            "year": 2027,
            "engine": "Exclusive",
            "price": 1590000
          }
        ]
      },
      {
        "nameEn": "V9",
        "nameAr": "V9",
        "slug": "v9",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Exclusive",
            "nameAr": "إكسكلوسف",
            "slug": "exclusive",
            "year": 2027,
            "engine": "Exclusive",
            "price": 2600000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "GAC",
    "nameAr": "جي إيه سي",
    "slug": "gac",
    "models": [
      {
        "nameEn": "Aion Y",
        "nameAr": "أيون واي",
        "slug": "aion-y",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BEV AION Y PLUS",
            "nameAr": "BEV AION Y PLUS",
            "slug": "bev-aion-y-plus",
            "year": 2026,
            "engine": "BEV AION Y PLUS",
            "price": 1300000
          }
        ]
      },
      {
        "nameEn": "EMPOW",
        "nameAr": "إمباو",
        "slug": "empow",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Baseline",
            "nameAr": "Baseline",
            "slug": "baseline",
            "year": 2026,
            "engine": "Baseline",
            "price": 1075000
          },
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1189000
          },
          {
            "nameEn": "Sportline",
            "nameAr": "Sportline",
            "slug": "sportline",
            "year": 2026,
            "engine": "Sportline",
            "price": 1295000
          },
          {
            "nameEn": "Elegance",
            "nameAr": "Elegance",
            "slug": "elegance",
            "year": 2027,
            "engine": "Elegance",
            "price": 1075000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1189000
          },
          {
            "nameEn": "S-Style",
            "nameAr": "S-Style",
            "slug": "s-style",
            "year": 2027,
            "engine": "S-Style",
            "price": 1295000
          }
        ]
      },
      {
        "nameEn": "EMZOOM",
        "nameAr": "إم زووم",
        "slug": "emzoom",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 994000
          },
          {
            "nameEn": "Elegance",
            "nameAr": "Elegance",
            "slug": "elegance",
            "year": 2026,
            "engine": "Elegance",
            "price": 1109000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1189000
          },
          {
            "nameEn": "R-Style",
            "nameAr": "R-Style",
            "slug": "r-style",
            "year": 2026,
            "engine": "R-Style",
            "price": 1295000
          },
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort-2",
            "year": 2027,
            "engine": "Comfort",
            "price": 994000
          },
          {
            "nameEn": "Elegance",
            "nameAr": "Elegance",
            "slug": "elegance-2",
            "year": 2027,
            "engine": "Elegance",
            "price": 1109000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium-2",
            "year": 2027,
            "engine": "Premium",
            "price": 1189000
          },
          {
            "nameEn": "R-Style",
            "nameAr": "R-Style",
            "slug": "r-style-2",
            "year": 2027,
            "engine": "R-Style",
            "price": 1295000
          }
        ]
      },
      {
        "nameEn": "GS4 Max",
        "nameAr": "GS4 Max",
        "slug": "gs4-max",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1336000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium-2",
            "year": 2027,
            "engine": "Premium",
            "price": 1336000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Geely",
    "nameAr": "جيلي",
    "slug": "geely",
    "models": [
      {
        "nameEn": "Cityray",
        "nameAr": "سيتي راي",
        "slug": "cityray",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1299000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1379000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 1469000
          }
        ]
      },
      {
        "nameEn": "Coolray",
        "nameAr": "كول راي",
        "slug": "coolray",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 975000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 1075000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 1199000
          }
        ]
      },
      {
        "nameEn": "Emgrand",
        "nameAr": "إمجراند",
        "slug": "emgrand",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 839000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 939000
          }
        ]
      },
      {
        "nameEn": "EX2",
        "nameAr": "EX2",
        "slug": "ex2",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Max",
            "nameAr": "ماكس",
            "slug": "max",
            "year": 2026,
            "engine": "Max",
            "price": 849900
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 749900
          }
        ]
      },
      {
        "nameEn": "EX5",
        "nameAr": "EX5",
        "slug": "ex5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Max",
            "nameAr": "ماكس",
            "slug": "max",
            "year": 2026,
            "engine": "Max",
            "price": 1499900
          },
          {
            "nameEn": "Max+",
            "nameAr": "Max+",
            "slug": "max-2",
            "year": 2026,
            "engine": "Max+",
            "price": 1569900
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1419900
          }
        ]
      },
      {
        "nameEn": "EX5 EM-i",
        "nameAr": "EX5 EM-i",
        "slug": "ex5-em-i",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Max",
            "nameAr": "ماكس",
            "slug": "max",
            "year": 2026,
            "engine": "Max",
            "price": 1400000
          },
          {
            "nameEn": "Max+",
            "nameAr": "Max+",
            "slug": "max-2",
            "year": 2026,
            "engine": "Max+",
            "price": 1550000
          }
        ]
      },
      {
        "nameEn": "GX3 PRO",
        "nameAr": "GX3 PRO",
        "slug": "gx3-pro",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T Premium",
            "nameAr": "1.5 A/T Premium",
            "slug": "1-5-a-t-premium",
            "year": 2025,
            "engine": "1.5 A/T Premium",
            "price": 850000
          }
        ]
      },
      {
        "nameEn": "Okavango",
        "nameAr": "اوكافانجو",
        "slug": "okavango",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T Premium",
            "nameAr": "1.5 A/T Premium",
            "slug": "1-5-a-t-premium",
            "year": 2025,
            "engine": "1.5 A/T Premium",
            "price": 1639000
          }
        ]
      },
      {
        "nameEn": "Starray",
        "nameAr": "ستار راي",
        "slug": "starray",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2025,
            "engine": "Comfort",
            "price": 1299000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1399000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2025,
            "engine": "Sport",
            "price": 1499000
          },
          {
            "nameEn": "Sport+",
            "nameAr": "Sport+",
            "slug": "sport-2",
            "year": 2025,
            "engine": "Sport+",
            "price": 1569000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Genesis",
    "nameAr": "جينيسيس",
    "slug": "genesis",
    "models": [
      {
        "nameEn": "Electrified G80",
        "nameAr": "Electrified G80",
        "slug": "electrified-g80",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Advanced AWD",
            "nameAr": "Advanced AWD",
            "slug": "advanced-awd",
            "year": 2027,
            "engine": "Advanced AWD",
            "price": 4100000
          },
          {
            "nameEn": "Dynamic AWD",
            "nameAr": "Dynamic AWD",
            "slug": "dynamic-awd",
            "year": 2027,
            "engine": "Dynamic AWD",
            "price": 3500000
          },
          {
            "nameEn": "Performance AWD",
            "nameAr": "Performance AWD",
            "slug": "performance-awd",
            "year": 2027,
            "engine": "Performance AWD",
            "price": 4250000
          }
        ]
      },
      {
        "nameEn": "GV60",
        "nameAr": "GV60",
        "slug": "gv60",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Advanced AWD",
            "nameAr": "Advanced AWD",
            "slug": "advanced-awd",
            "year": 2027,
            "engine": "Advanced AWD",
            "price": 3250000
          },
          {
            "nameEn": "Dynamic RWD",
            "nameAr": "Dynamic RWD",
            "slug": "dynamic-rwd",
            "year": 2027,
            "engine": "Dynamic RWD",
            "price": 2600000
          },
          {
            "nameEn": "Performance AWD",
            "nameAr": "Performance AWD",
            "slug": "performance-awd",
            "year": 2027,
            "engine": "Performance AWD",
            "price": 3550000
          }
        ]
      },
      {
        "nameEn": "GV70",
        "nameAr": "GV70",
        "slug": "gv70",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Advanced AWD",
            "nameAr": "Advanced AWD",
            "slug": "advanced-awd",
            "year": 2027,
            "engine": "Advanced AWD",
            "price": 3850000
          },
          {
            "nameEn": "Dynamic AWD",
            "nameAr": "Dynamic AWD",
            "slug": "dynamic-awd",
            "year": 2027,
            "engine": "Dynamic AWD",
            "price": 3650000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Haval",
    "nameAr": "هافال",
    "slug": "haval",
    "models": [
      {
        "nameEn": "H6",
        "nameAr": "H6",
        "slug": "h6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Platinum",
            "nameAr": "Platinum",
            "slug": "platinum",
            "year": 2026,
            "engine": "Platinum",
            "price": 1375000
          },
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 1565000
          }
        ]
      },
      {
        "nameEn": "H6 HEV",
        "nameAr": "H6 HEV",
        "slug": "h6-hev",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "High Deluxe",
            "nameAr": "High Deluxe",
            "slug": "high-deluxe",
            "year": 2026,
            "engine": "High Deluxe",
            "price": 1515000
          }
        ]
      },
      {
        "nameEn": "H7",
        "nameAr": "H7",
        "slug": "h7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "HEV",
            "nameAr": "HEV",
            "slug": "hev",
            "year": 2026,
            "engine": "HEV",
            "price": 1760000
          },
          {
            "nameEn": "ULTRA BLACK",
            "nameAr": "ULTRA BLACK",
            "slug": "ultra-black",
            "year": 2026,
            "engine": "ULTRA BLACK",
            "price": 1850000
          }
        ]
      },
      {
        "nameEn": "JOLION",
        "nameAr": "جوليان",
        "slug": "jolion",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Deluxe",
            "nameAr": "Deluxe",
            "slug": "deluxe",
            "year": 2027,
            "engine": "Deluxe",
            "price": 1000000
          },
          {
            "nameEn": "High Deluxe",
            "nameAr": "High Deluxe",
            "slug": "high-deluxe",
            "year": 2027,
            "engine": "High Deluxe",
            "price": 1100000
          },
          {
            "nameEn": "Standard",
            "nameAr": "ستاندرد",
            "slug": "standard",
            "year": 2027,
            "engine": "Standard",
            "price": 949000
          }
        ]
      },
      {
        "nameEn": "JOLION PRO",
        "nameAr": "جوليان برو",
        "slug": "jolion-pro",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "High Deluxe",
            "nameAr": "High Deluxe",
            "slug": "high-deluxe",
            "year": 2025,
            "engine": "High Deluxe",
            "price": 1209000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Honda",
    "nameAr": "هوندا",
    "slug": "honda",
    "models": [
      {
        "nameEn": "Accord",
        "nameAr": "أكورد",
        "slug": "accord",
        "yearStart": 2022,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T EX Turbo",
            "nameAr": "1.5 A/T EX Turbo",
            "slug": "1-5-a-t-ex-turbo",
            "year": 2022,
            "engine": "1.5 A/T EX Turbo",
            "price": 2400000
          },
          {
            "nameEn": "1.5 A/T EX Turbo",
            "nameAr": "1.5 A/T EX Turbo",
            "slug": "1-5-a-t-ex-turbo-2",
            "year": 2025,
            "engine": "1.5 A/T EX Turbo",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "CR-V",
        "nameAr": "CR-V",
        "slug": "cr-v",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "1.5 A/T EX 4WD",
            "nameAr": "1.5 A/T EX 4WD",
            "slug": "1-5-a-t-ex-4wd",
            "year": 2024,
            "engine": "1.5 A/T EX 4WD",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "ZR-V",
        "nameAr": "ZR-V",
        "slug": "zr-v",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "1.5 A/T EX",
            "nameAr": "1.5 A/T EX",
            "slug": "1-5-a-t-ex",
            "year": 2024,
            "engine": "1.5 A/T EX",
            "price": 2500000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Hongqi",
    "nameAr": "هونشي",
    "slug": "hongqi",
    "models": [
      {
        "nameEn": "E-HS9",
        "nameAr": "E-HS9",
        "slug": "e-hs9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Executive",
            "nameAr": "إكزيكيوتف",
            "slug": "executive",
            "year": 2026,
            "engine": "Executive",
            "price": 3199000
          }
        ]
      },
      {
        "nameEn": "EH7",
        "nameAr": "EH7",
        "slug": "eh7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BEV",
            "nameAr": "BEV",
            "slug": "bev",
            "year": 2026,
            "engine": "BEV",
            "price": 2199000
          }
        ]
      },
      {
        "nameEn": "EHS7",
        "nameAr": "EHS7",
        "slug": "ehs7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BEV",
            "nameAr": "BEV",
            "slug": "bev",
            "year": 2026,
            "engine": "BEV",
            "price": 2399000
          }
        ]
      },
      {
        "nameEn": "H9",
        "nameAr": "H9",
        "slug": "h9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Executive",
            "nameAr": "إكزيكيوتف",
            "slug": "executive",
            "year": 2026,
            "engine": "Executive",
            "price": 1
          },
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "HS3",
        "nameAr": "HS3",
        "slug": "hs3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5T Luxury",
            "nameAr": "1.5T Luxury",
            "slug": "1-5t-luxury",
            "year": 2026,
            "engine": "1.5T Luxury",
            "price": 1849000
          }
        ]
      },
      {
        "nameEn": "Ousado",
        "nameAr": "أوسادو",
        "slug": "ousado",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1490000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1749000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Hyundai",
    "nameAr": "هيونداى",
    "slug": "hyundai",
    "models": [
      {
        "nameEn": "Elantra AD",
        "nameAr": "النترا AD",
        "slug": "elantra-ad",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Baseline",
            "nameAr": "Baseline",
            "slug": "baseline",
            "year": 2026,
            "engine": "Baseline",
            "price": 999000
          },
          {
            "nameEn": "Modern",
            "nameAr": "Modern",
            "slug": "modern",
            "year": 2026,
            "engine": "Modern",
            "price": 1100000
          },
          {
            "nameEn": "MODERN Sunroof",
            "nameAr": "MODERN Sunroof",
            "slug": "modern-sunroof",
            "year": 2026,
            "engine": "MODERN Sunroof",
            "price": 1115000
          },
          {
            "nameEn": "Topline",
            "nameAr": "Topline",
            "slug": "topline",
            "year": 2026,
            "engine": "Topline",
            "price": 1215000
          },
          {
            "nameEn": "1.6 AT BASELINE",
            "nameAr": "1.6 AT BASELINE",
            "slug": "1-6-at-baseline",
            "year": 2027,
            "engine": "1.6 AT BASELINE",
            "price": 1020000
          },
          {
            "nameEn": "1.6 AT MODERN",
            "nameAr": "1.6 AT MODERN",
            "slug": "1-6-at-modern",
            "year": 2027,
            "engine": "1.6 AT MODERN",
            "price": 1120000
          },
          {
            "nameEn": "1.6 AT MODERN Sunroof",
            "nameAr": "1.6 AT MODERN Sunroof",
            "slug": "1-6-at-modern-sunroof",
            "year": 2027,
            "engine": "1.6 AT MODERN Sunroof",
            "price": 1135000
          },
          {
            "nameEn": "1.6 AT TOPLINE",
            "nameAr": "1.6 AT TOPLINE",
            "slug": "1-6-at-topline",
            "year": 2027,
            "engine": "1.6 AT TOPLINE",
            "price": 1235000
          }
        ]
      },
      {
        "nameEn": "Elantra CN7",
        "nameAr": "النترا CN7",
        "slug": "elantra-cn7",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.6 A/T Black Diamond",
            "nameAr": "1.6 A/T Black Diamond",
            "slug": "1-6-a-t-black-diamond",
            "year": 2025,
            "engine": "1.6 A/T Black Diamond",
            "price": 1930000
          },
          {
            "nameEn": "1.6 A/T CN7 Blaze",
            "nameAr": "1.6 A/T CN7 Blaze",
            "slug": "1-6-a-t-cn7-blaze",
            "year": 2025,
            "engine": "1.6 A/T CN7 Blaze",
            "price": 1530000
          },
          {
            "nameEn": "1.6 A/T CN7 RedLine",
            "nameAr": "1.6 A/T CN7 RedLine",
            "slug": "1-6-a-t-cn7-redline",
            "year": 2025,
            "engine": "1.6 A/T CN7 RedLine",
            "price": 1700000
          },
          {
            "nameEn": "1.6 A/T CN7 Shadow",
            "nameAr": "1.6 A/T CN7 Shadow",
            "slug": "1-6-a-t-cn7-shadow",
            "year": 2025,
            "engine": "1.6 A/T CN7 Shadow",
            "price": 1375000
          }
        ]
      },
      {
        "nameEn": "i 30",
        "nameAr": "i 30",
        "slug": "i-30",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "FB BLAZE",
            "nameAr": "FB BLAZE",
            "slug": "fb-blaze",
            "year": 2026,
            "engine": "FB BLAZE",
            "price": 1200000
          },
          {
            "nameEn": "FB NLINE",
            "nameAr": "FB NLINE",
            "slug": "fb-nline",
            "year": 2026,
            "engine": "FB NLINE",
            "price": 1500000
          },
          {
            "nameEn": "FB REDLINE",
            "nameAr": "FB REDLINE",
            "slug": "fb-redline",
            "year": 2026,
            "engine": "FB REDLINE",
            "price": 1400000
          },
          {
            "nameEn": "HB BLAZE",
            "nameAr": "HB BLAZE",
            "slug": "hb-blaze",
            "year": 2026,
            "engine": "HB BLAZE",
            "price": 1150000
          },
          {
            "nameEn": "HB NLINE",
            "nameAr": "HB NLINE",
            "slug": "hb-nline",
            "year": 2026,
            "engine": "HB NLINE",
            "price": 1450000
          },
          {
            "nameEn": "HB REDLINE",
            "nameAr": "HB REDLINE",
            "slug": "hb-redline",
            "year": 2026,
            "engine": "HB REDLINE",
            "price": 1350000
          },
          {
            "nameEn": "SW BLAZE",
            "nameAr": "SW BLAZE",
            "slug": "sw-blaze",
            "year": 2026,
            "engine": "SW BLAZE",
            "price": 1200000
          },
          {
            "nameEn": "SW REDLINE",
            "nameAr": "SW REDLINE",
            "slug": "sw-redline",
            "year": 2026,
            "engine": "SW REDLINE",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "IONIQ 5",
        "nameAr": "أيونك 5",
        "slug": "ioniq-5",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Connect Plus LR RR",
            "nameAr": "Connect Plus LR RR",
            "slug": "connect-plus-lr-rr",
            "year": 2025,
            "engine": "Connect Plus LR RR",
            "price": 2200000
          },
          {
            "nameEn": "Extreme LR AWD",
            "nameAr": "Extreme LR AWD",
            "slug": "extreme-lr-awd",
            "year": 2025,
            "engine": "Extreme LR AWD",
            "price": 2800000
          },
          {
            "nameEn": "Extreme LR RR",
            "nameAr": "Extreme LR RR",
            "slug": "extreme-lr-rr",
            "year": 2025,
            "engine": "Extreme LR RR",
            "price": 2600000
          },
          {
            "nameEn": "N BOOST 84",
            "nameAr": "N BOOST 84",
            "slug": "n-boost-84",
            "year": 2025,
            "engine": "N BOOST 84",
            "price": 3300000
          }
        ]
      },
      {
        "nameEn": "IONIQ 6",
        "nameAr": "أيونيك 6",
        "slug": "ioniq-6",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Connect Plus Long Range RWD",
            "nameAr": "Connect Plus Long Range RWD",
            "slug": "connect-plus-long-range-rwd",
            "year": 2025,
            "engine": "Connect Plus Long Range RWD",
            "price": 2100000
          },
          {
            "nameEn": "EXTREME LONG RANGE AWD",
            "nameAr": "EXTREME LONG RANGE AWD",
            "slug": "extreme-long-range-awd",
            "year": 2025,
            "engine": "EXTREME LONG RANGE AWD",
            "price": 2550000
          },
          {
            "nameEn": "EXTREME LONG RANGE RWD",
            "nameAr": "EXTREME LONG RANGE RWD",
            "slug": "extreme-long-range-rwd",
            "year": 2025,
            "engine": "EXTREME LONG RANGE RWD",
            "price": 2350000
          }
        ]
      },
      {
        "nameEn": "IONIQ 9",
        "nameAr": "أيونك 9",
        "slug": "ioniq-9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Caligraphy",
            "nameAr": "Caligraphy",
            "slug": "caligraphy",
            "year": 2026,
            "engine": "Caligraphy",
            "price": 3550000
          },
          {
            "nameEn": "Connect",
            "nameAr": "Connect",
            "slug": "connect",
            "year": 2026,
            "engine": "Connect",
            "price": 2900000
          },
          {
            "nameEn": "Extreme",
            "nameAr": "Extreme",
            "slug": "extreme",
            "year": 2026,
            "engine": "Extreme",
            "price": 3250000
          }
        ]
      },
      {
        "nameEn": "Santa Fe",
        "nameAr": "سانتافي",
        "slug": "santa-fe",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "HEV Calligraphy AWD",
            "nameAr": "HEV Calligraphy AWD",
            "slug": "hev-calligraphy-awd",
            "year": 2025,
            "engine": "HEV Calligraphy AWD",
            "price": 3495000
          },
          {
            "nameEn": "HEV Executive RWD",
            "nameAr": "HEV Executive RWD",
            "slug": "hev-executive-rwd",
            "year": 2025,
            "engine": "HEV Executive RWD",
            "price": 2995000
          }
        ]
      },
      {
        "nameEn": "Staria",
        "nameAr": "ستاريا",
        "slug": "staria",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "HEV Premium Lounge 7 Seats",
            "nameAr": "HEV Premium Lounge 7 Seats",
            "slug": "hev-premium-lounge-7-seats",
            "year": 2025,
            "engine": "HEV Premium Lounge 7 Seats",
            "price": 3650000
          }
        ]
      },
      {
        "nameEn": "Tucson",
        "nameAr": "توسان",
        "slug": "tucson",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "BLACK DIAMOND",
            "nameAr": "BLACK DIAMOND",
            "slug": "black-diamond",
            "year": 2026,
            "engine": "BLACK DIAMOND",
            "price": 2200000
          },
          {
            "nameEn": "BLAZE",
            "nameAr": "BLAZE",
            "slug": "blaze",
            "year": 2026,
            "engine": "BLAZE",
            "price": 1850000
          },
          {
            "nameEn": "NIGHT",
            "nameAr": "NIGHT",
            "slug": "night",
            "year": 2026,
            "engine": "NIGHT",
            "price": 2100000
          },
          {
            "nameEn": "NLINE (AWD)",
            "nameAr": "NLINE (AWD)",
            "slug": "nline-awd",
            "year": 2026,
            "engine": "NLINE (AWD)",
            "price": 2300000
          },
          {
            "nameEn": "REDLINE",
            "nameAr": "REDLINE",
            "slug": "redline",
            "year": 2026,
            "engine": "REDLINE",
            "price": 1950000
          },
          {
            "nameEn": "REDLINE - N PACK",
            "nameAr": "REDLINE - N PACK",
            "slug": "redline-n-pack",
            "year": 2026,
            "engine": "REDLINE - N PACK",
            "price": 2025000
          },
          {
            "nameEn": "SHADOW",
            "nameAr": "SHADOW",
            "slug": "shadow",
            "year": 2026,
            "engine": "SHADOW",
            "price": 1700000
          },
          {
            "nameEn": "BLACK DIAMOND",
            "nameAr": "BLACK DIAMOND",
            "slug": "black-diamond-2",
            "year": 2027,
            "engine": "BLACK DIAMOND",
            "price": 2300000
          },
          {
            "nameEn": "BLAZE",
            "nameAr": "BLAZE",
            "slug": "blaze-2",
            "year": 2027,
            "engine": "BLAZE",
            "price": 1950000
          },
          {
            "nameEn": "NIGHT",
            "nameAr": "NIGHT",
            "slug": "night-2",
            "year": 2027,
            "engine": "NIGHT",
            "price": 2200000
          },
          {
            "nameEn": "NLINE (AWD)",
            "nameAr": "NLINE (AWD)",
            "slug": "nline-awd-2",
            "year": 2027,
            "engine": "NLINE (AWD)",
            "price": 2400000
          },
          {
            "nameEn": "REDLINE",
            "nameAr": "REDLINE",
            "slug": "redline-2",
            "year": 2027,
            "engine": "REDLINE",
            "price": 2050000
          },
          {
            "nameEn": "REDLINE (N Pack)",
            "nameAr": "REDLINE (N Pack)",
            "slug": "redline-n-pack-2",
            "year": 2027,
            "engine": "REDLINE (N Pack)",
            "price": 2125000
          },
          {
            "nameEn": "SHADOW",
            "nameAr": "SHADOW",
            "slug": "shadow-2",
            "year": 2027,
            "engine": "SHADOW",
            "price": 1800000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "IM Motors",
    "nameAr": "أي إم موتورز",
    "slug": "im-motors",
    "models": [
      {
        "nameEn": "IM5",
        "nameAr": "IM5",
        "slug": "im5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "100KW AWD",
            "nameAr": "100KW AWD",
            "slug": "100kw-awd",
            "year": 2026,
            "engine": "100KW AWD",
            "price": 2450000
          },
          {
            "nameEn": "100KW RWD",
            "nameAr": "100KW RWD",
            "slug": "100kw-rwd",
            "year": 2026,
            "engine": "100KW RWD",
            "price": 2250000
          },
          {
            "nameEn": "75 KW RWD",
            "nameAr": "75 KW RWD",
            "slug": "75-kw-rwd",
            "year": 2026,
            "engine": "75 KW RWD",
            "price": 1900000
          }
        ]
      },
      {
        "nameEn": "IM6",
        "nameAr": "IM6",
        "slug": "im6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "100KW AWD",
            "nameAr": "100KW AWD",
            "slug": "100kw-awd",
            "year": 2026,
            "engine": "100KW AWD",
            "price": 2450000
          },
          {
            "nameEn": "75KW RWD",
            "nameAr": "75KW RWD",
            "slug": "75kw-rwd",
            "year": 2026,
            "engine": "75KW RWD",
            "price": 2100000
          }
        ]
      },
      {
        "nameEn": "LS7",
        "nameAr": "LS7",
        "slug": "ls7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "EV LUXURY",
            "nameAr": "EV LUXURY",
            "slug": "ev-luxury",
            "year": 2026,
            "engine": "EV LUXURY",
            "price": 2800000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "JAC",
    "nameAr": "جاك",
    "slug": "jac",
    "models": [
      {
        "nameEn": "J7",
        "nameAr": "J7",
        "slug": "j7",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Ultimate",
            "nameAr": "ألتيمايت",
            "slug": "ultimate",
            "year": 2025,
            "engine": "Ultimate",
            "price": 1039000
          }
        ]
      },
      {
        "nameEn": "JS2",
        "nameAr": "JS2",
        "slug": "js2",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Smart",
            "nameAr": "Smart",
            "slug": "smart",
            "year": 2026,
            "engine": "Smart",
            "price": 759900
          }
        ]
      },
      {
        "nameEn": "JS4",
        "nameAr": "JS4",
        "slug": "js4",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Ultimate",
            "nameAr": "ألتيمايت",
            "slug": "ultimate",
            "year": 2025,
            "engine": "Ultimate",
            "price": 1039000
          }
        ]
      },
      {
        "nameEn": "JS6",
        "nameAr": "JS6",
        "slug": "js6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1290000
          },
          {
            "nameEn": "Limited",
            "nameAr": "Limited",
            "slug": "limited",
            "year": 2026,
            "engine": "Limited",
            "price": 1240000
          }
        ]
      },
      {
        "nameEn": "JS8 Pro",
        "nameAr": "JS8 Pro",
        "slug": "js8-pro",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1295000
          },
          {
            "nameEn": "Limited",
            "nameAr": "Limited",
            "slug": "limited",
            "year": 2026,
            "engine": "Limited",
            "price": 1245000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Jeep",
    "nameAr": "جيب",
    "slug": "jeep",
    "models": [
      {
        "nameEn": "Grand Cherokee",
        "nameAr": "جراند شيروكى",
        "slug": "grand-cherokee",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "3.6 A/T Limited L 4x4",
            "nameAr": "3.6 A/T Limited L 4x4",
            "slug": "3-6-a-t-limited-l-4x4",
            "year": 2025,
            "engine": "3.6 A/T Limited L 4x4",
            "price": 5400000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Jetour",
    "nameAr": "جيتور",
    "slug": "jetour",
    "models": [
      {
        "nameEn": "Dashing",
        "nameAr": "داشينج",
        "slug": "dashing",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury 1.5 L",
            "nameAr": "Luxury 1.5 L",
            "slug": "luxury-1-5-l",
            "year": 2027,
            "engine": "Luxury 1.5 L",
            "price": 1330000
          },
          {
            "nameEn": "Luxury 1.6 L",
            "nameAr": "Luxury 1.6 L",
            "slug": "luxury-1-6-l",
            "year": 2027,
            "engine": "Luxury 1.6 L",
            "price": 1480000
          }
        ]
      },
      {
        "nameEn": "T1",
        "nameAr": "T1",
        "slug": "t1",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 1730000
          },
          {
            "nameEn": "Matt Colour",
            "nameAr": "Matt Colour",
            "slug": "matt-colour",
            "year": 2027,
            "engine": "Matt Colour",
            "price": 1760000
          }
        ]
      },
      {
        "nameEn": "T2",
        "nameAr": "T2",
        "slug": "t2",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "i-DM",
            "nameAr": "i-DM",
            "slug": "i-dm",
            "year": 2027,
            "engine": "i-DM",
            "price": 2150000
          },
          {
            "nameEn": "Luxury 1.5 L",
            "nameAr": "Luxury 1.5 L",
            "slug": "luxury-1-5-l",
            "year": 2027,
            "engine": "Luxury 1.5 L",
            "price": 1900000
          },
          {
            "nameEn": "Matt Colour",
            "nameAr": "Matt Colour",
            "slug": "matt-colour",
            "year": 2027,
            "engine": "Matt Colour",
            "price": 1930000
          }
        ]
      },
      {
        "nameEn": "X70",
        "nameAr": "X70",
        "slug": "x70",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort - FL",
            "nameAr": "Comfort - FL",
            "slug": "comfort-fl",
            "year": 2026,
            "engine": "Comfort - FL",
            "price": 1095000
          },
          {
            "nameEn": "Luxury - FL",
            "nameAr": "Luxury - FL",
            "slug": "luxury-fl",
            "year": 2026,
            "engine": "Luxury - FL",
            "price": 1240000
          }
        ]
      },
      {
        "nameEn": "X70 Plus CKD",
        "nameAr": "X70 Plus CKD",
        "slug": "x70-plus-ckd",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2027,
            "engine": "Luxury",
            "price": 1275000
          }
        ]
      },
      {
        "nameEn": "X90 Plus",
        "nameAr": "X90 Plus",
        "slug": "x90-plus",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Luxury FL",
            "nameAr": "Luxury FL",
            "slug": "luxury-fl",
            "year": 2027,
            "engine": "Luxury FL",
            "price": 1560000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "JMC",
    "nameAr": "جيه أم سي",
    "slug": "jmc",
    "models": [
      {
        "nameEn": "Boarding",
        "nameAr": "بوردينج",
        "slug": "boarding",
        "yearStart": 2025,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5 Diesel",
            "nameAr": "1.5 Diesel",
            "slug": "1-5-diesel",
            "year": 2025,
            "engine": "1.5 Diesel",
            "price": 650000
          },
          {
            "nameEn": "Diesel 1.5",
            "nameAr": "Diesel 1.5",
            "slug": "diesel-1-5",
            "year": 2026,
            "engine": "Diesel 1.5",
            "price": 735000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Kaiyi",
    "nameAr": "كايي",
    "slug": "kaiyi",
    "models": [
      {
        "nameEn": "E5",
        "nameAr": "E5",
        "slug": "e5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 900000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 840000
          }
        ]
      },
      {
        "nameEn": "X3 Pro",
        "nameAr": "X3 Pro",
        "slug": "x3-pro",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 959900
          },
          {
            "nameEn": "Topline",
            "nameAr": "Topline",
            "slug": "topline",
            "year": 2026,
            "engine": "Topline",
            "price": 899900
          }
        ]
      },
      {
        "nameEn": "X7",
        "nameAr": "X7",
        "slug": "x7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 1400000
          },
          {
            "nameEn": "PHEV",
            "nameAr": "PHEV",
            "slug": "phev",
            "year": 2026,
            "engine": "PHEV",
            "price": 1600000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "KGM",
    "nameAr": "كي جي إم",
    "slug": "kgm",
    "models": [
      {
        "nameEn": "Actyon",
        "nameAr": "أكتيون",
        "slug": "actyon",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1925000
          },
          {
            "nameEn": "Topline",
            "nameAr": "Topline",
            "slug": "topline",
            "year": 2026,
            "engine": "Topline",
            "price": 2125000
          }
        ]
      },
      {
        "nameEn": "Torres",
        "nameAr": "توريس",
        "slug": "torres",
        "yearStart": 2025,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Advance",
            "nameAr": "أدفانس",
            "slug": "advance",
            "year": 2025,
            "engine": "Advance",
            "price": 1585000
          },
          {
            "nameEn": "Black Edition",
            "nameAr": "Black Edition",
            "slug": "black-edition",
            "year": 2025,
            "engine": "Black Edition",
            "price": 1865000
          },
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2025,
            "engine": "Comfort",
            "price": 1449000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2025,
            "engine": "Luxury",
            "price": 1840000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1715000
          },
          {
            "nameEn": "Advance",
            "nameAr": "أدفانس",
            "slug": "advance-2",
            "year": 2026,
            "engine": "Advance",
            "price": 1720000
          },
          {
            "nameEn": "Black Edition",
            "nameAr": "Black Edition",
            "slug": "black-edition-2",
            "year": 2026,
            "engine": "Black Edition",
            "price": 1999000
          },
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort-2",
            "year": 2026,
            "engine": "Comfort",
            "price": 1585000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury-2",
            "year": 2026,
            "engine": "Luxury",
            "price": 1980000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium-2",
            "year": 2026,
            "engine": "Premium",
            "price": 1850000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Kia",
    "nameAr": "كيا",
    "slug": "kia",
    "models": [
      {
        "nameEn": "Carnival",
        "nameAr": "كرنفال",
        "slug": "carnival",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "HEV Topline 8 Seats",
            "nameAr": "HEV Topline 8 Seats",
            "slug": "hev-topline-8-seats",
            "year": 2026,
            "engine": "HEV Topline 8 Seats",
            "price": 3850000
          }
        ]
      },
      {
        "nameEn": "EV3",
        "nameAr": "EV3",
        "slug": "ev3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Air",
            "nameAr": "إير",
            "slug": "air",
            "year": 2026,
            "engine": "Air",
            "price": 1400000
          },
          {
            "nameEn": "Earth",
            "nameAr": "Earth",
            "slug": "earth",
            "year": 2026,
            "engine": "Earth",
            "price": 1800000
          },
          {
            "nameEn": "GT Line",
            "nameAr": "GT Line",
            "slug": "gt-line",
            "year": 2026,
            "engine": "GT Line",
            "price": 2050000
          }
        ]
      },
      {
        "nameEn": "EV5",
        "nameAr": "EV5",
        "slug": "ev5",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Air",
            "nameAr": "إير",
            "slug": "air",
            "year": 2025,
            "engine": "Air",
            "price": 2050000
          },
          {
            "nameEn": "Earth",
            "nameAr": "Earth",
            "slug": "earth",
            "year": 2025,
            "engine": "Earth",
            "price": 2300000
          },
          {
            "nameEn": "GT Line",
            "nameAr": "GT Line",
            "slug": "gt-line",
            "year": 2025,
            "engine": "GT Line",
            "price": 2550000
          }
        ]
      },
      {
        "nameEn": "EV6",
        "nameAr": "EV6",
        "slug": "ev6",
        "yearStart": 2025,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Earth",
            "nameAr": "Earth",
            "slug": "earth",
            "year": 2025,
            "engine": "Earth",
            "price": 2300000
          },
          {
            "nameEn": "GT Line",
            "nameAr": "GT Line",
            "slug": "gt-line",
            "year": 2025,
            "engine": "GT Line",
            "price": 2550000
          },
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2026,
            "engine": "GT",
            "price": 3000000
          }
        ]
      },
      {
        "nameEn": "EV9",
        "nameAr": "EV9",
        "slug": "ev9",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "GT Line 6 Seats Relaxing",
            "nameAr": "GT Line 6 Seats Relaxing",
            "slug": "gt-line-6-seats-relaxing",
            "year": 2025,
            "engine": "GT Line 6 Seats Relaxing",
            "price": 3800000
          },
          {
            "nameEn": "GT Line 6 Seats Swivelling",
            "nameAr": "GT Line 6 Seats Swivelling",
            "slug": "gt-line-6-seats-swivelling",
            "year": 2025,
            "engine": "GT Line 6 Seats Swivelling",
            "price": 3750000
          },
          {
            "nameEn": "GT Line 7 Seats",
            "nameAr": "GT Line 7 Seats",
            "slug": "gt-line-7-seats",
            "year": 2025,
            "engine": "GT Line 7 Seats",
            "price": 3700000
          }
        ]
      },
      {
        "nameEn": "K4",
        "nameAr": "K4",
        "slug": "k4",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GT Line",
            "nameAr": "GT Line",
            "slug": "gt-line",
            "year": 2026,
            "engine": "GT Line",
            "price": 1700000
          },
          {
            "nameEn": "GT Line Black Edition",
            "nameAr": "GT Line Black Edition",
            "slug": "gt-line-black-edition",
            "year": 2026,
            "engine": "GT Line Black Edition",
            "price": 1850000
          },
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1500000
          }
        ]
      },
      {
        "nameEn": "Seltos",
        "nameAr": "سيلتوس",
        "slug": "seltos",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "EX",
            "nameAr": "EX",
            "slug": "ex",
            "year": 2026,
            "engine": "EX",
            "price": 1350000
          },
          {
            "nameEn": "Highline Turbo",
            "nameAr": "Highline Turbo",
            "slug": "highline-turbo",
            "year": 2026,
            "engine": "Highline Turbo",
            "price": 1500000
          },
          {
            "nameEn": "Topline Turbo",
            "nameAr": "Topline Turbo",
            "slug": "topline-turbo",
            "year": 2026,
            "engine": "Topline Turbo",
            "price": 1625000
          }
        ]
      },
      {
        "nameEn": "Sorento",
        "nameAr": "سورينتو",
        "slug": "sorento",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "HEV Topline 7 Seats",
            "nameAr": "HEV Topline 7 Seats",
            "slug": "hev-topline-7-seats",
            "year": 2026,
            "engine": "HEV Topline 7 Seats",
            "price": 3500000
          }
        ]
      },
      {
        "nameEn": "Sportage",
        "nameAr": "سبورتاج",
        "slug": "sportage",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "EX",
            "nameAr": "EX",
            "slug": "ex",
            "year": 2026,
            "engine": "EX",
            "price": 1900000
          },
          {
            "nameEn": "GT Line",
            "nameAr": "GT Line",
            "slug": "gt-line",
            "year": 2026,
            "engine": "GT Line",
            "price": 2375000
          },
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 2050000
          },
          {
            "nameEn": "LX",
            "nameAr": "LX",
            "slug": "lx",
            "year": 2026,
            "engine": "LX",
            "price": 1800000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2026,
            "engine": "Premium",
            "price": 2275000
          },
          {
            "nameEn": "EX",
            "nameAr": "EX",
            "slug": "ex-2",
            "year": 2027,
            "engine": "EX",
            "price": 1924900
          },
          {
            "nameEn": "GT-line:",
            "nameAr": "GT-line:",
            "slug": "gt-line-2",
            "year": 2027,
            "engine": "GT-line:",
            "price": 2399900
          },
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline-2",
            "year": 2027,
            "engine": "Highline",
            "price": 2074900
          },
          {
            "nameEn": "LX",
            "nameAr": "LX",
            "slug": "lx-2",
            "year": 2027,
            "engine": "LX",
            "price": 1824900
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium-2",
            "year": 2027,
            "engine": "Premium",
            "price": 2299900
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Lexus",
    "nameAr": "لكزس",
    "slug": "lexus",
    "models": [
      {
        "nameEn": "RZ",
        "nameAr": "RZ",
        "slug": "rz",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "RZ350e",
            "nameAr": "RZ350e",
            "slug": "rz350e",
            "year": 2026,
            "engine": "RZ350e",
            "price": 3500000
          },
          {
            "nameEn": "RZ550e",
            "nameAr": "RZ550e",
            "slug": "rz550e",
            "year": 2026,
            "engine": "RZ550e",
            "price": 3850000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Li Auto",
    "nameAr": "لي أوتو",
    "slug": "li-auto",
    "models": [
      {
        "nameEn": "L6",
        "nameAr": "L6",
        "slug": "l6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 2550000
          }
        ]
      },
      {
        "nameEn": "L7",
        "nameAr": "L7",
        "slug": "l7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 3600000
          }
        ]
      },
      {
        "nameEn": "L9",
        "nameAr": "L9",
        "slug": "l9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 4350000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Lotus",
    "nameAr": "لوتس",
    "slug": "lotus",
    "models": [
      {
        "nameEn": "Emeya",
        "nameAr": "إيميا",
        "slug": "emeya",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Emeya",
            "nameAr": "Emeya",
            "slug": "emeya",
            "year": 2025,
            "engine": "Emeya",
            "price": 5900000
          },
          {
            "nameEn": "Emeya R",
            "nameAr": "Emeya R",
            "slug": "emeya-r",
            "year": 2025,
            "engine": "Emeya R",
            "price": 7900000
          },
          {
            "nameEn": "Emeya S",
            "nameAr": "Emeya S",
            "slug": "emeya-s",
            "year": 2025,
            "engine": "Emeya S",
            "price": 6800000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Lynk & Co",
    "nameAr": "لينك آند كو",
    "slug": "lynk-and-co",
    "models": [
      {
        "nameEn": "02",
        "nameAr": "02",
        "slug": "02",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2026,
            "engine": "EV",
            "price": 1650000
          }
        ]
      },
      {
        "nameEn": "03",
        "nameAr": "03",
        "slug": "03",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Plus",
            "nameAr": "بلس",
            "slug": "plus",
            "year": 2026,
            "engine": "Plus",
            "price": 1490000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 1350000
          }
        ]
      },
      {
        "nameEn": "06",
        "nameAr": "06",
        "slug": "06",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Core Plus",
            "nameAr": "Core Plus",
            "slug": "core-plus",
            "year": 2026,
            "engine": "Core Plus",
            "price": 1350000
          },
          {
            "nameEn": "Hyper Halo",
            "nameAr": "Hyper Halo",
            "slug": "hyper-halo",
            "year": 2026,
            "engine": "Hyper Halo",
            "price": 1550000
          },
          {
            "nameEn": "Hyper Pro",
            "nameAr": "Hyper Pro",
            "slug": "hyper-pro",
            "year": 2026,
            "engine": "Hyper Pro",
            "price": 1450000
          }
        ]
      },
      {
        "nameEn": "08",
        "nameAr": "08",
        "slug": "08",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Halo",
            "nameAr": "Halo",
            "slug": "halo",
            "year": 2026,
            "engine": "Halo",
            "price": 2490000
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2026,
            "engine": "Pro",
            "price": 2290000
          }
        ]
      },
      {
        "nameEn": "900",
        "nameAr": "900",
        "slug": "900",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 3990000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "M-Hero",
    "nameAr": "إم-هيرو",
    "slug": "m-hero",
    "models": [
      {
        "nameEn": "1 917",
        "nameAr": "1 917",
        "slug": "1-917",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Signature",
            "nameAr": "Signature",
            "slug": "signature",
            "year": 2026,
            "engine": "Signature",
            "price": 6500000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Mazda",
    "nameAr": "مازدا",
    "slug": "mazda",
    "models": [
      {
        "nameEn": "3",
        "nameAr": "3",
        "slug": "3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline Hatchback",
            "nameAr": "Highline Hatchback",
            "slug": "highline-hatchback",
            "year": 2026,
            "engine": "Highline Hatchback",
            "price": 1599000
          },
          {
            "nameEn": "Highline Sedan",
            "nameAr": "Highline Sedan",
            "slug": "highline-sedan",
            "year": 2026,
            "engine": "Highline Sedan",
            "price": 1589000
          }
        ]
      },
      {
        "nameEn": "CX 3",
        "nameAr": "CX 3",
        "slug": "cx-3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2026,
            "engine": "Highline",
            "price": 1299000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Mercedes",
    "nameAr": "مرسيدس",
    "slug": "mercedes",
    "models": [
      {
        "nameEn": "A200",
        "nameAr": "A200",
        "slug": "a200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 2390000
          }
        ]
      },
      {
        "nameEn": "AMG GT",
        "nameAr": "AMG GT",
        "slug": "amg-gt",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG GT 63 4M+ Coupe",
            "nameAr": "AMG GT 63 4M+ Coupe",
            "slug": "amg-gt-63-4m-coupe",
            "year": 2025,
            "engine": "AMG GT 63 4M+ Coupe",
            "price": 17200000
          }
        ]
      },
      {
        "nameEn": "B 200",
        "nameAr": "B 200",
        "slug": "b-200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 2350000
          }
        ]
      },
      {
        "nameEn": "C 43 AMG",
        "nameAr": "C 43 AMG",
        "slug": "c-43-amg",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG 4MATIC",
            "nameAr": "AMG 4MATIC",
            "slug": "amg-4matic",
            "year": 2025,
            "engine": "AMG 4MATIC",
            "price": 5800000
          }
        ]
      },
      {
        "nameEn": "C180",
        "nameAr": "C180",
        "slug": "c180",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Avantgarde",
            "nameAr": "Avantgarde",
            "slug": "avantgarde",
            "year": 2026,
            "engine": "Avantgarde",
            "price": 3100000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 3650000
          }
        ]
      },
      {
        "nameEn": "C200",
        "nameAr": "C200",
        "slug": "c200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 4100000
          }
        ]
      },
      {
        "nameEn": "CLA 200",
        "nameAr": "CLA 200",
        "slug": "cla-200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 2930000
          }
        ]
      },
      {
        "nameEn": "CLE 200",
        "nameAr": "CLE 200",
        "slug": "cle-200",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Sport - Cabriolet",
            "nameAr": "Sport - Cabriolet",
            "slug": "sport-cabriolet",
            "year": 2025,
            "engine": "Sport - Cabriolet",
            "price": 4950000
          },
          {
            "nameEn": "Sport - Coupe",
            "nameAr": "Sport - Coupe",
            "slug": "sport-coupe",
            "year": 2025,
            "engine": "Sport - Coupe",
            "price": 4350000
          }
        ]
      },
      {
        "nameEn": "E200",
        "nameAr": "E200",
        "slug": "e200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Avantgarde",
            "nameAr": "Avantgarde",
            "slug": "avantgarde",
            "year": 2026,
            "engine": "Avantgarde",
            "price": 4920000
          },
          {
            "nameEn": "Exclusive",
            "nameAr": "إكسكلوسف",
            "slug": "exclusive",
            "year": 2026,
            "engine": "Exclusive",
            "price": 5600000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 5600000
          }
        ]
      },
      {
        "nameEn": "EQA 260",
        "nameAr": "EQA 260",
        "slug": "eqa-260",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "SUV",
            "nameAr": "SUV",
            "slug": "suv",
            "year": 2025,
            "engine": "SUV",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "EQA250+",
        "nameAr": "EQA250+",
        "slug": "eqa250",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 3300000
          }
        ]
      },
      {
        "nameEn": "EQB250+",
        "nameAr": "EQB250+",
        "slug": "eqb250",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 3420000
          }
        ]
      },
      {
        "nameEn": "EQE SUV",
        "nameAr": "EQE SUV",
        "slug": "eqe-suv",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "EQE350+ SUV AMG",
            "nameAr": "EQE350+ SUV AMG",
            "slug": "eqe350-suv-amg",
            "year": 2025,
            "engine": "EQE350+ SUV AMG",
            "price": 5500000
          }
        ]
      },
      {
        "nameEn": "EQS SUV",
        "nameAr": "EQS SUV",
        "slug": "eqs-suv",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "EQS 500 4M SUV",
            "nameAr": "EQS 500 4M SUV",
            "slug": "eqs-500-4m-suv",
            "year": 2025,
            "engine": "EQS 500 4M SUV",
            "price": 8850000
          },
          {
            "nameEn": "EQS 680 4M SUV Maybach",
            "nameAr": "EQS 680 4M SUV Maybach",
            "slug": "eqs-680-4m-suv-maybach",
            "year": 2025,
            "engine": "EQS 680 4M SUV Maybach",
            "price": 11800000
          },
          {
            "nameEn": "EQS 680 4M SUV Maybach Night Series",
            "nameAr": "EQS 680 4M SUV Maybach Night Series",
            "slug": "eqs-680-4m-suv-maybach-night-series",
            "year": 2025,
            "engine": "EQS 680 4M SUV Maybach Night Series",
            "price": 13200000
          }
        ]
      },
      {
        "nameEn": "G 500",
        "nameAr": "G 500",
        "slug": "g-500",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG NIGHT EDITION",
            "nameAr": "AMG NIGHT EDITION",
            "slug": "amg-night-edition",
            "year": 2025,
            "engine": "AMG NIGHT EDITION",
            "price": 13100000
          }
        ]
      },
      {
        "nameEn": "G 63",
        "nameAr": "G 63",
        "slug": "g-63",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG Night Edition",
            "nameAr": "AMG Night Edition",
            "slug": "amg-night-edition",
            "year": 2025,
            "engine": "AMG Night Edition",
            "price": 18050000
          }
        ]
      },
      {
        "nameEn": "G580 with EQ Technology",
        "nameAr": "G580 with EQ Technology",
        "slug": "g580-with-eq-technology",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Night Edition",
            "nameAr": "Night Edition",
            "slug": "night-edition",
            "year": 2025,
            "engine": "Night Edition",
            "price": 10130000
          }
        ]
      },
      {
        "nameEn": "GLA 200",
        "nameAr": "GLA 200",
        "slug": "gla-200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Progressive",
            "nameAr": "Progressive",
            "slug": "progressive",
            "year": 2026,
            "engine": "Progressive",
            "price": 2990000
          }
        ]
      },
      {
        "nameEn": "GLC 200",
        "nameAr": "GLC 200",
        "slug": "glc-200",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4M COUPE - Sport",
            "nameAr": "4M COUPE - Sport",
            "slug": "4m-coupe-sport",
            "year": 2026,
            "engine": "4M COUPE - Sport",
            "price": 5250000
          },
          {
            "nameEn": "4M SUV - Sport",
            "nameAr": "4M SUV - Sport",
            "slug": "4m-suv-sport",
            "year": 2026,
            "engine": "4M SUV - Sport",
            "price": 4930000
          }
        ]
      },
      {
        "nameEn": "GLC 43",
        "nameAr": "GLC 43",
        "slug": "glc-43",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4M COUPE - AMG",
            "nameAr": "4M COUPE - AMG",
            "slug": "4m-coupe-amg",
            "year": 2026,
            "engine": "4M COUPE - AMG",
            "price": 6600000
          }
        ]
      },
      {
        "nameEn": "Gle 450",
        "nameAr": "GLE 450",
        "slug": "gle-450",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "4M SUV - AMG",
            "nameAr": "4M SUV - AMG",
            "slug": "4m-suv-amg",
            "year": 2025,
            "engine": "4M SUV - AMG",
            "price": 7090000
          }
        ]
      },
      {
        "nameEn": "GLE 53",
        "nameAr": "GLE 53",
        "slug": "gle-53",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG 4MATIC+",
            "nameAr": "AMG 4MATIC+",
            "slug": "amg-4matic",
            "year": 2025,
            "engine": "AMG 4MATIC+",
            "price": 8100000
          }
        ]
      },
      {
        "nameEn": "GLS 580",
        "nameAr": "GLS 580",
        "slug": "gls-580",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG",
            "nameAr": "AMG",
            "slug": "amg",
            "year": 2025,
            "engine": "AMG",
            "price": 9930000
          }
        ]
      },
      {
        "nameEn": "Maybach S 580",
        "nameAr": "مايباخ S 580",
        "slug": "maybach-s-580",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4M SALOON",
            "nameAr": "4M SALOON",
            "slug": "4m-saloon",
            "year": 2026,
            "engine": "4M SALOON",
            "price": 17500000
          }
        ]
      },
      {
        "nameEn": "S450",
        "nameAr": "S450",
        "slug": "s450",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4M SALOON LONG",
            "nameAr": "4M SALOON LONG",
            "slug": "4m-saloon-long",
            "year": 2026,
            "engine": "4M SALOON LONG",
            "price": 11900000
          }
        ]
      },
      {
        "nameEn": "SL55 AMG",
        "nameAr": "SL55 AMG",
        "slug": "sl55-amg",
        "yearStart": 2024,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "AMG",
            "nameAr": "AMG",
            "slug": "amg",
            "year": 2024,
            "engine": "AMG",
            "price": 13400000
          },
          {
            "nameEn": "AMG",
            "nameAr": "AMG",
            "slug": "amg-2",
            "year": 2025,
            "engine": "AMG",
            "price": 14330000
          }
        ]
      },
      {
        "nameEn": "V300",
        "nameAr": "V300",
        "slug": "v300",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Long - Avantgarde",
            "nameAr": "Long - Avantgarde",
            "slug": "long-avantgarde",
            "year": 2026,
            "engine": "Long - Avantgarde",
            "price": 6500000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "MG",
    "nameAr": "إم جي",
    "slug": "mg",
    "models": [
      {
        "nameEn": "4",
        "nameAr": "4",
        "slug": "4",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1400000
          },
          {
            "nameEn": "Standard",
            "nameAr": "ستاندرد",
            "slug": "standard",
            "year": 2026,
            "engine": "Standard",
            "price": 1200000
          }
        ]
      },
      {
        "nameEn": "5",
        "nameAr": "5",
        "slug": "5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 874990
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 974990
          }
        ]
      },
      {
        "nameEn": "7",
        "nameAr": "7",
        "slug": "7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1625000
          },
          {
            "nameEn": "Trophy",
            "nameAr": "Trophy",
            "slug": "trophy",
            "year": 2026,
            "engine": "Trophy",
            "price": 1725000
          }
        ]
      },
      {
        "nameEn": "Cyberster",
        "nameAr": "سايبرستر",
        "slug": "cyberster",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Trophy RWD",
            "nameAr": "Trophy RWD",
            "slug": "trophy-rwd",
            "year": 2026,
            "engine": "Trophy RWD",
            "price": 2850000
          }
        ]
      },
      {
        "nameEn": "G50 Plus",
        "nameAr": "جي 50 بلس",
        "slug": "g50-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5 A/T",
            "nameAr": "1.5 A/T",
            "slug": "1-5-a-t",
            "year": 2026,
            "engine": "1.5 A/T",
            "price": 1300000
          }
        ]
      },
      {
        "nameEn": "GT",
        "nameAr": "GT",
        "slug": "gt",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1110000
          },
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1160000
          }
        ]
      },
      {
        "nameEn": "HS",
        "nameAr": "HS",
        "slug": "hs",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "+ Luxury",
            "nameAr": "+ Luxury",
            "slug": "luxury",
            "year": 2026,
            "engine": "+ Luxury",
            "price": 1525000
          },
          {
            "nameEn": "HEV",
            "nameAr": "HEV",
            "slug": "hev",
            "year": 2026,
            "engine": "HEV",
            "price": 1625000
          }
        ]
      },
      {
        "nameEn": "One",
        "nameAr": "One",
        "slug": "one",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "RX5 Plus",
        "nameAr": "RX5 Plus",
        "slug": "rx5-plus",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury",
            "nameAr": "لاكجري",
            "slug": "luxury",
            "year": 2026,
            "engine": "Luxury",
            "price": 1450000
          }
        ]
      },
      {
        "nameEn": "ZS",
        "nameAr": "ZS",
        "slug": "zs",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1075000
          },
          {
            "nameEn": "Luxury Facelift MCE",
            "nameAr": "Luxury Facelift MCE",
            "slug": "luxury-facelift-mce",
            "year": 2026,
            "engine": "Luxury Facelift MCE",
            "price": 1150000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Mini",
    "nameAr": "ميني",
    "slug": "mini",
    "models": [
      {
        "nameEn": "Cooper",
        "nameAr": "كوبر",
        "slug": "cooper",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T C - Classic",
            "nameAr": "1.5 A/T C - Classic",
            "slug": "1-5-a-t-c-classic",
            "year": 2025,
            "engine": "1.5 A/T C - Classic",
            "price": 2250000
          },
          {
            "nameEn": "1.5 A/T C - JCW",
            "nameAr": "1.5 A/T C - JCW",
            "slug": "1-5-a-t-c-jcw",
            "year": 2025,
            "engine": "1.5 A/T C - JCW",
            "price": 2450000
          },
          {
            "nameEn": "1.5 A/T C 5 Drs - Classic",
            "nameAr": "1.5 A/T C 5 Drs - Classic",
            "slug": "1-5-a-t-c-5-drs-classic",
            "year": 2025,
            "engine": "1.5 A/T C 5 Drs - Classic",
            "price": 2275000
          },
          {
            "nameEn": "2.0 A/T C - JCW Cabrio",
            "nameAr": "2.0 A/T C - JCW Cabrio",
            "slug": "2-0-a-t-c-jcw-cabrio",
            "year": 2025,
            "engine": "2.0 A/T C - JCW Cabrio",
            "price": 3000000
          },
          {
            "nameEn": "2.0 A/T S - JCW",
            "nameAr": "2.0 A/T S - JCW",
            "slug": "2-0-a-t-s-jcw",
            "year": 2025,
            "engine": "2.0 A/T S - JCW",
            "price": 2975000
          }
        ]
      },
      {
        "nameEn": "Cooper Countryman",
        "nameAr": "Cooper Countryman",
        "slug": "cooper-countryman",
        "yearStart": 2024,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T C - Favoured",
            "nameAr": "1.5 A/T C - Favoured",
            "slug": "1-5-a-t-c-favoured",
            "year": 2024,
            "engine": "1.5 A/T C - Favoured",
            "price": 2530000
          },
          {
            "nameEn": "1.5 A/T C - Classic",
            "nameAr": "1.5 A/T C - Classic",
            "slug": "1-5-a-t-c-classic",
            "year": 2025,
            "engine": "1.5 A/T C - Classic",
            "price": 2630000
          },
          {
            "nameEn": "1.5 A/T C - Favoured",
            "nameAr": "1.5 A/T C - Favoured",
            "slug": "1-5-a-t-c-favoured-2",
            "year": 2025,
            "engine": "1.5 A/T C - Favoured",
            "price": 2890000
          },
          {
            "nameEn": "1.5 A/T JCW",
            "nameAr": "1.5 A/T JCW",
            "slug": "1-5-a-t-jcw",
            "year": 2025,
            "engine": "1.5 A/T JCW",
            "price": 2990000
          },
          {
            "nameEn": "2.0 A/T S ALL4 - JCW",
            "nameAr": "2.0 A/T S ALL4 - JCW",
            "slug": "2-0-a-t-s-all4-jcw",
            "year": 2025,
            "engine": "2.0 A/T S ALL4 - JCW",
            "price": 3990000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Mitsubishi",
    "nameAr": "ميتسوبيشي",
    "slug": "mitsubishi",
    "models": [
      {
        "nameEn": "Destinator",
        "nameAr": "ديستينيتور",
        "slug": "destinator",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "1.5 A/T Highline",
            "nameAr": "1.5 A/T Highline",
            "slug": "1-5-a-t-highline",
            "year": 2027,
            "engine": "1.5 A/T Highline",
            "price": 1750000
          },
          {
            "nameEn": "1.5 A/T MIDLINE",
            "nameAr": "1.5 A/T MIDLINE",
            "slug": "1-5-a-t-midline",
            "year": 2027,
            "engine": "1.5 A/T MIDLINE",
            "price": 1650000
          },
          {
            "nameEn": "1.5 A/T Premium Line",
            "nameAr": "1.5 A/T Premium Line",
            "slug": "1-5-a-t-premium-line",
            "year": 2027,
            "engine": "1.5 A/T Premium Line",
            "price": 1850000
          }
        ]
      },
      {
        "nameEn": "Eclipse",
        "nameAr": "اكليبس كروس",
        "slug": "eclipse",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Infinity Premium Line AWD",
            "nameAr": "Infinity Premium Line AWD",
            "slug": "infinity-premium-line-awd",
            "year": 2026,
            "engine": "Infinity Premium Line AWD",
            "price": 1690000
          },
          {
            "nameEn": "Inspire Highline",
            "nameAr": "Inspire Highline",
            "slug": "inspire-highline",
            "year": 2026,
            "engine": "Inspire Highline",
            "price": 1550000
          },
          {
            "nameEn": "Insport",
            "nameAr": "Insport",
            "slug": "insport",
            "year": 2026,
            "engine": "Insport",
            "price": 1
          },
          {
            "nameEn": "Insport Plus",
            "nameAr": "Insport Plus",
            "slug": "insport-plus",
            "year": 2026,
            "engine": "Insport Plus",
            "price": 1
          },
          {
            "nameEn": "Instyle Top Line",
            "nameAr": "Instyle Top Line",
            "slug": "instyle-top-line",
            "year": 2026,
            "engine": "Instyle Top Line",
            "price": 1610000
          }
        ]
      },
      {
        "nameEn": "L200",
        "nameAr": "L200",
        "slug": "l200",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "2.4 A/T",
            "nameAr": "2.4 A/T",
            "slug": "2-4-a-t",
            "year": 2027,
            "engine": "2.4 A/T",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Outlander Sport",
        "nameAr": "أوتلاندر سبورت",
        "slug": "outlander-sport",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premium Line",
            "nameAr": "Premium Line",
            "slug": "premium-line",
            "year": 2026,
            "engine": "Premium Line",
            "price": 1475000
          },
          {
            "nameEn": "Spark High Line",
            "nameAr": "Spark High Line",
            "slug": "spark-high-line",
            "year": 2026,
            "engine": "Spark High Line",
            "price": 1375000
          }
        ]
      },
      {
        "nameEn": "Pajero Sport",
        "nameAr": "باجيرو سبورت",
        "slug": "pajero-sport",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "3.0 A/T",
            "nameAr": "3.0 A/T",
            "slug": "3-0-a-t",
            "year": 2027,
            "engine": "3.0 A/T",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Xpander",
        "nameAr": "اكسباندر",
        "slug": "xpander",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "High Line",
            "nameAr": "High Line",
            "slug": "high-line",
            "year": 2026,
            "engine": "High Line",
            "price": 1390000
          },
          {
            "nameEn": "Mid Line",
            "nameAr": "Mid Line",
            "slug": "mid-line",
            "year": 2026,
            "engine": "Mid Line",
            "price": 1300000
          },
          {
            "nameEn": "Premium Line",
            "nameAr": "Premium Line",
            "slug": "premium-line",
            "year": 2026,
            "engine": "Premium Line",
            "price": 1475000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Nissan",
    "nameAr": "نيسان",
    "slug": "nissan",
    "models": [
      {
        "nameEn": "Juke",
        "nameAr": "جوك",
        "slug": "juke",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Acenta",
            "nameAr": "Acenta",
            "slug": "acenta",
            "year": 2026,
            "engine": "Acenta",
            "price": 1095000
          },
          {
            "nameEn": "Tekna",
            "nameAr": "Tekna",
            "slug": "tekna",
            "year": 2026,
            "engine": "Tekna",
            "price": 1195000
          },
          {
            "nameEn": "Tekna N-Design",
            "nameAr": "Tekna N-Design",
            "slug": "tekna-n-design",
            "year": 2026,
            "engine": "Tekna N-Design",
            "price": 1245000
          },
          {
            "nameEn": "Tekna N-Sport",
            "nameAr": "Tekna N-Sport",
            "slug": "tekna-n-sport",
            "year": 2026,
            "engine": "Tekna N-Sport",
            "price": 1245000
          },
          {
            "nameEn": "Acenta",
            "nameAr": "Acenta",
            "slug": "acenta-2",
            "year": 2027,
            "engine": "Acenta",
            "price": 1159999
          },
          {
            "nameEn": "Tekna",
            "nameAr": "Tekna",
            "slug": "tekna-2",
            "year": 2027,
            "engine": "Tekna",
            "price": 1259999
          },
          {
            "nameEn": "Tekna N-design",
            "nameAr": "Tekna N-design",
            "slug": "tekna-n-design-2",
            "year": 2027,
            "engine": "Tekna N-design",
            "price": 1299999
          }
        ]
      },
      {
        "nameEn": "Magnite",
        "nameAr": "ماجنايت",
        "slug": "magnite",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "1.0 A/T",
            "nameAr": "1.0 A/T",
            "slug": "1-0-a-t",
            "year": 2027,
            "engine": "1.0 A/T",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "N7",
        "nameAr": "N7",
        "slug": "n7",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "FWD",
            "nameAr": "FWD",
            "slug": "fwd",
            "year": 2025,
            "engine": "FWD",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Navara",
        "nameAr": "نافارا",
        "slug": "navara",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4WD AT LE Plus",
            "nameAr": "4WD AT LE Plus",
            "slug": "4wd-at-le-plus",
            "year": 2026,
            "engine": "4WD AT LE Plus",
            "price": 5825000
          },
          {
            "nameEn": "4WD AT SE Plus",
            "nameAr": "4WD AT SE Plus",
            "slug": "4wd-at-se-plus",
            "year": 2026,
            "engine": "4WD AT SE Plus",
            "price": 4725000
          },
          {
            "nameEn": "4WD MT LE Plus",
            "nameAr": "4WD MT LE Plus",
            "slug": "4wd-mt-le-plus",
            "year": 2026,
            "engine": "4WD MT LE Plus",
            "price": 5375000
          },
          {
            "nameEn": "4WD MT XE Plus",
            "nameAr": "4WD MT XE Plus",
            "slug": "4wd-mt-xe-plus",
            "year": 2026,
            "engine": "4WD MT XE Plus",
            "price": 4325000
          },
          {
            "nameEn": "Single Cab 2.5D XE Plus 4X2 MT",
            "nameAr": "Single Cab 2.5D XE Plus 4X2 MT",
            "slug": "single-cab-2-5d-xe-plus-4x2-mt",
            "year": 2026,
            "engine": "Single Cab 2.5D XE Plus 4X2 MT",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "Patrol",
        "nameAr": "باترول",
        "slug": "patrol",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "LE Platinum City",
            "nameAr": "LE Platinum City",
            "slug": "le-platinum-city",
            "year": 2026,
            "engine": "LE Platinum City",
            "price": 14000000
          },
          {
            "nameEn": "LE Titanium",
            "nameAr": "LE Titanium",
            "slug": "le-titanium",
            "year": 2026,
            "engine": "LE Titanium",
            "price": 13000000
          },
          {
            "nameEn": "LE1",
            "nameAr": "LE1",
            "slug": "le1",
            "year": 2026,
            "engine": "LE1",
            "price": 11050000
          },
          {
            "nameEn": "LE2",
            "nameAr": "LE2",
            "slug": "le2",
            "year": 2026,
            "engine": "LE2",
            "price": 11900000
          },
          {
            "nameEn": "SE",
            "nameAr": "SE",
            "slug": "se",
            "year": 2026,
            "engine": "SE",
            "price": 9600000
          },
          {
            "nameEn": "SE Platinum City",
            "nameAr": "SE Platinum City",
            "slug": "se-platinum-city",
            "year": 2026,
            "engine": "SE Platinum City",
            "price": 11750000
          },
          {
            "nameEn": "SE Titanium",
            "nameAr": "SE Titanium",
            "slug": "se-titanium",
            "year": 2026,
            "engine": "SE Titanium",
            "price": 10750000
          },
          {
            "nameEn": "XE",
            "nameAr": "XE",
            "slug": "xe",
            "year": 2026,
            "engine": "XE",
            "price": 8990000
          }
        ]
      },
      {
        "nameEn": "Qashqai",
        "nameAr": "قشقاي",
        "slug": "qashqai",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "N-Connecta",
            "nameAr": "N-Connecta",
            "slug": "n-connecta",
            "year": 2026,
            "engine": "N-Connecta",
            "price": 1499000
          },
          {
            "nameEn": "N-Connecta+",
            "nameAr": "N-Connecta+",
            "slug": "n-connecta-2",
            "year": 2026,
            "engine": "N-Connecta+",
            "price": 1675000
          },
          {
            "nameEn": "N-Connecta+ 2T",
            "nameAr": "N-Connecta+ 2T",
            "slug": "n-connecta-2t",
            "year": 2026,
            "engine": "N-Connecta+ 2T",
            "price": 1695000
          },
          {
            "nameEn": "N-Design e-PWR",
            "nameAr": "N-Design e-PWR",
            "slug": "n-design-e-pwr",
            "year": 2026,
            "engine": "N-Design e-PWR",
            "price": 1919000
          },
          {
            "nameEn": "Tekna",
            "nameAr": "Tekna",
            "slug": "tekna",
            "year": 2026,
            "engine": "Tekna",
            "price": 1784000
          },
          {
            "nameEn": "Tekna 2T",
            "nameAr": "Tekna 2T",
            "slug": "tekna-2t",
            "year": 2026,
            "engine": "Tekna 2T",
            "price": 1804000
          },
          {
            "nameEn": "Tekna 4WD",
            "nameAr": "Tekna 4WD",
            "slug": "tekna-4wd",
            "year": 2026,
            "engine": "Tekna 4WD",
            "price": 1964000
          },
          {
            "nameEn": "Tekna 4WD 2T",
            "nameAr": "Tekna 4WD 2T",
            "slug": "tekna-4wd-2t",
            "year": 2026,
            "engine": "Tekna 4WD 2T",
            "price": 1984000
          },
          {
            "nameEn": "N-connecta",
            "nameAr": "N-connecta",
            "slug": "n-connecta-3",
            "year": 2027,
            "engine": "N-connecta",
            "price": 1555000
          },
          {
            "nameEn": "N-connecta+ 2T",
            "nameAr": "N-connecta+ 2T",
            "slug": "n-connecta-2t-2",
            "year": 2027,
            "engine": "N-connecta+ 2T",
            "price": 1777000
          },
          {
            "nameEn": "N-Design e-PWR",
            "nameAr": "N-Design e-PWR",
            "slug": "n-design-e-pwr-2",
            "year": 2027,
            "engine": "N-Design e-PWR",
            "price": 1999000
          },
          {
            "nameEn": "Tekna 2T",
            "nameAr": "Tekna 2T",
            "slug": "tekna-2t-2",
            "year": 2027,
            "engine": "Tekna 2T",
            "price": 1888000
          }
        ]
      },
      {
        "nameEn": "Sentra",
        "nameAr": "سنترا",
        "slug": "sentra",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1050000
          }
        ]
      },
      {
        "nameEn": "Sunny",
        "nameAr": "صني",
        "slug": "sunny",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "A/T Base",
            "nameAr": "A/T Base",
            "slug": "a-t-base",
            "year": 2026,
            "engine": "A/T Base",
            "price": 745000
          },
          {
            "nameEn": "A/T Mid",
            "nameAr": "A/T Mid",
            "slug": "a-t-mid",
            "year": 2026,
            "engine": "A/T Mid",
            "price": 780000
          },
          {
            "nameEn": "A/T Super Saloon",
            "nameAr": "A/T Super Saloon",
            "slug": "a-t-super-saloon",
            "year": 2026,
            "engine": "A/T Super Saloon",
            "price": 810000
          },
          {
            "nameEn": "A/T Base",
            "nameAr": "A/T Base",
            "slug": "a-t-base-2",
            "year": 2027,
            "engine": "A/T Base",
            "price": 765000
          },
          {
            "nameEn": "AT Mid",
            "nameAr": "AT Mid",
            "slug": "at-mid",
            "year": 2027,
            "engine": "AT Mid",
            "price": 799999
          },
          {
            "nameEn": "AT Super salon",
            "nameAr": "AT Super salon",
            "slug": "at-super-salon",
            "year": 2027,
            "engine": "AT Super salon",
            "price": 835000
          }
        ]
      },
      {
        "nameEn": "X-Trail",
        "nameAr": "إكس تريل",
        "slug": "x-trail",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Acenta Plus",
            "nameAr": "Acenta Plus",
            "slug": "acenta-plus",
            "year": 2026,
            "engine": "Acenta Plus",
            "price": 2199990
          },
          {
            "nameEn": "N-Trek",
            "nameAr": "N-Trek",
            "slug": "n-trek",
            "year": 2026,
            "engine": "N-Trek",
            "price": 2279990
          },
          {
            "nameEn": "Tekna",
            "nameAr": "Tekna",
            "slug": "tekna",
            "year": 2026,
            "engine": "Tekna",
            "price": 2449990
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Opel",
    "nameAr": "أوبل",
    "slug": "opel",
    "models": [
      {
        "nameEn": "Corsa",
        "nameAr": "كورسا",
        "slug": "corsa",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Sport Topline Plus",
            "nameAr": "Sport Topline Plus",
            "slug": "sport-topline-plus",
            "year": 2026,
            "engine": "Sport Topline Plus",
            "price": 1250000
          }
        ]
      },
      {
        "nameEn": "Grand Land",
        "nameAr": "جراند لاند",
        "slug": "grand-land",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Highline Plus",
            "nameAr": "Highline Plus",
            "slug": "highline-plus",
            "year": 2026,
            "engine": "Highline Plus",
            "price": 1850000
          },
          {
            "nameEn": "Topline",
            "nameAr": "Topline",
            "slug": "topline",
            "year": 2026,
            "engine": "Topline",
            "price": 1950000
          },
          {
            "nameEn": "Topline Plus",
            "nameAr": "Topline Plus",
            "slug": "topline-plus",
            "year": 2026,
            "engine": "Topline Plus",
            "price": 2100000
          }
        ]
      },
      {
        "nameEn": "Mokka",
        "nameAr": "موكا",
        "slug": "mokka",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GS Line",
            "nameAr": "GS Line",
            "slug": "gs-line",
            "year": 2026,
            "engine": "GS Line",
            "price": 1550000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Peugeot",
    "nameAr": "بيجو",
    "slug": "peugeot",
    "models": [
      {
        "nameEn": "2008",
        "nameAr": "2008",
        "slug": "2008",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Allure",
            "nameAr": "Allure",
            "slug": "allure",
            "year": 2027,
            "engine": "Allure",
            "price": 1499990
          },
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2027,
            "engine": "GT",
            "price": 1649990
          }
        ]
      },
      {
        "nameEn": "3008",
        "nameAr": "3008",
        "slug": "3008",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Allure",
            "nameAr": "Allure",
            "slug": "allure",
            "year": 2027,
            "engine": "Allure",
            "price": 2099990
          },
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2027,
            "engine": "GT",
            "price": 2399990
          }
        ]
      },
      {
        "nameEn": "408",
        "nameAr": "408",
        "slug": "408",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Allure",
            "nameAr": "Allure",
            "slug": "allure",
            "year": 2027,
            "engine": "Allure",
            "price": 1889990
          },
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2027,
            "engine": "GT",
            "price": 2199990
          }
        ]
      },
      {
        "nameEn": "5008",
        "nameAr": "5008",
        "slug": "5008",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Allure",
            "nameAr": "Allure",
            "slug": "allure",
            "year": 2026,
            "engine": "Allure",
            "price": 2275000
          },
          {
            "nameEn": "GT",
            "nameAr": "GT",
            "slug": "gt",
            "year": 2026,
            "engine": "GT",
            "price": 2575000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Porsche",
    "nameAr": "بورش",
    "slug": "porsche",
    "models": [
      {
        "nameEn": "718",
        "nameAr": "718",
        "slug": "718",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "2.0 M/T Boxster",
            "nameAr": "2.0 M/T Boxster",
            "slug": "2-0-m-t-boxster",
            "year": 2023,
            "engine": "2.0 M/T Boxster",
            "price": 3321700
          },
          {
            "nameEn": "2.0 M/T Cayman",
            "nameAr": "2.0 M/T Cayman",
            "slug": "2-0-m-t-cayman",
            "year": 2023,
            "engine": "2.0 M/T Cayman",
            "price": 3165350
          },
          {
            "nameEn": "2.5 M/T Boxster S",
            "nameAr": "2.5 M/T Boxster S",
            "slug": "2-5-m-t-boxster-s",
            "year": 2023,
            "engine": "2.5 M/T Boxster S",
            "price": 3380700
          },
          {
            "nameEn": "2.5 M/T Cayman S",
            "nameAr": "2.5 M/T Cayman S",
            "slug": "2-5-m-t-cayman-s",
            "year": 2023,
            "engine": "2.5 M/T Cayman S",
            "price": 3227300
          },
          {
            "nameEn": "4.0 M/T Boxster GTS",
            "nameAr": "4.0 M/T Boxster GTS",
            "slug": "4-0-m-t-boxster-gts",
            "year": 2023,
            "engine": "4.0 M/T Boxster GTS",
            "price": 4209650
          },
          {
            "nameEn": "4.0 M/T Cayman GT4",
            "nameAr": "4.0 M/T Cayman GT4",
            "slug": "4-0-m-t-cayman-gt4",
            "year": 2023,
            "engine": "4.0 M/T Cayman GT4",
            "price": 4808500
          },
          {
            "nameEn": "4.0 M/T Cayman GTS",
            "nameAr": "4.0 M/T Cayman GTS",
            "slug": "4-0-m-t-cayman-gts",
            "year": 2023,
            "engine": "4.0 M/T Cayman GTS",
            "price": 4053300
          },
          {
            "nameEn": "4.0 M/T Spyder",
            "nameAr": "4.0 M/T Spyder",
            "slug": "4-0-m-t-spyder",
            "year": 2023,
            "engine": "4.0 M/T Spyder",
            "price": 4752450
          }
        ]
      },
      {
        "nameEn": "911 Carrera",
        "nameAr": "كاريرا 911",
        "slug": "911-carrera",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "3.0 A/T",
            "nameAr": "3.0 A/T",
            "slug": "3-0-a-t",
            "year": 2023,
            "engine": "3.0 A/T",
            "price": 5026800
          },
          {
            "nameEn": "3.0 A/T 911 Cabriolet",
            "nameAr": "3.0 A/T 911 Cabriolet",
            "slug": "3-0-a-t-911-cabriolet",
            "year": 2023,
            "engine": "3.0 A/T 911 Cabriolet",
            "price": 5607950
          },
          {
            "nameEn": "3.0 A/T 911 Carrera 4",
            "nameAr": "3.0 A/T 911 Carrera 4",
            "slug": "3-0-a-t-911-carrera-4",
            "year": 2023,
            "engine": "3.0 A/T 911 Carrera 4",
            "price": 5389650
          },
          {
            "nameEn": "3.0 A/T 911 Carrera 4 Cabriolet",
            "nameAr": "3.0 A/T 911 Carrera 4 Cabriolet",
            "slug": "3-0-a-t-911-carrera-4-cabriolet",
            "year": 2023,
            "engine": "3.0 A/T 911 Carrera 4 Cabriolet",
            "price": 5970800
          },
          {
            "nameEn": "3.0 A/T 911 Carrera 4S",
            "nameAr": "3.0 A/T 911 Carrera 4S",
            "slug": "3-0-a-t-911-carrera-4s",
            "year": 2023,
            "engine": "3.0 A/T 911 Carrera 4S",
            "price": 6277600
          },
          {
            "nameEn": "3.0 A/T 911 Carrera 4S Cabriolet",
            "nameAr": "3.0 A/T 911 Carrera 4S Cabriolet",
            "slug": "3-0-a-t-911-carrera-4s-cabriolet",
            "year": 2023,
            "engine": "3.0 A/T 911 Carrera 4S Cabriolet",
            "price": 6858750
          },
          {
            "nameEn": "3.0 A/T 911 S",
            "nameAr": "3.0 A/T 911 S",
            "slug": "3-0-a-t-911-s",
            "year": 2023,
            "engine": "3.0 A/T 911 S",
            "price": 5914750
          },
          {
            "nameEn": "3.0 A/T 911 S Cabriolet",
            "nameAr": "3.0 A/T 911 S Cabriolet",
            "slug": "3-0-a-t-911-s-cabriolet",
            "year": 2023,
            "engine": "3.0 A/T 911 S Cabriolet",
            "price": 6495900
          }
        ]
      },
      {
        "nameEn": "911 GT3",
        "nameAr": "911 GT3",
        "slug": "911-gt3",
        "yearStart": 2022,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "4.0 M/T GT3 model",
            "nameAr": "4.0 M/T GT3 model",
            "slug": "4-0-m-t-gt3-model",
            "year": 2022,
            "engine": "4.0 M/T GT3 model",
            "price": 4158000
          },
          {
            "nameEn": "4.0 M/T with Touring Package",
            "nameAr": "4.0 M/T with Touring Package",
            "slug": "4-0-m-t-with-touring-package",
            "year": 2022,
            "engine": "4.0 M/T with Touring Package",
            "price": 4158000
          },
          {
            "nameEn": "RS",
            "nameAr": "RS",
            "slug": "rs",
            "year": 2023,
            "engine": "RS",
            "price": 6981543
          },
          {
            "nameEn": "992.2",
            "nameAr": "992.2",
            "slug": "992-2",
            "year": 2026,
            "engine": "992.2",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "911 Turbo",
        "nameAr": "911 تربو",
        "slug": "911-turbo",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "3.8 A/T",
            "nameAr": "3.8 A/T",
            "slug": "3-8-a-t",
            "year": 2023,
            "engine": "3.8 A/T",
            "price": 8227550
          },
          {
            "nameEn": "3.8 A/T Cabriolet",
            "nameAr": "3.8 A/T Cabriolet",
            "slug": "3-8-a-t-cabriolet",
            "year": 2023,
            "engine": "3.8 A/T Cabriolet",
            "price": 8779200
          },
          {
            "nameEn": "3.8 A/T S",
            "nameAr": "3.8 A/T S",
            "slug": "3-8-a-t-s",
            "year": 2023,
            "engine": "3.8 A/T S",
            "price": 9891350
          },
          {
            "nameEn": "3.8 A/T S Cabriolet",
            "nameAr": "3.8 A/T S Cabriolet",
            "slug": "3-8-a-t-s-cabriolet",
            "year": 2023,
            "engine": "3.8 A/T S Cabriolet",
            "price": 10443000
          }
        ]
      },
      {
        "nameEn": "Cayenne",
        "nameAr": "كايين",
        "slug": "cayenne",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "2.9 A/T S",
            "nameAr": "2.9 A/T S",
            "slug": "2-9-a-t-s",
            "year": 2023,
            "engine": "2.9 A/T S",
            "price": 4551850
          },
          {
            "nameEn": "3.0 A/T Cayenne",
            "nameAr": "3.0 A/T Cayenne",
            "slug": "3-0-a-t-cayenne",
            "year": 2023,
            "engine": "3.0 A/T Cayenne",
            "price": 3967750
          },
          {
            "nameEn": "4.0 A/T GTS",
            "nameAr": "4.0 A/T GTS",
            "slug": "4-0-a-t-gts",
            "year": 2023,
            "engine": "4.0 A/T GTS",
            "price": 5383750
          },
          {
            "nameEn": "4.0 A/T Turbo",
            "nameAr": "4.0 A/T Turbo",
            "slug": "4-0-a-t-turbo",
            "year": 2023,
            "engine": "4.0 A/T Turbo",
            "price": 7434000
          }
        ]
      },
      {
        "nameEn": "Cayenne Coupe",
        "nameAr": "كايين كوبيه",
        "slug": "cayenne-coupe",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "2.9 A/T S Coupe",
            "nameAr": "2.9 A/T S Coupe",
            "slug": "2-9-a-t-s-coupe",
            "year": 2023,
            "engine": "2.9 A/T S Coupe",
            "price": 4799650
          },
          {
            "nameEn": "3.0 A/T Coupé",
            "nameAr": "3.0 A/T Coupé",
            "slug": "3-0-a-t-coupe",
            "year": 2023,
            "engine": "3.0 A/T Coupé",
            "price": 4295200
          },
          {
            "nameEn": "4.0 A/T GTS Coupe",
            "nameAr": "4.0 A/T GTS Coupe",
            "slug": "4-0-a-t-gts-coupe",
            "year": 2023,
            "engine": "4.0 A/T GTS Coupe",
            "price": 5557800
          },
          {
            "nameEn": "4.0 A/T Turbo Coupe",
            "nameAr": "4.0 A/T Turbo Coupe",
            "slug": "4-0-a-t-turbo-coupe",
            "year": 2023,
            "engine": "4.0 A/T Turbo Coupe",
            "price": 7681800
          },
          {
            "nameEn": "4.0 A/T Turbo GT",
            "nameAr": "4.0 A/T Turbo GT",
            "slug": "4-0-a-t-turbo-gt",
            "year": 2023,
            "engine": "4.0 A/T Turbo GT",
            "price": 5091611
          }
        ]
      },
      {
        "nameEn": "Macan",
        "nameAr": "ماكان",
        "slug": "macan",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "2.0 A/T",
            "nameAr": "2.0 A/T",
            "slug": "2-0-a-t",
            "year": 2023,
            "engine": "2.0 A/T",
            "price": 2389500
          },
          {
            "nameEn": "2.9 A/T Macan GTS",
            "nameAr": "2.9 A/T Macan GTS",
            "slug": "2-9-a-t-macan-gts",
            "year": 2023,
            "engine": "2.9 A/T Macan GTS",
            "price": 3495750
          },
          {
            "nameEn": "3.0 A/T Macan S",
            "nameAr": "3.0 A/T Macan S",
            "slug": "3-0-a-t-macan-s",
            "year": 2023,
            "engine": "3.0 A/T Macan S",
            "price": 2976550
          }
        ]
      },
      {
        "nameEn": "Panamera",
        "nameAr": "باناميرا",
        "slug": "panamera",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "2.9 A/T Panamera",
            "nameAr": "2.9 A/T Panamera",
            "slug": "2-9-a-t-panamera",
            "year": 2023,
            "engine": "2.9 A/T Panamera",
            "price": 5215600
          },
          {
            "nameEn": "2.9 A/T Panamera 4",
            "nameAr": "2.9 A/T Panamera 4",
            "slug": "2-9-a-t-panamera-4",
            "year": 2023,
            "engine": "2.9 A/T Panamera 4",
            "price": 5283450
          },
          {
            "nameEn": "2.9 A/T Panamera 4 Executive",
            "nameAr": "2.9 A/T Panamera 4 Executive",
            "slug": "2-9-a-t-panamera-4-executive",
            "year": 2023,
            "engine": "2.9 A/T Panamera 4 Executive",
            "price": 5938350
          },
          {
            "nameEn": "2.9 A/T Panamera 4 S E-Hybrid",
            "nameAr": "2.9 A/T Panamera 4 S E-Hybrid",
            "slug": "2-9-a-t-panamera-4-s-e-hybrid",
            "year": 2023,
            "engine": "2.9 A/T Panamera 4 S E-Hybrid",
            "price": 6731900
          },
          {
            "nameEn": "4.0 A/T Panamera GTS",
            "nameAr": "4.0 A/T Panamera GTS",
            "slug": "4-0-a-t-panamera-gts",
            "year": 2023,
            "engine": "4.0 A/T Panamera GTS",
            "price": 7336650
          },
          {
            "nameEn": "4.0 A/T Panamera Turbo S",
            "nameAr": "4.0 A/T Panamera Turbo S",
            "slug": "4-0-a-t-panamera-turbo-s",
            "year": 2023,
            "engine": "4.0 A/T Panamera Turbo S",
            "price": 10428250
          }
        ]
      },
      {
        "nameEn": "Targa",
        "nameAr": "تارجا",
        "slug": "targa",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "3.0 A/T 911 Targa 4S",
            "nameAr": "3.0 A/T 911 Targa 4S",
            "slug": "3-0-a-t-911-targa-4s",
            "year": 2023,
            "engine": "3.0 A/T 911 Targa 4S",
            "price": 6858750
          },
          {
            "nameEn": "3.0 A/T Targa 4",
            "nameAr": "3.0 A/T Targa 4",
            "slug": "3-0-a-t-targa-4",
            "year": 2023,
            "engine": "3.0 A/T Targa 4",
            "price": 5970800
          }
        ]
      },
      {
        "nameEn": "Taycan",
        "nameAr": "تايكان",
        "slug": "taycan",
        "yearStart": 2023,
        "yearEnd": 2023,
        "variants": [
          {
            "nameEn": "Taycan",
            "nameAr": "Taycan",
            "slug": "taycan",
            "year": 2023,
            "engine": "Taycan",
            "price": 3815550
          },
          {
            "nameEn": "Taycan 4 Cross Turismo",
            "nameAr": "Taycan 4 Cross Turismo",
            "slug": "taycan-4-cross-turismo",
            "year": 2023,
            "engine": "Taycan 4 Cross Turismo",
            "price": 4266950
          },
          {
            "nameEn": "Taycan 4S",
            "nameAr": "Taycan 4S",
            "slug": "taycan-4s",
            "year": 2023,
            "engine": "Taycan 4S",
            "price": 4565850
          },
          {
            "nameEn": "Taycan 4S Cross Turismo",
            "nameAr": "Taycan 4S Cross Turismo",
            "slug": "taycan-4s-cross-turismo",
            "year": 2023,
            "engine": "Taycan 4S Cross Turismo",
            "price": 4617700
          },
          {
            "nameEn": "Taycan GTS",
            "nameAr": "Taycan GTS",
            "slug": "taycan-gts",
            "year": 2023,
            "engine": "Taycan GTS",
            "price": 5261250
          },
          {
            "nameEn": "Taycan Turbo",
            "nameAr": "Taycan Turbo",
            "slug": "taycan-turbo",
            "year": 2023,
            "engine": "Taycan Turbo",
            "price": 6319600
          },
          {
            "nameEn": "Taycan Turbo Cross Turismo",
            "nameAr": "Taycan Turbo Cross Turismo",
            "slug": "taycan-turbo-cross-turismo",
            "year": 2023,
            "engine": "Taycan Turbo Cross Turismo",
            "price": 6377550
          },
          {
            "nameEn": "Taycan Turbo S",
            "nameAr": "Taycan Turbo S",
            "slug": "taycan-turbo-s",
            "year": 2023,
            "engine": "Taycan Turbo S",
            "price": 8106900
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Proton",
    "nameAr": "بروتون",
    "slug": "proton",
    "models": [
      {
        "nameEn": "Saga",
        "nameAr": "ساجا",
        "slug": "saga",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 675000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Rehigh",
    "nameAr": "ريهاي",
    "slug": "rehigh",
    "models": [
      {
        "nameEn": "RH6",
        "nameAr": "RH6",
        "slug": "rh6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury Version AWD",
            "nameAr": "Luxury Version AWD",
            "slug": "luxury-version-awd",
            "year": 2026,
            "engine": "Luxury Version AWD",
            "price": 2600000
          },
          {
            "nameEn": "Nobel Version RWD",
            "nameAr": "Nobel Version RWD",
            "slug": "nobel-version-rwd",
            "year": 2026,
            "engine": "Nobel Version RWD",
            "price": 2300000
          }
        ]
      },
      {
        "nameEn": "RH8",
        "nameAr": "RH8",
        "slug": "rh8",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Luxury Version AWD",
            "nameAr": "Luxury Version AWD",
            "slug": "luxury-version-awd",
            "year": 2026,
            "engine": "Luxury Version AWD",
            "price": 2750000
          },
          {
            "nameEn": "Nobel Version RWD",
            "nameAr": "Nobel Version RWD",
            "slug": "nobel-version-rwd",
            "year": 2026,
            "engine": "Nobel Version RWD",
            "price": 2450000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Rely",
    "nameAr": "ريلاي",
    "slug": "rely",
    "models": [
      {
        "nameEn": "R8",
        "nameAr": "R8",
        "slug": "r8",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 2400000
          },
          {
            "nameEn": "Standard",
            "nameAr": "ستاندرد",
            "slug": "standard",
            "year": 2026,
            "engine": "Standard",
            "price": 2300000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Renault",
    "nameAr": "رينو",
    "slug": "renault",
    "models": [
      {
        "nameEn": "Austral",
        "nameAr": "أوسترال",
        "slug": "austral",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Espirit Alpine",
            "nameAr": "Espirit Alpine",
            "slug": "espirit-alpine",
            "year": 2026,
            "engine": "Espirit Alpine",
            "price": 1890000
          },
          {
            "nameEn": "Evolution Facelift",
            "nameAr": "Evolution Facelift",
            "slug": "evolution-facelift",
            "year": 2026,
            "engine": "Evolution Facelift",
            "price": 1550000
          },
          {
            "nameEn": "Iconic Facelift",
            "nameAr": "Iconic Facelift",
            "slug": "iconic-facelift",
            "year": 2026,
            "engine": "Iconic Facelift",
            "price": 1790000
          },
          {
            "nameEn": "Techno Facelift",
            "nameAr": "Techno Facelift",
            "slug": "techno-facelift",
            "year": 2026,
            "engine": "Techno Facelift",
            "price": 1690000
          }
        ]
      },
      {
        "nameEn": "Duster",
        "nameAr": "داستر",
        "slug": "duster",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Authentic",
            "nameAr": "Authentic",
            "slug": "authentic",
            "year": 2026,
            "engine": "Authentic",
            "price": 1195000
          },
          {
            "nameEn": "Evolution",
            "nameAr": "Evolution",
            "slug": "evolution",
            "year": 2026,
            "engine": "Evolution",
            "price": 1295000
          },
          {
            "nameEn": "Techno",
            "nameAr": "Techno",
            "slug": "techno",
            "year": 2026,
            "engine": "Techno",
            "price": 1395000
          }
        ]
      },
      {
        "nameEn": "Kardian",
        "nameAr": "كارديان",
        "slug": "kardian",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Evolution",
            "nameAr": "Evolution",
            "slug": "evolution",
            "year": 2026,
            "engine": "Evolution",
            "price": 875000
          },
          {
            "nameEn": "Iconic",
            "nameAr": "Iconic",
            "slug": "iconic",
            "year": 2026,
            "engine": "Iconic",
            "price": 990000
          },
          {
            "nameEn": "Techno",
            "nameAr": "Techno",
            "slug": "techno",
            "year": 2026,
            "engine": "Techno",
            "price": 930000
          }
        ]
      },
      {
        "nameEn": "Megane",
        "nameAr": "ميجان",
        "slug": "megane",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.3 Turbo Signature",
            "nameAr": "1.3 Turbo Signature",
            "slug": "1-3-turbo-signature",
            "year": 2026,
            "engine": "1.3 Turbo Signature",
            "price": 1450000
          },
          {
            "nameEn": "1.6 Dynamic",
            "nameAr": "1.6 Dynamic",
            "slug": "1-6-dynamic",
            "year": 2026,
            "engine": "1.6 Dynamic",
            "price": 1220000
          },
          {
            "nameEn": "1.6 Signature",
            "nameAr": "1.6 Signature",
            "slug": "1-6-signature",
            "year": 2026,
            "engine": "1.6 Signature",
            "price": 1330000
          }
        ]
      },
      {
        "nameEn": "Taliant",
        "nameAr": "تاليانت",
        "slug": "taliant",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Evolution",
            "nameAr": "Evolution",
            "slug": "evolution",
            "year": 2026,
            "engine": "Evolution",
            "price": 755000
          },
          {
            "nameEn": "Techno",
            "nameAr": "Techno",
            "slug": "techno",
            "year": 2026,
            "engine": "Techno",
            "price": 815000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "ROX",
    "nameAr": "روكس",
    "slug": "rox",
    "models": [
      {
        "nameEn": "01",
        "nameAr": "01",
        "slug": "01",
        "yearStart": 2025,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Aviation 6 Seats",
            "nameAr": "Aviation 6 Seats",
            "slug": "aviation-6-seats",
            "year": 2025,
            "engine": "Aviation 6 Seats",
            "price": 3300000
          },
          {
            "nameEn": "Family 7 Seats",
            "nameAr": "Family 7 Seats",
            "slug": "family-7-seats",
            "year": 2025,
            "engine": "Family 7 Seats",
            "price": 3200000
          },
          {
            "nameEn": "Aviation 6 Seats",
            "nameAr": "Aviation 6 Seats",
            "slug": "aviation-6-seats-2",
            "year": 2026,
            "engine": "Aviation 6 Seats",
            "price": 3585000
          },
          {
            "nameEn": "Family 7 Seats",
            "nameAr": "Family 7 Seats",
            "slug": "family-7-seats-2",
            "year": 2026,
            "engine": "Family 7 Seats",
            "price": 3500000
          }
        ]
      },
      {
        "nameEn": "Adamas",
        "nameAr": "أدماس",
        "slug": "adamas",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "6 Seats",
            "nameAr": "6 Seats",
            "slug": "6-seats",
            "year": 2026,
            "engine": "6 Seats",
            "price": 3850000
          },
          {
            "nameEn": "7 Seats",
            "nameAr": "7 Seats",
            "slug": "7-seats",
            "year": 2026,
            "engine": "7 Seats",
            "price": 3750000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Sandstorm",
    "nameAr": "ساندستورم",
    "slug": "sandstorm",
    "models": [
      {
        "nameEn": "S24",
        "nameAr": "S24",
        "slug": "s24",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Double Cab 4×4",
            "nameAr": "Double Cab 4×4",
            "slug": "double-cab-44",
            "year": 2026,
            "engine": "Double Cab 4×4",
            "price": 1990000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Seat",
    "nameAr": "سيات",
    "slug": "seat",
    "models": [
      {
        "nameEn": "Arona",
        "nameAr": "ارونا",
        "slug": "arona",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Style Plus",
            "nameAr": "Style Plus",
            "slug": "style-plus",
            "year": 2026,
            "engine": "Style Plus",
            "price": 1339000
          },
          {
            "nameEn": "Style Plus",
            "nameAr": "Style Plus",
            "slug": "style-plus-2",
            "year": 2027,
            "engine": "Style Plus",
            "price": 1369000
          }
        ]
      },
      {
        "nameEn": "ATECA",
        "nameAr": "اتيكا",
        "slug": "ateca",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Style Plus",
            "nameAr": "Style Plus",
            "slug": "style-plus",
            "year": 2026,
            "engine": "Style Plus",
            "price": 1849000
          }
        ]
      },
      {
        "nameEn": "Ibiza",
        "nameAr": "ابيزا",
        "slug": "ibiza",
        "yearStart": 2026,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Edge - Facelift",
            "nameAr": "Edge - Facelift",
            "slug": "edge-facelift",
            "year": 2026,
            "engine": "Edge - Facelift",
            "price": 1119000
          },
          {
            "nameEn": "FR Facelift",
            "nameAr": "FR Facelift",
            "slug": "fr-facelift",
            "year": 2026,
            "engine": "FR Facelift",
            "price": 1339000
          },
          {
            "nameEn": "Edge",
            "nameAr": "Edge",
            "slug": "edge",
            "year": 2027,
            "engine": "Edge",
            "price": 1149000
          },
          {
            "nameEn": "FR",
            "nameAr": "FR",
            "slug": "fr",
            "year": 2027,
            "engine": "FR",
            "price": 1369000
          }
        ]
      },
      {
        "nameEn": "Leon",
        "nameAr": "ليون",
        "slug": "leon",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Advance",
            "nameAr": "أدفانس",
            "slug": "advance",
            "year": 2026,
            "engine": "Advance",
            "price": 1599000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Shineray",
    "nameAr": "شينراي",
    "slug": "shineray",
    "models": [
      {
        "nameEn": "X30",
        "nameAr": "X30",
        "slug": "x30",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Cargo",
            "nameAr": "Cargo",
            "slug": "cargo",
            "year": 2026,
            "engine": "Cargo",
            "price": 600000
          },
          {
            "nameEn": "Passengers 8 Seats",
            "nameAr": "Passengers 8 Seats",
            "slug": "passengers-8-seats",
            "year": 2026,
            "engine": "Passengers 8 Seats",
            "price": 620000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Skoda",
    "nameAr": "سكودا",
    "slug": "skoda",
    "models": [
      {
        "nameEn": "KAROQ",
        "nameAr": "كاروك",
        "slug": "karoq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Selection Suite",
            "nameAr": "Selection Suite",
            "slug": "selection-suite",
            "year": 2026,
            "engine": "Selection Suite",
            "price": 1950000
          }
        ]
      },
      {
        "nameEn": "KODIAQ",
        "nameAr": "كودياك",
        "slug": "kodiaq",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Selection Loft",
            "nameAr": "Selection Loft",
            "slug": "selection-loft",
            "year": 2026,
            "engine": "Selection Loft",
            "price": 2600000
          },
          {
            "nameEn": "Selection Suite",
            "nameAr": "Selection Suite",
            "slug": "selection-suite",
            "year": 2026,
            "engine": "Selection Suite",
            "price": 2950000
          },
          {
            "nameEn": "Sportline",
            "nameAr": "Sportline",
            "slug": "sportline",
            "year": 2026,
            "engine": "Sportline",
            "price": 3100000
          }
        ]
      },
      {
        "nameEn": "Octavia",
        "nameAr": "اوكتافيا",
        "slug": "octavia",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Selection Loft",
            "nameAr": "Selection Loft",
            "slug": "selection-loft",
            "year": 2026,
            "engine": "Selection Loft",
            "price": 1800000
          },
          {
            "nameEn": "Selection Lounge",
            "nameAr": "Selection Lounge",
            "slug": "selection-lounge",
            "year": 2026,
            "engine": "Selection Lounge",
            "price": 2000000
          },
          {
            "nameEn": "Selection Suite",
            "nameAr": "Selection Suite",
            "slug": "selection-suite",
            "year": 2026,
            "engine": "Selection Suite",
            "price": 2100000
          }
        ]
      },
      {
        "nameEn": "Superb",
        "nameAr": "سوبيرب",
        "slug": "superb",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "L&K 1.5",
            "nameAr": "L&K 1.5",
            "slug": "l-and-k-1-5",
            "year": 2026,
            "engine": "L&K 1.5",
            "price": 2600000
          },
          {
            "nameEn": "L&K 2.0",
            "nameAr": "L&K 2.0",
            "slug": "l-and-k-2-0",
            "year": 2026,
            "engine": "L&K 2.0",
            "price": 3000000
          },
          {
            "nameEn": "Selection Suite 1.5",
            "nameAr": "Selection Suite 1.5",
            "slug": "selection-suite-1-5",
            "year": 2026,
            "engine": "Selection Suite 1.5",
            "price": 2350000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Smart",
    "nameAr": "سمارت",
    "slug": "smart",
    "models": [
      {
        "nameEn": "Hashtag 1",
        "nameAr": "هاشتاج 1",
        "slug": "hashtag-1",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Brabus",
            "nameAr": "Brabus",
            "slug": "brabus",
            "year": 2025,
            "engine": "Brabus",
            "price": 2140000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1990000
          },
          {
            "nameEn": "Pro+",
            "nameAr": "Pro+",
            "slug": "pro",
            "year": 2025,
            "engine": "Pro+",
            "price": 1840000
          },
          {
            "nameEn": "Pure+",
            "nameAr": "Pure+",
            "slug": "pure",
            "year": 2025,
            "engine": "Pure+",
            "price": 1490000
          }
        ]
      },
      {
        "nameEn": "Hashtag 3",
        "nameAr": "هاشتاج 3",
        "slug": "hashtag-3",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Brabus",
            "nameAr": "Brabus",
            "slug": "brabus",
            "year": 2025,
            "engine": "Brabus",
            "price": 2390000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 2190000
          },
          {
            "nameEn": "Pro+",
            "nameAr": "Pro+",
            "slug": "pro",
            "year": 2025,
            "engine": "Pro+",
            "price": 1990000
          }
        ]
      },
      {
        "nameEn": "Hashtag 5",
        "nameAr": "هاشتاج 5",
        "slug": "hashtag-5",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "BRABUS",
            "nameAr": "BRABUS",
            "slug": "brabus",
            "year": 2026,
            "engine": "BRABUS",
            "price": 2649000
          },
          {
            "nameEn": "PREMIUM",
            "nameAr": "PREMIUM",
            "slug": "premium",
            "year": 2026,
            "engine": "PREMIUM",
            "price": 2449000
          },
          {
            "nameEn": "PRO+",
            "nameAr": "PRO+",
            "slug": "pro",
            "year": 2026,
            "engine": "PRO+",
            "price": 2099000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Soueast",
    "nameAr": "سوايست",
    "slug": "soueast",
    "models": [
      {
        "nameEn": "S 05",
        "nameAr": "S 05",
        "slug": "s-05",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2027,
            "engine": "Highline",
            "price": 1070000
          }
        ]
      },
      {
        "nameEn": "S 06",
        "nameAr": "S 06",
        "slug": "s-06",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "DM",
            "nameAr": "DM",
            "slug": "dm",
            "year": 2027,
            "engine": "DM",
            "price": 1650000
          },
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2027,
            "engine": "Highline",
            "price": 1350000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1485000
          }
        ]
      },
      {
        "nameEn": "S 07",
        "nameAr": "S 07",
        "slug": "s-07",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Highline",
            "nameAr": "Highline",
            "slug": "highline",
            "year": 2027,
            "engine": "Highline",
            "price": 1390000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1530000
          }
        ]
      },
      {
        "nameEn": "S 08 DM",
        "nameAr": "S 08 DM",
        "slug": "s-08-dm",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Intelligent",
            "nameAr": "Intelligent",
            "slug": "intelligent",
            "year": 2027,
            "engine": "Intelligent",
            "price": 1800000
          }
        ]
      },
      {
        "nameEn": "S 09",
        "nameAr": "S 09",
        "slug": "s-09",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2027,
            "engine": "Premium",
            "price": 1600000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Subaru",
    "nameAr": "سوبارو",
    "slug": "subaru",
    "models": [
      {
        "nameEn": "Crosstrek",
        "nameAr": "كروس تريك",
        "slug": "crosstrek",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "2.0 A/T",
            "nameAr": "2.0 A/T",
            "slug": "2-0-a-t",
            "year": 2024,
            "engine": "2.0 A/T",
            "price": 2300000
          }
        ]
      },
      {
        "nameEn": "Forester",
        "nameAr": "فورستر",
        "slug": "forester",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "2.0 A/T SUV",
            "nameAr": "2.0 A/T SUV",
            "slug": "2-0-a-t-suv",
            "year": 2024,
            "engine": "2.0 A/T SUV",
            "price": 2775000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Suzuki",
    "nameAr": "سوزوكي",
    "slug": "suzuki",
    "models": [
      {
        "nameEn": "Alto",
        "nameAr": "ألتو",
        "slug": "alto",
        "yearStart": 2027,
        "yearEnd": 2027,
        "variants": [
          {
            "nameEn": "1000 M/T",
            "nameAr": "1000 M/T",
            "slug": "1000-m-t",
            "year": 2027,
            "engine": "1000 M/T",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "Baleno",
        "nameAr": "بالينو",
        "slug": "baleno",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "AMT GLX",
            "nameAr": "AMT GLX",
            "slug": "amt-glx",
            "year": 2026,
            "engine": "AMT GLX",
            "price": 1090000
          }
        ]
      },
      {
        "nameEn": "Dzire",
        "nameAr": "ديزاير",
        "slug": "dzire",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GLX",
            "nameAr": "GLX",
            "slug": "glx",
            "year": 2026,
            "engine": "GLX",
            "price": 885000
          }
        ]
      },
      {
        "nameEn": "Grand Vitara",
        "nameAr": "جراند فيتارا",
        "slug": "grand-vitara",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "1.5 A/T GLX 2 Tone",
            "nameAr": "1.5 A/T GLX 2 Tone",
            "slug": "1-5-a-t-glx-2-tone",
            "year": 2024,
            "engine": "1.5 A/T GLX 2 Tone",
            "price": 1800000
          }
        ]
      },
      {
        "nameEn": "Jimny",
        "nameAr": "جيمني",
        "slug": "jimny",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GLX 4 Doors",
            "nameAr": "GLX 4 Doors",
            "slug": "glx-4-doors",
            "year": 2026,
            "engine": "GLX 4 Doors",
            "price": 1500000
          }
        ]
      },
      {
        "nameEn": "Spresso",
        "nameAr": "إسبريسو",
        "slug": "spresso",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "AMT GLX",
            "nameAr": "AMT GLX",
            "slug": "amt-glx",
            "year": 2026,
            "engine": "AMT GLX",
            "price": 630000
          }
        ]
      },
      {
        "nameEn": "Swift",
        "nameAr": "سويفت",
        "slug": "swift",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "GLX Double",
            "nameAr": "GLX Double",
            "slug": "glx-double",
            "year": 2026,
            "engine": "GLX Double",
            "price": 905000
          },
          {
            "nameEn": "GLX Single",
            "nameAr": "GLX Single",
            "slug": "glx-single",
            "year": 2026,
            "engine": "GLX Single",
            "price": 880000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Toyota",
    "nameAr": "تويوتا",
    "slug": "toyota",
    "models": [
      {
        "nameEn": "bZ4X",
        "nameAr": "bZ4X",
        "slug": "bz4x",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Premier",
            "nameAr": "Premier",
            "slug": "premier",
            "year": 2026,
            "engine": "Premier",
            "price": 2380000
          },
          {
            "nameEn": "Sport",
            "nameAr": "سبورت",
            "slug": "sport",
            "year": 2026,
            "engine": "Sport",
            "price": 2200000
          }
        ]
      },
      {
        "nameEn": "Corolla",
        "nameAr": "كورولا",
        "slug": "corolla",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Active",
            "nameAr": "Active",
            "slug": "active",
            "year": 2026,
            "engine": "Active",
            "price": 1280000
          },
          {
            "nameEn": "Comfort",
            "nameAr": "كومفورت",
            "slug": "comfort",
            "year": 2026,
            "engine": "Comfort",
            "price": 1380000
          },
          {
            "nameEn": "Elegance",
            "nameAr": "Elegance",
            "slug": "elegance",
            "year": 2026,
            "engine": "Elegance",
            "price": 1630000
          },
          {
            "nameEn": "Hybrid",
            "nameAr": "Hybrid",
            "slug": "hybrid",
            "year": 2026,
            "engine": "Hybrid",
            "price": 2000000
          },
          {
            "nameEn": "Smart",
            "nameAr": "Smart",
            "slug": "smart",
            "year": 2026,
            "engine": "Smart",
            "price": 1480000
          },
          {
            "nameEn": "Smart with Sunroof",
            "nameAr": "Smart with Sunroof",
            "slug": "smart-with-sunroof",
            "year": 2026,
            "engine": "Smart with Sunroof",
            "price": 1580000
          }
        ]
      },
      {
        "nameEn": "Fortuner",
        "nameAr": "فورتشنر",
        "slug": "fortuner",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Sport 4.0 4WD",
            "nameAr": "Sport 4.0 4WD",
            "slug": "sport-4-0-4wd",
            "year": 2026,
            "engine": "Sport 4.0 4WD",
            "price": 3700000
          }
        ]
      },
      {
        "nameEn": "Urban Cruiser",
        "nameAr": "اوربان كروزر",
        "slug": "urban-cruiser",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "1.5 A/T Active",
            "nameAr": "1.5 A/T Active",
            "slug": "1-5-a-t-active",
            "year": 2026,
            "engine": "1.5 A/T Active",
            "price": 1430000
          },
          {
            "nameEn": "1.5 A/T Comfort",
            "nameAr": "1.5 A/T Comfort",
            "slug": "1-5-a-t-comfort",
            "year": 2026,
            "engine": "1.5 A/T Comfort",
            "price": 1530000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "VGV",
    "nameAr": "في جي في",
    "slug": "vgv",
    "models": [
      {
        "nameEn": "U70 P plus",
        "nameAr": "يو 70 بى بلس",
        "slug": "u70-p-plus",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "1.5 A/T Highline",
            "nameAr": "1.5 A/T Highline",
            "slug": "1-5-a-t-highline",
            "year": 2025,
            "engine": "1.5 A/T Highline",
            "price": 1069000
          }
        ]
      },
      {
        "nameEn": "U70 PRO",
        "nameAr": "U70 PRO",
        "slug": "u70-pro",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "1.5 A/T Top Line",
            "nameAr": "1.5 A/T Top Line",
            "slug": "1-5-a-t-top-line",
            "year": 2024,
            "engine": "1.5 A/T Top Line",
            "price": 1059000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Volkswagen",
    "nameAr": "فولكس فاجن",
    "slug": "volkswagen",
    "models": [
      {
        "nameEn": "Golf",
        "nameAr": "جولف",
        "slug": "golf",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Life",
            "nameAr": "Life",
            "slug": "life",
            "year": 2025,
            "engine": "Life",
            "price": 1690000
          }
        ]
      },
      {
        "nameEn": "ID.3",
        "nameAr": "ID.3",
        "slug": "id-3",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "Life",
            "nameAr": "Life",
            "slug": "life",
            "year": 2024,
            "engine": "Life",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "ID.4",
        "nameAr": "ID.4",
        "slug": "id-4",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "Life",
            "nameAr": "Life",
            "slug": "life",
            "year": 2024,
            "engine": "Life",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "ID.4 Crozz",
        "nameAr": "ID.4 Crozz",
        "slug": "id-4-crozz",
        "yearStart": 2024,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Prime",
            "nameAr": "Prime",
            "slug": "prime",
            "year": 2024,
            "engine": "Prime",
            "price": 1
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2024,
            "engine": "Pro",
            "price": 1
          },
          {
            "nameEn": "Pure+",
            "nameAr": "Pure+",
            "slug": "pure",
            "year": 2024,
            "engine": "Pure+",
            "price": 1
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro-2",
            "year": 2025,
            "engine": "Pro",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "ID.6 Crozz",
        "nameAr": "ID.6 Crozz",
        "slug": "id-6-crozz",
        "yearStart": 2024,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2024,
            "engine": "Pro",
            "price": 1
          },
          {
            "nameEn": "Pure",
            "nameAr": "Pure",
            "slug": "pure",
            "year": 2024,
            "engine": "Pure",
            "price": 1
          },
          {
            "nameEn": "Pure+",
            "nameAr": "Pure+",
            "slug": "pure-2",
            "year": 2024,
            "engine": "Pure+",
            "price": 1
          },
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro-2",
            "year": 2025,
            "engine": "Pro",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "id7",
        "nameAr": "id7",
        "slug": "id7",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "PRO PLUS",
            "nameAr": "PRO PLUS",
            "slug": "pro-plus",
            "year": 2024,
            "engine": "PRO PLUS",
            "price": 1
          }
        ]
      },
      {
        "nameEn": "T-Roc",
        "nameAr": "تي روك",
        "slug": "t-roc",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "R-line",
            "nameAr": "R-line",
            "slug": "r-line",
            "year": 2026,
            "engine": "R-line",
            "price": 1850000
          }
        ]
      },
      {
        "nameEn": "Tayron",
        "nameAr": "تايرون",
        "slug": "tayron",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "R-Line",
            "nameAr": "R-Line",
            "slug": "r-line",
            "year": 2026,
            "engine": "R-Line",
            "price": 2890000
          }
        ]
      },
      {
        "nameEn": "Tiguan",
        "nameAr": "تيجوان",
        "slug": "tiguan",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "R-Line",
            "nameAr": "R-Line",
            "slug": "r-line",
            "year": 2026,
            "engine": "R-Line",
            "price": 2590000
          }
        ]
      },
      {
        "nameEn": "Touareg",
        "nameAr": "طوارق",
        "slug": "touareg",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "R-Line",
            "nameAr": "R-Line",
            "slug": "r-line",
            "year": 2025,
            "engine": "R-Line",
            "price": 4600000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Volvo",
    "nameAr": "فولفو",
    "slug": "volvo",
    "models": [
      {
        "nameEn": "ES90",
        "nameAr": "ES90",
        "slug": "es90",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra",
            "nameAr": "Ultra",
            "slug": "ultra",
            "year": 2026,
            "engine": "Ultra",
            "price": 4290000
          }
        ]
      },
      {
        "nameEn": "EX30",
        "nameAr": "EX30",
        "slug": "ex30",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Plus Single Motor",
            "nameAr": "Plus Single Motor",
            "slug": "plus-single-motor",
            "year": 2026,
            "engine": "Plus Single Motor",
            "price": 1790000
          },
          {
            "nameEn": "Ultra Single Motor",
            "nameAr": "Ultra Single Motor",
            "slug": "ultra-single-motor",
            "year": 2026,
            "engine": "Ultra Single Motor",
            "price": 1890000
          },
          {
            "nameEn": "Ultra Twin Motor",
            "nameAr": "Ultra Twin Motor",
            "slug": "ultra-twin-motor",
            "year": 2026,
            "engine": "Ultra Twin Motor",
            "price": 1990000
          }
        ]
      },
      {
        "nameEn": "XC 40",
        "nameAr": "XC 40",
        "slug": "xc-40",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Black Edition",
            "nameAr": "Black Edition",
            "slug": "black-edition",
            "year": 2026,
            "engine": "Black Edition",
            "price": 3050000
          },
          {
            "nameEn": "Essential",
            "nameAr": "Essential",
            "slug": "essential",
            "year": 2026,
            "engine": "Essential",
            "price": 2550000
          },
          {
            "nameEn": "Ultra Dark",
            "nameAr": "Ultra Dark",
            "slug": "ultra-dark",
            "year": 2026,
            "engine": "Ultra Dark",
            "price": 2890000
          }
        ]
      },
      {
        "nameEn": "XC 60",
        "nameAr": "XC 60",
        "slug": "xc-60",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Black Edition",
            "nameAr": "Black Edition",
            "slug": "black-edition",
            "year": 2026,
            "engine": "Black Edition",
            "price": 4150000
          },
          {
            "nameEn": "Essential",
            "nameAr": "Essential",
            "slug": "essential",
            "year": 2026,
            "engine": "Essential",
            "price": 3690000
          },
          {
            "nameEn": "Ultimate Dark",
            "nameAr": "Ultimate Dark",
            "slug": "ultimate-dark",
            "year": 2026,
            "engine": "Ultimate Dark",
            "price": 4100000
          }
        ]
      },
      {
        "nameEn": "XC 90",
        "nameAr": "XC 90",
        "slug": "xc-90",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Ultra Bright",
            "nameAr": "Ultra Bright",
            "slug": "ultra-bright",
            "year": 2026,
            "engine": "Ultra Bright",
            "price": 5250000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Voyah",
    "nameAr": "فويا",
    "slug": "voyah",
    "models": [
      {
        "nameEn": "Dream",
        "nameAr": "دريم",
        "slug": "dream",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Signature",
            "nameAr": "Signature",
            "slug": "signature",
            "year": 2026,
            "engine": "Signature",
            "price": 4900000
          }
        ]
      },
      {
        "nameEn": "Free",
        "nameAr": "فري",
        "slug": "free",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "REEV",
            "nameAr": "REEV",
            "slug": "reev",
            "year": 2026,
            "engine": "REEV",
            "price": 2650000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Wingamm",
    "nameAr": "وينجام",
    "slug": "wingamm",
    "models": [
      {
        "nameEn": "Oasi 540",
        "nameAr": "Oasi 540",
        "slug": "oasi-540",
        "yearStart": 2024,
        "yearEnd": 2024,
        "variants": [
          {
            "nameEn": "2.2 JTD",
            "nameAr": "2.2 JTD",
            "slug": "2-2-jtd",
            "year": 2024,
            "engine": "2.2 JTD",
            "price": 15900000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Xiaomi",
    "nameAr": "شاومي",
    "slug": "xiaomi",
    "models": [
      {
        "nameEn": "SU7",
        "nameAr": "SU7",
        "slug": "su7",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Pro",
            "nameAr": "برو",
            "slug": "pro",
            "year": 2025,
            "engine": "Pro",
            "price": 1
          },
          {
            "nameEn": "SU7",
            "nameAr": "SU7",
            "slug": "su7",
            "year": 2025,
            "engine": "SU7",
            "price": 1
          },
          {
            "nameEn": "SU7 Max",
            "nameAr": "SU7 Max",
            "slug": "su7-max",
            "year": 2025,
            "engine": "SU7 Max",
            "price": 1
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Xpeng",
    "nameAr": "إكس بينج",
    "slug": "xpeng",
    "models": [
      {
        "nameEn": "G6",
        "nameAr": "جي 6",
        "slug": "g6",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "RWD Flagship",
            "nameAr": "RWD Flagship",
            "slug": "rwd-flagship",
            "year": 2026,
            "engine": "RWD Flagship",
            "price": 2190000
          }
        ]
      },
      {
        "nameEn": "G9",
        "nameAr": "جي 9",
        "slug": "g9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "AWD Performance",
            "nameAr": "AWD Performance",
            "slug": "awd-performance",
            "year": 2026,
            "engine": "AWD Performance",
            "price": 3150000
          },
          {
            "nameEn": "RWD Flagship",
            "nameAr": "RWD Flagship",
            "slug": "rwd-flagship",
            "year": 2026,
            "engine": "RWD Flagship",
            "price": 2890000
          },
          {
            "nameEn": "RWD Premium",
            "nameAr": "RWD Premium",
            "slug": "rwd-premium",
            "year": 2026,
            "engine": "RWD Premium",
            "price": 2740000
          }
        ]
      },
      {
        "nameEn": "Mona MO3",
        "nameAr": "مونا MO3",
        "slug": "mona-mo3",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "FWD Premium",
            "nameAr": "FWD Premium",
            "slug": "fwd-premium",
            "year": 2026,
            "engine": "FWD Premium",
            "price": 1350000
          },
          {
            "nameEn": "FWD Premium Plus",
            "nameAr": "FWD Premium Plus",
            "slug": "fwd-premium-plus",
            "year": 2026,
            "engine": "FWD Premium Plus",
            "price": 1400000
          }
        ]
      },
      {
        "nameEn": "Next P7",
        "nameAr": "Next P7",
        "slug": "next-p7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "AWD Performance",
            "nameAr": "AWD Performance",
            "slug": "awd-performance",
            "year": 2026,
            "engine": "AWD Performance",
            "price": 2850000
          },
          {
            "nameEn": "AWD Wing Edition",
            "nameAr": "AWD Wing Edition",
            "slug": "awd-wing-edition",
            "year": 2026,
            "engine": "AWD Wing Edition",
            "price": 1
          },
          {
            "nameEn": "RWD Flagship Ultra Range",
            "nameAr": "RWD Flagship Ultra Range",
            "slug": "rwd-flagship-ultra-range",
            "year": 2026,
            "engine": "RWD Flagship Ultra Range",
            "price": 2650000
          }
        ]
      },
      {
        "nameEn": "P7+",
        "nameAr": "P7+",
        "slug": "p7",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "EV",
            "nameAr": "EV",
            "slug": "ev",
            "year": 2026,
            "engine": "EV",
            "price": 2150000
          }
        ]
      },
      {
        "nameEn": "X9",
        "nameAr": "X9",
        "slug": "x9",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2026,
            "engine": "Flagship",
            "price": 3599000
          }
        ]
      }
    ]
  },
  {
    "nameEn": "Zeekr",
    "nameAr": "زيكر",
    "slug": "zeekr",
    "models": [
      {
        "nameEn": "001",
        "nameAr": "001",
        "slug": "001",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2025,
            "engine": "Flagship",
            "price": 3049000
          },
          {
            "nameEn": "Long Range",
            "nameAr": "Long Range",
            "slug": "long-range",
            "year": 2025,
            "engine": "Long Range",
            "price": 2549000
          },
          {
            "nameEn": "Performance",
            "nameAr": "بيرفورمانس",
            "slug": "performance",
            "year": 2025,
            "engine": "Performance",
            "price": 2849000
          }
        ]
      },
      {
        "nameEn": "7X",
        "nameAr": "7X",
        "slug": "7x",
        "yearStart": 2026,
        "yearEnd": 2026,
        "variants": [
          {
            "nameEn": "AWD Performance",
            "nameAr": "AWD Performance",
            "slug": "awd-performance",
            "year": 2026,
            "engine": "AWD Performance",
            "price": 2799000
          },
          {
            "nameEn": "RWD Long Range",
            "nameAr": "RWD Long Range",
            "slug": "rwd-long-range",
            "year": 2026,
            "engine": "RWD Long Range",
            "price": 2499000
          },
          {
            "nameEn": "RWD Standard",
            "nameAr": "RWD Standard",
            "slug": "rwd-standard",
            "year": 2026,
            "engine": "RWD Standard",
            "price": 2099000
          }
        ]
      },
      {
        "nameEn": "X",
        "nameAr": "X",
        "slug": "x",
        "yearStart": 2025,
        "yearEnd": 2025,
        "variants": [
          {
            "nameEn": "Flagship",
            "nameAr": "فلاجشيب",
            "slug": "flagship",
            "year": 2025,
            "engine": "Flagship",
            "price": 1849000
          },
          {
            "nameEn": "Premium",
            "nameAr": "بريميوم",
            "slug": "premium",
            "year": 2025,
            "engine": "Premium",
            "price": 1699000
          }
        ]
      }
    ]
  }
];

export const EGYPT_MARKET_DEALERS: MarketDealerSeed[] = [
  {
    "nameEn": "2M Motors",
    "nameAr": "تو ام موتورز",
    "slug": "2m-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01115223300"
  },
  {
    "nameEn": "4MATIC",
    "nameAr": "فورماتيك",
    "slug": "4matic",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01070107010"
  },
  {
    "nameEn": "Abou Ghali By Montaser",
    "nameAr": "أبو غالى باى منتصر",
    "slug": "abou-ghali-by-montaser",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01220033368"
  },
  {
    "nameEn": "ABU ZEID AUTOMOTIVE",
    "nameAr": "أبو زيد أتوموتيف",
    "slug": "abu-zeid-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "15079"
  },
  {
    "nameEn": "AL Ayouty Auto",
    "nameAr": "العيوطي أوتو",
    "slug": "al-ayouty-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01290000760"
  },
  {
    "nameEn": "AL BASMA MOTORS",
    "nameAr": "البسمة موتورز",
    "slug": "al-basma-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01005887575"
  },
  {
    "nameEn": "Al Osman Auto",
    "nameAr": "العثمان أوتو",
    "slug": "al-osman-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01211909010"
  },
  {
    "nameEn": "AL Wazzer Motors",
    "nameAr": "الوزير موتورز",
    "slug": "al-wazzer-motors",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01112999954"
  },
  {
    "nameEn": "Allam Audi",
    "nameAr": "علام أودي",
    "slug": "allam-audi",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01201777796"
  },
  {
    "nameEn": "Allam Automotive",
    "nameAr": "علام أوتوموتيف",
    "slug": "allam-automotive",
    "city": "Alexandria",
    "governorate": "Alexandria",
    "phone": "01200001457"
  },
  {
    "nameEn": "Allam Automotive",
    "nameAr": "علام أوتوموتيف",
    "slug": "allam-automotive-giza",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01003064632"
  },
  {
    "nameEn": "Arabeety Car Imports",
    "nameAr": "عربيتي لاستيراد السيارات",
    "slug": "arabeety-car-imports",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "0225383086"
  },
  {
    "nameEn": "Auto 7even",
    "nameAr": "اوتو سفن",
    "slug": "auto-7even",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01000006715"
  },
  {
    "nameEn": "AUTO DYNAMIC",
    "nameAr": "اوتو دينمك",
    "slug": "auto-dynamic",
    "city": null,
    "governorate": null,
    "phone": "0127500049"
  },
  {
    "nameEn": "Auto Garage",
    "nameAr": "اوتو جراج",
    "slug": "auto-garage",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01016611864"
  },
  {
    "nameEn": "Auto one For Trading",
    "nameAr": "أوتو وان لتجارة السيارات",
    "slug": "auto-one-for-trading",
    "city": "Zagazig",
    "governorate": "Sharqia",
    "phone": "01066697936"
  },
  {
    "nameEn": "Bakr auto",
    "nameAr": "بكر اوتو",
    "slug": "bakr-auto",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01055520033"
  },
  {
    "nameEn": "Bedawy Automotive",
    "nameAr": "بديوي أوتوموتيف",
    "slug": "bedawy-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01114412368"
  },
  {
    "nameEn": "Black Edition",
    "nameAr": "بلاك ايدشن",
    "slug": "black-edition",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01200010850"
  },
  {
    "nameEn": "Capital auto",
    "nameAr": "كابيتال اوتو",
    "slug": "capital-auto",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01040400993"
  },
  {
    "nameEn": "Dabbagh Dynasty Auto",
    "nameAr": "دباغ ديناستى اوتو",
    "slug": "dabbagh-dynasty-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01113143326"
  },
  {
    "nameEn": "East Gate Auto",
    "nameAr": "ايست جيت أوتو",
    "slug": "east-gate-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01013037777"
  },
  {
    "nameEn": "Edition one Auto",
    "nameAr": "ايديشن وان اوتو",
    "slug": "edition-one-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01200003598"
  },
  {
    "nameEn": "El Emam",
    "nameAr": "الامام للسيارات",
    "slug": "el-emam",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01225555853"
  },
  {
    "nameEn": "El Kersh Cars",
    "nameAr": "سيارات القرش",
    "slug": "el-kersh-cars",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "16916"
  },
  {
    "nameEn": "El Khial cars",
    "nameAr": "الخيال للسيارات",
    "slug": "el-khial-cars",
    "city": "Kafr El Sheikh",
    "governorate": "Kafr El Sheikh",
    "phone": "01050222613"
  },
  {
    "nameEn": "EL MAALM",
    "nameAr": "المعلم اوتو",
    "slug": "el-maalm",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01092010008"
  },
  {
    "nameEn": "EL Motawkel Cars",
    "nameAr": "المتوكل للسيارات",
    "slug": "el-motawkel-cars",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01277778967"
  },
  {
    "nameEn": "El Rawas Motors",
    "nameAr": "الرواس موتورز",
    "slug": "el-rawas-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01069000665"
  },
  {
    "nameEn": "EL Togary Auto",
    "nameAr": "التجاري أوتو",
    "slug": "el-togary-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "1030061000"
  },
  {
    "nameEn": "EL Watania Auto",
    "nameAr": "الوطنية للسيارات",
    "slug": "el-watania-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01009469336"
  },
  {
    "nameEn": "Elegant Automotive",
    "nameAr": "اليجانت أوتوموتيف",
    "slug": "elegant-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01003825133"
  },
  {
    "nameEn": "ELEmam Motors",
    "nameAr": "الامام موتورز",
    "slug": "elemam-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01044430400"
  },
  {
    "nameEn": "elfarid",
    "nameAr": "الفريد",
    "slug": "elfarid",
    "city": "Alexandria",
    "governorate": "Alexandria",
    "phone": "01203244314"
  },
  {
    "nameEn": "Ellaithy Auto Group",
    "nameAr": "الليثى أوتو جروب",
    "slug": "ellaithy-auto-group",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01008883326"
  },
  {
    "nameEn": "Euro one",
    "nameAr": "يورو وان",
    "slug": "euro-one",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01022648497"
  },
  {
    "nameEn": "Exotic One",
    "nameAr": "اكزوتك وان",
    "slug": "exotic-one",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01034446237"
  },
  {
    "nameEn": "Farag group",
    "nameAr": "فرج جروب",
    "slug": "farag-group",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01282200822"
  },
  {
    "nameEn": "First 1 Car",
    "nameAr": "فرست 1 كار",
    "slug": "first-1-car",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01120080191"
  },
  {
    "nameEn": "First Royal Auto",
    "nameAr": "فرست رويال أوتو",
    "slug": "first-royal-auto",
    "city": null,
    "governorate": null,
    "phone": "01080804446"
  },
  {
    "nameEn": "Gamal ElZiny",
    "nameAr": "جمال الزيني",
    "slug": "gamal-elziny",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01207060666"
  },
  {
    "nameEn": "Gear Up Luxury Cars",
    "nameAr": "جير أب لاكشرى كارز",
    "slug": "gear-up-luxury-cars",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01145337489"
  },
  {
    "nameEn": "Geely",
    "nameAr": "جيلى",
    "slug": "geely",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "16402"
  },
  {
    "nameEn": "General Automotive",
    "nameAr": "جنيرال اوتوموتيف",
    "slug": "general-automotive",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "16631"
  },
  {
    "nameEn": "Ghandour Auto",
    "nameAr": "غندور أوتو",
    "slug": "ghandour-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01221112020"
  },
  {
    "nameEn": "Golf Star",
    "nameAr": "جولف ستار",
    "slug": "golf-star",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01005090102"
  },
  {
    "nameEn": "Henrys Automotive",
    "nameAr": "هنريز أوتوموتيف",
    "slug": "henrys-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01550755039"
  },
  {
    "nameEn": "Khaled Aboud Automotive",
    "nameAr": "خالد عبود أوتوموتيف",
    "slug": "khaled-aboud-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01102062056"
  },
  {
    "nameEn": "King Automotive",
    "nameAr": "كينج أوتوموتيف",
    "slug": "king-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01011999666"
  },
  {
    "nameEn": "KING MOTORS",
    "nameAr": "كينج موتورز",
    "slug": "king-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01223778928"
  },
  {
    "nameEn": "MACAN Automotive",
    "nameAr": "مكان اوتوموتيف",
    "slug": "macan-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01110030136"
  },
  {
    "nameEn": "melegy Automotive",
    "nameAr": "مليجي أوتوموتيف",
    "slug": "melegy-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01080003384"
  },
  {
    "nameEn": "Mohamed fahmy cars",
    "nameAr": "محمد فهمي كارز",
    "slug": "mohamed-fahmy-cars",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01022253145"
  },
  {
    "nameEn": "Mohamed Gaber Auto",
    "nameAr": "محمد جابر أوتو",
    "slug": "mohamed-gaber-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01155252244"
  },
  {
    "nameEn": "Motor one Luxury",
    "nameAr": "موتور وان جولد",
    "slug": "motor-one-luxury",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01126556666"
  },
  {
    "nameEn": "New El Emam",
    "nameAr": "نيو الامام",
    "slug": "new-el-emam",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01222209520"
  },
  {
    "nameEn": "NINE ONE ONE LUXURY CARS",
    "nameAr": "ناين وان وان",
    "slug": "nine-one-one-luxury-cars",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01055229990"
  },
  {
    "nameEn": "ONE OF ONE AUTO",
    "nameAr": "وان اوف وان اوتو",
    "slug": "one-of-one-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01159410137"
  },
  {
    "nameEn": "Platinum Auto",
    "nameAr": "بلاتنيوم أوتو",
    "slug": "platinum-auto",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01029400004"
  },
  {
    "nameEn": "Safaan group",
    "nameAr": "سعفان جروب",
    "slug": "safaan-group",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01110063276"
  },
  {
    "nameEn": "segma auto",
    "nameAr": "سيجما اوتو",
    "slug": "segma-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01094252522"
  },
  {
    "nameEn": "SHARKAWY AUTO",
    "nameAr": "شرقاوي اوتو",
    "slug": "sharkawy-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01002000887"
  },
  {
    "nameEn": "Soltan Auto",
    "nameAr": "سلطان أوتو",
    "slug": "soltan-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01002400020"
  },
  {
    "nameEn": "Teacher motors",
    "nameAr": "تيتشر موتورز",
    "slug": "teacher-motors",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "15078"
  },
  {
    "nameEn": "Toyota Egypt",
    "nameAr": "تويوتا مصر",
    "slug": "toyota-egypt",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "16550"
  },
  {
    "nameEn": "Trust Motors",
    "nameAr": "تراست موتورز",
    "slug": "trust-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01206977756"
  },
  {
    "nameEn": "United Arab",
    "nameAr": "العربي المتحدة",
    "slug": "united-arab",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01070008935"
  },
  {
    "nameEn": "V22 Auto",
    "nameAr": "V22 Auto",
    "slug": "v22-auto",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01050902439"
  },
  {
    "nameEn": "Version Auto",
    "nameAr": "فيرجن أوتو",
    "slug": "version-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01000843933"
  },
  {
    "nameEn": "Vida Automotive",
    "nameAr": "فيدا أوتوموتيف",
    "slug": "vida-automotive",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01228889122"
  },
  {
    "nameEn": "WHEELZ",
    "nameAr": "ويلز",
    "slug": "wheelz",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01117178333"
  },
  {
    "nameEn": "Xtreme Auto",
    "nameAr": "اكستريم اوتو",
    "slug": "xtreme-auto",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "16212"
  },
  {
    "nameEn": "Z Automotive",
    "nameAr": "زاد اوتوموتيف",
    "slug": "z-automotive",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01050508286"
  },
  {
    "nameEn": "Zahran Motors",
    "nameAr": "زهران موتورز",
    "slug": "zahran-motors",
    "city": "Cairo",
    "governorate": "Cairo",
    "phone": "01008866663"
  },
  {
    "nameEn": "Zayed Auto",
    "nameAr": "زايد اوتو",
    "slug": "zayed-auto",
    "city": "Giza",
    "governorate": "Giza",
    "phone": "01156888848"
  }
];
