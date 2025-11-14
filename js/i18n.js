// RB-Connect - Internationalization (i18n)
// 한글/영어/터키어 번역 데이터

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

        // User Menu
        'user.profile': '프로필',
        'user.settings': '설정',
        'user.notifications': '알림',
        'user.help': '도움말',
        'user.logout': '로그아웃',

        // Success Banner
        'banner.label': '지난달 성과:',
        'banner.text': '최근 3개월 평균 대비 불량률 감소 2.1% → 1.4% (280만원 절감)',
        'banner.badge': '실제 결과',

        // Sidebar Menu
        'menu.home': '홈',
        'menu.dashboard': '대시보드',
        'menu.operations': '실시간 작업',
        'menu.quality': '품질 관리',
        'menu.recipes': '레시피 & 플레이북',
        'menu.pricing': '가격',
        'menu.roi': 'ROI 시뮬레이터',
        'menu.fleet': '플릿 뷰',
        'menu.ai': '데이터 & AI 엔진',

        // Page Header
        'page.title': '경영진 개요 – 공장 성과 한눈에',
        'page.subtitle': 'RB-Connect가 귀사의 공장을 어떻게 개선하고 있는지 실제 수치로 확인하세요.',

        // ROI Simulator
        'roi.title': 'ROI Simulator – RB-Connect 도입 효과 계산',
        'roi.subtitle': '현재 공장의 인력, 불량률, 재작업 비용을 바탕으로 RB-Connect 도입 시 연간 절감액과 투자 회수 기간을 보수적으로 추정합니다.',
        'roi.disclaimer': '※ 실제 계약·견적 시에는 현장 데이터를 기반으로 별도 상세 산출서를 제공합니다.',

        'roi.inputs.title': '입력 값 (한 생산 라인 기준)',
        'roi.section.process': '공정 / 라인 정보',
        'roi.section.labor': '인력 / 인건비',
        'roi.section.production': '생산량 / 불량 / 재작업 비용',
        'roi.section.cost': 'RB-Connect 비용',

        'roi.label.processType': '공정 유형 (Process Type)',
        'roi.label.lineType': '라인 유형 (Line Type)',
        'roi.label.currentWorkers': '현재 투입 인원 (명)',
        'roi.label.afterWorkers': 'RB-Connect 도입 후 인원 (명)',
        'roi.label.workHours': '일 근무 시간 (시간/일)',
        'roi.label.workDays': '연 근무 일수 (일/년)',
        'roi.label.laborCost': '1인당 인건비 (원/시간)',
        'roi.label.laborCostHint': '예: 시급 25,000원 ≈ 연 5,000만 원 수준',
        'roi.label.dailyJobs': '일 평균 용접 Job 수 (건/일)',
        'roi.label.currentDefectRate': '현재 불량률 (%)',
        'roi.label.afterDefectRate': 'RB-Connect 도입 후 예상 불량률 (%)',
        'roi.label.defectCost': '불량 1건당 비용 (원)',
        'roi.label.defectCostHint': '재료비 + 인건비 + 설비 점유 비용 포함 추정',
        'roi.label.subscriptionCost': '구독료 (라인당 / 연)',
        'roi.label.initialCost': '초기 구축비 (1회성)',
        'roi.label.amortizationYears': '초기 구축비 상각 기간 (년)',

        'roi.process.automotive': '자동차 차체 용접 (Automotive · Body shop)',
        'roi.process.shipbuilding': '조선 (Shipbuilding)',
        'roi.process.heavy': '중장비 (Heavy Equipment)',
        'roi.process.fabrication': '일반 제조 (General Fabrication)',

        'roi.line.robotAssist': '로봇 + 보조 작업자 (Robot + manual assist)',
        'roi.line.robotOnly': '로봇 전용 (Robot only)',
        'roi.line.manual': '수동 작업 (Manual)',

        'roi.btn.calculate': '계산하기',

        'roi.scenario.label': '시나리오',
        'roi.scenario.conservative': '보수적 (Conservative)',
        'roi.scenario.base': '기본 (Base case)',
        'roi.scenario.optimistic': '낙관적 (Optimistic)',

        'roi.kpi.totalSavings': '연간 총 절감액 (Annual Gross Savings)',
        'roi.kpi.laborSavings': '· 인력 절감:',
        'roi.kpi.defectSavings': '· 불량·재작업 절감:',
        'roi.kpi.netBenefit': '연간 순효과 (Annual Net Benefit)',
        'roi.kpi.netBenefitCaption': '연간 총 절감액 – RB-Connect 연간 비용',
        'roi.kpi.payback': '예상 투자 회수 기간 (Payback)',
        'roi.kpi.roiLabel': 'ROI',
        'roi.kpi.year': '/ year (Annual Net Benefit ÷ Annual Cost)',

        'roi.chart.title': 'Savings Breakdown',
        'roi.chart.labor': 'Labor Savings',
        'roi.chart.defect': 'Defect Reduction',
        'roi.chart.cost': 'RB-Connect Cost',

        'roi.results.caption': '이 구성이 유지될 경우, RB-Connect는 약 {months}개월 내에 투자비를 상쇄하고 이후 1개 라인 기준 연간 약 {benefit}천만 원 수준의 순효과를 기대할 수 있습니다.',

        'roi.assumptions.title': '모델 가정 (Assumptions)',
        'roi.assumption1': '한 개 생산 라인 기준으로 계산합니다. 동일 구조 라인이 여러 개일 경우, 결과에 라인 수를 곱하면 전체 효과를 볼 수 있습니다.',
        'roi.assumption2': '불량 1건당 비용은 재료·인건비·설비 점유를 포함한 공장 내부 기준을 사용해야 가장 정확합니다.',
        'roi.assumption3': '도입 후 불량률 개선 폭(2.0% → 0.8%)과 인력 절감(2명 → 1명)은 실제 RB-Connect 레퍼런스 평균 수준 가정입니다.',
        'roi.assumption4': '보수적 시나리오에서는 개선 폭을 50% 수준으로 줄여 계산합니다.',

        'roi.reference.title': '참고 사례 (Base Case 예시)',
        'roi.reference.factoryType': '공장 유형:',
        'roi.reference.factoryValue': '자동차 차체 용접 라인',
        'roi.reference.lineSetup': '라인 구성:',
        'roi.reference.lineSetupValue': '로봇 + 보조 작업자 2명 → RB-Connect 도입 후 1명',
        'roi.reference.production': '생산량:',
        'roi.reference.productionValue': '1,000 joints / day, 250 days / year',
        'roi.reference.defectRate': '현재 불량률:',
        'roi.reference.defectRateValue': '2.0% → 도입 후 0.8%',
        'roi.reference.rbConnect': 'RB-Connect:',
        'roi.reference.rbConnectValue': '라인당 연 3,600만 원 + 초기 3,000만 원 (3년 상각 기준)',
        'roi.reference.highlight': '→ Base case 기준: 약 4~6개월 내 투자 회수, 이후 연간 순효과 약 8천만 원/라인.',

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
        'nav.date.1d': 'Last 1 day',
        'nav.date.3d': 'Last 3 days',
        'nav.date.5d': 'Last 5 days',
        'nav.date.10d': 'Last 10 days',
        'nav.date.15d': 'Last 15 days',
        'nav.date.30d': 'Last 30 days',
        'nav.live': 'Live Now',
        'nav.live.label': 'welds today',

        // User Menu
        'user.profile': 'Profile',
        'user.settings': 'Settings',
        'user.notifications': 'Notifications',
        'user.help': 'Help',
        'user.logout': 'Logout',

        // Success Banner
        'banner.label': 'Latest Achievement:',
        'banner.text': 'Small Fab Shop reduced defects from 2.1% to 0.4% in 3 months - ROI achieved in 8 months',
        'banner.badge': 'Real Result',

        // Sidebar Menu
        'menu.home': 'Home',
        'menu.dashboard': 'Dashboard',
        'menu.operations': 'Live Operations',
        'menu.quality': 'Quality Guardian',
        'menu.recipes': 'Recipes & Playbook',
        'menu.pricing': 'Pricing',
        'menu.roi': 'ROI Simulator',
        'menu.fleet': 'Fleet View',
        'menu.ai': 'Data & AI Engine',

        // Page Header
        'page.title': 'Executive Overview – Plant Performance at a Glance',
        'page.subtitle': 'See how RB-Connect is improving your factory – in real numbers.',

        // ROI Simulator
        'roi.title': 'ROI Simulator – RB-Connect Impact Calculator',
        'roi.subtitle': 'Estimate annual savings and payback period conservatively based on your current labor, defect rate, and rework costs.',
        'roi.disclaimer': '※ Detailed calculations based on actual site data will be provided for contract proposals.',

        'roi.inputs.title': 'Input Values (per production line)',
        'roi.section.process': 'Process / Line Information',
        'roi.section.labor': 'Labor / Cost',
        'roi.section.production': 'Production / Defects / Rework',
        'roi.section.cost': 'RB-Connect Cost',

        'roi.label.processType': 'Process Type',
        'roi.label.lineType': 'Line Type',
        'roi.label.currentWorkers': 'Current Workers',
        'roi.label.afterWorkers': 'After RB-Connect Workers',
        'roi.label.workHours': 'Work Hours per Day',
        'roi.label.workDays': 'Work Days per Year',
        'roi.label.laborCost': 'Labor Cost per Hour',
        'roi.label.laborCostHint': 'e.g., $25/hr ≈ $50K/year',
        'roi.label.dailyJobs': 'Daily Weld Jobs',
        'roi.label.currentDefectRate': 'Current Defect Rate (%)',
        'roi.label.afterDefectRate': 'Expected Defect Rate after RB-Connect (%)',
        'roi.label.defectCost': 'Cost per Defect',
        'roi.label.defectCostHint': 'Material + labor + equipment time',
        'roi.label.subscriptionCost': 'Subscription (per line / year)',
        'roi.label.initialCost': 'Initial Setup Cost (one-time)',
        'roi.label.amortizationYears': 'Amortization Period (years)',

        'roi.process.automotive': 'Automotive Body Shop',
        'roi.process.shipbuilding': 'Shipbuilding',
        'roi.process.heavy': 'Heavy Equipment',
        'roi.process.fabrication': 'General Fabrication',

        'roi.line.robotAssist': 'Robot + Manual Assist',
        'roi.line.robotOnly': 'Robot Only',
        'roi.line.manual': 'Manual',

        'roi.btn.calculate': 'Calculate',

        'roi.scenario.label': 'Scenario',
        'roi.scenario.conservative': 'Conservative',
        'roi.scenario.base': 'Base Case',
        'roi.scenario.optimistic': 'Optimistic',

        'roi.kpi.totalSavings': 'Annual Gross Savings',
        'roi.kpi.laborSavings': '· Labor Savings:',
        'roi.kpi.defectSavings': '· Defect/Rework Savings:',
        'roi.kpi.netBenefit': 'Annual Net Benefit',
        'roi.kpi.netBenefitCaption': 'Annual Gross Savings – RB-Connect Annual Cost',
        'roi.kpi.payback': 'Expected Payback Period',
        'roi.kpi.roiLabel': 'ROI',
        'roi.kpi.year': '/ year (Annual Net Benefit ÷ Annual Cost)',

        'roi.chart.title': 'Savings Breakdown',
        'roi.chart.labor': 'Labor Savings',
        'roi.chart.defect': 'Defect Reduction',
        'roi.chart.cost': 'RB-Connect Cost',

        'roi.results.caption': 'With this configuration, RB-Connect will offset the investment in approximately {months} months, then deliver an annual net benefit of approximately ${benefit}M per line.',

        'roi.assumptions.title': 'Model Assumptions',
        'roi.assumption1': 'Calculated for one production line. For multiple identical lines, multiply the results by the number of lines.',
        'roi.assumption2': 'Cost per defect should use your internal standards including material, labor, and equipment costs for accuracy.',
        'roi.assumption3': 'Defect rate improvement (2.0% → 0.8%) and labor reduction (2 → 1 workers) are based on actual RB-Connect reference averages.',
        'roi.assumption4': 'Conservative scenario reduces improvement assumptions by 50%.',

        'roi.reference.title': 'Reference Case (Base Case Example)',
        'roi.reference.factoryType': 'Factory Type:',
        'roi.reference.factoryValue': 'Automotive Body Weld Line',
        'roi.reference.lineSetup': 'Line Config:',
        'roi.reference.lineSetupValue': 'Robot + 2 assist workers → 1 after RB-Connect',
        'roi.reference.production': 'Production:',
        'roi.reference.productionValue': '1,000 joints/day, 250 days/year',
        'roi.reference.defectRate': 'Current Defect Rate:',
        'roi.reference.defectRateValue': '2.0% → 0.8% after',
        'roi.reference.rbConnect': 'RB-Connect:',
        'roi.reference.rbConnectValue': '$36K/year + $30K initial (3-year amortization)',
        'roi.reference.highlight': '→ Base case: Payback in 4–6 months, then ~$80K annual net benefit per line.',

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
    },

    tr: {
        // Top Navigation
        'nav.site.all': 'Tersane - Tüm Hatlar',
        'nav.site.line1': 'Hat 1',
        'nav.site.line2': 'Hat 2',
        'nav.site.line3': 'Hat 3',
        'nav.date.1d': 'Son 1 gün',
        'nav.date.3d': 'Son 3 gün',
        'nav.date.5d': 'Son 5 gün',
        'nav.date.10d': 'Son 10 gün',
        'nav.date.15d': 'Son 15 gün',
        'nav.date.30d': 'Son 30 gün',
        'nav.live': 'Canlı',
        'nav.live.label': 'bugün kaynak',

        // User Menu
        'user.profile': 'Profil',
        'user.settings': 'Ayarlar',
        'user.notifications': 'Bildirimler',
        'user.help': 'Yardım',
        'user.logout': 'Çıkış',

        // Success Banner
        'banner.label': 'Son Başarı:',
        'banner.text': 'Küçük İmalat Tesisi 3 ayda hata oranını %2,1\'den %0,4\'e düşürdü - 8 ayda yatırım geri dönüşü sağlandı',
        'banner.badge': 'Gerçek Sonuç',

        // Sidebar Menu
        'menu.home': 'Ana Sayfa',
        'menu.dashboard': 'Gösterge Paneli',
        'menu.operations': 'Canlı Operasyonlar',
        'menu.quality': 'Kalite Koruyucu',
        'menu.recipes': 'Tarifler & Kılavuz',
        'menu.pricing': 'Fiyatlandırma',
        'menu.roi': 'Yatırım Getirisi Simülatörü',
        'menu.fleet': 'Filo Görünümü',
        'menu.ai': 'Veri & Yapay Zeka Motoru',

        // Page Header
        'page.title': 'Yönetici Özeti – Tesis Performansı Bir Bakışta',
        'page.subtitle': 'RB-Connect\'in fabrikanızı nasıl geliştirdiğini gerçek rakamlarla görün.',

        // ROI Simulator
        'roi.title': 'Yatırım Getirisi Simülatörü – RB-Connect Etki Hesaplayıcısı',
        'roi.subtitle': 'Mevcut işgücü, hata oranı ve yeniden işleme maliyetlerinize göre yıllık tasarruf ve geri ödeme süresini muhafazakar şekilde tahmin edin.',
        'roi.disclaimer': '※ Sözleşme teklifleri için gerçek saha verilerine dayalı detaylı hesaplamalar sağlanacaktır.',

        'roi.inputs.title': 'Giriş Değerleri (üretim hattı başına)',
        'roi.section.process': 'Süreç / Hat Bilgileri',
        'roi.section.labor': 'İşgücü / Maliyet',
        'roi.section.production': 'Üretim / Hatalar / Yeniden İşleme',
        'roi.section.cost': 'RB-Connect Maliyeti',

        'roi.label.processType': 'Süreç Tipi',
        'roi.label.lineType': 'Hat Tipi',
        'roi.label.currentWorkers': 'Mevcut Çalışan Sayısı',
        'roi.label.afterWorkers': 'RB-Connect Sonrası Çalışan',
        'roi.label.workHours': 'Günlük Çalışma Saati',
        'roi.label.workDays': 'Yıllık Çalışma Günü',
        'roi.label.laborCost': 'Saat Başı İşçilik Maliyeti',
        'roi.label.laborCostHint': 'ör., 25₺/saat ≈ 50K₺/yıl',
        'roi.label.dailyJobs': 'Günlük Kaynak İşi',
        'roi.label.currentDefectRate': 'Mevcut Hata Oranı (%)',
        'roi.label.afterDefectRate': 'RB-Connect Sonrası Beklenen Hata Oranı (%)',
        'roi.label.defectCost': 'Hata Başına Maliyet',
        'roi.label.defectCostHint': 'Malzeme + işçilik + ekipman süresi',
        'roi.label.subscriptionCost': 'Abonelik (hat başına / yıl)',
        'roi.label.initialCost': 'İlk Kurulum Maliyeti (tek seferlik)',
        'roi.label.amortizationYears': 'Amortisman Süresi (yıl)',

        'roi.process.automotive': 'Otomotiv Gövde Atölyesi',
        'roi.process.shipbuilding': 'Gemi İnşa',
        'roi.process.heavy': 'Ağır Ekipman',
        'roi.process.fabrication': 'Genel İmalat',

        'roi.line.robotAssist': 'Robot + Manuel Yardım',
        'roi.line.robotOnly': 'Sadece Robot',
        'roi.line.manual': 'Manuel',

        'roi.btn.calculate': 'Hesapla',

        'roi.scenario.label': 'Senaryo',
        'roi.scenario.conservative': 'Muhafazakar',
        'roi.scenario.base': 'Temel Durum',
        'roi.scenario.optimistic': 'İyimser',

        'roi.kpi.totalSavings': 'Yıllık Brüt Tasarruf',
        'roi.kpi.laborSavings': '· İşgücü Tasarrufu:',
        'roi.kpi.defectSavings': '· Hata/Yeniden İşleme Tasarrufu:',
        'roi.kpi.netBenefit': 'Yıllık Net Fayda',
        'roi.kpi.netBenefitCaption': 'Yıllık Brüt Tasarruf – RB-Connect Yıllık Maliyet',
        'roi.kpi.payback': 'Beklenen Geri Ödeme Süresi',
        'roi.kpi.roiLabel': 'Yatırım Getirisi',
        'roi.kpi.year': '/ yıl (Yıllık Net Fayda ÷ Yıllık Maliyet)',

        'roi.chart.title': 'Tasarruf Dağılımı',
        'roi.chart.labor': 'İşgücü Tasarrufu',
        'roi.chart.defect': 'Hata Azalması',
        'roi.chart.cost': 'RB-Connect Maliyeti',

        'roi.results.caption': 'Bu yapılandırma ile RB-Connect, yaklaşık {months} ay içinde yatırımı dengeleyecek, ardından hat başına yaklaşık {benefit}M₺ yıllık net fayda sağlayacaktır.',

        'roi.assumptions.title': 'Model Varsayımları',
        'roi.assumption1': 'Bir üretim hattı için hesaplanmıştır. Birden fazla özdeş hat için sonuçları hat sayısıyla çarpın.',
        'roi.assumption2': 'Hata başına maliyet, doğruluk için malzeme, işçilik ve ekipman maliyetlerini içeren dahili standartlarınızı kullanmalıdır.',
        'roi.assumption3': 'Hata oranı iyileştirmesi (%2,0 → %0,8) ve işgücü azalması (2 → 1 çalışan) gerçek RB-Connect referans ortalamalarına dayanmaktadır.',
        'roi.assumption4': 'Muhafazakar senaryo, iyileştirme varsayımlarını %50 azaltır.',

        'roi.reference.title': 'Referans Durum (Temel Durum Örneği)',
        'roi.reference.factoryType': 'Fabrika Tipi:',
        'roi.reference.factoryValue': 'Otomotiv Gövde Kaynak Hattı',
        'roi.reference.lineSetup': 'Hat Yapılandırması:',
        'roi.reference.lineSetupValue': 'Robot + 2 yardımcı çalışan → RB-Connect sonrası 1',
        'roi.reference.production': 'Üretim:',
        'roi.reference.productionValue': '1.000 ek/gün, yılda 250 gün',
        'roi.reference.defectRate': 'Mevcut Hata Oranı:',
        'roi.reference.defectRateValue': '%2,0 → sonra %0,8',
        'roi.reference.rbConnect': 'RB-Connect:',
        'roi.reference.rbConnectValue': '36K₺/yıl + 30K₺ ilk maliyet (3 yıl amortisman)',
        'roi.reference.highlight': '→ Temel durum: 4–6 ayda geri ödeme, ardından hat başına ~80K₺ yıllık net fayda.',

        // KPI Cards
        'kpi.totalWelds': 'Toplam Kaynak İşi',
        'kpi.defectRate': 'Hata Oranı',
        'kpi.cycleTime': 'Ort. Çevrim Süresi',
        'kpi.savings': 'Yıllık Tasarruf',
        'kpi.savings.value': '1,24M₺',
        'kpi.savings.trend': '890K₺ tahminine karşı',

        'kpi.trend.increase': 'önceki aya göre',
        'kpi.trend.defect': '%2,1\'den (temel)',
        'kpi.trend.reduction': 'Zaman azalması sağlandı',
        'kpi.trend.improvement': 'iyileştirme',

        // Performance Chart
        'chart.title': 'Üretim & Kalite Trendi',
        'chart.subtitle': 'Son 90 gün',
        'chart.tab.production': 'Üretim',
        'chart.tab.quality': 'Kalite',
        'chart.insight': 'Son 30 günde hata oranı %1,4 azaldı.',

        // Impact Card
        'impact.title': 'RB-Connect Öncesi ve Sonrası Etki',
        'impact.subtitle': 'Ölçülen iyileştirme',
        'impact.labor': 'İşçilik Maliyeti',
        'impact.defect': 'Hata Oranı',
        'impact.rework': 'Yeniden İşleme Süresi',
        'impact.operators': 'operatör',
        'impact.note': 'Hyundai A-hattı verilerine dayanmaktadır (Ocak–Mart 2025)',

        // Table
        'table.title': 'En İyi Performans Gösteren Robotlar',
        'table.robot': 'Robot / İstasyon',
        'table.totalWelds': 'Toplam Kaynak',
        'table.defectRate': 'Hata Oranı',
        'table.uptime': 'Çalışma Süresi',
        'table.status': 'Durum',

        'table.robot1': 'Robot-A12 · Bölge 1',
        'table.robot2': 'Kaynak-B05 · Hat 2',
        'table.robot3': 'Robot-C33 · İstasyon 3',
        'table.robot4': 'Kaynak-D08 · Bölge 2',
        'table.robot5': 'Robot-E21 · Hat 1',

        'badge.excellent': 'Mükemmel',
        'badge.good': 'İyi',
        'badge.improving': 'İyileştiriliyor',
        'badge.stable': 'Kararlı',

        // Insights
        'insights.title': 'Önemli Noktalar – Bu Ay',
        'insight.1': 'Robot-A12 bu hafta %0,2 hata oranına ulaştı - en iyi performans kaydedildi.',
        'insight.2': 'Kaynak-D08 daha yüksek hatalar gösteriyor (%0,8) - parametre ayarı önerilir.',
        'insight.3': 'Yapay zeka 23 potansiyel hatayı erken tespit etti - 18 parçada yeniden işleme önlendi.',
        'insight.4': 'Genel filo çalışma süresi %94\'e yükseldi (hedef: %90) - 3 aylık trend.'
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

    // ROI Simulator 페이지에서 계산 결과 다시 업데이트
    if (typeof calculateROI === 'function') {
        calculateROI();
    }
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
