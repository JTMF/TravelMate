// Toggle chat modal
window.toggleChatWidget = function() {
    const modal = document.getElementById('chatModal');
    if (modal) {
        modal.classList.toggle('open');
    }
};

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('chatModal');
    const btn = document.getElementById('chatIconBtn');
    
    if (modal && modal.classList.contains('open')) {
        if (!modal.contains(e.target) && !btn.contains(e.target)) {
            modal.classList.remove('open');
        }
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('chatModal');
        if (modal && modal.classList.contains('open')) {
            modal.classList.remove('open');
        }
    }
});
