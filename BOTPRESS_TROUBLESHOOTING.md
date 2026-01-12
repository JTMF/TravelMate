# 🔧 Botpress Chat Assistant - Troubleshooting Guide

## Issue: AI Chat Assistant Not Working

---

## ✅ Quick Fix Applied

The Botpress integration has been updated with:

1. **Improved SDK loading** - More robust initialization
2. **Better CSS styling** - Ensures widget displays properly
3. **Container targeting** - Widget now properly attaches to container
4. **Retry logic** - Automatically retries if widget loads late

---

## 🧪 How to Test

### Step 1: Hard Refresh Browser
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### Step 2: Open Website
Navigate to your TravelMate website and scroll to the chat section.

### Step 3: Check for Widget
Look for the Botpress chat widget. It should:
- Display in the chat section
- Show "Botpress" branding
- Have a message input area
- Respond to messages

### Step 4: Test Conversation
Type a test message:
```
"What can I do in Singapore?"
```

You should receive an intelligent response from Botpress AI.

---

## 🐛 If Still Not Working

### Check 1: Browser Console
1. Press **F12** to open Developer Tools
2. Go to **Console** tab
3. Look for error messages
4. Take note of any red errors

**Common errors:**
```
CORS error: Config URL blocked
→ Usually means network issue, check internet

TypeError: window.botpressWebChat is undefined
→ SDK didn't load, check Botpress status

Failed to fetch config
→ Check config URL format
```

### Check 2: Network Connectivity
1. Ensure you have internet connection
2. Botpress CDN must be accessible:
   - `https://cdn.botpress.cloud/`
   - `https://files.bpcontent.cloud/`
3. Check if behind corporate firewall/proxy

### Check 3: Botpress Status
Visit: https://status.botpress.cloud
- Check if service is operational
- Look for any ongoing incidents

### Check 4: Config URL Validity
The config URL should be:
```
https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json
```

Try opening it directly in browser - it should return JSON data.

### Check 5: Cache & Cookies
Clear browser cache completely:
1. Press **Ctrl+Shift+Delete** (Windows) or **Cmd+Shift+Delete** (Mac)
2. Select "All time"
3. Check: Cookies, Cache, etc.
4. Clear
5. Refresh website

---

## 🔍 Manual Diagnostics

### In Browser Console (F12):

**Check if SDK loaded:**
```javascript
console.log(window.botpressWebChat)
```
Should show an object, not `undefined`

**Check HTML element:**
```javascript
console.log(document.getElementById('botpress-container'))
```
Should show the `<div>` element

**Check for widget:**
```javascript
console.log(document.querySelector('.bp-webchat-container'))
```
Should show the widget container if loaded

**Try manual init:**
```javascript
if (window.botpressWebChat) {
    window.botpressWebChat.init({
        configUrl: 'https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json'
    });
    console.log('Bot initialized manually');
}
```

---

## 🚨 Advanced Troubleshooting

### Issue: Widget loads but doesn't respond

**Cause:** Bot may be offline or unpublished

**Solution:**
1. Go to [Botpress Cloud](https://cloud.botpress.com)
2. Check if bot is "Published"
3. Check bot status (green = online)
4. Restart bot if necessary

### Issue: Widget shows but config error

**Cause:** Config URL is incorrect or expired

**Solution:**
1. Get new config URL from Botpress
2. Update in `index.html`
3. Redeploy website

### Issue: Styling looks broken

**Cause:** CSS conflicts with page styles

**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check if CSS was uploaded correctly
3. Review browser console for CSS errors

### Issue: Widget appears but very small/large

**Cause:** Container sizing issue

**Solution:**
1. Check CSS `#botpress-container` styles
2. Verify `min-height` is set
3. Check media queries for mobile

---

## 🔄 Reset Everything

If nothing works, try a full reset:

### Step 1: Clear Cache
```
Ctrl+Shift+Delete → Clear all → Refresh
```

### Step 2: Update Files
Ensure these files are latest:
```
index.html (updated with new Botpress script)
css/styles.css (updated with Botpress styling)
```

### Step 3: Test Individual Components

Test Botpress SDK loads:
```html
<script src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"></script>
<script>
  console.log('SDK loaded:', typeof window.botpressWebChat);
</script>
```

### Step 4: Contact Support

If still not working:
1. Visit: https://community.botpress.com
2. Or: support@botpress.com
3. Provide:
   - Bot ID/name
   - Config URL
   - Error messages from console
   - Website URL

---

## ✅ Verification Checklist

When working correctly, verify:

- [ ] Page loads without JavaScript errors
- [ ] Chat section visible
- [ ] Botpress container shows
- [ ] Widget displays properly
- [ ] Can type in message input
- [ ] Bot responds to messages
- [ ] Mobile view responsive
- [ ] No console errors

---

## 📝 Quick Reference

| Component | Check |
|-----------|-------|
| **SDK** | `window.botpressWebChat` exists |
| **Container** | `#botpress-container` in DOM |
| **Widget** | `.bp-webchat-container` visible |
| **Config URL** | Returns valid JSON |
| **Bot Status** | Published in Botpress Cloud |
| **Network** | Internet connected |
| **Browser Cache** | Cleared |

---

## 🆘 When All Else Fails

**Complete Nuclear Reset:**

1. Delete browser cache completely
2. Restart browser
3. Close all browser windows
4. Reopen browser
5. Visit website
6. Wait 5 seconds for widget to load

If this doesn't work, something is fundamentally wrong. Contact Botpress support with:
- Full error console output
- Screenshot of issue
- Bot configuration details

---

## 📞 Support Resources

- **Botpress Status:** https://status.botpress.cloud
- **Botpress Docs:** https://botpress.com/docs
- **Botpress Community:** https://community.botpress.com
- **Botpress Support:** support@botpress.com

---

## 🎯 Expected Behavior

When working correctly:

1. **Page loads** → SDK initializes (2-3 seconds)
2. **Widget appears** → Botpress chat widget visible
3. **User types** → Message shows in chat
4. **Bot responds** → AI response appears (1-3 seconds)
5. **Conversation continues** → Full context maintained

---

**Last Updated:** January 12, 2026  
**Status:** Troubleshooting Guide  
**Version:** 1.0
