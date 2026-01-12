// ============================
// Botpress Chatbot Configuration
// ============================

const BOTPRESS_URL = 'https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/12/04/20260112043815-JSGWJ2YJ.json';
let chatModalOpen = false;

/**
 * Toggle chat modal open/close
 */
window.toggleChatWidget = function() {
    const modal = document.getElementById('chatModal');
    
    if (!modal) {
        console.error('Chat modal not found');
        return;
    }
    
    if (chatModalOpen) {
        modal.classList.remove('open');
        chatModalOpen = false;
    } else {
        modal.classList.add('open');
        chatModalOpen = true;
    }
};

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('chatModal');
    const btn = document.getElementById('chatIconBtn');
    
    if (modal && !modal.contains(e.target) && !btn.contains(e.target)) {
        if (chatModalOpen) {
            modal.classList.remove('open');
            chatModalOpen = false;
        }
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('chatModal');
        if (modal && chatModalOpen) {
            modal.classList.remove('open');
            chatModalOpen = false;
        }
    }
});
