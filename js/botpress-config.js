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
        console.warn('Botpress SDK not loaded yet, waiting...');
        setTimeout(initBotpress, 500);
        return false;
    }
    
    try {
        window.botpressWebChat.init({
            configUrl: botpressConfig.configUrl
        });
        console.log('✅ Botpress initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Error initializing Botpress:', error);
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
        console.log('Botpress SDK loaded successfully');
        window.botpressSDKLoaded = true;
        // Wait for SDK to be ready
        setTimeout(initBotpress, 1000);
    };
    script.onerror = function() {
        console.error('Failed to load Botpress SDK, retrying...');
        setTimeout(loadBotpressSDK, 3000);
    };
    
    document.head.appendChild(script);
}

/**
 * Toggle/Show chat widget
 */
function toggleChatWidget() {
    console.log('Chat button clicked');
    console.log('botpressWebChat available:', !!window.botpressWebChat);
    
    if (!window.botpressWebChat) {
        console.warn('⚠️ Botpress not ready yet, initializing...');
        setTimeout(toggleChatWidget, 500);
        return;
    }
    
    try {
        window.botpressWebChat.sendEvent({
            type: 'show'
        });
        console.log('✅ Chat widget toggled');
    } catch (error) {
        console.error('❌ Error toggling chat widget:', error);
    }
}

// Load Botpress SDK when DOM is ready
console.log('🔄 Botpress config loaded, waiting for DOM...');

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('📄 DOM ready, loading Botpress SDK...');
        loadBotpressSDK();
    });
} else {
    console.log('📄 DOM already loaded, loading Botpress SDK immediately...');
    loadBotpressSDK();
}

// Fallback: Try to initialize after 5 seconds if not done
setTimeout(function() {
    if (!window.botpressSDKLoaded) {
        console.log('⚠️ SDK not loaded after 5s, attempting manual load...');
        loadBotpressSDK();
    }
}, 5000);
