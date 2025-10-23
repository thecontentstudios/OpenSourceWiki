// OpenSourceWiki - Main Application
let allTools = [];
let allCategories = [];
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    setupEventListeners();
    renderTools(allTools);
    updateStats();
});

// Load data from JSON file
async function loadData() {
    try {
        const response = await fetch('data/tools.json');
        const data = await response.json();
        allTools = data.tools;
        allCategories = data.categories;
        renderCategoryFilters();
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load tools data. Please refresh the page.');
    }
}

// Render category filter buttons
function renderCategoryFilters() {
    const filterContainer = document.querySelector('.filter-buttons');

    allCategories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.dataset.category = category;
        filterContainer.appendChild(button);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    const filterContainer = document.querySelector('.filter-buttons');
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            handleFilter(e.target);
        }
    });
}

// Handle search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    let filteredTools = allTools;

    // Apply category filter first
    if (currentFilter !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === currentFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filteredTools = filteredTools.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                tool.category.toLowerCase().includes(searchTerm)
            );
        });
    }

    renderTools(filteredTools);
}

// Handle category filter
function handleFilter(button) {
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');

    // Get category
    const category = button.dataset.category;
    currentFilter = category;

    // Filter tools
    let filteredTools = allTools;
    if (category !== 'all') {
        filteredTools = allTools.filter(tool => tool.category === category);
    }

    // Apply search if active
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredTools = filteredTools.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        });
    }

    renderTools(filteredTools);
}

// Render tools to the grid
function renderTools(tools) {
    const container = document.getElementById('toolsContainer');

    if (tools.length === 0) {
        container.innerHTML = '<div class="no-results"><h3>No tools found</h3><p>Try adjusting your search or filter.</p></div>';
        return;
    }

    container.innerHTML = tools.map(tool => createToolCard(tool)).join('');
}

// Create a tool card HTML
function createToolCard(tool) {
    const tags = tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    return `
        <div class="tool-card">
            <h3>${escapeHtml(tool.name)}</h3>
            <span class="category-badge">${escapeHtml(tool.category)}</span>
            <p class="description">${escapeHtml(tool.description)}</p>
            <div class="tags">${tags}</div>
            <a href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer" class="tool-link">
                Visit Project
            </a>
            <div class="license">
                <strong>License:</strong> ${escapeHtml(tool.license)}
            </div>
        </div>
    `;
}

// Update statistics
function updateStats() {
    document.getElementById('totalTools').textContent = allTools.length;
    document.getElementById('totalCategories').textContent = allCategories.length;
}

// Show error message
function showError(message) {
    const container = document.getElementById('toolsContainer');
    container.innerHTML = `
        <div class="no-results">
            <h3>Error</h3>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.toString().replace(/[&<>"']/g, m => map[m]);
}

// Export function for potential future use
function exportData() {
    const dataStr = JSON.stringify(allTools, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'opensourcewiki-tools.json';
    link.click();
    URL.revokeObjectURL(url);
}
