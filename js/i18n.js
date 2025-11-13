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
        'insight.4': '전체 플릿 가동률이 94%로 개선 (목표: 90%) - 3개월 추세.',

        // User Menu
        'user.profile': '프로필',
        'user.settings': '설정',
        'user.notifications': '알림',
        'user.help': '도움말',
        'user.logout': '로그아웃',

        // Live Operations Page
        'ops.title': '실시간 작업 & 알람 센터',
        'ops.subtitle': '실시간 용접 상태를 모니터링하고 문제를 사전에 예방하세요.',
        'ops.filter.cell': 'Cell / Line',
        'ops.filter.timewindow': 'Time Window',

        // Active Cell Summary
        'ops.cell.title': '활성 셀 – Line 3 · MIG Cell A',
        'ops.status.robot': 'Robot:',
        'ops.status.running': '작동 중',
        'ops.status.welder': 'Welder:',
        'ops.status.arcon': 'Arc On',
        'ops.status.safety': 'Safety:',
        'ops.status.ok': '정상',
        'ops.job.current': '현재 작업',
        'ops.job.pass': 'Pass:',
        'ops.job.time': 'Time:',

        // Live Metrics
        'ops.metric.current': '전류 (A)',
        'ops.metric.voltage': '전압 (V)',
        'ops.metric.wfs': '와이어 공급 속도',
        'ops.metric.tast': 'TAST',
        'ops.metric.target': 'Target:',
        'ops.metric.range': '정상 범위',
        'ops.metric.outofrange': '범위 초과',

        // Charts
        'ops.chart.cv': '전류 & 전압 (최근 30초)',
        'ops.chart.wfstast': '와이어 공급 속도 & TAST (최근 30초)',

        // Alarm Timeline
        'ops.alarm.title': '알람 & 이벤트 – 최근 10분',
        'ops.alarm.all': '전체',
        'ops.alarm.warning': '경고',
        'ops.alarm.critical': '위험',
        'ops.alarm.resolved': '해결됨',
        'ops.alarm.info': '정보',
        'ops.alarm.pending': '대기 중',

        // Alarm Events
        'ops.event.voltage.spike': '전압 급상승 감지 (31.8 V)',
        'ops.event.voltage.action': '자동 조치: 이송 속도 20% 감소',
        'ops.event.cycle.complete': '프로그램 사이클 완료',
        'ops.event.cycle.success': 'Job HYUNDAI_DOOR_STEP_11 성공적으로 완료',
        'ops.event.tast.drift': 'TAST 허용치 초과 (+420)',
        'ops.event.tast.confirm': '작업자 확인 필요',
        'ops.event.wfs.normalized': '와이어 공급 속도 정상화',
        'ops.event.wfs.target': '목표 범위로 복귀 (10.0 m/min)',
        'ops.event.current.fluctuation': '전류 변동 감지',
        'ops.event.current.stabilized': '자동 조치: 205 A로 안정화',

        // Running Jobs Table
        'ops.table.jobs': '활성 & 최근 용접 작업 (최근 10분)',
        'ops.table.starttime': '시작 시간',
        'ops.table.jobname': '작업 이름',
        'ops.table.cell': 'Cell / Line',
        'ops.table.duration': '소요 시간 (초)',
        'ops.table.risk': '품질 리스크',
        'ops.table.status': '상태',
        'ops.table.risk.low': '낮음',
        'ops.table.risk.medium': '중간',
        'ops.table.risk.high': '높음',
        'ops.table.status.running': '진행 중',
        'ops.table.status.completed': '완료',
        'ops.table.status.failed': '실패',

        // Detail Panel
        'ops.detail.title': '선택된 이벤트 상세',
        'ops.detail.time': '시간:',
        'ops.detail.job': '관련 작업:',
        'ops.detail.cell': 'Cell:',
        'ops.detail.snapshot': '신호 스냅샷',
        'ops.detail.system.action': '시스템 조치',
        'ops.detail.action.speed': '이송 속도를 60 cm/min에서 45 cm/min로 감소',
        'ops.detail.action.flag': '용접 후 품질 검사 플래그 설정',
        'ops.detail.operator.action': '작업자 조치',
        'ops.detail.confirm': '정상으로 확인'
    },

    en: {
        // Top Navigation
        'nav.site.all': 'Shipyard - All Lines',
        'nav.site.line1': 'Line 1',
        'nav.site.line2': 'Line 2',
        'nav.site.line3': 'Line 3',
        'nav.date.1d': 'Last 1 day',
        'nav.date.3d': 'Last 3 days',
        'nav.date.5d': 'Last 5 days',
        'nav.date.10d': 'Last 10 days',
        'nav.date.15d': 'Last 15 days',
        'nav.date.30d': 'Last 30 days',
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
        'insight.4': 'Overall fleet uptime improved to 94% (target: 90%) - 3 month trend.',

        // User Menu
        'user.profile': 'Profile',
        'user.settings': 'Settings',
        'user.notifications': 'Notifications',
        'user.help': 'Help',
        'user.logout': 'Logout',

        // Live Operations Page
        'ops.title': 'Live Operations & Alarm Center',
        'ops.subtitle': 'Monitor live welding conditions and prevent issues before they become failures.',
        'ops.filter.cell': 'Cell / Line',
        'ops.filter.timewindow': 'Time Window',

        // Active Cell Summary
        'ops.cell.title': 'Active Cell – Line 3 · MIG Cell A',
        'ops.status.robot': 'Robot:',
        'ops.status.running': 'Running',
        'ops.status.welder': 'Welder:',
        'ops.status.arcon': 'Arc On',
        'ops.status.safety': 'Safety:',
        'ops.status.ok': 'OK',
        'ops.job.current': 'Current Job',
        'ops.job.pass': 'Pass:',
        'ops.job.time': 'Time:',

        // Live Metrics
        'ops.metric.current': 'Current (A)',
        'ops.metric.voltage': 'Voltage (V)',
        'ops.metric.wfs': 'Wire Feed Speed',
        'ops.metric.tast': 'TAST',
        'ops.metric.target': 'Target:',
        'ops.metric.range': 'Within range',
        'ops.metric.outofrange': 'Out of range',

        // Charts
        'ops.chart.cv': 'Current & Voltage (Last 30 sec)',
        'ops.chart.wfstast': 'Wire Feed Speed & TAST (Last 30 sec)',

        // Alarm Timeline
        'ops.alarm.title': 'Alarms & Events – Last 10 min',
        'ops.alarm.all': 'All',
        'ops.alarm.warning': 'Warning',
        'ops.alarm.critical': 'Critical',
        'ops.alarm.resolved': 'Resolved',
        'ops.alarm.info': 'Info',
        'ops.alarm.pending': 'Pending',

        // Alarm Events
        'ops.event.voltage.spike': 'Voltage spike detected (31.8 V)',
        'ops.event.voltage.action': 'Auto action: reduced travel speed by 20%',
        'ops.event.cycle.complete': 'Program cycle completed',
        'ops.event.cycle.success': 'Job HYUNDAI_DOOR_STEP_11 finished successfully',
        'ops.event.tast.drift': 'TAST drift beyond limit (+420)',
        'ops.event.tast.confirm': 'Operator confirmation required',
        'ops.event.wfs.normalized': 'Wire feed speed normalized',
        'ops.event.wfs.target': 'Returned to target range (10.0 m/min)',
        'ops.event.current.fluctuation': 'Current fluctuation detected',
        'ops.event.current.stabilized': 'Auto action: stabilized at 205 A',

        // Running Jobs Table
        'ops.table.jobs': 'Active & Recent Weld Jobs (Last 10 min)',
        'ops.table.starttime': 'Start Time',
        'ops.table.jobname': 'Job Name',
        'ops.table.cell': 'Cell / Line',
        'ops.table.duration': 'Duration (s)',
        'ops.table.risk': 'Quality Risk',
        'ops.table.status': 'Status',
        'ops.table.risk.low': 'Low',
        'ops.table.risk.medium': 'Medium',
        'ops.table.risk.high': 'High',
        'ops.table.status.running': 'Running',
        'ops.table.status.completed': 'Completed',
        'ops.table.status.failed': 'Failed',

        // Detail Panel
        'ops.detail.title': 'Selected Event Detail',
        'ops.detail.time': 'Time:',
        'ops.detail.job': 'Related Job:',
        'ops.detail.cell': 'Cell:',
        'ops.detail.snapshot': 'Signal Snapshot',
        'ops.detail.system.action': 'System Action',
        'ops.detail.action.speed': 'Reduced travel speed from 60 cm/min to 45 cm/min',
        'ops.detail.action.flag': 'Flagged weld for post-weld quality check',
        'ops.detail.operator.action': 'Operator Action',
        'ops.detail.confirm': 'Confirm as Normal'
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
