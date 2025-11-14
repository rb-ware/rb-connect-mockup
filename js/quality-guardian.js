// Quality Guardian JavaScript

// Signal data by type
const signalData = {
    current: {
        label: 'Current (A)',
        color: '#2563EB',
        target: 210,
        tolerance: 10,
        unit: 'A',
        data: generateSignalData(210, 8, 120, [{start: 90, end: 96, value: 228}])
    },
    voltage: {
        label: 'Voltage (V)',
        color: '#14B8A6',
        target: 24,
        tolerance: 2,
        unit: 'V',
        data: generateSignalData(24, 1, 120, [{start: 50, end: 62, value: 22.5}])
    },
    wfs: {
        label: 'Wire Feed Speed (m/min)',
        color: '#6366F1',
        target: 10,
        tolerance: 1,
        unit: 'm/min',
        data: generateSignalData(10, 0.5, 120)
    },
    tast: {
        label: 'TAST',
        color: '#F97316',
        target: 0,
        tolerance: 100,
        unit: '',
        data: generateSignalData(0, 30, 120, [{start: 90, end: 96, value: 145}])
    }
};

let currentSignal = 'current';
let signalChart = null;

// Generate signal data with anomalies
function generateSignalData(mean, variance, points, anomalies = []) {
    const data = [];
    for (let i = 0; i < points; i++) {
        let value = mean;

        const anomaly = anomalies.find(a => i >= a.start && i <= a.end);
        if (anomaly) {
            value = anomaly.value;
        } else {
            const drift = Math.sin(i / 15) * variance * 0.3;
            const noise = (Math.random() - 0.5) * variance;
            value = mean + drift + noise;
        }

        data.push(value);
    }
    return data;
}

// Initialize signal chart
function initSignalChart() {
    const ctx = document.getElementById('signalChart');
    if (!ctx || typeof Chart === 'undefined') return;

    const signal = signalData[currentSignal];
    const labels = Array.from({length: 120}, (_, i) => (i * 10).toString()); // 0mm to 1200mm

    signalChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: signal.label,
                data: signal.data,
                borderColor: signal.color,
                backgroundColor: signal.color + '20',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 0,
                pointHoverRadius: 4
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
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        title: function(context) {
                            return 'Position: ' + context[0].label + ' mm';
                        },
                        label: function(context) {
                            return signal.label + ': ' + context.parsed.y.toFixed(1) + ' ' + signal.unit;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 6,
                        font: {
                            size: 10
                        },
                        callback: function(value, index) {
                            return labels[index] + 'mm';
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
                        },
                        callback: function(value) {
                            return value.toFixed(1) + ' ' + signal.unit;
                        }
                    }
                }
            }
        }
    });

    updateSignalStats();
}

// Update signal chart
function updateSignalChart(signalType) {
    if (!signalChart) return;

    currentSignal = signalType;
    const signal = signalData[signalType];

    signalChart.data.datasets[0].label = signal.label;
    signalChart.data.datasets[0].data = signal.data;
    signalChart.data.datasets[0].borderColor = signal.color;
    signalChart.data.datasets[0].backgroundColor = signal.color + '20';

    signalChart.options.plugins.tooltip.callbacks.label = function(context) {
        return signal.label + ': ' + context.parsed.y.toFixed(1) + ' ' + signal.unit;
    };

    signalChart.options.scales.y.ticks.callback = function(value) {
        return value.toFixed(1) + ' ' + signal.unit;
    };

    signalChart.update();
    updateSignalStats();
}

// Update signal statistics
function updateSignalStats() {
    const signal = signalData[currentSignal];
    const avg = signal.data.reduce((a, b) => a + b, 0) / signal.data.length;
    const deviation = ((avg - signal.target) / signal.target * 100).toFixed(1);

    document.getElementById('targetValue').textContent =
        `${signal.target} ± ${signal.tolerance} ${signal.unit}`;
    document.getElementById('avgValue').textContent =
        `${avg.toFixed(1)} ${signal.unit}`;

    const deviationEl = document.getElementById('deviationValue');
    deviationEl.textContent = `${deviation > 0 ? '+' : ''}${deviation}%`;

    if (Math.abs(deviation) < 2) {
        deviationEl.className = 'stat-value success';
    } else if (Math.abs(deviation) < 5) {
        deviationEl.className = 'stat-value warning';
    } else {
        deviationEl.className = 'stat-value danger';
    }
}

