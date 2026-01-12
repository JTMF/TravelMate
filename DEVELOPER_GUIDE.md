# TravelMate - Developer Quick Reference Guide

## Project Structure

```
TravelMate/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling (cleaned & optimized)
├── js/
│   ├── botpress-config.js # Botpress initialization (MAIN)
│   ├── data.js            # Leisure data
│   ├── leisure.js         # Leisure module
│   ├── main.js            # Navigation & animations
│   └── [legacy files]     # Old AI files (not used)
└── [Documentation files]
```

---

## How to Use Each File

### 1. index.html
**Purpose:** Main page structure and template

**Key Sections:**
```html
<!-- Floating Chat Button -->
<button onclick="toggleChatWidget()" class="chat-icon-btn">💬</button>

<!-- Navigation -->
<nav class="navbar">...</nav>

<!-- Main Content Sections -->
<section id="home">...</section>      <!-- Hero -->
<section id="leisure">...</section>   <!-- Leisure & Entertainment -->
<section id="transport">...</section> <!-- Transport (placeholder)-->
<section id="food">...</section>      <!-- Food (placeholder) -->
<section id="daily-life">...</section><!-- Daily Life (placeholder) -->
<section id="chat">...</section>      <!-- Chat section -->

<!-- Scripts - MUST LOAD IN THIS ORDER -->
<script src="js/botpress-config.js"></script>
<script src="js/data.js"></script>
<script src="js/leisure.js"></script>
<script src="js/main.js"></script>
```

**To Modify:**
- Edit section IDs if changing navigation
- Keep script loading order exact
- Don't add inline scripts (use external files)

---

### 2. css/styles.css
**Purpose:** All styling for the website

**CSS Variables (at top):**
```css
:root {
    --primary-red: #B40000;
    --white: #FFFFFF;
    --secondary-green: #486220;
    --text-dark: #333333;
    --text-light: #666666;
    --bg-light: #f9f9f9;
    --border-color: #e0e0e0;
}
```

**To Change Colors:**
- Edit CSS variables at top
- All colors reference these variables
- Only edit the values, not the variable names

**To Add New Styles:**
- Add to bottom of file
- Use mobile-first approach (mobile, then @media)
- Use existing color variables

---

### 3. js/botpress-config.js
**Purpose:** Botpress chatbot configuration and initialization

**Configuration:**
```javascript
const botpressConfig = {
    configUrl: 'https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json',
    sdkUrl: 'https://cdn.botpress.cloud/webchat/v3.5/inject.js'
};
```

**Main Functions:**
```javascript
// Initialize Botpress
initBotpress();

// Load SDK with retry
loadBotpressSDK();

// Show/toggle chat widget
toggleChatWidget();
```

**To Change Bot Configuration:**
1. Update `configUrl` value (point to your bot)
2. Rest happens automatically
3. No other changes needed

**To Debug:**
- Check browser console (F12) for logs
- Look for "Botpress initialized successfully"
- If error, check network tab for SDK loading

---

### 4. js/data.js
**Purpose:** Leisure attractions data

**Structure:**
```javascript
const leisureData = [
    {
        id: 1,
        name: "Attraction Name",
        emoji: "🎪",
        category: "parks",  // parks|shopping|entertainment|free-budget
        description: "Short description",
        details: {
            time: "2-3 hours",
            cost: "$5-10",
            budget: "Budget-friendly"
        },
        fullDescription: "Detailed description"
    },
    // ... more attractions
];
```

**To Add New Attraction:**
1. Create new object in array
2. Copy structure from existing
3. Set unique `id`
4. Use existing categories
5. leisure.js will auto-render

**Categories:**
- `parks` - Parks & Nature
- `shopping` - Shopping Malls
- `entertainment` - Entertainment Venues
- `free-budget` - Free & Budget Activities

---

### 5. js/leisure.js
**Purpose:** Leisure module - filtering, cards, modals

**Main Functions:**
```javascript
// Render cards from data
renderLeisureCards(leisureData);

// Filter by category
filterLeisure(category);

// Open attraction details
openModal(attractionId);

// Close modal
closeModal();
```

**Filter Categories:**
- "all" - All attractions
- "parks" - Parks & Nature
- "shopping" - Shopping Malls
- "entertainment" - Entertainment
- "free-budget" - Free & Budget

**To Add New Filter:**
1. Add button in HTML with `data-filter="newCategory"`
2. Add attractions with matching category in data.js
3. leisure.js handles filtering automatically

---

### 6. js/main.js
**Purpose:** Navigation, smooth scrolling, animations

**Main Functions:**
```javascript
// Setup navigation
setupNavigation();

// Setup scroll behavior
setupScrollBehavior();

// Animate on scroll
animateOnScroll();
```

**What it does:**
- Smooth scrolling for nav links
- Highlights active nav link based on scroll position
- Animates leisure cards on scroll
- All automatic, no manual changes needed

---

## Common Tasks

