# TravelMate Content Guidelines
## Singapore Leisure & Entertainment Module

---

## 📋 Overview
This guide ensures all content is accurate, student-friendly, and aligned with TravelMate's mission to help foreign exchange students adapt to Singapore.

---

## ✍️ Writing Style & Tone

### Target Audience
- **Age**: 18-25 year-old students
- **Context**: New to Singapore, budget-conscious
- **Tone**: Friendly, casual, encouraging, helpful (not corporate)

### Voice Examples

❌ **Formal/Corporate** (DON'T USE):
> "The Gardens by the Bay constitute an exemplary horticultural establishment..."

✅ **Student-Friendly** (USE THIS):
> "Gardens by the Bay is iconic and a must-visit! Free light shows nightly at 7:45 PM and 8:45 PM."

### Key Principles
- **Be personal**: Use "you," "your," "we"
- **Be practical**: Focus on costs, time, and accessibility
- **Be encouraging**: Make activities sound fun and doable
- **Be honest**: No exaggeration or false info
- **Be concise**: Short sentences, easy to scan

---

## 💰 Budget Categories & Labels

Use EXACTLY these budget indicators:

### 💚 Budget-Friendly
- **Cost**: Free to $10 SGD per person
- **Use for**: Free attractions, hawker food, Pulau Ubin, etc.
- **Example**: "💚 Very budget-friendly ($15-25 total)"

### 💜 Moderate
- **Cost**: $10-30 SGD per person
- **Use for**: Museums, cinemas, zoos with student discounts
- **Example**: "💜 Moderate (student discounts help)"

### 💎 Splurge-Worthy (Optional)
- **Cost**: $30+ SGD per person
- **Use for**: Premium attractions, full-day experiences
- **Example**: "💎 Splurge for special occasions (Universal Studios)"

---

## 📍 Location & Accessibility Rules

### MRT Information
**ALWAYS include**:
- Nearest MRT station
- MRT line color (Circle, East-West, etc.)
- Connection info if needed (+ bus)

**Format**:
> "Bayfront MRT (Circle Line)"  
> "Tamines MRT + bus 138"

### Cost Information
**ALWAYS include**:
- Free or exact entry fee
- Discounts (student, senior, group)
- Extra costs (parking, rentals, food)

**Format**:
> "Free to walk around | Conservatories: $28-34"

### Time Estimates
**Realistic durations**:
> "1-3 hours" (flexible range)  
> "2-4 hours" (full morning/afternoon)  
> "3-5 hours" (half day)  
> "Full day" (6+ hours)

---

## 🎮 Attraction Data Format

Every attraction MUST have:

```javascript
{
    id: number,                    // Unique ID
    name: "Attraction Name",       // Full name
    category: "parks",             // parks | shopping | entertainment | free-budget
    emoji: "🌳",                   // Single relevant emoji
    description: "Short 1-2 sentence hook", // Call to action
    details: {
        address: "Full address",   // Google Maps searchable
        mrt: "Station (Line)",     // Nearest MRT
        cost: "Free | Price: $X",  // All costs upfront
        time: "X-Y hours",         // Duration range
        highlights: [              // 3-5 key features
            "Feature 1",
            "Feature 2"
        ],
        studentTip: "Budget tip or experience advice", // Actionable insight
        budget: "💚/💜/💎 Description"                 // Budget category
    }
}
```

---

## 🏷️ Category Definitions

### Parks & Nature 🌳
- Gardens, parks, trails, reserves
- Outdoor activities, nature walks
- Beach, water activities
- Free or low-cost outdoor spaces

### Shopping 🛍️
- Shopping malls & districts
- Fashion, accessories, retail
- Hawker markets, street shopping
- Commercial areas

### Entertainment 🎭
- Museums, galleries, art
- Movies, arcades, attractions
- Theme parks, tourist sites
- Cultural institutions

### Free & Budget 💚
- Zero-cost attractions
- Heritage walks, cultural sites
- Scenic viewpoints
- Activities under $10

---

## 📸 Emoji Usage

**Attraction Cards**: Use ONE emoji that best represents the place
- 🌳 Parks, gardens, nature
- 🛍️ Shopping, malls
- 🎬 Cinemas, movies
- 🍜 Food, hawker, dining
- 🏖️ Beaches, water
- 🎡 Attractions, theme parks
- 🦁 Animals, zoos
- 🏛️ Museums, heritage
- 🎮 Gaming, arcades

**Student Tips**: Optional emoji at start
- 💡 Tip/advice
- 💰 Money-saving tip
- ⏰ Time-saving tip
- 🚇 Transport tip

---

## ✅ Accuracy Standards

### Before Adding Any Attraction:
1. **Verify current status** (Is it still open?)
2. **Check pricing** (No outdated info)
3. **Confirm MRT access** (Latest, not old routes)
4. **Realistic time** (Personal experience or reliable source)
5. **Student relevance** (Is this actually good for exchange students?)

### Information Sources
✅ **Trusted**:
- Official Singapore tourism website
- Attraction official websites
- Recent Google reviews (2025 or later)
- Personal verification
- Republic Polytechnic community

❌ **Avoid**:
- Outdated blogs (pre-2020)
- Unverified tourist sites
- Competitor reviews
- Personal opinions as facts

---

## 🎯 Student Tip Guidelines

Every attraction MUST have a practical, actionable "Student Tip":

### Good Student Tips ✅
- Time-saving strategies: "Go early morning to avoid crowds"
- Money-saving hacks: "Visit weekday evenings for free light shows"
- Insider knowledge: "Bring insect repellent for MacRitchie"
- Logistics advice: "Bring cash – limited shops on the island"
- Realistic expectations: "Matinee movies are $3-4 cheaper"

### Bad Student Tips ❌
- Too vague: "It's a nice place to visit"
- Unverifiable: "Everyone says this is the best..."
- Irrelevant: Tips for families, not students
- Outdated: "Student prices were $5 in 2020..."

---

## 🚫 Content to AVOID

### Avoid These Topics:
- Nightlife/clubs/bars (outside scope)
- Expensive fine dining (not student-appropriate)
- Controversial locations
- Outdated or closed attractions
- Unverified prices or details
- Discriminatory or exclusionary language

### Avoid This Language:
- "Only," "never," "worst" (too absolute)
- "Amazing," "unbelievable" (overexaggeration)
- "Must-do" (too prescriptive)
- Gendered assumptions

### Better Language:
- "Popular with students..."
- "Great option if you like..."
- "Offers a good experience..."
- "Worth trying if you have time..."

---

## 🌐 Singapore-Specific Tips

### Currency
Always use: **$ (SGD)** or "$X"  
❌ Don't use: "Dollars" alone (confusing)

### Measurements
- Use **km** for distances
- Use **minutes** for walking times
- MRT travel times are actual (not estimated)

### Weather Awareness
Singapore is **tropical** year-round:
- Tip: "Bring sunscreen!" (UV is strong)
- Tip: "Go early morning or evening" (too hot at noon)
- Mention indoor options for rainy days

### MRT Knowledge
- Singapore MRT is **efficient and safe**
- Mention line colors and stations
- Add wait time if significant (usually 2-5 min)
- Highlight accessibility features

---

## 📝 Checklist for New Content

Before publishing ANY attraction content:

- [ ] Name and location are exact
- [ ] Address is current and searchable
- [ ] MRT station is correct + line color
- [ ] Entry fee is current (verified within 3 months)
- [ ] All times are realistic (personal experience or recent reviews)
- [ ] Category is one of four: parks, shopping, entertainment, free-budget
- [ ] Emoji is relevant and single
- [ ] Description is 1-2 sentences, student-focused
- [ ] Highlights are 3-5 key features (not just "great place")
- [ ] Student tip is practical and actionable
- [ ] Budget label is accurate (💚/💜/💎)
- [ ] No false or exaggerated claims
- [ ] Language is student-friendly (not corporate)
- [ ] Mobile viewing is clear and readable

---

## 🔄 Updating Content

### Quarterly Updates Required:
- Prices (check official websites)
- Operating hours
- Any closures or renovations
- New attractions to add
- Student feedback integration

### Format for Updates:
```
[Date Updated]: [What Changed]
Example: [Jan 2026]: Updated Gardens by the Bay light show times to 7:45 PM & 8:45 PM
```

---

## 💬 Chat Assistant Guidelines

### Keyword Matching
- Add keywords that students actually use
- Multiple variations for same intent
- Keep responses under 2 sentences initially
- Encourage follow-up questions

### Response Structure
```
[Emoji/Greeting] [Recommendation] [Call to action/question]
Example: "Looking for nature? Try **Gardens by the Bay** or **MacRitchie**. Which interests you?"
```

### Markdown Support
- **Bold with double asterisks** `**text**`
- Line breaks naturally
- Keep formatting simple

---

## 📊 Example: Perfect Attraction Entry

```javascript
{
    id: 4,
    name: "Singapore Botanic Gardens",
    category: "parks",
    emoji: "🌹",
    description: "Beautiful UNESCO World Heritage gardens. Free entry, perfect for calm, romantic walks.",
    details: {
        address: "1 Cluny Road",
        mrt: "Orchard MRT (Thomson Line)",
        cost: "Free (main gardens) | National Orchid Garden: $14",
        time: "1-3 hours",
        highlights: [
            "UNESCO World Heritage Site",
            "National Orchid Garden with 1,000+ species",
            "Palm Valley, Japanese & Chinese Gardens",
            "Excellent for photography and relaxation"
        ],
        studentTip: "Come on free days to skip the Orchid Garden fee. Perfect date spot or peaceful study break.",
        budget: "💚 Free (main gardens)"
    }
}
```

**Why it's good**:
- ✅ Specific address (Google Maps ready)
- ✅ Exact MRT + line
- ✅ Clear pricing (free + optional paid area)
- ✅ Realistic time estimate
- ✅ Highlights are specific, not generic
- ✅ Student tip is actionable (free days exist)
- ✅ Budget is accurate

---

## 🎯 Final Reminders

1. **Always write for 18-25 year-old exchange students**
2. **Verify everything – no hallucinated facts**
3. **Singapore is tropical – mention sun/weather**
4. **MRT is THE transport** – always include
5. **Budget matters to students** – be realistic
6. **Be helpful, not promotional**
7. **Keep it simple and scannable**
8. **Test on mobile devices**

---

## 📞 Questions or Updates?

If you find outdated info, contact:
- **Jeron Tay** - Leisure & Entertainment Lead
- Review attraction websites before major updates
- Check Singapore tourism official resources

---

**Last Updated**: January 6, 2026  
**Version**: 1.0 - MVP Content Guidelines
