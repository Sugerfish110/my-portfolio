export default function ProjectsSection() {
  const projects = [
    {
      title: "项目一：银发人群朗诵账号 / 数字人内容",
      time: "2025.05 – 2025.07",
      points: [
        "为银发群体做“诗歌朗诵”内容：包括AI视频脚步策划、AI素材生成、后期制作、账户运营等。",
        "参与抖音/视频号的内容上架与基础投流（Dou+），并根据数据做复盘，优化话题角度与封面。",
        "制作数字人形象，：包括人物形象设定、音色克隆、对口型等。",
      ],
      highlight: "说明我能把AI生成的视频真正落地到目标用户群体里跑播放量和互动。",
    },
    {
      title: "项目二：火柴人心理短视频流水线",
      time: "2025.03 – 2025.05",
      points: [
        "用 Coze 组了一条自动化流水线：脚本生成 → 分镜拆解 → 语音 → 画面拼接 → 批量导出成片。",
        "让短视频账号可以做到“日更甚至多更”，而且不依赖大量手工剪辑。",
        "顺手用 Python 去抓同类账号的数据（选题、完播、点赞结构），做竞品分析和定价建议。",
      ],
      highlight:
        "说明我不只是剪视频，而是会把内容生产工业化：标准模板 + 自动化工具 + 数据回流。",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full px-6 md:px-10 lg:px-16 py-20 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-slate-400">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
            实战项目
          </h2>
          <p className="mt-3 text-slate-400 max-w-3xl">
            这些都是我亲手做的，而不是PPT案例。
          </p>
        </header>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <header className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                <h3 className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-400">
                  {p.title}
                </h3>
                <div className="text-slate-400">·</div>
                <div className="text-sm md:text-base text-slate-400 font-mono">
                  {p.time}
                </div>
              </header>

              <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-300/90 leading-relaxed">
                {p.points.map((item, idx2) => (
                  <li key={idx2} className="pl-3">
                    <span className="mr-2 text-slate-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 text-xs text-sky-400 font-mono">
                {p.highlight}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
