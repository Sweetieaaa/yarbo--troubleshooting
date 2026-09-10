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
    changelog: "업데이트 내용",
    fullRollout: "전체 배포",
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
                        "detailKo": "유선 충전기를 교체한 후 다시 시도하세요."
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
                        "detailKo": "배터리를 교체한 후 다시 시도하세요."
                      }
                    ],
                    "ja": "それでも反応がない",
                    "ko": "여전히 반응 없음"
                  }
                ],
                "ja": "バッテリーを抜き差ししてから再度試す",
                "ko": "배터리를 뺐다가 다시 끼운 후 재시도"
              }
            ],
            "ja": "電源ボタンを押しても、ライトの点滅も含めて一切反応がない",
            "ko": "전원 버튼을 눌러도 표시등 깜빡임을 포함해 전혀 반응이 없음"
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
                    "detailKo": "문제 해결 과정을 기록하고 설명하여 FSE에 보고하세요."
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
                    "detailKo": "사용자에게 Yarbo를 Wi-Fi 공유기에 더 가까운 곳으로 옮기게 하고, FSE에 백엔드 조사를 요청하세요."
                  }
                ],
                "ja": "電源ボタンを 60 秒長押ししてから再起動し、正常に起動するか確認する",
                "ko": "전원 버튼을 60초간 길게 누른 후 다시 켜서 정상적으로 부팅되는지 확인"
              }
            ],
            "ja": "電源ボタンを押すと反応があり、ライトも点灯する",
            "ko": "전원 버튼을 누르면 반응이 있고 표시등도 켜짐"
          }
        ],
        "ja": "「ready to work」と表示される前",
        "ko": "\"ready to work\"가 표시되기 전"
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
                    "detailKo": "스크린샷을 증거로 남기고 FSE에 문의하세요."
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
                    "detailKo": "문제가 해결되었습니다."
                  }
                ],
                "ja": "スマートフォンの Bluetooth をオフにしてから再度オンにし、「Yarbo Music」という名前の Bluetooth デバイスが検出できるか確認する",
                "ko": "휴대폰 블루투스를 껐다가 다시 켠 후 \"Yarbo Music\"이라는 이름의 블루투스 기기가 검색되는지 확인"
              }
            ],
            "ja": "Bluetooth に接続できない？",
            "ko": "블루투스에 연결할 수 없나요?"
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
                        "detailKo": "Wi-Fi 네트워크를 변경하세요."
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
                        "detailKo": "기존 Wi-Fi 연결 기록을 삭제하고 4G만 사용하세요. 참고: Smart Vision의 월간 4G 데이터 한도는 20분이며, 초과 시 FSE에 문의하여 수동으로 리셋해야 합니다."
                      }
                    ],
                    "ja": "スマートフォンのテザリングでは安定して接続できるか？",
                    "ko": "휴대폰 핫스팟으로는 안정적으로 연결되나요?"
                  }
                ],
                "ja": "Wi-Fi ネットワークが不安定な場合、スマートフォンのテザリングで安定して接続できるか試す",
                "ko": "Wi-Fi 네트워크가 불안정하면 휴대폰 핫스팟으로 안정적으로 연결되는지 시도"
              }
            ],
            "ja": "Wi-Fi に接続できない？",
            "ko": "Wi-Fi에 연결할 수 없나요?"
          }
        ],
        "ja": "「ready to work」と表示された後",
        "ko": "\"ready to work\"가 표시된 후"
      }
    ],
    "ja": "Yarbo 電源が入らない／起動の問題",
    "ko": "Yarbo 전원이 켜지지 않음 / 부팅 문제"
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
                                "ko": "바퀴 미끄러짐으로 인해 경계를 이탈했을 가능성이 있습니다. FSE에 문의하여 로그를 수집해 분석을 요청하세요"
                              }
                            ],
                            "ja": "戻れる ― マップ上の位置と実際の位置が一致している",
                            "ko": "가능함 — 지도상 위치와 실제 위치가 일치함"
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
                                "ko": "지도 드리프트로 인한 경계 이탈입니다. 기기를 수동으로 도킹 스테이션까지 이동시킨 후 Correct Map Drift를 탭하세요"
                              }
                            ],
                            "ja": "戻れない ― マップ上の Yarbo の位置が実際の位置と一致していない",
                            "ko": "불가능함 — 지도상 Yarbo 위치가 실제 위치와 일치하지 않음"
                          }
                        ],
                        "ja": "正常に充電へ戻れるか？",
                        "ko": "정상적으로 복귀 충전이 되나요?"
                      }
                    ],
                    "ja": "docking station へ戻って充電する",
                    "ko": "도킹 스테이션으로 복귀시켜 충전"
                  }
                ],
                "ja": "はい",
                "ko": "예"
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
                            "ko": "Vision Zone을 그려 장애물 회피 모드를 변경하여 재발을 방지하세요"
                          }
                        ],
                        "ja": "ある",
                        "ko": "있음"
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
                            "ko": "증거를 보존하고 FSE에 문의하세요"
                          }
                        ],
                        "ja": "いいえ",
                        "ko": "아니요"
                      }
                    ],
                    "ja": "Yarbo の上部に遮蔽物はあるか？",
                    "ko": "Yarbo 상단에 가림막이 있나요?"
                  }
                ],
                "ja": "いいえ",
                "ko": "아니요"
              }
            ],
            "ja": "発生した具体的な時刻を記録し、その場で RTK の status が 4 かどうかを確認する",
            "ko": "발생한 정확한 시간을 기록하고, 그 자리에서 RTK의 status가 4인지 확인"
          }
        ],
        "ja": "境界逸脱",
        "ko": "경계 이탈"
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
                                            "ko": "1. 발생한 정확한 시간은?"
                                          },
                                          {
                                            "id": "report-video",
                                            "zh": "2. 发生地点的周围环境视频",
                                            "en": "2. A video of the surrounding environment where it occurred",
                                            "leaf": true,
                                            "ja": "2. 発生場所の周辺環境の映像",
                                            "ko": "2. 발생 장소 주변 환경 영상"
                                          },
                                          {
                                            "id": "report-frequency",
                                            "zh": "3. 是偶尔复现还是频繁复现？",
                                            "en": "3. Whether it's occasional or frequent",
                                            "leaf": true,
                                            "ja": "3. まれに再現するか、それとも頻繁に再現するか？",
                                            "ko": "3. 가끔 재현되나요, 아니면 자주 재현되나요?"
                                          }
                                        ],
                                        "ja": "RTK ハードウェア自体に問題はありません。多くの場合、機器が木陰など遮蔽物のある場所を走行していることが原因です。それ以外の異常の場合は、以下の 3 点を FSE に提供してください",
                                        "ko": "RTK 하드웨어 자체에는 문제가 없습니다. 대개 기기가 나무 그늘 등 가림막이 있는 곳을 주행하고 있기 때문입니다. 그 외의 이상 상황이라면 다음 세 가지 정보를 FSE에 제공해야 합니다"
                                      }
                                    ],
                                    "ja": "はい",
                                    "ko": "예"
                                  }
                                ],
                                "ja": "L2 ≠ 0",
                                "ko": "L2 ≠ 0"
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
                                    "ko": "오른쪽 안테나에 문제가 있습니다. 오른쪽 안테나를 조이거나 안테나 내부의 물기를 닦아내세요. 개선되지 않으면 상황을 설명하고 스크린샷을 첨부해 FSE에 보내세요"
                                  }
                                ],
                                "ja": "L2 = 0",
                                "ko": "L2 = 0"
                              }
                            ],
                            "ja": "はい",
                            "ko": "예"
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
                                "ko": "왼쪽 안테나에 문제가 있습니다. 왼쪽 안테나를 조이거나 안테나 내부의 물기를 닦아내세요. 개선되지 않으면 상황을 설명하고 스크린샷을 첨부해 FSE에 보내세요"
                              }
                            ],
                            "ja": "いいえ",
                            "ko": "아니요"
                          }
                        ],
                        "ja": "status は 4 か？",
                        "ko": "status가 4인가요?"
                      }
                    ],
                    "ja": "はい",
                    "ko": "예"
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
                            "ko": "기기를 재부팅한 후 다시 데이터를 확인하세요"
                          }
                        ],
                        "ja": "netrtk",
                        "ko": "netrtk"
                      }
                    ],
                    "ja": "いいえ",
                    "ko": "아니요"
                  }
                ],
                "ja": "mode は true か？",
                "ko": "mode가 true인가요?"
              }
            ],
            "ja": "アプリが online 状態になったら、Setting → Diagnose Tools → RTK Part に入ります。Yarbo の電源を入れた直後の場合は、データ収集が安定するまで 3～5 分お待ちください",
            "ko": "앱이 online 상태가 되면 Setting → Diagnose Tools → RTK Part로 들어가세요. Yarbo를 막 켠 경우 데이터 수집이 안정될 때까지 3~5분 기다려야 합니다"
          }
        ],
        "ja": "走行方向異常／GPS 異常",
        "ko": "주행 방향 이상 / GPS 이상"
      }
    ],
    "ja": "境界逸脱／走行方向異常／GPS 異常",
    "ko": "경계 이탈 / 주행 방향 이상 / GPS 이상"
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
                "ko": "스크린샷을 찍어 FSE에 전달하고, 작업 중 연결이 끊겼는지 아닌지, 자주 발생하는지 가끔 발생하는지 설명하세요"
              }
            ],
            "ja": "0 の場合",
            "ko": "0인 경우"
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
                "ko": "기기를 재부팅하세요. 개선되지 않으면 FSE로 에스컬레이션하세요"
              }
            ],
            "ja": "0 でない場合",
            "ko": "0이 아닌 경우"
          }
        ],
        "ja": "Diagnose Tools の Camera 項目を開き、右側の state が 0 かどうかを確認する",
        "ko": "Diagnose Tools의 Camera 항목에서 오른쪽 state 값이 0인지 확인"
      }
    ],
    "ja": "カメラの画面が真っ黒になる",
    "ko": "카메라 화면이 검게 나옴"
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
            "detailKo": "Ultrasonic Sensor를 끄는 것을 권장합니다."
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
            "detailKo": "원칙: 하나의 area는 하나의 area에 연결되고, 하나의 area는 하나의 docking station에 연결됩니다."
          }
        ],
        "ja": "充電へ戻る途中で失敗する",
        "ko": "충전소로 복귀하는 도중 실패"
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
                "ko": "충전 패드 위치 인식 코일 문제"
              }
            ],
            "ja": "機器は中央に合わせられないが、手動操作では充電できる",
            "ko": "기기가 중앙에 맞춰지지 않지만 수동 조작으로는 충전이 됨"
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
                    "ko": "FSE에 연락해 현상을 설명하고 원격으로 조사를 요청하세요"
                  }
                ],
                "ja": "RTK は正確で、マップ上の位置も実際と一致している",
                "ko": "RTK가 정확하고 지도상 위치도 실제와 일치함"
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
                        "detailKo": "문제가 해결되었습니다."
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
                        "detailKo": "FSE에 연락하여 원격 조사를 요청하세요."
                      }
                    ],
                    "ja": "手動で機器をドッキングさせ、Correct Map Drift をタップしてください",
                    "ko": "수동으로 기기를 도킹시킨 후 Correct Map Drift를 탭하세요"
                  }
                ],
                "ja": "RTK は正確だが、マップ上の位置が実際と一致していない",
                "ko": "RTK는 정확하지만 지도상 위치가 실제와 일치하지 않음"
              }
            ],
            "ja": "機器は中央に合わせられるが、充電できない",
            "ko": "기기가 중앙에 맞춰지지만 충전이 되지 않음"
          }
        ],
        "ja": "ドッキングの失敗",
        "ko": "도킹 실패"
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
                "ko": "다시 작업 계획을 실행해 상태를 지켜보세요. 개선되지 않으면 FSE에 문의하세요"
              }
            ],
            "ja": "電源を切って 4 時間放置する",
            "ko": "전원을 끄고 4시간 동안 그대로 둠"
          }
        ],
        "ja": "バッテリーが満充電にならない、充電が遅い、消耗が早い",
        "ko": "배터리가 완전히 충전되지 않음, 충전 속도가 느림, 소모가 너무 빠름"
      }
    ],
    "ja": "ワイヤレス充電の失敗",
    "ko": "무선 충전 실패"
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
                "detailKo": "문제 해결 과정을 설명하고 FSE에 보고하세요."
              }
            ],
            "ja": "DC の RTK に問題がある可能性があります。Core の RTK を取り外して DC に取り付け、緑ランプに変わるか確認してください",
            "ko": "DC의 RTK에 문제가 있을 수 있습니다. Core의 RTK를 분리해 DC에 장착한 후 초록색으로 바뀌는지 확인하세요"
          }
        ],
        "ja": "症状：DC が赤ランプを点灯する",
        "ko": "증상: DC에 빨간색 표시등이 켜짐"
      }
    ],
    "ja": "Data Center の異常トラブルシューティング",
    "ko": "Data Center 이상 문제 해결"
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
      "Guide the user to remove the collision strip. If the error clears once it's removed, simply replace the collision-strip part.",
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
  ]
};

