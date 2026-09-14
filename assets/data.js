/* ============================================================
   Yarbo Troubleshooting Site — Data
   All content is bilingual: each node carries zh / en text.
   ============================================================ */

/* ---------- UI strings ---------- */
const UI = {
  zh: {
    siteName: "Yarbo 故障排查",
    navIntro: "简介",
    navTrouble: "故障排查",
    navCodes: "常见错误代码",
    navVideos: "自修视频",
    navLearning: "学习视频",
    navUpdates: "更新资讯",
    searchPlaceholder: "搜索错误代码或关键词，例如 B009 / 蓝牙 / 出界",
    searchHint: "输入错误代码直接跳转到对应代码；输入现象关键词跳转到排查步骤",
    searchHintVideos: "输入关键词搜索维修视频标题",
    searchHintUpdates: "输入关键词搜索更新内容",
    searchPlaceholderVideos: "搜索维修视频，例如摄像头 / 电机 / 天线",
    searchPlaceholderUpdates: "搜索更新内容，例如 NetRTK / DC / Wi-Fi",
    searchNoResult: "没有找到匹配结果。未收录的错误代码代表暂时无法进行前置排查，请直接截屏上报 FSE。",
    modeQA: "分步模式",
    modeMindmap: "思维导图模式",
    start: "开始排查",
    restart: "重新开始",
    back: "返回上一步",
    copy: "一键复制",
    copied: "已复制",
    escalateTag: "需联系 FSE",
    resolvedTag: "问题已解决",
    infoTag: "参考信息",
    expand: "展开",
    collapse: "收起",
    emptyIntro: "内容整理中，敬请期待。",
    emptyVideos: "自修视频正在制作中，上线后将在此展示。",
    emptyLearning: "学习视频正在制作中，上线后将在此展示。",
    emptyUpdates: "暂无固件 / 软件更新记录，新版本发布后将第一时间在此更新。",
    codesIntro: "点击卡片查看完整排查步骤；每张卡片右上角可一键复制内容，方便发送给技术支持 (FSE)。",
    codesFooter: "未在下方列表中找到的错误代码，代表暂时无法进行前置排查，请直接截屏并上报 FSE。",
    treeIntro: "选择下方任一故障类别开始排查，或使用顶部搜索快速定位。",
    qaStepOf: "步骤",
    highFreq: "高频报错",
    versionCheck: "在排查前，请先前往 Version Information 确认固件是否为最新版本。",
    videosIntro: "按模块查找维修视频；点击模块标题展开/收起。每条视频右侧可一键复制标题和链接，方便发给用户或粘贴到工单。",
    linkPending: "视频待补充",
    driveNoLink: "Google Drive（链接见共享文件夹）",
    copyLinks: "复制",
    firmwareVersion: "固件版本",
    appVersion: "APP 版本",
    estCompletion: "预计发布完成时间",
    navCases: "案例分析",
    casesIntro: "点击卡片查看完整的问题分析和解决方案，再次点击收起。",
    caseProblem: "问题描述",
    caseAnalysis: "问题分析",
    caseSolution: "解决方案",
    caseFilterHeading: "按关键词筛选",
    caseFilterClear: "清除筛选",
    caseNoResult: "没有匹配所选筛选条件的案例。",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "更新内容",
    fullRollout: "全量发布",
  },
  en: {
    siteName: "Yarbo Troubleshooting",
    navIntro: "Intro",
    navTrouble: "Troubleshooting",
    navCodes: "Error Codes",
    navVideos: "Repair Videos",
    navLearning: "Learning",
    navUpdates: "Updates",
    searchPlaceholder: "Search an error code or keyword, e.g. B009 / bluetooth / boundary",
    searchHint: "Enter an error code to jump straight to it; enter a symptom keyword to jump to the troubleshooting steps",
    searchHintVideos: "Enter a keyword to search repair video titles",
    searchHintUpdates: "Enter a keyword to search the update content",
    searchPlaceholderVideos: "Search repair videos, e.g. camera / motor / antenna",
    searchPlaceholderUpdates: "Search update content, e.g. NetRTK / DC / Wi-Fi",
    searchNoResult: "No match found. A code that isn't listed means it can't be pre-diagnosed remotely — please take a screenshot and escalate to FSE directly.",
    modeQA: "Step by Step",
    modeMindmap: "Mind map mode",
    start: "Start diagnosis",
    restart: "Start over",
    back: "Back",
    copy: "Copy",
    copied: "Copied",
    escalateTag: "Contact FSE",
    resolvedTag: "Resolved",
    infoTag: "Reference",
    expand: "Expand",
    collapse: "Collapse",
    emptyIntro: "Content coming soon.",
    emptyVideos: "Self-repair videos are in production and will appear here once ready.",
    emptyLearning: "Learning videos are in production and will appear here once ready.",
    emptyUpdates: "No firmware / software updates yet. New releases will be posted here as soon as they're available.",
    codesIntro: "Click a card to see the full troubleshooting steps. Use the copy button on each card to send the details straight to support (FSE).",
    codesFooter: "A code that isn't listed below can't be pre-diagnosed remotely — please take a screenshot and escalate to FSE directly.",
    treeIntro: "Pick a category below to start, or use the search bar above to jump straight to a topic.",
    qaStepOf: "Step",
    highFreq: "High-frequency error",
    versionCheck: "Before troubleshooting, check Version Information to confirm the firmware is up to date.",
    videosIntro: "Browse repair videos by module — click a module heading to expand or collapse it. Each video has a copy button that copies its title and link(s), ready to paste into a message or ticket.",
    linkPending: "Video coming soon",
    driveNoLink: "Google Drive (link in shared folder)",
    copyLinks: "Copy",
    firmwareVersion: "Firmware version",
    appVersion: "App version",
    estCompletion: "Estimated rollout completion",
    navCases: "Case Studies",
    casesIntro: "Click a card to see the full analysis and solution; click again to collapse it.",
    caseProblem: "Problem",
    caseAnalysis: "Analysis",
    caseSolution: "Solution",
    caseFilterHeading: "Filter by keyword",
    caseFilterClear: "Clear filters",
    caseNoResult: "No cases match the selected filters.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "What's new",
    fullRollout: "Full rollout",
  },
  ja: {
    siteName: "Yarbo トラブルシューティング",
    navIntro: "はじめに",
    navTrouble: "トラブルシューティング",
    navCodes: "よくあるエラーコード",
    navVideos: "セルフ修理動画",
    navLearning: "学習動画",
    navUpdates: "更新情報",
    searchPlaceholder: "エラーコードやキーワードで検索（例：B009 / Bluetooth / 境界）",
    searchHint: "エラーコードを入力すると該当コードへ直接移動します。症状のキーワードを入力するとトラブルシューティング手順へ移動します",
    searchHintVideos: "キーワードを入力して修理動画のタイトルを検索します",
    searchHintUpdates: "キーワードを入力して更新内容を検索します",
    searchPlaceholderVideos: "修理動画を検索（例：カメラ / モーター / アンテナ）",
    searchPlaceholderUpdates: "更新内容を検索（例：NetRTK / DC / Wi-Fi）",
    searchNoResult: "一致する結果が見つかりませんでした。掲載されていないエラーコードは、現時点で事前診断ができないことを意味します。スクリーンショットを撮って直接 FSE にエスカレーションしてください。",
    modeQA: "ステップ形式",
    modeMindmap: "マインドマップ形式",
    start: "診断を開始",
    restart: "最初からやり直す",
    back: "戻る",
    copy: "コピー",
    copied: "コピーしました",
    escalateTag: "FSE に連絡",
    resolvedTag: "解決済み",
    infoTag: "参考情報",
    expand: "展開",
    collapse: "折りたたむ",
    emptyIntro: "内容準備中です。お楽しみに。",
    emptyVideos: "セルフ修理動画は準備中です。公開され次第ここに表示されます。",
    emptyLearning: "学習動画は準備中です。公開され次第ここに表示されます。",
    emptyUpdates: "現時点でファームウェア／ソフトウェアの更新情報はありません。新しいバージョンがリリースされ次第、こちらに掲載します。",
    codesIntro: "カードをクリックすると詳しい手順が表示されます。各カード右上の「コピー」ボタンでサポート（FSE）に送る内容をそのままコピーできます。",
    codesFooter: "以下のリストにないエラーコードは、現時点で事前診断ができないことを意味します。スクリーンショットを撮って直接 FSE にエスカレーションしてください。",
    treeIntro: "下のカテゴリーを選んで診断を始めるか、上部の検索バーで直接目的の項目に移動してください。",
    qaStepOf: "ステップ",
    highFreq: "頻発エラー",
    versionCheck: "トラブルシューティングの前に、Version Information でファームウェアが最新かご確認ください。",
    videosIntro: "モジュール別に修理動画を探せます。モジュール名をクリックすると開閉します。各動画の右側の「コピー」ボタンでタイトルとリンクをコピーし、ユーザーへの連絡やチケットに貼り付けられます。",
    linkPending: "動画準備中",
    driveNoLink: "Google Drive（リンクは共有フォルダをご確認ください）",
    copyLinks: "コピー",
    firmwareVersion: "ファームウェアバージョン",
    appVersion: "APP バージョン",
    estCompletion: "配信完了予定日",
    navCases: "事例分析",
    casesIntro: "カードをクリックすると詳しい分析と解決策が表示されます。もう一度クリックすると閉じます。",
    caseProblem: "問題の概要",
    caseAnalysis: "原因分析",
    caseSolution: "解決策",
    caseFilterHeading: "キーワードで絞り込み",
    caseFilterClear: "絞り込みを解除",
    caseNoResult: "選択した条件に一致する事例はありません。",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "更新内容",
    fullRollout: "全面リリース",
  },
  ko: {
    siteName: "Yarbo 문제 해결",
    navIntro: "소개",
    navTrouble: "문제 해결",
    navCodes: "자주 발생하는 오류 코드",
    navVideos: "셀프 수리 영상",
    navLearning: "학습 영상",
    navUpdates: "업데이트 소식",
    searchPlaceholder: "오류 코드 또는 키워드로 검색 (예: B009 / 블루투스 / 경계 이탈)",
    searchHint: "오류 코드를 입력하면 해당 코드로 바로 이동하고, 증상 키워드를 입력하면 문제 해결 단계로 이동합니다",
    searchHintVideos: "키워드를 입력해 수리 영상 제목을 검색하세요",
    searchHintUpdates: "키워드를 입력해 업데이트 내용을 검색하세요",
    searchPlaceholderVideos: "수리 영상 검색, 예: 카메라 / 모터 / 안테나",
    searchPlaceholderUpdates: "업데이트 내용 검색, 예: NetRTK / DC / Wi-Fi",
    searchNoResult: "일치하는 결과를 찾을 수 없습니다. 목록에 없는 오류 코드는 현재 원격 사전 진단이 불가능하다는 의미입니다. 스크린샷을 찍어 FSE에 바로 에스컬레이션해 주세요.",
    modeQA: "단계별 모드",
    modeMindmap: "마인드맵 모드",
    start: "진단 시작",
    restart: "다시 시작",
    back: "뒤로",
    copy: "복사",
    copied: "복사됨",
    escalateTag: "FSE에 문의",
    resolvedTag: "해결됨",
    infoTag: "참고 정보",
    expand: "펼치기",
    collapse: "접기",
    emptyIntro: "내용을 준비 중입니다. 곧 만나요.",
    emptyVideos: "셀프 수리 영상은 준비 중입니다. 공개되는 대로 이곳에 표시됩니다.",
    emptyLearning: "학습 영상은 준비 중입니다. 공개되는 대로 이곳에 표시됩니다.",
    emptyUpdates: "현재 펌웨어/소프트웨어 업데이트 내역이 없습니다. 새 버전이 출시되는 대로 이곳에 게시됩니다.",
    codesIntro: "카드를 클릭하면 전체 문제 해결 단계를 볼 수 있습니다. 각 카드 오른쪽 위의 복사 버튼으로 지원팀(FSE)에 바로 전달할 내용을 복사할 수 있습니다.",
    codesFooter: "아래 목록에 없는 오류 코드는 현재 원격으로 사전 진단할 수 없다는 의미입니다. 스크린샷을 찍어 FSE에 바로 에스컬레이션해 주세요.",
    treeIntro: "아래에서 카테고리를 선택해 진단을 시작하거나, 상단 검색창으로 원하는 항목으로 바로 이동하세요.",
    qaStepOf: "단계",
    highFreq: "고빈도 오류",
    versionCheck: "문제를 해결하기 전에 Version Information에서 펌웨어가 최신인지 확인하세요.",
    videosIntro: "모듈별로 수리 영상을 찾아보세요. 모듈 제목을 클릭하면 펼치거나 접을 수 있습니다. 각 영상 오른쪽의 복사 버튼으로 제목과 링크를 복사해 사용자에게 전달하거나 티켓에 붙여넣을 수 있습니다.",
    linkPending: "영상 준비 중",
    driveNoLink: "Google 드라이브(링크는 공유 폴더 참고)",
    copyLinks: "복사",
    firmwareVersion: "펌웨어 버전",
    appVersion: "앱 버전",
    estCompletion: "배포 완료 예정일",
    navCases: "사례 분석",
    casesIntro: "카드를 클릭하면 전체 분석과 해결책을 볼 수 있습니다. 다시 클릭하면 접힙니다.",
    caseProblem: "문제 설명",
    caseAnalysis: "원인 분석",
    caseSolution: "해결 방법",
    caseFilterHeading: "키워드로 필터링",
    caseFilterClear: "필터 지우기",
    caseNoResult: "선택한 조건에 맞는 사례가 없습니다.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "업데이트 내용",
    fullRollout: "전체 배포",
  },
  de: {
    siteName: "Yarbo Fehlerbehebung",
    navIntro: "Intro",
    navTrouble: "Fehlerbehebung",
    navCodes: "Fehlercodes",
    navVideos: "Reparaturvideos",
    navLearning: "Lernvideos",
    navUpdates: "Updates",
    searchPlaceholder: "Fehlercode oder Stichwort suchen, z. B. B009 / Bluetooth / Grenze",
    searchHint: "Einen Fehlercode eingeben, um direkt dorthin zu springen; ein Stichwort eingeben, um zu den Fehlerbehebungsschritten zu springen",
    searchHintVideos: "Stichwort eingeben, um Reparaturvideo-Titel zu durchsuchen",
    searchHintUpdates: "Stichwort eingeben, um die Update-Inhalte zu durchsuchen",
    searchPlaceholderVideos: "Reparaturvideos durchsuchen, z. B. Kamera / Motor / Antenne",
    searchPlaceholderUpdates: "Update-Inhalte durchsuchen, z. B. NetRTK / DC / Wi-Fi",
    searchNoResult: "Keine Treffer gefunden. Ein nicht aufgeführter Code bedeutet, dass derzeit keine Ferndiagnose möglich ist — bitte einen Screenshot machen und direkt an den FSE melden.",
    modeQA: "Schritt für Schritt",
    modeMindmap: "Mindmap-Modus",
    start: "Diagnose starten",
    restart: "Neu starten",
    back: "Zurück",
    copy: "Kopieren",
    copied: "Kopiert",
    escalateTag: "FSE kontaktieren",
    resolvedTag: "Gelöst",
    infoTag: "Referenz",
    expand: "Erweitern",
    collapse: "Einklappen",
    emptyIntro: "Inhalt folgt in Kürze.",
    emptyVideos: "Die Reparaturvideos werden derzeit erstellt und erscheinen hier, sobald sie fertig sind.",
    emptyLearning: "Die Lernvideos werden derzeit erstellt und erscheinen hier, sobald sie fertig sind.",
    emptyUpdates: "Noch keine Firmware-/Software-Updates. Neue Versionen werden hier veröffentlicht, sobald sie verfügbar sind.",
    codesIntro: "Auf eine Karte klicken, um die vollständigen Fehlerbehebungsschritte zu sehen. Über die Kopieren-Schaltfläche auf jeder Karte lassen sich die Details direkt an den Support (FSE) senden.",
    codesFooter: "Ein hier nicht aufgeführter Code kann nicht per Ferndiagnose vorab geprüft werden — bitte einen Screenshot machen und direkt an den FSE eskalieren.",
    treeIntro: "Unten eine Kategorie auswählen, um zu beginnen, oder oben in der Suchleiste direkt zu einem Thema springen.",
    qaStepOf: "Schritt",
    highFreq: "Häufiger Fehler",
    versionCheck: "Vor der Fehlerbehebung unter Version Information prüfen, ob die Firmware aktuell ist.",
    videosIntro: "Reparaturvideos nach Modul durchsuchen — auf eine Modulüberschrift klicken, um sie zu erweitern oder einzuklappen. Jedes Video hat eine Kopieren-Schaltfläche, die Titel und Link(s) kopiert, bereit zum Einfügen in eine Nachricht oder ein Ticket.",
    linkPending: "Video folgt",
    driveNoLink: "Google Drive (Link im freigegebenen Ordner)",
    copyLinks: "Kopieren",
    firmwareVersion: "Firmware-Version",
    appVersion: "App-Version",
    estCompletion: "Voraussichtlicher Abschluss der Verteilung",
    navCases: "Fallstudien",
    casesIntro: "Auf eine Karte klicken, um die vollständige Analyse und Lösung zu sehen; erneut klicken, um sie einzuklappen.",
    caseProblem: "Problem",
    caseAnalysis: "Analyse",
    caseSolution: "Lösung",
    caseFilterHeading: "Nach Stichwort filtern",
    caseFilterClear: "Filter zurücksetzen",
    caseNoResult: "Keine Fälle entsprechen den ausgewählten Filtern.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "Neuerungen",
    fullRollout: "Vollständiges Rollout",
  },
  fr: {
    siteName: "Yarbo Dépannage",
    navIntro: "Intro",
    navTrouble: "Dépannage",
    navCodes: "Codes d'erreur",
    navVideos: "Vidéos de réparation",
    navLearning: "Vidéos de formation",
    navUpdates: "Actualités",
    searchPlaceholder: "Rechercher un code d'erreur ou un mot-clé, ex. B009 / bluetooth / limite",
    searchHint: "Saisir un code d'erreur pour y accéder directement ; saisir un mot-clé de symptôme pour accéder aux étapes de dépannage",
    searchHintVideos: "Saisir un mot-clé pour rechercher les titres des vidéos de réparation",
    searchHintUpdates: "Saisir un mot-clé pour rechercher le contenu des mises à jour",
    searchPlaceholderVideos: "Rechercher des vidéos de réparation, ex. caméra / moteur / antenne",
    searchPlaceholderUpdates: "Rechercher le contenu des mises à jour, ex. NetRTK / DC / Wi-Fi",
    searchNoResult: "Aucun résultat trouvé. Un code non répertorié signifie qu'un diagnostic à distance n'est pas possible pour l'instant — veuillez faire une capture d'écran et l'escalader directement au FSE.",
    modeQA: "Étape par étape",
    modeMindmap: "Mode carte mentale",
    start: "Démarrer le diagnostic",
    restart: "Recommencer",
    back: "Retour",
    copy: "Copier",
    copied: "Copié",
    escalateTag: "Contacter le FSE",
    resolvedTag: "Résolu",
    infoTag: "Référence",
    expand: "Développer",
    collapse: "Réduire",
    emptyIntro: "Contenu à venir prochainement.",
    emptyVideos: "Les vidéos de réparation sont en cours de production et apparaîtront ici une fois prêtes.",
    emptyLearning: "Les vidéos de formation sont en cours de production et apparaîtront ici une fois prêtes.",
    emptyUpdates: "Aucune mise à jour firmware/logicielle pour l'instant. Les nouvelles versions seront publiées ici dès qu'elles seront disponibles.",
    codesIntro: "Cliquer sur une carte pour voir toutes les étapes de dépannage. Le bouton copier de chaque carte permet d'envoyer directement les détails au support (FSE).",
    codesFooter: "Un code non répertorié ci-dessous ne peut pas être diagnostiqué à distance à l'avance — veuillez faire une capture d'écran et l'escalader directement au FSE.",
    treeIntro: "Choisir une catégorie ci-dessous pour commencer, ou utiliser la barre de recherche ci-dessus pour accéder directement à un sujet.",
    qaStepOf: "Étape",
    highFreq: "Erreur fréquente",
    versionCheck: "Avant le dépannage, vérifier dans Version Information que le firmware est à jour.",
    videosIntro: "Parcourir les vidéos de réparation par module — cliquer sur un titre de module pour le développer ou le réduire. Chaque vidéo dispose d'un bouton copier qui copie son titre et ses lien(s), prêt à coller dans un message ou un ticket.",
    linkPending: "Vidéo à venir",
    driveNoLink: "Google Drive (lien dans le dossier partagé)",
    copyLinks: "Copier",
    firmwareVersion: "Version du firmware",
    appVersion: "Version de l'application",
    estCompletion: "Fin de déploiement estimée",
    navCases: "Études de cas",
    casesIntro: "Cliquer sur une carte pour voir l'analyse complète et la solution ; cliquer à nouveau pour la réduire.",
    caseProblem: "Problème",
    caseAnalysis: "Analyse",
    caseSolution: "Solution",
    caseFilterHeading: "Filtrer par mot-clé",
    caseFilterClear: "Effacer les filtres",
    caseNoResult: "Aucun cas ne correspond aux filtres sélectionnés.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "Nouveautés",
    fullRollout: "Déploiement complet",
  },
  it: {
    siteName: "Yarbo Risoluzione problemi",
    navIntro: "Intro",
    navTrouble: "Risoluzione problemi",
    navCodes: "Codici di errore",
    navVideos: "Video di riparazione",
    navLearning: "Video formativi",
    navUpdates: "Aggiornamenti",
    searchPlaceholder: "Cerca un codice di errore o una parola chiave, es. B009 / bluetooth / confine",
    searchHint: "Inserisci un codice di errore per andare direttamente ad esso; inserisci una parola chiave del sintomo per passare ai passaggi di risoluzione",
    searchHintVideos: "Inserisci una parola chiave per cercare i titoli dei video di riparazione",
    searchHintUpdates: "Inserisci una parola chiave per cercare i contenuti degli aggiornamenti",
    searchPlaceholderVideos: "Cerca video di riparazione, es. fotocamera / motore / antenna",
    searchPlaceholderUpdates: "Cerca i contenuti degli aggiornamenti, es. NetRTK / DC / Wi-Fi",
    searchNoResult: "Nessun risultato trovato. Un codice non presente nell'elenco significa che al momento non è possibile una diagnosi remota preliminare: fai uno screenshot e segnalalo direttamente all'FSE.",
    modeQA: "Passo dopo passo",
    modeMindmap: "Modalità mappa mentale",
    start: "Avvia diagnosi",
    restart: "Ricomincia",
    back: "Indietro",
    copy: "Copia",
    copied: "Copiato",
    escalateTag: "Contatta l'FSE",
    resolvedTag: "Risolto",
    infoTag: "Riferimento",
    expand: "Espandi",
    collapse: "Comprimi",
    emptyIntro: "Contenuto in arrivo a breve.",
    emptyVideos: "I video di riparazione sono in produzione e appariranno qui non appena pronti.",
    emptyLearning: "I video formativi sono in produzione e appariranno qui non appena pronti.",
    emptyUpdates: "Nessun aggiornamento firmware/software per ora. Le nuove versioni saranno pubblicate qui non appena disponibili.",
    codesIntro: "Clicca su una scheda per vedere tutti i passaggi di risoluzione. Il pulsante copia su ogni scheda invia i dettagli direttamente al supporto (FSE).",
    codesFooter: "Un codice non presente nell'elenco sottostante non può essere diagnosticato da remoto in anticipo: fai uno screenshot e segnalalo direttamente all'FSE.",
    treeIntro: "Scegli una categoria qui sotto per iniziare, oppure usa la barra di ricerca in alto per andare direttamente a un argomento.",
    qaStepOf: "Passaggio",
    highFreq: "Errore frequente",
    versionCheck: "Prima della risoluzione dei problemi, verifica in Version Information che il firmware sia aggiornato.",
    videosIntro: "Sfoglia i video di riparazione per modulo: clicca su un'intestazione di modulo per espanderla o comprimerla. Ogni video ha un pulsante copia che copia il titolo e i link, pronto da incollare in un messaggio o un ticket.",
    linkPending: "Video in arrivo",
    driveNoLink: "Google Drive (link nella cartella condivisa)",
    copyLinks: "Copia",
    firmwareVersion: "Versione firmware",
    appVersion: "Versione app",
    estCompletion: "Completamento previsto del rilascio",
    navCases: "Casi di studio",
    casesIntro: "Clicca su una scheda per vedere l'analisi completa e la soluzione; clicca di nuovo per comprimerla.",
    caseProblem: "Problema",
    caseAnalysis: "Analisi",
    caseSolution: "Soluzione",
    caseFilterHeading: "Filtra per parola chiave",
    caseFilterClear: "Cancella filtri",
    caseNoResult: "Nessun caso corrisponde ai filtri selezionati.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "Novità",
    fullRollout: "Rilascio completo",
  },
  ru: {
    siteName: "Yarbo Устранение неисправностей",
    navIntro: "Обзор",
    navTrouble: "Устранение неисправностей",
    navCodes: "Коды ошибок",
    navVideos: "Видео по ремонту",
    navLearning: "Обучающие видео",
    navUpdates: "Обновления",
    searchPlaceholder: "Поиск по коду ошибки или ключевому слову, напр. B009 / bluetooth / граница",
    searchHint: "Введите код ошибки, чтобы перейти прямо к нему; введите ключевое слово симптома, чтобы перейти к шагам устранения неисправности",
    searchHintVideos: "Введите ключевое слово для поиска по названиям видео по ремонту",
    searchHintUpdates: "Введите ключевое слово для поиска по содержанию обновлений",
    searchPlaceholderVideos: "Поиск видео по ремонту, напр. камера / мотор / антенна",
    searchPlaceholderUpdates: "Поиск по содержанию обновлений, напр. NetRTK / DC / Wi-Fi",
    searchNoResult: "Совпадений не найдено. Код, которого нет в списке, означает, что удалённая предварительная диагностика пока невозможна — сделайте скриншот и сразу обратитесь в FSE.",
    modeQA: "Пошаговый режим",
    modeMindmap: "Режим карты",
    start: "Начать диагностику",
    restart: "Начать заново",
    back: "Назад",
    copy: "Скопировать",
    copied: "Скопировано",
    escalateTag: "Обратиться в FSE",
    resolvedTag: "Решено",
    infoTag: "Справка",
    expand: "Развернуть",
    collapse: "Свернуть",
    emptyIntro: "Содержимое скоро появится.",
    emptyVideos: "Видео по ремонту находятся в разработке и появятся здесь, как только будут готовы.",
    emptyLearning: "Обучающие видео находятся в разработке и появятся здесь, как только будут готовы.",
    emptyUpdates: "Пока нет обновлений прошивки/ПО. Новые версии будут опубликованы здесь сразу после выхода.",
    codesIntro: "Нажмите на карточку, чтобы увидеть полные шаги устранения неисправности. Кнопка копирования на каждой карточке отправляет данные прямо в поддержку (FSE).",
    codesFooter: "Код, которого нет в списке ниже, невозможно предварительно диагностировать удалённо — сделайте скриншот и сразу обратитесь в FSE.",
    treeIntro: "Выберите категорию ниже, чтобы начать, или воспользуйтесь строкой поиска вверху, чтобы перейти сразу к теме.",
    qaStepOf: "Шаг",
    highFreq: "Частая ошибка",
    versionCheck: "Перед устранением неисправности проверьте в Version Information, актуальна ли прошивка.",
    videosIntro: "Просматривайте видео по ремонту по модулям — нажмите на заголовок модуля, чтобы развернуть или свернуть его. У каждого видео есть кнопка копирования названия и ссылок, готовых для вставки в сообщение или заявку.",
    linkPending: "Видео скоро появится",
    driveNoLink: "Google Диск (ссылка в общей папке)",
    copyLinks: "Скопировать",
    firmwareVersion: "Версия прошивки",
    appVersion: "Версия приложения",
    estCompletion: "Ожидаемое завершение развёртывания",
    navCases: "Разбор случаев",
    casesIntro: "Нажмите на карточку, чтобы увидеть полный анализ и решение; нажмите ещё раз, чтобы свернуть.",
    caseProblem: "Проблема",
    caseAnalysis: "Анализ",
    caseSolution: "Решение",
    caseFilterHeading: "Фильтр по ключевым словам",
    caseFilterClear: "Сбросить фильтры",
    caseNoResult: "Нет случаев, соответствующих выбранным фильтрам.",
    tagRtk: "RTK",
    tagBumper: "Bumper",
    tagCamera: "Camera",
    tagBattery: "Battery",
    tagDatacenter: "Data Center",
    tagRecharge: "Recharge",
    changelog: "Что нового",
    fullRollout: "Полное развёртывание",
  }
};


