// RB-Connect Executive Overview - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    console.log('RB-Connect Dashboard Loaded');

    // Live counter animation
    animateLiveCounter();

    // Tab switching for charts
    const chartTabs = document.querySelectorAll('.chart-tab');
    chartTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            chartTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Get the chart type from the button's data-i18n attribute
            const chartType = tab.getAttribute('data-i18n').includes('production') ? 'production' : 'quality';
            renderChart(chartType);
        });
    });

    // Initial chart render
    renderChart('production');

    // Menu item interactions
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Site selector dropdown functionality
    const siteSelector = document.getElementById('siteSelectorDropdown');
    const siteDropdown = document.getElementById('siteDropdown');
    const selectedSiteText = document.getElementById('selectedSite');

    if (siteSelector && siteDropdown) {
        // Toggle dropdown on click
        siteSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            siteDropdown.classList.toggle('show');
            siteSelector.classList.toggle('active');
        });

        // Handle option selection
        const siteOptions = document.querySelectorAll('.site-option');
        siteOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                // Remove selected class from all options
                siteOptions.forEach(opt => opt.classList.remove('selected'));

                // Add selected class to clicked option
                option.classList.add('selected');

                // Update selected text
                selectedSiteText.textContent = option.textContent;
                selectedSiteText.setAttribute('data-i18n', option.getAttribute('data-i18n'));

                // Close dropdown
                siteDropdown.classList.remove('show');
                siteSelector.classList.remove('active');

                console.log('Selected site:', option.getAttribute('data-value'));
            });
        });

        // Close site dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!siteSelector.contains(e.target)) {
                siteDropdown.classList.remove('show');
                siteSelector.classList.remove('active');
            }
        });
    }

    // Date picker dropdown functionality
    const datePicker = document.getElementById('datePickerDropdown');
    const dateDropdown = document.getElementById('dateDropdown');
    const selectedDateText = document.getElementById('selectedDate');

    if (datePicker && dateDropdown) {
        // Toggle dropdown on click
        datePicker.addEventListener('click', (e) => {
            e.stopPropagation();
            dateDropdown.classList.toggle('show');
            datePicker.classList.toggle('active');
        });

        // Handle option selection
        const dateOptions = document.querySelectorAll('.date-option');
        dateOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();

                // Remove selected class from all options
                dateOptions.forEach(opt => opt.classList.remove('selected'));

                // Add selected class to clicked option
                option.classList.add('selected');

                // Update selected text
                selectedDateText.textContent = option.textContent;
                selectedDateText.setAttribute('data-i18n', option.getAttribute('data-i18n'));

                // Close dropdown
                dateDropdown.classList.remove('show');
                datePicker.classList.remove('active');

                console.log('Selected date range:', option.getAttribute('data-value'));
            });
        });

        // Set default selected option (30d)
        const defaultOption = document.querySelector('.date-option[data-value="30d"]');
        if (defaultOption) {
            defaultOption.classList.add('selected');
        }

        // Close date dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!datePicker.contains(e.target)) {
                dateDropdown.classList.remove('show');
                datePicker.classList.remove('active');
            }
        });
    }

    // User profile dropdown functionality
    const userProfile = document.getElementById('userProfileDropdown');
    const userAvatar = document.querySelector('.user-avatar');
    const userDropdown = document.getElementById('userDropdown');

    if (userProfile && userAvatar && userDropdown) {
        // Toggle dropdown on click
        userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });

        // Handle menu item clicks
        const menuItems = document.querySelectorAll('.user-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();

                if (item.classList.contains('logout')) {
                    console.log('Logout clicked');
                    // Handle logout
                } else {
                    const action = item.querySelector('span[data-i18n]').getAttribute('data-i18n');
                    console.log('Menu action:', action);
                }

                userDropdown.classList.remove('show');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userProfile.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
    }

    // Add hover effects to KPI cards
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.transition = 'transform 0.2s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Table row click
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            const plantName = row.querySelector('.table-plant-name').textContent;
            console.log(`Clicked on: ${plantName}`);
            // In a real app, this would navigate to plant details
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    document.querySelectorAll('.card, .kpi-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Simulate real-time updates (for demo purposes)
    setTimeout(() => {
        const cards = document.querySelectorAll('.kpi-card');
        cards.forEach(card => {
            card.style.animation = 'pulse 0.5s ease';
        });
    }, 2000);
});

// Live Counter Animation
function animateLiveCounter() {
    const liveCountElement = document.getElementById('liveCount');
    if (!liveCountElement) return;

    let currentCount = 12243;

    // Increment counter every 3-5 seconds
    setInterval(() => {
        // Random increment between 1-3
        const increment = Math.floor(Math.random() * 3) + 1;
        currentCount += increment;

        // Format with comma
        liveCountElement.textContent = currentCount.toLocaleString();

        // Add subtle flash effect
        liveCountElement.style.transition = 'none';
        liveCountElement.style.color = '#34d399';
        setTimeout(() => {
            liveCountElement.style.transition = 'color 0.5s ease';
            liveCountElement.style.color = '#10b981';
        }, 100);
    }, Math.random() * 2000 + 3000); // Random between 3-5 seconds
}

