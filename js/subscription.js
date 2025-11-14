// Subscription Page JavaScript

// Date Picker Dropdown
const datePickerDropdown = document.getElementById('datePickerDropdown');
const dateDropdown = document.getElementById('dateDropdown');
const selectedDate = document.getElementById('selectedDate');

if (datePickerDropdown && dateDropdown) {
    datePickerDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dateDropdown.classList.toggle('active');
    });

    document.querySelectorAll('.date-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            // Copy the data-i18n key from the clicked option to the selected date display
            const i18nKey = option.getAttribute('data-i18n');
            if (i18nKey) {
                selectedDate.setAttribute('data-i18n', i18nKey);
            }
            selectedDate.textContent = option.textContent;
            dateDropdown.classList.remove('active');
        });
    });
}

// User Profile Dropdown
const userProfileDropdown = document.getElementById('userProfileDropdown');
const userDropdown = document.getElementById('userDropdown');

if (userProfileDropdown && userDropdown) {
    userProfileDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    if (dateDropdown) dateDropdown.classList.remove('active');
    if (userDropdown) userDropdown.classList.remove('active');
});

// Currency Toggle
const currencyOptions = document.querySelectorAll('.currency-option');
const priceKRW = document.querySelectorAll('.price-krw');
const priceUSD = document.querySelectorAll('.price-usd');

currencyOptions.forEach(option => {
    option.addEventListener('click', () => {
        const currency = option.dataset.currency;

        // Update active state
        currencyOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Toggle prices
        if (currency === 'krw') {
            priceKRW.forEach(price => price.style.display = '');
            priceUSD.forEach(price => price.style.display = 'none');
        } else {
            priceKRW.forEach(price => price.style.display = 'none');
            priceUSD.forEach(price => price.style.display = '');
        }
    });
});

// Language Toggle is handled in subscription-i18n.js

// Plan Button Click Handlers
const planButtons = document.querySelectorAll('.btn-plan');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const planName = e.target.closest('.pricing-card').querySelector('.plan-name').textContent;
        console.log(`플랜 선택: ${planName}`);

        // 실제 구현 시 여기에 결제 또는 문의 페이지로 이동하는 로직 추가
        if (planName === 'Enterprise' || planName === 'Enterprise+') {
            alert(`${planName} 플랜 문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다.`);
        } else if (planName === 'Free') {
            alert('무료 플랜 가입이 시작됩니다.');
        } else {
            alert(`${planName} 플랜 구독이 시작됩니다.`);
        }
    });
});

// CTA Button Handlers
const ctaButtons = document.querySelectorAll('.btn-cta-primary, .btn-cta-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-cta-primary')) {
            alert('영업팀 문의가 접수되었습니다. 곧 연락드리겠습니다.');
        } else {
            alert('데모 예약 페이지로 이동합니다.');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
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

// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Observe FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});
