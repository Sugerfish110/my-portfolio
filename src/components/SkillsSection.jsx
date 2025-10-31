export default function SkillsSection() {
  const values = [
    {
      title: "短视频可落地",
      desc: "不仅是demo或概念稿，而是能上抖音/视频号/小红书跑数据的成品。",
    },
    {
      title: "模板思维/降本增效",
      desc: "习惯把内容产线做成『流程 → 模板 → 素材库』，而不是每条都零手工剪。",
    },
    {
      title: "前沿AI技术应用",
      desc: "关注前沿AI技术应用的发展与应用，将技术运用到现有业务环节进行优化和解耦",
    },
    {
      title: "沟通+执行",
      desc: "我能跟老板/甲方/老师沟通需求，也能自己亲手把片子剪完并交付。",
    },
  ];

  const stack = [
    {
      cat: "AI & 生成",
      items: ["Midjourney", "Stable Diffusion", "Comfyui", "Sora2"],
    },
    {
      cat: "流程自动化",
      items: ["Coze（脚本到成片流水线）", "Python爬取竞品数据", "智能客服答疑"],
    },
    {
      cat: "剪辑 & 包装",
      items: ["剪映", "达芬奇", "字幕/节奏/封面模板化"],
    },
    {
      cat: "投放 & 复盘",
      items: ["Dou+/投流基础操作", "数据记录与复盘节奏", "内容改版建议"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full px-6 md:px-10 lg:px-16 py-20 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* 左列：我能解决什么问题 */}
        <div>
          <header className="mb-8">
            <p className="uppercase tracking-[0.3em] text-sm text-slate-400">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
              我带来的价值
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              改革陈新，降本增效，紧跟时代发展趋势。
            </p>
          </header>

          <ul className="space-y-6">
            {values.map((v, i) => (
              <li
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_40px_-10px_rgba(56,189,248,0.15)]"
              >
                <div className="text-lg font-medium text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-400">
                  {v.title}
                </div>
                <div className="text-slate-300 text-sm mt-2 leading-relaxed">
                  {v.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 右列：工具栈 */}
        <div>
          <header className="mb-8">
            <p className="uppercase tracking-[0.3em] text-sm text-slate-400">
              Stack
            </p>
            <h3 className="text-2xl font-semibold text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
              我熟悉的工具
            </h3>
          </header>

          <div className="grid gap-6">
            {stack.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  {s.cat}
                </div>
                <div className="text-slate-400 text-sm leading-relaxed mt-2">
                  {s.items.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
