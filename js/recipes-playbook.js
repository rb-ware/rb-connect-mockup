// Recipe data (normally this would come from an API)
const recipesData = [
    {
        id: 'R-2024-001',
        name: 'SM490A-6mm-Butt-1G',
        material: 'SM490A',
        thickness: '6mm',
        joint: 'Butt',
        position: '1G',
        welder: 'OTC-FD-V8',
        status: 'verified',
        defectRate: 0.8,
        cycleTime: 42,
        usage: 1247,
        version: 'v3.2',
        lastUpdated: '2024-11-10',
        parameters: {
            current: { value: 220, tolerance: 10 },
            voltage: { value: 24.5, tolerance: 1.5 },
            wfs: { value: 8.2, tolerance: 0.5 },
            travelSpeed: { value: 35, tolerance: 3 },
            ctwd: { value: 15, tolerance: 2 }
        },
        consumables: {
            wire: 'ER70S-6, 1.2mm',
            gas: 'Ar 98% + CO₂ 2%, 18 L/min',
            nozzle: 'Taper Type, 16mm',
            torchAngle: 'Push 10°'
        }
    },
    {
        id: 'R-2024-002',
        name: 'SS400-9mm-Fillet-2G',
        material: 'SS400',
        thickness: '9mm',
        joint: 'Fillet',
        position: '2G',
        welder: 'YASKAWA-AR1730',
        status: 'verified',
        defectRate: 1.2,
        cycleTime: 58,
        usage: 892,
        version: 'v2.5',
        lastUpdated: '2024-11-05',
        parameters: {
            current: { value: 245, tolerance: 12 },
            voltage: { value: 26.0, tolerance: 1.5 },
            wfs: { value: 9.5, tolerance: 0.6 },
            travelSpeed: { value: 30, tolerance: 3 },
            ctwd: { value: 16, tolerance: 2 }
        },
        consumables: {
            wire: 'ER70S-6, 1.2mm',
            gas: 'Ar 95% + CO₂ 5%, 20 L/min',
            nozzle: 'Cylindrical, 18mm',
            torchAngle: 'Push 15°'
        }
    },
    {
        id: 'R-2024-003',
        name: 'SUS304-4mm-Lap-1G',
        material: 'SUS304',
        thickness: '4mm',
        joint: 'Lap',
        position: '1G',
        welder: 'FANUC-ARC-M20',
        status: 'draft',
        defectRate: 2.5,
        cycleTime: 35,
        usage: 156,
        version: 'v1.0',
        lastUpdated: '2024-11-01',
        parameters: {
            current: { value: 180, tolerance: 8 },
            voltage: { value: 22.0, tolerance: 1.0 },
            wfs: { value: 6.8, tolerance: 0.4 },
            travelSpeed: { value: 40, tolerance: 4 },
            ctwd: { value: 14, tolerance: 2 }
        },
        consumables: {
            wire: 'ER308L, 1.0mm',
            gas: 'Ar 98% + CO₂ 2%, 15 L/min',
            nozzle: 'Taper Type, 14mm',
            torchAngle: 'Push 8°'
        }
    },
    {
        id: 'R-2023-045',
        name: 'SM490A-12mm-Butt-3G',
        material: 'SM490A',
        thickness: '12mm',
        joint: 'Butt',
        position: '3G',
        welder: 'OTC-FD-V8',
        status: 'verified',
        defectRate: 1.4,
        cycleTime: 78,
        usage: 634,
        version: 'v4.1',
        lastUpdated: '2024-10-28',
        parameters: {
            current: { value: 275, tolerance: 15 },
            voltage: { value: 28.5, tolerance: 2.0 },
            wfs: { value: 10.5, tolerance: 0.7 },
            travelSpeed: { value: 25, tolerance: 3 },
            ctwd: { value: 18, tolerance: 2 }
        },
        consumables: {
            wire: 'ER70S-6, 1.4mm',
            gas: 'Ar 98% + CO₂ 2%, 22 L/min',
            nozzle: 'Taper Type, 18mm',
            torchAngle: 'Drag 12°'
        }
    },
    {
        id: 'R-2024-007',
        name: 'A36-8mm-Fillet-1G',
        material: 'A36',
        thickness: '8mm',
        joint: 'Fillet',
        position: '1G',
        welder: 'YASKAWA-AR1730',
        status: 'verified',
        defectRate: 0.9,
        cycleTime: 52,
        usage: 445,
        version: 'v3.0',
        lastUpdated: '2024-10-20',
        parameters: {
            current: { value: 230, tolerance: 11 },
            voltage: { value: 25.0, tolerance: 1.5 },
            wfs: { value: 8.8, tolerance: 0.5 },
            travelSpeed: { value: 32, tolerance: 3 },
            ctwd: { value: 15, tolerance: 2 }
        },
        consumables: {
            wire: 'ER70S-6, 1.2mm',
            gas: 'Ar 97% + CO₂ 3%, 19 L/min',
            nozzle: 'Cylindrical, 16mm',
            torchAngle: 'Push 12°'
        }
    }
];

