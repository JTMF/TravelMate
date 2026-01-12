// ============================
// TravelMate Leisure Module
// Handles filtering, cards, and modal interactions
// ============================ 

let currentFilter = 'all';

// Initialize leisure section on page load
document.addEventListener('DOMContentLoaded', function() {
    renderLeisureCards(leisureData);
    setupFilterButtons();
});

/**
 * Renders leisure cards based on filtered data
 * @param {Array} data - Array of attraction objects
 */
function renderLeisureCards(data) {
    const leisureGrid = document.getElementById('leisureGrid');
    leisureGrid.innerHTML = ''; // Clear previous cards

    data.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'leisure-card';
        card.innerHTML = `
            <div class="leisure-card-image">${attraction.emoji}</div>
            <div class="leisure-card-content">
                <h3 class="leisure-card-title">${attraction.name}</h3>
                <span class="leisure-card-category">${formatCategory(attraction.category)}</span>
                <p class="leisure-card-description">${attraction.description}</p>
                <div class="leisure-card-info">
                    <strong>⏱️ Duration:</strong> ${attraction.details.time}<br>
                    <strong>💰 Cost:</strong> ${attraction.details.cost}
                </div>
                <div class="leisure-card-budget">${attraction.details.budget}</div>
                <button class="learn-more-btn" onclick="openModal(${attraction.id})">Learn More</button>
            </div>
        `;
        leisureGrid.appendChild(card);
    });
}

/**
 * Filters leisure cards based on selected category
 * @param {string} category - Filter category (all, parks, shopping, entertainment, free-budget)
 */
function filterLeisure(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and render cards
    if (category === 'all') {
        renderLeisureCards(leisureData);
    } else {
        const filtered = leisureData.filter(item => item.category === category);
        renderLeisureCards(filtered);
    }
}

/**
 * Sets up filter button event listeners
 */
function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            filterLeisure(category);
        });
    });
}

/**
 * Formats category names for display
 * @param {string} category - Category slug
 * @returns {string} Formatted category name
 */
function formatCategory(category) {
    const categoryMap = {
        'parks': '🌳 Parks & Nature',
        'shopping': '🛍️ Shopping',
        'entertainment': '🎭 Entertainment',
        'free-budget': '💚 Free & Budget'
    };
    return categoryMap[category] || category;
}

/**
 * Opens modal with attraction details
 * @param {number} attractionId - ID of attraction
 */
function openModal(attractionId) {
    const attraction = leisureData.find(item => item.id === attractionId);
    if (!attraction) return;

    const modal = document.getElementById('attractionModal');
    const modalBody = document.getElementById('modalBody');

    // Build detailed HTML
    let highlightsHTML = attraction.details.highlights
        .map(h => `<li>${h}</li>`)
        .join('');

    modalBody.innerHTML = `
        <div style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">
            ${attraction.emoji}
        </div>
        <h3>${attraction.name}</h3>
        <p style="color: #666; font-style: italic;">${attraction.description}</p>

        <h3>📍 Location & Access</h3>
        <p><strong>Address:</strong> ${attraction.details.address}</p>
        <p><strong>MRT Access:</strong> ${attraction.details.mrt}</p>

        <h3>💰 Cost & Time</h3>
        <p><strong>Entry Fee:</strong> ${attraction.details.cost}</p>
        <p><strong>Recommended Duration:</strong> ${attraction.details.time}</p>

        <h3>✨ Highlights</h3>
        <ul>
            ${highlightsHTML}
        </ul>

        <h3>💡 Student Tip</h3>
        <p style="background-color: #f0f0f0; padding: 1rem; border-left: 4px solid #B40000; border-radius: 4px;">
            "${attraction.details.studentTip}"
        </p>

        <h3>Budget Category</h3>
        <p style="font-size: 1.1rem; font-weight: bold;">
            ${attraction.details.budget}
        </p>
    `;

    modal.classList.add('show');
}

/**
 * Closes the modal
 */
function closeModal() {
    const modal = document.getElementById('attractionModal');
    modal.classList.remove('show');
}

/**
 * Closes modal when clicking outside content
 */
document.addEventListener('click', function(event) {
    const modal = document.getElementById('attractionModal');
    if (event.target === modal) {
        closeModal();
    }
});
