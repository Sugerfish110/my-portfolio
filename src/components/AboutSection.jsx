export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full px-6 md:px-10 lg:px-16 py-20 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* 文案 */}
        <div>
          <header className="mb-8">
            <p className="uppercase tracking-[0.3em] text-sm text-slate-400">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
              关于我
            </h2>
          </header>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
            <span className="block">
              我是黄哲熙，方向是「AI 视频内容设计 / 短视频运营 / 视频剪辑」。
            </span>
            <span className="block">
              我不是只会剪辑的“剪辑师”，而是能把
              <strong className="text-sky-400">
                裸素材/实拍素材 → AI优化 → 后期制作 → 流量投放 → 数据复盘
              </strong>
              这一整条链路跑起来的人。
            </span>
            <span className="block">
              我熟悉常见的 AIGC 视频工具（数字人、语音克隆、脚步生成、AI素材制作）。
            </span>
            <span className="block">
              想找的岗位：<strong className="text-violet-400">
                AI内容设计 / 自媒体内容运营 / 短视频剪辑
              </strong>
              。期望城市优先深圳，薪资区间 6-8K（可商量，重点是成长空间）。
            </span>
          </p>
        </div>

        {/* 信息卡片 */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-8 shadow-xl flex flex-col gap-4 text-sm text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">姓名</span>
            <span className="text-slate-200 font-medium">黄哲熙</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">方向</span>
            <span className="text-slate-200 font-medium">
              AI内容设计 / 短视频运营
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">城市意向</span>
            <span className="text-slate-200 font-medium">深圳优先</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">能力关键词</span>
            <span className="text-slate-200 font-medium text-right">
              数字人 · 剪辑 · Dou+投流 · 流水线搭建
            </span>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-sky-400 font-mono leading-relaxed">
            我希望进入一支愿意尝试 AIGC 的团队，能够把传统业务拓展开来。
          </div>
        </div>
      </div>
    </section>
  );
}
