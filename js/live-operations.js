// Live Operations JavaScript

// Generate realistic weld data with variations
function generateWeldData(mean, variance, points, anomalies = []) {
    const data = [];
    for (let i = 0; i < points; i++) {
        let value = mean;

        // Check for anomalies
        const anomaly = anomalies.find(a => i >= a.start && i <= a.end);
        if (anomaly) {
            value = anomaly.value;
        } else {
            // Natural variation and drift
            const drift = Math.sin(i / 10) * variance * 0.3;
            const noise = (Math.random() - 0.5) * variance;
            value = mean + drift + noise;
        }

        data.push(value);
    }
    return data;
}

// Generate sparkline data
function generateSparklineData(points = 50) {
    return Array.from({length: points}, (_, i) => {
        return Math.sin(i / 5) * 5 + Math.random() * 3;
    });
}

// Initialize sparklines
function initSparklines() {
    const sparklineIds = ['currentSparkline', 'voltageSparkline', 'wfsSparkline', 'tastSparkline'];
    const colors = ['#2563EB', '#14B8A6', '#6366F1', '#F97316'];

    sparklineIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (!element) return;

        const data = generateSparklineData(30);
        const canvas = document.createElement('canvas');
        canvas.width = element.offsetWidth;
        canvas.height = 40;
        element.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const maxVal = Math.max(...data);
        const minVal = Math.min(...data);
        const range = maxVal - minVal || 1;

        ctx.strokeStyle = colors[index];
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((value, i) => {
            const x = (i / (data.length - 1)) * canvas.width;
            const y = canvas.height - ((value - minVal) / range) * (canvas.height - 4) - 2;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();
    });
}

// Initialize charts
function initCharts() {
    // Current & Voltage Chart
    const currentVoltageCtx = document.getElementById('currentVoltageChart');
    if (currentVoltageCtx && typeof Chart !== 'undefined') {
        const timeLabels = Array.from({length: 30}, (_, i) => `-${30 - i}s`);

        // Current data with spike
        const currentData = generateWeldData(210, 8, 30, [
            {start: 24, end: 25, value: 225}
        ]);

        // Voltage data
        const voltageData = generateWeldData(24.5, 1, 30);

        new Chart(currentVoltageCtx, {
            type: 'line',
            data: {
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Current (A)',
                        data: currentData,
                        borderColor: '#2563EB',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Voltage (V)',
                        data: voltageData,
                        borderColor: '#14B8A6',
                        backgroundColor: 'rgba(20, 184, 166, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
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
                        type: 'linear',
                        position: 'left',
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' A';
                            },
                            font: {
                                size: 11
                            }
                        },
                        min: 190,
                        max: 230
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        grid: {
                            display: false
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' V';
                            },
                            font: {
                                size: 11
                            }
                        },
                        min: 22,
                        max: 27
                    }
                }
            }
        });
    }

    // WFS & TAST Chart
    const wfsTastCtx = document.getElementById('wfsTastChart');
    if (wfsTastCtx && typeof Chart !== 'undefined') {
        const timeLabels = Array.from({length: 30}, (_, i) => `-${30 - i}s`);

        // WFS data
        const wfsData = generateWeldData(9.8, 0.5, 30);

        // TAST data with rapid change
        const tastData = generateWeldData(35, 15, 30, [
            {start: 20, end: 22, value: -145}
        ]);

        new Chart(wfsTastCtx, {
            type: 'line',
            data: {
                labels: timeLabels,
                datasets: [
                    {
                        label: 'Wire Feed Speed (m/min)',
                        data: wfsData,
                        borderColor: '#6366F1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y'
                    },
                    {
                        label: 'TAST',
                        data: tastData,
                        borderColor: '#F97316',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        yAxisID: 'y1',
                        segment: {
                            borderColor: (ctx) => {
                                // Highlight rapid changes in red
                                const index = ctx.p0DataIndex;
                                if (index >= 20 && index <= 22) {
                                    return '#DC2626';
                                }
                                return '#F97316';
                            },
                            backgroundColor: (ctx) => {
                                const index = ctx.p0DataIndex;
                                if (index >= 20 && index <= 22) {
                                    return 'rgba(220, 38, 38, 0.2)';
                                }
                                return 'rgba(249, 115, 22, 0.1)';
                            }
                        }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            }
                        }
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
                    },
                    annotation: {
                        annotations: {
                            box1: {
                                type: 'box',
                                xMin: 20,
                                xMax: 22,
                                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                                borderColor: 'rgba(255, 193, 7, 0.5)',
                                borderWidth: 1
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
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' m/min';
                            },
                            font: {
                                size: 11
                            }
                        },
                        min: 8,
                        max: 12
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        },
                        min: -200,
                        max: 200
                    }
                }
            }
        });
    }
}

