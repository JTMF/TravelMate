// ============================
// TravelMate Chat Assistant
// AI-powered recommendations chatbot with external AI support
// ============================ 

// Store chat history for context in external AI calls
let chatHistory = [];

const chatKeywords = {
    // Leisure & Entertainment responses
    parks: {
        keywords: ['park', 'nature', 'hiking', 'walk', 'green', 'outdoor', 'trail'],
        response: "Looking for nature? Try **Gardens by the Bay** (free light shows!), **MacRitchie** (scenic trails), or **East Coast Park** (beaches & cycling). Which interests you most?"
    },
    shopping: {
        keywords: ['shop', 'mall', 'clothing', 'bargain', 'cheap', 'fashion', 'store'],
        response: "For shopping, I recommend **Bugis Street** (cheapest fashion), **Clementi Mall** (student-friendly), or **Orchard Road** (variety). How much are you willing to spend?"
    },
    entertainment: {
        keywords: ['movie', 'cinema', 'museum', 'game', 'arcade', 'entertainment', 'fun', 'activity'],
        response: "Want entertainment? Try **Marina Bay Cinemas** (discounted matinees), **ArtScience Museum**, or **Timezone Arcade** (games & bowling). What's your budget?"
    },
    freeActivities: {
        keywords: ['free', 'cheap', 'budget', 'low cost', 'affordable', 'no money', 'broke'],
        response: "Great budget options: **Merlion Park** (free!), **Singapore River Walk** (free to walk), **Chinatown** (cheap food), or **Pulau Ubin** (only $20 total). Pick your style!"
    },
    beaches: {
        keywords: ['beach', 'sand', 'sea', 'water', 'swim', 'swimming'],
        response: "For beaches, check **East Coast Park** (nearest & best), **Sentosa Island** (bigger but pricier), or **Pulau Ubin** (hidden gem). When do you want to go?"
    },
    food: {
        keywords: ['eat', 'food', 'restaurant', 'hawker', 'hungry', 'dining', 'lunch', 'dinner'],
        response: "For food recommendations, I'll connect you with our **Food & Dining** team! But for leisure, I recommend eating at **hawker centers near attractions** for $3-6. Is there a specific area?"
    },
    transport: {
        keywords: ['mrt', 'bus', 'transport', 'how to get', 'access', 'travel', 'directions'],
        response: "For detailed transport info, check our **Getting Around Singapore** section. Most attractions are accessible by MRT + bus. Which attraction are you heading to?"
    },
    nightlife: {
        keywords: ['night', 'evening', 'bar', 'club', 'drinks', 'nightlife'],
        response: "Evening options: **Singapore River Walk** (free, scenic), **Marina Bay** (light shows), or **Sentosa** (beach bars). Looking for nightlife specifically?"
    },
    budget: {
        keywords: ['expensive', 'cost too much', 'too pricey', 'expensive', 'afford'],
        response: "I get it! Try free/budget activities: **Merlion** (free), **Chinatown** (cheap), **East Coast Park** (bring picnic), **Pulau Ubin** ($20 total). What's your actual budget?"
    },
    recommendation: {
        keywords: ['recommend', 'suggest', 'what should', 'where should i', 'best place', 'best time'],
        response: "Tell me about yourself! Are you interested in: nature/parks 🌳, shopping 🛍️, entertainment 🎭, or free activities 💚? Any budget limits?"
    }
};

// Initialize chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Send welcome message
    addBotMessage("👋 Hi! I'm TravelMate AI Assistant. I help you discover leisure & entertainment in Singapore! Ask me about parks, shopping, activities, or anything fun to do! 🎉");
});

/**
 * Sends user message and gets bot response
 */
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (!message) return;

    // Add user message to chat
    addUserMessage(message);
    
    // Add to chat history
    chatHistory.push({ role: 'user', content: message });
    
    chatInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();

    // Get response (external AI or local)
    generateBotResponseAsync(message).then(response => {
        removeTypingIndicator();
        addBotMessage(response);
        
        // Add bot response to chat history
        chatHistory.push({ role: 'assistant', content: response });
    });
}

/**
 * Generates bot response - tries external AI first, falls back to local
 * @param {string} userMessage - User's input
 * @returns {Promise<string>} Bot's response
 */
async function generateBotResponseAsync(userMessage) {
    try {
        // Try external AI if enabled
        if (aiConfig.enableExternalAI) {
            const externalResponse = await callExternalAI(userMessage, chatHistory);
            if (externalResponse) {
                console.log('Using external AI response');
                return externalResponse;
            }
        }
    } catch (error) {
        console.warn('External AI unavailable, using local response:', error.message);
    }
    
    // Fallback to local keyword-based response
    return generateBotResponse(userMessage);
}

/**
 * Generates bot response based on user message
 * @param {string} userMessage - User's input
 * @returns {string} Bot's response
 */
function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check each keyword category
    for (const [key, data] of Object.entries(chatKeywords)) {
        for (const keyword of data.keywords) {
            if (lowerMessage.includes(keyword)) {
                return data.response;
            }
        }
    }

    // Default response
    return "That's interesting! For leisure & entertainment questions, try asking about: parks 🌳, shopping 🛍️, movies 🎬, free activities 💚, or anything fun! What interests you?";
}

/**
 * Adds user message to chat display
 * @param {string} message - User message
 */
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Adds bot message to chat display (supports markdown-like formatting)
 * @param {string} message - Bot message
 */
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    
    // Simple markdown-like formatting for **bold**
    message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    messageDiv.innerHTML = message;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Clears chat history
 */
function clearChat() {
    chatHistory = []; // Clear chat history for external AI context
    document.getElementById('chatMessages').innerHTML = '';
    addBotMessage("Chat cleared! How can I help you discover leisure activities in Singapore? 🎉");
}

/**
 * Shows typing indicator while AI processes response
 */
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Removes typing indicator
 */
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}