let currentRecipe = recipesData[0];
let performanceChart = null;
let currentTrendTab = 'defect';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeRecipeList();
    initializeFilters();
    initializeTrendTabs();
    updateRecipeDetail(currentRecipe);
    renderPerformanceChart('defect');
});

// Initialize recipe list
function initializeRecipeList() {
    const recipeItems = document.querySelectorAll('.recipe-item');
    recipeItems.forEach(item => {
        item.addEventListener('click', function() {
            const recipeId = this.dataset.recipeId;
            const recipe = recipesData.find(r => r.id === recipeId);
            if (recipe) {
                // Update active state
                recipeItems.forEach(r => r.classList.remove('active'));
                this.classList.add('active');

                // Update detail panel
                currentRecipe = recipe;
                updateRecipeDetail(recipe);

                // Update performance chart
                renderPerformanceChart(currentTrendTab);
            }
        });
    });
}

// Initialize filters
function initializeFilters() {
    const applyBtn = document.getElementById('btn-apply-filters');
    const resetBtn = document.getElementById('btn-reset-filters');

    applyBtn.addEventListener('click', applyFilters);
    resetBtn.addEventListener('click', resetFilters);
}

// Apply filters
function applyFilters() {
    const material = document.getElementById('filter-material').value;
    const thickness = document.getElementById('filter-thickness').value;
    const joint = document.getElementById('filter-joint').value;
    const position = document.getElementById('filter-position').value;
    const welder = document.getElementById('filter-welder').value;

    let filteredRecipes = recipesData;

    if (material !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.material === material);
    }

    if (thickness !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => {
            const t = parseInt(r.thickness);
            switch(thickness) {
                case '3-5': return t >= 3 && t <= 5;
                case '6-9': return t >= 6 && t <= 9;
                case '10-15': return t >= 10 && t <= 15;
                case '16+': return t >= 16;
                default: return true;
            }
        });
    }

    if (joint !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.joint === joint);
    }

    if (position !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.position === position);
    }

    if (welder !== 'all') {
        filteredRecipes = filteredRecipes.filter(r => r.welder === welder);
    }

    renderRecipeList(filteredRecipes);
}

// Reset filters
function resetFilters() {
    document.getElementById('filter-material').value = 'all';
    document.getElementById('filter-thickness').value = 'all';
    document.getElementById('filter-joint').value = 'all';
    document.getElementById('filter-position').value = 'all';
    document.getElementById('filter-welder').value = 'all';

    renderRecipeList(recipesData);
}

// Render recipe list
function renderRecipeList(recipes) {
    const recipeList = document.getElementById('recipe-list');

    if (recipes.length === 0) {
        recipeList.innerHTML = '<div style="padding: 24px; text-align: center; color: #94A3B8;">No recipes found matching the selected filters.</div>';
        return;
    }

    recipeList.innerHTML = recipes.map((recipe, index) => `
        <div class="recipe-item ${index === 0 ? 'active' : ''}" data-recipe-id="${recipe.id}">
            <div class="recipe-item-header">
                <div class="recipe-name">${recipe.name}</div>
                <div class="recipe-badge ${recipe.status}">${recipe.status === 'verified' ? 'Verified' : 'Draft'}</div>
            </div>
            <div class="recipe-specs">
                <span class="spec-item">Material: ${recipe.material}</span>
                <span class="spec-item">Thickness: ${recipe.thickness}</span>
                <span class="spec-item">Joint: ${recipe.joint}</span>
                <span class="spec-item">Position: ${recipe.position}</span>
            </div>
            <div class="recipe-metrics">
                <div class="metric">
                    <span class="metric-label">Defect Rate</span>
                    <span class="metric-value ${recipe.defectRate < 1.5 ? 'success' : 'warning'}">${recipe.defectRate}%</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Cycle Time</span>
                    <span class="metric-value">${recipe.cycleTime}s</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Usage</span>
                    <span class="metric-value">${recipe.usage.toLocaleString()} welds</span>
                </div>
            </div>
        </div>
    `).join('');

    // Re-initialize click handlers
    initializeRecipeList();

    // Update detail with first recipe
    if (recipes.length > 0) {
        currentRecipe = recipes[0];
        updateRecipeDetail(recipes[0]);
        renderPerformanceChart(currentTrendTab);
    }
}

