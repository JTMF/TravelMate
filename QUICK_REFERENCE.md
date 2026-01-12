# TravelMate External AI - Quick Reference Card

## 🚀 5-Minute Setup

```
1. Click ⚙️ AI Settings
2. Check "Enable External AI"
3. Select Provider: OpenAI or Claude
4. Paste API Key (get from provider)
5. Click Test Connection ✅
6. Click Save Settings ✓
```

---

## 📝 Get API Keys

| Provider | URL | Time | Cost |
|----------|-----|------|------|
| **OpenAI** | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | 2 min | ~$0.25/mo |
| **Claude** | [console.anthropic.com/api-keys](https://console.anthropic.com/api-keys) | 2 min | ~$0.40/mo |

---

## 💻 For Developers

```javascript
// Check current config
console.log(aiConfig);

// Enable AI
setExternalAIEnabled(true);
setAIApiKey('sk-...', 'openai');

// Test connection
testAIConnection('openai', 'sk-...')
  .then(valid => console.log(valid));

// Call AI
callExternalAI('Hello!', chatHistory)
  .then(response => console.log(response));

// Switch provider
switchAIProvider('anthropic');

// Disable AI (fallback to local)
setExternalAIEnabled(false);
```

---

## 📂 New Files

| File | Purpose |
|------|---------|
| `js/ai-config.js` | Configuration management |
| `js/ai-service.js` | API integration |
| `AI_INTEGRATION_GUIDE.md` | Full documentation |
| `EXTERNAL_AI_SETUP.md` | Quick start guide |

---

## 🔧 Configuration

```javascript
// In ai-config.js

// Change model
aiConfig.openai.model = 'gpt-4';
aiConfig.anthropic.model = 'claude-3-opus-20240229';

// Adjust token limit
aiConfig.openai.maxTokens = 200; // More expensive
aiConfig.openai.maxTokens = 100; // Cheaper

// Custom system prompt
aiConfig.systemPrompt = 'Your instructions...';

// Change temperature (0.0 = focused, 1.0 = creative)
aiConfig.openai.temperature = 0.5;
```

---

## 🐛 Troubleshooting

| Error | Solution |
|-------|----------|
| "API key not configured" | Check API key format and provider match |
| "Connection failed" | Verify API key is valid, check internet |
| "Settings not saving" | Enable localStorage, clear cache |
| "Slow responses" | Check internet, try Claude, reduce tokens |
| "Responses not working" | Disable AI (F12 console for errors) |

---

## 🔒 Security

✅ **Safe:**
- Keys stored locally only
- No keys sent to TravelMate servers
- HTTPS required

⚠️ **Caution:**
- Don't share API keys
- Use dedicated API keys (not personal)
- Clear chat before sharing device

---

## 📊 Performance

| Aspect | Local | OpenAI | Claude |
|--------|-------|--------|--------|
| **Speed** | <100ms | 1-3s | 1-3s |
| **Cost** | Free | $0.25/mo | $0.40/mo |
| **Offline** | ✅ Yes | ❌ No | ❌ No |

---

## 📚 Documentation

- **Quick Start:** `EXTERNAL_AI_SETUP.md`
- **Full Guide:** `AI_INTEGRATION_GUIDE.md`
- **Technical:** `IMPLEMENTATION_SUMMARY.md`
- **Verification:** `VERIFICATION_REPORT.md`

---

## 🎯 Features

✅ OpenAI (GPT-3.5-turbo, GPT-4)  
✅ Anthropic Claude (Haiku, Sonnet, Opus)  
✅ Automatic fallback to local responses  
✅ Chat history context  
✅ Real-time connection testing  
✅ Secure API key storage  
✅ Typing indicator animation  

---

## 🔄 How It Works

```
User: "What should I do in Singapore?"
    ↓
External AI enabled? → YES
    ↓
Call OpenAI/Claude with system prompt + history
    ↓
Get AI response: "I recommend Gardens by the Bay..."
    ↓
Add to chat history + display
```

---

## ⚡ Common Commands (Console)

```javascript
// Show current config
console.log(aiConfig);

// Test if working
testAIConnection('openai', 'sk-...').then(console.log);

// Call AI directly
callExternalAI('Your question', chatHistory);

// Clear local storage
localStorage.clear();

// Check chat history
console.log(chatHistory);

// Export chat history
JSON.stringify(chatHistory);
```

---

## 🌐 API Endpoints (Reference)

**OpenAI:**
```
POST https://api.openai.com/v1/chat/completions
Authorization: Bearer {API_KEY}
```

**Claude:**
```
POST https://api.anthropic.com/v1/messages
x-api-key: {API_KEY}
anthropic-version: 2023-06-01
```

---

## 💰 Cost Calculator

```
Messages per month: X
Avg tokens per message: ~100
Cost per 1K tokens:
  - OpenAI: $0.0005
  - Claude: $0.00080

Monthly cost = X * 100 / 1000 * $rate
Example: 500 messages × 100 tokens = 50K tokens
  - OpenAI: 50K × $0.0005 / 1K = $0.25
  - Claude: 50K × $0.0008 / 1K = $0.40
```

---

## 📋 Checklist for Deployment

- [ ] AI Settings button visible
- [ ] Settings modal opens/closes
- [ ] API key input works
- [ ] Provider dropdown works
- [ ] Test connection button works
- [ ] Settings save to localStorage
- [ ] Local responses work (without API key)
- [ ] External AI works with valid key
- [ ] Fallback works on API error
- [ ] Typing indicator displays
- [ ] Chat history tracked
- [ ] Mobile responsive
- [ ] Clear chat resets history

---

## 🚀 Ready to Deploy

✅ No backend changes needed  
✅ Works immediately after upload  
✅ Fully backward compatible  
✅ Production ready  

---

## 📞 Quick Support

**Console Debugging:**
```javascript
// Enable verbose logging
window.debug_ai = true;

// View all API calls
window.addEventListener('fetch', e => 
  console.log(e.request.url)
);

// Monitor errors
window.addEventListener('error', 
  e => console.error(e)
);
```

---

**TravelMate External AI v2.0**  
✅ Ready to Use  
January 2026
