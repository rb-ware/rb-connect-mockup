// ROI Simulator Calculator

let savingsChart = null;
let currentScenario = 'base';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initScenarioToggle();
    initCalculateButton();
    initChart();

    // Calculate initial values
    calculateROI();
});

// Scenario Toggle
function initScenarioToggle() {
    const scenarioButtons = document.querySelectorAll('.segment-btn');

    scenarioButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            scenarioButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentScenario = this.dataset.scenario;
            calculateROI();
        });
    });
}

// Calculate Button
function initCalculateButton() {
    const calculateBtn = document.getElementById('btnCalculate');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateROI);
    }
}

// Main Calculation Function
function calculateROI() {
    // Get input values
    const inputs = {
        currentWorkers: parseFloat(document.getElementById('currentWorkers').value) || 2,
        afterWorkers: parseFloat(document.getElementById('afterWorkers').value) || 1,
        workHours: parseFloat(document.getElementById('workHours').value) || 8,
        workDays: parseFloat(document.getElementById('workDays').value) || 250,
        laborCost: parseFloat(document.getElementById('laborCost').value) || 25000,
        dailyJobs: parseFloat(document.getElementById('dailyJobs').value) || 1000,
        currentDefectRate: parseFloat(document.getElementById('currentDefectRate').value) || 2.0,
        afterDefectRate: parseFloat(document.getElementById('afterDefectRate').value) || 0.8,
        defectCost: parseFloat(document.getElementById('defectCost').value) || 30000,
        subscriptionCost: parseFloat(document.getElementById('subscriptionCost').value) || 36000000,
        initialCost: parseFloat(document.getElementById('initialCost').value) || 30000000,
        amortizationYears: parseFloat(document.getElementById('amortizationYears').value) || 3
    };

    // Apply scenario modifiers
    let modifier = 1.0;
    if (currentScenario === 'conservative') {
        modifier = 0.5; // 50% of improvement
    } else if (currentScenario === 'optimistic') {
        modifier = 1.3; // 130% of improvement
    }

    // Calculate Labor Savings
    const workerReduction = inputs.currentWorkers - inputs.afterWorkers;
    const annualHours = inputs.workHours * inputs.workDays;
    const laborSavings = workerReduction * annualHours * inputs.laborCost * modifier;

    // Calculate Defect/Rework Savings
    const annualJobs = inputs.dailyJobs * inputs.workDays;
    const currentDefects = annualJobs * (inputs.currentDefectRate / 100);
    const afterDefects = annualJobs * (inputs.afterDefectRate / 100);
    const defectReduction = currentDefects - afterDefects;
    const defectSavings = defectReduction * inputs.defectCost * modifier;

    // Total Savings
    const totalSavings = laborSavings + defectSavings;

    // RB-Connect Annual Cost
    const annualAmortization = inputs.initialCost / inputs.amortizationYears;
    const totalAnnualCost = inputs.subscriptionCost + annualAmortization;

    // Net Benefit
    const netBenefit = totalSavings - totalAnnualCost;

    // Payback Period (in months)
    const paybackMonths = (inputs.initialCost + inputs.subscriptionCost) / (totalSavings / 12);

    // ROI Percentage
    const roiPercent = (netBenefit / totalAnnualCost) * 100;

    // Update UI
    updateResults({
        totalSavings,
        laborSavings,
        defectSavings,
        netBenefit,
        totalAnnualCost,
        paybackMonths,
        roiPercent
    });

    // Update Chart
    updateChart({
        laborSavings,
        defectSavings,
        totalAnnualCost
    });
}

