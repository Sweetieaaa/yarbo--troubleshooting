/* ============================================================
   Yarbo Troubleshooting Site — Data
   All content is bilingual: each node carries zh / en text.
   ============================================================ */

/* ---------- UI strings ---------- */
const UI = {
  zh: {
    siteName: "Yarbo 故障排查",
    navIntro: "Introduction",
    navTrouble: "Troubleshooting",
    navCodes: "常见错误代码",
    navVideos: "自修视频",
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
    rolloutPlan: "发布计划",
    changelog: "更新内容",
    fullRollout: "全量发布",
  },
  en: {
    siteName: "Yarbo Troubleshooting",
    navIntro: "Introduction",
    navTrouble: "Troubleshooting",
    navCodes: "Common Error Codes",
    navVideos: "Self-Repair Videos",
    navUpdates: "Update News",
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
    rolloutPlan: "Rollout plan",
    changelog: "What's new",
    fullRollout: "Full rollout",
  }
};

/* ---------- Troubleshooting decision tree ---------- */
/* node: { id, zh, en, detailZh, detailEn, leaf, escalate, resolved, children[] } */

const TREE = [
  {
    id: "power-on",
    zh: "Yarbo 开机异常",
    en: "Yarbo Won't Power On / Boot Issues",
    children: [
      {
        id: "before-ready",
        zh: "报 ready to work 前",
        en: "Before it reports \u201cready to work\u201d",
        children: [
          {
            id: "no-response",
            zh: "按电源键完全没有任何反应，包括灯光闪烁",
            en: "Pressing the power button gives no reaction at all, not even a light flicker",
            children: [
              {
                id: "unplug-battery",
                zh: "插拔电池后再尝试",
                en: "Remove and reinsert the battery, then try again",
                children: [
                  {
                    id: "still-no-response",
                    zh: "仍然没有反应",
                    en: "Still no response",
                    children: [
                      {
                        id: "wired-green-no-light",
                        zh: "有线充电器显示绿灯，但 Yarbo 仍无灯光反应",
                        en: "Wired charger shows a green light, but Yarbo still shows no light",
                        leaf: true,
                        detailZh: "更换有线充电器再次尝试。",
                        detailEn: "Swap the wired charger and try again."
                      },
                      {
                        id: "wired-red-no-light",
                        zh: "有线充电器显示红灯，但 Yarbo 仍无灯光反应",
                        en: "Wired charger shows a red light, but Yarbo still shows no light",
                        leaf: true,
                        detailZh: "更换电池再次尝试。",
                        detailEn: "Swap the battery and try again."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "has-light-response",
            zh: "按电源键有反应，并且有灯光",
            en: "Pressing the power button reacts and shows a light",
            children: [
              {
                id: "hold-60s",
                zh: "长按电源键 60 秒后重新开机，看能否正常开机",
                en: "Hold the power button for 60 seconds, then power on again and check if it boots normally",
                children: [
                  {
                    id: "light-off-self",
                    zh: "灯光闪烁一会后自行熄灭",
                    en: "The light flickers for a while then goes off on its own",
                    leaf: true,
                    escalate: true,
                    detailZh: "记录并描述排查思路，告知 FSE。",
                    detailEn: "Record and describe the troubleshooting steps taken, then report to FSE."
                  },
                  {
                    id: "light-stays-on",
                    zh: "灯光一直维持闪烁状态",
                    en: "The light keeps flickering continuously",
                    leaf: true,
                    escalate: true,
                    detailZh: "让用户将 Yarbo 移动到离 Wi-Fi 更近的地方，并联系 FSE 进行后台排查。",
                    detailEn: "Ask the user to move Yarbo closer to the Wi-Fi router, and contact FSE for backend troubleshooting."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "after-ready",
        zh: "报 ready to work 后",
        en: "After it reports \u201cready to work\u201d",
        children: [
          {
            id: "bluetooth-issue",
            zh: "连接不到蓝牙？",
            en: "Can't connect via Bluetooth?",
            children: [
              {
                id: "toggle-bluetooth",
                zh: "关闭手机蓝牙再重新开启，查看能否扫描到名为 \u201cYarbo Music\u201d 的蓝牙设备",
                en: "Turn the phone's Bluetooth off then on again, and check whether a device named \u201cYarbo Music\u201d is discoverable",
                children: [
                  {
                    id: "bt-not-found",
                    zh: "扫描不到",
                    en: "Not discoverable",
                    leaf: true,
                    escalate: true,
                    detailZh: "截屏留证，联系 FSE。",
                    detailEn: "Take a screenshot as evidence and contact FSE."
                  },
                  {
                    id: "bt-found",
                    zh: "可以扫描到",
                    en: "Discoverable",
                    leaf: true,
                    resolved: true,
                    detailZh: "问题已解决。",
                    detailEn: "Issue resolved."
                  }
                ]
              }
            ]
          },
          {
            id: "wifi-issue",
            zh: "连接不到 Wi-Fi？",
            en: "Can't connect to Wi-Fi?",
            children: [
              {
                id: "unstable-wifi",
                zh: "Wi-Fi 网络不稳定，用手机热点尝试是否可以稳定连接",
                en: "Wi-Fi network is unstable — try a phone hotspot to see if the connection is stable",
                children: [
                  {
                    id: "hotspot-stable",
                    zh: "手机热点可以稳定连接？",
                    en: "Is the phone hotspot connection stable?",
                    children: [
                      {
                        id: "change-wifi",
                        zh: "是",
                        en: "Yes",
                        leaf: true,
                        detailZh: "更换 Wi-Fi 网络。",
                        detailEn: "Switch to a different Wi-Fi network."
                      },
                      {
                        id: "no-wifi-option",
                        zh: "否 — 没有条件更换 Wi-Fi",
                        en: "No — unable to switch Wi-Fi",
                        leaf: true,
                        detailZh: "删除现有 Wi-Fi 连接记录，仅使用 4G。注意：Smart Vision 每月 4G 额度为 20 分钟，超额需联系 FSE 手动刷新。",
                        detailEn: "Delete the saved Wi-Fi connection and use 4G only. Note: Smart Vision's 4G data allowance is 20 minutes per month — once exceeded, contact FSE for a manual refresh."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "navigation",
    zh: "出界 / 行走朝向异常 / GPS 异常",
    en: "Out of Boundary / Heading / GPS Issues",
    children: [
      {
        id: "out-of-boundary",
        zh: "出界",
        en: "Out of boundary",
        children: [
          {
            id: "check-rtk-status",
            zh: "记录发生的具体时间，并当下查看 RTK 的 status 是否为 4",
            en: "Record the exact time it happened, and immediately check whether the RTK status is \u201c4\u201d",
            children: [
              {
                id: "status-is-4",
                zh: "是",
                en: "Yes",
                children: [
                  {
                    id: "recharge-back",
                    zh: "recharge 开回 docking station",
                    en: "Send Yarbo back to the docking station (recharge)",
                    children: [
                      {
                        id: "can-recharge",
                        zh: "能否正常回充？",
                        en: "Does it dock and charge normally?",
                        children: [
                          {
                            id: "recharge-ok-map-consistent",
                            zh: "能，地图位置与实际位置一致",
                            en: "Yes \u2014 the map position matches the real-world position",
                            children: [
                              {
                                id: "wheel-slip-leaf",
                                zh: "可能是轮胎打滑引起的出界。联系 FSE 抓日志分析",
                                en: "Likely wheel slip caused the boundary crossing \u2014 contact FSE to pull logs for analysis",
                                leaf: true,
                                escalate: true
                              }
                            ]
                          },
                          {
                            id: "recharge-fail-map-inconsistent",
                            zh: "不能，地图上 Yarbo 位置与实际不一致",
                            en: "No \u2014 the map position doesn't match the real-world position",
                            children: [
                              {
                                id: "map-drift-leaf",
                                zh: "地图漂移引起的出界，需要手动将机器开到 docking station 上并点击 Correct Map Drift",
                                en: "Map drift caused the boundary crossing \u2014 manually drive the machine onto the docking station and tap Correct Map Drift",
                                leaf: true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "status-not-4-boundary",
                zh: "否",
                en: "No",
                children: [
                  {
                    id: "top-blocked-question",
                    zh: "Yarbo 顶上是否有遮挡？",
                    en: "Is the top of Yarbo obstructed?",
                    children: [
                      {
                        id: "top-blocked",
                        zh: "有",
                        en: "Yes",
                        children: [
                          { id: "vision-zone-leaf", zh: "画 Vision Zone 更改避障模式避免下次发生", en: "Draw a Vision Zone and change the obstacle-avoidance mode to prevent this from happening again", leaf: true }
                        ]
                      },
                      {
                        id: "top-not-blocked",
                        zh: "否",
                        en: "No",
                        children: [
                          { id: "keep-evidence-leaf", zh: "保留证据并联系 FSE", en: "Preserve the evidence and contact FSE", leaf: true, escalate: true }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "heading-gps-issue",
        zh: "行走朝向异常 / GPS 异常",
        en: "Heading / GPS Issues",
        children: [
          {
            id: "rtk-check",
            zh: "App 上线变为 online 状态后，进入 Setting → Diagnose Tools → RTK Part。若 Yarbo 刚开机，需等待 3–5 分钟让数据收集稳定",
            en: "Once the app shows online, go to Setting \u2192 Diagnose Tools \u2192 RTK Part. If Yarbo just powered on, wait 3\u20135 minutes for the data to stabilize",
            children: [
              {
                id: "mode-true",
                zh: "mode 是否为 true？",
                en: "Is mode \u201ctrue\u201d?",
                children: [
                  {
                    id: "mode-true-yes",
                    zh: "是",
                    en: "Yes",
                    children: [
                      {
                        id: "status-4",
                        zh: "status 是否为 4？",
                        en: "Is status \u201c4\u201d?",
                        children: [
                          {
                            id: "status-4-yes",
                            zh: "是",
                            en: "Yes",
                            children: [
                              {
                                id: "l2-not-zero",
                                zh: "L2 ≠ 0",
                                en: "L2 \u2260 0",
                                children: [
                                  {
                                    id: "l2-not-zero-yes",
                                    zh: "是",
                                    en: "Yes",
                                    children: [
                                      {
                                        id: "rtk-no-hw-issue",
                                        zh: "RTK 硬件没问题，通常情况下是因为机器行驶在有遮挡的树荫下。若其他异常情况，需要提供三个内容给 FSE",
                                        en: "The RTK hardware itself is fine \u2014 usually caused by the mower driving under shaded trees. For any other anomaly, provide FSE with the following three items",
                                        children: [
                                          { id: "report-time", zh: "1. 发生的具体时间点？", en: "1. The exact time it happened", leaf: true },
                                          { id: "report-video", zh: "2. 发生地点的周围环境视频", en: "2. A video of the surrounding environment where it occurred", leaf: true },
                                          { id: "report-frequency", zh: "3. 是偶尔复现还是频繁复现？", en: "3. Whether it's occasional or frequent", leaf: true }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id: "l2-zero",
                                zh: "L2 = 0",
                                en: "L2 = 0",
                                children: [
                                  {
                                    id: "right-antenna-issue",
                                    zh: "右天线有问题，拧紧右侧天线或将天线内部的水擦干净。没有改善请将问题描述并截屏给 FSE",
                                    en: "The right antenna has an issue \u2014 tighten the right antenna, or dry out any water inside it. If there's no improvement, describe the issue and send a screenshot to FSE",
                                    leaf: true,
                                    escalate: true
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: "status-4-no",
                            zh: "否",
                            en: "No",
                            children: [
                              {
                                id: "left-antenna-issue",
                                zh: "左天线有问题，拧紧左侧天线或将天线内部的水擦干净。没有改善请将问题描述并截屏给 FSE",
                                en: "The left antenna has an issue \u2014 tighten the left antenna, or dry out any water inside it. If there's no improvement, describe the issue and send a screenshot to FSE",
                                leaf: true,
                                escalate: true
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "mode-true-no",
                    zh: "否",
                    en: "No",
                    children: [
                      {
                        id: "netrtk",
                        zh: "netrtk",
                        en: "netrtk",
                        children: [
                          { id: "restart-observe-rtk", zh: "重启机器再次观察数据", en: "Restart the machine and observe the data again", leaf: true }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "camera",
    zh: "摄像头黑屏",
    en: "Camera Black Screen",
    children: [
      {
        id: "check-state",
        zh: "在 Diagnose Tools 里看 Camera 部分，查看右侧 state 是否为 0",
        en: "In Diagnose Tools \u2192 Camera, check whether the \u201cstate\u201d value on the right is 0",
        children: [
          {
            id: "state-is-zero",
            zh: "若为 0",
            en: "If it's 0",
            children: [
              {
                id: "camera-report-fse",
                zh: "截屏并上传给 FSE，并说明是工作中断连还是非工作中断连，频繁复现还是偶尔复现",
                en: "Take a screenshot and send it to FSE, noting whether the disconnect happened during a work session or not, and whether it's frequent or occasional",
                leaf: true,
                escalate: true
              }
            ]
          },
          {
            id: "state-not-zero",
            zh: "若不为 0",
            en: "If it's not 0",
            children: [
              {
                id: "camera-restart",
                zh: "重启机器，若无改善上升 FSE",
                en: "Restart the machine; if there's no improvement, escalate to FSE",
                leaf: true,
                escalate: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "charging",
    zh: "无线充电失败",
    en: "Wireless Charging Failure",
    children: [
      {
        id: "fail-on-way-back",
        zh: "回充路上失败",
        en: "Fails while returning to dock",
        children: [
          {
            id: "pathway-setting",
            zh: "检查 Pathway 设置是否异常",
            en: "Check whether the Pathway setting is abnormal",
            leaf: true,
            detailZh: "建议关闭 Ultrasonic Sensor。",
            detailEn: "Recommend turning off the Ultrasonic Sensor."
          },
          {
            id: "pathway-rule",
            zh: "检查 Pathway 绘制是否遵循一对一原则",
            en: "Check whether the Pathway follows the one-to-one rule",
            leaf: true,
            detailZh: "原则：一个 area 连接一个 area，一个 area 连接一个 docking station。",
            detailEn: "Rule: one area connects to one area, and one area connects to one docking station."
          }
        ]
      },
      {
        id: "docking-fail",
        zh: "对桩失败",
        en: "Docking failure",
        children: [
          {
            id: "cant-center-can-charge",
            zh: "机器无法居中，但手动控制可以充上电",
            en: "The machine can't center itself, but manual control lets it charge",
            children: [
              { id: "coil-issue", zh: "充电板定位线圈问题", en: "There's an issue with the charging plate's positioning coil", leaf: true }
            ]
          },
          {
            id: "can-center-cant-charge",
            zh: "机器可以居中，但无法充电",
            en: "The machine centers itself, but can't charge",
            children: [
              {
                id: "rtk-accurate-consistent",
                zh: "RTK 精确，且地图位置与现实一致",
                en: "RTK is accurate, and the map position matches reality",
                children: [
                  { id: "contact-fse-remote", zh: "联系 FSE 并描述现象，远程排查", en: "Contact FSE, describe the symptom, and proceed with remote troubleshooting", leaf: true, escalate: true }
                ]
              },
              {
                id: "rtk-accurate-inconsistent",
                zh: "RTK 精确，但地图位置与现实不一致",
                en: "RTK is accurate, but the map position doesn't match reality",
                children: [
                  {
                    id: "manual-correct",
                    zh: "手动将机器对桩，并点击 Correct Map Drift",
                    en: "Manually dock the machine, then tap Correct Map Drift",
                    children: [
                      {
                        id: "correction-improved",
                        zh: "有改善",
                        en: "Improved",
                        leaf: true,
                        resolved: true,
                        detailZh: "问题已解决。",
                        detailEn: "Issue resolved."
                      },
                      {
                        id: "correction-not-improved",
                        zh: "无改善",
                        en: "No improvement",
                        leaf: true,
                        escalate: true,
                        detailZh: "联系 FSE 进行远程排查。",
                        detailEn: "Contact FSE for remote troubleshooting."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "battery-issues",
        zh: "电池无法充满、充电过慢、电池消耗过快",
        en: "Battery won't fully charge, charges too slowly, or drains too fast",
        children: [
          {
            id: "power-off-rest",
            zh: "关机静置 4 小时",
            en: "Power off and let it rest for 4 hours",
            children: [
              {
                id: "rest-result",
                zh: "再次跑计划观察，无改善联系 FSE",
                en: "Run a plan again and observe \u2014 if there's no improvement, contact FSE",
                leaf: true,
                escalate: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "datacenter",
    zh: "Data Center 异常排查",
    en: "Data Center Troubleshooting",
    children: [
      {
        id: "dc-red-light",
        zh: "现象：DC 亮红灯",
        en: "Symptom: DC shows a red light",
        children: [
          {
            id: "swap-rtk",
            zh: "DC 的 RTK 存在问题，可拆下 Core 的 RTK 装到 DC 上，查看是否变绿",
            en: "The DC's RTK has an issue \u2014 try removing the Core's RTK and fitting it to the DC to see if it turns green",
            children: [
              {
                id: "dc-no-improvement",
                zh: "无改善",
                en: "No improvement",
                leaf: true,
                escalate: true,
                detailZh: "描述排查过程，并上报给 FSE。",
                detailEn: "Describe the troubleshooting steps taken, and escalate to FSE."
              }
            ]
          }
        ]
      }
    ]
  }
];

/* ---------- Common / high-frequency error codes ---------- */
/* Each entry: code, zh title/steps, en title/steps, escalate flag */

const ERROR_CODES = [
  {
    code: "B009",
    titleZh: "B009",
    titleEn: "B009",
    highFreq: true,
    stepsZh: [
      "排查前先前往 Version Information 查看固件版本是否为最新。",
      "下一步进行交叉验证 —— 更换一个车头（Core）。若报错消失，说明是车头问题；若报错未消失，说明是 Core 的问题。"
    ],
    stepsEn: [
      "Before troubleshooting, go to Version Information and confirm the firmware is up to date.",
      "Next, cross-verify by swapping the mower head (Core). If the error disappears, it's a mower-head issue; if it persists, it's a Core issue."
    ]
  },
  {
    code: "Left Cutting Motor Blocked",
    titleZh: "Left Cutting Motor Blocked（左切割电机堵转）",
    titleEn: "Left Cutting Motor Blocked",
    highFreq: true,
    stepsZh: [
      "首先确认是否真的堵转。",
      "清除杂物后检查轴承是否变形。",
      "若无变形，清理干净后重启 Yarbo；若报错仍未消失，联系 FSE。"
    ],
    stepsEn: [
      "First confirm whether the motor is actually blocked.",
      "Clear any debris, then check whether the bearing is deformed.",
      "If it's not deformed, clean it thoroughly and restart Yarbo; if the error persists, contact FSE."
    ]
  },
  {
    code: "Collision Occurred",
    titleZh: "Collision Occurred（碰撞检测触发）",
    titleEn: "Collision Occurred",
    highFreq: true,
    stepsZh: [
      "指导用户拆卸碰撞条。若拆掉后报错消失，更换碰撞条部件即可。",
      "若报错未消失，建议更换割草头，并联系 FSE 发起换货流程。"
    ],
    stepsEn: [
      "Guide the user to remove the collision strip. If the error clears once it's removed, simply replace the collision-strip part.",
      "If the error persists, recommend replacing the mower head and contact FSE to start a replacement process."
    ]
  },
  {
    code: "RC004",
    titleZh: "RC004",
    titleEn: "RC004",
    highFreq: true,
    stepsZh: [
      "电机编码器线束松动，建议更换割草头。"
    ],
    stepsEn: [
      "The motor encoder wiring harness is loose \u2014 recommend replacing the mower head."
    ]
  },
  {
    code: "Please wait until the blades reach the required speed.",
    titleZh: "Please wait until the blades reach the required speed.",
    titleEn: "Please wait until the blades reach the required speed.",
    highFreq: true,
    stepsZh: [
      "报错当下打开 Diagnose Tools → Main Part，查看 Emergency Stop 数字是否为 2（截屏保存）。",
      "该报错有两种情况：",
      "1）偶发性：在工作计划中偶尔出现，重启后恢复，断断续续。",
      "2）持续性：一直报错，导致完全无法割草。",
      "上报给 FSE 时，请务必说明属于哪一种情况。"
    ],
    stepsEn: [
      "When the error occurs, open Diagnose Tools \u2192 Main Part and check whether the Emergency Stop value is 2 (save a screenshot).",
      "This error shows up in two patterns:",
      "1) Occasional: appears now and then during a work plan, recovers after a restart, intermittent.",
      "2) Persistent: the error keeps occurring, making mowing completely impossible.",
      "When reporting to FSE, be sure to specify which pattern it is."
    ]
  }
];

/* Preface shown above the code list */
const CODES_PREFACE = {
  zh: [
    "现象：App 已报出 error message，可根据错误代码进行搜索。",
    "没有搜索到的错误代码，代表暂时无法进行前置排查，请直接截屏并上报 FSE。"
  ],
  en: [
    "Symptom: the app has shown an error message \u2014 search by the error code below.",
    "A code that isn't found means it can't be pre-diagnosed remotely. Please take a screenshot and escalate to FSE directly."
  ]
};

/* ---------- Self-repair videos, grouped by module ---------- */
/* link.type: "youtube" | "wiki" | "drive"  |  link.url === null means no real URL was provided */

const VIDEOS = [
  {
    id: "core",
    zh: "核心主机（通用配件）",
    en: "Core Unit (Common Parts)",
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
        links: [{ type: "youtube", url: "https://youtu.be/qYN2PtDeAEU" }, { type: "drive", url: "https://drive.google.com/file/d/1IXUuyZmZopJl2MI8Ucz6IGW-mYtvwTjp/view?usp=share_link", note: { zh: "更新版，建议发这个", en: "Updated version — recommended" } }] },
      { id: "v-m25-wire", titleEn: "Repairing Poor Contact on M25 Wire", titleZh: "M25松动补修",
        links: [{ type: "youtube", url: "https://youtu.be/C372WfbIFBY" }] }
    ]
  },
  {
    id: "mower24",
    zh: "2024 割草头",
    en: "2024 Mower",
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
    items: [
      { id: "v-blower-camera", titleEn: "Replacing Yarbo 2024 Blower's Front Camera", titleZh: "更换吹风前摄",
        links: [{ type: "youtube", url: "https://youtu.be/eUyIt1hbJDQ" }] }
    ]
  },
  {
    id: "trimmer25",
    zh: "2025 割灌头",
    en: "2025 Trimmer",
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
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo 车队管理系统，以 dealer 身份登录访问" }
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
        { label: "fleet.yarbo.ai", url: "https://fleet.yarbo.ai/login", desc: "Yarbo's fleet management system — log in as a dealer" }
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
  }
};

/* ---------- Firmware / software update news ---------- */
/* Most recent release first. rollout.scope: bilingual text describing how many units / which units. */

const UPDATES = [
  {
    id: "r12-hotfix3",
    titleZh: "R12 hotfix3",
    titleEn: "R12 hotfix3",
    tagZh: "全量发版",
    tagEn: "Full rollout",
    firmwareVersion: "3.14.11",
    appVersion: "3.19.5",
    rollout: [
      { labelZh: "第一批", labelEn: "Batch 1", date: "2026-08-31", scopeZh: "3000 台", scopeEn: "3,000 units" },
      { labelZh: "第二批", labelEn: "Batch 2", date: "2026-09-01", scopeZh: "3000 台", scopeEn: "3,000 units" },
      { labelZh: "第三批", labelEn: "Batch 3", date: "2026-09-02", scopeZh: "全部", scopeEn: "All remaining units" }
    ],
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
    ]
  }
];