/* ---------- Troubleshooting decision tree ---------- */
/* node: { id, zh, en, detailZh, detailEn, leaf, escalate, resolved, children[] } */

const TREE = [
  {
    "id": "power-on",
    "zh": "Yarbo 开机异常",
    "en": "Yarbo Won't Power On / Boot Issues",
    "children": [
      {
        "id": "before-ready",
        "zh": "报 ready to work 前",
        "en": "Before it reports “ready to work”",
        "children": [
          {
            "id": "no-response",
            "zh": "按电源键完全没有任何反应，包括灯光闪烁",
            "en": "Pressing the power button gives no reaction at all, not even a light flicker",
            "children": [
              {
                "id": "unplug-battery",
                "zh": "插拔电池后再尝试",
                "en": "Remove and reinsert the battery, then try again",
                "children": [
                  {
                    "id": "still-no-response",
                    "zh": "仍然没有反应",
                    "en": "Still no response",
                    "children": [
                      {
                        "id": "wired-green-no-light",
                        "zh": "有线充电器显示绿灯，但 Yarbo 仍无灯光反应",
                        "en": "Wired charger shows a green light, but Yarbo still shows no light",
                        "leaf": true,
                        "detailZh": "更换有线充电器再次尝试。",
                        "detailEn": "Swap the wired charger and try again.",
                        "ja": "有線充電器は緑ランプを表示しているが、Yarbo は依然としてライトが反応しない",
                        "ko": "유선 충전기는 녹색 표시등이 켜지지만 Yarbo는 여전히 아무 표시등 반응이 없음",
                        "detailJa": "有線充電器を交換して再度試してください。",
                        "detailKo": "유선 충전기를 교체한 후 다시 시도하세요.",
                        "de": "Das Ladekabel zeigt ein grünes Licht, aber Yarbo zeigt weiterhin keine Lichtreaktion",
                        "fr": "Le chargeur filaire affiche un voyant vert, mais Yarbo ne montre toujours aucune réaction lumineuse",
                        "it": "Il caricabatterie via cavo mostra una luce verde, ma Yarbo non mostra ancora alcuna reazione luminosa",
                        "ru": "Проводное зарядное устройство показывает зелёный индикатор, но Yarbo по-прежнему никак не реагирует индикатором",
                        "detailDe": "Das Ladekabel austauschen und es erneut versuchen.",
                        "detailFr": "Remplacer le chargeur filaire et réessayer.",
                        "detailIt": "Sostituire il caricabatterie via cavo e riprovare.",
                        "detailRu": "Замените проводное зарядное устройство и повторите попытку."
                      },
                      {
                        "id": "wired-red-no-light",
                        "zh": "有线充电器显示红灯，但 Yarbo 仍无灯光反应",
                        "en": "Wired charger shows a red light, but Yarbo still shows no light",
                        "leaf": true,
                        "detailZh": "更换电池再次尝试。",
                        "detailEn": "Swap the battery and try again.",
                        "ja": "有線充電器は赤ランプを表示しているが、Yarbo は依然としてライトが反応しない",
                        "ko": "유선 충전기는 빨간색 표시등이 켜지지만 Yarbo는 여전히 아무 표시등 반응이 없음",
                        "detailJa": "バッテリーを交換して再度試してください。",
                        "detailKo": "배터리를 교체한 후 다시 시도하세요.",
                        "de": "Das Ladekabel zeigt ein rotes Licht, aber Yarbo zeigt weiterhin keine Lichtreaktion",
                        "fr": "Le chargeur filaire affiche un voyant rouge, mais Yarbo ne montre toujours aucune réaction lumineuse",
                        "it": "Il caricabatterie via cavo mostra una luce rossa, ma Yarbo non mostra ancora alcuna reazione luminosa",
                        "ru": "Проводное зарядное устройство показывает красный индикатор, но Yarbo по-прежнему никак не реагирует индикатором",
                        "detailDe": "Den Akku austauschen und es erneut versuchen.",
                        "detailFr": "Remplacer la batterie et réessayer.",
                        "detailIt": "Sostituire la batteria e riprovare.",
                        "detailRu": "Замените аккумулятор и повторите попытку."
                      }
                    ],
                    "ja": "それでも反応がない",
                    "ko": "여전히 반응 없음",
                    "de": "Immer noch keine Reaktion",
                    "fr": "Toujours aucune réaction",
                    "it": "Ancora nessuna reazione",
                    "ru": "По-прежнему нет реакции"
                  }
                ],
                "ja": "バッテリーを抜き差ししてから再度試す",
                "ko": "배터리를 뺐다가 다시 끼운 후 재시도",
                "de": "Den Akku herausnehmen und wieder einsetzen, dann erneut versuchen",
                "fr": "Retirer puis réinsérer la batterie, puis réessayer",
                "it": "Rimuovere e reinserire la batteria, quindi riprovare",
                "ru": "Извлеките и снова вставьте аккумулятор, затем повторите попытку"
              }
            ],
            "ja": "電源ボタンを押しても、ライトの点滅も含めて一切反応がない",
            "ko": "전원 버튼을 눌러도 표시등 깜빡임을 포함해 전혀 반응이 없음",
            "de": "Beim Drücken der Einschalttaste reagiert das Gerät überhaupt nicht, nicht einmal ein Blinken der Leuchte",
            "fr": "Appuyer sur le bouton d'alimentation ne provoque aucune réaction, pas même un clignotement du voyant",
            "it": "Premendo il pulsante di accensione non si verifica alcuna reazione, nemmeno un lampeggio della spia",
            "ru": "При нажатии кнопки питания нет вообще никакой реакции, даже мигания индикатора"
          },
          {
            "id": "has-light-response",
            "zh": "按电源键有反应，并且有灯光",
            "en": "Pressing the power button reacts and shows a light",
            "children": [
              {
                "id": "hold-60s",
                "zh": "长按电源键 60 秒后重新开机，看能否正常开机",
                "en": "Hold the power button for 60 seconds, then power on again and check if it boots normally",
                "children": [
                  {
                    "id": "light-off-self",
                    "zh": "灯光闪烁一会后自行熄灭",
                    "en": "The light flickers for a while then goes off on its own",
                    "leaf": true,
                    "escalate": true,
                    "detailZh": "记录并描述排查思路，告知 FSE。",
                    "detailEn": "Record and describe the troubleshooting steps taken, then report to FSE.",
                    "ja": "しばらく点滅した後、自然にライトが消える",
                    "ko": "잠시 깜빡이다가 저절로 꺼짐",
                    "detailJa": "トラブルシューティングの経過を記録・説明し、FSE に報告してください。",
                    "detailKo": "문제 해결 과정을 기록하고 설명하여 FSE에 보고하세요.",
                    "de": "Die Leuchte blinkt eine Weile und erlischt dann von selbst",
                    "fr": "Le voyant clignote un moment puis s'éteint de lui-même",
                    "it": "La spia lampeggia per un po' e poi si spegne da sola",
                    "ru": "Индикатор мигает некоторое время, а затем гаснет сам по себе",
                    "detailDe": "Den Fehlerbehebungsprozess dokumentieren und beschreiben, dann dem FSE mitteilen.",
                    "detailFr": "Documenter et décrire la démarche de dépannage, puis en informer le FSE.",
                    "detailIt": "Documentare e descrivere il processo di risoluzione dei problemi, quindi informare l'FSE.",
                    "detailRu": "Задокументируйте и опишите ход диагностики, затем сообщите об этом FSE."
                  },
                  {
                    "id": "light-stays-on",
                    "zh": "灯光一直维持闪烁状态",
                    "en": "The light keeps flickering continuously",
                    "leaf": true,
                    "escalate": true,
                    "detailZh": "让用户将 Yarbo 移动到离 Wi-Fi 更近的地方，并联系 FSE 进行后台排查。",
                    "detailEn": "Ask the user to move Yarbo closer to the Wi-Fi router, and contact FSE for backend troubleshooting.",
                    "ja": "ライトが点滅し続けたままの状態",
                    "ko": "표시등이 계속 깜빡이는 상태가 유지됨",
                    "detailJa": "ユーザーに Yarbo を Wi-Fi ルーターの近くへ移動してもらい、FSE にバックエンドでの調査を依頼してください。",
                    "detailKo": "사용자에게 Yarbo를 Wi-Fi 공유기에 더 가까운 곳으로 옮기게 하고, FSE에 백엔드 조사를 요청하세요.",
                    "de": "Die Leuchte blinkt ununterbrochen weiter",
                    "fr": "Le voyant continue de clignoter sans interruption",
                    "it": "La spia continua a lampeggiare ininterrottamente",
                    "ru": "Индикатор продолжает непрерывно мигать",
                    "detailDe": "Den Nutzer bitten, Yarbo näher an den WLAN-Router zu bringen, und den FSE für eine Backend-Untersuchung kontaktieren.",
                    "detailFr": "Demander à l'utilisateur de rapprocher Yarbo du routeur Wi-Fi, et contacter le FSE pour une investigation côté serveur.",
                    "detailIt": "Chiedere all'utente di avvicinare Yarbo al router Wi-Fi e contattare l'FSE per un'indagine sul backend.",
                    "detailRu": "Попросите пользователя переместить Yarbo ближе к Wi-Fi роутеру и обратитесь в FSE для диагностики на стороне сервера."
                  }
                ],
                "ja": "電源ボタンを 60 秒長押ししてから再起動し、正常に起動するか確認する",
                "ko": "전원 버튼을 60초간 길게 누른 후 다시 켜서 정상적으로 부팅되는지 확인",
                "de": "Die Einschalttaste 60 Sekunden lang gedrückt halten, dann neu starten und prüfen, ob das Gerät normal hochfährt",
                "fr": "Maintenir le bouton d'alimentation enfoncé pendant 60 secondes, puis redémarrer pour vérifier si l'appareil démarre normalement",
                "it": "Tenere premuto il pulsante di accensione per 60 secondi, quindi riavviare per verificare se si accende normalmente",
                "ru": "Удерживайте кнопку питания 60 секунд, затем перезапустите и проверьте, включается ли устройство нормально"
              }
            ],
            "ja": "電源ボタンを押すと反応があり、ライトも点灯する",
            "ko": "전원 버튼을 누르면 반응이 있고 표시등도 켜짐",
            "de": "Beim Drücken der Einschalttaste reagiert das Gerät und die Leuchte geht an",
            "fr": "Appuyer sur le bouton d'alimentation provoque une réaction et le voyant s'allume",
            "it": "Premendo il pulsante di accensione si verifica una reazione e la spia si accende",
            "ru": "При нажатии кнопки питания есть реакция, и индикатор загорается"
          }
        ],
        "ja": "「ready to work」と表示される前",
        "ko": "\"ready to work\"가 표시되기 전",
        "de": "Bevor „ready to work\" angezeigt wird",
        "fr": "Avant l'affichage de « ready to work »",
        "it": "Prima che venga visualizzato \"ready to work\"",
        "ru": "До появления сообщения «ready to work»"
      },
      {
        "id": "after-ready",
        "zh": "报 ready to work 后",
        "en": "After it reports “ready to work”",
        "children": [
          {
            "id": "bluetooth-issue",
            "zh": "连接不到蓝牙？",
            "en": "Can't connect via Bluetooth?",
            "children": [
              {
                "id": "toggle-bluetooth",
                "zh": "关闭手机蓝牙再重新开启，查看能否扫描到名为 “Yarbo Music” 的蓝牙设备",
                "en": "Turn the phone's Bluetooth off then on again, and check whether a device named “Yarbo Music” is discoverable",
                "children": [
                  {
                    "id": "bt-not-found",
                    "zh": "扫描不到",
                    "en": "Not discoverable",
                    "leaf": true,
                    "escalate": true,
                    "detailZh": "截屏留证，联系 FSE。",
                    "detailEn": "Take a screenshot as evidence and contact FSE.",
                    "ja": "検出できない",
                    "ko": "검색되지 않음",
                    "detailJa": "スクリーンショットを証拠として保存し、FSE に連絡してください。",
                    "detailKo": "스크린샷을 증거로 남기고 FSE에 문의하세요.",
                    "de": "Nicht gefunden",
                    "fr": "Non détecté",
                    "it": "Non rilevato",
                    "ru": "Не обнаруживается",
                    "detailDe": "Einen Screenshot als Nachweis erstellen und den FSE kontaktieren.",
                    "detailFr": "Faire une capture d'écran comme preuve et contacter le FSE.",
                    "detailIt": "Fare uno screenshot come prova e contattare l'FSE.",
                    "detailRu": "Сделайте скриншот в качестве доказательства и обратитесь в FSE."
                  },
                  {
                    "id": "bt-found",
                    "zh": "可以扫描到",
                    "en": "Discoverable",
                    "leaf": true,
                    "resolved": true,
                    "detailZh": "问题已解决。",
                    "detailEn": "Issue resolved.",
                    "ja": "検出できる",
                    "ko": "검색됨",
                    "detailJa": "問題は解決しました。",
                    "detailKo": "문제가 해결되었습니다.",
                    "de": "Wird gefunden",
                    "fr": "Détecté",
                    "it": "Rilevato",
                    "ru": "Обнаруживается",
                    "detailDe": "Problem gelöst.",
                    "detailFr": "Problème résolu.",
                    "detailIt": "Problema risolto.",
                    "detailRu": "Проблема решена."
                  }
                ],
                "ja": "スマートフォンの Bluetooth をオフにしてから再度オンにし、「Yarbo Music」という名前の Bluetooth デバイスが検出できるか確認する",
                "ko": "휴대폰 블루투스를 껐다가 다시 켠 후 \"Yarbo Music\"이라는 이름의 블루투스 기기가 검색되는지 확인",
                "de": "Bluetooth am Smartphone aus- und wieder einschalten und prüfen, ob ein Bluetooth-Gerät namens „Yarbo Music\" gefunden wird",
                "fr": "Désactiver puis réactiver le Bluetooth du téléphone, et vérifier si un appareil Bluetooth nommé « Yarbo Music » est détecté",
                "it": "Disattivare e riattivare il Bluetooth del telefono, quindi verificare se viene rilevato un dispositivo Bluetooth chiamato \"Yarbo Music\"",
                "ru": "Выключите и снова включите Bluetooth на телефоне и проверьте, обнаруживается ли устройство Bluetooth с именем «Yarbo Music»"
              }
            ],
            "ja": "Bluetooth に接続できない？",
            "ko": "블루투스에 연결할 수 없나요?",
            "de": "Keine Bluetooth-Verbindung möglich?",
            "fr": "Impossible de se connecter en Bluetooth ?",
            "it": "Impossibile connettersi al Bluetooth?",
            "ru": "Не удаётся подключиться по Bluetooth?"
          },
          {
            "id": "wifi-issue",
            "zh": "连接不到 Wi-Fi？",
            "en": "Can't connect to Wi-Fi?",
            "children": [
              {
                "id": "unstable-wifi",
                "zh": "Wi-Fi 网络不稳定，用手机热点尝试是否可以稳定连接",
                "en": "Wi-Fi network is unstable — try a phone hotspot to see if the connection is stable",
                "children": [
                  {
                    "id": "hotspot-stable",
                    "zh": "手机热点可以稳定连接？",
                    "en": "Is the phone hotspot connection stable?",
                    "children": [
                      {
                        "id": "change-wifi",
                        "zh": "是",
                        "en": "Yes",
                        "leaf": true,
                        "detailZh": "更换 Wi-Fi 网络。",
                        "detailEn": "Switch to a different Wi-Fi network.",
                        "ja": "はい",
                        "ko": "예",
                        "detailJa": "Wi-Fi ネットワークを変更してください。",
                        "detailKo": "Wi-Fi 네트워크를 변경하세요.",
                        "de": "Ja",
                        "fr": "Oui",
                        "it": "Sì",
                        "ru": "Да",
                        "detailDe": "Das WLAN-Netzwerk wechseln.",
                        "detailFr": "Changer de réseau Wi-Fi.",
                        "detailIt": "Cambiare rete Wi-Fi.",
                        "detailRu": "Смените сеть Wi-Fi."
                      },
                      {
                        "id": "no-wifi-option",
                        "zh": "否 — 没有条件更换 Wi-Fi",
                        "en": "No — unable to switch Wi-Fi",
                        "leaf": true,
                        "detailZh": "删除现有 Wi-Fi 连接记录，仅使用 4G。注意：Smart Vision 每月 4G 额度为 20 分钟，超额需联系 FSE 手动刷新。",
                        "detailEn": "Delete the saved Wi-Fi connection and use 4G only. Note: Smart Vision's 4G data allowance is 20 minutes per month — once exceeded, contact FSE for a manual refresh.",
                        "ja": "いいえ ― Wi-Fi を変更できる環境がない",
                        "ko": "아니요 — Wi-Fi를 변경할 수 있는 환경이 아님",
                        "detailJa": "既存の Wi-Fi 接続情報を削除し、4G のみを使用してください。注意：Smart Vision の月間 4G 利用枠は 20 分です。超過した場合は FSE に連絡して手動でリセットしてもらう必要があります。",
                        "detailKo": "기존 Wi-Fi 연결 기록을 삭제하고 4G만 사용하세요. 참고: Smart Vision의 월간 4G 데이터 한도는 20분이며, 초과 시 FSE에 문의하여 수동으로 리셋해야 합니다.",
                        "de": "Nein — kein anderes WLAN verfügbar",
                        "fr": "Non — aucun autre Wi-Fi disponible",
                        "it": "No — nessun'altra rete Wi-Fi disponibile",
                        "ru": "Нет — нет возможности сменить Wi-Fi",
                        "detailDe": "Den vorhandenen WLAN-Verbindungseintrag löschen und nur 4G verwenden. Hinweis: Das monatliche 4G-Kontingent von Smart Vision beträgt 20 Minuten; bei Überschreitung muss der FSE es manuell zurücksetzen.",
                        "detailFr": "Supprimer l'enregistrement de connexion Wi-Fi existant et utiliser uniquement la 4G. Remarque : le quota mensuel de 4G de Smart Vision est de 20 minutes ; en cas de dépassement, contacter le FSE pour une réinitialisation manuelle.",
                        "detailIt": "Eliminare la connessione Wi-Fi esistente e utilizzare solo il 4G. Nota: la quota mensile 4G di Smart Vision è di 20 minuti; in caso di superamento, contattare l'FSE per un ripristino manuale.",
                        "detailRu": "Удалите существующее подключение Wi-Fi и используйте только 4G. Примечание: ежемесячная квота 4G для Smart Vision составляет 20 минут; при превышении обратитесь в FSE для ручного сброса."
                      }
                    ],
                    "ja": "スマートフォンのテザリングでは安定して接続できるか？",
                    "ko": "휴대폰 핫스팟으로는 안정적으로 연결되나요?",
                    "de": "Ist die Verbindung über den mobilen Hotspot stabil?",
                    "fr": "La connexion via le point d'accès mobile est-elle stable ?",
                    "it": "La connessione tramite hotspot del telefono è stabile?",
                    "ru": "Стабильно ли соединение через мобильную точку доступа?"
                  }
                ],
                "ja": "Wi-Fi ネットワークが不安定な場合、スマートフォンのテザリングで安定して接続できるか試す",
                "ko": "Wi-Fi 네트워크가 불안정하면 휴대폰 핫스팟으로 안정적으로 연결되는지 시도",
                "de": "Das WLAN-Netzwerk ist instabil; mit einem mobilen Hotspot testen, ob eine stabile Verbindung möglich ist",
                "fr": "Le réseau Wi-Fi est instable ; tester avec un point d'accès mobile pour voir si la connexion est stable",
                "it": "La rete Wi-Fi è instabile; provare con un hotspot del telefono per verificare se la connessione è stabile",
                "ru": "Сеть Wi-Fi нестабильна; попробуйте использовать мобильную точку доступа, чтобы проверить стабильность соединения"
              }
            ],
            "ja": "Wi-Fi に接続できない？",
            "ko": "Wi-Fi에 연결할 수 없나요?",
            "de": "Keine WLAN-Verbindung möglich?",
            "fr": "Impossible de se connecter au Wi-Fi ?",
            "it": "Impossibile connettersi al Wi-Fi?",
            "ru": "Не удаётся подключиться к Wi-Fi?"
          }
        ],
        "ja": "「ready to work」と表示された後",
        "ko": "\"ready to work\"가 표시된 후",
        "de": "Nachdem „ready to work\" angezeigt wurde",
        "fr": "Après l'affichage de « ready to work »",
        "it": "Dopo che viene visualizzato \"ready to work\"",
        "ru": "После появления сообщения «ready to work»"
      }
    ],
    "ja": "Yarbo 電源が入らない／起動の問題",
    "ko": "Yarbo 전원이 켜지지 않음 / 부팅 문제",
    "de": "Yarbo lässt sich nicht einschalten / Startprobleme",
    "fr": "Yarbo ne démarre pas / Problèmes de démarrage",
    "it": "Yarbo non si accende / Problemi di avvio",
    "ru": "Yarbo не включается / Проблемы с загрузкой"
  },
  {
    "id": "navigation",
    "zh": "出界 / 行走朝向异常 / GPS 异常",
    "en": "Out of Boundary / Heading / GPS Issues",
    "children": [
      {
        "id": "out-of-boundary",
        "zh": "出界",
        "en": "Out of boundary",
        "children": [
          {
            "id": "check-rtk-status",
            "zh": "记录发生的具体时间，并当下查看 RTK 的 status 是否为 4",
            "en": "Record the exact time it happened, and immediately check whether the RTK status is “4”",
            "children": [
              {
                "id": "status-is-4",
                "zh": "是",
                "en": "Yes",
                "children": [
                  {
                    "id": "recharge-back",
                    "zh": "recharge 开回 docking station",
                    "en": "Send Yarbo back to the docking station (recharge)",
                    "children": [
                      {
                        "id": "can-recharge",
                        "zh": "能否正常回充？",
                        "en": "Does it dock and charge normally?",
                        "children": [
                          {
                            "id": "recharge-ok-map-consistent",
                            "zh": "能，地图位置与实际位置一致",
                            "en": "Yes — the map position matches the real-world position",
                            "children": [
                              {
                                "id": "wheel-slip-leaf",
                                "zh": "可能是轮胎打滑引起的出界。联系 FSE 抓日志分析",
                                "en": "Likely wheel slip caused the boundary crossing — contact FSE to pull logs for analysis",
                                "leaf": true,
                                "escalate": true,
                                "ja": "タイヤの空転が原因で境界逸脱が発生した可能性があります。FSE に連絡してログを取得・解析してもらってください",
                                "ko": "바퀴 미끄러짐으로 인해 경계를 이탈했을 가능성이 있습니다. FSE에 문의하여 로그를 수집해 분석을 요청하세요",
                                "de": "Die Grenzüberschreitung wurde möglicherweise durch Radschlupf verursacht. Den FSE kontaktieren, um Protokolle zur Analyse zu erfassen",
                                "fr": "La sortie de limite peut être due à un patinage des roues. Contacter le FSE pour récupérer les journaux à des fins d'analyse",
                                "it": "L'uscita dal confine potrebbe essere causata dallo slittamento delle ruote. Contattare l'FSE per raccogliere i log da analizzare",
                                "ru": "Выход за границу мог быть вызван пробуксовкой колёс. Обратитесь в FSE для сбора логов и анализа"
                              }
                            ],
                            "ja": "戻れる ― マップ上の位置と実際の位置が一致している",
                            "ko": "가능함 — 지도상 위치와 실제 위치가 일치함",
                            "de": "Ja — die Position auf der Karte stimmt mit der tatsächlichen Position überein",
                            "fr": "Oui — la position sur la carte correspond à la position réelle",
                            "it": "Sì — la posizione sulla mappa corrisponde alla posizione reale",
                            "ru": "Да — положение на карте совпадает с реальным положением"
                          },
                          {
                            "id": "recharge-fail-map-inconsistent",
                            "zh": "不能，地图上 Yarbo 位置与实际不一致",
                            "en": "No — the map position doesn't match the real-world position",
                            "children": [
                              {
                                "id": "map-drift-leaf",
                                "zh": "地图漂移引起的出界，需要手动将机器开到 docking station 上并点击 Correct Map Drift",
                                "en": "Map drift caused the boundary crossing — manually drive the machine onto the docking station and tap Correct Map Drift",
                                "leaf": true,
                                "ja": "マップドリフトによる境界逸脱です。手動で機器を docking station まで移動させ、Correct Map Drift をタップしてください",
                                "ko": "지도 드리프트로 인한 경계 이탈입니다. 기기를 수동으로 도킹 스테이션까지 이동시킨 후 Correct Map Drift를 탭하세요",
                                "de": "Die Grenzüberschreitung wurde durch Kartendrift verursacht. Das Gerät manuell zur Ladestation fahren und auf „Correct Map Drift\" tippen",
                                "fr": "La sortie de limite est due à une dérive de la carte. Conduire manuellement l'appareil jusqu'à la station de charge et appuyer sur « Correct Map Drift »",
                                "it": "L'uscita dal confine è causata dalla deriva della mappa. Portare manualmente il dispositivo alla stazione di ricarica e toccare \"Correct Map Drift\"",
                                "ru": "Выход за границу вызван дрейфом карты. Вручную подведите устройство к зарядной станции и нажмите «Correct Map Drift»"
                              }
                            ],
                            "ja": "戻れない ― マップ上の Yarbo の位置が実際の位置と一致していない",
                            "ko": "불가능함 — 지도상 Yarbo 위치가 실제 위치와 일치하지 않음",
                            "de": "Nein — die Position von Yarbo auf der Karte stimmt nicht mit der tatsächlichen Position überein",
                            "fr": "Non — la position de Yarbo sur la carte ne correspond pas à la position réelle",
                            "it": "No — la posizione di Yarbo sulla mappa non corrisponde a quella reale",
                            "ru": "Нет — положение Yarbo на карте не совпадает с реальным положением"
                          }
                        ],
                        "ja": "正常に充電へ戻れるか？",
                        "ko": "정상적으로 복귀 충전이 되나요?",
                        "de": "Lädt es normal an der Station auf?",
                        "fr": "La recharge se fait-elle normalement ?",
                        "it": "Si ricarica normalmente?",
                        "ru": "Заряжается ли устройство нормально?"
                      }
                    ],
                    "ja": "docking station へ戻って充電する",
                    "ko": "도킹 스테이션으로 복귀시켜 충전",
                    "de": "Zur Ladestation zurückfahren (recharge)",
                    "fr": "Retourner à la station de charge (recharge)",
                    "it": "Tornare alla stazione di ricarica (recharge)",
                    "ru": "Вернуть на зарядную станцию (recharge)"
                  }
                ],
                "ja": "はい",
                "ko": "예",
                "de": "Ja",
                "fr": "Oui",
                "it": "Sì",
                "ru": "Да"
              },
              {
                "id": "status-not-4-boundary",
                "zh": "否",
                "en": "No",
                "children": [
                  {
                    "id": "top-blocked-question",
                    "zh": "Yarbo 顶上是否有遮挡？",
                    "en": "Is the top of Yarbo obstructed?",
                    "children": [
                      {
                        "id": "top-blocked",
                        "zh": "有",
                        "en": "Yes",
                        "children": [
                          {
                            "id": "vision-zone-leaf",
                            "zh": "画 Vision Zone 更改避障模式避免下次发生",
                            "en": "Draw a Vision Zone and change the obstacle-avoidance mode to prevent this from happening again",
                            "leaf": true,
                            "ja": "Vision Zone を描画して障害物回避モードを変更し、再発を防止してください",
                            "ko": "Vision Zone을 그려 장애물 회피 모드를 변경하여 재발을 방지하세요",
                            "de": "Eine Vision Zone einzeichnen und den Hindernisvermeidungsmodus ändern, um dies künftig zu vermeiden",
                            "fr": "Dessiner une Vision Zone et modifier le mode d'évitement d'obstacles pour éviter que cela ne se reproduise",
                            "it": "Disegnare una Vision Zone e modificare la modalità di evitamento degli ostacoli per evitare che si ripeta",
                            "ru": "Нарисуйте Vision Zone и измените режим объезда препятствий, чтобы это не повторилось"
                          }
                        ],
                        "ja": "ある",
                        "ko": "있음",
                        "de": "Ja",
                        "fr": "Oui",
                        "it": "Sì",
                        "ru": "Да"
                      },
                      {
                        "id": "top-not-blocked",
                        "zh": "否",
                        "en": "No",
                        "children": [
                          {
                            "id": "keep-evidence-leaf",
                            "zh": "保留证据并联系 FSE",
                            "en": "Preserve the evidence and contact FSE",
                            "leaf": true,
                            "escalate": true,
                            "ja": "証拠を保存し、FSE に連絡してください",
                            "ko": "증거를 보존하고 FSE에 문의하세요",
                            "de": "Beweise sichern und den FSE kontaktieren",
                            "fr": "Conserver les preuves et contacter le FSE",
                            "it": "Conservare le prove e contattare l'FSE",
                            "ru": "Сохраните доказательства и обратитесь в FSE"
                          }
                        ],
                        "ja": "いいえ",
                        "ko": "아니요",
                        "de": "Nein",
                        "fr": "Non",
                        "it": "No",
                        "ru": "Нет"
                      }
                    ],
                    "ja": "Yarbo の上部に遮蔽物はあるか？",
                    "ko": "Yarbo 상단에 가림막이 있나요?",
                    "de": "Gibt es eine Verdeckung über Yarbo?",
                    "fr": "Y a-t-il une obstruction au-dessus de Yarbo ?",
                    "it": "C'è un'ostruzione sopra Yarbo?",
                    "ru": "Есть ли препятствие над Yarbo?"
                  }
                ],
                "ja": "いいえ",
                "ko": "아니요",
                "de": "Nein",
                "fr": "Non",
                "it": "No",
                "ru": "Нет"
              }
            ],
            "ja": "発生した具体的な時刻を記録し、その場で RTK の status が 4 かどうかを確認する",
            "ko": "발생한 정확한 시간을 기록하고, 그 자리에서 RTK의 status가 4인지 확인",
            "de": "Den genauen Zeitpunkt notieren und sofort prüfen, ob der RTK-Status 4 ist",
            "fr": "Noter l'heure exacte de l'incident et vérifier immédiatement si le statut RTK est 4",
            "it": "Annotare l'ora esatta dell'evento e verificare immediatamente se lo stato RTK è 4",
            "ru": "Зафиксируйте точное время события и сразу проверьте, равен ли статус RTK 4"
          }
        ],
        "ja": "境界逸脱",
        "ko": "경계 이탈",
        "de": "Grenzüberschreitung",
        "fr": "Sortie de limite",
        "it": "Uscita dal confine",
        "ru": "Выход за границу"
      },
      {
        "id": "heading-gps-issue",
        "zh": "行走朝向异常 / GPS 异常",
        "en": "Heading / GPS Issues",
        "children": [
          {
            "id": "rtk-check",
            "zh": "App 上线变为 online 状态后，进入 Setting → Diagnose Tools → RTK Part。若 Yarbo 刚开机，需等待 3–5 分钟让数据收集稳定",
            "en": "Once the app shows online, go to Setting → Diagnose Tools → RTK Part. If Yarbo just powered on, wait 3–5 minutes for the data to stabilize",
            "children": [
              {
                "id": "mode-true",
                "zh": "mode 是否为 true？",
                "en": "Is mode “true”?",
                "children": [
                  {
                    "id": "mode-true-yes",
                    "zh": "是",
                    "en": "Yes",
                    "children": [
                      {
                        "id": "status-4",
                        "zh": "status 是否为 4？",
                        "en": "Is status “4”?",
                        "children": [
                          {
                            "id": "status-4-yes",
                            "zh": "是",
                            "en": "Yes",
                            "children": [
                              {
                                "id": "l2-not-zero",
                                "zh": "L2 ≠ 0",
                                "en": "L2 ≠ 0",
                                "children": [
                                  {
                                    "id": "l2-not-zero-yes",
                                    "zh": "是",
                                    "en": "Yes",
                                    "children": [
                                      {
                                        "id": "rtk-no-hw-issue",
                                        "zh": "RTK 硬件没问题，通常情况下是因为机器行驶在有遮挡的树荫下。若其他异常情况，需要提供三个内容给 FSE",
                                        "en": "The RTK hardware itself is fine — usually caused by the mower driving under shaded trees. For any other anomaly, provide FSE with the following three items",
                                        "children": [
                                          {
                                            "id": "report-time",
                                            "zh": "1. 发生的具体时间点？",
                                            "en": "1. The exact time it happened",
                                            "leaf": true,
                                            "ja": "1. 発生した具体的な時刻は？",
                                            "ko": "1. 발생한 정확한 시간은?",
                                            "de": "1. Der genaue Zeitpunkt des Auftretens?",
                                            "fr": "1. L'heure exacte de l'incident ?",
                                            "it": "1. L'orario esatto in cui si è verificato?",
                                            "ru": "1. Точное время события?"
                                          },
                                          {
                                            "id": "report-video",
                                            "zh": "2. 发生地点的周围环境视频",
                                            "en": "2. A video of the surrounding environment where it occurred",
                                            "leaf": true,
                                            "ja": "2. 発生場所の周辺環境の映像",
                                            "ko": "2. 발생 장소 주변 환경 영상",
                                            "de": "2. Ein Video der Umgebung am Ort des Geschehens",
                                            "fr": "2. Une vidéo de l'environnement du lieu de l'incident",
                                            "it": "2. Un video dell'ambiente circostante nel luogo dell'evento",
                                            "ru": "2. Видео окружающей обстановки в месте события"
                                          },
                                          {
                                            "id": "report-frequency",
                                            "zh": "3. 是偶尔复现还是频繁复现？",
                                            "en": "3. Whether it's occasional or frequent",
                                            "leaf": true,
                                            "ja": "3. まれに再現するか、それとも頻繁に再現するか？",
                                            "ko": "3. 가끔 재현되나요, 아니면 자주 재현되나요?",
                                            "de": "3. Tritt es gelegentlich oder häufig erneut auf?",
                                            "fr": "3. Se reproduit-il occasionnellement ou fréquemment ?",
                                            "it": "3. Si ripresenta occasionalmente o frequentemente?",
                                            "ru": "3. Повторяется ли это изредка или часто?"
                                          }
                                        ],
                                        "ja": "RTK ハードウェア自体に問題はありません。多くの場合、機器が木陰など遮蔽物のある場所を走行していることが原因です。それ以外の異常の場合は、以下の 3 点を FSE に提供してください",
                                        "ko": "RTK 하드웨어 자체에는 문제가 없습니다. 대개 기기가 나무 그늘 등 가림막이 있는 곳을 주행하고 있기 때문입니다. 그 외의 이상 상황이라면 다음 세 가지 정보를 FSE에 제공해야 합니다",
                                        "de": "Mit der RTK-Hardware ist nichts falsch — meist liegt es daran, dass das Gerät im schattigen Bereich unter Bäumen fährt. Bei anderen Anomalien müssen dem FSE folgende drei Angaben bereitgestellt werden",
                                        "fr": "Le matériel RTK n'a pas de problème — cela est généralement dû au fait que l'appareil circule à l'ombre d'arbres. En cas d'autre anomalie, fournir les trois éléments suivants au FSE",
                                        "it": "L'hardware RTK non presenta problemi: di solito è dovuto al fatto che il dispositivo si muove all'ombra di alberi. In caso di altre anomalie, fornire questi tre elementi all'FSE",
                                        "ru": "С аппаратной частью RTK всё в порядке — обычно это связано с тем, что устройство едет в тени деревьев. При других отклонениях необходимо предоставить FSE следующие три пункта"
                                      }
                                    ],
                                    "ja": "はい",
                                    "ko": "예",
                                    "de": "Ja",
                                    "fr": "Oui",
                                    "it": "Sì",
                                    "ru": "Да"
                                  }
                                ],
                                "ja": "L2 ≠ 0",
                                "ko": "L2 ≠ 0",
                                "de": "L2 ≠ 0",
                                "fr": "L2 ≠ 0",
                                "it": "L2 ≠ 0",
                                "ru": "L2 ≠ 0"
                              },
                              {
                                "id": "l2-zero",
                                "zh": "L2 = 0",
                                "en": "L2 = 0",
                                "children": [
                                  {
                                    "id": "right-antenna-issue",
                                    "zh": "右天线有问题，拧紧右侧天线或将天线内部的水擦干净。没有改善请将问题描述并截屏给 FSE",
                                    "en": "The right antenna has an issue — tighten the right antenna, or dry out any water inside it. If there's no improvement, describe the issue and send a screenshot to FSE",
                                    "leaf": true,
                                    "escalate": true,
                                    "ja": "右側アンテナに問題があります。右側アンテナを締め直すか、アンテナ内部の水分を拭き取ってください。改善しない場合は、状況を説明しスクリーンショットを添えて FSE に送ってください",
                                    "ko": "오른쪽 안테나에 문제가 있습니다. 오른쪽 안테나를 조이거나 안테나 내부의 물기를 닦아내세요. 개선되지 않으면 상황을 설명하고 스크린샷을 첨부해 FSE에 보내세요",
                                    "de": "Die rechte Antenne hat ein Problem: die rechte Antenne festziehen oder Wasser im Inneren der Antenne trocknen. Bei keiner Besserung das Problem beschreiben und einen Screenshot an den FSE senden",
                                    "fr": "L'antenne droite présente un problème : serrer l'antenne droite ou essuyer l'eau à l'intérieur de l'antenne. Si cela ne s'améliore pas, décrire le problème et envoyer une capture d'écran au FSE",
                                    "it": "L'antenna destra ha un problema: stringere l'antenna destra o asciugare l'acqua all'interno dell'antenna. Se non migliora, descrivere il problema e inviare uno screenshot all'FSE",
                                    "ru": "Проблема с правой антенной: затяните правую антенну или удалите влагу внутри антенны. Если улучшения нет, опишите проблему и отправьте скриншот в FSE"
                                  }
                                ],
                                "ja": "L2 = 0",
                                "ko": "L2 = 0",
                                "de": "L2 = 0",
                                "fr": "L2 = 0",
                                "it": "L2 = 0",
                                "ru": "L2 = 0"
                              }
                            ],
                            "ja": "はい",
                            "ko": "예",
                            "de": "Ja",
                            "fr": "Oui",
                            "it": "Sì",
                            "ru": "Да"
                          },
                          {
                            "id": "status-4-no",
                            "zh": "否",
                            "en": "No",
                            "children": [
                              {
                                "id": "left-antenna-issue",
                                "zh": "左天线有问题，拧紧左侧天线或将天线内部的水擦干净。没有改善请将问题描述并截屏给 FSE",
                                "en": "The left antenna has an issue — tighten the left antenna, or dry out any water inside it. If there's no improvement, describe the issue and send a screenshot to FSE",
                                "leaf": true,
                                "escalate": true,
                                "ja": "左側アンテナに問題があります。左側アンテナを締め直すか、アンテナ内部の水分を拭き取ってください。改善しない場合は、状況を説明しスクリーンショットを添えて FSE に送ってください",
                                "ko": "왼쪽 안테나에 문제가 있습니다. 왼쪽 안테나를 조이거나 안테나 내부의 물기를 닦아내세요. 개선되지 않으면 상황을 설명하고 스크린샷을 첨부해 FSE에 보내세요",
                                "de": "Die linke Antenne hat ein Problem: die linke Antenne festziehen oder Wasser im Inneren der Antenne trocknen. Bei keiner Besserung das Problem beschreiben und einen Screenshot an den FSE senden",
                                "fr": "L'antenne gauche présente un problème : serrer l'antenne gauche ou essuyer l'eau à l'intérieur de l'antenne. Si cela ne s'améliore pas, décrire le problème et envoyer une capture d'écran au FSE",
                                "it": "L'antenna sinistra ha un problema: stringere l'antenna sinistra o asciugare l'acqua all'interno dell'antenna. Se non migliora, descrivere il problema e inviare uno screenshot all'FSE",
                                "ru": "Проблема с левой антенной: затяните левую антенну или удалите влагу внутри антенны. Если улучшения нет, опишите проблему и отправьте скриншот в FSE"
                              }
                            ],
                            "ja": "いいえ",
                            "ko": "아니요",
                            "de": "Nein",
                            "fr": "Non",
                            "it": "No",
                            "ru": "Нет"
                          }
                        ],
                        "ja": "status は 4 か？",
                        "ko": "status가 4인가요?",
                        "de": "Ist status gleich 4?",
                        "fr": "Le statut est-il égal à 4 ?",
                        "it": "Lo status è uguale a 4?",
                        "ru": "Равен ли status 4?"
                      }
                    ],
                    "ja": "はい",
                    "ko": "예",
                    "de": "Ja",
                    "fr": "Oui",
                    "it": "Sì",
                    "ru": "Да"
                  },
                  {
                    "id": "mode-true-no",
                    "zh": "否",
                    "en": "No",
                    "children": [
                      {
                        "id": "netrtk",
                        "zh": "netrtk",
                        "en": "netrtk",
                        "children": [
                          {
                            "id": "restart-observe-rtk",
                            "zh": "重启机器再次观察数据",
                            "en": "Restart the machine and observe the data again",
                            "leaf": true,
                            "ja": "機器を再起動し、再度データを確認してください",
                            "ko": "기기를 재부팅한 후 다시 데이터를 확인하세요",
                            "de": "Das Gerät neu starten und die Daten erneut beobachten",
                            "fr": "Redémarrer l'appareil et observer à nouveau les données",
                            "it": "Riavviare il dispositivo e osservare nuovamente i dati",
                            "ru": "Перезапустите устройство и снова понаблюдайте за данными"
                          }
                        ],
                        "ja": "netrtk",
                        "ko": "netrtk",
                        "de": "netrtk",
                        "fr": "netrtk",
                        "it": "netrtk",
                        "ru": "netrtk"
                      }
                    ],
                    "ja": "いいえ",
                    "ko": "아니요",
                    "de": "Nein",
                    "fr": "Non",
                    "it": "No",
                    "ru": "Нет"
                  }
                ],
                "ja": "mode は true か？",
                "ko": "mode가 true인가요?",
                "de": "Ist mode auf true gesetzt?",
                "fr": "Le mode est-il sur true ?",
                "it": "Il mode è impostato su true?",
                "ru": "Равен ли mode значению true?"
              }
            ],
            "ja": "アプリが online 状態になったら、Setting → Diagnose Tools → RTK Part に入ります。Yarbo の電源を入れた直後の場合は、データ収集が安定するまで 3～5 分お待ちください",
            "ko": "앱이 online 상태가 되면 Setting → Diagnose Tools → RTK Part로 들어가세요. Yarbo를 막 켠 경우 데이터 수집이 안정될 때까지 3~5분 기다려야 합니다",
            "de": "Sobald die App online ist, zu Setting → Diagnose Tools → RTK Part gehen. Wurde Yarbo gerade eingeschaltet, 3–5 Minuten warten, bis sich die Datenerfassung stabilisiert",
            "fr": "Une fois que l'application est en ligne, aller dans Setting → Diagnose Tools → RTK Part. Si Yarbo vient d'être allumé, attendre 3 à 5 minutes que la collecte de données se stabilise",
            "it": "Una volta che l'app è online, andare su Setting → Diagnose Tools → RTK Part. Se Yarbo è stato appena acceso, attendere 3-5 minuti affinché la raccolta dati si stabilizzi",
            "ru": "Как только приложение выйдет в онлайн, перейдите в Setting → Diagnose Tools → RTK Part. Если Yarbo только что включили, подождите 3–5 минут для стабилизации сбора данных"
          }
        ],
        "ja": "走行方向異常／GPS 異常",
        "ko": "주행 방향 이상 / GPS 이상",
        "de": "Fahrtrichtungsfehler / GPS-Störung",
        "fr": "Anomalie de direction / Anomalie GPS",
        "it": "Anomalia di direzione / Anomalia GPS",
        "ru": "Аномалия направления движения / Аномалия GPS"
      }
    ],
    "ja": "境界逸脱／走行方向異常／GPS 異常",
    "ko": "경계 이탈 / 주행 방향 이상 / GPS 이상",
    "de": "Grenzüberschreitung / Fahrtrichtungsfehler / GPS-Störung",
    "fr": "Sortie de limite / Anomalie de direction / Anomalie GPS",
    "it": "Uscita dal confine / Anomalia di direzione / Anomalia GPS",
    "ru": "Выход за границу / Аномалия направления движения / Аномалия GPS"
  },
  {
    "id": "camera",
    "zh": "摄像头黑屏",
    "en": "Camera Black Screen",
    "children": [
      {
        "id": "check-state",
        "zh": "在 Diagnose Tools 里看 Camera 部分，查看右侧 state 是否为 0",
        "en": "In Diagnose Tools → Camera, check whether the “state” value on the right is 0",
        "children": [
          {
            "id": "state-is-zero",
            "zh": "若为 0",
            "en": "If it's 0",
            "children": [
              {
                "id": "camera-report-fse",
                "zh": "截屏并上传给 FSE，并说明是工作中断连还是非工作中断连，频繁复现还是偶尔复现",
                "en": "Take a screenshot and send it to FSE, noting whether the disconnect happened during a work session or not, and whether it's frequent or occasional",
                "leaf": true,
                "escalate": true,
                "ja": "スクリーンショットを撮って FSE に送り、作業中に切断したのか、それとも作業中でない時に切断したのか、また頻繁に発生するのか、まれに発生するのかを説明してください",
                "ko": "스크린샷을 찍어 FSE에 전달하고, 작업 중 연결이 끊겼는지 아닌지, 자주 발생하는지 가끔 발생하는지 설명하세요",
                "de": "Einen Screenshot machen und an den FSE senden, dabei angeben, ob die Verbindung während oder außerhalb des Betriebs unterbrochen wurde und ob es häufig oder gelegentlich auftritt",
                "fr": "Faire une capture d'écran et l'envoyer au FSE, en précisant si la déconnexion s'est produite pendant ou en dehors du fonctionnement, et si cela se reproduit fréquemment ou occasionnellement",
                "it": "Fare uno screenshot e inviarlo all'FSE, specificando se la disconnessione è avvenuta durante o al di fuori del funzionamento, e se si ripresenta frequentemente o occasionalmente",
                "ru": "Сделайте скриншот и отправьте в FSE, указав, произошло ли отключение во время работы или вне её, и происходит ли это часто или изредка"
              }
            ],
            "ja": "0 の場合",
            "ko": "0인 경우",
            "de": "Falls 0",
            "fr": "Si 0",
            "it": "Se è 0",
            "ru": "Если 0"
          },
          {
            "id": "state-not-zero",
            "zh": "若不为 0",
            "en": "If it's not 0",
            "children": [
              {
                "id": "camera-restart",
                "zh": "重启机器，若无改善上升 FSE",
                "en": "Restart the machine; if there's no improvement, escalate to FSE",
                "leaf": true,
                "escalate": true,
                "ja": "機器を再起動してください。改善しない場合は FSE にエスカレーションしてください",
                "ko": "기기를 재부팅하세요. 개선되지 않으면 FSE로 에스컬레이션하세요",
                "de": "Das Gerät neu starten; bei keiner Besserung an den FSE eskalieren",
                "fr": "Redémarrer l'appareil ; si aucune amélioration, escalader au FSE",
                "it": "Riavviare il dispositivo; se non migliora, inoltrare all'FSE",
                "ru": "Перезапустите устройство; если улучшения нет, эскалируйте в FSE"
              }
            ],
            "ja": "0 でない場合",
            "ko": "0이 아닌 경우",
            "de": "Falls nicht 0",
            "fr": "Si différent de 0",
            "it": "Se non è 0",
            "ru": "Если не 0"
          }
        ],
        "ja": "Diagnose Tools の Camera 項目を開き、右側の state が 0 かどうかを確認する",
        "ko": "Diagnose Tools의 Camera 항목에서 오른쪽 state 값이 0인지 확인",
        "de": "Im Bereich Camera der Diagnose Tools prüfen, ob der Wert state rechts 0 ist",
        "fr": "Dans la section Camera des Diagnose Tools, vérifier si la valeur state à droite est 0",
        "it": "Nella sezione Camera di Diagnose Tools, verificare se il valore state a destra è 0",
        "ru": "В разделе Camera в Diagnose Tools проверьте, равно ли значение state справа 0"
      }
    ],
    "ja": "カメラの画面が真っ黒になる",
    "ko": "카메라 화면이 검게 나옴",
    "de": "Kamerabildschirm bleibt schwarz",
    "fr": "Écran de la caméra noir",
    "it": "Schermo della fotocamera nero",
    "ru": "Чёрный экран камеры"
  },
  {
    "id": "charging",
    "zh": "无线充电失败",
    "en": "Wireless Charging Failure",
    "children": [
      {
        "id": "fail-on-way-back",
        "zh": "回充路上失败",
        "en": "Fails while returning to dock",
        "children": [
          {
            "id": "pathway-setting",
            "zh": "检查 Pathway 设置是否异常",
            "en": "Check whether the Pathway setting is abnormal",
            "leaf": true,
            "detailZh": "建议关闭 Ultrasonic Sensor。",
            "detailEn": "Recommend turning off the Ultrasonic Sensor.",
            "ja": "Pathway の設定が異常でないか確認する",
            "ko": "Pathway 설정에 이상이 없는지 확인",
            "detailJa": "Ultrasonic Sensor をオフにすることをお勧めします。",
            "detailKo": "Ultrasonic Sensor를 끄는 것을 권장합니다.",
            "de": "Prüfen, ob die Pathway-Einstellung fehlerhaft ist",
            "fr": "Vérifier si le paramètre Pathway est anormal",
            "it": "Verificare se l'impostazione Pathway è anomala",
            "ru": "Проверьте, не является ли настройка Pathway некорректной",
            "detailDe": "Es wird empfohlen, den Ultrasonic Sensor zu deaktivieren.",
            "detailFr": "Il est recommandé de désactiver le capteur à ultrasons (Ultrasonic Sensor).",
            "detailIt": "Si consiglia di disattivare l'Ultrasonic Sensor.",
            "detailRu": "Рекомендуется отключить Ultrasonic Sensor."
          },
          {
            "id": "pathway-rule",
            "zh": "检查 Pathway 绘制是否遵循一对一原则",
            "en": "Check whether the Pathway follows the one-to-one rule",
            "leaf": true,
            "detailZh": "原则：一个 area 连接一个 area，一个 area 连接一个 docking station。",
            "detailEn": "Rule: one area connects to one area, and one area connects to one docking station.",
            "ja": "Pathway の描画が「一対一」の原則に従っているか確認する",
            "ko": "Pathway 그리기가 \"일대일\" 원칙을 따르고 있는지 확인",
            "detailJa": "原則：1 つの area は 1 つの area に接続し、1 つの area は 1 つの docking station に接続します。",
            "detailKo": "원칙: 하나의 area는 하나의 area에 연결되고, 하나의 area는 하나의 docking station에 연결됩니다.",
            "de": "Prüfen, ob beim Zeichnen des Pathway das Eins-zu-eins-Prinzip eingehalten wurde",
            "fr": "Vérifier si le tracé du Pathway respecte le principe un pour un",
            "it": "Verificare se il disegno del Pathway rispetta il principio uno a uno",
            "ru": "Проверьте, соблюдается ли при построении Pathway принцип «один к одному»",
            "detailDe": "Prinzip: Ein Bereich (area) verbindet sich mit einem Bereich, ein Bereich verbindet sich mit einer Ladestation.",
            "detailFr": "Principe : une zone (area) se connecte à une zone, une zone se connecte à une station de charge.",
            "detailIt": "Principio: un'area si collega a un'altra area, un'area si collega a una stazione di ricarica.",
            "detailRu": "Принцип: одна зона (area) соединяется с одной зоной, одна зона соединяется с одной зарядной станцией."
          }
        ],
        "ja": "充電へ戻る途中で失敗する",
        "ko": "충전소로 복귀하는 도중 실패",
        "de": "Fehlschlag auf dem Rückweg zur Ladestation",
        "fr": "Échec sur le chemin de retour à la station de charge",
        "it": "Errore durante il rientro alla stazione di ricarica",
        "ru": "Сбой при возвращении на зарядную станцию"
      },
      {
        "id": "docking-fail",
        "zh": "对桩失败",
        "en": "Docking failure",
        "children": [
          {
            "id": "cant-center-can-charge",
            "zh": "机器无法居中，但手动控制可以充上电",
            "en": "The machine can't center itself, but manual control lets it charge",
            "children": [
              {
                "id": "coil-issue",
                "zh": "充电板定位线圈问题",
                "en": "There's an issue with the charging plate's positioning coil",
                "leaf": true,
                "ja": "充電プレートの位置決めコイルの問題",
                "ko": "충전 패드 위치 인식 코일 문제",
                "de": "Problem mit der Positionierungsspule der Ladeplatte",
                "fr": "Problème de bobine de positionnement de la plaque de charge",
                "it": "Problema alla bobina di posizionamento della piastra di ricarica",
                "ru": "Проблема с катушкой позиционирования зарядной платформы"
              }
            ],
            "ja": "機器は中央に合わせられないが、手動操作では充電できる",
            "ko": "기기가 중앙에 맞춰지지 않지만 수동 조작으로는 충전이 됨",
            "de": "Das Gerät kann sich nicht zentrieren, aber mit manueller Steuerung kann es laden",
            "fr": "L'appareil ne peut pas se centrer, mais peut charger en mode manuel",
            "it": "Il dispositivo non riesce a centrarsi, ma può caricarsi con il controllo manuale",
            "ru": "Устройство не может отцентрироваться, но может заряжаться при ручном управлении"
          },
          {
            "id": "can-center-cant-charge",
            "zh": "机器可以居中，但无法充电",
            "en": "The machine centers itself, but can't charge",
            "children": [
              {
                "id": "rtk-accurate-consistent",
                "zh": "RTK 精确，且地图位置与现实一致",
                "en": "RTK is accurate, and the map position matches reality",
                "children": [
                  {
                    "id": "contact-fse-remote",
                    "zh": "联系 FSE 并描述现象，远程排查",
                    "en": "Contact FSE, describe the symptom, and proceed with remote troubleshooting",
                    "leaf": true,
                    "escalate": true,
                    "ja": "FSE に連絡して現象を説明し、リモートで調査してもらってください",
                    "ko": "FSE에 연락해 현상을 설명하고 원격으로 조사를 요청하세요",
                    "de": "Den FSE kontaktieren, das Phänomen beschreiben und eine Ferndiagnose durchführen lassen",
                    "fr": "Contacter le FSE, décrire le phénomène et procéder à un dépannage à distance",
                    "it": "Contattare l'FSE, descrivere il fenomeno e procedere con la risoluzione da remoto",
                    "ru": "Обратитесь в FSE, опишите проявление и проведите удалённую диагностику"
                  }
                ],
                "ja": "RTK は正確で、マップ上の位置も実際と一致している",
                "ko": "RTK가 정확하고 지도상 위치도 실제와 일치함",
                "de": "RTK ist präzise, und die Kartenposition stimmt mit der Realität überein",
                "fr": "Le RTK est précis et la position sur la carte correspond à la réalité",
                "it": "L'RTK è preciso e la posizione sulla mappa corrisponde alla realtà",
                "ru": "RTK точен, и положение на карте совпадает с реальностью"
              },
              {
                "id": "rtk-accurate-inconsistent",
                "zh": "RTK 精确，但地图位置与现实不一致",
                "en": "RTK is accurate, but the map position doesn't match reality",
                "children": [
                  {
                    "id": "manual-correct",
                    "zh": "手动将机器对桩，并点击 Correct Map Drift",
                    "en": "Manually dock the machine, then tap Correct Map Drift",
                    "children": [
                      {
                        "id": "correction-improved",
                        "zh": "有改善",
                        "en": "Improved",
                        "leaf": true,
                        "resolved": true,
                        "detailZh": "问题已解决。",
                        "detailEn": "Issue resolved.",
                        "ja": "改善した",
                        "ko": "개선됨",
                        "detailJa": "問題は解決しました。",
                        "detailKo": "문제가 해결되었습니다.",
                        "de": "Verbessert",
                        "fr": "Amélioration",
                        "it": "Migliorato",
                        "ru": "Улучшилось",
                        "detailDe": "Problem gelöst.",
                        "detailFr": "Problème résolu.",
                        "detailIt": "Problema risolto.",
                        "detailRu": "Проблема решена."
                      },
                      {
                        "id": "correction-not-improved",
                        "zh": "无改善",
                        "en": "No improvement",
                        "leaf": true,
                        "escalate": true,
                        "detailZh": "联系 FSE 进行远程排查。",
                        "detailEn": "Contact FSE for remote troubleshooting.",
                        "ja": "改善しない",
                        "ko": "개선되지 않음",
                        "detailJa": "FSE に連絡してリモートで調査してもらってください。",
                        "detailKo": "FSE에 연락하여 원격 조사를 요청하세요.",
                        "de": "Keine Besserung",
                        "fr": "Aucune amélioration",
                        "it": "Nessun miglioramento",
                        "ru": "Без улучшений",
                        "detailDe": "Den FSE für eine Ferndiagnose kontaktieren.",
                        "detailFr": "Contacter le FSE pour un dépannage à distance.",
                        "detailIt": "Contattare l'FSE per la risoluzione da remoto.",
                        "detailRu": "Обратитесь в FSE для удалённой диагностики."
                      }
                    ],
                    "ja": "手動で機器をドッキングさせ、Correct Map Drift をタップしてください",
                    "ko": "수동으로 기기를 도킹시킨 후 Correct Map Drift를 탭하세요",
                    "de": "Das Gerät manuell andocken und auf „Correct Map Drift\" tippen",
                    "fr": "Accoster manuellement l'appareil et appuyer sur « Correct Map Drift »",
                    "it": "Agganciare manualmente il dispositivo e toccare \"Correct Map Drift\"",
                    "ru": "Вручную состыкуйте устройство и нажмите «Correct Map Drift»"
                  }
                ],
                "ja": "RTK は正確だが、マップ上の位置が実際と一致していない",
                "ko": "RTK는 정확하지만 지도상 위치가 실제와 일치하지 않음",
                "de": "RTK ist präzise, aber die Kartenposition stimmt nicht mit der Realität überein",
                "fr": "Le RTK est précis, mais la position sur la carte ne correspond pas à la réalité",
                "it": "L'RTK è preciso, ma la posizione sulla mappa non corrisponde alla realtà",
                "ru": "RTK точен, но положение на карте не совпадает с реальностью"
              }
            ],
            "ja": "機器は中央に合わせられるが、充電できない",
            "ko": "기기가 중앙에 맞춰지지만 충전이 되지 않음",
            "de": "Das Gerät kann sich zentrieren, lädt aber nicht",
            "fr": "L'appareil peut se centrer, mais ne charge pas",
            "it": "Il dispositivo riesce a centrarsi, ma non si ricarica",
            "ru": "Устройство может отцентрироваться, но не заряжается"
          }
        ],
        "ja": "ドッキングの失敗",
        "ko": "도킹 실패",
        "de": "Andocken fehlgeschlagen",
        "fr": "Échec de l'accostage",
        "it": "Aggancio non riuscito",
        "ru": "Сбой стыковки"
      },
      {
        "id": "battery-issues",
        "zh": "电池无法充满、充电过慢、电池消耗过快",
        "en": "Battery won't fully charge, charges too slowly, or drains too fast",
        "children": [
          {
            "id": "power-off-rest",
            "zh": "关机静置 4 小时",
            "en": "Power off and let it rest for 4 hours",
            "children": [
              {
                "id": "rest-result",
                "zh": "再次跑计划观察，无改善联系 FSE",
                "en": "Run a plan again and observe — if there's no improvement, contact FSE",
                "leaf": true,
                "escalate": true,
                "ja": "再度作業プランを実行して様子を見てください。改善しない場合は FSE に連絡してください",
                "ko": "다시 작업 계획을 실행해 상태를 지켜보세요. 개선되지 않으면 FSE에 문의하세요",
                "de": "Erneut einen Plan ausführen und beobachten; bei keiner Besserung den FSE kontaktieren",
                "fr": "Relancer un plan et observer ; si aucune amélioration, contacter le FSE",
                "it": "Eseguire nuovamente un piano e osservare; se non migliora, contattare l'FSE",
                "ru": "Снова запустите план и понаблюдайте; если улучшения нет, обратитесь в FSE"
              }
            ],
            "ja": "電源を切って 4 時間放置する",
            "ko": "전원을 끄고 4시간 동안 그대로 둠",
            "de": "Das Gerät ausschalten und 4 Stunden lang ruhen lassen",
            "fr": "Éteindre l'appareil et le laisser au repos pendant 4 heures",
            "it": "Spegnere il dispositivo e lasciarlo a riposo per 4 ore",
            "ru": "Выключите устройство и оставьте его в покое на 4 часа"
          }
        ],
        "ja": "バッテリーが満充電にならない、充電が遅い、消耗が早い",
        "ko": "배터리가 완전히 충전되지 않음, 충전 속도가 느림, 소모가 너무 빠름",
        "de": "Der Akku lädt nicht vollständig auf, lädt zu langsam oder entlädt sich zu schnell",
        "fr": "La batterie ne se charge pas complètement, se charge trop lentement ou se décharge trop vite",
        "it": "La batteria non si carica completamente, si carica troppo lentamente o si scarica troppo velocemente",
        "ru": "Аккумулятор не заряжается полностью, заряжается слишком медленно или разряжается слишком быстро"
      }
    ],
    "ja": "ワイヤレス充電の失敗",
    "ko": "무선 충전 실패",
    "de": "Kabelloses Laden fehlgeschlagen",
    "fr": "Échec de la charge sans fil",
    "it": "Ricarica wireless non riuscita",
    "ru": "Сбой беспроводной зарядки"
  },
  {
    "id": "datacenter",
    "zh": "Data Center 异常排查",
    "en": "Data Center Troubleshooting",
    "children": [
      {
        "id": "dc-red-light",
        "zh": "现象：DC 亮红灯",
        "en": "Symptom: DC shows a red light",
        "children": [
          {
            "id": "swap-rtk",
            "zh": "DC 的 RTK 存在问题，可拆下 Core 的 RTK 装到 DC 上，查看是否变绿",
            "en": "The DC's RTK has an issue — try removing the Core's RTK and fitting it to the DC to see if it turns green",
            "children": [
              {
                "id": "dc-no-improvement",
                "zh": "无改善",
                "en": "No improvement",
                "leaf": true,
                "escalate": true,
                "detailZh": "描述排查过程，并上报给 FSE。",
                "detailEn": "Describe the troubleshooting steps taken, and escalate to FSE.",
                "ja": "改善しない",
                "ko": "개선되지 않음",
                "detailJa": "トラブルシューティングの経過を説明し、FSE に報告してください。",
                "detailKo": "문제 해결 과정을 설명하고 FSE에 보고하세요.",
                "de": "Keine Besserung",
                "fr": "Aucune amélioration",
                "it": "Nessun miglioramento",
                "ru": "Без улучшений",
                "detailDe": "Den Fehlerbehebungsprozess beschreiben und an den FSE melden.",
                "detailFr": "Décrire le processus de dépannage et le signaler au FSE.",
                "detailIt": "Descrivere il processo di risoluzione dei problemi e segnalarlo all'FSE.",
                "detailRu": "Опишите ход диагностики и сообщите об этом в FSE."
              }
            ],
            "ja": "DC の RTK に問題がある可能性があります。Core の RTK を取り外して DC に取り付け、緑ランプに変わるか確認してください",
            "ko": "DC의 RTK에 문제가 있을 수 있습니다. Core의 RTK를 분리해 DC에 장착한 후 초록색으로 바뀌는지 확인하세요",
            "de": "Es liegt ein Problem mit dem RTK des DC vor. Das RTK des Core ausbauen und am DC anbringen, um zu prüfen, ob es grün wird",
            "fr": "Il y a un problème avec le RTK du DC. Retirer le RTK du Core et l'installer sur le DC pour voir s'il devient vert",
            "it": "C'è un problema con l'RTK del DC. Rimuovere l'RTK del Core e installarlo sul DC per verificare se diventa verde",
            "ru": "Проблема с RTK у DC. Снимите RTK с Core и установите на DC, чтобы проверить, станет ли индикатор зелёным"
          }
        ],
        "ja": "症状：DC が赤ランプを点灯する",
        "ko": "증상: DC에 빨간색 표시등이 켜짐",
        "de": "Symptom: Die DC-Leuchte leuchtet rot",
        "fr": "Symptôme : le voyant du DC est rouge",
        "it": "Sintomo: la spia del DC è rossa",
        "ru": "Симптом: индикатор DC горит красным"
      }
    ],
    "ja": "Data Center の異常トラブルシューティング",
    "ko": "Data Center 이상 문제 해결",
    "de": "Fehlerbehebung bei Data Center-Anomalien",
    "fr": "Dépannage des anomalies du Data Center",
    "it": "Risoluzione delle anomalie del Data Center",
    "ru": "Диагностика неисправностей Data Center"
  }
];

