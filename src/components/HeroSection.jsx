// src/components/HeroSection.jsx
import demoVideo from "../assets/001.mp4";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#0F172A] pt-28 pb-16 px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 文案区 */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-slate-400">AI-Driven Content</p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-4 text-slate-100">
            我做<span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500"> AI视频、数字人内容、后期制作</span>，并把流程做成可复用的“生产线”
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            · 数字人朗诵短视频（含声音、口型、角色一致性）<br/>
            · “火柴人心理故事”全自动生成流水线<br/>
            · AIGC/有自媒体账户运营，Tiktok跨境电商视频创作经验<br/>
            · 熟悉剪映 / 达芬奇 / Coze / Midjourney / Comfyui
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#showcase" className="inline-block rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-slate-900 font-medium text-sm px-5 py-3 shadow-[0_20px_40px_-10px_rgba(56,189,248,0.5)] hover:brightness-110">
              查看AI作品
            </a>
            <a href="#contact" className="inline-block rounded-xl border border-white/20 bg-white/[0.03] text-slate-200 text-sm px-5 py-3 hover:bg-white/[0.06]">
              我可以帮你做什么？
            </a>
          </div>
        </div>

        {/* 视频预览（作品DEMO位） */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={demoVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          {/* 霓虹边框发光 */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-sky-400/40 blur-[4px] opacity-60" />
        </div>
      </div>
    </section>
  );
}
