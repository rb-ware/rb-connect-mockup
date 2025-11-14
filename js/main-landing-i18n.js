// Main Landing Page - Internationalization (i18n)
// English, Korean, Turkish translations

const mainTranslations = {
    en: {
        // Navigation
        'nav.why': 'Why RB-Connect',
        'nav.evolution': 'Our Evolution',
        'nav.impact': 'Impact',
        'nav.proof': 'Proof',
        'nav.demo': 'Live Demo',
        'nav.subscribe': 'Subscribe',

        // Hero Section
        'hero.badge': 'Paradigm Shift in Welding Industry',
        'hero.title1': 'Beyond Simple Monitoring,',
        'hero.title2': 'A System Where Welding Evolves Itself',
        'hero.subtitle': 'An operating platform that manages robots, welders, and sensors as one,<br/>in a Closed Loop from design to execution to verification to improvement',
        'hero.stat1': 'Defect Reduction (3 months)',
        'hero.stat2.value': '8 months',
        'hero.stat2.label': 'ROI Achievement',
        'hero.stat3': 'Weld Data Tracking',
        'hero.cta1': 'Explore Platform',
        'hero.cta2': 'Get Materials',

        // What Section
        'what.title': 'What is RB-Connect?',
        'what.lead': '"An operating platform that integrates robots, welders, and sensors<br/>to <strong>automatically manage and improve welding quality"</strong>',
        'what.diagram1.title': 'Data Collection',
        'what.diagram1.item1': 'Work Conditions',
        'what.diagram1.item2': 'Wire · Gas · Base Material',
        'what.diagram1.item3': 'Current · Voltage · WFS · TAST',
        'what.diagram2.title': 'Real-time Analysis',
        'what.diagram2.item1': 'AI Quality Assessment',
        'what.diagram2.item2': 'Risk Zone Detection',
        'what.diagram2.item3': 'Condition Optimization',
        'what.diagram3.title': 'Auto Improvement',
        'what.diagram3.item1': 'Welding Condition Recommendation',
        'what.diagram3.item2': 'Parameter Adjustment',
        'what.diagram3.item3': 'Continuous Learning',
        'what.closedloop': 'Complete Closed Loop from Design → Execution → Verification → Improvement',

        // Value Section
        'value.title': 'What Changes with Our Solution?',
        'value.card1.title': 'Defect · Rework · Scrap Reduction',
        'value.card1.desc': 'Immediately after welding, the entire bead is evaluated section by section<br/><strong>and automatically tells you "where to check again"</strong>',
        'value.card1.metric': 'Defect Rate (3 months)',
        'value.card2.title': 'Reduced Setup and Training Burden',
        'value.card2.desc': 'Recommends verified Recipes for material, thickness, and position,<br/><strong>so beginners can start with veteran-level conditions</strong>',
        'value.card2.proof1': '✓ 100+ Verified Recipe Library',
        'value.card2.proof2': '✓ 80% Setup Time Reduction',
        'value.card3.title': 'Quality Management with Data',
        'value.card3.desc': 'Wire/gas/base material conditions, measured data, and action history are all recorded,<br/><strong>providing strong evidence for quality issues, audits, and claims</strong>',
        'value.card3.proof1': '✓ 100% Tracking of All Welds',
        'value.card3.proof2': '✓ 90% Customer Audit Response Time Reduction',

        // Differentiation Section
        'diff.title.line1': 'Why Not Other "Welding Monitoring"',
        'diff.title.line2': 'But RB-Connect?',
        'diff.subtitle': 'Most solutions end at <strong>"monitoring that shows raw values"</strong>.<br/>RB-Connect goes one step further.',
        'diff.col.others': 'Other Products',
        'diff.col.rbconnect': 'RB-Connect',
        'diff.row1.label': 'Data Collection',
        'diff.row1.others': 'Display current/voltage only',
        'diff.row1.rbconnect': 'Integrated conditions + measured data + action history',
        'diff.row2.label': 'Analysis',
        'diff.row2.others': 'Humans interpret graphs',
        'diff.row2.rbconnect': 'AI automatically presents risk zones, causes, and actions',
        'diff.row3.label': 'Improvement',
        'diff.row3.others': 'Experience-dependent',
        'diff.row3.rbconnect': 'Auto-recommended verified Recipes + continuous learning',
        'diff.row4.label': 'Result',
        'diff.row4.others': 'Post-response',
        'diff.row4.rbconnect': 'Prevention + self-optimization',

        // Evolution Section
        'evolution.title': 'Our Evolution: Past · Present · Future',
        'evolution.subtitle': 'From simple monitoring to autonomous evolution system',
        'evolution.past.period': '2023 - Past',
        'evolution.past.title': 'Leading Auto Teaching',
        'evolution.past.desc': 'Commercialized <strong>automatic teaching</strong> where robots learn trajectories on their own.<br/>Started with rare global-level technology',
        'evolution.past.achieve1': '✓ 70% Teaching Time Reduction',
        'evolution.past.achieve2': '✓ 90% Teaching Error Reduction',
        'evolution.present.period': '2025 - Present',
        'evolution.present.title': 'Big Data Quality Management (In Development)',
        'evolution.present.desc': 'Not just graphs, but <strong>data-based quality scores, risk zones, and recommended actions</strong>.<br/>Recommends optimal welding conditions (Recipes) with the same data',
        'evolution.present.achieve1': '✓ Learning 100K+ welding data',
        'evolution.present.achieve2': '✓ Accumulating quality assessment data',
        'evolution.present.achieve3': '✓ Auto-optimizing welding condition Recipes',
        'evolution.future.period': '2026+ - Future',
        'evolution.future.title': 'Self-Optimizing Welding System',
        'evolution.future.desc': 'Learning data from multiple customer sites,<br/><strong>AI autonomously adjusts conditions for highest quality welding</strong>',
        'evolution.future.quote1': '"All humans need to do is',
        'evolution.future.quote2': 'bring the robot to where it needs to weld"',

        // Impact Section
        'impact.title': 'Proven Impact',
        'impact.subtitle': 'Results proven by actual site data',
        'impact.card1.number': '81%',
        'impact.card1.label': 'Defect Reduction',
        'impact.card1.detail': '2.1% → 0.4% (3 months)',
        'impact.card1.source': '✓ Small Fab Shop Verified',
        'impact.card2.number': '$1.24M',
        'impact.card2.label': 'Annual Savings',
        'impact.card2.detail': 'Rework · Scrap · Downtime Reduction',
        'impact.card2.source': '✓ Average of 15 Installation Sites',
        'impact.card3.number': '8 months',
        'impact.card3.label': 'ROI Achievement',
        'impact.card3.detail': 'Investment Recovery Complete',
        'impact.card3.source': '✓ Including Implementation Period',
        'impact.card4.number': '100%',
        'impact.card4.label': 'Weld Tracking',
        'impact.card4.detail': 'All conditions · data · history recorded',
        'impact.card4.source': '✓ Perfect Traceability',

        // Proof Section
        'proof.title': 'Customer Voices',
        'proof.card1.text': 'Defect rate dropped from 2.1% to 0.4%.<br/>We fully recovered our investment in 8 months,<br/>and now we no longer pull all-nighters for quality issues.',
        'proof.card1.name': 'Park Jae-min, Production Director',
        'proof.card1.company': 'Small Fabrication Shop',
        'proof.card1.result': 'ROI 8 months / 81% Defect Reduction',
        'proof.card2.text': 'Real-time monitoring caught parameter anomalies immediately,<br/>preventing a $50K loss in one incident.<br/>I can see it getting smarter as data accumulates.',
        'proof.card2.name': 'Kim Seo-hyun, Quality Director',
        'proof.card2.company': 'Shipyard',
        'proof.card2.result': '1 Incident Prevention $50K Savings',
        'proof.card3.text': 'Now we manage the entire robot fleet at a glance,<br/>and AI catches patterns humans miss.<br/>Our factory has become a true smart factory.',
        'proof.card3.name': 'Cheon Min-su, Operations Manager',
        'proof.card3.company': 'Auto Parts Company',
        'proof.card3.result': '120 Robots Integrated Management',

        // Investment Section
        'invest.title': 'Why Focus on This Technology?',
        'invest.card1.title': 'Network Effect',
        'invest.card1.desc': 'More customers → more data accumulated,<br/>More data → stronger AI,<br/>Stronger AI → greater customer value',
        'invest.card1.highlight': '→ Structure that gets stronger as it accumulates',
        'invest.card2.title': 'Clear ROI',
        'invest.card2.desc': 'Average 8-month investment recovery<br/>Annual $1.24M savings effect<br/>Customers prove cost-effectiveness first',
        'invest.card2.highlight': '→ Used not because it\'s convenient, but because it makes money',
        'invest.card3.title': 'Scalable Platform',
        'invest.card3.desc': 'Auto Teaching (past) → Big Data Quality (present) → Autonomous Optimization (future)<br/>Clear step-by-step evolution roadmap',
        'invest.card3.highlight': '→ Tech leadership + market preemption',
        'invest.card4.title': 'Global Market',
        'invest.card4.desc': 'Welding robot market growing 12% annually<br/>Applicable across manufacturing, shipbuilding, automotive<br/>Data assets have no borders',
        'invest.card4.highlight': '→ Ready for global expansion beyond Korea',

        // Final CTA
        'cta.title': 'Turn field expertise into data assets,<br/>A system that raises both factory quality and profitability',
        'cta.subtitle': 'Customers initially use it because it\'s "convenient," but experience a structure that gets stronger as data accumulates.',
        'cta.btn1': 'Experience Platform',
        'cta.btn2': 'Contact Us',
        'cta.stat1': 'Installation Sites',
        'cta.stat2': 'Welding Data',
        'cta.stat3': 'Average Defect Reduction',

        // Footer
        'footer.tagline': 'A System Where Welding Evolves Itself',
        'footer.platform': 'Platform',
        'footer.company': 'Company',
        'footer.contact': 'Contact',
        'footer.contact.inquiry': 'Contact Us',
        'footer.contact.partner': 'Partnership',
        'footer.contact.hiring': 'Careers',
    },

    ko: {
        // Navigation
        'nav.why': 'Why RB-Connect',
        'nav.evolution': 'Our Evolution',
        'nav.impact': 'Impact',
        'nav.proof': 'Proof',
        'nav.demo': 'Live Demo',
        'nav.subscribe': '구독 서비스',

        // Hero Section
        'hero.badge': '용접 산업의 패러다임 전환',
        'hero.title1': '단순 모니터링을 넘어,',
        'hero.title2': '용접이 스스로 진화하는 시스템',
        'hero.subtitle': '로봇·용접기·센서를 하나로 묶어, 설계–실행–검증–개선까지<br/>Closed Loop로 관리하는 운영 플랫폼',
        'hero.stat1': '불량률 감소 (3개월)',
        'hero.stat2.value': '8개월',
        'hero.stat2.label': 'ROI 달성',
        'hero.stat3': '용접 데이터 추적',
        'hero.cta1': '플랫폼 둘러보기',
        'hero.cta2': '관련 자료 받기',

        // What Section
        'what.title': 'RB-Connect는 무엇인가?',
        'what.lead': '"로봇·용접기·센서를 하나로 묶어,<br/><strong>용접 품질을 자동으로 관리·개선하는 운영 플랫폼"</strong>',
        'what.diagram1.title': '데이터 수집',
        'what.diagram1.item1': '작업 조건',
        'what.diagram1.item2': '와이어·가스·모재',
        'what.diagram1.item3': '전류·전압·WFS·TAST',
        'what.diagram2.title': '실시간 분석',
        'what.diagram2.item1': 'AI 품질 평가',
        'what.diagram2.item2': '위험 구간 탐지',
        'what.diagram2.item3': '조건 최적화',
        'what.diagram3.title': '자동 개선',
        'what.diagram3.item1': '용접조건 추천',
        'what.diagram3.item2': '파라미터 조정',
        'what.diagram3.item3': '지속적 학습',
        'what.closedloop': '설계 → 실행 → 검증 → 개선의 완전한 Closed Loop',

        // Value Section
        'value.title': '우리 것을 쓰면, 무엇이 달라지나?',
        'value.card1.title': '불량·재용접·스크랩 감소',
        'value.card1.desc': '용접이 끝나는 즉시, 비드 전체를 구간별로 평가하고<br/><strong>"어디를 다시 봐야 하는지" 자동으로 알려줍니다</strong>',
        'value.card1.metric': '불량률 (3개월)',
        'value.card2.title': '세팅과 교육의 부담 축소',
        'value.card2.desc': '재질·두께·자세에 맞는 검증된 Recipe를 추천해,<br/><strong>초보도 베테랑 수준의 조건으로 시작</strong>할 수 있습니다',
        'value.card2.proof1': '✓ 100+ 검증된 Recipe 라이브러리',
        'value.card2.proof2': '✓ 조건 세팅 시간 80% 단축',
        'value.card3.title': '데이터가 남는 품질 관리',
        'value.card3.desc': '와이어/가스/모재 조건과 실측 데이터, 조치 이력까지 모두 기록되어<br/><strong>품질 이슈·감사·클레임 대응에 강력한 근거</strong>가 됩니다',
        'value.card3.proof1': '✓ 모든 용접 100% 추적 가능',
        'value.card3.proof2': '✓ 고객 감사 대응 시간 90% 감소',

        // Differentiation Section
        'diff.title.line1': '왜 다른 "용접 모니터링"이 아니라',
        'diff.title.line2': 'RB-Connect인가?',
        'diff.subtitle': '대부분의 솔루션은 <strong>"원시값을 보여주는 모니터링"</strong>에서 끝납니다.<br/>RB-Connect는 거기서 한 단계 더 나아갑니다.',
        'diff.col.others': '다른회사 제품',
        'diff.col.rbconnect': 'RB-Connect',
        'diff.row1.label': '데이터 수집',
        'diff.row1.others': '전류·전압만 표시',
        'diff.row1.rbconnect': '조건 + 실측 데이터 + 조치 이력 통합',
        'diff.row2.label': '분석',
        'diff.row2.others': '사람이 그래프를 해석',
        'diff.row2.rbconnect': 'AI가 위험 구간·원인·조치를 자동 제시',
        'diff.row3.label': '개선',
        'diff.row3.others': '경험 의존',
        'diff.row3.rbconnect': '검증된 Recipe 자동 추천 + 지속 학습',
        'diff.row4.label': '결과',
        'diff.row4.others': '사후 대응',
        'diff.row4.rbconnect': '사전 예방 + 스스로 최적화',

        // Evolution Section
        'evolution.title': 'Our Evolution: 과거·현재·미래',
        'evolution.subtitle': '단순 모니터링에서 자율 진화 시스템으로',
        'evolution.past.period': '2023 - 과거',
        'evolution.past.title': 'Auto Teaching 선도',
        'evolution.past.desc': '로봇이 스스로 궤적을 배워가는 <strong>자동 티칭</strong>을 상용화.<br/>전 세계에서도 드문 수준의 기술로 시작',
        'evolution.past.achieve1': '✓ 티칭 시간 70% 단축',
        'evolution.past.achieve2': '✓ 티칭 오차 90% 감소',
        'evolution.present.period': '2025 - 현재',
        'evolution.present.title': 'Big Data 기반 품질 관리 (개발 중)',
        'evolution.present.desc': '단순 그래프가 아니라, <strong>데이터 기반 품질 점수·위험 구간·권장 조치</strong> 제공.<br/>같은 데이터로 최적의 용접 조건(Recipe)까지 추천',
        'evolution.present.achieve1': '✓ 10만+ 용접 데이터 학습 중',
        'evolution.present.achieve2': '✓ 품질 평가 데이터 누적 중',
        'evolution.present.achieve3': '✓ 용접조건 Recipe 자동 최적화',
        'evolution.future.period': '2026+ - 미래',
        'evolution.future.title': '스스로 최적화되는 용접 시스템',
        'evolution.future.desc': '여러 고객 현장 데이터를 학습해,<br/><strong>AI가 스스로 조건을 조정하며 최고 품질로 용접</strong>',
        'evolution.future.quote1': '"사람이 할 일은',
        'evolution.future.quote2': '로봇을 용접해야 할 곳으로 가져다 놓는 것뿐"',

        // Impact Section
        'impact.title': '검증된 임팩트',
        'impact.subtitle': '실제 현장 데이터로 증명된 결과',
        'impact.card1.number': '81%',
        'impact.card1.label': '불량률 감소',
        'impact.card1.detail': '2.1% → 0.4% (3개월)',
        'impact.card1.source': '✓ Small Fab Shop 검증',
        'impact.card2.number': '$1.24M',
        'impact.card2.label': '연간 절감',
        'impact.card2.detail': '재작업·스크랩·다운타임 감소',
        'impact.card2.source': '✓ 15개 설치 현장 평균',
        'impact.card3.number': '8개월',
        'impact.card3.label': 'ROI 달성',
        'impact.card3.detail': '도입비 회수 완료',
        'impact.card3.source': '✓ 구현 기간 포함',
        'impact.card4.number': '100%',
        'impact.card4.label': '용접 추적',
        'impact.card4.detail': '모든 조건·데이터·이력 기록',
        'impact.card4.source': '✓ 완벽한 Traceability',

        // Proof Section
        'proof.title': '고객의 목소리',
        'proof.card1.text': '불량률이 2.1%에서 0.4%로 떨어졌습니다.<br/>8개월 만에 투자금을 완전히 회수했고,<br/>이제는 품질 이슈로 밤샘할 일이 없어졌습니다.',
        'proof.card1.name': '박재민 생산이사',
        'proof.card1.company': '중소 제관 공장',
        'proof.card1.result': 'ROI 8개월 / 불량률 81% 감소',
        'proof.card2.text': '실시간 모니터링이 파라미터 이상을 즉시 잡아내서<br/>한 번에 5천만 원 손실을 막았습니다.<br/>데이터가 쌓일수록 더 똑똑해지는 게 보입니다.',
        'proof.card2.name': '김서현 품질이사',
        'proof.card2.company': '조선소',
        'proof.card2.result': '1회 사고 방지 $50K 절감',
        'proof.card3.text': '이제 전체 로봇 Fleet을 한눈에 관리하고,<br/>AI가 사람이 못 보는 패턴까지 잡아냅니다.<br/>우리 공장이 진짜 스마트 팩토리가 됐어요.',
        'proof.card3.name': '천민수 운영본부장',
        'proof.card3.company': '자동차 부품사',
        'proof.card3.result': '120대 로봇 통합 관리',

        // Investment Section
        'invest.title': '왜 이 기술에 주목하는가?',
        'invest.card1.title': '네트워크 효과',
        'invest.card1.desc': '고객이 늘수록 데이터가 쌓이고,<br/>데이터가 쌓일수록 AI가 강해지며,<br/>AI가 강해질수록 고객 가치가 커집니다',
        'invest.card1.highlight': '→ 쌓일수록 강해지는 구조',
        'invest.card2.title': '명확한 ROI',
        'invest.card2.desc': '평균 8개월 투자 회수<br/>연간 $1.24M 절감 효과<br/>고객이 먼저 비용 대비 효과를 증명',
        'invest.card2.highlight': '→ 편해서 쓰는 게 아니라 돈이 되니까 쓴다',
        'invest.card3.title': '확장 가능한 플랫폼',
        'invest.card3.desc': 'Auto Teaching (과거) → Big Data 품질 (현재) → 자율 최적화 (미래)<br/>단계별 진화 로드맵 명확',
        'invest.card3.highlight': '→ 기술 리더십 + 시장 선점',
        'invest.card4.title': '글로벌 시장',
        'invest.card4.desc': '용접 로봇 시장 연평균 12% 성장<br/>제조·조선·자동차 전 산업 적용 가능<br/>데이터 자산은 국경 없음',
        'invest.card4.highlight': '→ 한국 넘어 글로벌 확장 준비',

        // Final CTA
        'cta.title': '현장의 노하우를 데이터 자산으로,<br/>공장의 품질과 수익성을 함께 올리는 시스템',
        'cta.subtitle': '고객은 처음에 "편해서" 쓰지만, 데이터가 쌓일수록 강해지는 구조를 경험하게 됩니다.',
        'cta.btn1': '플랫폼 체험하기',
        'cta.btn2': '문의하기',
        'cta.stat1': '설치 현장',
        'cta.stat2': '용접 데이터',
        'cta.stat3': '평균 불량 감소',

        // Footer
        'footer.tagline': '용접이 스스로 진화하는 시스템',
        'footer.platform': '플랫폼',
        'footer.company': '회사',
        'footer.contact': 'Contact',
        'footer.contact.inquiry': '문의하기',
        'footer.contact.partner': '파트너십',
        'footer.contact.hiring': '채용',
    },

    tr: {
        // Navigation
        'nav.why': 'Neden RB-Connect',
        'nav.evolution': 'Evrimiz',
        'nav.impact': 'Etki',
        'nav.proof': 'Kanıt',
        'nav.demo': 'Canlı Demo',
        'nav.subscribe': 'Abone Ol',

        // Hero Section
        'hero.badge': 'Kaynak Endüstrisinde Paradigma Değişimi',
        'hero.title1': 'Basit İzlemenin Ötesinde,',
        'hero.title2': 'Kaynağın Kendini Geliştirdiği Bir Sistem',
        'hero.subtitle': 'Robotları, kaynak makinelerini ve sensörleri tek bir sistem olarak yöneten,<br/>tasarımdan uygulamaya, doğrulamadan iyileştirmeye Kapalı Döngü işletim platformu',
        'hero.stat1': 'Kusur Azaltma (3 ay)',
        'hero.stat2.value': '8 ay',
        'hero.stat2.label': 'ROI Başarısı',
        'hero.stat3': 'Kaynak Veri Takibi',
        'hero.cta1': 'Platformu Keşfet',
        'hero.cta2': 'Materyalleri Al',

        // What Section
        'what.title': 'RB-Connect Nedir?',
        'what.lead': '"Robotları, kaynak makinelerini ve sensörleri entegre eden<br/>ve <strong>kaynak kalitesini otomatik olarak yöneten ve iyileştiren</strong> bir işletim platformu"',
        'what.diagram1.title': 'Veri Toplama',
        'what.diagram1.item1': 'Çalışma Koşulları',
        'what.diagram1.item2': 'Tel · Gaz · Baz Malzeme',
        'what.diagram1.item3': 'Akım · Voltaj · WFS · TAST',
        'what.diagram2.title': 'Gerçek Zamanlı Analiz',
        'what.diagram2.item1': 'AI Kalite Değerlendirmesi',
        'what.diagram2.item2': 'Risk Bölgesi Tespiti',
        'what.diagram2.item3': 'Koşul Optimizasyonu',
        'what.diagram3.title': 'Otomatik İyileştirme',
        'what.diagram3.item1': 'Kaynak Koşulu Önerisi',
        'what.diagram3.item2': 'Parametre Ayarı',
        'what.diagram3.item3': 'Sürekli Öğrenme',
        'what.closedloop': 'Tasarım → Uygulama → Doğrulama → İyileştirme Tam Kapalı Döngü',

        // Value Section
        'value.title': 'Çözümümüzle Neler Değişir?',
        'value.card1.title': 'Kusur · Yeniden İşleme · Hurda Azaltma',
        'value.card1.desc': 'Kaynak biter bitmez, tüm boncuk bölüm bölüm değerlendirilir<br/><strong>ve "nereyi tekrar kontrol etmeniz gerektiğini" otomatik olarak söyler</strong>',
        'value.card1.metric': 'Kusur Oranı (3 ay)',
        'value.card2.title': 'Kurulum ve Eğitim Yükü Azaltma',
        'value.card2.desc': 'Malzeme, kalınlık ve pozisyon için doğrulanmış Tarifler önerir,<br/><strong>böylece acemiler bile veteran seviyesinde koşullarla başlayabilir</strong>',
        'value.card2.proof1': '✓ 100+ Doğrulanmış Tarif Kütüphanesi',
        'value.card2.proof2': '✓ %80 Kurulum Süresi Azaltma',
        'value.card3.title': 'Verili Kalite Yönetimi',
        'value.card3.desc': 'Tel/gaz/baz malzeme koşulları, ölçülen veriler ve eylem geçmişi kaydedilir,<br/><strong>kalite sorunları, denetimler ve talepler için güçlü kanıt</strong> sağlar',
        'value.card3.proof1': '✓ Tüm Kaynakların %100 Takibi',
        'value.card3.proof2': '✓ %90 Müşteri Denetim Yanıt Süresi Azaltma',

        // Differentiation Section
        'diff.title.line1': 'Neden Diğer "Kaynak İzleme" Değil',
        'diff.title.line2': 'Ama RB-Connect?',
        'diff.subtitle': 'Çoğu çözüm <strong>"ham değerleri gösteren izleme"</strong> ile biter.<br/>RB-Connect bir adım daha ileri gider.',
        'diff.col.others': 'Diğer Ürünler',
        'diff.col.rbconnect': 'RB-Connect',
        'diff.row1.label': 'Veri Toplama',
        'diff.row1.others': 'Sadece akım/voltaj gösterir',
        'diff.row1.rbconnect': 'Koşullar + ölçülen veri + eylem geçmişi entegre',
        'diff.row2.label': 'Analiz',
        'diff.row2.others': 'İnsanlar grafikleri yorumlar',
        'diff.row2.rbconnect': 'AI otomatik olarak risk bölgeleri, nedenler ve eylemleri sunar',
        'diff.row3.label': 'İyileştirme',
        'diff.row3.others': 'Deneyime bağlı',
        'diff.row3.rbconnect': 'Otomatik önerilen doğrulanmış Tarifler + sürekli öğrenme',
        'diff.row4.label': 'Sonuç',
        'diff.row4.others': 'Sonradan yanıt',
        'diff.row4.rbconnect': 'Önleme + kendini optimize etme',

        // Evolution Section
        'evolution.title': 'Evrimiz: Geçmiş · Şimdi · Gelecek',
        'evolution.subtitle': 'Basit izlemeden özerk evrim sistemine',
        'evolution.past.period': '2023 - Geçmiş',
        'evolution.past.title': 'Otomatik Öğretim Öncülüğü',
        'evolution.past.desc': 'Robotların yörüngeleri kendi başlarına öğrendiği <strong>otomatik öğretimi</strong> ticarileştirdik.<br/>Nadir global seviye teknoloji ile başladık',
        'evolution.past.achieve1': '✓ %70 Öğretim Süresi Azaltma',
        'evolution.past.achieve2': '✓ %90 Öğretim Hatası Azaltma',
        'evolution.present.period': '2025 - Şimdi',
        'evolution.present.title': 'Büyük Veri Tabanlı Kalite Yönetimi (Geliştiriliyor)',
        'evolution.present.desc': 'Sadece grafikler değil, <strong>veri tabanlı kalite skorları, risk bölgeleri ve önerilen eylemler</strong>.<br/>Aynı verilerle optimal kaynak koşullarını (Tarifler) önerir',
        'evolution.present.achieve1': '✓ 100K+ kaynak verisi öğreniliyor',
        'evolution.present.achieve2': '✓ Kalite değerlendirme verileri birikiyor',
        'evolution.present.achieve3': '✓ Kaynak koşulu Tarifleri otomatik optimize ediliyor',
        'evolution.future.period': '2026+ - Gelecek',
        'evolution.future.title': 'Kendi Kendini Optimize Eden Kaynak Sistemi',
        'evolution.future.desc': 'Birden fazla müşteri sahası verisini öğrenerek,<br/><strong>AI özerk olarak koşulları en yüksek kalite kaynağı için ayarlar</strong>',
        'evolution.future.quote1': '"İnsanların yapması gereken tek şey',
        'evolution.future.quote2': 'robotu kaynak yapması gereken yere getirmek"',

        // Impact Section
        'impact.title': 'Kanıtlanmış Etki',
        'impact.subtitle': 'Gerçek saha verileriyle kanıtlanmış sonuçlar',
        'impact.card1.number': '%81',
        'impact.card1.label': 'Kusur Azaltma',
        'impact.card1.detail': '%2.1 → %0.4 (3 ay)',
        'impact.card1.source': '✓ Küçük Fabrika Doğrulandı',
        'impact.card2.number': '$1.24M',
        'impact.card2.label': 'Yıllık Tasarruf',
        'impact.card2.detail': 'Yeniden İşleme · Hurda · Duruş Süresi Azaltma',
        'impact.card2.source': '✓ 15 Kurulum Sahasının Ortalaması',
        'impact.card3.number': '8 ay',
        'impact.card3.label': 'ROI Başarısı',
        'impact.card3.detail': 'Yatırım Geri Dönüşü Tamamlandı',
        'impact.card3.source': '✓ Uygulama Süresi Dahil',
        'impact.card4.number': '%100',
        'impact.card4.label': 'Kaynak Takibi',
        'impact.card4.detail': 'Tüm koşullar · veri · geçmiş kaydedildi',
        'impact.card4.source': '✓ Mükemmel İzlenebilirlik',

        // Proof Section
        'proof.title': 'Müşteri Sesleri',
        'proof.card1.text': 'Kusur oranı %2.1\'den %0.4\'e düştü.<br/>8 ayda yatırımımızı tamamen geri aldık,<br/>ve artık kalite sorunları için gece vakti çalışmıyoruz.',
        'proof.card1.name': 'Park Jae-min, Üretim Müdürü',
        'proof.card1.company': 'Küçük Fabrikasyon Atölyesi',
        'proof.card1.result': 'ROI 8 ay / %81 Kusur Azaltma',
        'proof.card2.text': 'Gerçek zamanlı izleme parametre anomalilerini hemen yakaladı,<br/>bir olayda $50K kaybı önledi.<br/>Veri biriktiği için daha akıllı olduğunu görebiliyorum.',
        'proof.card2.name': 'Kim Seo-hyun, Kalite Müdürü',
        'proof.card2.company': 'Tersane',
        'proof.card2.result': '1 Olay Önleme $50K Tasarruf',
        'proof.card3.text': 'Şimdi tüm robot filosunu bir bakışta yönetiyoruz,<br/>ve AI insanların kaçırdığı kalıpları yakalıyor.<br/>Fabrikamız gerçek bir akıllı fabrika oldu.',
        'proof.card3.name': 'Cheon Min-su, Operasyon Müdürü',
        'proof.card3.company': 'Otomotiv Parça Şirketi',
        'proof.card3.result': '120 Robot Entegre Yönetim',

        // Investment Section
        'invest.title': 'Bu Teknolojiye Neden Odaklanılmalı?',
        'invest.card1.title': 'Ağ Etkisi',
        'invest.card1.desc': 'Daha fazla müşteri → daha fazla veri birikir,<br/>Daha fazla veri → daha güçlü AI,<br/>Daha güçlü AI → daha fazla müşteri değeri',
        'invest.card1.highlight': '→ Biriktikçe güçlenen yapı',
        'invest.card2.title': 'Net ROI',
        'invest.card2.desc': 'Ortalama 8 aylık yatırım geri dönüşü<br/>Yıllık $1.24M tasarruf etkisi<br/>Müşteriler önce maliyet etkinliğini kanıtlar',
        'invest.card2.highlight': '→ Rahat olduğu için değil, para kazandırdığı için kullanılır',
        'invest.card3.title': 'Ölçeklenebilir Platform',
        'invest.card3.desc': 'Otomatik Öğretim (geçmiş) → Büyük Veri Kalite (şimdi) → Özerk Optimizasyon (gelecek)<br/>Açık adım adım evrim yol haritası',
        'invest.card3.highlight': '→ Teknoloji liderliği + pazar öncülüğü',
        'invest.card4.title': 'Küresel Pazar',
        'invest.card4.desc': 'Kaynak robot pazarı yıllık %12 büyüyor<br/>İmalat, gemi inşa, otomotivde uygulanabilir<br/>Veri varlıklarının sınırı yok',
        'invest.card4.highlight': '→ Kore\'nin ötesinde küresel genişlemeye hazır',

        // Final CTA
        'cta.title': 'Saha uzmanlığını veri varlığına dönüştürün,<br/>Fabrika kalitesini ve karlılığını birlikte artıran bir sistem',
        'cta.subtitle': 'Müşteriler başlangıçta "rahat olduğu" için kullanır, ancak veri biriktiği için güçlenen bir yapı deneyimlerler.',
        'cta.btn1': 'Platformu Deneyimle',
        'cta.btn2': 'Bize Ulaşın',
        'cta.stat1': 'Kurulum Sahaları',
        'cta.stat2': 'Kaynak Verisi',
        'cta.stat3': 'Ortalama Kusur Azaltma',

        // Footer
        'footer.tagline': 'Kaynağın Kendini Geliştirdiği Bir Sistem',
        'footer.platform': 'Platform',
        'footer.company': 'Şirket',
        'footer.contact': 'İletişim',
        'footer.contact.inquiry': 'Bize Ulaşın',
        'footer.contact.partner': 'Ortaklık',
        'footer.contact.hiring': 'Kariyer',
    }
};

// Get current language from localStorage
function getCurrentMainLanguage() {
    return localStorage.getItem('rbconnect-main-lang') || 'en';
}

// Set language
function setMainLanguage(lang) {
    localStorage.setItem('rbconnect-main-lang', lang);
    applyMainTranslations(lang);
}

// Apply translations
function applyMainTranslations(lang) {
    const t = mainTranslations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if translation contains HTML (like <br/>)
            if (t[key].includes('<br/>') || t[key].includes('<strong>')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-option-main').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize
function initMainI18n() {
    const currentLang = getCurrentMainLanguage();
    applyMainTranslations(currentLang);

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-option-main').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setMainLanguage(lang);
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainI18n);
} else {
    initMainI18n();
}
