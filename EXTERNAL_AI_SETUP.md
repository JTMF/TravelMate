# TravelMate External AI Setup - Quick Start

## What's New?

TravelMate now supports **external AI services** (OpenAI, Anthropic) with automatic fallback to local keyword-based responses.

## 5-Minute Setup

### Step 1: Get an API Key
Choose one:
- **OpenAI**: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Anthropic Claude**: [https://console.anthropic.com/api-keys](https://console.anthropic.com/api-keys)

### Step 2: Open TravelMate Settings
Click **⚙️ AI Settings** button in the chat section

### Step 3: Configure
1. Check "Enable External AI"
2. Select your provider (OpenAI or Anthropic)
3. Paste your API key
4. Click "Test Connection" ✅

### Step 4: Save
Click **Save Settings** - Done! 🎉

---

## Files Modified/Added

```
New Files:
├── js/ai-config.js          (Config management)
├── js/ai-service.js         (API integration)
└── AI_INTEGRATION_GUIDE.md   (Full documentation)

Modified Files:
├── js/chat.js               (Added async AI support)
├── js/main.js               (Added settings UI)
├── css/styles.css           (Added AI modal styling)
└── index.html               (Added modal HTML)
```

---

## Key Features

✅ Automatic fallback to local responses  
✅ Chat history context (last 5 messages)  
✅ Real-time connection testing  
✅ Secure API key storage (browser only)  
✅ Support for OpenAI & Claude  
✅ Typing indicator animation  

---

## Usage

### For Users
1. Click "AI Settings" button in chat
2. Enter API key
3. Click "Save Settings"
4. Start chatting with external AI enabled

### For Developers
```javascript
// Check current status
console.log(aiConfig);

// Enable/disable external AI
setExternalAIEnabled(true);  // Use AI
setExternalAIEnabled(false); // Use local only

// Set API key
setAIApiKey('sk-xxxx...', 'openai');

// Switch provider
switchAIProvider('anthropic');

// Test connection
testAIConnection('openai', 'sk-xxxx...');
```

---

## Cost Estimate

**Monthly usage** (assuming 500 messages):
- OpenAI GPT-3.5: ~$0.25
- Claude 3 Haiku: ~$0.40
- Local only: $0.00

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Settings not saving | Enable localStorage in browser |
| Connection fails | Verify API key format |
| Slow responses | Check internet speed |
| Responses not working | Disable AI, check console for errors |

---

## System Architecture

```
User Input
    ↓
Chat.js → sendMessage()
    ↓
generateBotResponseAsync() checks:
    ├─ External AI enabled? → callExternalAI()
    │   ├─ OpenAI? → callOpenAIAPI()
    │   └─ Claude? → callAnthropicAPI()
    └─ If fails → generateBotResponse() (local fallback)
    ↓
Display Response + Update Chat History
```

---

## Next Steps

- Full documentation: See [AI_INTEGRATION_GUIDE.md](AI_INTEGRATION_GUIDE.md)
- Custom system prompt: Edit `aiConfig.systemPrompt` in `ai-config.js`
- Add new provider: Extend `ai-service.js`
- Cost optimization: Reduce `maxTokens` in config

---

**Status:** ✅ Ready to use  
**Requires:** No backend changes  
**Data stored:** Local browser only  
**Cost:** Optional (pay-as-you-go to OpenAI/Anthropic)