// Simulate live updates
function simulateLiveUpdates() {
    // Update instant values
    setInterval(() => {
        const currentValue = 210 + Math.random() * 10 - 5;
        const voltageValue = 24.5 + Math.random() * 1 - 0.5;
        const wfsValue = 9.8 + Math.random() * 0.4 - 0.2;
        const tastValue = 35 + Math.random() * 20 - 10;

        // Update metric tiles
        updateMetricValue('current', currentValue, 210, 10);
        updateMetricValue('voltage', voltageValue, 24, 2);
        updateMetricValue('wfs', wfsValue, 10, 1);
        updateMetricValue('tast', tastValue, 0, 100);
    }, 2000);
}

function updateMetricValue(type, value, target, tolerance) {
    const tiles = document.querySelectorAll('.metric-tile');
    let tileIndex;

    switch(type) {
        case 'current': tileIndex = 0; break;
        case 'voltage': tileIndex = 1; break;
        case 'wfs': tileIndex = 2; break;
        case 'tast': tileIndex = 3; break;
    }

    const tile = tiles[tileIndex];
    if (!tile) return;

    const valueElement = tile.querySelector('.metric-value');
    const badge = tile.querySelector('.range-badge');
    const dot = tile.querySelector('.range-dot');

    if (valueElement) {
        valueElement.textContent = value.toFixed(1);
    }

    // Check if in range
    const inRange = Math.abs(value - target) <= tolerance;

    if (badge) {
        badge.textContent = inRange ? 'Within range' : 'Out of range';
        badge.className = 'range-badge ' + (inRange ? 'in-range' : 'out-of-range');
    }

    // Update dot position
    if (dot && type !== 'tast') {
        const min = target - tolerance * 2;
        const max = target + tolerance * 2;
        const position = ((value - min) / (max - min)) * 100;
        dot.style.left = Math.max(0, Math.min(100, position)) + '%';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Chart.js to load
    const checkChart = setInterval(() => {
        if (typeof Chart !== 'undefined') {
            clearInterval(checkChart);
            initCharts();
            initSparklines();
            simulateLiveUpdates();
        }
    }, 100);

    // Cell/Line selector
    const cellSelect = document.getElementById('cellSelect');
    if (cellSelect) {
        cellSelect.addEventListener('change', (e) => {
            console.log('Cell changed:', e.target.value);
            // In production, this would reload data for the selected cell
        });
    }

    // Time window selector
    const timeSelect = document.getElementById('timeSelect');
    if (timeSelect) {
        timeSelect.addEventListener('change', (e) => {
            console.log('Time window changed:', e.target.value);
            // In production, this would adjust the time range of displayed data
        });
    }

    // Alarm acknowledge button
    document.querySelectorAll('.btn-acknowledge').forEach(btn => {
        btn.addEventListener('click', () => {
            const originalText = btn.textContent;
            btn.textContent = '✓ Acknowledged';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 2000);
        });
    });

    // Override button
    document.querySelectorAll('.btn-override').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to override the auto action?')) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Overridden';
                btn.style.background = '#F59E0B';
                btn.style.color = 'white';
                btn.style.borderColor = '#F59E0B';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.style.borderColor = '';
                }, 2000);
            }
        });
    });

    // Simulate progress bar updates
    setInterval(() => {
        const progressBars = document.querySelectorAll('.table-progress-fill');
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width) || 0;
            if (currentWidth < 100) {
                bar.style.width = Math.min(100, currentWidth + 1) + '%';

                // Update progress text
                const progressText = bar.closest('.table-progress').querySelector('.table-progress-text');
                if (progressText) {
                    progressText.textContent = Math.min(100, currentWidth + 1) + '%';
                }
            }
        });

        // Update job progress
        const jobProgress = document.querySelector('.progress-fill');
        if (jobProgress) {
            const currentWidth = parseInt(jobProgress.style.width) || 66;
            if (currentWidth < 100) {
                jobProgress.style.width = Math.min(100, currentWidth + 1) + '%';
            }
        }
    }, 500);
});
