// Quality Inspection Dashboard JavaScript

// Defect detail highlighting
function showDefectDetail(defectNumber) {
    // Remove previous highlights
    document.querySelectorAll('.defect-card').forEach(card => {
        card.style.boxShadow = '';
        card.style.transform = '';
    });

    // Highlight the selected defect
    const defectCard = document.getElementById(`defect-${defectNumber}`);
    if (defectCard) {
        defectCard.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
        defectCard.style.transform = 'scale(1.02)';

        // Scroll to the defect card
        defectCard.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });

        // Reset after 2 seconds
        setTimeout(() => {
            defectCard.style.boxShadow = '';
            defectCard.style.transform = '';
        }, 2000);
    }
}

// Initialize charts
function initCharts() {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                    size: 13
                },
                bodyFont: {
                    size: 12
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 11
                    }
                }
            }
        }
    };

    // Current Chart
    const currentCtx = document.getElementById('currentChart');
    if (currentCtx) {
        // Generate realistic weld current data
        const currentData = generateWeldData(245, 5, 185);
        // Add defect anomaly at position 144 (1440mm out of 1850mm)
        currentData[144] = 218; // Critical current drop

        new Chart(currentCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 185}, (_, i) => i * 10), // 0mm to 1850mm
                datasets: [{
                    label: 'Current (A)',
                    data: currentData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    ...chartOptions.scales,
                    y: {
                        ...chartOptions.scales.y,
                        min: 210,
                        max: 260,
                        ticks: {
                            ...chartOptions.scales.y.ticks,
                            callback: function(value) {
                                return value + 'A';
                            }
                        }
                    }
                }
            }
        });
    }

    // Voltage Chart
    const voltageCtx = document.getElementById('voltageChart');
    if (voltageCtx) {
        const voltageData = generateWeldData(28.5, 0.5, 185);

        new Chart(voltageCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 185}, (_, i) => i * 10),
                datasets: [{
                    label: 'Voltage (V)',
                    data: voltageData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    ...chartOptions.scales,
                    y: {
                        ...chartOptions.scales.y,
                        min: 26,
                        max: 31,
                        ticks: {
                            ...chartOptions.scales.y.ticks,
                            callback: function(value) {
                                return value + 'V';
                            }
                        }
                    }
                }
            }
        });
    }

    // Wire Feed Chart
    const wireFeedCtx = document.getElementById('wireFeedChart');
    if (wireFeedCtx) {
        const wireFeedData = generateWeldData(8.5, 0.3, 185);
        // Add speed variation at position 100-114 (undercut tendency)
        for (let i = 100; i < 114; i++) {
            wireFeedData[i] = 9.2; // 8% faster
        }

        new Chart(wireFeedCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 185}, (_, i) => i * 10),
                datasets: [{
                    label: 'Wire Feed (m/min)',
                    data: wireFeedData,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    ...chartOptions.scales,
                    y: {
                        ...chartOptions.scales.y,
                        min: 7,
                        max: 10,
                        ticks: {
                            ...chartOptions.scales.y.ticks,
                            callback: function(value) {
                                return value + ' m/min';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Generate realistic weld data with variations
function generateWeldData(mean, variance, points) {
    const data = [];
    for (let i = 0; i < points; i++) {
        // Add some natural variation and drift
        const drift = Math.sin(i / 20) * variance * 0.3;
        const noise = (Math.random() - 0.5) * variance;
        data.push(mean + drift + noise);
    }
    return data;
}

// Checklist interactions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts if Chart.js is loaded
    if (typeof Chart !== 'undefined') {
        initCharts();
    }

    // Checklist item completion
    document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const item = e.target.closest('.checklist-item');
            if (e.target.checked) {
                item.style.opacity = '0.6';
                item.querySelector('.checklist-text').style.textDecoration = 'line-through';
            } else {
                item.style.opacity = '1';
                item.querySelector('.checklist-text').style.textDecoration = 'none';
            }
        });
    });

    // Add hover effects to bead segments
    document.querySelectorAll('.bead-segment.clickable').forEach(segment => {
        segment.addEventListener('mouseenter', (e) => {
            const defectType = e.target.dataset.type;
            const start = e.target.dataset.start;
            const end = e.target.dataset.end;
            const severity = e.target.dataset.severity;

            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'bead-tooltip';
            tooltip.innerHTML = `
                <strong>${defectType}</strong><br>
                ${start}mm - ${end}mm<br>
                Severity: ${severity}
            `;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                pointer-events: none;
                z-index: 1000;
                white-space: nowrap;
                left: ${e.clientX + 10}px;
                top: ${e.clientY - 50}px;
            `;
            document.body.appendChild(tooltip);

            segment.addEventListener('mouseleave', () => {
                tooltip.remove();
            });
        });
    });

    // Action button clicks
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering defect highlight
            const btnText = btn.textContent.trim();

            // Show confirmation feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>✓ Marked</span>';
            btn.style.background = '#10b981';
            btn.style.color = 'white';
            btn.style.borderColor = '#10b981';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 2000);
        });
    });

    // Export and report buttons
    document.querySelectorAll('.btn-primary-lg, .btn-secondary-lg, .btn-outline').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent.trim();
            console.log(`Action: ${action}`);

            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = '✓ ' + action;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1500);
        });
    });
});

// Load Chart.js from CDN
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
document.head.appendChild(chartScript);
