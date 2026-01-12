# TravelMate Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Open the Website
```bash
# Option A: Direct File Open
1. Open index.html in your web browser (Chrome, Firefox, Safari, Edge)

# Option B: Local Server (Recommended)
cd c:\Users\23014056\Documents\TravelMate
python -m http.server 8000
# Visit: http://localhost:8000
```

### Step 2: Explore the Features

#### 🎮 Leisure & Entertainment (Main Feature)
1. Click **"Leisure"** in the navigation bar
2. Browse the 17 attractions shown as colorful cards
3. Use **filter buttons** to sort by:
   - All attractions
   - Parks & Nature 🌳
   - Shopping 🛍️
   - Entertainment 🎭
   - Free & Budget 💚
4. Click **"Learn More"** on any card to see details

#### 💬 AI Chat Assistant
1. Click **"AI Chat"** in the navigation
2. Ask questions like:
   - "Where's a good park?"
   - "What's a cheap place to shop?"
   - "Any free activities?"
   - "Where can I go to the movies?"
3. Get instant recommendations

#### 📍 Other Sections
- **Home**: Overview and CTA
- **Transport**: Coming soon
- **Food & Dining**: Coming soon
- **Daily Life**: Coming soon

---

## 📱 Test on Mobile

1. Open DevTools: Press **F12**
2. Click device icon (top-left of DevTools)
3. Select phone size (iPhone 12, Pixel 5, etc.)
4. Refresh page to see mobile layout

**Mobile Experience**:
- Navigation adapts to mobile
- Cards stack vertically
- Touch-friendly buttons
- Full functionality preserved

---

## 🎨 Customizing the Site

### Change Brand Colors
Edit `css/styles.css` line 13-20:
```css
:root {
    --primary-red: #B40000;      /* Change this */
    --secondary-green: #486220;  /* Or this */
}
```

### Add New Attraction
Edit `js/data.js` and add:
```javascript
{
    id: 18,
    name: "Your Attraction",
    category: "parks",  // parks, shopping, entertainment, or free-budget
    emoji: "🎡",
    description: "What students should know in 1-2 sentences",
    details: {
        address: "Full address",
        mrt: "Station Name (Line Name)",
        cost: "Price or Free",
        time: "Duration estimate",
        highlights: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ],
        studentTip: "Practical advice for students",
        budget: "💚 Budget-friendly"  // or 💜 Moderate
    }
}
```

### Update Chat Responses
Edit `js/chat.js` around line 8-40 to add keywords:
```javascript
yourTopic: {
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    response: "Your response here with **bold text** if needed"
}
```

---

## 📂 File Structure Explained

```
TravelMate/
├── index.html              ← Main page (your homepage)
├── css/
│   └── styles.css         ← All styling & colors
├── js/
│   ├── data.js            ← All attraction data lives here
│   ├── leisure.js         ← Filters, modals, cards logic
│   ├── chat.js            ← AI chat keyword responses
│   └── main.js            ← Navigation & page behavior
├── README.md              ← Full project documentation
├── CONTENT_GUIDE.md       ← How to write content
└── .env.example           ← Config template
```

**Key Files to Edit**:
1. **Add attractions**: Edit `js/data.js`
2. **Change colors**: Edit `css/styles.css`
3. **Update chat**: Edit `js/chat.js`
4. **Fix content**: Edit `js/data.js` (attractions)

---

## 🎯 Attraction Card Anatomy

Every card has these parts:

```
┌─────────────────────────────────┐
│        🌳 (emoji)               │  ← Visual
├─────────────────────────────────┤
│ Title                           │  ← Name
│ 🌳 Parks & Nature              │  ← Category badge
│                                 │
│ Short description text...       │  ← Hook
│                                 │
│ ⏱️ Duration: 1-3 hours          │  ← Quick info
│ 💰 Cost: Free | $28-34         │
│                                 │
│ 💚 Budget-friendly             │  ← Budget indicator
│                                 │
│ [Learn More]                    │  ← Click for details
└─────────────────────────────────┘
```

**Modal (Click "Learn More")**:
- Full address & MRT
- Complete highlights
- Student-specific tips
- Cost & time details

---

## 💡 Tips for Success

### For Content Creators
1. **Always verify prices & times** (Singapore info changes)
2. **Use student-friendly language** (casual, helpful tone)
3. **Include practical tips** (not just generic descriptions)
4. **Check MRT lines** (are they current?)
5. **Test on mobile** (Is text readable? Are buttons clickable?)

### For Developers
1. **JS is modular**: Each file handles one thing (data, leisure, chat)
2. **CSS uses CSS variables**: Easy color changes in `:root`
3. **No dependencies needed**: Just HTML, CSS, vanilla JS
4. **Mobile-responsive**: Flexbox & Grid for layouts
5. **Easy to extend**: Add API calls, databases, auth later

---

## 🔧 Troubleshooting

### Chat Not Responding?
- Open DevTools (F12) → Console
- Check for JavaScript errors
- Verify keywords in `js/chat.js`

### Attraction Cards Not Showing?
- Check browser console for errors
- Verify `data.js` has valid JSON
- Ensure all fields are filled

### Mobile Layout Broken?
- Clear browser cache (Ctrl+Shift+Del)
- Test in incognito mode
- Check CSS media queries in `styles.css`

### Colors Not Matching Brand?
- Edit `:root` in `css/styles.css`
- Make sure hex codes are correct (#B40000, #486220)
- Clear cache and refresh

---

## 📊 What's Next?

### Current Status ✅
- MVP complete with 17 attractions
- Full leisure & entertainment section
- AI chat assistant with keywords
- Mobile-responsive design
- Brand colors implemented

### Ready for Integration
1. **Backend API** - Replace hardcoded data with database
2. **User Auth** - Add login/signup with JWT
3. **Advanced AI** - Connect to n8n, Flowise, or Botpress
4. **Real-time Updates** - Push prices & availability
5. **Bookings** - Link to ticketing systems
6. **Reviews** - Allow student reviews

### How to Expand
- Add Transport section (similar structure)
- Add Food & Dining section
- Add Daily Life essentials
- Integrate real APIs
- Add user profiles

---

## 📞 Quick Reference

**Navigation Colors**:
- Red: #B40000 (primary actions)
- Green: #486220 (nature sections)
- White: #FFFFFF (backgrounds)

**Attraction Categories**:
- 🌳 Parks & Nature
- 🛍️ Shopping
- 🎭 Entertainment
- 💚 Free & Budget

**Budget Indicators**:
- 💚 Budget-friendly (Free-$10)
- 💜 Moderate ($10-30)
- 💎 Splurge ($30+)

---

## 🎓 Learning More

- **HTML/CSS**: Check `index.html` and `css/styles.css`
- **JavaScript**: Read comments in `js/*.js` files
- **Content**: See `CONTENT_GUIDE.md` for writing rules
- **Project**: See `README.md` for full documentation

---

## ✨ You're Ready!

Start exploring, testing, and customizing TravelMate. The site is built to be:
- 🎯 Student-friendly
- 📱 Mobile-first
- 🔧 Easy to customize
- 🚀 Ready to scale

**Happy coding! 🎉**

---

**Last Updated**: January 6, 2026  
**Version**: 1.0 MVP
