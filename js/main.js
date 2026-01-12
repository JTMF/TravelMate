// ============================
// Chat Modal Logic
// ============================

// Toggle chat modal
window.toggleChatWidget = function () {
    const modal = document.getElementById('chatModal');
    const iframe = document.getElementById('botpressChatFrame');

    if (!modal) return;

    const isOpen = modal.classList.contains('open');
    modal.classList.toggle('open');

    // OPTIONAL: reset chat when closing
    if (isOpen && iframe) {
        iframe.src = iframe.src;
    }
};

// Clear / Reset Botpress Chat
function resetBotpressChat() {
    const iframe = document.getElementById('botpressChatFrame');
    if (iframe) {
        iframe.src = iframe.src;
    }
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('chatModal');
    const btn = document.getElementById('chatIconBtn');

    if (modal && modal.classList.contains('open')) {
        if (!modal.contains(e.target) && !btn.contains(e.target)) {
            modal.classList.remove('open');
        }
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('chatModal');
        if (modal && modal.classList.contains('open')) {
            modal.classList.remove('open');
        }
    }
});

// ============================
// Navigation Logic
// ============================

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