// Update Results Display
function updateResults(results) {
    // Get current language
    const currentLang = localStorage.getItem('rbconnect-lang') || 'en';

    // Format numbers based on language
    const formatCurrency = (num) => {
        const rounded = Math.round(num);
        if (currentLang === 'en') {
            return '$' + (rounded / 1000).toFixed(0) + 'K';
        } else if (currentLang === 'tr') {
            return '₺' + rounded.toLocaleString('tr-TR');
        } else {
            return '₩ ' + rounded.toLocaleString('ko-KR');
        }
    };

    // Update KPI values
    document.getElementById('totalSavings').textContent = formatCurrency(results.totalSavings);
    document.getElementById('laborSavings').textContent = formatCurrency(results.laborSavings);
    document.getElementById('defectSavings').textContent = formatCurrency(results.defectSavings);
    document.getElementById('netBenefit').textContent = formatCurrency(results.netBenefit);

    // Payback period - translatable
    const paybackMonthsText = results.paybackMonths.toFixed(1);
    const paybackYearsText = (results.paybackMonths / 12).toFixed(1);

    let paybackText = '';
    if (results.paybackMonths < 12) {
        if (currentLang === 'en') {
            paybackText = `~${paybackMonthsText} months`;
        } else if (currentLang === 'tr') {
            paybackText = `~${paybackMonthsText} ay`;
        } else {
            paybackText = `약 ${paybackMonthsText} 개월`;
        }
    } else {
        if (currentLang === 'en') {
            paybackText = `~${paybackYearsText} years`;
        } else if (currentLang === 'tr') {
            paybackText = `~${paybackYearsText} yıl`;
        } else {
            paybackText = `약 ${paybackYearsText} 년`;
        }
    }
    document.getElementById('payback').textContent = paybackText;

    // ROI percentage - translatable
    const roiPercent = Math.round(results.roiPercent);
    if (currentLang === 'en') {
        document.getElementById('roiPercent').textContent =
            `ROI: ${roiPercent}% / year (Annual Net Benefit ÷ Annual Cost)`;
    } else if (currentLang === 'tr') {
        document.getElementById('roiPercent').textContent =
            `Yatırım Getirisi: ${roiPercent}% / yıl (Yıllık Net Fayda ÷ Yıllık Maliyet)`;
    } else {
        document.getElementById('roiPercent').textContent =
            `ROI: ${roiPercent}% / year (Annual Net Benefit ÷ Annual Cost)`;
    }

    // Update caption - translatable
    const captionMonths = Math.round(results.paybackMonths);
    const captionNetBenefit = Math.round(results.netBenefit / 10000000); // in tens of millions

    if (currentLang === 'en') {
        document.querySelector('.results-caption').textContent =
            `With this configuration, RB-Connect will offset the investment in approximately ${captionMonths} months, then deliver an annual net benefit of approximately $${(results.netBenefit / 1000000).toFixed(1)}M per line.`;
    } else if (currentLang === 'tr') {
        document.querySelector('.results-caption').textContent =
            `Bu yapılandırma ile RB-Connect, yaklaşık ${captionMonths} ay içinde yatırımı dengeleyecek, ardından hat başına yaklaşık ${captionNetBenefit}M₺ yıllık net fayda sağlayacaktır.`;
    } else {
        document.querySelector('.results-caption').textContent =
            `이 구성이 유지될 경우, RB-Connect는 약 ${captionMonths}개월 내에 투자비를 상쇄하고 이후 1개 라인 기준 연간 약 ${captionNetBenefit}천만 원 수준의 순효과를 기대할 수 있습니다.`;
    }
}

// Initialize Chart
function initChart() {
    const ctx = document.getElementById('savingsChart');
    if (!ctx) return;

    savingsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Labor Savings', 'Defect Reduction', 'RB-Connect Cost'],
            datasets: [{
                label: 'Amount (₩)',
                data: [50000000, 95000000, -66000000],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderColor: [
                    'rgb(34, 197, 94)',
                    'rgb(34, 197, 94)',
                    'rgb(239, 68, 68)'
                ],
                borderWidth: 2
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
                    callbacks: {
                        label: function(context) {
                            let value = context.parsed.y;
                            return '₩ ' + Math.abs(value).toLocaleString('ko-KR');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₩ ' + (value / 1000000).toFixed(0) + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Update Chart
function updateChart(data) {
    if (!savingsChart) return;

    savingsChart.data.datasets[0].data = [
        data.laborSavings,
        data.defectSavings,
        -data.totalAnnualCost
    ];

    savingsChart.update();
}

// Format number for display
function formatNumber(num) {
    return Math.round(num).toLocaleString('ko-KR');
}

// Auto-calculate on input change
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', calculateROI);
    });
});
