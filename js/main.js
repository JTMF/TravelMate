// ============================
// TravelMate Main Script
// Navigation, smooth scrolling, and general functionality
// ============================ 

/**
 * Initialize main page functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupScrollBehavior();
});

/**
 * Setup smooth navigation link behavior
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Scroll to target
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * Setup scroll behavior to highlight active nav link
 */
function setupScrollBehavior() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Utility function for animations
 */
function animateOnScroll() {
    const cards = document.querySelectorAll('.leisure-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.3s ease';
        observer.observe(card);
    });
}

// Initialize animations on scroll
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

/**
 * Service Worker registration (for PWA support - optional)
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/service-worker.js').catch(err => {
        console.log('Service Worker registration failed:', err);
    });
}
// ============================
// AI Settings Modal Functions
// ============================

/**
 * Open AI Settings Modal
 */
function openAISettings() {
    const modal = document.getElementById('aiSettingsModal');
    if (!modal) return;
    
    modal.style.display = 'block';
    
    // Populate current settings
    document.getElementById('enableExternalAI').checked = aiConfig.enableExternalAI;
    document.getElementById('aiProvider').value = aiConfig.provider;
    
    // Clear status
    document.getElementById('connectionStatus').innerHTML = '';
}

/**
 * Close AI Settings Modal
 */
function closeAISettings() {
    const modal = document.getElementById('aiSettingsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Toggle external AI on/off
 */
function toggleExternalAI() {
    const enabled = document.getElementById('enableExternalAI').checked;
    setExternalAIEnabled(enabled);
    const status = enabled ? '✅ External AI enabled' : '✅ Local responses enabled';
    showStatus(status, 'success');
}

/**
 * Change AI provider
 */
function changeAIProvider() {
    const provider = document.getElementById('aiProvider').value;
    if (switchAIProvider(provider)) {
        showStatus(`✅ Provider switched to ${provider}`, 'success');
    }
}

/**
 * Save AI settings
 */
async function saveAISettings() {
    const apiKey = document.getElementById('apiKeyInput').value.trim();
    const provider = document.getElementById('aiProvider').value;
    
    if (!apiKey) {
        showStatus('❌ Please enter an API key', 'error');
        return;
    }
    
    // Save the API key
    if (setAIApiKey(apiKey, provider)) {
        showStatus('✅ API key saved successfully', 'success');
        document.getElementById('apiKeyInput').value = '';
        
        // Optionally test connection after saving
        setTimeout(() => {
            testAIConnectionButton();
        }, 500);
    }
}

/**
 * Test AI connection
 */
async function testAIConnectionButton() {
    const provider = document.getElementById('aiProvider').value;
    const apiKey = document.getElementById('apiKeyInput').value.trim() || 
                   (provider === 'openai' ? aiConfig.openai.apiKey : aiConfig.anthropic.apiKey);
    
    if (!apiKey) {
        showStatus('❌ Please enter an API key first', 'error');
        return;
    }
    
    showStatus('🔄 Testing connection...', 'info');
    
    try {
        const isValid = await testAIConnection(provider, apiKey);
        if (isValid) {
            showStatus('✅ Connection successful! API is working.', 'success');
        } else {
            showStatus('❌ Connection failed. Please check your API key.', 'error');
        }
    } catch (error) {
        showStatus(`❌ Error: ${error.message}`, 'error');
    }
}

/**
 * Show status message in settings modal
 * @param {string} message - Status message
 * @param {string} type - 'success', 'error', 'info'
 */
function showStatus(message, type = 'info') {
    const statusDiv = document.getElementById('connectionStatus');
    if (!statusDiv) return;
    
    statusDiv.className = `status-message status-${type}`;
    statusDiv.textContent = message;
    statusDiv.style.display = 'block';
}

/**
 * Close modal when clicking outside
 */
window.addEventListener('click', function(event) {
    const aiModal = document.getElementById('aiSettingsModal');
    if (event.target === aiModal) {
        closeAISettings();
    }
});