// Chart rendering function
function renderChart(type) {
    const container = document.getElementById('chartContainer');
    if (!container) return;

    let chartHTML = '';

    if (type === 'production') {
        // Production Chart: Bar chart showing increasing weld counts
        chartHTML = `
            <svg width="100%" height="280" viewBox="0 0 600 280">
                <!-- Grid Lines -->
                <line x1="0" y1="240" x2="600" y2="240" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="180" x2="600" y2="180" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="120" x2="600" y2="120" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="60" x2="600" y2="60" stroke="#E5E7EB" stroke-width="1"/>

                <!-- Bar Chart (Daily Weld Count) - Blue bars showing growth -->
                <rect x="40" y="180" width="30" height="60" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="90" y="170" width="30" height="70" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="140" y="160" width="30" height="80" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="190" y="145" width="30" height="95" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="240" y="155" width="30" height="85" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="290" y="135" width="30" height="105" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="340" y="120" width="30" height="120" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="390" y="110" width="30" height="130" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="440" y="95" width="30" height="145" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="490" y="85" width="30" height="155" fill="#2563EB" opacity="0.8" rx="2"/>
                <rect x="540" y="70" width="30" height="170" fill="#2563EB" opacity="0.85" rx="2"/>

                <!-- Trend Line (Moving Average) - Teal -->
                <polyline points="55,195 105,185 155,175 205,160 255,165 305,150 355,135 405,125 455,110 505,100 555,85"
                          fill="none" stroke="#14B8A6" stroke-width="3" stroke-dasharray="5,5"/>

                <!-- Data Points on trend line -->
                <circle cx="555" cy="85" r="5" fill="#14B8A6"/>

                <!-- Legend Labels -->
                <text x="10" y="20" fill="#2563EB" font-size="12" font-weight="600" font-family="Inter, sans-serif">■ Daily Welds</text>
                <text x="130" y="20" fill="#14B8A6" font-size="12" font-weight="600" font-family="Inter, sans-serif">⋯ Trend</text>

                <!-- Y-axis labels -->
                <text x="5" y="245" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">0</text>
                <text x="5" y="185" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">500</text>
                <text x="5" y="125" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">1000</text>
                <text x="5" y="65" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">1500</text>
            </svg>
        `;
    } else {
        // Quality Chart: Line chart showing defect rate improvement
        chartHTML = `
            <svg width="100%" height="280" viewBox="0 0 600 280">
                <!-- Grid Lines -->
                <line x1="0" y1="240" x2="600" y2="240" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="180" x2="600" y2="180" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="120" x2="600" y2="120" stroke="#E5E7EB" stroke-width="1"/>
                <line x1="0" y1="60" x2="600" y2="60" stroke="#E5E7EB" stroke-width="1"/>

                <!-- Defect Rate Line (decreasing trend) - Orange -->
                <polyline points="55,90 105,95 155,100 205,115 255,125 305,145 355,165 405,180 455,195 505,210 555,220"
                          fill="none" stroke="#F97316" stroke-width="3"/>

                <!-- Target Line (0.5% target) - Green dashed -->
                <polyline points="0,210 600,210"
                          fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="8,4"/>

                <!-- Baseline (2.1% before RB-Connect) - Red dashed -->
                <polyline points="0,90 200,92"
                          fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>

                <!-- Area fill under defect rate line -->
                <polygon points="55,90 105,95 155,100 205,115 255,125 305,145 355,165 405,180 455,195 505,210 555,220 555,240 55,240"
                         fill="#F97316" opacity="0.1"/>

                <!-- Data Points -->
                <circle cx="55" cy="90" r="5" fill="#EF4444" stroke="#FFF" stroke-width="2"/>
                <circle cx="205" cy="115" r="5" fill="#F97316" stroke="#FFF" stroke-width="2"/>
                <circle cx="355" cy="165" r="5" fill="#F97316" stroke="#FFF" stroke-width="2"/>
                <circle cx="555" cy="220" r="5" fill="#10B981" stroke="#FFF" stroke-width="2"/>

                <!-- Legend Labels -->
                <text x="10" y="20" fill="#F97316" font-size="12" font-weight="600" font-family="Inter, sans-serif">● Defect Rate</text>
                <text x="140" y="20" fill="#10B981" font-size="12" font-weight="600" font-family="Inter, sans-serif">⋯ Target (0.5%)</text>
                <text x="290" y="20" fill="#EF4444" font-size="12" font-weight="600" font-family="Inter, sans-serif">⋯ Baseline (2.1%)</text>

                <!-- Y-axis labels (percentages) -->
                <text x="5" y="245" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">0%</text>
                <text x="5" y="215" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">0.5%</text>
                <text x="5" y="185" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">1.0%</text>
                <text x="5" y="125" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">1.5%</text>
                <text x="5" y="95" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">2.1%</text>
                <text x="5" y="65" fill="#6B7280" font-size="11" font-family="Inter, sans-serif">2.5%</text>

                <!-- Annotation for improvement -->
                <text x="450" y="230" fill="#10B981" font-size="10" font-weight="600" font-family="Inter, sans-serif">-81% improvement</text>
            </svg>
        `;
    }

    container.innerHTML = chartHTML;
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
    }
`;
document.head.appendChild(style);
