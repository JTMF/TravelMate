// ============================
// TravelMate AI Service
// External AI API integration & fallback handling
// ============================ 

/**
 * Call external AI API (OpenAI, Anthropic, etc.)
 * @param {string} userMessage - User's question
 * @param {array} chatHistory - Previous chat messages for context
 * @returns {Promise<string>} AI response
 */
async function callExternalAI(userMessage, chatHistory = []) {
    if (!aiConfig.enableExternalAI) {
        return null; // Use local response instead
    }
    
    const provider = aiConfig.provider;
    
    try {
        if (provider === 'openai') {
            return await callOpenAIAPI(userMessage, chatHistory);
        } else if (provider === 'anthropic') {
            return await callAnthropicAPI(userMessage, chatHistory);
        }
    } catch (error) {
        console.error('External AI error:', error);
        console.log('Falling back to local responses');
        return null; // Fallback to local keyword-based response
    }
}

/**
 * Call OpenAI API
 * @param {string} userMessage - User's question
 * @param {array} chatHistory - Chat history for context
 * @returns {Promise<string>} Response from OpenAI
 */
async function callOpenAIAPI(userMessage, chatHistory = []) {
    const config = aiConfig.openai;
    
    if (!config.apiKey) {
        throw new Error('OpenAI API key not configured. Please set your API key in settings.');
    }
    
    // Build messages array with system prompt and chat history
    const messages = [
        { role: 'system', content: aiConfig.systemPrompt }
    ];
    
    // Add chat history (limit to last 5 messages for context)
    const recentHistory = chatHistory.slice(-5);
    messages.push(...recentHistory);
    
    // Add current user message
    messages.push({ role: 'user', content: userMessage });
    
    const requestBody = {
        model: config.model,
        messages: messages,
        temperature: config.temperature,
        max_tokens: config.maxTokens
    };
    
    try {
        const response = await fetch(config.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content.trim();
        
    } catch (error) {
        console.error('OpenAI API call failed:', error);
        throw error;
    }
}

/**
 * Call Anthropic Claude API
 * @param {string} userMessage - User's question
 * @param {array} chatHistory - Chat history for context
 * @returns {Promise<string>} Response from Claude
 */
async function callAnthropicAPI(userMessage, chatHistory = []) {
    const config = aiConfig.anthropic;
    
    if (!config.apiKey) {
        throw new Error('Anthropic API key not configured. Please set your API key in settings.');
    }
    
    // Build messages array (Anthropic uses different format)
    const messages = [];
    
    // Add recent chat history
    const recentHistory = chatHistory.slice(-5);
    messages.push(...recentHistory);
    
    // Add current user message
    messages.push({ role: 'user', content: userMessage });
    
    const requestBody = {
        model: config.model,
        max_tokens: config.maxTokens,
        system: aiConfig.systemPrompt,
        messages: messages
    };
    
    try {
        const response = await fetch(config.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': config.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Anthropic API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.content[0].text.trim();
        
    } catch (error) {
        console.error('Anthropic API call failed:', error);
        throw error;
    }
}

/**
 * Test API connection and validity
 * @param {string} provider - 'openai' or 'anthropic'
 * @param {string} apiKey - API key to test
 * @returns {Promise<boolean>} True if API is valid and working
 */
async function testAIConnection(provider, apiKey) {
    try {
        if (provider === 'openai') {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: 'test' }],
                    max_tokens: 5
                })
            });
            return response.status === 200 || response.status === 201;
            
        } else if (provider === 'anthropic') {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: 'claude-3-haiku-20240307',
                    max_tokens: 5,
                    messages: [{ role: 'user', content: 'test' }]
                })
            });
            return response.status === 200 || response.status === 201;
        }
        return false;
    } catch (error) {
        console.error('Connection test failed:', error);
        return false;
    }
}