const VIDEOS = [
  {
    id: "core",
    zh: "核心主机（通用配件）",
    en: "Core Unit (Common Parts)",
    ja: "コア本体（共通部品）",
    ko: "코어 본체(공통 부품)",
    items: [
      { id: "v-actuator", titleEn: "How to Change Linear Actuator Motor", titleZh: "更换推杆电机",
        links: [{ type: "drive", url: null }] },
      { id: "v-track-motor", titleEn: "How to replace the motor track module", titleZh: "更换行走电机履带模块",
        links: [{ type: "youtube", url: "https://youtu.be/78bEWqKmkxY" }] },
      { id: "v-estop-button", titleEn: "How to Replace the Emergency Button", titleZh: "更换急停",
        links: [{ type: "youtube", url: "https://youtu.be/H1R_j9qenSo" }, { type: "wiki", url: "https://wiki.yarbo.com/en/sam/installation/emergency-stop-button" }] },
      { id: "v-estop-wiring", titleEn: "How to Replace E-Stop wiring", titleZh: "更换急停线束",
        links: [{ type: "drive", url: null }] },
      { id: "v-rear-cover", titleEn: "How to Repair a Stuck Rear Cover?", titleZh: "尾部金属变形",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=VxLPnGC8otw" }] },
      { id: "v-rear-bumper", titleEn: "How to replace rear bumper", titleZh: "更换尾部保险杠（螺丝版）",
        links: [{ type: "youtube", url: "https://youtu.be/xBjANIKXP98" }] },
      { id: "v-host-shell", titleEn: "How to Replace Host Shell", titleZh: "更换车身上壳体",
        links: [{ type: "youtube", url: "https://youtu.be/BpVkGcbGw1Q" }] },
      { id: "v-drive-wheels", titleEn: "Replace Drive Wheels", titleZh: "更换驱动轮",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=nmqb1CwiSDs" }] },
      { id: "v-driven-wheel-bolt", titleEn: "How to Replace a driven wheel Bolt", titleZh: "更换从动轮轴",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=e3gDmhPGtn0" }] },
      { id: "v-driven-wheel", titleEn: "How to Replace a driven wheel", titleZh: "更换从动轮",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=CZ6p7VgEgps" }] },
      { id: "v-lifting-module", titleEn: "Lifting Module Reinforcement Guide", titleZh: "顶升加强",
        links: [{ type: "youtube", url: "https://youtu.be/sQnOtG860yE" }] },
      { id: "v-cable-guard", titleEn: "Add Cable Protection Guard", titleZh: "安装线缆保护板",
        links: [{ type: "youtube", url: "https://youtu.be/zJF1VPHlRDg" }] },
      { id: "v-side-camera", titleEn: "Replace Side Camera Module", titleZh: "更换侧摄像头三合一模块",
        links: [{ type: "youtube", url: "https://youtu.be/7on0DteVH7I?si=SKV6tbr0UkdVgkHC" }] },
      { id: "v-side-camera-2025", titleEn: "Replace Side Camera Module (2025 Updated)", titleZh: "更换25新版侧摄像头模块",
        links: [{ type: "youtube", url: "https://youtu.be/uz6owhs41ek" }] },
      { id: "v-rear-camera", titleEn: "Replace Rear Camera Module", titleZh: "更换尾部摄像头",
        links: [{ type: "youtube", url: "https://youtu.be/ylvnvT8Maco" }] },
      { id: "v-halow-antenna", titleEn: "How to Replace internal antenna for Halow", titleZh: "更换 Halow 内部天线",
        links: [{ type: "youtube", url: "https://youtu.be/MGTxPyEr3fs?si=j0Cp76fbL3bwBgzU" }] },
      { id: "v-dc-adapter", titleEn: "How to Install the Data Center Adapters", titleZh: "DC 转接头",
        links: [{ type: "youtube", url: "https://youtu.be/X_xXagX0yDE" }] },
      { id: "v-rtk-cable", titleEn: "RTK Cable Replacement Guide", titleZh: "更换 RTK 内部馈线",
        links: [{ type: "youtube", url: "https://youtu.be/mkrZ4rFy7rQ" }, { type: "wiki", url: "https://wiki.yarbo.com/en/sam/installation/rtk-cable-replacement" }] },
      { id: "v-rtk-cable-2025", titleEn: "RTK Cable Replacement Guide (2025 Updated)", titleZh: "更换新版 RTK 内部馈线",
        links: [{ type: "youtube", url: "https://youtu.be/I5iwMjYlFIA" }] },
      { id: "v-powerboard-1", titleEn: "Powerboard Waterproof Coating Filling Instruction", titleZh: "电源板打胶",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=f30Vfp8tZHs" }] },
      { id: "v-powerboard-2", titleEn: "Powerboard Waterproof Coating Filling Instruction", titleZh: "电源板打胶",
        links: [{ type: "youtube", url: "https://youtu.be/MpGlG2mBJAA" }] },
      { id: "v-controller-guide", titleEn: "Physical Controller Phone Connector Guide", titleZh: "手柄支架使用教程",
        links: [{ type: "drive", url: null }] },
      { id: "v-wireless-charging", titleEn: "Replace Wireless Charging Module", titleZh: "更换无线充接收端",
        links: [{ type: "youtube", url: "https://youtu.be/qYN2PtDeAEU" }, { type: "drive", url: "https://drive.google.com/file/d/1IXUuyZmZopJl2MI8Ucz6IGW-mYtvwTjp/view?usp=share_link", note: { zh: "更新版，建议发这个", en: "Updated version — recommended", ja: "更新版。こちらの送付を推奨", ko: "업데이트 버전 — 이걸 보내는 것을 권장" } }] },
      { id: "v-m25-wire", titleEn: "Repairing Poor Contact on M25 Wire", titleZh: "M25松动补修",
        links: [{ type: "youtube", url: "https://youtu.be/C372WfbIFBY" }] }
    ]
  },
  {
    id: "mower24",
    zh: "2024 割草头",
    en: "2024 Mower",
    ja: "2024 芝刈りヘッド",
    ko: "2024 잔디깎이 헤드",
    items: [
      { id: "v-mower-bumper", titleEn: "How to Replace mower Bumper", titleZh: "更换割草bumper",
        links: [{ type: "youtube", url: "https://youtu.be/Ak2II75Dc68" }, { type: "wiki", url: "https://wiki.yarbo.com/en/lawn-mower/installation/replace-bumper" }] },
      { id: "v-cutting-motor", titleEn: "Replace the Cutting Motor", titleZh: "更换割草电机安装筒",
        links: [{ type: "youtube", url: "https://youtu.be/VCCjZQo5SX0" }] },
      { id: "v-rain-sensor", titleEn: "Replace the Rain Sensor", titleZh: "更换割草雨水传感器",
        links: [{ type: "youtube", url: "https://youtu.be/_V9TT_UASBU" }, { type: "wiki", url: "https://wiki.yarbo.com/en/lawn-mower/installation/replace-rain-sensor" }] },
      { id: "v-blade-guard", titleEn: "Remove Blade Guard", titleZh: "拆除割草防护罩",
        links: [{ type: "wiki", url: "https://wiki.yarbo.com/lawn-mower/installation/blade-guard-removal" }] },
      { id: "v-blade-guard-m1pro", titleEn: "Remove M1 Pro Blade Guard", titleZh: "拆除割草防护罩",
        links: [{ type: "youtube", url: "https://youtu.be/sN27tzp0JFc" }] },
      { id: "v-mower-camera", titleEn: "Replace Mower Camera Module", titleZh: "更换前摄像头",
        links: [{ type: "youtube", url: "https://youtu.be/V3Y_HoxRrVs?si=jDGisHkkju5-A6xn" }] },
      { id: "v-connection-shaft", titleEn: "How to replace the connection shaft", titleZh: "更换连接轴",
        links: [{ type: "youtube", url: "https://youtu.be/c-_cDALGCrM" }] }
    ]
  },
  {
    id: "blower24",
    zh: "2024 吹雪头",
    en: "2024 Blower",
    ja: "2024 ブロワーヘッド",
    ko: "2024 블로워 헤드",
    items: [
      { id: "v-blower-camera", titleEn: "Replacing Yarbo 2024 Blower's Front Camera", titleZh: "更换吹风前摄",
        links: [{ type: "youtube", url: "https://youtu.be/eUyIt1hbJDQ" }] }
    ]
  },
  {
    id: "trimmer25",
    zh: "2025 割灌头",
    en: "2025 Trimmer",
    ja: "2025 トリマーヘッド",
    ko: "2025 트리머 헤드",
    items: [
      { id: "v-trimmer-spool", titleEn: "Trimmer — Change Head and Line Spool", titleZh: "换线轴+线盘",
        links: [{ type: "youtube", url: "https://youtu.be/BXbmH6QJuMM" }] },
      { id: "v-trimmer-feed-error", titleEn: "Trimmer Line Feed Error Troubleshooting", titleZh: "送线异常诊断",
        links: [{ type: "youtube", url: "https://youtu.be/eTiveMW9X1Q" }] },
      { id: "v-trimmer-blade", titleEn: "Trimmer — Change Trimmer Blade", titleZh: "刀片",
        links: [{ type: "youtube", url: "https://youtu.be/Qhu8CpVMVyw" }] }
    ]
  },
  {
    id: "snowblower24",
    zh: "2024 扫雪头",
    en: "2024 Snowblower",
    ja: "2024 除雪ヘッド",
    ko: "2024 제설 헤드",
    items: [
      { id: "v-snow-force-detach", titleEn: "Force detach snowblower from the core", titleZh: "强拆扫雪头",
        links: [{ type: "drive", url: null }] },
      { id: "v-shear-pin", titleEn: "How to replace shear pin", titleZh: "更换 Shear Pin",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=B4eMGf6-W1E" }, { type: "wiki", url: "https://wiki.yarbo.com/en/snow-blower/installation/replace-shear-pin" }] },
      { id: "v-deflector-cord", titleEn: "How to replace the deflector Metal Cord", titleZh: "钢丝绳",
        links: [{ type: "drive", url: null }] },
      { id: "v-snow-bumper", titleEn: "Replace Snowblower's Bumper", titleZh: "更换扫雪碰撞条",
        links: [{ type: "youtube", url: "https://youtu.be/khXXKO-VCbs?si=C1aSeyFpXVy54971" }] },
      { id: "v-snow-rope-spool", titleEn: "Replacing Yarbo 2024 Snowblower's Metal Rope & Spool", titleZh: "更换扫雪钢丝绳+绕线盘",
        links: [{ type: "youtube", url: "https://youtu.be/9zSkgNE_j6Q" }] },
      { id: "v-snow-front-camera", titleEn: "Replacing Yarbo 2024 Snowblower's Front Camera Module", titleZh: "更换扫雪前摄灯板",
        links: [{ type: "youtube", url: "https://youtu.be/DiNAmeJoyb8" }] },
      { id: "v-snow-belt", titleEn: "Replacing Snowblower's belt", titleZh: "更换扫雪皮带（含小同步轮）",
        links: [{ type: "youtube", url: "https://www.youtube.com/watch?v=PIMcvDEnOPY" }] },
      { id: "v-snow-bumper-module", titleEn: "Replacing Yarbo 2024 Snowblower's Bumper Module", titleZh: "扫雪碰撞条更换",
        links: [{ type: "youtube", url: "https://youtu.be/5PrKpfJCLEQ" }] },
      { id: "v-snow-auger-2025", titleEn: "How to Replace the Snow Auger Motor on the 2025 Snowblower", titleZh: "更换2025 卷雪电机",
        links: [{ type: "youtube", url: "https://youtu.be/KW7VpruGkhk" }] },
      { id: "v-snow-auger-2024", titleEn: "How to Replace the Snow Auger Motor on the 2024 Snowblower", titleZh: "更换2024 卷雪电机",
        links: [{ type: "youtube", url: "https://youtu.be/48feJA2dL4g" }] },
      { id: "v-snow-headlight", titleEn: "Replacing the 2024 Snow Blower Headlight Module", titleZh: "更换2024 扫雪车头前灯",
        links: [{ type: "youtube", url: "https://youtu.be/fAplCv9wVWQ" }] },
      { id: "v-snow-first-stage-blade", titleEn: "New version snowblower — replace first stage blades", titleZh: "新版扫雪头更换一级叶片",
        links: [] },
      { id: "v-snow-second-stage-blade", titleEn: "", titleZh: "扫雪头更换二级叶片",
        links: [] },
      { id: "v-snow-m25-spring", titleEn: "", titleZh: "扫雪头M25线塞小弹簧",
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
      items: [
        { label: "硬件问题", text: "需要提供具体照片，帮助 FSE 判断损坏原因，以及是否需要更换部件。" },
        { label: "软件问题", text: "需要提供具体发生时间，并判断是偶发还是稳定复现，帮助 FSE 定位问题。" },
        { label: "软硬件结合问题", text: "先排查硬件，排除硬件故障后，再按 FSE 提供的排查步骤抓取日志。" }
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
      items: [
        { label: "Hardware issues", text: "Provide specific photos to help FSE judge the cause of the damage and whether a part needs replacing." },
        { label: "Software issues", text: "Provide the exact time it happened, and note whether it's occasional or consistently reproducible, to help FSE diagnose it." },
        { label: "Combined hardware / software issues", text: "Rule out hardware first; once hardware is cleared, follow FSE's troubleshooting steps to pull logs." }
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
      items: [
        { label: "ハードウェアの問題", text: "具体的な写真を提供し、FSE が破損原因および部品交換の要否を判断できるようにします。" },
        { label: "ソフトウェアの問題", text: "発生した具体的な時刻を提供し、まれに起きるのか安定して再現するのかを判断して、FSE の診断を助けます。" },
        { label: "ハードウェアとソフトウェアが絡む問題", text: "まずハードウェアを確認し、ハードウェアの故障を除外したうえで、FSE の指示する手順に沿ってログを取得してください。" }
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
      items: [
        { label: "하드웨어 문제", text: "구체적인 사진을 제공해 FSE가 손상 원인과 부품 교체 필요 여부를 판단하도록 도와주세요." },
        { label: "소프트웨어 문제", text: "발생한 정확한 시간을 제공하고, 가끔 발생하는지 안정적으로 재현되는지 판단하여 FSE의 진단을 도와주세요." },
        { label: "하드웨어·소프트웨어 복합 문제", text: "먼저 하드웨어를 점검하고, 하드웨어 문제를 배제한 후 FSE가 제공하는 절차에 따라 로그를 수집하세요." }
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
    ]
  }
];