const ERROR_CODES = [
  {
    "code": "B009",
    "titleZh": "B009",
    "titleEn": "B009",
    "highFreq": true,
    "stepsZh": [
      "排查前先前往 Version Information 查看固件版本是否为最新。",
      "下一步进行交叉验证 —— 更换一个车头（Core）。若报错消失，说明是车头问题；若报错未消失，说明是 Core 的问题。"
    ],
    "stepsEn": [
      "Before troubleshooting, go to Version Information and confirm the firmware is up to date.",
      "Next, cross-verify by swapping the mower head (Core). If the error disappears, it's a mower-head issue; if it persists, it's a Core issue."
    ],
    "titleJa": "B009",
    "titleKo": "B009",
    "stepsJa": [
      "トラブルシューティングの前に、まず Version Information でファームウェアが最新版かどうかを確認してください。",
      "次に交差検証を行います ― 車頭（Core）を交換してください。エラーが消えれば車頭側の問題、消えなければ Core 側の問題です。"
    ],
    "stepsKo": [
      "문제를 해결하기 전에 먼저 Version Information에서 펌웨어가 최신 버전인지 확인하세요.",
      "다음으로 교차 검증을 진행합니다 — 차두(Core)를 교체하세요. 오류가 사라지면 차두 문제이고, 사라지지 않으면 Core 문제입니다."
    ],
    "titleDe": "B009",
    "titleFr": "B009",
    "titleIt": "B009",
    "titleRu": "B009",
    "stepsDe": [
      "Vor der Fehlerbehebung zunächst unter Version Information prüfen, ob die Firmware auf dem neuesten Stand ist.",
      "Als Nächstes eine Kreuzprüfung durchführen — den Fahrzeugkopf (Core) austauschen. Verschwindet der Fehler, liegt es am Fahrzeugkopf; bleibt der Fehler bestehen, liegt es am Core."
    ],
    "stepsFr": [
      "Avant le dépannage, vérifier d'abord dans Version Information si le firmware est à jour.",
      "Ensuite, effectuer une vérification croisée — remplacer la tête motrice (Core). Si l'erreur disparaît, le problème vient de la tête motrice ; si elle persiste, le problème vient du Core."
    ],
    "stepsIt": [
      "Prima della risoluzione dei problemi, verificare in Version Information se il firmware è aggiornato.",
      "Successivamente, eseguire una verifica incrociata: sostituire la testa motrice (Core). Se l'errore scompare, il problema è nella testa motrice; se persiste, il problema è nel Core."
    ],
    "stepsRu": [
      "Перед диагностикой сначала проверьте в Version Information, установлена ли последняя версия прошивки.",
      "Далее проведите перекрёстную проверку — замените головной блок (Core). Если ошибка исчезнет, проблема в головном блоке; если ошибка сохранится, проблема в Core."
    ]
  },
  {
    "code": "Left Cutting Motor Blocked",
    "titleZh": "Left Cutting Motor Blocked（左切割电机堵转）",
    "titleEn": "Left Cutting Motor Blocked",
    "highFreq": true,
    "stepsZh": [
      "首先确认是否真的堵转。",
      "清除杂物后检查轴承是否变形。",
      "若无变形，清理干净后重启 Yarbo；若报错仍未消失，联系 FSE。"
    ],
    "stepsEn": [
      "First confirm whether the motor is actually blocked.",
      "Clear any debris, then check whether the bearing is deformed.",
      "If it's not deformed, clean it thoroughly and restart Yarbo; if the error persists, contact FSE."
    ],
    "titleJa": "Left Cutting Motor Blocked（左カッターモーターの詰まり）",
    "titleKo": "Left Cutting Motor Blocked(왼쪽 절삭 모터 걸림)",
    "stepsJa": [
      "まず本当に詰まっているかを確認してください。",
      "異物を取り除いた後、ベアリングが変形していないか確認してください。",
      "変形がなければ、清掃してから Yarbo を再起動してください。それでもエラーが消えない場合は FSE に連絡してください。"
    ],
    "stepsKo": [
      "먼저 실제로 걸려 있는지 확인하세요.",
      "이물질을 제거한 후 베어링이 변형되었는지 확인하세요.",
      "변형이 없다면 깨끗이 청소한 후 Yarbo를 재부팅하세요. 그래도 오류가 사라지지 않으면 FSE에 문의하세요."
    ],
    "titleDe": "Left Cutting Motor Blocked (linker Schneidmotor blockiert)",
    "titleFr": "Left Cutting Motor Blocked (moteur de coupe gauche bloqué)",
    "titleIt": "Left Cutting Motor Blocked (motore di taglio sinistro bloccato)",
    "titleRu": "Left Cutting Motor Blocked (заблокирован левый режущий мотор)",
    "stepsDe": [
      "Zunächst bestätigen, ob tatsächlich eine Blockierung vorliegt.",
      "Fremdkörper entfernen und prüfen, ob das Lager verformt ist.",
      "Liegt keine Verformung vor, gründlich reinigen und Yarbo neu starten; bleibt der Fehler bestehen, den FSE kontaktieren."
    ],
    "stepsFr": [
      "Vérifier d'abord s'il s'agit réellement d'un blocage.",
      "Retirer les débris puis vérifier si le roulement est déformé.",
      "En l'absence de déformation, nettoyer soigneusement puis redémarrer Yarbo ; si l'erreur persiste, contacter le FSE."
    ],
    "stepsIt": [
      "Verificare innanzitutto se si tratta effettivamente di un blocco.",
      "Rimuovere i detriti e verificare se il cuscinetto è deformato.",
      "Se non c'è deformazione, pulire accuratamente e riavviare Yarbo; se l'errore persiste, contattare l'FSE."
    ],
    "stepsRu": [
      "Сначала убедитесь, что действительно произошла блокировка.",
      "Уберите мусор и проверьте, не деформирован ли подшипник.",
      "Если деформации нет, тщательно очистите и перезапустите Yarbo; если ошибка сохранится, обратитесь в FSE."
    ]
  },
  {
    "code": "Collision Occurred",
    "titleZh": "Collision Occurred（碰撞检测触发）",
    "titleEn": "Collision Occurred",
    "highFreq": true,
    "stepsZh": [
      "指导用户拆卸碰撞条。若拆掉后报错消失，更换碰撞条部件即可。",
      "若报错未消失，建议更换割草头，并联系 FSE 发起换货流程。"
    ],
    "stepsEn": [
      "Guide the user to remove the bumper. If the error clears once it's removed, simply replace the bumper part.",
      "If the error persists, recommend replacing the mower head and contact FSE to start a replacement process."
    ],
    "titleJa": "Collision Occurred（衝突検知が作動）",
    "titleKo": "Collision Occurred(충돌 감지 작동)",
    "stepsJa": [
      "ユーザーに衝突バンパーの取り外しを案内してください。取り外してエラーが消えれば、衝突バンパー部品を交換するだけで解決します。",
      "エラーが消えない場合は、芝刈りヘッドの交換をお勧めします。FSE に連絡して交換手続きを開始してください。"
    ],
    "stepsKo": [
      "사용자에게 충돌 범퍼를 분리하도록 안내하세요. 분리 후 오류가 사라지면 충돌 범퍼 부품만 교체하면 됩니다.",
      "오류가 사라지지 않으면 잔디깎이 헤드 교체를 권장하며, FSE에 연락해 교체 절차를 시작하세요."
    ],
    "titleDe": "Collision Occurred (Kollisionserkennung ausgelöst)",
    "titleFr": "Collision Occurred (détection de collision déclenchée)",
    "titleIt": "Collision Occurred (rilevamento collisione attivato)",
    "titleRu": "Collision Occurred (сработало обнаружение столкновения)",
    "stepsDe": [
      "Den Nutzer anleiten, den Stoßfänger (Bumper) abzunehmen. Verschwindet der Fehler danach, genügt es, das Bumper-Teil auszutauschen.",
      "Bleibt der Fehler bestehen, wird empfohlen, den Mähkopf auszutauschen und den FSE zu kontaktieren, um den Austauschprozess einzuleiten."
    ],
    "stepsFr": [
      "Guider l'utilisateur pour retirer le pare-chocs (bumper). Si l'erreur disparaît après le retrait, il suffit de remplacer la pièce du pare-chocs.",
      "Si l'erreur persiste, il est recommandé de remplacer la tête de tonte et de contacter le FSE pour lancer la procédure de remplacement."
    ],
    "stepsIt": [
      "Guidare l'utente nella rimozione del paraurti (bumper). Se l'errore scompare dopo la rimozione, è sufficiente sostituire il componente del paraurti.",
      "Se l'errore persiste, si consiglia di sostituire la testa di taglio e contattare l'FSE per avviare la procedura di sostituzione."
    ],
    "stepsRu": [
      "Проинструктируйте пользователя снять бампер. Если после снятия ошибка исчезнет, достаточно заменить деталь бампера.",
      "Если ошибка сохранится, рекомендуется заменить косильную головку и обратиться в FSE для запуска процедуры замены."
    ]
  },
  {
    "code": "RC004",
    "titleZh": "RC004",
    "titleEn": "RC004",
    "highFreq": true,
    "stepsZh": [
      "电机编码器线束松动，建议更换割草头。"
    ],
    "stepsEn": [
      "The motor encoder wiring harness is loose — recommend replacing the mower head."
    ],
    "titleJa": "RC004",
    "titleKo": "RC004",
    "stepsJa": [
      "モーターエンコーダーのワイヤーハーネスが緩んでいます。芝刈りヘッドの交換をお勧めします。"
    ],
    "stepsKo": [
      "모터 엔코더 배선이 헐거워졌습니다. 잔디깎이 헤드 교체를 권장합니다."
    ],
    "titleDe": "RC004",
    "titleFr": "RC004",
    "titleIt": "RC004",
    "titleRu": "RC004",
    "stepsDe": [
      "Der Kabelbaum des Motorencoders ist locker; es wird empfohlen, den Mähkopf auszutauschen."
    ],
    "stepsFr": [
      "Le faisceau de câbles de l'encodeur du moteur est desserré ; il est recommandé de remplacer la tête de tonte."
    ],
    "stepsIt": [
      "Il cablaggio dell'encoder del motore è allentato; si consiglia di sostituire la testa di taglio."
    ],
    "stepsRu": [
      "Ослаблена проводка энкодера двигателя; рекомендуется заменить косильную головку."
    ]
  },
  {
    "code": "Please wait until the blades reach the required speed.",
    "titleZh": "Please wait until the blades reach the required speed.",
    "titleEn": "Please wait until the blades reach the required speed.",
    "highFreq": true,
    "stepsZh": [
      "报错当下打开 Diagnose Tools → Main Part，查看 Emergency Stop 数字是否为 2（截屏保存）。",
      "该报错有两种情况：",
      "1）偶发性：在工作计划中偶尔出现，重启后恢复，断断续续。",
      "2）持续性：一直报错，导致完全无法割草。",
      "上报给 FSE 时，请务必说明属于哪一种情况。"
    ],
    "stepsEn": [
      "When the error occurs, open Diagnose Tools → Main Part and check whether the Emergency Stop value is 2 (save a screenshot).",
      "This error shows up in two patterns:",
      "1) Occasional: appears now and then during a work plan, recovers after a restart, intermittent.",
      "2) Persistent: the error keeps occurring, making mowing completely impossible.",
      "When reporting to FSE, be sure to specify which pattern it is."
    ],
    "titleJa": "Please wait until the blades reach the required speed.",
    "titleKo": "Please wait until the blades reach the required speed.",
    "stepsJa": [
      "エラー発生時に Diagnose Tools → Main Part を開き、Emergency Stop の数値が 2 かどうかを確認してください（スクリーンショットを保存）。",
      "このエラーには 2 つのパターンがあります：",
      "1）偶発性：作業プラン中にまれに発生し、再起動すると回復する、断続的なもの。",
      "2）持続性：常にエラーが発生し、芝刈りが全くできなくなるもの。",
      "FSE に報告する際は、必ずどちらのパターンかを明記してください。"
    ],
    "stepsKo": [
      "오류가 발생하는 즉시 Diagnose Tools → Main Part를 열어 Emergency Stop 수치가 2인지 확인하세요(스크린샷 저장).",
      "이 오류에는 두 가지 패턴이 있습니다:",
      "1) 산발적: 작업 계획 중 가끔 발생하고 재부팅하면 회복되는, 간헐적인 경우.",
      "2) 지속적: 계속 오류가 발생하여 잔디 깎기가 완전히 불가능한 경우.",
      "FSE에 보고할 때는 반드시 어느 경우에 해당하는지 명시하세요."
    ],
    "titleDe": "Please wait until the blades reach the required speed.",
    "titleFr": "Please wait until the blades reach the required speed.",
    "titleIt": "Please wait until the blades reach the required speed.",
    "titleRu": "Please wait until the blades reach the required speed.",
    "stepsDe": [
      "Beim Auftreten des Fehlers Diagnose Tools → Main Part öffnen und prüfen, ob der Wert von Emergency Stop 2 ist (Screenshot speichern).",
      "Dieser Fehler tritt in zwei Formen auf:",
      "1) Gelegentlich: tritt während eines Arbeitsplans gelegentlich auf, erholt sich nach einem Neustart, unregelmäßig.",
      "2) Anhaltend: der Fehler tritt durchgehend auf und macht das Mähen vollständig unmöglich.",
      "Bei der Meldung an den FSE unbedingt angeben, um welche der beiden Situationen es sich handelt."
    ],
    "stepsFr": [
      "Au moment de l'erreur, ouvrir Diagnose Tools → Main Part et vérifier si la valeur d'Emergency Stop est 2 (enregistrer une capture d'écran).",
      "Cette erreur se présente sous deux formes :",
      "1) Occasionnelle : apparaît occasionnellement pendant un plan de travail, se rétablit après un redémarrage, de façon intermittente.",
      "2) Persistante : l'erreur se produit en continu, rendant la tonte totalement impossible.",
      "Lors du signalement au FSE, veillez à préciser de quelle situation il s'agit."
    ],
    "stepsIt": [
      "Al momento dell'errore, aprire Diagnose Tools → Main Part e verificare se il valore di Emergency Stop è 2 (salvare uno screenshot).",
      "Questo errore si presenta in due modalità:",
      "1) Occasionale: si verifica occasionalmente durante un piano di lavoro, si risolve dopo un riavvio, in modo intermittente.",
      "2) Persistente: l'errore si verifica continuamente, rendendo il taglio dell'erba completamente impossibile.",
      "Quando si segnala all'FSE, specificare sempre a quale delle due situazioni si riferisce."
    ],
    "stepsRu": [
      "В момент ошибки откройте Diagnose Tools → Main Part и проверьте, равно ли значение Emergency Stop 2 (сохраните скриншот).",
      "Эта ошибка проявляется в двух вариантах:",
      "1) Спорадическая: изредка возникает во время выполнения плана работы, устраняется после перезапуска, проявляется непостоянно.",
      "2) Постоянная: ошибка возникает непрерывно, что делает стрижку полностью невозможной.",
      "При обращении в FSE обязательно укажите, какой именно из этих случаев имеет место."
    ]
  }
];

