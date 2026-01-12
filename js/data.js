// ============================
// TravelMate Leisure Data
// Singapore Entertainment & Recreation Recommendations
// ============================ 

const leisureData = [
    // ===== PARKS & NATURE =====
    {
        id: 1,
        name: "Gardens by the Bay",
        category: "parks",
        emoji: "🌳",
        description: "Iconic gardens with Supertrees, light shows, and climate zones. Must-see for newcomers!",
        details: {
            address: "18 Marina Gardens Drive",
            mrt: "Bayfront MRT (Circle Line)",
            cost: "Free to walk around | Conservatories: $28-34",
            time: "1-3 hours",
            highlights: [
                "Iconic Supertree Grove with nightly light shows",
                "Climate zones: Flower Dome and Cloud Forest",
                "Beautiful photo spots perfect for Instagram",
                "Evening shows at 7:45 PM and 8:45 PM (free)"
            ],
            studentTip: "Visit on weekday evenings for the free Supertree light show without paying conservatory fees.",
            budget: "💚 Budget-friendly (free option)"
        }
    },
    {
        id: 2,
        name: "MacRitchie Reservoir Park",
        category: "parks",
        emoji: "🌲",
        description: "Nature trails, hiking, and wildlife. Perfect for a peaceful morning or weekend hike.",
        details: {
            address: "MacRitchie Road (near city)",
            mrt: "Caldecott MRT (Downtown Line) + bus",
            cost: "Free",
            time: "2-4 hours",
            highlights: [
                "TreeWalk canopy walk – unique elevated experience",
                "Scenic reservoir trails with wildlife sightings",
                "Clean, maintained facilities",
                "Peaceful escape from city hustle"
            ],
            studentTip: "Bring insect repellent and plenty of water. Go early morning to avoid crowds and heat.",
            budget: "💚 Free"
        }
    },
    {
        id: 3,
        name: "East Coast Park",
        category: "parks",
        emoji: "🏖️",
        description: "Long stretch of beach with cycling, picnicking, water sports, and food courts.",
        details: {
            address: "East Coast Parkway",
            mrt: "Bedok MRT + bus/cycle",
            cost: "Free | Rentals: $5-15/hour",
            time: "2-5 hours",
            highlights: [
                "15 km of sandy beaches and coastal scenery",
                "Bike rentals available at multiple points",
                "Seafood restaurants and local food stalls",
                "Sunset spots perfect for photos and relaxation"
            ],
            studentTip: "Rent a bike and cycle along the coast – cheapest way to enjoy the park. Bring sunscreen!",
            budget: "💚 Budget-friendly (cycling & picnicking)"
        }
    },
    {
        id: 4,
        name: "Singapore Botanic Gardens",
        category: "parks",
        emoji: "🌹",
        description: "Beautiful UNESCO World Heritage gardens. Free entry, perfect for calm, romantic walks.",
        details: {
            address: "1 Cluny Road",
            mrt: "Orchard MRT (Thomson Line)",
            cost: "Free",
            time: "1-3 hours",
            highlights: [
                "UNESCO World Heritage Site",
                "National Orchid Garden (entry fee: $14)",
                "Palm Valley, Japanese Garden, Chinese Garden",
                "Excellent for photography and relaxation"
            ],
            studentTip: "Come on free days to skip the Orchid Garden fee. Perfect date spot or peaceful study break.",
            budget: "💚 Free (main gardens)"
        }
    },

    // ===== SHOPPING MALLS =====
    {
        id: 5,
        name: "Orchard Road Shopping District",
        category: "shopping",
        emoji: "🛍️",
        description: "Singapore's premier shopping street with malls, boutiques, and food. Great for window shopping!",
        details: {
            address: "Orchard Road (multiple malls)",
            mrt: "Orchard MRT (Thomson & Downtown Lines)",
            cost: "Free to browse | Shopping varies",
            time: "2-4 hours",
            highlights: [
                "Malls: Orchard Central, ION Orchard, Paragon",
                "Mix of luxury and affordable brands",
                "Food courts and restaurants",
                "Regular sales and student discounts"
            ],
            studentTip: "Browse Orchard Central for student-friendly brands. Grab lunch at food courts (cheaper than restaurants).",
            budget: "💜 Varies (great for budget shopping during sales)"
        }
    },
    {
        id: 6,
        name: "Bugis Street & Bugis Junction",
        category: "shopping",
        emoji: "👕",
        description: "Affordable fashion street market and modern shopping mall. Student fashion heaven!",
        details: {
            address: "Bugis Street / New Bugis Street / Bugis Junction",
            mrt: "Bugis MRT (East-West Line)",
            cost: "Free to browse | Clothing: $5-30",
            time: "1-3 hours",
            highlights: [
                "Street stalls with cheap clothes and accessories",
                "Bugis Junction mall with affordable brands",
                "Nearby food courts and hawker centers",
                "Cool street culture and atmosphere"
            ],
            studentTip: "Negotiate prices at street stalls. Visit on weekdays for less crowded shopping.",
            budget: "💚 Very budget-friendly (students' favorite)"
        }
    },
    {
        id: 7,
        name: "Clementi Shopping Centre",
        category: "shopping",
        emoji: "🏬",
        description: "Student-favorite mall near universities with affordable brands and food options.",
        details: {
            address: "3155 Commonwealth Avenue West",
            mrt: "Clementi MRT (East-West Line)",
            cost: "Free to browse | Shopping varies",
            time: "1-3 hours",
            highlights: [
                "Affordable brands popular with students",
                "Spacious, less crowded than Orchard",
                "Great food courts with hawker options",
                "Close to universities and student housing"
            ],
            studentTip: "Great alternative to crowded Orchard Road. Check out basement level for bargains.",
            budget: "💚 Budget-friendly for students"
        }
    },

    // ===== ENTERTAINMENT & ATTRACTIONS =====
    {
        id: 8,
        name: "National Museum of Singapore",
        category: "entertainment",
        emoji: "🏛️",
        description: "Singapore's history, culture, and art. Educational and interesting for newcomers.",
        details: {
            address: "93 Stamford Road",
            mrt: "Bras Basah MRT (Downtown Line) / City Hall MRT",
            cost: "$15 | Student discounts available",
            time: "1-3 hours",
            highlights: [
                "History of Singapore from founding to present",
                "Interactive and engaging exhibits",
                "Modern, well-maintained facilities",
                "Cafe and rest areas inside"
            ],
            studentTip: "Ask at the counter about student discounts. Best visited mid-week to avoid crowds.",
            budget: "💜 Moderate (student rates available)"
        }
    },
    {
        id: 9,
        name: "ArtScience Museum (Marina Bay)",
        category: "entertainment",
        emoji: "🎨",
        Description: "Unique art exhibits and installations. Perfect for creative students.",
        details: {
            address: "6 Bayfront Avenue (Marina Bay Sands)",
            mrt: "Bayfront MRT (Circle Line)",
            cost: "$17-24 | Student discounts",
            time: "1-2 hours",
            highlights: [
                "Unique lotus-shaped building",
                "Cutting-edge art and science exhibits",
                "Rotating international exhibitions",
                "Photo opportunities with Marina Bay views"
            ],
            studentTip: "Visit during special student nights for discounted entry. Check their social media for promotions.",
            budget: "💜 Moderate (discounts for students)"
        }
    },
    {
        id: 10,
        name: "Marina Bay Cinemas & AMK Hub",
        category: "entertainment",
        emoji: "🎬",
        description: "Catch the latest movies. Find cinemas near most MRT stations.",
        details: {
            address: "Multiple locations (Marina Bay, Bugis, Jurong East)",
            mrt: "Bayfront, Bugis, Jurong East MRT",
            cost: "$9-15 per ticket",
            time: "2-3 hours",
            highlights: [
                "Latest Hollywood & Asian releases",
                "Online booking available",
                "Affordable matinee shows",
                "Popcorn deals and student pricing"
            ],
            studentTip: "Watch matinee shows (before 5 PM) for cheaper tickets. Bring student ID for discounts.",
            budget: "💜 Moderate (matinee cheaper)"
        }
    },
    {
        id: 11,
        name: "Sentosa Island",
        category: "entertainment",
        emoji: "🎡",
        description: "Singapore's premier island resort with attractions, beaches, and entertainment.",
        details: {
            address: "Sentosa Island",
            mrt: "Harbour Front MRT (Circle Line) + monorail/ferry",
            cost: "Free entry | Attractions: $15-40",
            time: "Half to full day",
            highlights: [
                "Universal Studios Singapore (major attraction)",
                "Beautiful Sentosa beaches",
                "Fort Siloso, Butterfly Park, aquarium",
                "Island-wide bike rentals"
            ],
            studentTip: "Visit attractions you haven't done. The beaches are free and great for sunset. Check Groupon for discounts.",
            budget: "💜 Moderate to splurge-worthy (pick 1-2 attractions)"
        }
    },
    {
        id: 12,
        name: "Singapore Zoo",
        category: "entertainment",
        emoji: "🦁",
        description: "One of Asia's best zoos with diverse wildlife. Great for animal lovers.",
        details: {
            address: "80 Mandai Lake Road",
            mrt: "Ang Mo Kio MRT + bus 138",
            cost: "$29-35 | Student rates available",
            time: "3-5 hours",
            highlights: [
                "700+ animal species",
                "Open concept without heavy cages",
                "Tram rides available",
                "Beautiful Mandai Lake setting"
            ],
            studentTip: "Get a student ID discount. Visit during cooler hours (morning or late afternoon).",
            budget: "💜 Moderate (student discounts help)"
        }
    },

    // ===== FREE & BUDGET ACTIVITIES =====
    {
        id: 13,
        name: "Merlion Park",
        category: "free-budget",
        emoji: "🦁",
        description: "Singapore's iconic symbol. Free to visit and perfect for photo memories!",
        details: {
            address: "1 Fullerton Road",
            mrt: "Raffles Place MRT (East-West & North-South Lines)",
            cost: "Free",
            time: "30 minutes - 1 hour",
            highlights: [
                "Iconic Merlion statue",
                "River views and waterfront promenade",
                "Great photo spot for memories",
                "Free and quick to visit"
            ],
            studentTip: "Go early morning (7-8 AM) to avoid crowds. Perfect quick stop between other activities.",
            budget: "💚 Free"
        }
    },
    {
        id: 14,
        name: "Singapore River Walk",
        category: "free-budget",
        emoji: "🚶",
        description: "Scenic riverside walk through Clarke Quay and Boat Quay. Food and drinks along the way.",
        details: {
            address: "Singapore River (Clarke Quay to Boat Quay)",
            mrt: "Clarke Quay MRT (East-West Line)",
            cost: "Free to walk | Food varies",
            time: "1-2 hours",
            highlights: [
                "Beautiful riverside scenery",
                "Historic architecture and riverside bars/cafes",
                "Street performers and cultural atmosphere",
                "Evening light reflections (beautiful for photos)"
            ],
            studentTip: "Walk for free, then grab cheap drinks at hawker centers nearby. Best at sunset.",
            budget: "💚 Free (food costs separate)"
        }
    },
    {
        id: 15,
        name: "Chinatown Heritage",
        category: "free-budget",
        emoji: "🏮",
        description: "Explore historic Chinese culture, temples, and street food. Free and authentic!",
        details: {
            address: "Chinatown (South Bridge Road area)",
            mrt: "Chinatown MRT (NE & DT Lines) / Outram Park",
            cost: "Free | Food: $2-6",
            time: "2-3 hours",
            highlights: [
                "Historic temples and architecture",
                "Street food and hawker stalls",
                "Authentic cultural atmosphere",
                "Affordable shopping on Pagoda Street"
            ],
            studentTip: "Try the street food – cheap and delicious. Visit temples respectfully. Budget $5-10 for food.",
            budget: "💚 Very budget-friendly"
        }
    },
    {
        id: 16,
        name: "Pulau Ubin Bike Island",
        category: "free-budget",
        emoji: "🚴",
        description: "Rustic island with nature trails and cycling. A hidden gem for budget explorers!",
        details: {
            address: "Pulau Ubin (off Changi Point)",
            mrt: "Tampines MRT + bus/drive to Changi Point Ferry Terminal",
            cost: "Ferry: $2-3 | Bike rental: $5-10",
            time: "Half day or full day",
            highlights: [
                "Rural island atmosphere within Singapore",
                "Scenic cycling and nature trails",
                "Chek Jawa beach and wetlands",
                "Very affordable (locals' favorite)"
            ],
            studentTip: "Perfect weekend escape from city. Bring water and snacks (limited shops). Most budget-friendly adventure.",
            budget: "💚 Very budget-friendly ($15-25 total)"
        }
    },

    // ===== ARCADES & GAMING =====
    {
        id: 17,
        name: "Timezone Arcade (Multiple Locations)",
        category: "entertainment",
        emoji: "🎮",
        description: "Arcades with games, bowling, and entertainment. Social hangout spot for students.",
        details: {
            address: "Multiple locations: Bugis, Orchard, Changi",
            mrt: "Bugis, Orchard, Changi MRT stations",
            cost: "Games: 50¢-5 SGD | Bowling: $5-10 per game",
            time: "1-3 hours",
            highlights: [
                "100+ arcade games",
                "Bowling lanes",
                "Claw machines and tickets",
                "Group-friendly and fun atmosphere"
            ],
            studentTip: "Come with friends for bowling group rates. Bring cash (coins needed for games).",
            budget: "💜 Moderate (set a budget)"
        }
    }
];

// Export for use in JavaScript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = leisureData;
}