// Update recipe detail panel
function updateRecipeDetail(recipe) {
    // Update header
    document.getElementById('detail-recipe-name').textContent = recipe.name;

    // Update info grid
    const infoGrid = document.querySelector('.info-grid');
    infoGrid.innerHTML = `
        <div class="info-item">
            <span class="info-label">Recipe ID</span>
            <span class="info-value">${recipe.id}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Version</span>
            <span class="info-value">${recipe.version}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Status</span>
            <span class="info-value"><span class="badge ${recipe.status}">${recipe.status === 'verified' ? 'Verified' : 'Draft'}</span></span>
        </div>
        <div class="info-item">
            <span class="info-label">Last Updated</span>
            <span class="info-value">${recipe.lastUpdated}</span>
        </div>
    `;

    // Update parameters table
    const paramsTable = document.querySelector('.params-table tbody');
    paramsTable.innerHTML = `
        <tr>
            <td>Current (A)</td>
            <td>${recipe.parameters.current.value}</td>
            <td>±${recipe.parameters.current.tolerance}</td>
        </tr>
        <tr>
            <td>Voltage (V)</td>
            <td>${recipe.parameters.voltage.value}</td>
            <td>±${recipe.parameters.voltage.tolerance}</td>
        </tr>
        <tr>
            <td>WFS (m/min)</td>
            <td>${recipe.parameters.wfs.value}</td>
            <td>±${recipe.parameters.wfs.tolerance}</td>
        </tr>
        <tr>
            <td>Travel Speed (cm/min)</td>
            <td>${recipe.parameters.travelSpeed.value}</td>
            <td>±${recipe.parameters.travelSpeed.tolerance}</td>
        </tr>
        <tr>
            <td>CTWD (mm)</td>
            <td>${recipe.parameters.ctwd.value}</td>
            <td>±${recipe.parameters.ctwd.tolerance}</td>
        </tr>
    `;

    // Update consumables
    const consumablesList = document.querySelector('.consumables-list');
    consumablesList.innerHTML = `
        <div class="consumable-item">
            <span class="consumable-label">Wire</span>
            <span class="consumable-value">${recipe.consumables.wire}</span>
        </div>
        <div class="consumable-item">
            <span class="consumable-label">Gas</span>
            <span class="consumable-value">${recipe.consumables.gas}</span>
        </div>
        <div class="consumable-item">
            <span class="consumable-label">Nozzle</span>
            <span class="consumable-value">${recipe.consumables.nozzle}</span>
        </div>
        <div class="consumable-item">
            <span class="consumable-label">Torch Angle</span>
            <span class="consumable-value">${recipe.consumables.torchAngle}</span>
        </div>
    `;
}

// Initialize trend tabs
function initializeTrendTabs() {
    const trendTabs = document.querySelectorAll('.trend-tab');
    trendTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.dataset.tab;

            // Update active state
            trendTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update chart
            currentTrendTab = tabType;
            renderPerformanceChart(tabType);
        });
    });
}

// Render performance chart
function renderPerformanceChart(type) {
    const ctx = document.getElementById('performance-chart');

    // Generate sample data based on type
    const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];
    let data, label, color, stats;

    if (type === 'defect') {
        data = [1.2, 1.1, 0.9, 1.0, 0.8, 0.7, 0.8, 0.8];
        label = 'Defect Rate (%)';
        color = '#10B981';
        stats = {
            avg: '0.8%',
            best: '0.4%',
            trend: '-15% ↓'
        };
    } else if (type === 'cycle') {
        data = [45, 44, 43, 42, 42, 41, 42, 42];
        label = 'Cycle Time (seconds)';
        color = '#3B82F6';
        stats = {
            avg: '42s',
            best: '40s',
            trend: '-7% ↓'
        };
    } else {
        data = [120, 135, 142, 156, 168, 175, 180, 185];
        label = 'Weekly Usage (welds)';
        color = '#14B8A6';
        stats = {
            avg: '157',
            best: '185',
            trend: '+54% ↑'
        };
    }

    // Update stats
    const statItems = document.querySelectorAll('.stat-item');
    statItems[0].querySelector('.stat-value').textContent = stats.avg;
    statItems[1].querySelector('.stat-value').textContent = stats.best;
    statItems[2].querySelector('.stat-value').textContent = stats.trend;

    // Destroy existing chart
    if (performanceChart) {
        performanceChart.destroy();
    }

    // Create new chart
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: color,
                backgroundColor: color + '20',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: color,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1E293B',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#E2E8F0',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return label + ': ' + context.parsed.y + (type === 'defect' ? '%' : type === 'cycle' ? 's' : '');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: type !== 'defect',
                    grid: {
                        color: '#E2E8F0'
                    },
                    ticks: {
                        color: '#64748B',
                        callback: function(value) {
                            return value + (type === 'defect' ? '%' : type === 'cycle' ? 's' : '');
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#64748B'
                    }
                }
            }
        }
    });
}

// Export WPS button handler
document.querySelector('.btn-export').addEventListener('click', function() {
    alert('Exporting WPS for ' + currentRecipe.name + '...\n\nThis would generate a PDF/Excel file with the complete Welding Procedure Specification.');
});

// Deploy to Robot button handler
document.querySelector('.btn-deploy').addEventListener('click', function() {
    alert('Deploying ' + currentRecipe.name + ' to robot...\n\nThis would send the recipe parameters to the selected welding robot controller.');
});

// Sort recipes
document.getElementById('sort-recipes').addEventListener('change', function() {
    const sortBy = this.value;
    let sortedRecipes = [...recipesData];

    switch(sortBy) {
        case 'defect-rate':
            sortedRecipes.sort((a, b) => a.defectRate - b.defectRate);
            break;
        case 'usage':
            sortedRecipes.sort((a, b) => b.usage - a.usage);
            break;
        case 'recent':
            sortedRecipes.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
            break;
        case 'name':
            sortedRecipes.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    renderRecipeList(sortedRecipes);
});