const CODES_PREFACE = {
  "zh": [
    "现象：App 已报出 error message，可根据错误代码进行搜索。",
    "没有搜索到的错误代码，代表暂时无法进行前置排查，请直接截屏并上报 FSE。"
  ],
  "en": [
    "Symptom: the app has shown an error message — search by the error code below.",
    "A code that isn't found means it can't be pre-diagnosed remotely. Please take a screenshot and escalate to FSE directly."
  ],
  "ja": [
    "症状：アプリにエラーメッセージが表示されています。エラーコードで検索してください。",
    "検索してもヒットしないエラーコードは、現時点で事前診断ができないことを意味します。スクリーンショットを撮って直接 FSE に報告してください。"
  ],
  "ko": [
    "증상: 앱에 오류 메시지가 표시되었습니다. 오류 코드로 검색하세요.",
    "검색해도 나오지 않는 오류 코드는 현재 사전 진단이 불가능하다는 의미입니다. 스크린샷을 찍어 바로 FSE에 보고하세요."
  ],
  "de": [
    "Symptom: Die App hat eine Fehlermeldung angezeigt — anhand des Fehlercodes suchen.",
    "Ein nicht gefundener Fehlercode bedeutet, dass momentan keine vorgelagerte Diagnose möglich ist; bitte direkt einen Screenshot machen und an den FSE melden."
  ],
  "fr": [
    "Symptôme : l'application a affiché un message d'erreur — effectuer une recherche à partir du code d'erreur.",
    "Un code d'erreur introuvable signifie qu'un diagnostic préalable n'est pas possible pour l'instant ; veuillez faire une capture d'écran et la signaler directement au FSE."
  ],
  "it": [
    "Sintomo: l'app ha mostrato un messaggio di errore: effettuare una ricerca in base al codice di errore.",
    "Un codice di errore non trovato significa che al momento non è possibile una diagnosi preliminare; effettuare uno screenshot e segnalarlo direttamente all'FSE."
  ],
  "ru": [
    "Симптом: в приложении появилось сообщение об ошибке — выполните поиск по коду ошибки.",
    "Если код ошибки не найден, это означает, что предварительная диагностика пока невозможна; сделайте скриншот и сообщите об этом непосредственно в FSE."
  ]
};

