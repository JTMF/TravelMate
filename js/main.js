// ============================
// Chat Modal Logic
// ============================

// Open / close chat
function toggleChatWidget() {
    const modal = document.getElementById('chatModal');
    if (!modal) return;

    modal.classList.toggle('open');
}

// Clear / reset Botpress chat
function resetBotpressChat() {
    const iframe = document.getElementById('botpressChatFrame');
    if (iframe) {
        iframe.src = iframe.src; // reload iframe
    }
}

// Close when clicking outside modal
document.addEventListener('click', function (e) {
    const modal = document.getElementById('chatModal');
    const btn = document.getElementById('chatIconBtn');

    if (!modal || !modal.classList.contains('open')) return;

    if (!modal.contains(e.target) && !btn.contains(e.target)) {
        modal.classList.remove('open');
    }
});

// Close on ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.getElementById('chatModal')?.classList.remove('open');
    }
});
