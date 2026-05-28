const skills = [
  {
    name: "IMA 知识库",
    code: "ima-knowledge-bases",
    desc: "基于腾讯 ima.copilot 构建的法律知识库矩阵——法律检索、案例查证、法规核验一站直达，每个知识库即开即用。",
    links: [
      { platform: "法律技能知识库", url: "https://ima.qq.com/wiki/?shareId=8138fdfd3f6c571966e2433946f437f8f8814548b738a2cd8ca9a80b7aed177c", icon: "fas fa-book" },
      { platform: "法律库（校对）", url: "#", icon: "fas fa-check-circle" },
      { platform: "法律知识库（综合）", url: "#", icon: "fas fa-layer-group" },
      { platform: "国家法律知识库", url: "#", icon: "fas fa-landmark" },
      { platform: "官方信源库", url: "#", icon: "fas fa-building-columns" },
      { platform: "法律案例库", url: "#", icon: "fas fa-scale-balanced" }
    ]
  },
  {
    name: "法律咨询",
    code: "tencent-ima-copilot-legal-consultation",
    version: "v1.1.1",
    desc: "资深律师式法律咨询，深度适配 ima.copilot 知识库 RAG，五阶段分步诊断，法条与案例均可溯源验证。ima.copilot 环境自动走 RAG 检索，非 ima.copilot 环境自动走联网检索。",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/tencent-ima-copilot-legal-consultation", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/tencent-ima-copilot-legal-consultation", icon: "fas fa-code-branch" },
      { platform: "ima.copilot", url: "https://ima.qq.com/wiki/?shareId=8138fdfd3f6c571966e2433946f437f8f8814548b738a2cd8ca9a80b7aed177c", icon: "fas fa-link" }
    ]
  },
  {
    name: "Claw 智能体引导",
    code: "claw-agent-workspace",
    version: "v1.1.0",
    desc: "Claw 智能体工作区引导管理，自动扫描技能目录生成动态路由，注入 AGENTS.md、SOUL.md 等引导文件，支持多技能注册与外部技能路径。",
    links: [
      { platform: "GitHub", url: "https://github.com/legalskill/legalskill/tree/main/skill/claw-agent-workspace", icon: "fab fa-github" },
      { platform: "Gitee", url: "https://gitee.com/legalskill/legalskill/tree/main/skill/claw-agent-workspace", icon: "fas fa-code-branch" },
      { platform: "Qclaw / OpenClaw", url: "#", icon: "fas fa-terminal" }
    ]
  }
];
