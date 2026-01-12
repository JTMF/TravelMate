# TravelMate - Singapore Exchange Student Guide

## 📌 Project Overview
**TravelMate** is an AI-powered web platform designed to help foreign exchange students (age 18–25) adapt to life in Singapore. The platform provides personalized, real-time recommendations for transport, food, leisure, and daily life.

**Module Focus**: C240 FA  
**Target Users**: Foreign exchange students at Republic Polytechnic, new to Singapore  
**My Role**: **Jeron Tay** - Singapore Leisure & Entertainment Lead

---

## 🎯 Project Goals
1. **Reduce student stress** by providing reliable, localized information
2. **Save time** with curated recommendations
3. **Improve student experience** through accessible, affordable suggestions

---

## 🏗️ Project Structure

```
TravelMate/
├── index.html                 # Main page
├── css/
│   └── styles.css            # All styling (responsive design)
├── js/
│   ├── data.js              # Leisure data & attractions
│   ├── leisure.js           # Leisure module (filtering, modals)
│   ├── chat.js              # AI chat assistant
│   └── main.js              # Main navigation & utilities
├── README.md                # This file
└── CONTENT_GUIDE.md         # Detailed content guidelines
```

---

## 🎨 Design System

### Color Scheme (Must Follow)
- **Red**: `#B40000` - CTAs, highlights, primary actions
- **White**: `#FFFFFF` - Backgrounds
- **Green**: `#486220` - Secondary accents, nature-related sections
- **Dark**: `#333333` - Text
- **Light**: `#666666` - Secondary text

### Typography
- **Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive**: Mobile-first design
- **Accessibility**: Proper contrast ratios, semantic HTML

---

## 🎮 Features Implemented

### 1. **Leisure & Entertainment Section** ✅
- 17 curated attractions for foreign exchange students
- Categories: Parks, Shopping, Entertainment, Free & Budget
- Filter system for easy browsing
- Detailed modal with:
  - Location & MRT access
  - Cost & time estimates
  - Highlights & activities
  - Student-specific tips
  - Budget indicators

### 2. **Dynamic Content**
- Interactive leisure cards with emojis
- Click-to-learn-more modals
- Responsive grid layout
- Filter buttons for quick navigation

### 3. **AI Chat Assistant** 💬
- Keyword-based intelligent responses
- Leisure & entertainment recommendations
- Budget-conscious suggestions
- Quick access via navigation bar

### 4. **Responsive Design** 📱
- Mobile-first approach
- Works on phones, tablets, desktops
- Touch-friendly buttons
- Optimized navigation

### 5. **Smooth Navigation** 🚀
- Sticky navigation bar
- Smooth scroll behavior
- Active link highlighting
- Clear section separation

---

## 📍 Featured Attractions

### Parks & Nature 🌳
- **Gardens by the Bay** - Iconic, must-see ($0-34)
- **MacRitchie Reservoir** - Hiking & nature (Free)
- **East Coast Park** - Beach, cycling ($5-15 rentals)
- **Singapore Botanic Gardens** - UNESCO heritage (Free)

### Shopping 🛍️
- **Orchard Road** - Premium shopping district
- **Bugis Street** - Student fashion ($5-30)
- **Clementi Shopping Centre** - Student favorite

### Entertainment 🎭
- **National Museum** - History ($15, student discounts)
- **ArtScience Museum** - Contemporary art ($17-24)
- **Marina Bay Cinemas** - Movies ($9-15, matinee discounts)
- **Sentosa Island** - Attractions & beaches ($15-40)
- **Singapore Zoo** - Wildlife ($29-35, student rates)

### Arcades & Gaming 🎮
- **Timezone** - Games & bowling ($0.50-10)

### Free & Budget 💚
- **Merlion Park** - Iconic (Free)
- **Singapore River Walk** - Scenic (Free)
- **Chinatown Heritage** - Culture & cheap food (Free + $2-6 food)
- **Pulau Ubin** - Island cycling ($20 total)

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Responsive**: CSS Grid, Flexbox, Media Queries
- **AI Integration**: Keyword-based chat (ready for n8n/Flowise/Botpress)
- **Architecture**: Modular JavaScript (easy to integrate with APIs)

---

## 💻 How to Use

### 1. **View the Website**
```bash
# Simply open index.html in a web browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

### 2. **Navigate & Explore**
- Click menu items to jump to sections
- Filter leisure attractions by category
- Click cards to view detailed information
- Use the AI chat for quick recommendations

### 3. **Responsive Testing**
- Test on mobile: Toggle device toolbar (F12 in Chrome)
- Breakpoints: 480px, 768px, 1200px+

---

## 🔧 Customization Guide

### Adding New Attractions
Edit `js/data.js`:
```javascript
{
    id: 18,
    name: "New Attraction",
    category: "parks",  // or: shopping, entertainment, free-budget
    emoji: "🎡",
    description: "Short description",
    details: {
        address: "Address here",
        mrt: "Nearest MRT",
        cost: "Entry fee",
        time: "Duration",
        highlights: ["Highlight 1", "Highlight 2"],
        studentTip: "Budget tip for students",
        budget: "💚 Budget-friendly" // or 💜 Moderate or 💎 Splurge
    }
}
```

### Modifying Colors
Edit `:root` variables in `css/styles.css`:
```css
:root {
    --primary-red: #B40000;
    --white: #FFFFFF;
    --secondary-green: #486220;
}
```

### Updating Chat Keywords
Edit `js/chat.js` - Add new keyword categories:
```javascript
yourTopic: {
    keywords: ['word1', 'word2'],
    response: "Your response here"
}
```

---

## 📱 Mobile-First Responsive Breakpoints

- **480px and below**: Mobile devices
- **480px - 768px**: Tablets
- **768px+**: Desktops

All layouts adjust automatically!

---

## 🚀 Next Steps (Integrations)

### Ready for:
1. **n8n Automation** - Automated booking/reservation flows
2. **Flowise AI Workflows** - Advanced conversational AI
3. **Botpress** - Full chatbot integration
4. **Backend API** - Database connectivity for dynamic content
5. **User Accounts** - Personalized recommendations & saved favorites

### Future Enhancements:
- User authentication & profiles
- Personalized recommendation engine
- Real-time availability updates
- Booking integration
- Social features (share recommendations, reviews)
- Multi-language support (Mandarin, Malay, Tamil)

---

## 📖 Content Guidelines

For detailed content creation rules, see `CONTENT_GUIDE.md`:
- How to write student-friendly content
- Tone & voice
- Emoji usage
- Budget categories
- Accuracy standards

---

## ✅ Testing Checklist

- [ ] All links work smoothly
- [ ] Leisure cards render correctly
- [ ] Modals open/close properly
- [ ] Chat responds to keywords
- [ ] Mobile layout is responsive
- [ ] Colors match brand guidelines (#B40000, #486220, #FFFFFF)
- [ ] All MRT information is current
- [ ] Prices are realistic and current

---

## 👨‍💻 Author
**Jeron Tay** - Singapore Leisure & Entertainment Lead  
Module: C240 FA | Republic Polytechnic

---

## 📧 Contact & Support
For questions, content updates, or improvements:
- Review the CONTENT_GUIDE.md
- Check current Singapore tourist information
- Verify all attraction details before major updates

---

## 📄 License
Project for Republic Polytechnic (C240 FA) - Educational Use

---

**Last Updated**: January 6, 2026  
**Status**: ✅ MVP Complete - Ready for Integration with AI Tools