### Change Website Colors
**Edit:** `css/styles.css`
```css
:root {
    --primary-red: #NEW_COLOR;
}
```

### Add New Leisure Attraction
**Edit:** `js/data.js`
```javascript
const leisureData = [
    // ... existing
    {
        id: 18,
        name: "My New Place",
        emoji: "🎨",
        category: "entertainment",
        // ... rest of structure
    }
];
```

### Change Botpress Bot
**Edit:** `js/botpress-config.js`
```javascript
const botpressConfig = {
    configUrl: 'https://NEW_BOT_CONFIG_URL',
    sdkUrl: 'https://cdn.botpress.cloud/webchat/v3.5/inject.js'
};
```

### Add New Navigation Section
**Edit:** `index.html`
```html
<!-- Add section -->
<section id="new-section">
    <div class="container">
        <h2>New Section</h2>
        <!-- content -->
    </div>
</section>

<!-- Add nav link -->
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### Change Float Button Style
**Edit:** `css/styles.css`
```css
.chat-icon-btn {
    width: 70px;        /* Change size */
    bottom: 40px;       /* Change position */
    background: red;    /* Change color */
}
```

---

## Debugging Tips

### Chat Button Not Working
1. Open browser console (F12)
2. Click chat button
3. Check console for errors
4. Look for "Botpress initialized successfully"
5. Check Network tab - is SDK loading?

### Leisure Cards Not Showing
1. Check browser console for JS errors
2. Check if data.js loaded (Network tab)
3. Check if leisureData defined
4. Check HTML has `<div id="leisureGrid">`

### Styling Issues
1. Check CSS file loaded (Network tab)
2. Use browser inspector to check applied styles
3. Check for CSS specificity conflicts
4. Clear browser cache (Ctrl+Shift+Delete)

### Script Loading Issues
1. Check Network tab - all scripts loaded?
2. Check script order in HTML (botpress-config FIRST)
3. Check console for errors
4. All scripts must be at bottom of body

---

## Important Notes

⚠️ **Script Loading Order is Critical**
```html
<script src="js/botpress-config.js"></script>  <!-- MUST BE FIRST -->
<script src="js/data.js"></script>             <!-- MUST BE SECOND -->
<script src="js/leisure.js"></script>          <!-- THIRD -->
<script src="js/main.js"></script>             <!-- LAST -->
```

⚠️ **Don't Modify:**
- Global function names (toggleChatWidget, openModal, etc)
- CSS variable names (use only values)
- Data structure in data.js (use exact field names)
- Script loading order

✅ **Safe to Modify:**
- CSS colors and values
- HTML content and structure
- Data.js attraction data
- Function implementations
- Add new CSS classes

---

## Testing Checklist

Before deploying changes:
- [ ] No console errors (F12)
- [ ] Chat button appears and works
- [ ] Leisure cards display correctly
- [ ] Filter buttons work
- [ ] Modal opens on card click
- [ ] Navigation smooth scrolls
- [ ] Mobile responsive (resize to 480px)
- [ ] All links work
- [ ] Botpress SDK loads (Network tab)

---

## File Edit Examples

### Example 1: Add New Attraction
```javascript
// In js/data.js, add to leisureData array:
{
    id: 18,
    name: "Gardens by the Bay",
    emoji: "🌺",
    category: "parks",
    description: "Beautiful gardens with light shows",
    details: {
        time: "2-3 hours",
        cost: "$28",
        budget: "Moderate cost"
    },
    fullDescription: "Gardens by the Bay is a nature park..."
}
```

### Example 2: Change Primary Color
```css
/* In css/styles.css, change: */
:root {
    --primary-red: #FF0000;  /* Was #B40000 */
}
```

### Example 3: Change Chat Button Position
```css
/* In css/styles.css, find .chat-icon-btn and change: */
.chat-icon-btn {
    bottom: 50px;  /* Was 30px */
    right: 50px;   /* Was 30px */
}
```

---

## Browser Developer Tools

**F12** - Open Developer Tools
- **Console Tab** - See errors and logs
- **Elements Tab** - Inspect HTML/CSS
- **Network Tab** - See what files load
- **Sources Tab** - Debug JavaScript
- **Performance Tab** - Check load times

**Common Shortcuts:**
- F12 - Open DevTools
- Ctrl+Shift+I - Open Inspector
- Ctrl+Shift+C - Pick element
- Ctrl+Shift+Delete - Clear cache

---

## Support & Resources

**Botpress Documentation:**
- https://botpress.com/docs

**JavaScript Reference:**
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

**CSS Reference:**
- https://developer.mozilla.org/en-US/docs/Web/CSS

**HTML Reference:**
- https://developer.mozilla.org/en-US/docs/Web/HTML

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | Dec 2024 | Complete rewrite - Clean architecture |
| 1.5 | Nov 2024 | Botpress integration |
| 1.0 | Oct 2024 | Initial release |

---

**Last Updated:** December 2024
**Status:** Production Ready ✅