// Initialize heatmap interactions
function initHeatmap() {
    const heatmapBar = document.getElementById('heatmapBar');
    const hoverInfo = document.getElementById('heatmapHover');

    if (!heatmapBar || !hoverInfo) return;

    const segments = heatmapBar.querySelectorAll('.heatmap-segment');

    segments.forEach(segment => {
        segment.addEventListener('mouseenter', (e) => {
            const start = e.target.dataset.start;
            const end = e.target.dataset.end;
            const score = e.target.dataset.score;

            let status = 'Excellent';
            if (score >= 95) status = 'Excellent';
            else if (score >= 85) status = 'Good';
            else if (score >= 70) status = 'Caution';
            else status = 'Defect';

            hoverInfo.querySelector('.hover-position strong').textContent = `${start}mm - ${end}mm`;
            hoverInfo.querySelector('.hover-score strong').textContent = score;
            hoverInfo.querySelector('.hover-status strong').textContent = status;
            hoverInfo.classList.add('active');
        });

        segment.addEventListener('mouseleave', () => {
            hoverInfo.classList.remove('active');
        });

        segment.addEventListener('click', (e) => {
            const imageNum = e.target.dataset.image;
            if (imageNum) {
                openSegmentModal(e.target);
            }
        });
    });
}

// Open segment detail modal with image
function openSegmentModal(segment) {
    const modal = document.getElementById('segmentModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPosition = document.getElementById('modalPosition');
    const modalScore = document.getElementById('modalScore');
    const modalIssue = document.getElementById('modalIssue');

    const start = segment.dataset.start;
    const end = segment.dataset.end;
    const score = segment.dataset.score;
    const imageNum = segment.dataset.image;

    let status = 'Excellent';
    let issue = 'No issues detected';
    if (score >= 95) {
        status = 'Excellent';
        issue = 'No issues detected';
    } else if (score >= 85) {
        status = 'Good';
        issue = 'Minor variations within acceptable range';
    } else if (score >= 70) {
        status = 'Caution';
        issue = 'Voltage fluctuation detected';
    } else {
        status = 'Defect';
        issue = 'Current spike - Possible lack of fusion';
    }

    modalTitle.textContent = `Segment ${imageNum} Detail`;
    modalPosition.textContent = `${start}mm - ${end}mm`;
    modalScore.textContent = `${score}/100 (${status})`;
    modalIssue.textContent = issue;

    // Set appropriate image
    if (imageNum === '1') {
        modalImage.src = 'assets/icons/welding1.jpeg';
    } else if (imageNum === '2') {
        modalImage.src = 'assets/icons/welding2.jpeg';
    }

    modal.classList.add('active');
}

// Close segment detail modal
function closeSegmentModal() {
    const modal = document.getElementById('segmentModal');
    modal.classList.remove('active');
}

// Make closeSegmentModal available globally
window.closeSegmentModal = closeSegmentModal;

// Initialize signal tabs
function initSignalTabs() {
    const tabs = document.querySelectorAll('.signal-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            const signalType = e.target.dataset.signal;
            updateSignalChart(signalType);
        });
    });
}

// Initialize action buttons
function initActionButtons() {
    // Inspect buttons
    document.querySelectorAll('.btn-inspect').forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = '✓ Queued';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 2000);
        });
    });

    // Review buttons
    document.querySelectorAll('.btn-review').forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = '✓ Scheduled';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 2000);
        });
    });

    // Create task buttons
    document.querySelectorAll('.btn-action-full').forEach(btn => {
        btn.addEventListener('click', () => {
            const actionText = btn.textContent.trim();
            const confirmText = `Create task: ${actionText}?`;

            if (confirm(confirmText)) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Task Created';
                btn.style.opacity = '0.7';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.opacity = '1';
                }, 3000);
            }
        });
    });
}

// Initialize selectors
function initSelectors() {
    const weldSelect = document.getElementById('weldSelect');
    const passSelect = document.getElementById('passSelect');

    if (weldSelect) {
        weldSelect.addEventListener('change', (e) => {
            console.log('Weld changed:', e.target.value);
            // In production, this would reload data for the selected weld
        });
    }

    if (passSelect) {
        passSelect.addEventListener('change', (e) => {
            console.log('Pass changed:', e.target.value);
            // In production, this would reload data for the selected pass
        });
    }
}

// Animate score on load
function animateScore() {
    const scoreNumber = document.querySelector('.score-number');
    if (!scoreNumber) return;

    const targetScore = 92.3;
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        const currentScore = easeProgress * targetScore;
        scoreNumber.textContent = currentScore.toFixed(1);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

// Animate breakdown bars
function animateBreakdownBars() {
    const bars = document.querySelectorAll('.breakdown-fill');

    bars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300 + index * 150);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Chart.js to load
    const checkChart = setInterval(() => {
        if (typeof Chart !== 'undefined') {
            clearInterval(checkChart);
            initSignalChart();
        }
    }, 100);

    initHeatmap();
    initSignalTabs();
    initActionButtons();
    initSelectors();
    animateScore();
    animateBreakdownBars();

    // Add hover effects to risk rows
    document.querySelectorAll('.risk-row').forEach(row => {
        row.addEventListener('click', () => {
            console.log('Risk row clicked');
            // In production, this would scroll to the corresponding segment in the heatmap
        });
    });
});
