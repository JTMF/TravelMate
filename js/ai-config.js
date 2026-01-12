// ============================
// TravelMate AI Configuration
// External AI service settings & initialization
// ============================ 

/**
 * AI Configuration Object
 * Supports multiple AI providers (OpenAI, Claude, etc.)
 */
const aiConfig = {
    // Set to true to enable external AI, false for local keyword-based responses
    enableExternalAI: false,
    
    // Provider options: 'openai', 'anthropic', 'custom'
    provider: 'openai',
    
    // API Configuration
    openai: {
        apiKey: '', // Load from environment or settings
        model: 'gpt-3.5-turbo',
        endpoint: 'https://api.openai.com/v1/chat/completions',
        temperature: 0.7,
        maxTokens: 150
    },
    
    anthropic: {
        apiKey: '', // Load from environment or settings
        model: 'claude-3-haiku-20240307',
        endpoint: 'https://api.anthropic.com/v1/messages',
        temperature: 0.7,
        maxTokens: 150
    },
    
    // System prompt for AI to maintain context
    systemPrompt: `You are TravelMate AI Assistant, an expert guide helping foreign exchange students (age 18-25) discover leisure and entertainment in Singapore. 

Your personality:
- Friendly, supportive, and enthusiastic
- Provide budget-conscious recommendations
- Focus on accessibility by MRT and public transport
- Emphasize free and affordable options
- Share local student tips

Expertise areas:
- Parks & nature (Gardens by the Bay, MacRitchie, East Coast Park, Pulau Ubin)
- Shopping (Bugis Street, Clementi Mall, Orchard Road)
- Entertainment (Marina Bay Cinemas, museums, arcades)
- Free/budget activities (Merlion Park, Singapore River Walk, Chinatown)
- Beaches (East Coast, Sentosa, Pulau Ubin)
- Nightlife & evening activities
- Transport via MRT and buses

Keep responses concise (1-3 sentences), friendly, and actionable. Ask follow-up questions to better assist.`
};

/**
 * Initialize AI Configuration
 * Load API keys from localStorage, environment, or settings
 */
function initializeAIConfig() {
    // Try to load API keys from localStorage
    const savedApiKey = localStorage.getItem('travelmate_ai_apikey');
    const savedProvider = localStorage.getItem('travelmate_ai_provider');
    const savedEnabled = localStorage.getItem('travelmate_ai_enabled');
    
    if (savedProvider) aiConfig.provider = savedProvider;
    if (savedEnabled !== null) aiConfig.enableExternalAI = JSON.parse(savedEnabled);
    
    if (savedApiKey && aiConfig.provider === 'openai') {
        aiConfig.openai.apiKey = savedApiKey;
    }
    if (savedApiKey && aiConfig.provider === 'anthropic') {
        aiConfig.anthropic.apiKey = savedApiKey;
    }
    
    console.log('AI Config initialized:', {
        provider: aiConfig.provider,
        enableExternalAI: aiConfig.enableExternalAI,
        hasApiKey: !!savedApiKey
    });
}

/**
 * Set AI API Key (store in localStorage)
 * @param {string} apiKey - The API key for the selected provider
 * @param {string} provider - Provider name (default: current provider)
 */
function setAIApiKey(apiKey, provider = aiConfig.provider) {
    if (!apiKey) return false;
    
    localStorage.setItem('travelmate_ai_apikey', apiKey);
    localStorage.setItem('travelmate_ai_provider', provider);
    
    if (provider === 'openai') {
        aiConfig.openai.apiKey = apiKey;
    } else if (provider === 'anthropic') {
        aiConfig.anthropic.apiKey = apiKey;
    }
    
    return true;
}

/**
 * Enable or disable external AI
 * @param {boolean} enabled - True to enable, false to use local responses
 */
function setExternalAIEnabled(enabled) {
    aiConfig.enableExternalAI = !!enabled;
    localStorage.setItem('travelmate_ai_enabled', JSON.stringify(enabled));
    
    console.log('External AI:', enabled ? 'ENABLED' : 'DISABLED');
}

/**
 * Get current AI provider configuration
 * @returns {object} Provider configuration
 */
function getProviderConfig() {
    if (aiConfig.provider === 'openai') {
        return aiConfig.openai;
    } else if (aiConfig.provider === 'anthropic') {
        return aiConfig.anthropic;
    }
    return null;
}

/**
 * Switch AI provider
 * @param {string} provider - 'openai' or 'anthropic'
 * @returns {boolean} Success status
 */
function switchAIProvider(provider) {
    if (['openai', 'anthropic'].includes(provider)) {
        aiConfig.provider = provider;
        localStorage.setItem('travelmate_ai_provider', provider);
        return true;
    }
    return false;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeAIConfig);
