# TravelMate External AI Integration Guide

## Overview

TravelMate now supports integration with external AI services (OpenAI, Anthropic) while maintaining a local keyword-based fallback system. This allows for more intelligent, context-aware responses while ensuring the app works offline.

---

## Features

✅ **Dual-Mode Operation**
- External AI mode for intelligent responses
- Local keyword-based fallback when AI is unavailable
- Seamless switching between modes

✅ **Multiple AI Providers**
- OpenAI (GPT-3.5-turbo, GPT-4)
- Anthropic Claude (Claude 3 Haiku, Opus)
- Easy to add more providers

✅ **Secure API Key Management**
- API keys stored in browser localStorage only
- Never transmitted to TravelMate servers
- Optional password-protected settings

✅ **Chat Context Memory**
- Previous messages sent to AI for better context
- Maintains conversation history within session
- Improves response quality over time

✅ **Real-time Connection Testing**
- Test AI connection directly in settings
- Validate API keys before saving
- Clear error messaging

---

## Getting Started

### 1. Enable External AI

1. Click the **⚙️ AI Settings** button in the chat section
2. Check the box: "Enable External AI (OpenAI/Claude)"
3. Select your preferred AI provider

### 2. Configure API Key

#### For OpenAI:
1. Visit [platform.openai.com](https://platform.openai.com)
2. Create an account or log in
3. Go to API keys section
4. Create a new API key
5. Copy the key
6. Paste into the API Key field in TravelMate settings
7. Click "Test Connection" to verify

#### For Anthropic (Claude):
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Create an account or log in
3. Go to API keys section
4. Create a new API key
5. Copy the key
6. Paste into the API Key field in TravelMate settings
7. Click "Test Connection" to verify

### 3. Save Settings

Click **Save Settings** to store your configuration. Your API key is stored locally in your browser and never sent to external servers.

---

## How It Works

### Request Flow

```
User Message
    ↓
Check if External AI Enabled
    ↓
If YES → Call External AI Service
    ├─ Send system prompt + chat history + user message
    ├─ Get AI response
    └─ Add to chat history
    ↓
If NO or Error → Use Local Keyword Matching
    └─ Match keywords to predefined responses
    ↓
Display Response in Chat
```

### Chat History

- Previous messages are included in API requests for context
- Helps AI understand the conversation flow
- Limited to last 5 messages to manage costs
- Cleared when user clicks "Clear Chat"

### System Prompt

The AI is instructed to:
- Focus on leisure & entertainment in Singapore
- Recommend budget-friendly options
- Emphasize MRT accessibility
- Suggest free/affordable activities
- Provide helpful local tips

---

## Code Structure

### Files Added

#### `js/ai-config.js`
- Configuration object for AI settings
- API key management
- Provider switching
- LocalStorage integration

**Key Functions:**
- `initializeAIConfig()` - Load saved settings on page load
- `setAIApiKey(apiKey, provider)` - Save API key
- `setExternalAIEnabled(enabled)` - Toggle AI mode
- `switchAIProvider(provider)` - Change AI provider
- `getProviderConfig()` - Get current provider settings

#### `js/ai-service.js`
- External API call handlers
- OpenAI and Anthropic integration
- Error handling and fallback logic
- Connection testing

**Key Functions:**
- `callExternalAI(userMessage, chatHistory)` - Main entry point
- `callOpenAIAPI(userMessage, chatHistory)` - OpenAI API caller
- `callAnthropicAPI(userMessage, chatHistory)` - Anthropic API caller
- `testAIConnection(provider, apiKey)` - Validate API connection

#### `js/chat.js` (Modified)
- Integrated external AI support
- Chat history tracking
- Async response handling
- Typing indicator

**Key Changes:**
- Added `chatHistory` array to track conversation
- `sendMessage()` now async with typing indicator
- New `generateBotResponseAsync()` function
- Fallback to local responses if AI unavailable
- `showTypingIndicator()` and `removeTypingIndicator()`

#### `js/main.js` (Modified)
- AI settings modal management
- Configuration UI handlers
- Connection testing UI

**New Functions:**
- `openAISettings()` - Open settings modal
- `closeAISettings()` - Close settings modal
- `toggleExternalAI()` - Enable/disable AI
- `changeAIProvider()` - Switch provider
- `saveAISettings()` - Persist settings
- `testAIConnectionButton()` - Test connection
- `showStatus()` - Display status messages

#### `css/styles.css` (Modified)
- AI settings modal styling
- Typing indicator animation
- Chat controls buttons
- Status message styling

#### `index.html` (Modified)
- Added AI settings modal HTML
- Added chat control buttons
- Script references for new files

---

## API Integration Details

### OpenAI Integration

**Endpoint:** `https://api.openai.com/v1/chat/completions`

**Request Format:**
```json
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {"role": "system", "content": "...system prompt..."},
    {"role": "user", "content": "...previous messages..."},
    {"role": "assistant", "content": "...previous responses..."},
    {"role": "user", "content": "...current message..."}
  ],
  "temperature": 0.7,
  "max_tokens": 150
}
```

**Response Format:**
```json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "response text"
      }
    }
  ]
}
```

### Anthropic (Claude) Integration

**Endpoint:** `https://api.anthropic.com/v1/messages`

**Request Format:**
```json
{
  "model": "claude-3-haiku-20240307",
  "max_tokens": 150,
  "system": "...system prompt...",
  "messages": [
    {"role": "user", "content": "...messages..."},
    {"role": "assistant", "content": "...responses..."}
  ]
}
```

**Response Format:**
```json
{
  "content": [
    {
      "type": "text",
      "text": "response text"
    }
  ]
}
```

---

## Configuration Examples

### Example 1: Enable OpenAI GPT-3.5

```javascript
// In browser console or settings UI:
setAIApiKey('sk-...your-key...', 'openai');
setExternalAIEnabled(true);
```

### Example 2: Use Claude with Budget Awareness

```javascript
// Modify ai-config.js:
aiConfig.openai.maxTokens = 100; // Lower cost
aiConfig.anthropic.temperature = 0.5; // More focused responses
```

### Example 3: Disable External AI (Fallback Only)

```javascript
setExternalAIEnabled(false);
// Will use local keyword-based responses
```

---

## Error Handling

### Common Errors

**"API key not configured"**
- Solution: Enter your API key in settings and click "Save Settings"

**"Connection failed"**
- Check your API key is correct
- Verify your account has API credits available
- Check internet connection
- Wait a moment and try again

**"API error: 401"**
- Your API key is invalid or expired
- Solution: Generate a new key from provider dashboard

**"API error: 429"**
- Rate limit exceeded
- Solution: Wait a few minutes before trying again

**"API error: 503"**
- Service temporarily unavailable
- Solution: App will fallback to local responses

### Fallback Behavior

If external AI fails for any reason:
1. Error is logged to browser console
2. System automatically uses local keyword-based responses
3. User sees response without interruption
4. No data loss or conversation break

---

## Performance & Costs

### Response Time
- External AI: 1-3 seconds (typical)
- Local responses: <100ms

### API Costs (as of Jan 2026)
- OpenAI GPT-3.5: ~$0.0005 per 1K tokens
- Claude 3 Haiku: ~$0.00080 per 1K input tokens

### Cost Optimization
1. Keep `maxTokens` low (150 is good)
2. Limit chat history to 5 messages
3. Use Claude 3 Haiku for lower costs
4. Disable external AI for offline use

---

## Security Considerations

✅ **What's Secure:**
- API keys stored in browser localStorage only
- No keys sent to TravelMate servers
- HTTPS required for API calls
- No user data collection

⚠️ **What to Know:**
- Shared computers: Others can access your API key in browser storage
- LocalStorage persists: Clear browser data to remove keys
- API calls include chat history: May contain personal info
- Provider privacy: OpenAI/Anthropic see your messages

**Recommendations:**
- Use dedicated API keys (not personal account keys)
- Enable IP restrictions on your API keys when available
- Don't share API keys
- Clear chat history before sharing device
- Review provider privacy policies

---

## Customization

### Change System Prompt

Edit `js/ai-config.js`:
```javascript
aiConfig.systemPrompt = `Your custom system prompt here...`;
```

### Add New AI Provider

In `js/ai-service.js`:
```javascript
async function callCustomAI(userMessage, chatHistory) {
    // Your implementation
}
```

Then update `callExternalAI()` to support it.

### Adjust Response Length

In `js/ai-config.js`:
```javascript
aiConfig.openai.maxTokens = 200; // Longer responses
```

### Modify Chat History Length

In `js/ai-service.js`:
```javascript
const recentHistory = chatHistory.slice(-10); // Last 10 messages instead of 5
```

---

## Troubleshooting

### Settings Not Saving
- Check browser localStorage is enabled
- Clear browser cache and retry
- Try a different browser

### Can't Test Connection
- Verify API key format is correct
- Check internet connectivity
- Try in browser console: `testAIConnection('openai', 'your-key')`

### Slow Responses
- OpenAI is slow during peak hours
- Try Claude instead
- Check internet connection speed

### Responses Not in Chat History
- Refresh the page to reload chat history
- Try clearing chat and starting fresh
- Check browser console for errors

---

## Advanced Usage

### Enable Debugging

In browser console:
```javascript
// Enable verbose logging
aiConfig.debug = true;

// Check current config
console.log(aiConfig);

// Test API directly
callOpenAIAPI('Hello', [])
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### Manual API Call

```javascript
await callExternalAI('What are free things to do in Singapore?', [
  { role: 'user', content: 'Hello' },
  { role: 'assistant', content: 'Hi! I am TravelMate...' }
]);
```

### Export Chat History

```javascript
// Copy chat history to clipboard
JSON.stringify(chatHistory)
```

---

## Future Enhancements

Potential improvements:
- [ ] Voice input/output support
- [ ] Multi-language support
- [ ] Chat history export/import
- [ ] Custom AI response rating
- [ ] Cost tracking dashboard
- [ ] Streaming responses (real-time token display)
- [ ] Support for more AI providers (Google Gemini, Cohere)
- [ ] Conversation templates
- [ ] AI personality selection

---

## Support

For issues or questions:
1. Check browser console for error messages
2. Review this documentation
3. Test API key validity
4. Try disabling external AI to confirm local mode works
5. Contact TravelMate team with error details

---

**Version:** 2.0 (External AI Integration)  
**Last Updated:** January 2026  
**Status:** Production Ready
