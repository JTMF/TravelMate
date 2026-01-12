// ============================
// Botpress Configuration
// Configuration for the Botpress AI Chat Assistant
// ============================

const botpressConfig = {
    // Botpress Configuration URL
    configUrl: 'https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json',
    
    // SDK Settings
    sdkUrl: 'https://cdn.botpress.cloud/webchat/v3.5/inject.js'
};

/**
 * Initialize Botpress chatbot
 */
function initBotpress() {
    if (!window.botpressWebChat) {
        console.warn('Botpress SDK not loaded yet');
        return false;
    }
    
    try {
        window.botpressWebChat.init({
            configUrl: botpressConfig.configUrl
        });
        console.log('Botpress initialized successfully');
        return true;
    } catch (error) {
        console.error('Error initializing Botpress:', error);
        return false;
    }
}

/**
 * Load Botpress SDK
 */
function loadBotpressSDK() {
    if (window.botpressSDKLoaded) {
        return; // Already loaded
    }
    
    const script = document.createElement('script');
    script.src = botpressConfig.sdkUrl;
    script.async = true;
    script.onload = function() {
        window.botpressSDKLoaded = true;
        // Wait for SDK to be ready
        setTimeout(initBotpress, 500);
    };
    script.onerror = function() {
        console.error('Failed to load Botpress SDK, retrying...');
        setTimeout(loadBotpressSDK, 2000);
    };
    
    document.head.appendChild(script);
}

/**
 * Toggle/Show chat widget
 */
function toggleChatWidget() {
    if (!window.botpressWebChat) {
        console.warn('Botpress not ready, initializing...');
        initBotpress();
        return;
    }
    
    try {
        window.botpressWebChat.sendEvent({
            type: 'show'
        });
    } catch (error) {
        console.error('Error toggling chat widget:', error);
    }
}

// Load Botpress SDK when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBotpressSDK);
} else {
    loadBotpressSDK();
}