const VIDEOS = [
  {
    id: "core",
    zh: "核心主机（通用配件）",
    en: "Core Unit (Common Parts)",
    ja: "コア本体（共通部品）",
    ko: "코어 본체(공통 부품)",
    de: "Kerneinheit (allgemeine Teile)",
    fr: "Unité principale (pièces communes)",
    it: "Unità principale (parti comuni)",
    ru: "Базовый блок (общие детали)",
    items: [
      { id: "v-actuator", titleEn: "How to Change Linear Actuator Motor", titleZh: "更换推杆电机", titleJa: "リニアアクチュエーターモーターの交換方法", titleKo: "리니어 액추에이터 모터 교체 방법", titleDe: "So wechseln Sie den Linearantriebsmotor", titleFr: "Comment changer le moteur de l'actionneur linéaire", titleIt: "Come sostituire il motore dell'attuatore lineare", titleRu: "Как заменить мотор линейного привода",
        links: [{ type: "drive", url: null }] },
      { id: "v-track-motor", titleEn: "How to replace the motor track module", titleZh: "更换行走电机履带模块", titleJa: "走行モーター履帯モジュールの交換方法", titleKo: "주행 모터 트랙 모듈 교체 방법", titleDe: "So ersetzen Sie das Antriebsmotor-Kettenmodul", titleFr: "Comment remplacer le module de chenille du moteur", titleIt: "Come sostituire il modulo cingolo del motore", titleRu: "Как заменить модуль гусеницы ходового двигателя",
        links: [{ type: "youtube", url: "https://youtu.be/78bEWqKmkxY" }] },
      { id: "v-estop-button", titleEn: "How to Replace the Emergency Button", titleZh: "更换急停", titleJa: "緊急停止ボタンの交換方法", titleKo: "비상 정지 버튼 교체 방법", titleDe: "So ersetzen Sie den Not-Aus-Knopf", titleFr: "Comment remplacer le bouton d'arrêt d'urgence", titleIt: "Come sostituire il pulsante di arresto di emergenza", titleRu: "Как заменить кнопку аварийной остановки",
        links: [{ type: "youtube", url: "https://youtu.be/H1R_j9qenSo" }, { type: "wiki", url: "https://wiki.yarbo.com/en/sam/installation/emergency-stop-button" }] },
      { id: "v-estop-wiring", titleEn: "How to Replace E-Stop wiring", titleZh: "更换急停线束", titleJa: "緊急停止用配線の交換方法", titleKo: "비상 정지 배선 교체 방법", titleDe: "So ersetzen Sie die Not-Aus-Verkabelung", titleFr: "Comment remplacer le câblage d'arrêt d'urgence", titleIt: "Come sostituire il cablaggio dell'arresto di emergenza", titleRu: "Как заменить проводку аварийной остановки",
        links: [{ type: "drive", url: null }] },
      { id: "v-rear-cover", titleEn: "How to Repair a Stuck Rear Cover?", titleZh: "尾部金属变形", titleJa: "固着したリアカバーの修理方法", titleKo: "걸린 리어 커버 수리 방법", titleDe: "So reparieren Sie eine festsitzende Heckabdeckung", titleFr: "Comment réparer un couvercle arrière coincé ?", titleIt: "Come riparare un coperchio posteriore bloccato?", titleRu: "Как отремонтировать заклинившую заднюю крышку?",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=VxLPnGC8otw" }] },
      { id: "v-rear-bumper", titleEn: "How to replace rear bumper", titleZh: "更换尾部保险杠（螺丝版）", titleJa: "リアバンパーの交換方法", titleKo: "리어 범퍼 교체 방법", titleDe: "So ersetzen Sie den hinteren Stoßfänger", titleFr: "Comment remplacer le pare-chocs arrière", titleIt: "Come sostituire il paraurti posteriore", titleRu: "Как заменить задний бампер",
        links: [{ type: "youtube", url: "https://youtu.be/xBjANIKXP98" }] },
      { id: "v-host-shell", titleEn: "How to Replace Host Shell", titleZh: "更换车身上壳体", titleJa: "本体シェルの交換方法", titleKo: "본체 쉘 교체 방법", titleDe: "So ersetzen Sie das Gehäuse", titleFr: "Comment remplacer la coque du boîtier", titleIt: "Come sostituire il guscio dell'unità principale", titleRu: "Как заменить корпус основного блока",
        links: [{ type: "youtube", url: "https://youtu.be/BpVkGcbGw1Q" }] },
      { id: "v-drive-wheels", titleEn: "Replace Drive Wheels", titleZh: "更换驱动轮", titleJa: "駆動輪の交換", titleKo: "구동 휠 교체", titleDe: "Antriebsräder austauschen", titleFr: "Remplacer les roues motrices", titleIt: "Sostituire le ruote motrici", titleRu: "Замена ведущих колёс",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=nmqb1CwiSDs" }] },
      { id: "v-driven-wheel-bolt", titleEn: "How to Replace a driven wheel Bolt", titleZh: "更换从动轮轴", titleJa: "従動輪ボルトの交換方法", titleKo: "종동 휠 볼트 교체 방법", titleDe: "So ersetzen Sie die Bolzen des Laufrads", titleFr: "Comment remplacer le boulon de la roue folle", titleIt: "Come sostituire il bullone della ruota condotta", titleRu: "Как заменить болт ведомого колеса",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=e3gDmhPGtn0" }] },
      { id: "v-driven-wheel", titleEn: "How to Replace a driven wheel", titleZh: "更换从动轮", titleJa: "従動輪の交換方法", titleKo: "종동 휠 교체 방법", titleDe: "So ersetzen Sie ein Laufrad", titleFr: "Comment remplacer une roue folle", titleIt: "Come sostituire una ruota condotta", titleRu: "Как заменить ведомое колесо",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=CZ6p7VgEgps" }] },
      { id: "v-lifting-module", titleEn: "Lifting Module Reinforcement Guide", titleZh: "顶升加强", titleJa: "リフティングモジュール補強ガイド", titleKo: "리프팅 모듈 보강 가이드", titleDe: "Verstärkungsanleitung für das Hubmodul", titleFr: "Guide de renforcement du module de levage", titleIt: "Guida al rinforzo del modulo di sollevamento", titleRu: "Руководство по усилению подъёмного модуля",
        links: [{ type: "youtube", url: "https://youtu.be/sQnOtG860yE" }] },
      { id: "v-cable-guard", titleEn: "Add Cable Protection Guard", titleZh: "安装线缆保护板", titleJa: "ケーブル保護ガードの取り付け", titleKo: "케이블 보호 가드 장착", titleDe: "Kabelschutzabdeckung anbringen", titleFr: "Ajouter une protection de câble", titleIt: "Aggiungere la protezione dei cavi", titleRu: "Установка защитного кожуха для кабеля",
        links: [{ type: "youtube", url: "https://youtu.be/zJF1VPHlRDg" }] },
      { id: "v-side-camera", titleEn: "Replace Side Camera Module", titleZh: "更换侧摄像头三合一模块", titleJa: "サイドカメラモジュールの交換", titleKo: "사이드 카메라 모듈 교체", titleDe: "Seitenkameramodul austauschen", titleFr: "Remplacer le module de caméra latérale", titleIt: "Sostituire il modulo della fotocamera laterale", titleRu: "Замена бокового камерного модуля",
        links: [{ type: "youtube", url: "https://youtu.be/7on0DteVH7I?si=SKV6tbr0UkdVgkHC" }] },
      { id: "v-side-camera-2025", titleEn: "Replace Side Camera Module (2025 Updated)", titleZh: "更换25新版侧摄像头模块", titleJa: "サイドカメラモジュールの交換（2025年更新版）", titleKo: "사이드 카메라 모듈 교체(2025년 업데이트)", titleDe: "Seitenkameramodul austauschen (Update 2025)", titleFr: "Remplacer le module de caméra latérale (mise à jour 2025)", titleIt: "Sostituire il modulo della fotocamera laterale (aggiornamento 2025)", titleRu: "Замена бокового камерного модуля (обновление 2025)",
        links: [{ type: "youtube", url: "https://youtu.be/uz6owhs41ek" }] },
      { id: "v-rear-camera", titleEn: "Replace Rear Camera Module", titleZh: "更换尾部摄像头", titleJa: "リアカメラモジュールの交換", titleKo: "리어 카메라 모듈 교체", titleDe: "Rückkameramodul austauschen", titleFr: "Remplacer le module de caméra arrière", titleIt: "Sostituire il modulo della fotocamera posteriore", titleRu: "Замена заднего камерного модуля",
        links: [{ type: "youtube", url: "https://youtu.be/ylvnvT8Maco" }] },
      { id: "v-halow-antenna", titleEn: "How to Replace internal antenna for Halow", titleZh: "更换 Halow 内部天线", titleJa: "HaLow 用内部アンテナの交換方法", titleKo: "HaLow용 내부 안테나 교체 방법", titleDe: "So ersetzen Sie die interne HaLow-Antenne", titleFr: "Comment remplacer l'antenne interne HaLow", titleIt: "Come sostituire l'antenna interna per HaLow", titleRu: "Как заменить внутреннюю антенну HaLow",
        links: [{ type: "youtube", url: "https://youtu.be/MGTxPyEr3fs?si=j0Cp76fbL3bwBgzU" }] },
      { id: "v-dc-adapter", titleEn: "How to Install the Data Center Adapters", titleZh: "DC 转接头", titleJa: "データセンターアダプターの取り付け方法", titleKo: "데이터 센터 어댑터 설치 방법", titleDe: "So installieren Sie die Data-Center-Adapter", titleFr: "Comment installer les adaptateurs du Data Center", titleIt: "Come installare gli adattatori del Data Center", titleRu: "Как установить адаптеры Data Center",
        links: [{ type: "youtube", url: "https://youtu.be/X_xXagX0yDE" }] },
      { id: "v-rtk-cable", titleEn: "RTK Cable Replacement Guide", titleZh: "更换 RTK 内部馈线", titleJa: "RTK ケーブル交換ガイド", titleKo: "RTK 케이블 교체 가이드", titleDe: "Anleitung zum Austausch des RTK-Kabels", titleFr: "Guide de remplacement du câble RTK", titleIt: "Guida alla sostituzione del cavo RTK", titleRu: "Руководство по замене кабеля RTK",
        links: [{ type: "youtube", url: "https://youtu.be/mkrZ4rFy7rQ" }, { type: "wiki", url: "https://wiki.yarbo.com/en/sam/installation/rtk-cable-replacement" }] },
      { id: "v-rtk-cable-2025", titleEn: "RTK Cable Replacement Guide (2025 Updated)", titleZh: "更换新版 RTK 内部馈线", titleJa: "RTK ケーブル交換ガイド（2025年更新版）", titleKo: "RTK 케이블 교체 가이드(2025년 업데이트)", titleDe: "Anleitung zum Austausch des RTK-Kabels (Update 2025)", titleFr: "Guide de remplacement du câble RTK (mise à jour 2025)", titleIt: "Guida alla sostituzione del cavo RTK (aggiornamento 2025)", titleRu: "Руководство по замене кабеля RTK (обновление 2025)",
        links: [{ type: "youtube", url: "https://youtu.be/I5iwMjYlFIA" }] },
      { id: "v-powerboard-1", titleEn: "Powerboard Waterproof Coating Filling Instruction", titleZh: "电源板打胶", titleJa: "電源基板の防水コーティング充填手順", titleKo: "파워보드 방수 코팅 충전 안내", titleDe: "Anleitung zur wasserdichten Beschichtung der Platine", titleFr: "Instructions de remplissage du revêtement étanche de la carte d'alimentation", titleIt: "Istruzioni per il riempimento del rivestimento impermeabile della scheda di alimentazione", titleRu: "Инструкция по заполнению водозащитного покрытия платы питания",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=f30Vfp8tZHs" }] },
      { id: "v-powerboard-2", titleEn: "Powerboard Waterproof Coating Filling Instruction", titleZh: "电源板打胶", titleJa: "電源基板の防水コーティング充填手順", titleKo: "파워보드 방수 코팅 충전 안내", titleDe: "Anleitung zur wasserdichten Beschichtung der Platine", titleFr: "Instructions de remplissage du revêtement étanche de la carte d'alimentation", titleIt: "Istruzioni per il riempimento del rivestimento impermeabile della scheda di alimentazione", titleRu: "Инструкция по заполнению водозащитного покрытия платы питания",
        links: [{ type: "youtube", url: "https://youtu.be/MpGlG2mBJAA" }] },
      { id: "v-controller-guide", titleEn: "Physical Controller Phone Connector Guide", titleZh: "手柄支架使用教程", titleJa: "物理コントローラーとスマートフォン接続ガイド", titleKo: "물리적 컨트롤러 휴대폰 커넥터 가이드", titleDe: "Anleitung für den Telefonanschluss des physischen Controllers", titleFr: "Guide du connecteur téléphone pour manette physique", titleIt: "Guida al connettore per telefono del controller fisico", titleRu: "Руководство по подключению телефона к физическому пульту",
        links: [{ type: "drive", url: null }] },
      { id: "v-wireless-charging", titleEn: "Replace Wireless Charging Module", titleZh: "更换无线充接收端", titleJa: "ワイヤレス充電モジュールの交換", titleKo: "무선 충전 모듈 교체", titleDe: "Kabelloses Lademodul austauschen", titleFr: "Remplacer le module de charge sans fil", titleIt: "Sostituire il modulo di ricarica wireless", titleRu: "Замена модуля беспроводной зарядки",
        links: [{ type: "youtube", url: "https://youtu.be/qYN2PtDeAEU" }, { type: "drive", url: "https://drive.google.com/file/d/1IXUuyZmZopJl2MI8Ucz6IGW-mYtvwTjp/view?usp=share_link", note: { zh: "更新版，建议发这个", en: "Updated version — recommended", ja: "更新版。こちらの送付を推奨", ko: "업데이트 버전 — 이걸 보내는 것을 권장" } }] },
      { id: "v-m25-wire", titleEn: "Repairing Poor Contact on M25 Wire", titleZh: "M25松动补修", titleJa: "M25 配線の接触不良修理", titleKo: "M25 배선 접촉 불량 수리", titleDe: "Reparatur eines schlechten Kontakts am M25-Kabel", titleFr: "Réparation d'un mauvais contact sur le fil M25", titleIt: "Riparazione di un contatto difettoso sul cavo M25", titleRu: "Устранение плохого контакта провода M25",
        links: [{ type: "youtube", url: "https://youtu.be/C372WfbIFBY" }] }
    ]
  },
  {
    id: "mower24",
    zh: "2024 割草头",
    en: "2024 Mower",
    ja: "2024 芝刈りヘッド",
    ko: "2024 잔디깎이 헤드",
    de: "2024 Mähkopf",
    fr: "2024 Tête de tonte",
    it: "2024 Testa di taglio",
    ru: "2024 Косильная головка",
    items: [
      { id: "v-mower-bumper", titleEn: "How to Replace mower Bumper", titleZh: "更换割草bumper", titleJa: "芝刈りヘッドバンパーの交換方法", titleKo: "잔디깎이 범퍼 교체 방법", titleDe: "So ersetzen Sie den Mäher-Bumper", titleFr: "Comment remplacer le pare-chocs de la tondeuse", titleIt: "Come sostituire il paraurti del tosaerba", titleRu: "Как заменить бампер газонокосилки",
        links: [{ type: "youtube", url: "https://youtu.be/Ak2II75Dc68" }, { type: "wiki", url: "https://wiki.yarbo.com/en/lawn-mower/installation/replace-bumper" }] },
      { id: "v-cutting-motor", titleEn: "Replace the Cutting Motor", titleZh: "更换割草电机安装筒", titleJa: "切削モーターの交換", titleKo: "절삭 모터 교체", titleDe: "Schneidmotor austauschen", titleFr: "Remplacer le moteur de coupe", titleIt: "Sostituire il motore di taglio", titleRu: "Замена режущего двигателя",
        links: [{ type: "youtube", url: "https://youtu.be/VCCjZQo5SX0" }] },
      { id: "v-rain-sensor", titleEn: "Replace the Rain Sensor", titleZh: "更换割草雨水传感器", titleJa: "雨センサーの交換", titleKo: "우천 센서 교체", titleDe: "Regensensor austauschen", titleFr: "Remplacer le capteur de pluie", titleIt: "Sostituire il sensore di pioggia", titleRu: "Замена датчика дождя",
        links: [{ type: "youtube", url: "https://youtu.be/_V9TT_UASBU" }, { type: "wiki", url: "https://wiki.yarbo.com/en/lawn-mower/installation/replace-rain-sensor" }] },
      { id: "v-blade-guard", titleEn: "Remove Blade Guard", titleZh: "拆除割草防护罩", titleJa: "ブレードガードの取り外し", titleKo: "블레이드 가드 제거", titleDe: "Messerschutz entfernen", titleFr: "Retirer le protège-lame", titleIt: "Rimuovere la protezione della lama", titleRu: "Снятие защиты лезвия",
        links: [{ type: "wiki", url: "https://wiki.yarbo.com/lawn-mower/installation/blade-guard-removal" }] },
      { id: "v-blade-guard-m1pro", titleEn: "Remove M1 Pro Blade Guard", titleZh: "拆除割草防护罩", titleJa: "M1 Pro ブレードガードの取り外し", titleKo: "M1 Pro 블레이드 가드 제거", titleDe: "M1-Pro-Messerschutz entfernen", titleFr: "Retirer le protège-lame du M1 Pro", titleIt: "Rimuovere la protezione della lama M1 Pro", titleRu: "Снятие защиты лезвия M1 Pro",
        links: [{ type: "youtube", url: "https://youtu.be/sN27tzp0JFc" }] },
      { id: "v-mower-camera", titleEn: "Replace Mower Camera Module", titleZh: "更换前摄像头", titleJa: "芝刈りカメラモジュールの交換", titleKo: "잔디깎이 카메라 모듈 교체", titleDe: "Mäher-Kameramodul austauschen", titleFr: "Remplacer le module de caméra de la tondeuse", titleIt: "Sostituire il modulo della fotocamera del tosaerba", titleRu: "Замена камерного модуля газонокосилки",
        links: [{ type: "youtube", url: "https://youtu.be/V3Y_HoxRrVs?si=jDGisHkkju5-A6xn" }] },
      { id: "v-connection-shaft", titleEn: "How to replace the connection shaft", titleZh: "更换连接轴", titleJa: "接続シャフトの交換方法", titleKo: "연결 샤프트 교체 방법", titleDe: "So ersetzen Sie die Verbindungswelle", titleFr: "Comment remplacer l'arbre de connexion", titleIt: "Come sostituire l'albero di collegamento", titleRu: "Как заменить соединительный вал",
        links: [{ type: "youtube", url: "https://youtu.be/c-_cDALGCrM" }] }
    ]
  },
  {
    id: "blower24",
    zh: "2024 吹雪头",
    en: "2024 Blower",
    ja: "2024 ブロワーヘッド",
    ko: "2024 블로워 헤드",
    de: "2024 Gebläsekopf",
    fr: "2024 Tête de soufflage",
    it: "2024 Testa soffiante",
    ru: "2024 Воздуходувная головка",
    items: [
      { id: "v-blower-camera", titleEn: "Replacing Yarbo 2024 Blower's Front Camera", titleZh: "更换吹风前摄", titleJa: "Yarbo 2024 ブロワーのフロントカメラ交換", titleKo: "Yarbo 2024 블로워 전면 카메라 교체", titleDe: "Austausch der Frontkamera des Yarbo 2024 Gebläses", titleFr: "Remplacement de la caméra avant de la souffleuse Yarbo 2024", titleIt: "Sostituzione della fotocamera frontale del soffiatore Yarbo 2024", titleRu: "Замена передней камеры воздуходувки Yarbo 2024",
        links: [{ type: "youtube", url: "https://youtu.be/eUyIt1hbJDQ" }] }
    ]
  },
  {
    id: "trimmer25",
    zh: "2025 割灌头",
    en: "2025 Trimmer",
    ja: "2025 トリマーヘッド",
    ko: "2025 트리머 헤드",
    de: "2025 Trimmerkopf",
    fr: "2025 Tête de débroussailleuse",
    it: "2025 Testa decespugliatore",
    ru: "2025 Триммерная головка",
    items: [
      { id: "v-trimmer-spool", titleEn: "Trimmer — Change Head and Line Spool", titleZh: "换线轴+线盘", titleJa: "トリマー — ヘッドとラインスプールの交換", titleKo: "트리머 — 헤드 및 라인 스풀 교체", titleDe: "Trimmer — Kopf und Fadenspule wechseln", titleFr: "Débroussailleuse — Changer la tête et la bobine de fil", titleIt: "Decespugliatore — Sostituire la testa e la bobina del filo", titleRu: "Триммер — замена головки и катушки с леской",
        links: [{ type: "youtube", url: "https://youtu.be/BXbmH6QJuMM" }] },
      { id: "v-trimmer-feed-error", titleEn: "Trimmer Line Feed Error Troubleshooting", titleZh: "送线异常诊断", titleJa: "トリマーの送り出しエラーのトラブルシューティング", titleKo: "트리머 라인 공급 오류 문제 해결", titleDe: "Fehlerbehebung bei der Fadenzuführung des Trimmers", titleFr: "Dépannage de l'erreur d'avance du fil de la débroussailleuse", titleIt: "Risoluzione dei problemi di avanzamento del filo del decespugliatore", titleRu: "Устранение ошибки подачи лески триммера",
        links: [{ type: "youtube", url: "https://youtu.be/eTiveMW9X1Q" }] },
      { id: "v-trimmer-blade", titleEn: "Trimmer — Change Trimmer Blade", titleZh: "刀片", titleJa: "トリマー — トリマーブレードの交換", titleKo: "트리머 — 트리머 날 교체", titleDe: "Trimmer — Trimmermesser wechseln", titleFr: "Débroussailleuse — Changer la lame de la débroussailleuse", titleIt: "Decespugliatore — Sostituire la lama del decespugliatore", titleRu: "Триммер — замена ножа триммера",
        links: [{ type: "youtube", url: "https://youtu.be/Qhu8CpVMVyw" }] }
    ]
  },
  {
    id: "snowblower24",
    zh: "2024 扫雪头",
    en: "2024 Snowblower",
    ja: "2024 除雪ヘッド",
    ko: "2024 제설 헤드",
    de: "2024 Schneefräsenkopf",
    fr: "2024 Tête de souffleuse à neige",
    it: "2024 Testa spazzaneve",
    ru: "2024 Снегоуборочная головка",
    items: [
      { id: "v-snow-force-detach", titleEn: "Force detach snowblower from the core", titleZh: "强拆扫雪头", titleJa: "除雪ヘッドを本体から強制的に取り外す", titleKo: "제설 헤드를 코어에서 강제로 분리", titleDe: "Schneefräse gewaltsam vom Core lösen", titleFr: "Détacher de force la souffleuse à neige du Core", titleIt: "Staccare forzatamente la spazzaneve dal Core", titleRu: "Принудительное отсоединение снегоуборочной головки от Core",
        links: [{ type: "drive", url: null }] },
      { id: "v-shear-pin", titleEn: "How to replace shear pin", titleZh: "更换 Shear Pin", titleJa: "シアピンの交換方法", titleKo: "시어 핀 교체 방법", titleDe: "So ersetzen Sie den Scherstift", titleFr: "Comment remplacer la goupille de cisaillement", titleIt: "Come sostituire il perno di sicurezza", titleRu: "Как заменить срезной штифт",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=B4eMGf6-W1E" }, { type: "wiki", url: "https://wiki.yarbo.com/en/snow-blower/installation/replace-shear-pin" }] },
      { id: "v-deflector-cord", titleEn: "How to replace the deflector Metal Cord", titleZh: "钢丝绳", titleJa: "ディフレクターのメタルコードの交換方法", titleKo: "디플렉터 금속 와이어 교체 방법", titleDe: "So ersetzen Sie das Metallseil der Leitklappe", titleFr: "Comment remplacer le câble métallique du déflecteur", titleIt: "Come sostituire il cavo metallico del deflettore", titleRu: "Как заменить металлический трос дефлектора",
        links: [{ type: "drive", url: null }] },
      { id: "v-snow-bumper", titleEn: "Replace Snowblower's Bumper", titleZh: "更换扫雪碰撞条", titleJa: "除雪機のバンパー交換", titleKo: "제설기 범퍼 교체", titleDe: "Stoßfänger der Schneefräse austauschen", titleFr: "Remplacer le pare-chocs de la souffleuse à neige", titleIt: "Sostituire il paraurti della spazzaneve", titleRu: "Замена бампера снегоуборщика",
        links: [{ type: "youtube", url: "https://youtu.be/khXXKO-VCbs?si=C1aSeyFpXVy54971" }] },
      { id: "v-snow-rope-spool", titleEn: "Replacing Yarbo 2024 Snowblower's Metal Rope & Spool", titleZh: "更换扫雪钢丝绳+绕线盘", titleJa: "Yarbo 2024 除雪機のメタルロープ＆スプールの交換", titleKo: "Yarbo 2024 제설기 금속 로프 및 스풀 교체", titleDe: "Austausch von Metallseil und Spule der Yarbo 2024 Schneefräse", titleFr: "Remplacement du câble métallique et de la bobine de la souffleuse Yarbo 2024", titleIt: "Sostituzione della fune metallica e della bobina della spazzaneve Yarbo 2024", titleRu: "Замена металлического троса и катушки снегоуборщика Yarbo 2024",
        links: [{ type: "youtube", url: "https://youtu.be/9zSkgNE_j6Q" }] },
      { id: "v-snow-front-camera", titleEn: "Replacing Yarbo 2024 Snowblower's Front Camera Module", titleZh: "更换扫雪前摄灯板", titleJa: "Yarbo 2024 除雪機のフロントカメラモジュールの交換", titleKo: "Yarbo 2024 제설기 전면 카메라 모듈 교체", titleDe: "Austausch des Frontkameramoduls der Yarbo 2024 Schneefräse", titleFr: "Remplacement du module de caméra avant de la souffleuse Yarbo 2024", titleIt: "Sostituzione del modulo della fotocamera frontale della spazzaneve Yarbo 2024", titleRu: "Замена переднего камерного модуля снегоуборщика Yarbo 2024",
        links: [{ type: "youtube", url: "https://youtu.be/DiNAmeJoyb8" }] },
      { id: "v-snow-belt", titleEn: "Replacing Snowblower's belt", titleZh: "更换扫雪皮带（含小同步轮）", titleJa: "除雪機のベルト交換", titleKo: "제설기 벨트 교체", titleDe: "Riemen der Schneefräse austauschen", titleFr: "Remplacement de la courroie de la souffleuse à neige", titleIt: "Sostituzione della cinghia della spazzaneve", titleRu: "Замена ремня снегоуборщика",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=PIMcvDEnOPY" }] },
      { id: "v-snow-bumper-module", titleEn: "Replacing Yarbo 2024 Snowblower's Bumper Module", titleZh: "扫雪碰撞条更换", titleJa: "Yarbo 2024 除雪機のバンパーモジュールの交換", titleKo: "Yarbo 2024 제설기 범퍼 모듈 교체", titleDe: "Austausch des Stoßfängermoduls der Yarbo 2024 Schneefräse", titleFr: "Remplacement du module pare-chocs de la souffleuse Yarbo 2024", titleIt: "Sostituzione del modulo paraurti della spazzaneve Yarbo 2024", titleRu: "Замена бамперного модуля снегоуборщика Yarbo 2024",
        links: [{ type: "youtube", url: "https://youtu.be/5PrKpfJCLEQ" }] },
      { id: "v-snow-auger-2025", titleEn: "How to Replace the Snow Auger Motor on the 2025 Snowblower", titleZh: "更换2025 卷雪电机", titleJa: "2025 年式除雪機のオーガーモーター交換方法", titleKo: "2025년형 제설기 오거 모터 교체 방법", titleDe: "So ersetzen Sie den Schneckenmotor der Schneefräse 2025", titleFr: "Comment remplacer le moteur de la vis sans fin de la souffleuse 2025", titleIt: "Come sostituire il motore della coclea della spazzaneve 2025", titleRu: "Как заменить мотор шнека снегоуборщика 2025 года",
        links: [{ type: "youtube", url: "https://youtu.be/KW7VpruGkhk" }] },
      { id: "v-snow-auger-2024", titleEn: "How to Replace the Snow Auger Motor on the 2024 Snowblower", titleZh: "更换2024 卷雪电机", titleJa: "2024 年式除雪機のオーガーモーター交換方法", titleKo: "2024년형 제설기 오거 모터 교체 방법", titleDe: "So ersetzen Sie den Schneckenmotor der Schneefräse 2024", titleFr: "Comment remplacer le moteur de la vis sans fin de la souffleuse 2024", titleIt: "Come sostituire il motore della coclea della spazzaneve 2024", titleRu: "Как заменить мотор шнека снегоуборщика 2024 года",
        links: [{ type: "youtube", url: "https://youtu.be/48feJA2dL4g" }] },
      { id: "v-snow-headlight", titleEn: "Replacing the 2024 Snow Blower Headlight Module", titleZh: "更换2024 扫雪车头前灯", titleJa: "2024 年式除雪機のヘッドライトモジュールの交換", titleKo: "2024년형 제설기 헤드라이트 모듈 교체", titleDe: "Austausch des Scheinwerfermoduls der Schneefräse 2024", titleFr: "Remplacement du module de phare de la souffleuse 2024", titleIt: "Sostituzione del modulo faro della spazzaneve 2024", titleRu: "Замена модуля фары снегоуборщика 2024 года",
        links: [{ type: "youtube", url: "https://youtu.be/fAplCv9wVWQ" }] },
      { id: "v-snow-first-stage-blade", titleEn: "New version snowblower — replace first stage blades", titleZh: "新版扫雪头更换一级叶片", titleJa: "新型除雪機 — 一段目ブレードの交換", titleKo: "신형 제설기 — 1단 블레이드 교체", titleDe: "Neue Schneefräsen-Version — Erststufenklingen austauschen", titleFr: "Nouvelle version de la souffleuse — remplacer les lames du premier étage", titleIt: "Nuova versione spazzaneve — sostituire le lame del primo stadio", titleRu: "Новая версия снегоуборщика — замена лопастей первой ступени",
        links: [] },
      { id: "v-snow-second-stage-blade", titleEn: "", titleZh: "扫雪头更换二级叶片", titleJa: "除雪ヘッド — 二段目ブレードの交換", titleKo: "제설 헤드 — 2단 블레이드 교체", titleDe: "Schneefräsenkopf — Zweitstufenklinge austauschen", titleFr: "Tête de souffleuse à neige — remplacer la lame du second étage", titleIt: "Testa spazzaneve — sostituire la lama del secondo stadio", titleRu: "Снегоуборочная головка — замена лопасти второй ступени",
        links: [] },
      { id: "v-snow-m25-spring", titleEn: "", titleZh: "扫雪头M25线塞小弹簧", titleJa: "除雪ヘッド M25 配線プラグの小型スプリング", titleKo: "제설 헤드 M25 배선 플러그 소형 스프링", titleDe: "Schneefräsenkopf M25 Kabelstecker-Kleinfeder", titleFr: "Tête de souffleuse M25 — petit ressort du bouchon de câble", titleIt: "Testa spazzaneve M25 — piccola molla del tappo del cavo", titleRu: "Снегоуборочная головка M25 — маленькая пружина заглушки провода",
        links: [{ type: "youtube", url: "https://youtu.be/C372WfbIFBY" }] }
    ]
  }
];

/* ---------- Introduction page content ---------- */

const INTRO_CONTENT = {
  zh: {
    lead: "Yarbo 故障排查工具，帮助 dealer 在联系 FSE 之前快速排查用户问题，并预先向用户收集更充分、更有效的信息。",
    problemTypes: {
      heading: "问题通常分为三类",
      examplesLabel: "示例",
      items: [
        { label: "硬件问题", text: "需要提供具体照片，帮助 FSE 判断损坏原因，以及是否需要更换部件。" },
        { label: "软件问题", text: "需要提供具体发生时间，并判断是偶发还是稳定复现，帮助 FSE 定位问题。" },
        { label: "软硬件结合问题", text: "先排查硬件，排除硬件故障后，再按 FSE 提供的排查步骤抓取日志。" }
      ],
      examples: [
        {
          question: "什么是硬件问题？",
          answer: "指物理损坏。请提供多角度的详细照片，供 FSE 判断。",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "什么是软件问题？",
          answer: "仅在软件层面影响 Yarbo 运行的问题。",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "什么是软硬件结合问题？",
          answer: "该问题可能是硬件和软件问题共同造成的。",
          extra: "例如，Yarbo 在割草过程中出界时，需要立即检查是否存在硬件 RTK 问题。如果 RTK status 不为 4，可以先从物理层面进行修复。修复后如果出界问题仍然存在，就需要从软件层面进一步排查：收集具体发生时间和出界区域，然后上报给对应区域的 FSE 进行抓日志排查。"
        }
      ]
    },
    prerequisite: {
      heading: "FSE 远程排查的前提条件",
      text: "机器需处于开机状态，并保持稳定联网。"
    },
    links: {
      heading: "重要资讯链接",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "搜索单个关键词即可查看相关科普内容" },
        { label: "netrtk 覆盖范围", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "查看使用 netrtk 可以覆盖的范围" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo 车队管理系统，以 dealer 身份登录访问" },
        { label: "Dealer Portal 维修视频指引", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "面向维修商的更精细的视频维修指引" }
      ]
    },
    howItWorks: {
      heading: "Yarbo 工作原理",
      blocks: [
        {
          title: "1. DataCenter（DC / 基站）：定位的\u201c发射塔\u201d",
          text: "基站的核心任务是把 RTK 定位数据传给机器人，它有两种工作模式：",
          bullets: [
            "联网时（在线模式）：基站通过网线连接路由器，把定位数据传给云端（Ntrip 服务器）。",
            "没网时（离线模式）：基站通过 HaLow（一种长距离无线技术）直接把定位数据\u201c空投\u201d给机器人。它有一个固定的内部地址（37.38.38.9）。",
            "蓝牙：就像遥控器，用来给基站升级、改设置或调灯光。"
          ]
        },
        {
          title: "2. Yarbo Core（机器人）：通信的\u201c优先级专家\u201d",
          text: "机器人非常聪明，它会根据信号强弱，自动在三条线路中切换（谁稳用谁）：",
          ordered: [
            "第一准则（HaLow，优先级最高）：这是 Yarbo 的专用频道。它通过基站\u201c借\u201d路由器的网，同时拿到定位数据。它是最稳的，哪怕 Wi-Fi 断了也不怕。",
            "第二准则（Wi-Fi，第二优先级）：如果 HaLow 不给力，它会连家里的 Wi-Fi，速度快，适合传大数据。",
            "第三准则（4G，最后保障）：如果前两个都断了，它会启动自带的 4G 流量，保证机器不失联。"
          ]
        }
      ]
    }
  },
  en: {
    lead: "The Yarbo Troubleshooting Tool helps dealers quickly triage a user's issue and gather more complete, useful information from the user before contacting FSE.",
    problemTypes: {
      heading: "Issues generally fall into three categories",
      examplesLabel: "Examples",
      items: [
        { label: "Hardware issues", text: "Provide specific photos to help FSE judge the cause of the damage and whether a part needs replacing." },
        { label: "Software issues", text: "Provide the exact time it happened, and note whether it's occasional or consistently reproducible, to help FSE diagnose it." },
        { label: "Combined hardware / software issues", text: "Rule out hardware first; once hardware is cleared, follow FSE's troubleshooting steps to pull logs." }
      ],
      examples: [
        {
          question: "What's a hardware issue?",
          answer: "It's physical damage. Please provide detailed photos from multiple angles so FSE can make a judgment.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "What's a software issue?",
          answer: "An issue that only affects Yarbo's operation at the software level.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "What's a combined hardware / software issue?",
          answer: "The issue may arise from a combination of hardware and software problems.",
          extra: "For example, when Yarbo goes out of bounds while mowing, immediately check whether there's a hardware RTK issue. If the RTK status isn't 4, it can be fixed at the physical level. If the boundary issue still occurs after that fix, investigate further at the software level: collect the specific timestamp and the area where it occurred, then escalate to the FSE for that region to pull logs for troubleshooting."
        }
      ]
    },
    prerequisite: {
      heading: "Prerequisite for FSE remote troubleshooting",
      text: "The machine must be powered on and have a stable network connection."
    },
    links: {
      heading: "Important resource links",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "Search a single keyword to find related reference articles" },
        { label: "netrtk coverage range", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "Shows the coverage range when using netrtk" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo's fleet management system — log in as a dealer" },
        { label: "Dealer Portal repair video guides", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "More detailed video repair guides for dealers/repair shops" }
      ]
    },
    howItWorks: {
      heading: "How Yarbo Works",
      blocks: [
        {
          title: "1. DataCenter (DC / base station): the positioning \u201cbroadcast tower\u201d",
          text: "The base station's core job is to send RTK positioning data to the robot. It has two working modes:",
          bullets: [
            "Connected (online mode): the base station connects to the router by cable and sends positioning data to the cloud (Ntrip server).",
            "Offline mode: the base station uses HaLow (a long-range wireless technology) to \u201cairdrop\u201d positioning data straight to the robot. It has a fixed internal address (37.38.38.9).",
            "Bluetooth: works like a remote control — used to update the base station's firmware, change settings, or adjust its light."
          ]
        },
        {
          title: "2. Yarbo Core (the robot): the \u201cpriority expert\u201d of communication",
          text: "The robot is smart — it automatically switches between three channels based on signal strength (whichever is most stable wins):",
          ordered: [
            "First priority (HaLow — highest priority): Yarbo's dedicated channel. It \u201cborrows\u201d the base station's router connection while also getting positioning data from it. It's the most stable option, unaffected even if Wi-Fi drops.",
            "Second priority (Wi-Fi): if HaLow isn't strong enough, it switches to the home Wi-Fi, which is fast and suited to transferring larger amounts of data.",
            "Third priority (4G — last resort): if both of the above are down, it activates its built-in 4G data to keep the machine from going offline."
          ]
        }
      ]
    }
  },
  ja: {
    lead: "Yarbo トラブルシューティングツールは、dealer が FSE に連絡する前にユーザーの問題を素早く切り分け、より充実した有効な情報を事前に収集できるようにするためのものです。",
    problemTypes: {
      heading: "問題は主に 3 種類に分類されます",
      examplesLabel: "事例",
      items: [
        { label: "ハードウェアの問題", text: "具体的な写真を提供し、FSE が破損原因および部品交換の要否を判断できるようにします。" },
        { label: "ソフトウェアの問題", text: "発生した具体的な時刻を提供し、まれに起きるのか安定して再現するのかを判断して、FSE の診断を助けます。" },
        { label: "ハードウェアとソフトウェアが絡む問題", text: "まずハードウェアを確認し、ハードウェアの故障を除外したうえで、FSE の指示する手順に沿ってログを取得してください。" }
      ],
      examples: [
        {
          question: "ハードウェアの問題とは？",
          answer: "物理的な破損のことです。FSE が判断できるよう、複数の角度から詳しい写真を提供してください。",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "ソフトウェアの問題とは？",
          answer: "ソフトウェアレベルでのみ Yarbo の動作に影響する問題です。",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "ハードウェアとソフトウェアが絡む問題とは？",
          answer: "ハードウェアとソフトウェア双方の問題が組み合わさって発生している可能性がある問題です。",
          extra: "例えば、芝刈り中に Yarbo が境界を逸脱した場合、まずハードウェアの RTK に問題がないかすぐに確認する必要があります。RTK の status が 4 でなければ、物理的な対応で修正できます。修正後も境界逸脱が続く場合は、ソフトウェア面でさらに調査する必要があります。具体的な発生時刻と発生エリアを記録し、該当地域の FSE にエスカレーションしてログを取得し、トラブルシューティングを行ってください。"
        }
      ]
    },
    prerequisite: {
      heading: "FSE によるリモートトラブルシューティングの前提条件",
      text: "機器は電源がオンの状態で、安定したネットワーク接続を保っている必要があります。"
    },
    links: {
      heading: "重要な参考リンク",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "キーワードを 1 つ検索するだけで関連する解説記事が見つかります" },
        { label: "netrtk カバー範囲", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "netrtk 使用時のカバー範囲を確認できます" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo のフリート管理システム。dealer としてログインしてアクセスします" },
        { label: "Dealer Portal 修理動画ガイド", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "修理業者向けのより詳しい動画修理ガイド" }
      ]
    },
    howItWorks: {
      heading: "Yarbo の仕組み",
      blocks: [
        {
          title: "1. DataCenter（DC／基地局）：測位の\u201c発信塔\u201d",
          text: "基地局の中心的な役割は、RTK 測位データをロボットに送ることです。動作モードは 2 種類あります：",
          bullets: [
            "ネットワーク接続時（オンラインモード）：基地局は有線でルーターに接続し、測位データをクラウド（Ntrip サーバー）に送信します。",
            "ネットワーク未接続時（オフラインモード）：基地局は HaLow（長距離無線技術）を使い、測位データを直接ロボットに\u201cエアドロップ\u201dします。固定の内部アドレス（37.38.38.9）を持っています。",
            "Bluetooth：リモコンのような役割で、基地局のアップデートや設定変更、ライト調整に使います。"
          ]
        },
        {
          title: "2. Yarbo Core（ロボット本体）：通信の\u201c優先順位の専門家\u201d",
          text: "ロボットは非常に賢く、電波強度に応じて 3 つの通信経路を自動的に切り替えます（最も安定したものを使用）：",
          ordered: [
            "第一優先（HaLow ― 最優先）：Yarbo 専用のチャンネルです。基地局のルーター回線を\u201c借用\u201dしつつ測位データも取得します。Wi-Fi が切れても影響を受けない、最も安定した経路です。",
            "第二優先（Wi-Fi）：HaLow が弱い場合は自宅の Wi-Fi に接続します。速度が速く、大容量データの伝送に向いています。",
            "第三優先（4G ― 最終手段）：上記 2 つが両方途切れた場合、内蔵の 4G 通信を起動し、機器がオフラインにならないようにします。"
          ]
        }
      ]
    }
  },
  ko: {
    lead: "Yarbo 문제 해결 도구는 딜러가 FSE에 연락하기 전에 사용자 문제를 빠르게 파악하고, 더 충분하고 유용한 정보를 미리 수집할 수 있도록 도와줍니다.",
    problemTypes: {
      heading: "문제는 일반적으로 세 가지로 나뉩니다",
      examplesLabel: "예시",
      items: [
        { label: "하드웨어 문제", text: "구체적인 사진을 제공해 FSE가 손상 원인과 부품 교체 필요 여부를 판단하도록 도와주세요." },
        { label: "소프트웨어 문제", text: "발생한 정확한 시간을 제공하고, 가끔 발생하는지 안정적으로 재현되는지 판단하여 FSE의 진단을 도와주세요." },
        { label: "하드웨어·소프트웨어 복합 문제", text: "먼저 하드웨어를 점검하고, 하드웨어 문제를 배제한 후 FSE가 제공하는 절차에 따라 로그를 수집하세요." }
      ],
      examples: [
        {
          question: "하드웨어 문제란?",
          answer: "물리적 손상을 의미합니다. FSE가 판단할 수 있도록 여러 각도에서 찍은 상세한 사진을 제공해 주세요.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "소프트웨어 문제란?",
          answer: "소프트웨어 수준에서만 Yarbo의 작동에 영향을 미치는 문제입니다.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "하드웨어·소프트웨어 복합 문제란?",
          answer: "하드웨어와 소프트웨어 문제가 결합되어 발생했을 수 있는 문제입니다.",
          extra: "예를 들어, 잔디 깎기 중 Yarbo가 경계를 이탈하면 먼저 하드웨어 RTK에 문제가 있는지 바로 확인해야 합니다. RTK status가 4가 아니라면 물리적인 조치로 수정할 수 있습니다. 수정 후에도 경계 이탈이 계속되면 소프트웨어 측면에서 추가로 조사해야 합니다. 정확한 발생 시간과 발생 구역을 수집한 후 해당 지역 FSE에 에스컬레이션하여 로그를 수집해 문제를 해결하세요."
        }
      ]
    },
    prerequisite: {
      heading: "FSE 원격 문제 해결을 위한 전제 조건",
      text: "기기는 전원이 켜져 있고 안정적인 네트워크 연결 상태여야 합니다."
    },
    links: {
      heading: "중요 참고 링크",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "키워드 하나만 검색해도 관련 자료를 찾을 수 있습니다" },
        { label: "netrtk 커버리지 범위", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "netrtk 사용 시 커버리지 범위를 확인할 수 있습니다" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo의 차량(플릿) 관리 시스템 — 딜러 계정으로 로그인하세요" },
        { label: "Dealer Portal 수리 영상 가이드", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "수리업체를 위한 더 상세한 영상 수리 가이드" }
      ]
    },
    howItWorks: {
      heading: "Yarbo 작동 원리",
      blocks: [
        {
          title: "1. DataCenter（DC / 베이스 스테이션）: 위치 측정의 \u201c송신탑\u201d",
          text: "베이스 스테이션의 핵심 역할은 RTK 위치 데이터를 로봇에 전달하는 것이며, 두 가지 작동 모드가 있습니다:",
          bullets: [
            "인터넷 연결 시(온라인 모드): 베이스 스테이션이 유선으로 공유기에 연결되어 위치 데이터를 클라우드(Ntrip 서버)로 전송합니다.",
            "인터넷 미연결 시(오프라인 모드): 베이스 스테이션이 HaLow(장거리 무선 기술)를 통해 위치 데이터를 로봇에 직접 \u201c에어드롭\u201d합니다. 고정된 내부 주소(37.38.38.9)를 가지고 있습니다.",
            "블루투스: 리모컨처럼 베이스 스테이션의 업데이트, 설정 변경, 조명 조절에 사용됩니다."
          ]
        },
        {
          title: "2. Yarbo Core（로봇 본체）: 통신의 \u201c우선순위 전문가\u201d",
          text: "로봇은 매우 똑똑해서 신호 강도에 따라 세 가지 통신 경로 중 가장 안정적인 것을 자동으로 선택합니다:",
          ordered: [
            "1순위(HaLow — 최우선): Yarbo 전용 채널입니다. 베이스 스테이션의 공유기 회선을 \u201c빌려\u201d 쓰면서 동시에 위치 데이터도 받습니다. Wi-Fi가 끊겨도 영향받지 않는 가장 안정적인 경로입니다.",
            "2순위(Wi-Fi): HaLow 신호가 약하면 집 Wi-Fi에 연결합니다. 속도가 빨라 대용량 데이터 전송에 적합합니다.",
            "3순위(4G — 최후 수단): 위 두 가지가 모두 끊기면 내장된 4G 데이터를 활성화해 기기가 오프라인 상태가 되지 않도록 합니다."
          ]
        }
      ]
    }
  },
  de: {
    lead: "Das Yarbo-Fehlerbehebungstool hilft Händlern, ein Kundenproblem schnell einzugrenzen und vor der Kontaktaufnahme mit dem FSE vollständigere, nützlichere Informationen vom Nutzer zu sammeln.",
    problemTypes: {
      heading: "Probleme lassen sich meist in drei Kategorien einteilen",
      examplesLabel: "Beispiele",
      items: [
        { label: "Hardware-Probleme", text: "Konkrete Fotos bereitstellen, damit der FSE die Schadensursache beurteilen und entscheiden kann, ob ein Teil ausgetauscht werden muss." },
        { label: "Software-Probleme", text: "Den genauen Zeitpunkt angeben und vermerken, ob es gelegentlich oder durchgehend reproduzierbar auftritt, um dem FSE die Diagnose zu erleichtern." },
        { label: "Kombinierte Hardware-/Software-Probleme", text: "Zuerst Hardware ausschließen; sobald die Hardware als Ursache ausgeschlossen ist, den Fehlerbehebungsschritten des FSE folgen, um Protokolle zu erfassen." }
      ],
      examples: [
        {
          question: "Was ist ein Hardware-Problem?",
          answer: "Ein physischer Schaden. Bitte detaillierte Fotos aus mehreren Blickwinkeln bereitstellen, damit der FSE eine Beurteilung vornehmen kann.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "Was ist ein Software-Problem?",
          answer: "Ein Problem, das den Betrieb von Yarbo nur auf Softwareebene beeinträchtigt.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "Was ist ein kombiniertes Hardware-/Software-Problem?",
          answer: "Das Problem kann durch eine Kombination von Hardware- und Softwareproblemen entstehen.",
          extra: "Wenn Yarbo beispielsweise beim Mähen die Grenze überschreitet, sofort prüfen, ob ein Hardware-RTK-Problem vorliegt. Ist der RTK-Status nicht 4, kann dies auf physischer Ebene behoben werden. Tritt das Grenzproblem nach der Behebung weiterhin auf, muss auf Softwareebene weiter untersucht werden: den genauen Zeitpunkt und den betroffenen Bereich erfassen, dann an den zuständigen FSE eskalieren, um Protokolle zur Fehlerbehebung zu erfassen."
        }
      ]
    },
    prerequisite: {
      heading: "Voraussetzung für die Ferndiagnose durch den FSE",
      text: "Das Gerät muss eingeschaltet sein und eine stabile Netzwerkverbindung haben."
    },
    links: {
      heading: "Wichtige Ressourcen-Links",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "Ein einzelnes Stichwort suchen, um verwandte Referenzartikel zu finden" },
        { label: "netrtk-Abdeckungsbereich", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "Zeigt den Abdeckungsbereich bei Nutzung von netrtk" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Das Flottenmanagementsystem von Yarbo — als Händler anmelden" },
        { label: "Dealer-Portal-Reparaturvideoanleitungen", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "Detailliertere Video-Reparaturanleitungen für Händler/Reparaturbetriebe" }
      ]
    },
    howItWorks: {
      heading: "So funktioniert Yarbo",
      blocks: [
        {
          title: "1. DataCenter (DC / Basisstation): der \u201cSendeturm\u201d der Positionierung",
          text: "Die Kernaufgabe der Basisstation ist es, RTK-Positionsdaten an den Roboter zu senden. Es gibt zwei Betriebsmodi:",
          bullets: [
            "Verbunden (Online-Modus): Die Basisstation verbindet sich per Kabel mit dem Router und sendet Positionsdaten an die Cloud (Ntrip-Server).",
            "Offline-Modus: Die Basisstation nutzt HaLow (eine Funktechnologie mit großer Reichweite), um Positionsdaten direkt an den Roboter zu \u201csenden\u201d. Sie hat eine feste interne Adresse (37.38.38.9).",
            "Bluetooth: funktioniert wie eine Fernbedienung — zum Aktualisieren der Firmware der Basisstation, Ändern von Einstellungen oder Anpassen der Beleuchtung."
          ]
        },
        {
          title: "2. Yarbo Core (der Roboter): der \u201cPrioritätsexperte\u201d der Kommunikation",
          text: "Der Roboter ist intelligent — er wechselt automatisch je nach Signalstärke zwischen drei Kanälen (der stabilste gewinnt):",
          ordered: [
            "Erste Priorität (HaLow — höchste Priorität): Yarbos eigener Kanal. Er \u201cleiht\u201d sich die Router-Verbindung der Basisstation und erhält gleichzeitig Positionsdaten von ihr. Dies ist die stabilste Option, die selbst bei WLAN-Ausfall nicht beeinträchtigt wird.",
            "Zweite Priorität (Wi-Fi): Ist HaLow nicht stark genug, wechselt das Gerät zum heimischen WLAN, das schnell ist und sich für die Übertragung größerer Datenmengen eignet.",
            "Dritte Priorität (4G — letzter Ausweg): Sind beide oben genannten Verbindungen ausgefallen, aktiviert das Gerät seine integrierten 4G-Daten, damit es nicht offline geht."
          ]
        }
      ]
    }
  },
  fr: {
    lead: "L'outil de dépannage Yarbo aide les revendeurs à trier rapidement le problème d'un utilisateur et à recueillir des informations plus complètes et utiles auprès de l'utilisateur avant de contacter le FSE.",
    problemTypes: {
      heading: "Les problèmes se répartissent généralement en trois catégories",
      examplesLabel: "Exemples",
      items: [
        { label: "Problèmes matériels", text: "Fournir des photos précises pour aider le FSE à juger la cause du dommage et si une pièce doit être remplacée." },
        { label: "Problèmes logiciels", text: "Fournir l'heure exacte de l'incident et indiquer s'il est occasionnel ou reproductible de façon constante, pour aider le FSE à diagnostiquer." },
        { label: "Problèmes combinés matériel / logiciel", text: "Écarter d'abord le matériel ; une fois le matériel écarté, suivre les étapes de dépannage du FSE pour récupérer les journaux." }
      ],
      examples: [
        {
          question: "Qu'est-ce qu'un problème matériel ?",
          answer: "Il s'agit d'un dommage physique. Veuillez fournir des photos détaillées sous plusieurs angles afin que le FSE puisse évaluer la situation.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "Qu'est-ce qu'un problème logiciel ?",
          answer: "Un problème qui n'affecte le fonctionnement de Yarbo qu'au niveau logiciel.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "Qu'est-ce qu'un problème combiné matériel / logiciel ?",
          answer: "Le problème peut résulter d'une combinaison de problèmes matériels et logiciels.",
          extra: "Par exemple, lorsque Yarbo sort des limites pendant la tonte, il faut immédiatement vérifier s'il y a un problème matériel RTK. Si le statut RTK n'est pas 4, cela peut être corrigé au niveau physique. Si le problème de limite persiste après cette correction, il faut approfondir l'investigation au niveau logiciel : recueillir l'horodatage précis et la zone concernée, puis escalader au FSE de la région concernée pour récupérer les journaux à des fins de dépannage."
        }
      ]
    },
    prerequisite: {
      heading: "Condition préalable au dépannage à distance par le FSE",
      text: "L'appareil doit être allumé et disposer d'une connexion réseau stable."
    },
    links: {
      heading: "Liens de ressources importants",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "Rechercher un seul mot-clé pour trouver des articles de référence associés" },
        { label: "Zone de couverture netrtk", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "Affiche la zone de couverture lors de l'utilisation de netrtk" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Le système de gestion de flotte de Yarbo — se connecter en tant que revendeur" },
        { label: "Guides vidéo de réparation du portail revendeur", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "Guides vidéo de réparation plus détaillés pour les revendeurs/ateliers de réparation" }
      ]
    },
    howItWorks: {
      heading: "Fonctionnement de Yarbo",
      blocks: [
        {
          title: "1. DataCenter (DC / station de base) : la \u201ctour de diffusion\u201d du positionnement",
          text: "Le rôle principal de la station de base est d'envoyer les données de positionnement RTK au robot. Elle dispose de deux modes de fonctionnement :",
          bullets: [
            "Connecté (mode en ligne) : la station de base se connecte au routeur par câble et envoie les données de positionnement au cloud (serveur Ntrip).",
            "Mode hors ligne : la station de base utilise HaLow (une technologie sans fil longue portée) pour \u201clarguer\u201d directement les données de positionnement au robot. Elle possède une adresse interne fixe (37.38.38.9).",
            "Bluetooth : fonctionne comme une télécommande — utilisé pour mettre à jour le micrologiciel de la station de base, modifier les paramètres ou ajuster son voyant."
          ]
        },
        {
          title: "2. Yarbo Core (le robot) : l'\u201cexpert en priorités\u201d de la communication",
          text: "Le robot est intelligent — il bascule automatiquement entre trois canaux en fonction de la force du signal (le plus stable l'emporte) :",
          ordered: [
            "Première priorité (HaLow — priorité la plus élevée) : le canal dédié de Yarbo. Il \u201cemprunte\u201d la connexion routeur de la station de base tout en récupérant également des données de positionnement. C'est l'option la plus stable, non affectée même en cas de coupure du Wi-Fi.",
            "Deuxième priorité (Wi-Fi) : si HaLow n'est pas assez puissant, il bascule sur le Wi-Fi domestique, rapide et adapté au transfert de grandes quantités de données.",
            "Troisième priorité (4G — dernier recours) : si les deux options ci-dessus sont indisponibles, il active ses données 4G intégrées pour éviter que l'appareil ne se déconnecte."
          ]
        }
      ]
    }
  },
  it: {
    lead: "Lo strumento di risoluzione dei problemi Yarbo aiuta i rivenditori a valutare rapidamente il problema di un utente e a raccogliere informazioni più complete e utili dall'utente prima di contattare l'FSE.",
    problemTypes: {
      heading: "I problemi generalmente rientrano in tre categorie",
      examplesLabel: "Esempi",
      items: [
        { label: "Problemi hardware", text: "Fornire foto specifiche per aiutare l'FSE a valutare la causa del danno e se è necessario sostituire un componente." },
        { label: "Problemi software", text: "Fornire l'ora esatta in cui si è verificato e indicare se è occasionale o costantemente riproducibile, per aiutare l'FSE nella diagnosi." },
        { label: "Problemi combinati hardware / software", text: "Escludere prima l'hardware; una volta escluso l'hardware, seguire i passaggi di risoluzione dell'FSE per raccogliere i log." }
      ],
      examples: [
        {
          question: "Cos'è un problema hardware?",
          answer: "È un danno fisico. Si prega di fornire foto dettagliate da più angolazioni in modo che l'FSE possa effettuare una valutazione.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "Cos'è un problema software?",
          answer: "Un problema che influisce sul funzionamento di Yarbo solo a livello software.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "Cos'è un problema combinato hardware / software?",
          answer: "Il problema potrebbe derivare da una combinazione di problemi hardware e software.",
          extra: "Ad esempio, quando Yarbo esce dal confine durante il taglio dell'erba, è necessario verificare immediatamente se c'è un problema hardware RTK. Se lo stato RTK non è 4, può essere risolto a livello fisico. Se il problema di uscita dal confine persiste dopo la correzione, è necessario indagare ulteriormente a livello software: raccogliere l'orario esatto e l'area in cui si è verificato, quindi inoltrare all'FSE della regione competente per raccogliere i log ai fini della risoluzione dei problemi."
        }
      ]
    },
    prerequisite: {
      heading: "Prerequisito per la risoluzione remota dei problemi da parte dell'FSE",
      text: "Il dispositivo deve essere acceso e disporre di una connessione di rete stabile."
    },
    links: {
      heading: "Link alle risorse importanti",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "Cerca una singola parola chiave per trovare articoli di riferimento correlati" },
        { label: "Area di copertura netrtk", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "Mostra l'area di copertura quando si utilizza netrtk" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Il sistema di gestione della flotta di Yarbo: accedi come rivenditore" },
        { label: "Guide video di riparazione del Dealer Portal", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "Guide video di riparazione più dettagliate per rivenditori/centri di riparazione" }
      ]
    },
    howItWorks: {
      heading: "Come funziona Yarbo",
      blocks: [
        {
          title: "1. DataCenter (DC / stazione base): la \u201ctorre di trasmissione\u201d del posizionamento",
          text: "Il compito principale della stazione base è inviare i dati di posizionamento RTK al robot. Ha due modalità di funzionamento:",
          bullets: [
            "Connessa (modalità online): la stazione base si collega al router via cavo e invia i dati di posizionamento al cloud (server Ntrip).",
            "Modalità offline: la stazione base utilizza HaLow (una tecnologia wireless a lungo raggio) per \u201cinviare\u201d i dati di posizionamento direttamente al robot. Ha un indirizzo interno fisso (37.38.38.9).",
            "Bluetooth: funziona come un telecomando, usato per aggiornare il firmware della stazione base, modificare le impostazioni o regolare la sua luce."
          ]
        },
        {
          title: "2. Yarbo Core (il robot): l'\u201cesperto di priorità\u201d della comunicazione",
          text: "Il robot è intelligente: passa automaticamente tra tre canali in base alla potenza del segnale (vince il più stabile):",
          ordered: [
            "Prima priorità (HaLow — priorità massima): il canale dedicato di Yarbo. \u201cPrende in prestito\u201d la connessione del router della stazione base ottenendo anche i dati di posizionamento. È l'opzione più stabile, non influenzata nemmeno da un'interruzione del Wi-Fi.",
            "Seconda priorità (Wi-Fi): se HaLow non è abbastanza forte, passa al Wi-Fi domestico, veloce e adatto al trasferimento di grandi quantità di dati.",
            "Terza priorità (4G — ultima risorsa): se entrambe le opzioni sopra non sono disponibili, attiva i dati 4G integrati per evitare che il dispositivo vada offline."
          ]
        }
      ]
    }
  },
  ru: {
    lead: "Инструмент устранения неисправностей Yarbo помогает дилерам быстро оценить проблему пользователя и собрать более полную и полезную информацию от пользователя перед обращением в FSE.",
    problemTypes: {
      heading: "Проблемы обычно делятся на три категории",
      examplesLabel: "Примеры",
      items: [
        { label: "Аппаратные проблемы", text: "Предоставьте конкретные фотографии, чтобы помочь FSE оценить причину повреждения и необходимость замены детали." },
        { label: "Программные проблемы", text: "Укажите точное время события и отметьте, происходит ли это изредка или стабильно воспроизводится, чтобы помочь FSE в диагностике." },
        { label: "Комбинированные аппаратно-программные проблемы", text: "Сначала исключите аппаратную часть; после этого следуйте шагам диагностики FSE для сбора логов." }
      ],
      examples: [
        {
          question: "Что такое аппаратная проблема?",
          answer: "Это физическое повреждение. Пожалуйста, предоставьте подробные фотографии с нескольких ракурсов, чтобы FSE мог сделать заключение.",
          images: ["assets/intro-media/example-hardware-1.png", "assets/intro-media/example-hardware-2.png", "assets/intro-media/example-hardware-3.png"]
        },
        {
          question: "Что такое программная проблема?",
          answer: "Проблема, которая влияет на работу Yarbo только на программном уровне.",
          images: ["assets/intro-media/example-software-1.png"]
        },
        {
          question: "Что такое комбинированная аппаратно-программная проблема?",
          answer: "Проблема может возникать из-за сочетания аппаратных и программных неполадок.",
          extra: "Например, если Yarbo выходит за границу во время стрижки, нужно немедленно проверить, нет ли аппаратной проблемы с RTK. Если статус RTK не равен 4, это можно исправить на физическом уровне. Если после исправления проблема с выходом за границу сохраняется, нужно провести дополнительное расследование на программном уровне: зафиксировать точное время и область, где это произошло, а затем эскалировать в FSE соответствующего региона для сбора логов и устранения неисправности."
        }
      ]
    },
    prerequisite: {
      heading: "Необходимое условие для удалённой диагностики FSE",
      text: "Устройство должно быть включено и иметь стабильное сетевое подключение."
    },
    links: {
      heading: "Важные справочные ссылки",
      items: [
        { label: "wiki.yarbo.com", url: "https://wiki.yarbo.com", desc: "Введите одно ключевое слово, чтобы найти связанные справочные статьи" },
        { label: "Зона покрытия netrtk", url: "https://www.yarbo.com/pages/yarbo-netrtk?p=t", desc: "Показывает зону покрытия при использовании netrtk" },
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Система управления парком Yarbo — войдите как дилер" },
        { label: "Видеоинструкции по ремонту от Dealer Portal", url: "https://dealer-portal.yarbo.com/pages/repair-service-test", desc: "Более подробные видеоинструкции по ремонту для дилеров и ремонтных мастерских" }
      ]
    },
    howItWorks: {
      heading: "Как работает Yarbo",
      blocks: [
        {
          title: "1. DataCenter (DC / базовая станция): «передающая вышка» позиционирования",
          text: "Основная задача базовой станции — передавать данные позиционирования RTK роботу. У неё есть два режима работы:",
          bullets: [
            "При подключении к сети (онлайн-режим): базовая станция подключается к роутеру по кабелю и отправляет данные позиционирования в облако (сервер Ntrip).",
            "Без подключения к сети (офлайн-режим): базовая станция использует HaLow (беспроводную технологию большого радиуса действия), чтобы передавать данные позиционирования напрямую роботу. У неё есть фиксированный внутренний адрес (37.38.38.9).",
            "Bluetooth: работает как пульт дистанционного управления — используется для обновления прошивки базовой станции, изменения настроек или регулировки её подсветки."
          ]
        },
        {
          title: "2. Yarbo Core (робот): «эксперт по приоритетам» связи",
          text: "Робот очень умный — он автоматически переключается между тремя каналами связи в зависимости от силы сигнала (побеждает самый стабильный):",
          ordered: [
            "Первый приоритет (HaLow — наивысший приоритет): выделенный канал Yarbo. Он «одалживает» подключение роутера базовой станции, одновременно получая от неё данные позиционирования. Это самый стабильный вариант, на который не влияет даже отключение Wi-Fi.",
            "Второй приоритет (Wi-Fi): если сигнал HaLow слабый, устройство переключается на домашний Wi-Fi, который быстрый и подходит для передачи больших объёмов данных.",
            "Третий приоритет (4G — последний resort): если оба вышеуказанных канала недоступны, устройство активирует встроенный 4G, чтобы не остаться офлайн."
          ]
        }
      ]
    }
  }
};

