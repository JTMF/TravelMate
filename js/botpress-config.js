// ============================
// Botpress Configuration & Initialization
// ============================

const botpressConfig = {
    configUrl: 'https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json',
    sdkUrl: 'https://cdn.botpress.cloud/webchat/v3.5/inject.js'
};

// Global state
window.botpressReady = false;

/**
 * Toggle/Show the Botpress chat widget
 */
window.toggleChatWidget = function() {
    console.log('🎯 Chat button clicked');
    
    if (!window.botpressWebChat) {
        console.error('❌ Botpress SDK not available');
        console.log('⏳ Attempting to load SDK...');
        loadBotpressSDK();
        return;
    }
    
    try {
        console.log('📢 Sending show event to Botpress');
        window.botpressWebChat.sendEvent({ type: 'show' });
    } catch (error) {
        console.error('❌ Error showing chat:', error);
    }
};

/**
 * Initialize Botpress with the config
 */
function initBotpress() {
    console.log('⚙️ Initializing Botpress...');
    
    if (!window.botpressWebChat) {
        console.error('❌ botpressWebChat not available');
        return false;
    }
    
    try {
        window.botpressWebChat.init({
            configUrl: botpressConfig.configUrl
        });
        window.botpressReady = true;
        console.log('✅ Botpress initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Error initializing Botpress:', error);
        return false;
    }
}

/**
 * Load Botpress SDK from CDN
 */
function loadBotpressSDK() {
    console.log('📥 Loading Botpress SDK...');
    
    if (window.botpressSDKLoaded) {
        console.log('ℹ️ SDK already loading or loaded');
        return;
    }
    
    window.botpressSDKLoaded = true;
    
    const script = document.createElement('script');
    script.src = botpressConfig.sdkUrl;
    script.async = true;
    
    script.onload = function() {
        console.log('✅ SDK script loaded from CDN');
        setTimeout(initBotpress, 1000);
    };
    
    script.onerror = function() {
        console.error('❌ Failed to load SDK script');
        window.botpressSDKLoaded = false;
        
        // Retry after 3 seconds
        setTimeout(function() {
            console.log('🔄 Retrying SDK load...');
            window.botpressSDKLoaded = false;
            loadBotpressSDK();
        }, 3000);
    };
    
    document.head.appendChild(script);
}

/**
 * Start the initialization process
 */
function startBotpressInit() {
    console.log('🚀 Starting Botpress initialization');
    loadBotpressSDK();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startBotpressInit);
} else {
    startBotpressInit();
}

// Safety: Also try after 3 seconds if not done
setTimeout(function() {
    if (!window.botpressReady) {
        console.log('⚠️ Botpress not ready after 3s, attempting init...');
        startBotpressInit();
    }
}, 3000);
