// ContactSection.jsx / .tsx
// ⬇️ 按你的文件层级调整相对路径的 ../ 次数
import portfolioUrl from "../assets/黄哲熙-AI设计师-作品集附件.pptx?url";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-10 lg:px-16 py-20 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-fuchsia-500/5 to-violet-600/10 p-8 md:p-10 shadow-[0_40px_120px_-20px_rgba(168,85,247,0.4)]">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
            一起把内容做成产品线
          </h2>

          <p className="text-slate-300 text-base leading-relaxed mt-4 max-w-2xl">
            我可以落地成片、跑账号、搭自动化流程，也能做数据复盘。
            如果你正在搭内容团队 / 私域 / IP / 垂类账号，欢迎直接联系我。
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm text-slate-200">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-slate-500 text-xs uppercase tracking-wide">电话 / 微信</div>
              <div className="text-slate-100 text-lg font-medium mt-1">15627174869 / ab838228</div>
              <div className="text-slate-400 text-xs mt-2">离职待岗中</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-slate-500 text-xs uppercase tracking-wide">邮箱</div>
              <div className="text-slate-100 text-lg font-medium mt-1">872859059</div>
              <div className="text-slate-400 text-xs mt-2">我可以先发给你过往作品、个人作品集、AI视频等</div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={portfolioUrl}
              download="黄哲熙-作品集.pptx"   // 下载时的文件名（可自定义）
              className="inline-block rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-slate-900 font-medium text-sm px-5 py-3 shadow-[0_20px_40px_-10px_rgba(56,189,248,0.5)] hover:brightness-110"
            >
              下载我的个人作品集
            </a>

            <a
              href="#showcase"
              className="inline-block rounded-xl border border-white/20 bg-white/[0.03] text-slate-200 text-sm px-5 py-3 hover:bg-white/[0.06]"
            >
              回到AI作品
            </a>
          </div>
        </div>

        <div className="text-center text-[11px] text-slate-600 mt-10">
          © {new Date().getFullYear()} 黄哲熙 · AI视频/内容设计
        </div>
      </div>
    </section>
  );
}
