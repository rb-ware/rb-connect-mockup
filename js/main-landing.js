// Main Landing Page JavaScript

// Translation Data
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.benefits': 'Benefits',
        'nav.roi': 'ROI Calculator',
        'nav.testimonials': 'Success Stories',
        'nav.dashboard': 'View Dashboard',
        'nav.demo': 'Request Demo',
        'hero.title.part1': 'Transform Welding',
        'hero.title.part2': 'From',
        'hero.title.chaos': 'Chaos',
        'hero.title.to': 'to',
        'hero.title.precision': 'Precision',
        'hero.subtitle': 'Real-time monitoring, AI-powered quality control, and predictive maintenance for modern welding operations. Stop firefighting. Start preventing.'
    },
    ko: {
        'nav.features': '기능',
        'nav.benefits': '장점',
        'nav.roi': 'ROI 계산기',
        'nav.testimonials': '성공 사례',
        'nav.dashboard': '대시보드 보기',
        'nav.demo': '데모 요청',
        'hero.title.part1': '용접을 혁신하세요',
        'hero.title.part2': '',
        'hero.title.chaos': '혼란',
        'hero.title.to': '에서',
        'hero.title.precision': '정밀',
        'hero.subtitle': '실시간 모니터링, AI 기반 품질 관리 및 예측 유지보수로 현대적인 용접 작업을 관리하세요. 문제 해결을 멈추고 예방을 시작하세요.'
    },
    tr: {
        'nav.features': 'Özellikler',
        'nav.benefits': 'Avantajlar',
        'nav.roi': 'ROI Hesaplayıcı',
        'nav.testimonials': 'Başarı Hikayeleri',
        'nav.dashboard': 'Kontrol Paneli',
        'nav.demo': 'Demo Talep Et',
        'hero.title.part1': 'Kaynağı Dönüştürün',
        'hero.title.part2': '',
        'hero.title.chaos': 'Kaostan',
        'hero.title.to': '',
        'hero.title.precision': 'Hassasiyete',
        'hero.subtitle': 'Modern kaynak operasyonları için gerçek zamanlı izleme, AI destekli kalite kontrol ve öngörülü bakım. Yangınla mücadeleyi bırakın. Önlemeye başlayın.'
    }
};

let currentLanguage = 'en';

// Update page content based on selected language
function updateLanguage(lang) {
    currentLanguage = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language selector display
    const langMap = {
        'en': 'EN',
        'ko': 'KO',
        'tr': 'TR'
    };
    document.getElementById('currentLang').textContent = langMap[lang];

    // Store preference
    localStorage.setItem('selectedLanguage', lang);
}

// Language Selector Dropdown
document.addEventListener('DOMContentLoaded', function() {
    const langSelector = document.getElementById('langSelectorDropdown');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(savedLang);

    // Toggle dropdown
    langSelector.addEventListener('click', function(e) {
        e.stopPropagation();
        langSelector.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        langSelector.classList.remove('open');
    });

    // Language option selection
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedLang = this.getAttribute('data-lang');
            updateLanguage(selectedLang);
            langSelector.classList.remove('open');
        });
    });
});

// ROI Calculator
function calculateROI() {
    // Get input values
    const weldVolume = parseFloat(document.getElementById('weldVolume').value) || 50000;
    const defectRate = parseFloat(document.getElementById('defectRate').value) || 2.5;
    const reworkCost = parseFloat(document.getElementById('reworkCost').value) || 150;

    // Calculate current defects
    const currentDefects = weldVolume * (defectRate / 100);

    // Apply 81% reduction (based on case study)
    const defectReduction = 0.81;
    const reducedDefects = currentDefects * (1 - defectReduction);

    // Calculate savings
    const defectsSaved = currentDefects - reducedDefects;
    const annualSavings = defectsSaved * reworkCost;
    const monthlySavings = annualSavings / 12;

    // Determine ROI timeline based on savings
    let roiTimeline;
    if (annualSavings > 1000000) {
        roiTimeline = '6-8 months';
    } else if (annualSavings > 500000) {
        roiTimeline = '8-10 months';
    } else {
        roiTimeline = '10-12 months';
    }

    // Update display
    document.getElementById('annualSavings').textContent = '$' + annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 });
    document.getElementById('monthlySavings').textContent = '$' + monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 });
    document.getElementById('roiTimeline').textContent = roiTimeline;
    document.getElementById('breakdown').textContent = `Based on 81% defect reduction (${currentDefects.toFixed(0)} → ${reducedDefects.toFixed(0)} defects)`;

    // Add animation effect
    const resultCards = document.querySelectorAll('.roi-result-card');
    resultCards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
        }, 10);
    });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.landing-nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navigation scroll effect
    const nav = document.querySelector('.landing-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Auto-calculate ROI on input change
    const roiInputs = document.querySelectorAll('.roi-input');
    roiInputs.forEach(input => {
        input.addEventListener('input', calculateROI);
    });

    // Initial calculation
    calculateROI();

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .benefit-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Stats counter animation
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(function() {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }

            // Format based on the element
            if (element.classList.contains('stat-value')) {
                if (element.textContent.includes('$')) {
                    element.textContent = '$' + current.toFixed(2) + 'M';
                } else if (element.textContent.includes('Months')) {
                    element.textContent = Math.round(current) + ' Months';
                } else if (element.textContent.includes('%')) {
                    element.textContent = current.toFixed(1) + '%';
                }
            }
        }, 16);
    }

    // Observe hero stats
    const heroStats = document.querySelectorAll('.hero-stat');
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const valueElement = entry.target.querySelector('.stat-value');
                // Add simple fade-in instead of counter animation
                valueElement.style.opacity = '0';
                setTimeout(() => {
                    valueElement.style.transition = 'opacity 0.6s ease-out';
                    valueElement.style.opacity = '1';
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    heroStats.forEach(stat => {
        heroObserver.observe(stat);
    });

    // Handle "Request Demo" button clicks
    const demoBtns = document.querySelectorAll('.btn-primary, .btn-primary-lg, .btn-primary-xl');
    demoBtns.forEach(btn => {
        if (btn.textContent.includes('Request Demo') || btn.textContent.includes('Get Started')) {
            btn.addEventListener('click', function() {
                alert('Demo request feature coming soon! Contact us at sales@rb-ware.com');
            });
        }
    });
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