const UPDATES = [
  {
    id: "r12-hotfix3",
    titleZh: "R12 hotfix3",
    titleEn: "R12 hotfix3",
    titleJa: "R12 hotfix3",
    titleKo: "R12 hotfix3",
    tagZh: "全量发版",
    tagEn: "Full rollout",
    tagJa: "全面リリース",
    tagKo: "전체 배포",
    firmwareVersion: "3.14.11",
    appVersion: "3.19.5",
    completionDate: "2026-09-02",
    changesZh: [
      "修复使用 NetRTK 时 DC 显示异常的问题",
      "优化恢复场景下的通知逻辑",
      "在蜂窝网络页面新增 4G 服务状态与数据用量信息",
      "修复部分 DC 版本 RTK 详情展示的兼容性问题",
      "移除不可用的 DC Wi-Fi 配置选项"
    ],
    changesEn: [
      "Fixed a DC display issue when using NetRTK",
      "Improved notification logic in recovery scenarios",
      "Added 4G service status and data usage info to the Cellular page",
      "Fixed a compatibility issue with RTK detail display on some DC firmware versions",
      "Removed the unusable DC Wi-Fi configuration option"
    ],
    changesJa: [
      "NetRTK 使用時に DC の表示が異常になる問題を修正",
      "リカバリーシナリオにおける通知ロジックを改善",
      "セルラーネットワークページに 4G サービス状態とデータ使用量情報を追加",
      "一部の DC ファームウェアバージョンで RTK 詳細表示の互換性問題を修正",
      "利用できない DC Wi-Fi 設定オプションを削除"
    ],
    changesKo: [
      "NetRTK 사용 시 DC 표시 이상 문제 수정",
      "복구 시나리오에서의 알림 로직 개선",
      "셀룰러 네트워크 페이지에 4G 서비스 상태 및 데이터 사용량 정보 추가",
      "일부 DC 펌웨어 버전에서 RTK 상세 정보 표시 호환성 문제 수정",
      "사용할 수 없는 DC Wi-Fi 설정 옵션 제거"
    ],
    titleDe: "R12 hotfix3",
    titleFr: "R12 hotfix3",
    titleIt: "R12 hotfix3",
    titleRu: "R12 hotfix3",
    tagDe: "Vollständiges Rollout",
    tagFr: "Déploiement complet",
    tagIt: "Rilascio completo",
    tagRu: "Полное развёртывание",
    changesDe: [
      "Ein DC-Anzeigeproblem bei Verwendung von NetRTK behoben",
      "Benachrichtigungslogik in Wiederherstellungsszenarien verbessert",
      "Status des 4G-Dienstes und Datennutzungsinformationen zur Mobilfunkseite hinzugefügt",
      "Ein Kompatibilitätsproblem bei der RTK-Detailanzeige auf einigen DC-Firmware-Versionen behoben",
      "Die nicht nutzbare DC-WLAN-Konfigurationsoption entfernt"
    ],
    changesFr: [
      "Correction d'un problème d'affichage du DC lors de l'utilisation de NetRTK",
      "Amélioration de la logique de notification dans les scénarios de récupération",
      "Ajout du statut du service 4G et des informations d'utilisation des données à la page Cellulaire",
      "Correction d'un problème de compatibilité de l'affichage des détails RTK sur certaines versions du firmware DC",
      "Suppression de l'option de configuration Wi-Fi DC inutilisable"
    ],
    changesIt: [
      "Risolto un problema di visualizzazione del DC durante l'uso di NetRTK",
      "Migliorata la logica di notifica negli scenari di ripristino",
      "Aggiunte le informazioni sullo stato del servizio 4G e sull'utilizzo dei dati alla pagina Cellulare",
      "Risolto un problema di compatibilità nella visualizzazione dei dettagli RTK su alcune versioni del firmware DC",
      "Rimossa l'opzione di configurazione Wi-Fi DC non utilizzabile"
    ],
    changesRu: [
      "Исправлена проблема отображения DC при использовании NetRTK",
      "Улучшена логика уведомлений в сценариях восстановления",
      "На страницу сотовой связи добавлена информация о статусе 4G и использовании данных",
      "Исправлена проблема совместимости отображения сведений RTK на некоторых версиях прошивки DC",
      "Удалена неработающая опция настройки Wi-Fi для DC"
    ]
  }
];

