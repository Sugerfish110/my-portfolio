// NavBar.jsx / .tsx
// 用打包器可解析的方式生成静态资源 URL
const portfolioUrl = new URL("../assets/黄哲熙-AI设计师-作品集附件.pptx", import.meta.url).href;

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F172A]/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-sm text-slate-300">
        {/* Logo / 名片 */}
        <a
          href="#home"
          className="font-semibold text-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-400"
        >
          黄哲熙 · AI 内容设计
        </a>

        {/* 桌面导航 */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="#showcase" className="hover:text-sky-400">
              AI作品
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-sky-400">
              能力
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-400">
              项目
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-sky-400">
              经历
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-400">
              关于我
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400">
              联系
            </a>
          </li>
        </ul>

        {/* 下载作品集 */}
        <a
          href={portfolioUrl}
          download="黄哲熙-作品集.pptx"
          className="text-xs font-medium rounded-xl border border-white/20 bg-gradient-to-r from-sky-500/20 to-violet-500/20 px-3 py-2 text-slate-100 hover:from-sky-500/30 hover:to-violet-500/30"
        >
          查看我的作品集
        </a>
      </nav>
    </header>
  );
}
