# TravelMate Deployment & Hosting Guide

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE, Easiest)

#### Step 1: Create GitHub Repository
```bash
cd c:\Users\23014056\Documents\TravelMate
git init
git add .
git commit -m "Initial TravelMate commit"
```

#### Step 2: Push to GitHub
```bash
git remote add origin https://github.com/YourUsername/TravelMate.git
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to repository settings
2. Scroll to "GitHub Pages" section
3. Select: Source = "main" branch
4. Save
5. Your site will be live at: `https://YourUsername.github.io/TravelMate/`

**Pros**: Free, easy, automatic HTTPS  
**Cons**: Static site only (no backend)

---

### Option 2: Netlify (FREE with Generous Limits)

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Deploy
```bash
cd c:\Users\23014056\Documents\TravelMate
netlify deploy --prod
```

#### Step 3: Follow Prompts
- Connect to your GitHub account
- Select the TravelMate repository
- Set public directory: `.` (root)
- Deploy!

**Your site will be at**: `https://yoursite.netlify.app/`

**Pros**: Free, easy setup, environment variables support  
**Cons**: Still static (prepare for backend later)

---

### Option 3: Vercel (FREE with Generous Limits)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd c:\Users\23014056\Documents\TravelMate
vercel
```

**Your site will be at**: `https://travelmate.vercel.app/`

**Pros**: Optimized for modern web, free tier, easy GitHub integration  
**Cons**: Requires Node.js (more advanced)

---

### Option 4: Traditional Web Hosting (Paid)

#### Recommended Hosts (Singapore-based or good Asia support):
1. **AWS** - Most flexible (Singapore servers available)
2. **DigitalOcean** - Simple, affordable VPS
3. **SiteGround** - Great support, Singapore servers
4. **Bluehost** - Easy WordPress integration
5. **Namecheap** - Cheap with good support

#### Basic Setup:
```bash
# 1. Upload files via FTP/SFTP
# 2. Files go to: public_html/ or www/ folder
# 3. Access via your domain: www.travelmate.sg

# For static site, no special config needed!
```

---

## 📋 Pre-Deployment Checklist

Before going live, verify:

- [ ] All links work correctly (test locally first)
- [ ] Mobile design looks good (test on phone)
- [ ] No broken images or emojis display
- [ ] Chat functionality works
- [ ] Filter buttons work
- [ ] Modal opens and closes properly
- [ ] Navigation scrolling is smooth
- [ ] No console errors (F12 → Console)
- [ ] All MRT info is current
- [ ] Prices are realistic
- [ ] Colors match brand (#B40000, #486220)

---

## 🔐 Security Best Practices

### For Current Static Site:
- ✅ No backend secrets needed
- ✅ No API keys exposed
- ✅ HTTPS enabled (all hosts provide this)
- ✅ No user data collection (yet)

### When Adding Backend Later:
- 🔒 Use environment variables (.env files)
- 🔒 Never commit secrets to git
- 🔒 Use HTTPS/TLS for all API calls
- 🔒 Validate all user inputs
- 🔒 Implement CORS properly
- 🔒 Add rate limiting to APIs

---

## 📊 Performance Optimization

### Current Site
- Very fast (no dependencies, minimal CSS/JS)
- Static files serve instantly
- No database queries
- Mobile-optimized

### To Improve Further:
```html
<!-- In index.html <head> - Add preconnect hints -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="//example.com">
```

### Lazy Loading (Optional)
```html
<!-- For future images -->
<img src="image.jpg" loading="lazy" alt="description">
```

---

## 🌍 Domain Setup

### Recommended Domains:
- `travelmate.sg` (local)
- `travelmate.rp.edu.sg` (school domain)
- `travelmate.app` (generic)

### DNS Configuration (for Netlify/Vercel):
```
CNAME: your-domain.com → netlify's-dns.com
(or respective provider)
```

Detailed instructions from hosting provider.

---

## 📈 Monitoring & Analytics

### Google Analytics (Free)
```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor:
- Page views & user count
- Popular attractions
- Chat usage
- Mobile vs desktop users
- Geographic data (for future expansion)

---

## 🔄 Continuous Deployment

### GitHub → Netlify (Automatic)
```
1. Edit files locally
2. Push to GitHub
3. Netlify auto-detects changes
4. Site redeploys automatically
5. Live in 30 seconds!
```

No manual deployment needed with GitHub Pages or Netlify!

---

## 🚨 Troubleshooting Deployment

### Issue: Files not showing / 404 errors
```
Solution: Make sure index.html is in root directory
         and paths are relative: css/styles.css (not /css/styles.css)
```

### Issue: Styling broken after deploy
```
Solution: Clear browser cache (Ctrl+Shift+Del)
         or hard refresh (Ctrl+F5)
```

### Issue: Chat not working
```
Solution: Check browser console (F12) for JS errors
         Ensure all .js files were uploaded
         Verify js/ folder structure
```

### Issue: Links broken after deploy
```
Solution: Verify relative paths are correct
         index.html → css/styles.css (relative)
         NOT /css/styles.css (absolute)
```

---

## 📱 Mobile Deployment

### Testing Before Deployment:
```bash
# Test locally on mobile phone
# 1. Find your IP: ipconfig (Windows) or ifconfig (Mac/Linux)
# 2. Start local server: python -m http.server 8000
# 3. On phone, visit: http://YOUR_IP:8000
# 4. Test all features on actual device
```

### Deploy Considerations:
- ✅ Site is already mobile-responsive
- ✅ All buttons are touch-friendly
- ✅ Images optimize automatically
- ✅ Works offline (ready for PWA enhancement)

---

## 🎯 Post-Deployment Tasks

After going live:

### Day 1-3:
- [ ] Test all features on live site
- [ ] Ask team to test on different devices
- [ ] Check Google Analytics (if enabled)
- [ ] Monitor for errors

### Week 1:
- [ ] Verify attraction data is current
- [ ] Check MRT info is accurate
- [ ] Get student feedback
- [ ] Fix any reported issues

### Ongoing:
- [ ] Update prices quarterly
- [ ] Add new attractions regularly
- [ ] Monitor analytics
- [ ] Improve based on usage data

---

## 🔗 Quick Deployment Links

**GitHub Pages**:
https://pages.github.com/

**Netlify**:
https://www.netlify.com/

**Vercel**:
https://vercel.com/

**DigitalOcean**:
https://www.digitalocean.com/

---

## 📞 Deployment Checklist Summary

```
BEFORE DEPLOY:
☐ All links working locally
☐ Mobile layout tested
☐ No console errors
☐ Content verified
☐ Colors correct

DEPLOYMENT:
☐ Repository created (if using GitHub Pages)
☐ Files uploaded / pushed
☐ Domain configured (if custom domain)
☐ HTTPS enabled

POST-DEPLOY:
☐ Live site tested
☐ Mobile tested on real device
☐ Analytics setup
☐ Performance verified
☐ Backup created

```

---

## 💡 Pro Tips

1. **Always test locally first** before deploying
2. **Keep a git history** - easy to revert if needed
3. **Use semantic HTML** - makes site accessible & SEO-friendly
4. **Optimize images** - save as WebP where possible
5. **Monitor analytics** - understand your users
6. **Update content regularly** - keeps site fresh
7. **Get feedback from students** - they're your users!

---

## 🚀 You're Ready to Deploy!

TravelMate is optimized for fast, easy deployment. Choose your hosting, push your code, and share with exchange students.

**Questions?** Refer to the specific hosting provider's documentation.

---

**Last Updated**: January 6, 2026  
**Version**: 1.0 MVP
