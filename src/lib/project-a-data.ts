export const projectAData = {
  hero: {
    title: "咔智食谱",
    subtitle: "用 AI 和数据重塑家庭烹饪体验",
    role: "UX Designer",
    timeline: "3 个月",
    metrics: [
      { value: "3", label: "轮迭代" },
      { value: "87%", label: "任务完成率" },
      { value: "2.4s", label: "单次操作提效" },
    ],
  },
  research: {
    methods: [
      { name: "用户访谈", description: "12 位家庭烹饪用户深度访谈，了解烹饪痛点与工具使用习惯" },
      { name: "竞品分析", description: "分析 6 款主流食谱 App 的功能架构与交互模式差异" },
      { name: "问卷调研", description: "200+ 份有效问卷，量化用户对智能食谱的核心需求" },
      { name: "可用性测试", description: "现有产品原型 5 轮可用性测试，定位关键体验断点" },
    ],
  },
  insights: [
    {
      number: "01",
      title: "用户需要的是灵感，不是菜谱",
      description:
        "超过 70% 的用户打开食谱 App 时并不知道自己想做什么。他们需要智能推荐而非手动搜索。",
    },
    {
      number: "02",
      title: "操作步骤的连续性被频繁打断",
      description:
        "用户在做菜时需要频繁切换 App 和操作界面，平均每个步骤被打断 2.3 次。",
    },
    {
      number: "03",
      title: "食材管理是隐性痛点",
      description:
        "85% 的用户曾因缺少食材而放弃一个菜谱，但几乎没有 App 帮助管理已有食材。",
    },
  ],
  personas: [
    {
      name: "张明",
      role: "上班族，周末烹饪爱好者",
      quote: "周末想尝试新菜式，但常常做到一半发现少了调料。",
      tags: ["时间有限", "注重效率", "愿意尝试"],
    },
    {
      name: "李婷",
      role: "全职妈妈，家庭饮食管理者",
      quote: "每天都要想做什么菜，希望有人帮我决定。",
      tags: ["规律烹饪", "家庭需求", "健康优先"],
    },
  ],
  journeyStages: [
    { stage: "灵感获取", description: "浏览推荐，寻找晚餐灵感", emotion: "medium" as const },
    { stage: "食材确认", description: "检查家中是否有所需食材", emotion: "low" as const },
    { stage: "烹饪执行", description: "跟随步骤完成烹饪", emotion: "medium" as const },
    { stage: "成果分享", description: "拍照记录，分享给家人朋友", emotion: "high" as const },
  ],
  solutionDescription:
    "以 AI 为核心的智能食谱助手，从食材管理到个性化推荐，再到步骤引导，重塑完整的烹饪体验。",
  solutionAnnotations: [
    { x: 20, y: 20, label: "智能推荐入口" },
    { x: 60, y: 40, label: "食材扫描功能" },
  ],
  features: [
    { icon: "🧠", title: "AI 智能推荐", description: "基于食材库存和口味偏好，AI 自动推荐适合的菜谱", metric: "推荐准确率 92%", imageLabel: "智能推荐主界面", imageSrc: "/images/project-a/ai食谱产品.png" },
    { icon: "📷", title: "食材扫描", description: "拍照识别食材，自动匹配可用菜谱，减少浪费", metric: "识别速度 < 1s", imageLabel: "食材扫描交互", imageSrc: "/images/project-a/扫描界面.png" },
    { icon: "👣", title: "步骤引导", description: "语音播报 + 自动计时，让烹饪过程不再需要动手操作", metric: "提效 2.4s/步", imageLabel: "引导流程界面", imageSrcs: ["/images/project-a/步骤界面1.png", "/images/project-a/步骤界面2.png"] },
    { icon: "📊", title: "营养分析", description: "每道菜的完整营养数据，支持饮食目标追踪", metric: "覆盖 5000+ 菜品", imageLabel: "营养数据看板", imageSrcs: ["/images/project-a/营养分析1.png", "/images/project-a/营养分析2.png"] },
  ],
  comparisons: [
    { label: "找到想做菜的时间", before: "平均 4.2 分钟", after: "平均 1.8 分钟" },
    { label: "操作中断次数", before: "每道菜 6.3 次", after: "每道菜 1.2 次" },
    { label: "食材浪费率", before: "月均 23%", after: "月均 8%" },
    { label: "菜谱完成率", before: "61%", after: "89%" },
  ],
  outcomes: [
    { primary: "500+", description: "覆盖 500+ 样本的饮食偏好与 AI 接受度分析", sub: "定量问卷 + 定性访谈双轨验证" },
    { primary: "2025", description: "AI Agent 2025 全球专项赛 ToC 软件热度榜单入围", sub: "从全球 2000+ 参赛项目中突围" },
    { primary: "78", description: "NPS 推荐值 78 — 用户口碑显著高于行业平均水平", sub: "行业基准线 42，领先 85% 同类产品" },
  ],
};
