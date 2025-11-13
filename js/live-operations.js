// Live Operations - Real-time Data Simulation

// Data history for sparklines
const metricsHistory = {
    current: Array(30).fill(205),
    voltage: Array(30).fill(24.5),
    wfs: Array(30).fill(10),
    tast: Array(30).fill(125)  // Start with out-of-range value
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Live Operations Page Loaded');

    // Initialize live metrics animation
    animateLiveMetrics();

    // Initialize sparklines
    initializeSparklines();

    // Initialize charts
    renderCurrentVoltageChart();
    renderWFSTASTChart();
    renderDetailMiniChart();

    // Simulate real-time data updates
    setInterval(updateLiveMetrics, 2000);
    setInterval(updateSparklines, 2000);
});

// Live Metrics Animation
function animateLiveMetrics() {
    const metrics = {
        current: { element: document.getElementById('metricCurrent'), base: 210, range: 10 },
        voltage: { element: document.getElementById('metricVoltage'), base: 24.5, range: 1 },
        wfs: { element: document.getElementById('metricWFS'), base: 9.8, range: 0.5 },
        tast: { element: document.getElementById('metricTAST'), base: 35, range: 20 }
    };

    Object.keys(metrics).forEach(key => {
        const metric = metrics[key];
        if (metric.element) {
            const unit = key === 'wfs' ? '<span class="metric-unit">m/min</span>' : '';
            const prefix = key === 'tast' && metric.base >= 0 ? '+' : '';
            metric.element.innerHTML = `${prefix}${metric.base}${unit}`;
        }
    });
}

function updateLiveMetrics() {
    // Update Current with animation
    const currentEl = document.getElementById('metricCurrent');
    if (currentEl) {
        const oldValue = parseFloat(currentEl.textContent) || 205;
        const newCurrent = oldValue + (Math.random() - 0.5) * 8; // Fluctuate ±4A
        const clampedCurrent = Math.max(195, Math.min(215, newCurrent));

        // Animate the change
        animateValue(currentEl, oldValue, clampedCurrent, 500, 0);
    }

    // Update Voltage with animation
    const voltageEl = document.getElementById('metricVoltage');
    if (voltageEl) {
        const oldValue = parseFloat(voltageEl.textContent) || 24.5;
        const newVoltage = oldValue + (Math.random() - 0.5) * 0.6; // Fluctuate ±0.3V
        const clampedVoltage = Math.max(23.5, Math.min(25.5, newVoltage));

        animateValue(voltageEl, oldValue, clampedVoltage, 500, 1);
    }

    // Update WFS with animation
    const wfsEl = document.getElementById('metricWFS');
    if (wfsEl) {
        const oldText = wfsEl.textContent.replace('m/min', '').trim();
        const oldValue = parseFloat(oldText) || 10;
        const newWFS = oldValue + (Math.random() - 0.5) * 0.4; // Fluctuate ±0.2
        const clampedWFS = Math.max(9.3, Math.min(10.7, newWFS));

        animateValue(wfsEl, oldValue, clampedWFS, 500, 1, '<span class="metric-unit">m/min</span>');
    }

    // Update TAST with animation (keep it out of range)
    const tastEl = document.getElementById('metricTAST');
    if (tastEl) {
        const oldText = tastEl.textContent.replace('+', '').replace('-', '');
        const oldValue = parseFloat(oldText) || 125;
        const newTAST = oldValue + (Math.random() - 0.5) * 15; // Fluctuate ±7.5
        const clampedTAST = Math.max(105, Math.min(145, newTAST)); // Keep above ±100 range

        animateValue(tastEl, oldValue, clampedTAST, 500, 0, '', '+');
    }
}

