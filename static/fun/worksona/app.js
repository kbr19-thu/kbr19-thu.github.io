const dimensions = [
  { key: "drive", label: { zh: "上头值", en: "Drive" } },
  { key: "social", label: { zh: "社交值", en: "Social" } },
  { key: "risk", label: { zh: "冲锋值", en: "Risk" } },
  { key: "emotion", label: { zh: "外放值", en: "Emotion" } },
  { key: "control", label: { zh: "控场值", en: "Control" } },
];

const ui = {
  zh: {
    htmlTitle: "NMTI 牛马人格测试 | 你是卷王、演王、背锅侠还是精神股东？",
    metaDescription: "24道题，测出你的牛马人格。纯娱乐，适合截图发群。",
    ogTitle: "NMTI 牛马人格测试",
    ogDescription: "你是卷王、演王、背锅侠还是精神股东？24道题，3分钟出结果。",
    heroEyebrow: "NMTI / NIUMA TYPE INDICATOR",
    heroTitle: "NMTI 牛马人格测试",
    heroCopy:
      "MBTI 先放一边，NMTI 来了。先看看你在办公室到底是卷王、演王、背锅侠，还是精神股东。",
    plazaEyebrow: "NMTI PLAZA / OFFICE CREATURE SQUARE",
    plazaTitle: "下拉，看看今天的牛马广场",
    plazaCopy:
      "这里是假装实时运转的办公室平行宇宙。有人在控场，有人在甩锅，有人在摸鱼，有人正在精神参股。",
    plazaDropKicker: "你的结果会空降到这里",
    plazaDropTitleIdle: "你的牛马分身待命中",
    plazaDropNoteIdle: "测完以后，它会被丢进这堆小人里一起上班。",
    plazaDropTitleReady: (title) => `${title} 已混入广场`,
    plazaDropNoteReady: "现在你的分身已经和别的牛马一起开始假装忙碌了。",
    resultPlazaTitle: "你的牛马刚刚被丢进广场",
    resultPlazaCopy: "这一刻开始，你的分身已经加入办公室平行宇宙，和别的牛马一起演、卷、背锅、潜水。",
    resultPlazaDropKicker: "你的结果正在空降",
    resultPlazaDropTitleIdle: "你的牛马分身正在落位",
    resultPlazaDropNoteIdle: "它现在会直接出现在这页，不用先回首页。",
    resultPlazaDropTitleReady: (title) => `${title} 已落地结果广场`,
    resultPlazaDropNoteReady: "你现在看到的，就是它被扔进牛马堆里的现场。",
    metrics: {
      questionsLabel: "题量",
      questionsValue: "12 题 / 24 题",
      timeLabel: "耗时",
      timeValue: "约 90 秒 / 3 分钟",
      toneLabel: "风格",
      toneValue: "嘴毒但友好",
    },
    shortMode: "12 题极速版",
    fullMode: "24 题完整版",
    start: "开始测试",
    preview: "我想先看结果风格",
    disclaimer: "仅供娱乐，不适用于招聘、绩效、相亲、分手、升职、裁员和人生审判。",
    plazaPeek: "下滑进入牛马广场",
    backHome: "返回首页",
    progress: (current, total) => `第 ${current} / ${total} 题`,
    questionPercent: (percent) => `${percent}%`,
    prev: "上一题",
    next: "下一题",
    submit: "提交结果",
    resultKicker: "你的 NMTI 类型",
    descriptionHeading: "一句话解读",
    coworkerHeading: "同事视角",
    radarHeading: "你的工位雷达",
    matchRate: (value) => `匹配度 ${value}%`,
    noteHeading: "友情提示",
    noteText: "结果只是你当下的社畜切面，不是永久人格。睡饱一点、发完奖金、换个老板，结果都可能重算。",
    qrHeading: "正式链接",
    qrText: "扫码或打开 https://fun.tujipath.com/",
    qrFloatText: "扫码直达",
    qrChipText: "官网",
    retryTop: "重新测试",
    backTop: "回首页",
    retry: "再测一次",
    share: "复制分享文案",
    copied: "已复制，快去发群",
    plazaModalKicker: "牛马广场围观",
    defaultSlogan: "你的人设已生成，请谨慎发群。",
    defaultBadge: "工位热搜角色",
    defaultStamp: "办公室民间鉴定版",
    previewAvatarAlt: "NMTI 类型角色插画",
    chooseFirst: "先选一个，再决定命运。",
    finishAll: "还有题没做完，先别急着看结果。",
    shareText: ({ title, code, match, summary, url }) =>
      `我测出来的 NMTI 牛马人格是「${title} ${code}」, 匹配度 ${match}%。\n${summary}\n你也来试试：${url}`,
  },
  en: {
    htmlTitle: "NMTI | Which office creature are you?",
    metaDescription: "24 questions to reveal your office survival type. Petty, playful, and painfully familiar.",
    ogTitle: "WTFI / Workplace Temperament & Friction Indicator",
    ogDescription: "Are you the Deadline Berserker, the Blame Tank, or the Emotional Shareholder? 24 questions, 3 minutes.",
    heroEyebrow: "WTFI / WORKPLACE TEMPERAMENT & FRICTION INDICATOR",
    heroTitle: "WTFI Office Type Test",
    heroCopy:
      "What the fuck! MBTI can sit this one out. WTFI is here. Find out whether you are the office warlord, the blame tank, the cubicle ghost, or the emotional shareholder.",
    plazaEyebrow: "WTFI PLAZA / OFFICE CREATURE SQUARE",
    plazaTitle: "Scroll Down Into The Office Creature Plaza",
    plazaCopy:
      "This is a fake live-feed from a parallel office dimension. Some creatures are controlling the room, some are tanking blame, some are quietly slacking, and some are spiritually overinvested.",
    plazaDropKicker: "Your result will be dropped here",
    plazaDropTitleIdle: "Your office creature is standing by",
    plazaDropNoteIdle: "Finish the test and we will throw your worksona straight into the crowd.",
    plazaDropTitleReady: (title) => `${title} has entered the plaza`,
    plazaDropNoteReady: "Your worksona is now pretending to be productive with the rest of them.",
    resultPlazaTitle: "Your office creature just got dumped into the plaza",
    resultPlazaCopy: "Your worksona has now joined the parallel office dimension, where everyone is performing, grinding, tanking blame, or lurking professionally.",
    resultPlazaDropKicker: "Your result is dropping in now",
    resultPlazaDropTitleIdle: "Your office creature is landing",
    resultPlazaDropNoteIdle: "It now appears right here on the result page. No trip back home needed.",
    resultPlazaDropTitleReady: (title) => `${title} has landed in the result plaza`,
    resultPlazaDropNoteReady: "This is the exact moment your creature gets thrown into the crowd.",
    metrics: {
      questionsLabel: "Length",
      questionsValue: "12 or 24 prompts",
      timeLabel: "Time",
      timeValue: "About 90 sec / 3 min",
      toneLabel: "Tone",
      toneValue: "Mean, but affectionate",
    },
    shortMode: "12-Question Sprint",
    fullMode: "24-Question Full Test",
    start: "Start Test",
    preview: "Show Me Sample Result",
    disclaimer: "For fun only. Not valid for hiring, performance reviews, breakups, promotions, layoffs, or destiny.",
    plazaPeek: "Scroll Down To Enter The Plaza",
    backHome: "Back Home",
    progress: (current, total) => `Question ${current} / ${total}`,
    questionPercent: (percent) => `${percent}%`,
    prev: "Previous",
    next: "Next",
    submit: "See Result",
    resultKicker: "Your WTFI Type",
    descriptionHeading: "One-Line Read",
    coworkerHeading: "Coworker POV",
    radarHeading: "Your Office Radar",
    matchRate: (value) => `${value}% match`,
    noteHeading: "Tiny Disclaimer",
    noteText:
      "This is your current worksona, not your eternal soul. Sleep better, get a bonus, switch bosses, and the result might mutate.",
    qrHeading: "Official Link",
    qrText: "Scan the code or open https://fun.tujipath.com/",
    qrFloatText: "SCAN ME",
    qrChipText: "SITE",
    retryTop: "Retake",
    backTop: "Home",
    retry: "Try Again",
    share: "Copy Share Text",
    copied: "Copied. Go cause chaos.",
    plazaModalKicker: "Plaza Peek",
    defaultSlogan: "Character sheet generated. Use responsibly in group chats.",
    defaultBadge: "Certified Office Creature",
    defaultStamp: "Folk Classification Bureau",
    previewAvatarAlt: "WTFI character illustration",
    chooseFirst: "Pick an option before we judge you.",
    finishAll: "You still have unanswered prompts. Finish the damage first.",
    shareText: ({ title, code, match, summary, url }) =>
      `My WTFI office type is "${title} ${code}" with a ${match}% match.\n${summary}\nTry it here: ${url}`,
  },
};

const plazaPositions = [
  { left: "5%", top: "11%", lane: "back", delay: "-0.6s", rotate: "-5deg" },
  { left: "22%", top: "6%", lane: "back", delay: "-1.8s", rotate: "4deg" },
  { left: "74%", top: "9%", lane: "back", delay: "-1.2s", rotate: "6deg" },
  { left: "84%", top: "28%", lane: "back", delay: "-2.1s", rotate: "-4deg" },
  { left: "7%", top: "37%", lane: "front", delay: "-0.9s", rotate: "5deg" },
  { left: "21%", top: "50%", lane: "front", delay: "-2.3s", rotate: "-7deg" },
  { left: "76%", top: "48%", lane: "front", delay: "-1.4s", rotate: "4deg" },
  { left: "64%", top: "67%", lane: "front", delay: "-3.1s", rotate: "-6deg" },
  { left: "10%", top: "74%", lane: "back", delay: "-1.6s", rotate: "6deg" },
  { left: "33%", top: "79%", lane: "back", delay: "-2.8s", rotate: "-3deg" },
  { left: "83%", top: "78%", lane: "back", delay: "-0.4s", rotate: "3deg" },
  { left: "52%", top: "18%", lane: "front", delay: "-1.1s", rotate: "-4deg" },
];

const plazaBubblePool = {
  zh: [
    "先对个口径",
    "这个锅谁的",
    "我先潜一下",
    "今晚还能改",
    "先开个表",
    "群里回个1",
    "这会能散吗",
    "让我再想想",
    "我精神参股",
    "先别发版本",
    "这个我来顶",
    "已读但存活",
  ],
  en: [
    "sync first",
    "who owns this",
    "I am lurking",
    "we can still patch it",
    "make a sheet",
    "reply with 1",
    "can this meeting die",
    "give me a minute",
    "spiritually invested",
    "do not ship yet",
    "I can tank this",
    "seen and surviving",
  ],
};

