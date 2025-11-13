// RB-Connect - Internationalization (i18n)
// 한글/영어 번역 데이터

const translations = {
    ko: {
        // Top Navigation
        'nav.site.all': '조선소 전체',
        'nav.site.line1': '1라인',
        'nav.site.line2': '2라인',
        'nav.site.line3': '3라인',
        'nav.date.1d': '최근 1일',
        'nav.date.3d': '최근 3일',
        'nav.date.5d': '최근 5일',
        'nav.date.10d': '최근 10일',
        'nav.date.15d': '최근 15일',
        'nav.date.30d': '최근 30일',
        'nav.live': '실시간',
        'nav.live.label': '오늘 용접',

        // Success Banner
        'banner.label': '지난달 성과:',
        'banner.text': '최근 3개월 평균 대비 불량률 감소 2.1% → 1.4% (280만원 절감)',
        'banner.badge': '실제 결과',

        // Sidebar Menu
        'menu.dashboard': '대시보드',
        'menu.operations': '실시간 작업',
        'menu.quality': '품질 관리',
        'menu.recipes': '레시피 & 플레이북',
        'menu.roi': 'ROI 시뮬레이터',
        'menu.fleet': '플릿 뷰',
        'menu.ai': '데이터 & AI 엔진',

        // Page Header
        'page.title': '경영진 개요 – 공장 성과 한눈에',
        'page.subtitle': 'RB-Connect가 귀사의 공장을 어떻게 개선하고 있는지 실제 수치로 확인하세요.',

        // KPI Cards
        'kpi.totalWelds': '총 용접 작업',
        'kpi.defectRate': '불량률',
        'kpi.cycleTime': '평균 사이클타임',
        'kpi.savings': '연간 절감액',
        'kpi.savings.value': '₩ 4천만원',
        'kpi.savings.trend': '예상 ₩ 9천만원 대비',

        'kpi.trend.increase': '전월 대비',
        'kpi.trend.defect': '도입 전 2.1% 대비',
        'kpi.trend.reduction': '시간 단축 달성',
        'kpi.trend.improvement': '개선',

        // Performance Chart
        'chart.title': '생산 & 품질 트렌드',
        'chart.subtitle': '최근 90일',
        'chart.tab.production': '생산',
        'chart.tab.quality': '품질',
        'chart.insight': '지난 30일 동안 불량률이 1.4% 감소했습니다.',

        // Impact Card
        'impact.title': 'RB-Connect 도입 전후 비교',
        'impact.subtitle': '측정된 개선 효과',
        'impact.labor': '인건비',
        'impact.defect': '불량률',
        'impact.rework': '재작업 시간',
        'impact.operators': '작업자',
        'impact.note': 'Hyundai A-line 데이터 기반 (2025년 1월–3월)',

        // Table
        'table.title': '상위 성과 로봇',
        'table.robot': '로봇 / 스테이션',
        'table.totalWelds': '총 용접',
        'table.defectRate': '불량률',
        'table.uptime': '가동률',
        'table.status': '상태',

        'table.robot1': 'Robot-A12 · Bay 1',
        'table.robot2': 'Welder-B05 · Line 2',
        'table.robot3': 'Robot-C33 · Station 3',
        'table.robot4': 'Welder-D08 · Bay 2',
        'table.robot5': 'Robot-E21 · Line 1',

        'badge.excellent': '우수',
        'badge.good': '양호',
        'badge.improving': '개선 중',
        'badge.stable': '안정',

        // Insights
        'insights.title': '주요 하이라이트 – 이번 달',
        'insight.1': 'Robot-A12가 이번 주 0.2% 불량률 달성 - 최고 성과 기록.',
        'insight.2': 'Welder-D08이 높은 불량률(0.8%) 표시 - 파라미터 조정 권장.',
        'insight.3': 'AI가 23개 잠재적 결함을 조기 감지 - 18개 부품 재작업 방지.',
        'insight.4': '전체 플릿 가동률이 94%로 개선 (목표: 90%) - 3개월 추세.'
    },

    en: {
        // Top Navigation
        'nav.site.all': 'Shipyard - All Lines',
        'nav.site.line1': 'Line 1',
        'nav.site.line2': 'Line 2',
        'nav.site.line3': 'Line 3',
        'nav.date': 'Last 30 days',
        'nav.live': 'Live Now',
        'nav.live.label': 'welds today',

        // Success Banner
        'banner.label': 'Latest Achievement:',
        'banner.text': 'Small Fab Shop reduced defects from 2.1% to 0.4% in 3 months - ROI achieved in 8 months',
        'banner.badge': 'Real Result',

        // Sidebar Menu
        'menu.dashboard': 'Dashboard',
        'menu.operations': 'Live Operations',
        'menu.quality': 'Quality Guardian',
        'menu.recipes': 'Recipes & Playbook',
        'menu.roi': 'ROI Simulator',
        'menu.fleet': 'Fleet View',
        'menu.ai': 'Data & AI Engine',

        // Page Header
        'page.title': 'Executive Overview – Plant Performance at a Glance',
        'page.subtitle': 'See how RB-Connect is improving your factory – in real numbers.',

        // KPI Cards
        'kpi.totalWelds': 'Total Weld Jobs',
        'kpi.defectRate': 'Defect Rate',
        'kpi.cycleTime': 'Avg Cycle Time',
        'kpi.savings': 'Annual Savings',
        'kpi.savings.value': '$1.24M',
        'kpi.savings.trend': 'vs $890K projected',

        'kpi.trend.increase': 'vs previous month',
        'kpi.trend.defect': 'from 2.1% (baseline)',
        'kpi.trend.reduction': 'Time reduction achieved',
        'kpi.trend.improvement': 'improvement',

        // Performance Chart
        'chart.title': 'Production & Quality Trend',
        'chart.subtitle': 'Last 90 days',
        'chart.tab.production': 'Production',
        'chart.tab.quality': 'Quality',
        'chart.insight': 'Defect rate has decreased by 1.4% over the last 30 days.',

        // Impact Card
        'impact.title': 'Impact vs Before RB-Connect',
        'impact.subtitle': 'Measured improvement',
        'impact.labor': 'Labor Cost',
        'impact.defect': 'Defect Rate',
        'impact.rework': 'Rework Time',
        'impact.operators': 'operators',
        'impact.note': 'Based on Hyundai A-line data (Jan–Mar 2025)',

        // Table
        'table.title': 'Top Performing Robots',
        'table.robot': 'Robot / Station',
        'table.totalWelds': 'Total Welds',
        'table.defectRate': 'Defect Rate',
        'table.uptime': 'Uptime',
        'table.status': 'Status',

        'table.robot1': 'Robot-A12 · Bay 1',
        'table.robot2': 'Welder-B05 · Line 2',
        'table.robot3': 'Robot-C33 · Station 3',
        'table.robot4': 'Welder-D08 · Bay 2',
        'table.robot5': 'Robot-E21 · Line 1',

        'badge.excellent': 'Excellent',
        'badge.good': 'Good',
        'badge.improving': 'Improving',
        'badge.stable': 'Stable',

        // Insights
        'insights.title': 'Key Highlights – This Month',
        'insight.1': 'Robot-A12 achieved 0.2% defect rate this week - best performance recorded.',
        'insight.2': 'Welder-D08 showing higher defects (0.8%) - recommended parameter adjustment.',
        'insight.3': 'AI detected 23 potential defects early - prevented rework on 18 parts.',
        'insight.4': 'Overall fleet uptime improved to 94% (target: 90%) - 3 month trend.'
    }
};

// 현재 언어 가져오기 (localStorage에서)
function getCurrentLanguage() {
    return localStorage.getItem('rbconnect-lang') || 'en';
}

// 언어 설정
function setLanguage(lang) {
    localStorage.setItem('rbconnect-lang', lang);
    applyTranslations(lang);
}

// 번역 적용
function applyTranslations(lang) {
    const t = translations[lang];

    // data-i18n 속성이 있는 모든 요소 찾기
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // 언어 선택 버튼 활성화 상태 업데이트
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
}

// 초기화
function initI18n() {
    const currentLang = getCurrentLanguage();
    applyTranslations(currentLang);

    // 언어 선택 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
}

// DOM 로드 후 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