// Animate value changes smoothly
function animateValue(element, start, end, duration, decimals = 0, suffix = '', prefix = '') {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const current = start + (end - start) * easeProgress;
        const displayValue = current.toFixed(decimals);

        element.innerHTML = `${prefix}${displayValue}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Initialize Sparklines
function initializeSparklines() {
    renderSparkline('sparklineCurrent', metricsHistory.current, '#2563EB', 190, 220);
    renderSparkline('sparklineVoltage', metricsHistory.voltage, '#14B8A6', 22, 28);
    renderSparkline('sparklineWFS', metricsHistory.wfs, '#6366F1', 8, 12);
    renderSparkline('sparklineTAST', metricsHistory.tast, '#F97316', 0, 150); // Extended range for out-of-range values
}

// Render Sparkline
function renderSparkline(elementId, data, color, minY, maxY) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const width = container.offsetWidth || 200;
    const height = 40;
    const points = data.length;

    // Generate SVG path
    const pathData = data.map((value, index) => {
        const x = (index / (points - 1)) * width;
        const y = height - ((value - minY) / (maxY - minY)) * height;
        return `${x},${Math.max(0, Math.min(height, y))}`;
    }).join(' ');

    const svg = `
        <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
            <!-- Area fill -->
            <polygon points="0,${height} ${pathData} ${width},${height}"
                     fill="${color}" opacity="0.1"/>
            <!-- Line -->
            <polyline points="${pathData}"
                      fill="none" stroke="${color}" stroke-width="2"/>
            <!-- Last point -->
            <circle cx="${width}" cy="${height - ((data[data.length - 1] - minY) / (maxY - minY)) * height}"
                    r="3" fill="${color}"/>
        </svg>
    `;

    container.innerHTML = svg;
}

// Update Sparklines with new data
function updateSparklines() {
    // Get current values from display
    const currentEl = document.getElementById('metricCurrent');
    const voltageEl = document.getElementById('metricVoltage');
    const wfsEl = document.getElementById('metricWFS');
    const tastEl = document.getElementById('metricTAST');

    if (currentEl) {
        const currentValue = parseFloat(currentEl.textContent) || 205;
        metricsHistory.current.shift();
        metricsHistory.current.push(currentValue);
        renderSparkline('sparklineCurrent', metricsHistory.current, '#2563EB', 190, 220);
    }

    if (voltageEl) {
        const voltageValue = parseFloat(voltageEl.textContent) || 24.5;
        metricsHistory.voltage.shift();
        metricsHistory.voltage.push(voltageValue);
        renderSparkline('sparklineVoltage', metricsHistory.voltage, '#14B8A6', 22, 28);
    }

    if (wfsEl) {
        const wfsText = wfsEl.textContent.replace('m/min', '').trim();
        const wfsValue = parseFloat(wfsText) || 10;
        metricsHistory.wfs.shift();
        metricsHistory.wfs.push(wfsValue);
        renderSparkline('sparklineWFS', metricsHistory.wfs, '#6366F1', 8, 12);
    }

    if (tastEl) {
        const tastText = tastEl.textContent.replace('+', '').replace('-', '');
        const tastValue = parseFloat(tastText) || 125;
        metricsHistory.tast.shift();
        metricsHistory.tast.push(tastValue);
        renderSparkline('sparklineTAST', metricsHistory.tast, '#F97316', 0, 150); // Extended range
    }
}

// Chart: Current & Voltage
function renderCurrentVoltageChart() {
    const container = document.getElementById('chartCurrentVoltage');
    if (!container) return;

    // Generate 30 data points (30 seconds)
    const timePoints = 30;
    const currentData = [];
    const voltageData = [];

    for (let i = 0; i < timePoints; i++) {
        // Current: baseline 200A with some variation
        const current = 200 + Math.sin(i * 0.3) * 15 + (Math.random() - 0.5) * 10;
        currentData.push(current);

        // Voltage: baseline 24V with some variation
        const voltage = 24 + Math.sin(i * 0.2) * 1.5 + (Math.random() - 0.5) * 0.5;
        voltageData.push(voltage);
    }

    const chartHTML = `
        <svg width="100%" height="200" viewBox="0 0 700 200">
            <!-- Grid Lines -->
            <line x1="50" y1="180" x2="680" y2="180" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="135" x2="680" y2="135" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="90" x2="680" y2="90" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="45" x2="680" y2="45" stroke="#E5E7EB" stroke-width="1"/>

            <!-- Range Bands -->
            <rect x="50" y="90" width="630" height="90" fill="#10B981" opacity="0.05"/>
            <line x1="50" y1="90" x2="680" y2="90" stroke="#10B981" stroke-width="1" stroke-dasharray="5,3" opacity="0.3"/>
            <line x1="50" y1="180" x2="680" y2="180" stroke="#10B981" stroke-width="1" stroke-dasharray="5,3" opacity="0.3"/>

            <!-- Current Line (Blue) -->
            <polyline points="${currentData.map((v, i) => {
                const x = 50 + (i / (timePoints - 1)) * 630;
                const y = 180 - ((v - 180) / 50) * 135; // Scale: 180-230A -> 180-45px
                return `${x},${y}`;
            }).join(' ')}"
            fill="none" stroke="#2563EB" stroke-width="2.5"/>

            <!-- Voltage Line (Teal) -->
            <polyline points="${voltageData.map((v, i) => {
                const x = 50 + (i / (timePoints - 1)) * 630;
                const y = 180 - ((v - 22) / 6) * 135; // Scale: 22-28V -> 180-45px
                return `${x},${y}`;
            }).join(' ')}"
            fill="none" stroke="#14B8A6" stroke-width="2.5"/>

            <!-- Last data points -->
            <circle cx="${50 + 630}" cy="${180 - ((currentData[timePoints-1] - 180) / 50) * 135}" r="4" fill="#2563EB"/>
            <circle cx="${50 + 630}" cy="${180 - ((voltageData[timePoints-1] - 22) / 6) * 135}" r="4" fill="#14B8A6"/>

            <!-- Y-axis labels (Left - Current) -->
            <text x="5" y="185" fill="#6B7280" font-size="11" font-family="Inter">180A</text>
            <text x="5" y="140" fill="#6B7280" font-size="11" font-family="Inter">195A</text>
            <text x="5" y="95" fill="#6B7280" font-size="11" font-family="Inter">210A</text>
            <text x="5" y="50" fill="#6B7280" font-size="11" font-family="Inter">225A</text>

            <!-- Y-axis labels (Right - Voltage) -->
            <text x="690" y="185" fill="#6B7280" font-size="11" font-family="Inter">22V</text>
            <text x="690" y="140" fill="#6B7280" font-size="11" font-family="Inter">24V</text>
            <text x="690" y="95" fill="#6B7280" font-size="11" font-family="Inter">26V</text>
            <text x="690" y="50" fill="#6B7280" font-size="11" font-family="Inter">28V</text>

            <!-- Legend -->
            <text x="60" y="20" fill="#2563EB" font-size="12" font-weight="600" font-family="Inter">● Current (A)</text>
            <text x="180" y="20" fill="#14B8A6" font-size="12" font-weight="600" font-family="Inter">● Voltage (V)</text>
            <text x="300" y="20" fill="#10B981" font-size="11" font-family="Inter">█ Target Range</text>

            <!-- X-axis time labels -->
            <text x="50" y="195" fill="#6B7280" font-size="10" font-family="Inter">-30s</text>
            <text x="350" y="195" fill="#6B7280" font-size="10" font-family="Inter">-15s</text>
            <text x="660" y="195" fill="#6B7280" font-size="10" font-family="Inter">Now</text>
        </svg>
    `;

    container.innerHTML = chartHTML;
}

// Chart: WFS & TAST
function renderWFSTASTChart() {
    const container = document.getElementById('chartWFSTAST');
    if (!container) return;

    const timePoints = 30;
    const wfsData = [];
    const tastData = [];

    for (let i = 0; i < timePoints; i++) {
        // WFS: baseline 10 m/min
        const wfs = 10 + Math.sin(i * 0.2) * 0.8 + (Math.random() - 0.5) * 0.3;
        wfsData.push(wfs);

        // TAST: more volatile
        let tast = 30 + Math.sin(i * 0.4) * 40 + (Math.random() - 0.5) * 30;
        // Add a spike around point 20
        if (i > 18 && i < 22) {
            tast += 100;
        }
        tastData.push(tast);
    }

    const chartHTML = `
        <svg width="100%" height="200" viewBox="0 0 700 200">
            <!-- Grid Lines -->
            <line x1="50" y1="180" x2="680" y2="180" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="135" x2="680" y2="135" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="90" x2="680" y2="90" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="50" y1="45" x2="680" y2="45" stroke="#E5E7EB" stroke-width="1"/>

            <!-- TAST Spike Warning Zone -->
            ${tastData.map((v, i) => {
                if (Math.abs(v) > 100) {
                    const x = 50 + (i / (timePoints - 1)) * 630;
                    return `<rect x="${x-10}" y="30" width="20" height="150" fill="#FEF3C7" opacity="0.4"/>`;
                }
                return '';
            }).join('')}

            <!-- WFS Line (Purple) -->
            <polyline points="${wfsData.map((v, i) => {
                const x = 50 + (i / (timePoints - 1)) * 630;
                const y = 180 - ((v - 8) / 4) * 135; // Scale: 8-12 m/min -> 180-45px
                return `${x},${y}`;
            }).join(' ')}"
            fill="none" stroke="#6366F1" stroke-width="2.5"/>

            <!-- TAST Line (Orange) -->
            <polyline points="${tastData.map((v, i) => {
                const x = 50 + (i / (timePoints - 1)) * 630;
                const y = 180 - ((v + 50) / 250) * 135; // Scale: -50 to +200 -> 180-45px
                return `${x},${Math.max(30, Math.min(180, y))}`;
            }).join(' ')}"
            fill="none" stroke="#F97316" stroke-width="2.5"/>

            <!-- Data points -->
            <circle cx="${50 + 630}" cy="${180 - ((wfsData[timePoints-1] - 8) / 4) * 135}" r="4" fill="#6366F1"/>
            <circle cx="${50 + 630}" cy="${Math.max(30, Math.min(180, 180 - ((tastData[timePoints-1] + 50) / 250) * 135))}" r="4" fill="#F97316"/>

            <!-- Y-axis labels (Left - WFS) -->
            <text x="5" y="185" fill="#6B7280" font-size="11" font-family="Inter">8</text>
            <text x="5" y="140" fill="#6B7280" font-size="11" font-family="Inter">9</text>
            <text x="5" y="95" fill="#6B7280" font-size="11" font-family="Inter">10</text>
            <text x="5" y="50" fill="#6B7280" font-size="11" font-family="Inter">11</text>

            <!-- Y-axis labels (Right - TAST) -->
            <text x="685" y="185" fill="#6B7280" font-size="10" font-family="Inter">-50</text>
            <text x="685" y="140" fill="#6B7280" font-size="10" font-family="Inter">+50</text>
            <text x="685" y="95" fill="#6B7280" font-size="10" font-family="Inter">+100</text>
            <text x="685" y="50" fill="#6B7280" font-size="10" font-family="Inter">+150</text>

            <!-- Legend -->
            <text x="60" y="20" fill="#6366F1" font-size="12" font-weight="600" font-family="Inter">● WFS (m/min)</text>
            <text x="200" y="20" fill="#F97316" font-size="12" font-weight="600" font-family="Inter">● TAST</text>
            <text x="310" y="20" fill="#D97706" font-size="11" font-family="Inter">█ Abnormal Zone</text>

            <!-- X-axis time labels -->
            <text x="50" y="195" fill="#6B7280" font-size="10" font-family="Inter">-30s</text>
            <text x="350" y="195" fill="#6B7280" font-size="10" font-family="Inter">-15s</text>
            <text x="660" y="195" fill="#6B7280" font-size="10" font-family="Inter">Now</text>
        </svg>
    `;

    container.innerHTML = chartHTML;
}

// Detail Mini Chart
function renderDetailMiniChart() {
    const container = document.getElementById('detailMiniChart');
    if (!container) return;

    const timePoints = 10;
    const currentData = [];
    const voltageData = [];

    for (let i = 0; i < timePoints; i++) {
        // Show a spike around the middle
        const current = i === 5 ? 235 : 200 + (Math.random() - 0.5) * 10;
        const voltage = i === 5 ? 31.8 : 24 + (Math.random() - 0.5) * 1;
        currentData.push(current);
        voltageData.push(voltage);
    }

    const chartHTML = `
        <svg width="100%" height="120" viewBox="0 0 300 120">
            <!-- Grid -->
            <line x1="20" y1="100" x2="280" y2="100" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="20" y1="60" x2="280" y2="60" stroke="#E5E7EB" stroke-width="1"/>
            <line x1="20" y1="20" x2="280" y2="20" stroke="#E5E7EB" stroke-width="1"/>

            <!-- Current Line -->
            <polyline points="${currentData.map((v, i) => {
                const x = 20 + (i / (timePoints - 1)) * 260;
                const y = 100 - ((v - 190) / 50) * 80;
                return `${x},${y}`;
            }).join(' ')}"
            fill="none" stroke="#2563EB" stroke-width="2"/>

            <!-- Voltage Line -->
            <polyline points="${voltageData.map((v, i) => {
                const x = 20 + (i / (timePoints - 1)) * 260;
                const y = 100 - ((v - 20) / 15) * 80;
                return `${x},${y}`;
            }).join(' ')}"
            fill="none" stroke="#F97316" stroke-width="2"/>

            <!-- Spike marker -->
            <circle cx="${20 + (5 / (timePoints - 1)) * 260}" cy="${100 - ((31.8 - 20) / 15) * 80}" r="5" fill="#EF4444" opacity="0.5"/>
            <text x="${20 + (5 / (timePoints - 1)) * 260 + 10}" y="${100 - ((31.8 - 20) / 15) * 80 - 5}" fill="#EF4444" font-size="10" font-weight="600">Spike</text>

            <!-- Legend -->
            <text x="20" y="15" fill="#2563EB" font-size="10" font-weight="600">Current</text>
            <text x="80" y="15" fill="#F97316" font-size="10" font-weight="600">Voltage</text>
        </svg>
    `;

    container.innerHTML = chartHTML;
}

// Alarm filter buttons
const alarmFilterBtns = document.querySelectorAll('.alarm-filter-btn');
alarmFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alarmFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        console.log('Filter alarms by:', filter);
        // In real app, filter alarm items based on type
    });
});

// Alarm item click - show detail
const alarmItems = document.querySelectorAll('.alarm-item');
alarmItems.forEach(item => {
    item.addEventListener('click', () => {
        alarmItems.forEach(i => i.style.background = '');
        item.style.background = 'rgba(37, 99, 235, 0.05)';
        console.log('Selected alarm item');
        // In real app, update detail panel with selected alarm data
    });
});

// Table row click
const tableRows = document.querySelectorAll('.ops-table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('click', () => {
        tableRows.forEach(r => r.classList.remove('table-row-active'));
        row.classList.add('table-row-active');
        console.log('Selected job:', row.querySelector('td:nth-child(2)').textContent);
    });
});

// Confirm button
const confirmBtn = document.querySelector('.btn-confirm');
if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
        alert('Event confirmed as normal. Clearing from pending status.');
        console.log('Event confirmed');
    });
}