const questions = [
  {
    tag: { zh: "周一早会", en: "Monday Meeting" },
    text: {
      zh: "领导突然问，这周谁来主动顶一个最难的活？",
      en: "Your boss suddenly asks who wants to take the ugliest task of the week. What do you do?",
    },
    options: [
      {
        title: { zh: "我来试试", en: "I can take it" },
        note: { zh: "先接住，边做边想办法。", en: "Catch it first. Figure it out while moving." },
        scores: { drive: 2, risk: 2, control: 1 },
      },
      {
        title: { zh: "先看边界", en: "Clarify the blast radius first" },
        note: { zh: "活不是不能接，但先把坑位问清楚。", en: "I might take it, but not before mapping the trap." },
        scores: { risk: -1, control: 2, emotion: -1 },
      },
      {
        title: { zh: "低头装忙", en: "I suddenly become extremely busy" },
        note: { zh: "眼神不能对上，活就未必会落到我头上。", en: "If I never make eye contact, the task may simply choose another host." },
        scores: { drive: -2, social: -1, risk: -2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "群里通知", en: "Silent Group Chat" },
    text: {
      zh: "项目群里一堆人已读不回，你通常会怎么处理？",
      en: "The project chat is full of ghosts. How do you respond?",
    },
    options: [
      {
        title: { zh: "出来组织一下", en: "I herd the cats" },
        note: { zh: "把人、时间、动作先排清楚。", en: "I line up people, deadlines, and next steps." },
        scores: { social: 2, control: 2 },
      },
      {
        title: { zh: "默默把自己那部分先做完", en: "I just finish my part" },
        note: { zh: "少说多做，别把自己卷进群聊泥潭。", en: "Less chatter, less swamp." },
        scores: { drive: 1, social: -2, emotion: -1 },
      },
      {
        title: { zh: "先划水观望", en: "I let the chat marinate" },
        note: { zh: "说不定再等十分钟，就有人自己跳出来了。", en: "Give it ten minutes and someone else may volunteer their peace." },
        scores: { drive: -2, social: -1, control: -1 },
      },
    ],
  },
  {
    tag: { zh: "需求突变", en: "Scope Explosion" },
    text: {
      zh: "甲方说方案今晚就要改版，你第一反应是？",
      en: "The client wants a full revision by tonight. Your first reaction?",
    },
    options: [
      {
        title: { zh: "冲吧，先救火", en: "Fine, let's put out the fire" },
        note: { zh: "先把今晚过了，明天再复盘。", en: "Survive tonight. Regret later." },
        scores: { drive: 2, risk: 1, emotion: 1 },
      },
      {
        title: { zh: "先追问变化原因", en: "Ask why this is happening" },
        note: { zh: "不想在错误方向上通宵。", en: "I refuse to stay up late for the wrong problem." },
        scores: { control: 2, risk: -1 },
      },
      {
        title: { zh: "先假装没看到", en: "I pretend I missed that message" },
        note: { zh: "今晚先保命，明天再说世界和平。", en: "Tonight I protect my nervous system. Tomorrow can negotiate with reality." },
        scores: { drive: -2, risk: -2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "午饭时间", en: "Lunch Table" },
    text: {
      zh: "同事开始吐槽老板，你在饭桌上一般是什么角色？",
      en: "Coworkers start roasting the boss at lunch. What's your role?",
    },
    options: [
      {
        title: { zh: "主讲人", en: "Lead commentator" },
        note: { zh: "素材丰富，情绪到位，大家都在等你开麦。", en: "The room knows I came prepared." },
        scores: { social: 2, emotion: 2 },
      },
      {
        title: { zh: "冷静旁听", en: "Disciplined spectator" },
        note: { zh: "点到为止，少给聊天记录留把柄。", en: "No need to become discoverable evidence." },
        scores: { social: -1, emotion: -2, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "临时汇报", en: "Surprise Presentation" },
    text: {
      zh: "下午 5 点被拉去临时汇报，你更像哪种人？",
      en: "You are dragged into a surprise presentation at 5 PM. Which are you?",
    },
    options: [
      {
        title: { zh: "现场组织语言型", en: "I freestyle it" },
        note: { zh: "临时上台也能讲得有模有样。", en: "Panic becomes eloquence somehow." },
        scores: { social: 1, emotion: 1, control: 2 },
      },
      {
        title: { zh: "提前写提纲型", en: "I need a quick outline" },
        note: { zh: "不给我 10 分钟整理，我会觉得不尊重。", en: "Ten minutes of prep is basic human dignity." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "工作流", en: "Workflow" },
    text: {
      zh: "碰到新活，你通常先做哪一步？",
      en: "A new assignment lands on your desk. What's step one?",
    },
    options: [
      {
        title: { zh: "先开干", en: "Start moving" },
        note: { zh: "做着做着就清楚了。", en: "Clarity can catch up later." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "先拆任务", en: "Break it down first" },
        note: { zh: "步骤一清晰，后面就没那么乱。", en: "If step one is clean, the rest behaves." },
        scores: { control: 2, risk: -1 },
      },
      {
        title: { zh: "先拖到有灵感", en: "Delay until inspiration or panic arrives" },
        note: { zh: "说不定再过一会儿，这活自己就变简单了。", en: "Sometimes time is not procrastination. It is speculative simplification." },
        scores: { drive: -2, control: -1, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "工位气场", en: "Desk Aura" },
    text: {
      zh: "你在办公室最常出现的状态是？",
      en: "What is your default office aura?",
    },
    options: [
      {
        title: { zh: "耳机一戴，生人勿近", en: "Headphones on. Approach at your own risk." },
        note: { zh: "不要打断我，我在和命运对线。", en: "I am currently arguing with fate." },
        scores: { social: -2, drive: 1 },
      },
      {
        title: { zh: "走来走去，顺手串场", en: "I drift between desks" },
        note: { zh: "我不一定在摸鱼，但我一定在流动。", en: "I may not be slacking, but I am definitely roaming." },
        scores: { social: 2, emotion: 1 },
      },
    ],
  },
  {
    tag: { zh: "背锅现场", en: "Incoming Blame" },
    text: {
      zh: "一个锅空降到你面前，你通常怎么接？",
      en: "A random blame grenade lands in front of you. What now?",
    },
    options: [
      {
        title: { zh: "接了再说", en: "Catch first, argue later" },
        note: { zh: "先保住局面，别让事情炸开。", en: "Stabilize the blast zone before debating ownership." },
        scores: { drive: 1, emotion: 1, risk: 1 },
      },
      {
        title: { zh: "先划清边界", en: "Draw the border first" },
        note: { zh: "锅不是不能背，但责任要记账。", en: "I can carry a mess, but I am not donating accountability." },
        scores: { control: 2, risk: -1 },
      },
      {
        title: { zh: "看谁先认领", en: "I wait for fate to choose a victim" },
        note: { zh: "如果现场还有别人活着，那锅未必一定是我的。", en: "If other people are still standing, the blame is not legally mine yet." },
        scores: { drive: -2, social: -1, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "群体任务", en: "Group Project" },
    text: {
      zh: "多人协作时，你最舒服的位置是？",
      en: "In a group task, where do you naturally sit?",
    },
    options: [
      {
        title: { zh: "拉齐节奏的人", en: "The alignment engine" },
        note: { zh: "谁慢了谁歪了，我会马上发现。", en: "I instantly notice who slipped or drifted." },
        scores: { social: 1, control: 2 },
      },
      {
        title: { zh: "关键一环的人", en: "The crucial hidden gear" },
        note: { zh: "给我明确交付，我能默默补上。", en: "Give me a clear deliverable and I will quietly carry it." },
        scores: { drive: 2, social: -1 },
      },
    ],
  },
  {
    tag: { zh: "踩点心理", en: "Deadline Brain" },
    text: {
      zh: "DDL 快到了，你的状态更接近？",
      en: "The deadline is close. Which state sounds familiar?",
    },
    options: [
      {
        title: { zh: "越近越来劲", en: "The pressure wakes me up" },
        note: { zh: "没有压迫感就没有灵感。", en: "Apparently fear is my creative director." },
        scores: { drive: 2, risk: 2 },
      },
      {
        title: { zh: "心率先上来", en: "My pulse files a complaint" },
        note: { zh: "我会开始找最稳的收尾路径。", en: "I immediately search for the safest ending." },
        scores: { control: 1, risk: -2, emotion: -1 },
      },
      {
        title: { zh: "先摆，等最后一刻", en: "I go limp until the final legal second" },
        note: { zh: "先焦虑没有用，不如让命运先酝酿一下。", en: "Panic this early is just inefficient. Let destiny simmer." },
        scores: { drive: -2, control: -2, risk: 1, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "老板一句话", en: "Boss Vibe Check" },
    text: {
      zh: "老板说“这个你看着办吧”，你会？",
      en: 'Your boss says, "Just handle it." How do you hear that?',
    },
    options: [
      {
        title: { zh: "当作授权", en: "As permission" },
        note: { zh: "自由度到手，先把结果做出来。", en: "Great. Freedom. I move." },
        scores: { drive: 1, risk: 1, control: 1 },
      },
      {
        title: { zh: "当作风险信号", en: "As a red flag" },
        note: { zh: "不写清楚，我晚上都睡不踏实。", en: "If the scope is fuzzy, my sleep is gone." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "开会表现", en: "Meeting Stall" },
    text: {
      zh: "开到第 40 分钟还没结论时，你最可能？",
      en: "The meeting is 40 minutes in and still spinning. What do you do?",
    },
    options: [
      {
        title: { zh: "主动收口", en: "I land the plane" },
        note: { zh: "我来总结，咱们别无限循环。", en: "Let me summarize before we die here." },
        scores: { control: 2, social: 1 },
      },
      {
        title: { zh: "继续观察", en: "I keep reading the room" },
        note: { zh: "先看谁最急，谁先露底牌。", en: "Someone will crack first. I am patient." },
        scores: { social: -1, control: 1, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "情绪管理", en: "Emotional Damage" },
    text: {
      zh: "被临时甩锅或者误解时，你更容易？",
      en: "When you are unfairly blamed or misunderstood, what is more likely?",
    },
    options: [
      {
        title: { zh: "当场有点炸", en: "My face exposes me" },
        note: { zh: "我先不一定骂人，但脸色会说明一切。", en: "I may stay polite, but my expression files a full report." },
        scores: { emotion: 2 },
      },
      {
        title: { zh: "表面平静记小账", en: "I archive the offense" },
        note: { zh: "没事，我都记着。", en: "No drama. Just records." },
        scores: { emotion: -1, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "同事关系", en: "New Coworker" },
    text: {
      zh: "新同事来了，你通常会？",
      en: "A new coworker joins. What do you usually do?",
    },
    options: [
      {
        title: { zh: "主动搭话带一带", en: "I welcome them in" },
        note: { zh: "人先熟了，后面事情都好办。", en: "If people warm up first, work gets easier." },
        scores: { social: 2, emotion: 1 },
      },
      {
        title: { zh: "等对方来找我", en: "I wait for them to approach" },
        note: { zh: "我不是冷漠，我只是不乱社交。", en: "Not cold. Just socially efficient." },
        scores: { social: -2 },
      },
    ],
  },
  {
    tag: { zh: "汇报风格", en: "Reporting Style" },
    text: {
      zh: "做工作汇报时，你更想突出什么？",
      en: "When you present work, what do you emphasize most?",
    },
    options: [
      {
        title: { zh: "结果和气势", en: "Result and impact" },
        note: { zh: "先让对面知道这事成了。", en: "First, make it obvious that the thing landed." },
        scores: { emotion: 1, control: 1, drive: 1 },
      },
      {
        title: { zh: "过程和证据", en: "Process and evidence" },
        note: { zh: "最好别人挑不出逻辑毛病。", en: "I want the logic to survive cross-examination." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "协作风格", en: "Helping Others" },
    text: {
      zh: "同伴卡壳时，你一般会？",
      en: "A teammate is stuck. What is your instinct?",
    },
    options: [
      {
        title: { zh: "过去一起救", en: "Jump in and rescue" },
        note: { zh: "先把人从坑里拉出来再说。", en: "First get them out of the crater." },
        scores: { social: 2, drive: 1 },
      },
      {
        title: { zh: "给框架和建议", en: "Offer a clean framework" },
        note: { zh: "我帮你理思路，但不替你全做。", en: "I will untangle the knot, not live your life for you." },
        scores: { control: 2, social: -1 },
      },
    ],
  },
  {
    tag: { zh: "办公室传说", en: "Office Reputation" },
    text: {
      zh: "别人怎么评价你的工作风格更贴切？",
      en: "Which reputation fits your work style better?",
    },
    options: [
      {
        title: { zh: "这人能扛事", en: "This person can handle heat" },
        note: { zh: "不一定最安静，但关键时刻真会上。", en: "Maybe not the quietest, but absolutely useful under pressure." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "这人很有数", en: "This person knows what's up" },
        note: { zh: "不轻易表态，但表态通常靠谱。", en: "Rarely loud, usually right." },
        scores: { control: 2, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "群聊节奏", en: "Chat Momentum" },
    text: {
      zh: "项目群突然安静了，你通常会？",
      en: "The project chat suddenly goes silent. What do you do?",
    },
    options: [
      {
        title: { zh: "发一句推进", en: "Post a nudge" },
        note: { zh: "别躺了，谁来认领一下。", en: "One of you, please stand up." },
        scores: { social: 1, control: 2, emotion: 1 },
      },
      {
        title: { zh: "单独私聊关键人", en: "DM the key person" },
        note: { zh: "公开催容易散，私下点名更有效。", en: "Public pressure scatters people. Direct pressure lands." },
        scores: { control: 2, social: -1 },
      },
      {
        title: { zh: "继续潜水", en: "I continue my underwater career" },
        note: { zh: "群安静成这样，说明现在最安全的动作就是别说话。", en: "If the chat is this quiet, survival may mean saying absolutely nothing." },
        scores: { drive: -2, social: -2, control: -1 },
      },
    ],
  },
  {
    tag: { zh: "创新偏好", en: "Risk Appetite" },
    text: {
      zh: "一个方案有点冒险但可能很出彩，你通常？",
      en: "A plan is risky but could be brilliant. Your instinct?",
    },
    options: [
      {
        title: { zh: "想试", en: "Try it" },
        note: { zh: "平平无奇比失败更难受。", en: "Boring hurts me more than failure." },
        scores: { risk: 2, drive: 1 },
      },
      {
        title: { zh: "想保底", en: "Secure the floor first" },
        note: { zh: "先有底线方案，再谈花活。", en: "Baseline first, glory later." },
        scores: { risk: -2, control: 1 },
      },
    ],
  },
  {
    tag: { zh: "下班时刻", en: "Late Ambush" },
    text: {
      zh: "快下班时又冒出一件急活，你会？",
      en: "A last-minute urgent task appears right before you log off. You?",
    },
    options: [
      {
        title: { zh: "继续干完", en: "Stay and finish it" },
        note: { zh: "既然上线了，那就把状态烧到底。", en: "If I am already activated, I may as well burn bright." },
        scores: { drive: 2, emotion: 1 },
      },
      {
        title: { zh: "快速评估，明早处理", en: "Triage and punt to tomorrow" },
        note: { zh: "不是所有急都是真的急。", en: "Not every emergency deserves my evening." },
        scores: { control: 2, risk: -1 },
      },
      {
        title: { zh: "已读，下班", en: "Seen. Logging off." },
        note: { zh: "天塌下来也得先让我离开工位。", en: "Even if the sky falls, it can fall after I leave my chair." },
        scores: { drive: -2, risk: -2, emotion: 1 },
      },
    ],
  },
  {
    tag: { zh: "社交能量", en: "Team Event" },
    text: {
      zh: "团建时你更像哪一类？",
      en: "At a team event, which role feels more like you?",
    },
    options: [
      {
        title: { zh: "带节奏的人", en: "The energy source" },
        note: { zh: "没有我，这桌会安静很多。", en: "Without me, this table loses its soundtrack." },
        scores: { social: 2, emotion: 2 },
      },
      {
        title: { zh: "稳定出现的人", en: "The reliable attendee" },
        note: { zh: "我会到场，但不必让我跳上桌。", en: "I will attend. I will not become content." },
        scores: { social: -1, emotion: -1 },
      },
    ],
  },
  {
    tag: { zh: "任务认知", en: "Role Boundaries" },
    text: {
      zh: "你怎么看“这活不是我职责，但没人做”？",
      en: 'How do you react to "This is not my job, but nobody else is doing it"?',
    },
    options: [
      {
        title: { zh: "我可能会接", en: "I might pick it up" },
        note: { zh: "事情总得有人推进。", en: "Somebody has to keep the machine moving." },
        scores: { drive: 2, social: 1, risk: 1 },
      },
      {
        title: { zh: "先看值不值得", en: "Depends if it is worth it" },
        note: { zh: "善良可以，白给不行。", en: "Kindness is fine. Free labor is not." },
        scores: { control: 2, risk: -1 },
      },
      {
        title: { zh: "原则上不碰", en: "In principle, absolutely not" },
        note: { zh: "没人做不代表我要代偿整个组织。", en: "Organizational neglect is not a summons for my unpaid heroism." },
        scores: { drive: -2, control: 1, social: -1, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "危机时刻", en: "Crisis Mode" },
    text: {
      zh: "出问题时，你最想先抓住什么？",
      en: "When things go wrong, what do you want first?",
    },
    options: [
      {
        title: { zh: "动作", en: "Action" },
        note: { zh: "先让现场别继续变糟。", en: "Stop the bleeding before analysis." },
        scores: { drive: 2, risk: 1 },
      },
      {
        title: { zh: "原因", en: "Cause" },
        note: { zh: "我得先知道坑是怎么来的。", en: "I need to know where the hole came from." },
        scores: { control: 2, risk: -1 },
      },
    ],
  },
  {
    tag: { zh: "个人名片", en: "Personal Brand" },
    text: {
      zh: "如果同事只能用一句话记住你，你更希望是？",
      en: "If coworkers could remember you with one sentence, which would you choose?",
    },
    options: [
      {
        title: { zh: "关键时刻很顶", en: "Clutch under pressure" },
        note: { zh: "平时随便，真打仗的时候我会站出来。", en: "Casual by default. Dangerous when it counts." },
        scores: { drive: 2, emotion: 1 },
      },
      {
        title: { zh: "这个人很稳", en: "Steady and reliable" },
        note: { zh: "把事情交给我，至少不会离谱。", en: "Give it to me. It will not become a circus." },
        scores: { control: 2, risk: -1, emotion: -1 },
      },
    ],
  },
];

const questionSets = {
  short: [0, 1, 2, 4, 6, 7, 9, 12, 15, 18, 19, 23],
  full: questions.map((_, index) => index),
};

const archetypes = [
  {
    code: "BOSS",
    avatar: "./avatars/boss.svg",
    accent: "#1F7A6B",
    title: { zh: "控场总监", en: "Meeting Warlord" },
    badge: { zh: "会议室天降紫微星", en: "Boardroom apex predator" },
    slogan: { zh: "只要你在场，空气里都会自动长出 agenda。", en: "The moment you arrive, the room quietly grows an agenda." },
    stamp: { zh: "控场系高发类型", en: "High-control specimen" },
    summary: { zh: "你走到哪都像在开项目例会，混乱在你面前会自动排队。", en: "Every room starts behaving like a project sync when you enter. Chaos lines up for inspection." },
    description: { zh: "你不是单纯爱指挥，而是天然受不了低效。任务一乱、节奏一散、责任一糊，你就会想站出来把场子接住。", en: "You do not just like directing people. You physically reject inefficiency. Once the task blurs, the timing slips, or ownership gets muddy, you step in and seize the room." },
    coworkerView: { zh: "同事嘴上说你像 PM，心里知道有你在时，事情确实不容易散架。", en: "Coworkers joke that you are basically a PM in disguise, but they also know things fall apart less when you are around." },
    tags: { zh: ["控场上瘾", "收口达人", "会议终结者"], en: ["Control addict", "Closer", "Meeting finisher"] },
    profile: { drive: 70, social: 68, risk: 52, emotion: 40, control: 95 },
  },
  {
    code: "TANK",
    avatar: "./avatars/tank.svg",
    accent: "#596A80",
    title: { zh: "背锅坦克", en: "Blame Tank" },
    badge: { zh: "高压场景指定接盘侠", en: "Emergency-grade damage sponge" },
    slogan: { zh: "锅先别飞，你已经下意识伸手去接了。", en: "Before the blame even lands, you are already halfway to catching it." },
    stamp: { zh: "抗压系高发类型", en: "High-pressure specimen" },
    summary: { zh: "锅先接，场先稳，情绪晚点再说。你是团队的抗压外壳。", en: "You catch the blame, stabilize the scene, and postpone your emotions for later. You are the team's pressure armor." },
    description: { zh: "你不一定最爱表现，但在真出问题的时候，你很难袖手旁观。你身上有一种“先别慌，我来顶一下”的气质。", en: "You may not chase attention, but when things genuinely start burning, you cannot stand aside. You carry a strong 'move, I will hold this' energy." },
    coworkerView: { zh: "大家会不自觉把难题往你这边靠，因为你真的很像能扛住。", en: "People unconsciously push hard problems in your direction because you genuinely look built for impact." },
    tags: { zh: ["关键时刻顶", "先救火再复盘", "抗压壳子"], en: ["Clutch under fire", "Firefighter first", "Pressure shell"] },
    profile: { drive: 88, social: 50, risk: 70, emotion: 54, control: 62 },
  },
  {
    code: "SHOW",
    avatar: "./avatars/show.svg",
    accent: "#FF6F61",
    title: { zh: "气氛演王", en: "Office Main Character" },
    badge: { zh: "办公室综艺感担当", en: "Certified workplace showrunner" },
    slogan: { zh: "你不是在上班，你是在给工位配 BGM 和旁白。", en: "You are not just working. You are scoring the office with music and commentary." },
    stamp: { zh: "社交系高发类型", en: "High-social specimen" },
    summary: { zh: "你不仅在上班，也在给整个办公室提供情绪和戏剧张力。", en: "You do not simply work. You supply the office with tone, tension, and entertainment." },
    description: { zh: "你擅长把沉闷局面盘活，也擅长把一个普通吐槽讲成连续剧。你是团队里的扩音器，也是团建里的天然发动机。", en: "You can revive a dead room and turn a simple complaint into a whole season of television. You are both the amplifier and the engine of workplace social life." },
    coworkerView: { zh: "有你在，办公室不无聊；没有你，群聊会像失去 BGM。", en: "With you around, the office is alive. Without you, the group chat loses its soundtrack." },
    tags: { zh: ["情绪输出", "团建主舞台", "吐槽段子手"], en: ["Emotion broadcast", "Team-event magnet", "Complaint comedian"] },
    profile: { drive: 58, social: 92, risk: 58, emotion: 95, control: 46 },
  },
  {
    code: "GHOST",
    avatar: "./avatars/ghost.svg",
    accent: "#536471",
    title: { zh: "工位隐身人", en: "Cubicle Ghost" },
    badge: { zh: "低存在感高交付体质", en: "Low-visibility high-output form" },
    slogan: { zh: "平时像离线，交付时像突然从云里刷新出来。", en: "Most days you feel offline. Then deliverables materialize like a system update." },
    stamp: { zh: "静默系高发类型", en: "Quiet-mode specimen" },
    summary: { zh: "你看着安静，实际上在后台默默把很多关键零件补齐了。", en: "You seem quiet, but you are silently patching the machinery behind the scenes." },
    description: { zh: "你不抢存在感，也不爱空转社交，但你通常知道自己在干什么。别人注意不到你的时候，反而是你效率最高的时候。", en: "You do not chase visibility or pointless interaction, but you usually know exactly what you are doing. Your best work happens when nobody is paying attention." },
    coworkerView: { zh: "平时像消失，交付时像突然从云里掏出一个完整答案。", en: "You seem absent until a finished answer appears out of nowhere." },
    tags: { zh: ["静音高效", "拒绝空聊", "存在感后置"], en: ["Silent efficiency", "No filler talk", "Delayed presence"] },
    profile: { drive: 68, social: 18, risk: 36, emotion: 20, control: 78 },
  },
  {
    code: "BRAIN",
    avatar: "./avatars/brain.svg",
    accent: "#5B6EE1",
    title: { zh: "冷面军师", en: "Cold Strategist" },
    badge: { zh: "逻辑脑内置完整版", en: "Fully licensed internal logic engine" },
    slogan: { zh: "别人还在吵，你已经在脑内画完流程图了。", en: "While others argue, you are already finishing the flowchart in your head." },
    stamp: { zh: "军师系高发类型", en: "Strategist specimen" },
    summary: { zh: "你不是最吵的那个，但通常是最先看懂局势的那个。", en: "You are rarely the loudest person in the room, but often the first to understand the board." },
    description: { zh: "你对边界、逻辑和因果关系很敏感。别人还在吵时，你已经在想真正的问题在哪里，以及最稳的修法是什么。", en: "You are highly sensitive to scope, logic, and causality. While others are still reacting, you are already identifying the real problem and the cleanest fix." },
    coworkerView: { zh: "你说话不多，但一开口往往就是“这事真正卡的点在这儿”。", en: "You do not speak often, but when you do, it tends to sound like, 'Here is the actual bottleneck.'" },
    tags: { zh: ["逻辑自洽", "稳健保底", "风险扫描仪"], en: ["Logically sealed", "Safe by design", "Risk scanner"] },
    profile: { drive: 52, social: 34, risk: 16, emotion: 18, control: 92 },
  },
  {
    code: "SPARK",
    avatar: "./avatars/spark.svg",
    accent: "#73B44A",
    title: { zh: "整活发动机", en: "Chaos Catalyst" },
    badge: { zh: "灵感和热闹双供给源", en: "Dual supplier of novelty and noise" },
    slogan: { zh: "你走到哪，哪里就开始像一个临时节目组。", en: "Wherever you go, the room starts behaving like a pop-up production crew." },
    stamp: { zh: "创意系高发类型", en: "Creative specimen" },
    summary: { zh: "你是那种会把办公室做成真人秀副本的人，热闹和点子都很多。", en: "You are the sort of person who turns an office into a reality show side quest. Loud ideas, lively energy." },
    description: { zh: "你喜欢流动、喜欢互相碰撞，也不怕把场面搞活。你的价值不只在执行，还在于给团队带来变化和动能。", en: "You enjoy motion, friction, and the spark that comes from collisions. Your value is not just execution. You inject momentum and change into the team." },
    coworkerView: { zh: "你可能偶尔分散注意力，但也常常顺手点燃了整个团队的气氛。", en: "You may occasionally derail focus, but you also ignite the room with alarming consistency." },
    tags: { zh: ["气氛带电", "创意乱入", "走到哪聊到哪"], en: ["Charged atmosphere", "Creative intrusion", "Portable side plot"] },
    profile: { drive: 60, social: 84, risk: 66, emotion: 78, control: 42 },
  },
  {
    code: "HERO",
    avatar: "./avatars/hero.svg",
    accent: "#F08B2D",
    title: { zh: "自燃卷王", en: "Deadline Berserker" },
    badge: { zh: "DDL 充能型生物", en: "Deadline-powered lifeform" },
    slogan: { zh: "压力一来，你的战斗模式和黑眼圈会同时点亮。", en: "The pressure hits and both your battle mode and eye bags light up together." },
    stamp: { zh: "燃烧系高发类型", en: "Combustion specimen" },
    summary: { zh: "别人是被推动，你是会自己点火。压力一来，你反而更像进入战斗模式。", en: "Other people need a push. You self-ignite. The closer the pressure gets, the more combat-ready you become." },
    description: { zh: "你对任务有天然的推进欲，一旦进入状态，很容易不知不觉把自己烧过头。你厉害，也容易累。", en: "You have a natural urge to push tasks forward, and once activated, you tend to burn past reasonable limits. Effective, yes. Sustainable, questionable." },
    coworkerView: { zh: "大家一边心疼你太拼，一边庆幸关键节点有你这种人存在。", en: "People worry about how hard you push yourself, while secretly feeling lucky you exist at critical moments." },
    tags: { zh: ["自驱爆表", "压力增益", "高压推进器"], en: ["Self-propelled", "Pressure buff", "High-stress engine"] },
    profile: { drive: 96, social: 44, risk: 74, emotion: 46, control: 72 },
  },
  {
    code: "HOLD",
    avatar: "./avatars/hold.svg",
    accent: "#B49B5F",
    title: { zh: "精神股东", en: "Emotional Shareholder" },
    badge: { zh: "项目情绪持股人", en: "Unofficial owner of team feelings" },
    slogan: { zh: "你未必永远在前线，但你永远精神上全仓。", en: "You may not always be on the front line, but spiritually you are all-in." },
    stamp: { zh: "代入系高发类型", en: "Attachment specimen" },
    summary: { zh: "你对团队有强烈参与感，虽然不一定时时冲前线，但一定时时在线上。", en: "You feel deeply invested in the team. Maybe not always at the front, but emotionally you are permanently online." },
    description: { zh: "你最强的是整体感和代入感。这个事成了你真高兴，炸了你也真上火。你像团队的情绪持股人。", en: "Your strongest trait is identification with the whole. If the project wins, you glow. If it crashes, you feel it in your blood pressure. You are the emotional shareholder of the team." },
    coworkerView: { zh: "你未必永远在 C 位，但你对全局的关注度常常比当事人还高。", en: "You may not always be center stage, but your concern for the whole picture often exceeds that of the actual owners." },
    tags: { zh: ["全局入戏", "高度代入", "远程操心"], en: ["Fully invested", "Deeply attached", "Remote worrying"] },
    profile: { drive: 54, social: 72, risk: 44, emotion: 70, control: 68 },
  },
];

const archetypeVariants = {
  BOSS: [
    {
      key: "ice",
      codeSuffix: "A",
      match: (scores) => scores.control >= 88 && scores.emotion <= 38,
      title: { zh: "冷面控场总监", en: "Cold Meeting Warlord" },
      badge: { zh: "会后追杀型控场人", en: "Post-meeting cleanup tyrant" },
      slogan: { zh: "你不是想控场，你只是无法容忍低效继续活着。", en: "You are not trying to dominate the room. You are trying to stop inefficiency from reproducing." },
      stamp: { zh: "冷控场分支", en: "Cold-control branch" },
      summary: { zh: "你像那种会在会议结束后，再单独把每个人的漏洞精准点名的人。", en: "You are the kind of person who ends the meeting, then privately audits everybody's weak spots with terrifying precision." },
      tags: { zh: ["冷气开会", "精准收口", "不留活口"], en: ["Arctic presence", "Precision closer", "No loose ends"] },
    },
    {
      key: "hot",
      codeSuffix: "B",
      match: (scores) => scores.social + scores.emotion >= 120,
      title: { zh: "热血控场总监", en: "Hype Meeting Warlord" },
      badge: { zh: "边控场边打鸡血", en: "Motivational command unit" },
      slogan: { zh: "你会控场，但你更喜欢把全场一起点燃。", en: "You do not just run the room. You electrify it." },
      stamp: { zh: "热控场分支", en: "High-energy branch" },
      summary: { zh: "你像一个自带扩音器和战前动员能力的项目领头人。", en: "You feel like a project lead with a built-in loudspeaker and battle speech generator." },
      tags: { zh: ["激情排兵", "高能收麦", "全员站直"], en: ["Command energy", "Hot landing", "Everybody up"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "流程控场总监", en: "Process Warlord" },
      badge: { zh: "默认统筹人格", en: "Default command personality" },
      slogan: { zh: "一屋子人只要开始乱，你就会自动进入排兵布阵模式。", en: "The second a room gets messy, you enter command mode by reflex." },
      stamp: { zh: "标准控场分支", en: "Core command branch" },
      summary: { zh: "你是那种不一定声量最大，但节奏一定最后落到你手里的人。", en: "You may not be the loudest person there, but somehow the final rhythm still ends up in your hands." },
      tags: { zh: ["节奏主脑", "流程上身", "收口本能"], en: ["Rhythm brain", "Process driven", "Closer instinct"] },
    },
  ],
  TANK: [
    {
      key: "silent",
      codeSuffix: "A",
      match: (scores) => scores.emotion <= 42,
      title: { zh: "沉默背锅坦克", en: "Silent Blame Tank" },
      badge: { zh: "不吭声但真能扛", en: "Low-dialogue impact absorber" },
      slogan: { zh: "你接锅时像个闷葫芦，实际上血条比谁都长。", en: "You absorb blame in near silence, but your health bar is absurdly long." },
      stamp: { zh: "沉默抗压分支", en: "Silent tank branch" },
      summary: { zh: "你不爱把辛苦挂在嘴上，但每次出事总有人第一时间想到你。", en: "You rarely advertise your effort, yet people think of you first whenever disaster arrives." },
      tags: { zh: ["闷声扛伤", "血条很厚", "危机默认位"], en: ["Quiet absorber", "Thick health bar", "Crisis default"] },
    },
    {
      key: "berserk",
      codeSuffix: "B",
      match: (scores) => scores.risk + scores.emotion >= 120,
      title: { zh: "暴走背锅坦克", en: "Berserk Blame Tank" },
      badge: { zh: "一边挨打一边反打", en: "Counterattack-enabled shield unit" },
      slogan: { zh: "锅你能接，但你也会顺手把战场一起掀翻。", en: "You can take the hit, but you may also flip the battlefield on the way down." },
      stamp: { zh: "暴走抗压分支", en: "Berserk tank branch" },
      summary: { zh: "你不是那种单纯挨打的人，你会在扛住以后开始反推局势。", en: "You do not merely survive impact. You absorb it, then reverse the fight." },
      tags: { zh: ["接锅反打", "怒气护甲", "不白挨"], en: ["Absorb and punish", "Rage armor", "Never free damage"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "续命背锅坦克", en: "Emergency Blame Tank" },
      badge: { zh: "项目续命装置", en: "Project life-support unit" },
      slogan: { zh: "你不是喜欢接锅，你只是很难看着系统原地爆炸。", en: "You do not enjoy taking blame. You just cannot watch the system explode in peace." },
      stamp: { zh: "标准抗压分支", en: "Core tank branch" },
      summary: { zh: "你有一种非常实用的气质，叫‘这事先别死在我面前’。", en: "Your most practical trait is a refusal to let things die in front of you." },
      tags: { zh: ["续命专家", "救火肌肉", "先稳住"], en: ["Life support", "Firefighting muscle", "Stabilize first"] },
    },
  ],
  SHOW: [
    {
      key: "lunch",
      codeSuffix: "A",
      match: (scores) => scores.social >= 90 && scores.emotion >= 88,
      title: { zh: "饭桌爆梗演王", en: "Lunch-Table Showrunner" },
      badge: { zh: "食堂段子永动机", en: "Cafeteria bit machine" },
      slogan: { zh: "没有你，午饭只是补充碳水；有你，午饭是连续剧。", en: "Without you, lunch is calories. With you, it becomes a season finale." },
      stamp: { zh: "爆梗分支", en: "Bit-heavy branch" },
      summary: { zh: "你特别适合在最普通的场景里，凭语言组织能力制造喜剧现场。", en: "You have a disturbing gift for producing comedy from the most ordinary workplace scene." },
      tags: { zh: ["午饭 C 位", "梗密度高", "办公室综艺"], en: ["Lunch MVP", "High joke density", "Office variety show"] },
    },
    {
      key: "meeting",
      codeSuffix: "B",
      match: (scores) => scores.control >= 48,
      title: { zh: "会议插话演王", en: "Meeting Interruption Artist" },
      badge: { zh: "会议氛围带偏高手", en: "Agenda derail specialist" },
      slogan: { zh: "就算是最无聊的会，你也能插一句让全场醒来。", en: "Even the dullest meeting can be revived by one of your side comments." },
      stamp: { zh: "插话分支", en: "Interruption branch" },
      summary: { zh: "你不是单纯会活跃气氛，你是会在低气压会议里突然制造转折的人。", en: "You do not just lighten the mood. You create plot twists inside low-pressure meetings." },
      tags: { zh: ["插话救场", "会议活化", "笑点突刺"], en: ["Rescue interruption", "Meeting revival", "Humor ambush"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "气氛主舞台演王", en: "Main-Stage Office Creature" },
      badge: { zh: "默认社交中心", en: "Default social center" },
      slogan: { zh: "你走到哪儿，哪儿就开始像一个有观众的空间。", en: "Every space feels slightly more performative when you enter it." },
      stamp: { zh: "标准演王分支", en: "Core show branch" },
      summary: { zh: "你和环境之间会互相放大，所以办公室在你附近总显得更热闹。", en: "You amplify environments, and they amplify you back, which is why offices feel louder around you." },
      tags: { zh: ["社交中心", "氛围总开关", "戏感稳定"], en: ["Social center", "Mood switch", "Consistent theatricality"] },
    },
  ],
  GHOST: [
    {
      key: "headphones",
      codeSuffix: "A",
      match: (scores) => scores.social <= 20 && scores.control >= 72,
      title: { zh: "耳机修仙隐身人", en: "Headphone Monk Ghost" },
      badge: { zh: "勿扰模式常驻", en: "Permanent do-not-disturb entity" },
      slogan: { zh: "你看起来像在消失，实际上是在后台渡劫。", en: "You look absent, but you are privately ascending under pressure." },
      stamp: { zh: "耳机分支", en: "Headphone branch" },
      summary: { zh: "你不是故意冷淡，你只是习惯把全部社交预算换成专注力。", en: "You are not cold on purpose. You simply convert social energy into focus with brutal efficiency." },
      tags: { zh: ["耳机结界", "高专注态", "静默修仙"], en: ["Headphone barrier", "Deep focus", "Silent cultivation"] },
    },
    {
      key: "savior",
      codeSuffix: "B",
      match: (scores) => scores.drive >= 68,
      title: { zh: "临门救场隐身人", en: "Last-Minute Savior Ghost" },
      badge: { zh: "平时离线，关键时上线", en: "Offline until absolutely needed" },
      slogan: { zh: "你平时像背景板，一到最后关头却总会显灵。", en: "Most days you blend into the wallpaper. Then the deadline hits and you become a miracle." },
      stamp: { zh: "救场分支", en: "Save-the-day branch" },
      summary: { zh: "你不是存在感低，你只是把存在感都押在最后的交付瞬间。", en: "Your presence is not low. It is simply concentrated into the final delivery moment." },
      tags: { zh: ["最后显灵", "低调翻盘", "交付刺客"], en: ["Late manifestation", "Quiet turnaround", "Delivery assassin"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "静音高效隐身人", en: "Low-Noise Cubicle Ghost" },
      badge: { zh: "默认静默运转", en: "Default silent-operation mode" },
      slogan: { zh: "你最稳定的魅力，是没人注意时事情反而做得最好。", en: "Your most stable talent is working best when nobody is watching." },
      stamp: { zh: "标准隐身分支", en: "Core ghost branch" },
      summary: { zh: "你让人意识到，存在感和贡献感本来就不是同一个东西。", en: "You are proof that visibility and usefulness were never the same metric." },
      tags: { zh: ["低噪运行", "安静补位", "后台核心"], en: ["Low-noise mode", "Quiet patching", "Backstage core"] },
    },
  ],
  BRAIN: [
    {
      key: "sheet",
      codeSuffix: "A",
      match: (scores) => scores.control >= 92,
      title: { zh: "表格军师", en: "Spreadsheet Strategist" },
      badge: { zh: "逻辑和格式双重洁癖", en: "Dual obsession with logic and structure" },
      slogan: { zh: "你最可怕的地方，是你甚至能把混乱整理成可复制模板。", en: "Your most alarming trait is the ability to turn chaos into reusable templates." },
      stamp: { zh: "表格分支", en: "Spreadsheet branch" },
      summary: { zh: "你像那种能用一个共享文档重新教育整个团队的人。", en: "You feel like someone who can re-educate a team using a single shared document." },
      tags: { zh: ["表格镇压", "格式洁癖", "文档统治"], en: ["Spreadsheet dominance", "Format obsession", "Document rule"] },
    },
    {
      key: "review",
      codeSuffix: "B",
      match: (scores) => scores.emotion <= 22,
      title: { zh: "毒舌审稿军师", en: "Merciless Review Strategist" },
      badge: { zh: "逻辑漏洞猎手", en: "Logic flaw hunter" },
      slogan: { zh: "你不一定爱说话，但你总能精准指出最该被修的那一刀。", en: "You may not say much, but you can always locate the wound that actually matters." },
      stamp: { zh: "审稿分支", en: "Review branch" },
      summary: { zh: "你给人的感觉像一个移动审稿意见系统，冷但有用。", en: "You give off the energy of a portable review system: cold, sharp, and deeply useful." },
      tags: { zh: ["漏洞猎手", "冷静补刀", "精准挑错"], en: ["Flaw hunter", "Cold correction", "Precise critique"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "逻辑保底军师", en: "Stability Strategist" },
      badge: { zh: "项目理智中枢", en: "Project rational core" },
      slogan: { zh: "当别人情绪先动时，你的脑子往往先上线。", en: "When other people lead with emotion, your brain tends to log in first." },
      stamp: { zh: "标准军师分支", en: "Core strategist branch" },
      summary: { zh: "你最大的价值是让团队在最容易失焦的时候重新对准问题。", en: "Your biggest value is snapping teams back toward the real problem when attention starts to drift." },
      tags: { zh: ["理智中枢", "稳态输出", "问题对准"], en: ["Rational core", "Stable output", "Problem alignment"] },
    },
  ],
  SPARK: [
    {
      key: "producer",
      codeSuffix: "A",
      match: (scores) => scores.social >= 84,
      title: { zh: "乱入制片人", en: "Walk-On Producer" },
      badge: { zh: "走到哪协调到哪", en: "Portable production crew" },
      slogan: { zh: "你像一个路过工位也会顺手给别人加戏的人。", en: "You feel like someone who casually rewrites the scene while walking past a desk." },
      stamp: { zh: "制片分支", en: "Producer branch" },
      summary: { zh: "你擅长让原本松散的人和点子快速撞出一个临时项目感。", en: "You are strangely good at making scattered people and half-ideas feel like a temporary project." },
      tags: { zh: ["临时节目组", "边走边组局", "热闹制片"], en: ["Pop-up crew", "Roaming organizer", "Social producer"] },
    },
    {
      key: "grenade",
      codeSuffix: "B",
      match: (scores) => scores.risk >= 68,
      title: { zh: "点子手雷发动机", en: "Idea Grenade Engine" },
      badge: { zh: "高频随机掉落创意", en: "High-frequency concept dropper" },
      slogan: { zh: "你最大的危险，是你真的会把脑洞当场扔出来。", en: "Your most dangerous trait is that you actually throw the idea the second it appears." },
      stamp: { zh: "手雷分支", en: "Grenade branch" },
      summary: { zh: "你让人又爱又怕，因为你真的可能随手把现场炸出新方向。", en: "People fear and love you in equal measure because you can casually blast open a new direction." },
      tags: { zh: ["脑洞手雷", "点子突袭", "高风险新活"], en: ["Idea grenade", "Concept ambush", "High-risk novelty"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "热闹发动机", en: "Noise-to-Momentum Engine" },
      badge: { zh: "环境激活体质", en: "Environment activation form" },
      slogan: { zh: "你很会让安静的地方突然开始发生点什么。", en: "You have a gift for making quiet spaces suddenly develop a plot." },
      stamp: { zh: "标准发动机分支", en: "Core spark branch" },
      summary: { zh: "你天生带一点搅动感，但这正是很多停滞局面缺的那口气。", en: "You naturally stir things up, which is exactly what many stagnant situations secretly need." },
      tags: { zh: ["气氛激活", "动能来源", "松弛搅动"], en: ["Atmosphere activator", "Momentum source", "Useful disruption"] },
    },
  ],
  HERO: [
    {
      key: "overnight",
      codeSuffix: "A",
      match: (scores) => scores.drive >= 92,
      title: { zh: "通宵战神卷王", en: "All-Nighter Berserker" },
      badge: { zh: "DDL 来了自动通电", en: "Deadline-triggered overclocking" },
      slogan: { zh: "别人看到的是风险，你看到的是开战按钮。", en: "Other people see danger. You see a start button." },
      stamp: { zh: "通宵分支", en: "Overnight branch" },
      summary: { zh: "你像那种越晚越清醒、越急越有输出的高压生物。", en: "You are one of those alarming lifeforms that gets sharper the later and uglier it gets." },
      tags: { zh: ["深夜增伤", "DDL 通电", "越急越猛"], en: ["Night buff", "Deadline powered", "Stronger under panic"] },
    },
    {
      key: "raider",
      codeSuffix: "B",
      match: (scores) => scores.risk >= 72 && scores.control >= 68,
      title: { zh: "危机突击卷王", en: "Crisis Raider" },
      badge: { zh: "高压任务专用机", en: "Emergency-only assault model" },
      slogan: { zh: "你不是单纯拼命，你是在危机里长出方向感。", en: "You do not just grind harder. You become directional inside disaster." },
      stamp: { zh: "突击分支", en: "Raid branch" },
      summary: { zh: "你适合最糟糕的时刻，因为你能一边冲一边保留目标感。", en: "You are built for ugly moments because you can charge forward without losing the objective." },
      tags: { zh: ["危机突击", "带方向冲", "燃烧有序"], en: ["Crisis assault", "Directional charge", "Ordered combustion"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "高压推进卷王", en: "Pressure-Driven Berserker" },
      badge: { zh: "默认燃烧人格", en: "Default combustion personality" },
      slogan: { zh: "你总能把别人想逃的节点，活活推进成结果。", en: "You keep dragging dreaded moments all the way into actual outcomes." },
      stamp: { zh: "标准卷王分支", en: "Core berserker branch" },
      summary: { zh: "你是那种会把自己烧得发亮，但也真的能照亮交付的人。", en: "You are the kind of person who burns visibly, but also genuinely lights the path to delivery." },
      tags: { zh: ["高压推进", "自燃交付", "越烧越亮"], en: ["Pressure engine", "Self-burning delivery", "Brighter while burning"] },
    },
  ],
  HOLD: [
    {
      key: "remote",
      codeSuffix: "A",
      match: (scores) => scores.social >= 68 && scores.drive <= 60,
      title: { zh: "远程操心股东", en: "Remote Emotional Shareholder" },
      badge: { zh: "不一定在场但一定在线", en: "Not always present, always invested" },
      slogan: { zh: "你未必亲手干，但你会在精神上把项目从头盯到尾。", en: "You may not touch every task, but spiritually you supervise the whole arc." },
      stamp: { zh: "远程分支", en: "Remote branch" },
      summary: { zh: "你像那个不在前排、却对每一步都很上心的场外股东。", en: "You feel like the off-site shareholder who still cares about every move on the board." },
      tags: { zh: ["远程操心", "线上持股", "全程代入"], en: ["Remote worrying", "Emotionally invested", "Always tracking"] },
    },
    {
      key: "bleeding",
      codeSuffix: "B",
      match: (scores) => scores.emotion >= 74,
      title: { zh: "共情过载股东", en: "Overinvested Emotional Shareholder" },
      badge: { zh: "项目涨跌影响心率", en: "Project volatility affects pulse" },
      slogan: { zh: "团队今天情绪不好，你的精神净值也会跟着波动。", en: "When the team's mood drops, your internal stock chart drops with it." },
      stamp: { zh: "过载分支", en: "Overinvested branch" },
      summary: { zh: "你不是冷静围观型，你是会真情实感陪项目一起起落的人。", en: "You are not calmly observing. You are emotionally riding the project like a volatile asset." },
      tags: { zh: ["情绪持股", "代入过深", "跟盘波动"], en: ["Mood equity", "Overattached", "Volatile tracking"] },
    },
    {
      key: "core",
      codeSuffix: "C",
      match: () => true,
      title: { zh: "全局入戏股东", en: "Full-Map Emotional Shareholder" },
      badge: { zh: "默认团队代入人格", en: "Default full-team attachment mode" },
      slogan: { zh: "你最擅长的不是抢镜，而是整个局你都真正在乎。", en: "Your talent is not stealing the spotlight. It is caring about the whole map for real." },
      stamp: { zh: "标准股东分支", en: "Core shareholder branch" },
      summary: { zh: "你身上那种天然的参与感，会让人觉得你比当事人还在乎结果。", en: "Your natural sense of involvement often makes you seem more invested than the official owners." },
      tags: { zh: ["全局在乎", "精神全仓", "团队代入"], en: ["Whole-map concern", "Spiritually all-in", "Team identification"] },
    },
  ],
};

const variantVisuals = {
  "BOSS-ice": { emblem: "GRID", emblemStyle: "paper" },
  "BOSS-hot": { emblem: "UP", emblemStyle: "badge" },
  "BOSS-core": { emblem: "MAP", emblemStyle: "royal" },
  "TANK-silent": { emblem: "HP", emblemStyle: "calm" },
  "TANK-berserk": { emblem: "RAGE", emblemStyle: "warn" },
  "TANK-core": { emblem: "SAVE", emblemStyle: "badge" },
  "SHOW-lunch": { emblem: "LOL", emblemStyle: "badge" },
  "SHOW-meeting": { emblem: "OFF", emblemStyle: "warn" },
  "SHOW-core": { emblem: "STAR", emblemStyle: "paper" },
  "GHOST-headphones": { emblem: "DND", emblemStyle: "calm" },
  "GHOST-savior": { emblem: "404", emblemStyle: "paper" },
  "GHOST-core": { emblem: "VOID", emblemStyle: "badge" },
  "BRAIN-sheet": { emblem: "XLS", emblemStyle: "royal" },
  "BRAIN-review": { emblem: "CUT", emblemStyle: "warn" },
  "BRAIN-core": { emblem: "IQ", emblemStyle: "paper" },
  "SPARK-producer": { emblem: "CAST", emblemStyle: "spark" },
  "SPARK-grenade": { emblem: "BOOM", emblemStyle: "warn" },
  "SPARK-core": { emblem: "LIVE", emblemStyle: "spark" },
  "HERO-overnight": { emblem: "NITE", emblemStyle: "warn" },
  "HERO-raider": { emblem: "GO", emblemStyle: "badge" },
  "HERO-core": { emblem: "HOT", emblemStyle: "warn" },
  "HOLD-remote": { emblem: "TAB", emblemStyle: "paper" },
  "HOLD-bleeding": { emblem: "ALL", emblemStyle: "badge" },
  "HOLD-core": { emblem: "HOLD", emblemStyle: "royal" },
};

const variantProfileOffsets = {
  "BOSS-ice": { drive: -6, social: -10, risk: -8, emotion: -18, control: 6 },
  "BOSS-hot": { drive: 4, social: 12, risk: 6, emotion: 18, control: -4 },
  "BOSS-core": { drive: 0, social: -2, risk: -2, emotion: -4, control: 4 },
  "TANK-silent": { drive: -4, social: -6, risk: -4, emotion: -14, control: 2 },
  "TANK-berserk": { drive: 6, social: 0, risk: 10, emotion: 18, control: -4 },
  "TANK-core": { drive: 2, social: -2, risk: 2, emotion: 0, control: 0 },
  "SHOW-lunch": { drive: 0, social: 8, risk: 2, emotion: 10, control: -4 },
  "SHOW-meeting": { drive: 2, social: 2, risk: 4, emotion: 2, control: 6 },
  "SHOW-core": { drive: -2, social: 4, risk: 0, emotion: 4, control: -2 },
  "GHOST-headphones": { drive: 0, social: -10, risk: -4, emotion: -8, control: 8 },
  "GHOST-savior": { drive: 10, social: 0, risk: 6, emotion: 0, control: -4 },
  "GHOST-core": { drive: -2, social: -4, risk: -2, emotion: -2, control: 2 },
  "BRAIN-sheet": { drive: 0, social: -4, risk: -4, emotion: -4, control: 10 },
  "BRAIN-review": { drive: 0, social: -2, risk: 0, emotion: -12, control: 6 },
  "BRAIN-core": { drive: 0, social: 0, risk: -2, emotion: -2, control: 2 },
  "SPARK-producer": { drive: 2, social: 8, risk: 0, emotion: 4, control: 2 },
  "SPARK-grenade": { drive: 4, social: 0, risk: 12, emotion: 4, control: -6 },
  "SPARK-core": { drive: 0, social: 4, risk: 4, emotion: 2, control: -2 },
  "HERO-overnight": { drive: 8, social: -2, risk: 6, emotion: 2, control: -4 },
  "HERO-raider": { drive: 4, social: 0, risk: 8, emotion: -2, control: 8 },
  "HERO-core": { drive: 2, social: -2, risk: 2, emotion: 0, control: 2 },
  "HOLD-remote": { drive: -8, social: 2, risk: -4, emotion: 4, control: 2 },
  "HOLD-bleeding": { drive: -2, social: 0, risk: 0, emotion: 12, control: -2 },
  "HOLD-core": { drive: 0, social: 2, risk: -2, emotion: 4, control: 2 },
};

function mergeProfile(baseProfile, offsets) {
  return Object.fromEntries(
    dimensions.map((dimension) => {
      const key = dimension.key;
      return [key, clampScore((baseProfile[key] || 0) + (offsets[key] || 0))];
    })
  );
}

const resultCandidates = archetypes.flatMap((base) =>
  (archetypeVariants[base.code] || []).map((variant) => {
    const variantKey = `${base.code}-${variant.key}`;
    const visual = variantVisuals[variantKey] || { emblem: "!", emblemStyle: "badge" };
    return {
      ...base,
      ...variant,
      ...visual,
      code: `${base.code}-${variant.codeSuffix}`,
      profile: mergeProfile(base.profile, variantProfileOffsets[variantKey] || {}),
    };
  })
);

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  mode: "short",
  result: null,
  lang: localStorage.getItem("nmti-lang") || "zh",
  plazaDropPending: false,
};

const screens = {
  hero: document.querySelector("#hero-screen"),
  quiz: document.querySelector("#quiz-screen"),
  result: document.querySelector("#result-screen"),
};

const els = {
  langZh: document.querySelector("#lang-zh"),
  langEn: document.querySelector("#lang-en"),
  modeShort: document.querySelector("#mode-short"),
  modeFull: document.querySelector("#mode-full"),
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroTitle: document.querySelector("#hero-title"),
  heroCopy: document.querySelector("#hero-copy"),
  metricQuestionsLabel: document.querySelector("#metric-questions-label"),
  metricQuestionsValue: document.querySelector("#metric-questions-value"),
  metricTimeLabel: document.querySelector("#metric-time-label"),
  metricTimeValue: document.querySelector("#metric-time-value"),
  metricToneLabel: document.querySelector("#metric-tone-label"),
  metricToneValue: document.querySelector("#metric-tone-value"),
  disclaimerText: document.querySelector("#disclaimer-text"),
  plazaPeek: document.querySelector("#plaza-peek"),
  plazaScreen: document.querySelector("#plaza-screen"),
  plazaEyebrow: document.querySelector("#plaza-eyebrow"),
  plazaTitle: document.querySelector("#plaza-title"),
  plazaCopy: document.querySelector("#plaza-copy"),
  plazaCrowd: document.querySelector("#plaza-crowd"),
  plazaDropKicker: document.querySelector("#plaza-drop-kicker"),
  plazaDropCard: document.querySelector("#plaza-drop-card"),
  plazaDropAura: document.querySelector("#plaza-drop-aura"),
  plazaDropAvatar: document.querySelector("#plaza-drop-avatar"),
  plazaDropTitle: document.querySelector("#plaza-drop-title"),
  plazaDropNote: document.querySelector("#plaza-drop-note"),
  resultPlazaEyebrow: document.querySelector("#result-plaza-eyebrow"),
  resultPlazaTitle: document.querySelector("#result-plaza-title"),
  resultPlazaCopy: document.querySelector("#result-plaza-copy"),
  resultPlazaCrowd: document.querySelector("#result-plaza-crowd"),
  resultPlazaDropKicker: document.querySelector("#result-plaza-drop-kicker"),
  resultPlazaDropCard: document.querySelector("#result-plaza-drop-card"),
  resultPlazaDropAura: document.querySelector("#result-plaza-drop-aura"),
  resultPlazaDropAvatar: document.querySelector("#result-plaza-drop-avatar"),
  resultPlazaDropTitle: document.querySelector("#result-plaza-drop-title"),
  resultPlazaDropNote: document.querySelector("#result-plaza-drop-note"),
  startButton: document.querySelector("#start-button"),
  jumpResultButton: document.querySelector("#jump-result-button"),
  backHomeButton: document.querySelector("#back-home-button"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
  retryButton: document.querySelector("#retry-button"),
  retryTopButton: document.querySelector("#retry-top-button"),
  backTopButton: document.querySelector("#back-top-button"),
  shareButton: document.querySelector("#share-button"),
  questionTag: document.querySelector("#question-tag"),
  questionText: document.querySelector("#question-text"),
  optionList: document.querySelector("#option-list"),
  progressLabel: document.querySelector("#progress-label"),
  progressPercent: document.querySelector("#progress-percent"),
  progressFill: document.querySelector("#progress-fill"),
  resultKicker: document.querySelector("#result-kicker"),
  resultTitle: document.querySelector("#result-title"),
  resultCode: document.querySelector("#result-code"),
  resultSummary: document.querySelector("#result-summary"),
  resultCard: document.querySelector("#result-card"),
  resultDropTrail: document.querySelector("#result-drop-trail"),
  resultImpactRing: document.querySelector("#result-impact-ring"),
  resultAvatar: document.querySelector("#result-avatar"),
  resultAura: document.querySelector("#result-aura"),
  resultEmblem: document.querySelector("#result-emblem"),
  resultBadge: document.querySelector("#result-badge"),
  resultSlogan: document.querySelector("#result-slogan"),
  resultStamp: document.querySelector("#result-stamp"),
  descriptionHeading: document.querySelector("#description-heading"),
  coworkerHeading: document.querySelector("#coworker-heading"),
  radarHeading: document.querySelector("#radar-heading"),
  noteHeading: document.querySelector("#note-heading"),
  noteText: document.querySelector("#note-text"),
  qrFloatText: document.querySelector("#qr-float-text"),
  resultLinkChip: document.querySelector("#result-link-chip"),
  plazaModal: document.querySelector("#plaza-modal"),
  plazaModalBackdrop: document.querySelector("#plaza-modal-backdrop"),
  plazaModalClose: document.querySelector("#plaza-modal-close"),
  plazaModalAvatar: document.querySelector("#plaza-modal-avatar"),
  plazaModalKicker: document.querySelector("#plaza-modal-kicker"),
  plazaModalTitle: document.querySelector("#plaza-modal-title"),
  plazaModalSummary: document.querySelector("#plaza-modal-summary"),
  plazaModalTags: document.querySelector("#plaza-modal-tags"),
  resultDescription: document.querySelector("#result-description"),
  coworkerView: document.querySelector("#coworker-view"),
  resultTags: document.querySelector("#result-tags"),
  scoreList: document.querySelector("#score-list"),
  matchRate: document.querySelector("#match-rate"),
};

function t(value) {
  return typeof value === "string" ? value : value[state.lang];
}

function currentUi() {
  return ui[state.lang];
}

function activeQuestionIndexes() {
  return questionSets[state.mode];
}

function activeQuestionsCount() {
  return activeQuestionIndexes().length;
}

function activeQuestion() {
  return questions[activeQuestionIndexes()[state.index]];
}

function setHeadText() {
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const data = currentUi();

  document.title = data.htmlTitle;
  metaDescription.setAttribute("content", data.metaDescription);
  ogTitle.setAttribute("content", data.ogTitle);
  ogDescription.setAttribute("content", data.ogDescription);
}

function renderStaticUi() {
  const data = currentUi();

  setHeadText();
  els.heroEyebrow.textContent = data.heroEyebrow;
  els.heroTitle.textContent = data.heroTitle;
  els.heroCopy.textContent = data.heroCopy;
  els.plazaEyebrow.textContent = data.plazaEyebrow;
  els.plazaTitle.textContent = data.plazaTitle;
  els.plazaCopy.textContent = data.plazaCopy;
  els.plazaDropKicker.textContent = data.plazaDropKicker;
  els.resultPlazaEyebrow.textContent = data.plazaEyebrow;
  els.resultPlazaTitle.textContent = data.resultPlazaTitle;
  els.resultPlazaCopy.textContent = data.resultPlazaCopy;
  els.resultPlazaDropKicker.textContent = data.resultPlazaDropKicker;
  els.metricQuestionsLabel.textContent = data.metrics.questionsLabel;
  els.metricQuestionsValue.textContent = data.metrics.questionsValue;
  els.metricTimeLabel.textContent = data.metrics.timeLabel;
  els.metricTimeValue.textContent = data.metrics.timeValue;
  els.metricToneLabel.textContent = data.metrics.toneLabel;
  els.metricToneValue.textContent = data.metrics.toneValue;
  els.modeShort.textContent = data.shortMode;
  els.modeFull.textContent = data.fullMode;
  els.modeShort.classList.toggle("active", state.mode === "short");
  els.modeFull.classList.toggle("active", state.mode === "full");
  els.startButton.textContent = data.start;
  els.jumpResultButton.textContent = data.preview;
  els.disclaimerText.textContent = data.disclaimer;
  els.plazaPeek.textContent = data.plazaPeek;
  els.backHomeButton.textContent = data.backHome;
  els.prevButton.textContent = data.prev;
  els.retryTopButton.textContent = data.retryTop;
  els.backTopButton.textContent = data.backTop;
  els.retryButton.textContent = data.retry;
  els.shareButton.textContent = data.share;
  els.resultKicker.textContent = data.resultKicker;
  els.descriptionHeading.textContent = data.descriptionHeading;
  els.coworkerHeading.textContent = data.coworkerHeading;
  els.radarHeading.textContent = data.radarHeading;
  els.noteHeading.textContent = data.noteHeading;
  els.noteText.textContent = data.noteText;
  els.qrFloatText.textContent = data.qrFloatText;
  els.resultLinkChip.textContent = data.qrChipText;
  els.plazaModalKicker.textContent = data.plazaModalKicker;
  els.langZh.classList.toggle("active", state.lang === "zh");
  els.langEn.classList.toggle("active", state.lang === "en");
  renderPlaza();

  if (state.result) {
    renderResult();
  } else if (!screens.quiz.classList.contains("hidden")) {
    renderQuestion();
  }
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
  });
  els.plazaScreen.classList.toggle("hidden", name !== "hero");
  if (name === "hero" && state.result) {
    state.plazaDropPending = true;
    maybeTriggerPlazaDropAnimation();
  }
}

function plazaMembers() {
  return [
    archetypes[0],
    archetypes[2],
    archetypes[6],
    archetypes[3],
    archetypes[7],
    archetypes[1],
    archetypes[4],
    archetypes[5],
    archetypes[3],
    archetypes[2],
    archetypes[1],
    archetypes[6],
  ];
}

function plazaContexts() {
  return [
    {
      crowd: els.plazaCrowd,
      dropAura: els.plazaDropAura,
      dropAvatar: els.plazaDropAvatar,
      dropTitle: els.plazaDropTitle,
      dropNote: els.plazaDropNote,
      dropCard: els.plazaDropCard,
      titleIdle: currentUi().plazaDropTitleIdle,
      noteIdle: currentUi().plazaDropNoteIdle,
      titleReady: currentUi().plazaDropTitleReady,
      noteReady: currentUi().plazaDropNoteReady,
      idleAlt: state.lang === "zh" ? "广场主角" : "Plaza lead",
    },
    {
      crowd: els.resultPlazaCrowd,
      dropAura: els.resultPlazaDropAura,
      dropAvatar: els.resultPlazaDropAvatar,
      dropTitle: els.resultPlazaDropTitle,
      dropNote: els.resultPlazaDropNote,
      dropCard: els.resultPlazaDropCard,
      titleIdle: currentUi().resultPlazaDropTitleIdle,
      noteIdle: currentUi().resultPlazaDropNoteIdle,
      titleReady: currentUi().resultPlazaDropTitleReady,
      noteReady: currentUi().resultPlazaDropNoteReady,
      idleAlt: state.lang === "zh" ? "结果页广场主角" : "Result plaza lead",
    },
  ];
}

function renderPlaza() {
  const crowd = plazaMembers();
  const bubbles = plazaBubblePool[state.lang];
  plazaContexts().forEach((context) => {
    context.crowd.innerHTML = "";
    crowd.forEach((member, index) => {
      const spot = plazaPositions[index % plazaPositions.length];
      const bubble = bubbles[index % bubbles.length];
      const item = document.createElement("div");
      item.className = "plaza-member";
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", t(member.title));
      item.dataset.lane = spot.lane;
      item.style.left = spot.left;
      item.style.top = spot.top;
      item.style.animationDelay = spot.delay;
      item.style.setProperty("--member-accent", member.accent);
      item.style.rotate = spot.rotate;
      if (state.result && state.result.avatar === member.avatar) {
        item.classList.add("current");
      }

      item.innerHTML = `
        <div class="plaza-member-avatar-wrap">
          <div class="plaza-member-aura" style="background: radial-gradient(circle, color-mix(in srgb, ${member.accent} 30%, white), transparent 68%);"></div>
          <img class="plaza-member-avatar" src="${member.avatar}" alt="${t(member.title)}">
          <span class="plaza-member-bubble">${bubble}</span>
        </div>
        <span class="plaza-member-label">${t(member.title)}</span>
      `;

      item.addEventListener("click", () => openPlazaModal(member));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPlazaModal(member);
        }
      });

      context.crowd.appendChild(item);
    });

    if (state.result) {
      context.dropAvatar.src = state.result.avatar;
      context.dropAvatar.alt = `${t(state.result.title)} plaza avatar`;
      context.dropTitle.textContent = context.titleReady(t(state.result.title));
      context.dropNote.textContent = context.noteReady;
      context.dropAura.style.background = `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.94), transparent 26%),
        linear-gradient(135deg, color-mix(in srgb, ${state.result.accent} 28%, white), rgba(243, 179, 61, 0.14))
      `;
    } else {
      context.dropAvatar.src = archetypes[0].avatar;
      context.dropAvatar.alt = context.idleAlt;
      context.dropTitle.textContent = context.titleIdle;
      context.dropNote.textContent = context.noteIdle;
      context.dropAura.style.background = `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.94), transparent 26%),
        linear-gradient(135deg, rgba(91, 110, 225, 0.22), rgba(243, 179, 61, 0.14))
      `;
    }
  });
}

function openPlazaModal(member) {
  els.plazaModalAvatar.src = member.avatar;
  els.plazaModalAvatar.alt = t(member.title);
  els.plazaModalTitle.textContent = t(member.title);
  els.plazaModalSummary.textContent = t(member.summary);
  els.plazaModalTags.innerHTML = "";
  member.tags[state.lang].forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.plazaModalTags.appendChild(chip);
  });
  els.plazaModal.classList.remove("hidden");
  els.plazaModal.setAttribute("aria-hidden", "false");
}

function closePlazaModal() {
  els.plazaModal.classList.add("hidden");
  els.plazaModal.setAttribute("aria-hidden", "true");
}

function triggerPlazaDropAnimation() {
  if (!state.result) {
    return;
  }
  state.plazaDropPending = false;
  [els.plazaDropCard, els.resultPlazaDropCard].forEach((card) => {
    card.classList.remove("dropping");
    void card.offsetWidth;
    card.classList.add("dropping");
  });
  window.clearTimeout(triggerPlazaDropAnimation.timer);
  triggerPlazaDropAnimation.timer = window.setTimeout(() => {
    [els.plazaDropCard, els.resultPlazaDropCard].forEach((card) => {
      card.classList.remove("dropping");
    });
  }, 900);
}

function triggerResultAirdropAnimation() {
  [els.resultCard, els.resultAvatar, els.resultAura, els.resultEmblem, els.resultDropTrail, els.resultImpactRing].forEach((element) => {
    element.classList.remove("airdropping");
    element.classList.remove("airdropping-shake");
    void element.offsetWidth;
    element.classList.add("airdropping");
  });
  els.resultCard.classList.add("airdropping-shake");
  window.clearTimeout(triggerResultAirdropAnimation.timer);
  triggerResultAirdropAnimation.timer = window.setTimeout(() => {
    [els.resultCard, els.resultAvatar, els.resultAura, els.resultEmblem, els.resultDropTrail, els.resultImpactRing].forEach((element) => {
      element.classList.remove("airdropping");
      element.classList.remove("airdropping-shake");
    });
  }, 2100);
}

function isPlazaVisible() {
  if (screens.hero.classList.contains("hidden")) {
    return false;
  }
  const rect = els.plazaScreen.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.2;
}

function maybeTriggerPlazaDropAnimation() {
  if (!state.plazaDropPending || !state.result) {
    return;
  }
  if (isPlazaVisible()) {
    triggerPlazaDropAnimation();
  }
}

function optionBadge(option, index) {
  const scores = option.scores;
  const palette = [
    { color: "#db5b2b", zh: "上头", en: "CHAOS" },
    { color: "#1f7a6b", zh: "稳住", en: "SAFE" },
    { color: "#5b6ee1", zh: "脑补", en: "BRAIN" },
    { color: "#73b44a", zh: "摸了", en: "CHILL" },
    { color: "#f3b33d", zh: "开冲", en: "RUSH" },
  ];

  let key = 0;
  if ((scores.drive || 0) <= -2 || (scores.social || 0) <= -2) {
    key = 3;
  } else if ((scores.control || 0) >= 2) {
    key = 1;
  } else if ((scores.risk || 0) >= 2 || (scores.drive || 0) >= 2) {
    key = 4;
  } else if ((scores.emotion || 0) >= 1) {
    key = 0;
  } else if ((scores.control || 0) >= 1 || (scores.emotion || 0) <= -1) {
    key = 2;
  } else {
    key = index % palette.length;
  }

  return palette[key];
}

function renderQuestion() {
  const questionIndex = activeQuestionIndexes()[state.index];
  const question = questions[questionIndex];
  const answeredIndex = state.answers[questionIndex];
  const total = activeQuestionsCount();
  const progress = ((state.index + 1) / total) * 100;
  const data = currentUi();

  els.questionTag.textContent = t(question.tag);
  els.questionText.textContent = t(question.text);
  els.progressLabel.textContent = data.progress(state.index + 1, total);
  els.progressPercent.textContent = data.questionPercent(Math.round(progress));
  els.progressFill.style.width = `${progress}%`;

  els.optionList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    const badge = optionBadge(option, index);
    button.style.setProperty("--badge-color", badge.color);
    if (answeredIndex === index) {
      button.classList.add("selected");
    }
    button.innerHTML = `
      <div class="option-head">
        <strong>${t(option.title)}</strong>
        <span class="option-badge">${state.lang === "zh" ? badge.zh : badge.en}</span>
      </div>
      <span>${t(option.note)}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[questionIndex] = index;
      button.classList.add("selected");
      window.setTimeout(() => {
        advanceAfterAnswer();
      }, 120);
    });
    els.optionList.appendChild(button);
  });

  els.prevButton.disabled = state.index === 0;
  els.nextButton.textContent = state.index === total - 1 ? data.submit : data.next;
}

function clampScore(value) {
  return Math.max(0, Math.min(100, value));
}

function computeScores() {
  const raw = { drive: 0, social: 0, risk: 0, emotion: 0, control: 0 };

  questions.forEach((question, questionIndex) => {
    if (!activeQuestionIndexes().includes(questionIndex)) {
      return;
    }
    const chosen = state.answers[questionIndex];
    if (chosen === null) {
      return;
    }
    const scores = question.options[chosen].scores;
    Object.keys(scores).forEach((key) => {
      raw[key] += scores[key];
    });
  });

  return Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, clampScore(50 + value * 7)])
  );
}

function distance(a, b) {
  return dimensions.reduce((sum, dimension) => {
    const delta = a[dimension.key] - b[dimension.key];
    return sum + delta * delta;
  }, 0);
}

function getBestResult(scores) {
  const ranked = resultCandidates
    .map((item) => ({ ...item, delta: distance(scores, item.profile) }))
    .sort((left, right) => left.delta - right.delta);

  const best = ranked[0];
  const rawMatch = Math.max(0, Math.min(100, Math.round(100 - Math.sqrt(best.delta) * 0.9)));
  const match = Math.round(63 + rawMatch * 0.37);
  return { ...best, match };
}

function renderResult() {
  const scores = computeScores();
  const result = getBestResult(scores);
  state.result = { ...result, scores };
  const data = currentUi();

  els.resultTitle.textContent = t(result.title);
  els.resultCode.textContent = result.code;
  els.resultSummary.textContent = t(result.summary);
  els.resultAvatar.src = result.avatar;
  els.resultAvatar.alt = `${t(result.title)} ${data.previewAvatarAlt}`;
  els.resultEmblem.textContent = result.emblem || "!";
  els.resultEmblem.dataset.style = result.emblemStyle || "badge";
  els.resultAura.style.background = `
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.92), transparent 28%),
    radial-gradient(circle at 70% 70%, color-mix(in srgb, ${result.accent} 26%, white), transparent 34%),
    linear-gradient(135deg, color-mix(in srgb, ${result.accent} 24%, white), rgba(243, 179, 61, 0.22))
  `;
  els.resultBadge.textContent = t(result.badge);
  els.resultSlogan.textContent = t(result.slogan);
  els.resultStamp.textContent = t(result.stamp);
  document.documentElement.style.setProperty("--result-accent", result.accent);
  els.resultDescription.textContent = t(result.description);
  els.coworkerView.textContent = t(result.coworkerView);
  els.matchRate.textContent = data.matchRate(result.match);

  els.resultTags.innerHTML = "";
  result.tags[state.lang].forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    els.resultTags.appendChild(chip);
  });

  els.scoreList.innerHTML = "";
  dimensions.forEach((dimension) => {
    const value = scores[dimension.key];
    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <label>${t(dimension.label)}</label>
      <div class="score-track"><div class="score-bar" style="width:${value}%"></div></div>
      <strong>${value}</strong>
    `;
    els.scoreList.appendChild(row);
  });

  triggerResultAirdropAnimation();
  renderPlaza();
  state.plazaDropPending = true;
  maybeTriggerPlazaDropAnimation();
}

function allAnswered() {
  return activeQuestionIndexes().every((index) => state.answers[index] !== null);
}

function startQuiz() {
  state.index = 0;
  state.result = null;
  showScreen("quiz");
  renderQuestion();
}

function resetQuiz() {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  state.plazaDropPending = false;
  renderPlaza();
  startQuiz();
}

function advanceAfterAnswer() {
  if (state.index === activeQuestionsCount() - 1) {
    if (!allAnswered()) {
      window.alert(currentUi().finishAll);
      return;
    }
    renderResult();
    showScreen("result");
    return;
  }

  state.index += 1;
  renderQuestion();
}

function setMode(mode) {
  state.mode = mode;
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  state.result = null;
  renderStaticUi();
}

function copyShareText() {
  if (!state.result) {
    return;
  }
  const data = currentUi();
  const text = data.shareText({
    title: t(state.result.title),
    code: state.result.code,
    summary: t(state.result.summary),
    match: state.result.match,
    url: window.location.href,
  });

  navigator.clipboard
    .writeText(text)
    .then(() => {
      els.shareButton.textContent = data.copied;
      window.setTimeout(() => {
        els.shareButton.textContent = currentUi().share;
      }, 2000);
    })
    .catch(() => {
      window.alert(text);
    });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("nmti-lang", lang);
  renderStaticUi();
}

els.langZh.addEventListener("click", () => setLanguage("zh"));
els.langEn.addEventListener("click", () => setLanguage("en"));
els.modeShort.addEventListener("click", () => setMode("short"));
els.modeFull.addEventListener("click", () => setMode("full"));
els.startButton.addEventListener("click", startQuiz);
els.jumpResultButton.addEventListener("click", () => {
  state.answers = Array(questions.length).fill(null);
  activeQuestionIndexes().forEach((index) => {
    state.answers[index] = questions[index].options[0] ? 0 : null;
  });
  renderResult();
  showScreen("result");
});
els.backHomeButton.addEventListener("click", () => showScreen("hero"));
els.prevButton.addEventListener("click", () => {
  state.index = Math.max(0, state.index - 1);
  renderQuestion();
});
els.nextButton.addEventListener("click", () => {
  const currentQuestionIndex = activeQuestionIndexes()[state.index];

  if (state.answers[currentQuestionIndex] === null) {
    window.alert(currentUi().chooseFirst);
    return;
  }

  advanceAfterAnswer();
});
els.retryButton.addEventListener("click", resetQuiz);
els.retryTopButton.addEventListener("click", resetQuiz);
els.backTopButton.addEventListener("click", () => showScreen("hero"));
els.shareButton.addEventListener("click", copyShareText);
els.plazaModalBackdrop.addEventListener("click", closePlazaModal);
els.plazaModalClose.addEventListener("click", closePlazaModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePlazaModal();
  }
});
window.addEventListener("scroll", maybeTriggerPlazaDropAnimation, { passive: true });
window.addEventListener("resize", maybeTriggerPlazaDropAnimation);

renderStaticUi();
showScreen("hero");