/* ---------- Case studies (Troubleshooting > Case Studies) ---------- */

const CASES = [
  {
    id: "case-bumper",
    titleZh: "割草头撞击问题（Bumper Issue）",
    titleEn: "Bumper Issue",
    titleJa: "バンパーの衝突問題",
    titleKo: "범퍼 충돌 문제",
    problemZh: "客户反馈：Yarbo 靠近树木时会减速，等到接近时又突然加速撞上树，然后倒退、再次快速撞向树，倒退后第三次快速前冲撞树，接着持续向前顶着树不断推进直到停止。最近一次发生在约 19:25（CDT）。",
    problemEn: "Customer reported: Yarbo slows down as it approaches the tree, then speeds up and hits it once it gets close. It backs up and drives into the tree fast again, backs up a second time, then drives into the tree a third time, and keeps pushing forward against the tree until it simply stops. Latest occurrence was around 19:25 hrs CDT.",
    problemJa: "お客様からの報告：Yarbo は木に近づくと減速し、近くまで来ると加速して木に衝突します。バックしてから再び高速で木に突っ込み、もう一度バックした後、3 回目も木に高速で突っ込み、そのまま前進し続けて木を押し続け、最終的に停止します。直近の発生は CDT 19:25 頃です。",
    problemKo: "고객 신고 내용: Yarbo가 나무에 접근할 때 속도를 줄이다가, 가까워지면 갑자기 가속해 나무에 충돌합니다. 후진한 뒤 다시 빠르게 나무로 돌진하고, 다시 후진한 후 세 번째로 빠르게 나무에 부딪힙니다. 이후 계속 앞으로 나아가며 나무를 밀다가 결국 멈춥니다. 가장 최근 발생 시각은 CDT 19:25경입니다.",
    tags: ["bumper"],
    analysisZh: "1）Yarbo 撞树后没有立即停止，且 App 也没有出现撞击相关的报错，是割草头 bumper 内部的传感器损坏导致的。\n\n2）在工作计划中机器突然加速，且只在这一个地点出现，是车轮打滑导致的。\n\n总结：车轮打滑引发 Yarbo 突然加速，而 bumper 传感器失效导致 Yarbo 无法感知碰撞并停止。",
    analysisEn: "1) Yarbo didn't stop immediately after hitting the tree, and the app showed no collision-related error — caused by a damaged sensor inside the mower head's bumper.\n\n2) The sudden acceleration only happened at this one location during the work plan, which points to wheel slip.\n\nSummary: wheel slip triggered the sudden acceleration, and a failed bumper sensor meant Yarbo couldn't sense the collision and stop.",
    analysisJa: "1）Yarbo は木に衝突した後すぐに停止せず、アプリにも衝突関連のエラーは表示されませんでした ― 芝刈りヘッドのバンパー内部センサーの故障が原因です。\n\n2）作業プラン中にこの一箇所でだけ急加速が発生しており、これは車輪のスリップによるものです。\n\nまとめ：車輪のスリップが急加速を引き起こし、バンパーセンサーの故障により Yarbo が衝突を検知して停止できませんでした。",
    analysisKo: "1) Yarbo는 나무와 충돌한 후 즉시 멈추지 않았고, 앱에도 충돌 관련 오류가 표시되지 않았습니다 — 잔디깎이 헤드 범퍼 내부 센서 고장이 원인입니다.\n\n2) 작업 계획 중 이 한 지점에서만 급가속이 발생했는데, 이는 바퀴 미끄러짐 때문입니다.\n\n요약: 바퀴 미끄러짐이 급가속을 유발했고, 범퍼 센서 고장으로 Yarbo가 충돌을 감지하고 멈추지 못했습니다.",
    solutionZh: "更换割草头的 bumper。",
    solutionEn: "Replace the mower head's bumper.",
    solutionJa: "芝刈りヘッドのバンパーを交換してください。",
    solutionKo: "잔디깎이 헤드의 범퍼를 교체하세요.",
    titleDe: "Bumper-Problem",
    titleFr: "Problème de pare-chocs",
    titleIt: "Problema al paraurti",
    titleRu: "Проблема с бампером",
    problemDe: "Kundenmeldung: Yarbo verlangsamt sich beim Annähern an den Baum, beschleunigt dann und stößt gegen ihn, sobald es nahe genug ist. Es fährt zurück und rammt den Baum erneut schnell, fährt ein zweites Mal zurück und rammt den Baum ein drittes Mal, wobei es weiterhin gegen den Baum drückt, bis es einfach stehen bleibt. Der letzte Vorfall war gegen 19:25 Uhr CDT.",
    problemFr: "Signalement du client : Yarbo ralentit en s'approchant de l'arbre, puis accélère et le percute une fois proche. Il recule et fonce à nouveau rapidement dans l'arbre, recule une deuxième fois, puis fonce dans l'arbre une troisième fois, et continue à pousser contre l'arbre jusqu'à s'arrêter. Le dernier incident s'est produit vers 19h25 (CDT).",
    problemIt: "Segnalazione del cliente: Yarbo rallenta avvicinandosi all'albero, poi accelera e lo colpisce una volta vicino. Retrocede e si dirige di nuovo velocemente contro l'albero, retrocede una seconda volta, poi colpisce l'albero una terza volta, continuando a spingere contro di esso finché non si ferma. L'ultimo episodio si è verificato verso le 19:25 (CDT).",
    problemRu: "Сообщение клиента: Yarbo замедляется при приближении к дереву, затем ускоряется и врезается в него, оказавшись рядом. Отъезжает назад и снова быстро врезается в дерево, отъезжает второй раз, затем врезается в дерево в третий раз, продолжая толкать дерево, пока просто не останавливается. Последний случай произошёл около 19:25 по CDT.",
    analysisDe: "1) Yarbo stoppte nach dem Aufprall nicht sofort, und die App zeigte keinen kollisionsbezogenen Fehler an — verursacht durch einen beschädigten Sensor im Bumper des Mähkopfs.\n\n2) Die plötzliche Beschleunigung trat während des Arbeitsplans nur an dieser einen Stelle auf, was auf Radschlupf hindeutet.\n\nZusammenfassung: Radschlupf löste die plötzliche Beschleunigung aus, und ein ausgefallener Bumper-Sensor bedeutete, dass Yarbo die Kollision nicht erkennen und stoppen konnte.",
    analysisFr: "1) Yarbo ne s'est pas arrêté immédiatement après avoir percuté l'arbre, et l'application n'a affiché aucune erreur liée à une collision — causé par un capteur endommagé à l'intérieur du pare-chocs de la tête de tonte.\n\n2) L'accélération soudaine ne s'est produite qu'à cet endroit précis pendant le plan de travail, ce qui indique un patinage des roues.\n\nRésumé : le patinage des roues a déclenché l'accélération soudaine, et un capteur de pare-chocs défaillant a empêché Yarbo de détecter la collision et de s'arrêter.",
    analysisIt: "1) Yarbo non si è fermato immediatamente dopo aver colpito l'albero, e l'app non ha mostrato alcun errore relativo alla collisione: causato da un sensore danneggiato all'interno del paraurti della testa di taglio.\n\n2) L'accelerazione improvvisa si è verificata solo in questo punto durante il piano di lavoro, il che indica uno slittamento delle ruote.\n\nRiepilogo: lo slittamento delle ruote ha innescato l'accelerazione improvvisa, e un sensore del paraurti guasto ha fatto sì che Yarbo non potesse rilevare la collisione e fermarsi.",
    analysisRu: "1) Yarbo не остановился сразу после удара о дерево, и приложение не показало ошибку, связанную со столкновением — это вызвано повреждённым датчиком внутри бампера косильной головки.\n\n2) Внезапное ускорение произошло только в этом одном месте во время выполнения плана работы, что указывает на пробуксовку колёс.\n\nИтог: пробуксовка колёс вызвала внезапное ускорение, а неисправный датчик бампера привёл к тому, что Yarbo не смог обнаружить столкновение и остановиться.",
    solutionDe: "Den Bumper des Mähkopfs austauschen.",
    solutionFr: "Remplacer le pare-chocs de la tête de tonte.",
    solutionIt: "Sostituire il paraurti della testa di taglio.",
    solutionRu: "Замените бампер косильной головки."
  },
  {
    id: "case-pole-collision",
    titleZh: "回充路上碰撞障碍物（避障模式异常）",
    titleEn: "Collides with Obstacle While Returning to Dock",
    titleJa: "帰還中に障害物と衝突（回避モード異常）",
    titleKo: "복귀 중 장애물 충돌(회피 모드 이상)",
    problemZh: "Yarbo 在回充路上出现异常行为，看起来不断转向并撞击柱子。已知这片区域的避障模式为 Gentle Contact。",
    problemEn: "Yarbo shows abnormal behavior while returning to the dock — it repeatedly turns into and collides with a pole. This area's obstacle-avoidance mode is set to Gentle Contact.",
    problemJa: "Yarbo が充電へ戻る途中で異常な動きをし、何度も方向転換して柱に衝突しています。このエリアの障害物回避モードは Gentle Contact に設定されています。",
    problemKo: "Yarbo가 충전소로 복귀하는 도중 이상 행동을 보이며, 계속 방향을 틀어 기둥에 부딪힙니다. 이 구역의 장애물 회피 모드는 Gentle Contact로 설정되어 있습니다.",
    tags: ["recharge"],
    analysisZh: "Gentle Contact 模式下，Yarbo 是根据碰撞来进行避障的，视频中可以看出 Yarbo 是有避障意识的。问题在于：为什么在这片区域执行 work plan 时这种避障方式没有问题，回充时却会出现异常行为？原因是这根柱子正好在 pathway 上，而回充路线上只有这一条路可以走，导致 Yarbo 反复撞击同一障碍物。",
    analysisEn: "In Gentle Contact mode, Yarbo avoids obstacles based on physical contact, and the video shows it does register the collision. The question is: why does this avoidance mode work fine during a normal work plan in this area, but cause abnormal behavior when returning to dock? The reason is that the pole sits directly on the pathway, and the return route only has this one path available, so Yarbo keeps colliding with the same obstacle.",
    analysisJa: "Gentle Contact モードでは、Yarbo は接触をもとに障害物を回避します。動画からも Yarbo が衝突を認識していることが分かります。疑問点は、このエリアで通常の作業プランを実行する際はこの回避方式で問題がないのに、なぜ帰還時には異常な動きになるのかということです。原因は、この柱がまさに pathway 上にあり、帰還ルートがこの一本道しかないため、Yarbo が同じ障害物に繰り返し衝突してしまうことです。",
    analysisKo: "Gentle Contact 모드에서 Yarbo는 접촉을 기반으로 장애물을 회피하며, 영상에서도 충돌을 인지하고 있음을 확인할 수 있습니다. 의문점은 이 구역에서 일반 작업 계획을 수행할 때는 이 회피 방식에 문제가 없는데, 왜 복귀 시에는 이상 행동을 보이는가입니다. 원인은 이 기둥이 정확히 pathway 위에 있고, 복귀 경로가 이 한 길밖에 없어서 Yarbo가 같은 장애물에 반복해서 부딪히기 때문입니다.",
    solutionZh: "将该柱子画为 No-Go Zone，或为机器开启视觉避障。",
    solutionEn: "Draw the pole as a No-Go Zone, or enable visual obstacle avoidance on the machine.",
    solutionJa: "この柱を No-Go Zone として描画するか、機器の視覚障害物回避を有効にしてください。",
    solutionKo: "해당 기둥을 No-Go Zone으로 지정하거나, 기기의 시각 장애물 회피 기능을 켜세요.",
    video: "assets/case-media/case2-pole-collision.mp4",
    titleDe: "Kollision mit einem Hindernis bei der Rückkehr zur Ladestation",
    titleFr: "Collision avec un obstacle en retournant à la station de charge",
    titleIt: "Collisione con un ostacolo durante il rientro alla stazione di ricarica",
    titleRu: "Столкновение с препятствием при возвращении на зарядную станцию",
    problemDe: "Yarbo zeigt beim Rückweg zur Ladestation ein anormales Verhalten — es dreht sich wiederholt und kollidiert mit einem Pfosten. Der Hindernisvermeidungsmodus dieses Bereichs ist auf Gentle Contact eingestellt.",
    problemFr: "Yarbo présente un comportement anormal en retournant à la station de charge — il tourne à plusieurs reprises et entre en collision avec un poteau. Le mode d'évitement d'obstacles de cette zone est réglé sur Gentle Contact.",
    problemIt: "Yarbo mostra un comportamento anomalo durante il rientro alla stazione di ricarica: gira ripetutamente e collide con un palo. La modalità di evitamento degli ostacoli di quest'area è impostata su Gentle Contact.",
    problemRu: "Yarbo демонстрирует аномальное поведение при возвращении на зарядную станцию — он многократно поворачивает и сталкивается со столбом. Режим объезда препятствий в этой зоне установлен на Gentle Contact.",
    analysisDe: "Im Gentle-Contact-Modus vermeidet Yarbo Hindernisse basierend auf physischem Kontakt, und das Video zeigt, dass die Kollision tatsächlich registriert wird. Die Frage ist: Warum funktioniert dieser Vermeidungsmodus während eines normalen Arbeitsplans in diesem Bereich einwandfrei, verursacht aber bei der Rückkehr zur Ladestation ein anormales Verhalten? Der Grund ist, dass der Pfosten direkt auf dem Pathway liegt und die Rückroute nur diesen einen Weg hat, sodass Yarbo immer wieder mit demselben Hindernis kollidiert.",
    analysisFr: "En mode Gentle Contact, Yarbo évite les obstacles en fonction du contact physique, et la vidéo montre qu'il enregistre bien la collision. La question est : pourquoi ce mode d'évitement fonctionne-t-il bien pendant un plan de travail normal dans cette zone, mais provoque un comportement anormal lors du retour à la station de charge ? La raison est que le poteau se trouve directement sur le pathway, et l'itinéraire de retour ne dispose que de ce seul chemin, donc Yarbo continue de percuter le même obstacle.",
    analysisIt: "In modalità Gentle Contact, Yarbo evita gli ostacoli basandosi sul contatto fisico, e il video mostra che registra effettivamente la collisione. La domanda è: perché questa modalità di evitamento funziona bene durante un normale piano di lavoro in quest'area, ma causa un comportamento anomalo durante il rientro alla stazione di ricarica? Il motivo è che il palo si trova esattamente sul pathway, e il percorso di rientro ha solo questa strada disponibile, quindi Yarbo continua a scontrarsi con lo stesso ostacolo.",
    analysisRu: "В режиме Gentle Contact Yarbo избегает препятствий на основе физического контакта, и видео показывает, что столкновение действительно регистрируется. Вопрос в том, почему этот режим объезда прекрасно работает во время обычного плана работы в этой зоне, но вызывает аномальное поведение при возвращении на зарядную станцию? Причина в том, что столб находится прямо на pathway, а на обратном пути есть только этот единственный путь, поэтому Yarbo продолжает сталкиваться с одним и тем же препятствием.",
    solutionDe: "Den Pfosten als No-Go Zone einzeichnen oder die visuelle Hindernisvermeidung des Geräts aktivieren.",
    solutionFr: "Dessiner le poteau comme une No-Go Zone, ou activer l'évitement d'obstacles visuel sur l'appareil.",
    solutionIt: "Disegnare il palo come No-Go Zone, oppure attivare l'evitamento visivo degli ostacoli sul dispositivo.",
    solutionRu: "Обозначьте столб как No-Go Zone или включите на устройстве визуальный объезд препятствий."
  },
  {
    id: "case-rtk-components",
    titleZh: "RTK 组成部分与天线判断逻辑",
    titleEn: "RTK Components & Antenna Diagnosis Logic",
    titleJa: "RTK の構成部品とアンテナ診断ロジック",
    titleKo: "RTK 구성 부품 및 안테나 진단 로직",
    problemZh: "在 Diagnose Tools 中，status 不为 4 代表左侧天线有问题；L2 不为正数代表右侧天线有问题。具体是内部还是外部的问题，需要结合数值和交叉验证判断。",
    problemEn: "In Diagnose Tools, status not equal to 4 indicates a problem with the left antenna; L2 not being a positive number indicates a problem with the right antenna. Whether the fault is internal or external needs to be judged from the specific values plus cross-verification.",
    problemJa: "Diagnose Tools で status が 4 以外の場合は左側アンテナの問題、L2 が正の数でない場合は右側アンテナの問題を示します。内部か外部かの判断は、具体的な数値とクロス検証を組み合わせて行う必要があります。",
    problemKo: "Diagnose Tools에서 status가 4가 아니면 왼쪽 안테나 문제, L2가 양수가 아니면 오른쪽 안테나 문제를 의미합니다. 내부 문제인지 외부 문제인지는 구체적인 수치와 교차 검증을 통해 판단해야 합니다.",
    tags: ["rtk"],
    analysisZh: "RTK 由三部分组成：RTK Antenna（天线本体）、Dual-side Flexible Antenna Stand（双侧可弯折天线支架）、Internal RTK Extension Cable（内部 RTK 延长线）。这三部分中任意一处出现问题，都会反映在 status 或 L2 的数值上，因此需要先判断是左侧还是右侧异常，再结合具体数值判断故障出现在天线本体、支架还是内部延长线上。",
    analysisEn: "RTK is made up of three parts: the RTK Antenna itself, the Dual-side Flexible Antenna Stand, and the Internal RTK Extension Cable. A fault in any of these three parts shows up in the status or L2 values, so first determine whether it's the left or right side, then use the specific values to judge whether the fault is in the antenna itself, the stand, or the internal extension cable.",
    analysisJa: "RTK は 3 つの部品で構成されています：RTK Antenna（アンテナ本体）、Dual-side Flexible Antenna Stand（両側可動式アンテナスタンド）、Internal RTK Extension Cable（内部 RTK 延長ケーブル）です。これら 3 つのどこに問題があっても status や L2 の数値に表れるため、まず左右どちらの異常かを判断し、次に具体的な数値からアンテナ本体・スタンド・内部延長ケーブルのどこに故障があるかを判断します。",
    analysisKo: "RTK는 세 부분으로 구성됩니다: RTK Antenna(안테나 본체), Dual-side Flexible Antenna Stand(양쪽 가변형 안테나 스탠드), Internal RTK Extension Cable(내부 RTK 연장 케이블). 이 세 부분 중 어디에 문제가 있어도 status나 L2 수치에 나타나므로, 먼저 왼쪽인지 오른쪽인지 판단한 후 구체적인 수치로 안테나 본체·스탠드·내부 연장 케이블 중 어디에 문제가 있는지 판단합니다.",
    solutionZh: "按此逻辑先定位左右侧，再结合具体数值和交叉验证方法，判断故障发生在天线外部还是内部（可参考下方\u201c内部 RTK 延长天线问题\u201d案例）。",
    solutionEn: "Use this logic to first locate the left/right side, then combine specific values with cross-verification to judge whether the fault is external or internal to the antenna (see the \u201cInternal RTK Extension Antenna Issue\u201d case below for reference).",
    solutionJa: "このロジックでまず左右を特定し、具体的な数値とクロス検証を組み合わせて、故障がアンテナの外部か内部かを判断してください（下記の「内部 RTK 延長アンテナの問題」の事例も参考にしてください）。",
    solutionKo: "이 로직으로 먼저 좌우를 파악한 후, 구체적인 수치와 교차 검증을 결합해 안테나 외부 문제인지 내부 문제인지 판단하세요(아래 \u201c내부 RTK 연장 안테나 문제\u201d 사례 참고).",
    images: ["assets/case-media/case3-rtk-components.png"],
    titleDe: "RTK-Komponenten und Antennen-Diagnoselogik",
    titleFr: "Composants RTK et logique de diagnostic d'antenne",
    titleIt: "Componenti RTK e logica di diagnosi dell'antenna",
    titleRu: "Компоненты RTK и логика диагностики антенны",
    problemDe: "In Diagnose Tools weist ein status ungleich 4 auf ein Problem mit der linken Antenne hin; ist L2 keine positive Zahl, deutet dies auf ein Problem mit der rechten Antenne hin. Ob der Fehler intern oder extern ist, muss anhand der konkreten Werte plus Kreuzprüfung beurteilt werden.",
    problemFr: "Dans Diagnose Tools, un statut différent de 4 indique un problème avec l'antenne gauche ; si L2 n'est pas un nombre positif, cela indique un problème avec l'antenne droite. Il faut déterminer si le défaut est interne ou externe à partir des valeurs spécifiques et d'une vérification croisée.",
    problemIt: "In Diagnose Tools, uno status diverso da 4 indica un problema con l'antenna sinistra; se L2 non è un numero positivo, indica un problema con l'antenna destra. Se il guasto sia interno o esterno va valutato in base ai valori specifici e alla verifica incrociata.",
    problemRu: "В Diagnose Tools статус, не равный 4, указывает на проблему с левой антенной; если L2 не является положительным числом, это указывает на проблему с правой антенной. Является ли неисправность внутренней или внешней, нужно определять по конкретным значениям в сочетании с перекрёстной проверкой.",
    analysisDe: "RTK besteht aus drei Teilen: der RTK Antenna selbst, dem Dual-side Flexible Antenna Stand und dem Internal RTK Extension Cable. Ein Fehler in einem dieser drei Teile zeigt sich in den status- oder L2-Werten. Zuerst feststellen, ob es die linke oder rechte Seite betrifft, dann anhand der konkreten Werte beurteilen, ob der Fehler in der Antenne selbst, im Stand oder im internen Verlängerungskabel liegt.",
    analysisFr: "Le RTK est composé de trois parties : l'antenne RTK elle-même, le Dual-side Flexible Antenna Stand et le câble d'extension RTK interne. Un défaut dans l'une de ces trois parties se reflète dans les valeurs de statut ou de L2. Déterminer d'abord s'il s'agit du côté gauche ou droit, puis utiliser les valeurs spécifiques pour juger si le défaut se situe dans l'antenne elle-même, le support ou le câble d'extension interne.",
    analysisIt: "L'RTK è composto da tre parti: l'antenna RTK stessa, il Dual-side Flexible Antenna Stand e il cavo di prolunga RTK interno. Un guasto in una qualsiasi di queste tre parti si riflette nei valori di status o L2, quindi determinare prima se riguarda il lato sinistro o destro, poi usare i valori specifici per giudicare se il guasto è nell'antenna stessa, nel supporto o nel cavo di prolunga interno.",
    analysisRu: "RTK состоит из трёх частей: самой антенны RTK, Dual-side Flexible Antenna Stand и внутреннего удлинительного кабеля RTK. Неисправность любой из этих трёх частей отражается в значениях status или L2, поэтому сначала определите, левая это сторона или правая, а затем по конкретным значениям определите, находится ли неисправность в самой антенне, в стойке или во внутреннем удлинительном кабеле.",
    solutionDe: "Mit dieser Logik zuerst die linke/rechte Seite lokalisieren, dann konkrete Werte mit Kreuzprüfung kombinieren, um zu beurteilen, ob der Fehler außerhalb oder innerhalb der Antenne liegt (siehe unten den Fall „Internes RTK-Verlängerungsantennenproblem“ zur Orientierung).",
    solutionFr: "Utiliser cette logique pour d'abord localiser le côté gauche/droit, puis combiner des valeurs spécifiques avec une vérification croisée pour juger si le défaut est externe ou interne à l'antenne (voir le cas « Problème d'antenne d'extension RTK interne » ci-dessous pour référence).",
    solutionIt: "Utilizzare questa logica per localizzare prima il lato sinistro/destro, quindi combinare valori specifici con la verifica incrociata per giudicare se il guasto è esterno o interno all'antenna (vedere di seguito il caso \"Problema dell'antenna di prolunga RTK interna\" come riferimento).",
    solutionRu: "Используя эту логику, сначала определите левую/правую сторону, затем сочетайте конкретные значения с перекрёстной проверкой, чтобы понять, находится ли неисправность снаружи или внутри антенны (см. ниже случай «Проблема с внутренней удлинительной антенной RTK» для справки)."
  },
  {
    id: "case-internal-rtk-antenna",
    titleZh: "内部 RTK 延长天线问题",
    titleEn: "Internal RTK Extension Antenna Issue",
    titleJa: "内部 RTK 延長アンテナの問題",
    titleKo: "내부 RTK 연장 안테나 문제",
    problemZh: "客户反馈 Yarbo 会在工作计划中出界，GPS 变红，偏移范围达到 99.9 米。用户硬重启后可以恢复，再次开机后能正常运行一段时间，但没多久又会出现同样的情况。首先查看 RTK 状态：截图显示 status 和 L2 都为 0。",
    problemEn: "The customer reported that Yarbo goes out of boundary during a work plan, with GPS turning red and drift reaching 99.9 meters. A hard restart recovers it, and it runs normally for a while after powering back on, but the same issue recurs before long. Checking RTK status first: the screenshot shows both status and L2 at 0.",
    problemJa: "お客様より、Yarbo が作業プラン中に境界を逸脱し、GPS が赤くなり、ズレが 99.9m に達するとの報告がありました。ハード再起動で復旧し、再起動後はしばらく正常に動作しますが、まもなく同じ現象が再発します。まず RTK の状態を確認したところ、スクリーンショットでは status と L2 がともに 0 でした。",
    problemKo: "고객으로부터 Yarbo가 작업 계획 중 경계를 이탈하고 GPS가 빨갛게 변하며 편차가 99.9m에 달한다는 신고가 있었습니다. 강제 재부팅하면 복구되고, 다시 켠 후에는 한동안 정상 작동하지만 얼마 지나지 않아 같은 현상이 재발합니다. 먼저 RTK 상태를 확인한 결과, 스크린샷에서 status와 L2가 모두 0으로 나타났습니다.",
    tags: ["rtk"],
    analysisZh: "用户反馈可以恢复，说明 status 曾经变为 4、L2 曾经为正数，因此可以排除 RTK Antenna 本体损坏或未拧紧的情况。Core 外部的 RTK 部分没有问题，问题只能出在内部。",
    analysisEn: "Since the customer says it recovers, that means status has been 4 and L2 has been positive before — so RTK Antenna damage or a loose antenna can be ruled out. The RTK components external to the Core are fine, so the fault must be internal.",
    analysisJa: "お客様が復旧すると回答していることから、status が 4 に、L2 が正の数になったことがあると分かります。よって RTK Antenna 本体の破損や緩みは除外できます。Core 外部の RTK 部分に問題がないため、問題は内部にしかありません。",
    analysisKo: "고객이 복구된다고 답했으므로 status가 4가 된 적이 있고 L2가 양수였던 적이 있다는 뜻입니다. 따라서 RTK Antenna 본체 손상이나 헐거움은 배제할 수 있습니다. Core 외부의 RTK 부분에는 문제가 없으므로 문제는 내부에만 있을 수 있습니다.",
    solutionZh: "左侧数据会影响右侧数据，仅更换左侧无法保证右侧一定没有问题，因此选择两侧同时更换：Dual-side Flexible Antenna Stand 和 Internal RTK Extension Cable。",
    solutionEn: "Left-side data affects right-side data, so replacing only the left side doesn't guarantee the right side is fine — replace both sides at once: the Dual-side Flexible Antenna Stand and the Internal RTK Extension Cable.",
    solutionJa: "左側のデータは右側のデータに影響するため、左側だけ交換しても右側に問題がないとは保証できません。そのため両側とも交換します：Dual-side Flexible Antenna Stand と Internal RTK Extension Cable。",
    solutionKo: "왼쪽 데이터가 오른쪽 데이터에 영향을 주므로 왼쪽만 교체해서는 오른쪽에 문제가 없다고 보장할 수 없습니다. 따라서 양쪽을 동시에 교체합니다: Dual-side Flexible Antenna Stand와 Internal RTK Extension Cable。",
    images: ["assets/case-media/case4-rtk-panel.png", "assets/case-media/case4-yard-photo.png"],
    titleDe: "Internes RTK-Verlängerungsantennenproblem",
    titleFr: "Problème d'antenne d'extension RTK interne",
    titleIt: "Problema dell'antenna di prolunga RTK interna",
    titleRu: "Проблема с внутренней удлинительной антенной RTK",
    problemDe: "Der Kunde meldete, dass Yarbo während eines Arbeitsplans die Grenze überschreitet, das GPS rot wird und die Abweichung 99,9 Meter erreicht. Ein harter Neustart behebt das Problem, und das Gerät läuft nach dem erneuten Einschalten eine Weile normal, aber das gleiche Problem tritt bald wieder auf. Zunächst den RTK-Status prüfen: Der Screenshot zeigt sowohl status als auch L2 bei 0.",
    problemFr: "Le client a signalé que Yarbo sort des limites pendant un plan de travail, avec le GPS qui devient rouge et une dérive atteignant 99,9 mètres. Un redémarrage forcé résout le problème, et l'appareil fonctionne normalement pendant un moment après la remise sous tension, mais le même problème réapparaît rapidement. Vérifier d'abord le statut RTK : la capture d'écran montre à la fois le statut et L2 à 0.",
    problemIt: "Il cliente ha segnalato che Yarbo esce dal confine durante un piano di lavoro, con il GPS che diventa rosso e la deriva che raggiunge 99,9 metri. Un riavvio forzato risolve il problema, e il dispositivo funziona normalmente per un po' dopo la riaccensione, ma lo stesso problema si ripresenta presto. Verificare prima lo stato RTK: lo screenshot mostra sia lo status che L2 a 0.",
    problemRu: "Клиент сообщил, что Yarbo выходит за границу во время выполнения плана работы, GPS становится красным, а отклонение достигает 99,9 метра. Принудительная перезагрузка устраняет проблему, и устройство некоторое время работает нормально после повторного включения, но вскоре та же проблема повторяется. Сначала проверьте статус RTK: на скриншоте и status, и L2 равны 0.",
    analysisDe: "Da der Kunde sagt, dass sich das Problem behebt, bedeutet dies, dass status zuvor 4 war und L2 positiv war — daher können eine beschädigte oder lockere RTK Antenna ausgeschlossen werden. Die RTK-Komponenten außerhalb des Core sind in Ordnung, also muss der Fehler intern sein.",
    analysisFr: "Puisque le client dit que le problème se résout, cela signifie que le statut a été à 4 et que L2 a été positif auparavant — on peut donc écarter un dommage ou un desserrage de l'antenne RTK. Les composants RTK externes au Core sont corrects, donc le défaut doit être interne.",
    analysisIt: "Poiché il cliente dice che si risolve, significa che lo status è stato 4 e L2 è stato positivo in precedenza, quindi si può escludere un danno o un allentamento dell'antenna RTK. I componenti RTK esterni al Core sono a posto, quindi il guasto deve essere interno.",
    analysisRu: "Поскольку клиент говорит, что проблема устраняется, это означает, что статус ранее был равен 4, а L2 был положительным — значит, повреждение или ослабление антенны RTK можно исключить. Компоненты RTK вне Core в порядке, значит, неисправность должна быть внутренней.",
    solutionDe: "Daten der linken Seite beeinflussen die Daten der rechten Seite, daher garantiert ein Austausch nur der linken Seite nicht, dass die rechte Seite in Ordnung ist — beide Seiten gleichzeitig austauschen: den Dual-side Flexible Antenna Stand und das Internal RTK Extension Cable.",
    solutionFr: "Les données du côté gauche affectent les données du côté droit, donc remplacer uniquement le côté gauche ne garantit pas que le côté droit soit correct — remplacer les deux côtés en même temps : le Dual-side Flexible Antenna Stand et l'Internal RTK Extension Cable.",
    solutionIt: "I dati del lato sinistro influenzano i dati del lato destro, quindi sostituire solo il lato sinistro non garantisce che il lato destro sia a posto: sostituire entrambi i lati contemporaneamente: il Dual-side Flexible Antenna Stand e l'Internal RTK Extension Cable.",
    solutionRu: "Данные левой стороны влияют на данные правой стороны, поэтому замена только левой стороны не гарантирует исправность правой — замените обе стороны одновременно: Dual-side Flexible Antenna Stand и Internal RTK Extension Cable."
  },
  {
    id: "case-ntrip-fail",
    titleZh: "Ntrip 连接失败",
    titleEn: "Fails to Connect to Ntrip",
    titleJa: "Ntrip に接続できない",
    titleKo: "Ntrip 연결 실패",
    problemZh: "该设备无法连接 Ntrip。它所在区域内的其他设备都能正常连接，说明位置本身没有问题。请协助排查原因并改进。",
    problemEn: "This unit is not connecting to Ntrip. It is within the area where other units are connecting, so the location is correct. Could you please investigate the cause and make improvements?",
    problemJa: "この機器は Ntrip に接続できません。同じエリア内の他の機器は接続できているため、位置自体に問題はありません。原因を調査し、改善していただけますか。",
    problemKo: "이 기기는 Ntrip에 연결되지 않습니다. 같은 구역 내 다른 기기들은 정상적으로 연결되고 있으므로 위치 자체에는 문제가 없습니다. 원인을 조사하고 개선해 주시기 바랍니다.",
    tags: ["rtk"],
    analysisZh: "首先怀疑是 RTK Antenna 没有拧紧，或天线内部进水导致的问题。",
    analysisEn: "The first suspicion is that the RTK Antenna isn't tightened properly, or water has gotten inside the antenna.",
    analysisJa: "まず疑われるのは、RTK Antenna がしっかり締まっていない、またはアンテナ内部に水が入っていることです。",
    analysisKo: "가장 먼저 의심되는 것은 RTK Antenna가 제대로 조여지지 않았거나 안테나 내부에 물이 들어간 경우입니다.",
    solutionZh: "让用户拧紧左侧天线，或将其拧开擦拭内部水分后再拧回去。",
    solutionEn: "Have the user tighten the left antenna, or unscrew it, dry out any moisture inside, and screw it back on.",
    solutionJa: "ユーザーに左側アンテナを締め直してもらうか、一度外して内部の水分を拭き取ってから取り付け直してもらってください。",
    solutionKo: "사용자에게 왼쪽 안테나를 조이거나, 분리하여 내부 물기를 닦아낸 후 다시 조립하도록 안내하세요.",
    images: ["assets/case-media/case5-rtk-panel.png"],
    titleDe: "Verbindung zu Ntrip schlägt fehl",
    titleFr: "Échec de connexion à Ntrip",
    titleIt: "Impossibile connettersi a Ntrip",
    titleRu: "Не удаётся подключиться к Ntrip",
    problemDe: "Dieses Gerät stellt keine Verbindung zu Ntrip her. Es befindet sich in dem Bereich, in dem sich andere Geräte verbinden, sodass der Standort korrekt ist. Könnten Sie bitte die Ursache untersuchen und Verbesserungen vornehmen?",
    problemFr: "Cet appareil ne se connecte pas à Ntrip. Il se trouve dans la zone où d'autres appareils se connectent, donc l'emplacement est correct. Pourriez-vous s'il vous plaît étudier la cause et apporter des améliorations ?",
    problemIt: "Questa unità non si connette a Ntrip. Si trova nell'area in cui altre unità si connettono, quindi la posizione è corretta. Potreste indagare sulla causa e apportare miglioramenti?",
    problemRu: "Это устройство не подключается к Ntrip. Оно находится в зоне, где подключаются другие устройства, значит, расположение верное. Не могли бы вы выяснить причину и внести улучшения?",
    analysisDe: "Der erste Verdacht ist, dass die RTK Antenna nicht richtig festgezogen ist oder Wasser in die Antenne eingedrungen ist.",
    analysisFr: "Le premier soupçon est que l'antenne RTK n'est pas correctement serrée, ou que de l'eau s'est infiltrée à l'intérieur de l'antenne.",
    analysisIt: "Il primo sospetto è che l'antenna RTK non sia stretta correttamente, oppure che sia entrata acqua all'interno dell'antenna.",
    analysisRu: "Первое подозрение — антенна RTK неплотно затянута или внутрь антенны попала вода.",
    solutionDe: "Den Nutzer bitten, die linke Antenne festzuziehen oder sie abzuschrauben, die Feuchtigkeit im Inneren zu trocknen und sie wieder aufzuschrauben.",
    solutionFr: "Demander à l'utilisateur de serrer l'antenne gauche, ou de la dévisser, de sécher toute humidité à l'intérieur, puis de la revisser.",
    solutionIt: "Chiedere all'utente di stringere l'antenna sinistra, oppure di svitarla, asciugare eventuale umidità all'interno e riavvitarla.",
    solutionRu: "Попросите пользователя затянуть левую антенну или открутить её, высушить влагу внутри и закрутить обратно."
  }
];
