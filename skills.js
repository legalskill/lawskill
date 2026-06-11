const skills = [
  {
    name: "IMA 知识库",
    code: "ima-knowledge-bases",
    route: "ima",
    icon: "images/ima.jpg",
    layout: "two-rows",
    desc: "基于腾讯 ima.copilot 构建的法律知识库矩阵——法律检索、案例查证、法规核验一站直达，每个知识库即开即用，点击下方按钮订阅。",
    links: [
      { platform: "法律技能知识库", url: "https://ima.qq.com/wiki/?shareId=8138fdfd3f6c571966e2433946f437f8f8814548b738a2cd8ca9a80b7aed177c", icon: "fas fa-book" },
      { platform: "律锥·法律官方信源库", url: "https://ima.qq.com/wiki/?shareId=0453dc2e58a535b35cea1a76c85a730362ecb95570c17f2de7cfa2b20c1c70b0", icon: "fas fa-building-columns" },
      { platform: "法律库", url: "https://ima.qq.com/wiki/?shareId=26d9316f2ac858558fb52d0fef8eaa327732109f22dc3d7269fa8419f893a228", icon: "fas fa-check-circle" },
      { platform: "法律知识库", url: "https://ima.qq.com/wiki/?shareId=34052ca35060c16bab297e5ca1e6bb1c124acc5c449885cd7c9fc30a18450a75", icon: "fas fa-layer-group" },
      { platform: "法律案例库", url: "https://ima.qq.com/wiki/?shareId=66bb3917ae3368f24205a6690295476ae1c659d34c55668eda00979fff9cdf18", icon: "fas fa-scale-balanced" }
    ]
  },
  {
    name: "IMA法律咨询技能",
    code: "tencent-ima-copilot-legal-consultation",
    route: "legal",
    icon: "images/ima.jpg",
    version: "v1.1.1",
    desc: "资深律师式法律咨询，深度适配 ima.copilot 知识库 RAG，五阶段分步诊断，法条与案例均可溯源验证。Senior-level legal consultation with RAG-enhanced diagnosis across five stages.",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/tencent-ima-copilot-legal-consultation", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/tencent-ima-copilot-legal-consultation", icon: "fas fa-code-branch" },
      { platform: "IMA", url: "https://ima.qq.com/skill?shareId=ba51a2197c4f4e1fabd93a12a1ddc243&from=share", icon: "fas fa-link" },
      { platform: "SkillHub", url: "https://skillhub.cn/skills/tencent-ima-copilot-legal-consultation", icon: "fas fa-globe" }
    ],
    download: [
      { label: "国际下载ZIP", url: "https://github.com/legalskill/legalskill/releases/download/latest/tencent-ima-copilot-legal-consultation.zip" },
      { label: "国内下载ZIP", url: "https://gitee.com/legalskill/legalskill/releases/latest" }
    ]
  },
  {
    name: "Claw 智能体引导",
    code: "claw-agent-workspace",
    route: "qclaw",
    icon: "images/qclaw.jpg",
    version: "v1.1.0",
    desc: "Claw 智能体工作区引导管理，自动扫描技能目录生成动态路由，注入 AGENTS.md、SOUL.md 等引导文件，支持多技能注册与外部技能路径。",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/claw-agent-workspace", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/claw-agent-workspace", icon: "fas fa-code-branch" },
      { platform: "IMA", url: "https://ima.qq.com/skill?shareId=df0a8dc15b744566b0299c5924c82b76&from=share", icon: "fas fa-link" },
      { platform: "SkillHub", url: "https://skillhub.cn/skills/claw-agent-workspace", icon: "fas fa-globe" }
    ],
    download: [
      { label: "国际下载ZIP", url: "https://github.com/legalskill/legalskill/releases/download/latest/claw-agent-workspace.zip" },
      { label: "国内下载ZIP", url: "https://gitee.com/legalskill/legalskill/releases/latest" }
    ]
  },
  {
    name: "WorkBuddy 法律咨询专家",
    code: "legalskill-legal-consultation",
    route: "workbuddy",
    icon: "images/workbuddy.jpg",
    version: "v2.0.0",
    desc: "进阶Agent架构，三层环境智能感知，五阶段分步诊断+搜索门禁+41项反幻觉核查。Skill-first设计，同时兼容独立使用与WorkBuddy嵌入。",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/legalskill-legal-consultation", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/legalskill-legal-consultation", icon: "fas fa-code-branch" },
      { platform: "IMA", url: "https://ima.qq.com/skill?shareId=bee46e4920884dc396ff15ac8604feb1&from=share", icon: "fas fa-link" },
      { platform: "SkillHub", url: "https://skillhub.cn/skills/legalskill-legal-consultation", icon: "fas fa-globe" }
    ],
    download: [
      { label: "国际下载ZIP", url: "https://github.com/legalskill/legalskill/releases/download/latest/legalskill-legal-consultation.zip" },
      { label: "国内下载ZIP", url: "https://gitee.com/legalskill/legalskill/releases/latest" }
    ]
  },
  {
    name: "高考志愿快速填报",
    code: "gaokao-quick-advisor",
    route: "gaokao",
    version: "v1.0.0",
    desc: "输入分数+省份+选科，立刻给出冲/稳/保三档学校推荐和录取概率。全国31省覆盖，数据来自官方一分一段表，永久免费。",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/gaokao-quick-advisor", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/gaokao-quick-advisor", icon: "fas fa-code-branch" },
      { platform: "IMA", url: "https://ima.qq.com/skill?shareId=4a6db4b5e9ec4604a57b9fd5f2205037&from=share", icon: "fas fa-link" },
      { platform: "SkillHub", url: "https://skillhub.cn/skills/gaokao-quick-advisor", icon: "fas fa-globe" }
    ],
    download: [
      { label: "国际下载ZIP", url: "https://github.com/legalskill/legalskill/releases/download/latest/gaokao-quick-advisor.zip" },
      { label: "国内下载ZIP", url: "https://gitee.com/legalskill/legalskill/releases/latest" }
    ]
  }
];
