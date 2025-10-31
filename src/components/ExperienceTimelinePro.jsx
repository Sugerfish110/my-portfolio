import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ExperienceTimelinePro (enhanced)
 * - 更慢的自动滚动速度
 * - 升级的卡片视觉效果，特别是标签样式
 */

const DEFAULT_ITEMS = [
  { date: "2025.05 – 2025.07", title: "自媒体运营实习生 · 广州市雷赠仑文化发展有限公司", bullet: "数字人朗诵 / AIGC画面 / 剪辑调色 / 投流与数据复盘", tag: "实习 / AI视频" },
  { date: "2025.03 – 2025.05", title: "AI实习生 · 多普印刷设计（深圳）有限公司", bullet: "Coze 自动化：脚本→分镜→剪辑→出片；Python 竞品数据", tag: "自动化 / 数据" },
  { date: "2024.05 – 2024.10", title: "剪辑助理 · 琴音艺术空间", bullet: "宣传视频全流程；抖音/小红书/视频号分发与运营", tag: "剪辑 / 分发" },
  { date: "2023.08 – 2023.12", title: "实习生文员 · 广东省艺术中心书法协会", bullet: "办公室日常、资料录入与数据整理", tag: "信息管理" },
  { date: "2022 – 2025", title: "大数据技术与应用（专科）", bullet: "广东水利电力职业技术学院 · 专排前 30%", tag: "教育" },
  { date: "2024", title: "泰迪杯数据分析大赛 · 三等奖", bullet: "数据分析 / 可视化", tag: "获奖" },
  { date: "2024", title: "数据库系统工程师", bullet: "MySQL / 数据库基础", tag: "证书" },
  { date: "2024", title: "高等学校英语应用能力 A 级", bullet: "英语应用证书（A级）", tag: "证书" },
  { date: "2020", title: "计算机一级证书", bullet: "Office / 办公软件", tag: "证书" },
];

export default function ExperienceTimelinePro({
  items,
  autoSpeed = 0.6,       // 降低自动滚动速度
  className = "",
}) {
  const data = items?.length ? items : DEFAULT_ITEMS;
  const loopData = useMemo(() => [...data, ...data], [data]);

  const railRef = useRef(null);
  const draggingRef = useRef(false);
  const pauseUntilRef = useRef(0);
  const [hovered, setHovered] = useState(false);

  // 自动滚动
  useEffect(() => {
    const el = railRef.current;
    if (!el || !loopData.length) return;

    let raf;
    const tick = () => {
      const now = Date.now();
      const pausedByUser = now < pauseUntilRef.current;
      if (!hovered && !draggingRef.current && !pausedByUser) {
        el.scrollLeft += autoSpeed;
        const half = (el.scrollWidth - el.clientWidth) / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hovered, autoSpeed, loopData.length]);

  // 拖拽（鼠标/触摸）
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    let startX = 0;
    let startLeft = 0;

    const pause = (ms = 1800) => (pauseUntilRef.current = Date.now() + ms);

    const onPointerDown = (e) => {
      draggingRef.current = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.setPointerCapture?.(e.pointerId);
      el.classList.add("cursor-grabbing");
      pause();
    };
    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const delta = e.clientX - startX;
      el.scrollLeft = startLeft - delta * 1.1;
    };
    const onPointerUp = (e) => {
      draggingRef.current = false;
      el.releasePointerCapture?.(e.pointerId);
      el.classList.remove("cursor-grabbing");
      pause();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove, { passive: false });
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("mouseleave", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("mouseleave", onPointerUp);
    };
  }, []);

  // PC 滚轮：纵向 -> 横向
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        pauseUntilRef.current = Date.now() + 1200;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className={`w-full px-6 md:px-10 lg:px-16 py-16 bg-[#0F172A] ${className}`}>
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-slate-400 mb-2">TIMELINE</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
            工作经历与专业证书
          </h2>
        </header>

        <div className="relative">
          {/* 增强的渐隐遮罩 */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/95 to-transparent z-10" />

          {/* 装饰性中轴线 */}
          <div className="pointer-events-none absolute left-0 right-0 top-[calc(50%+80px)] h-0.5 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-violet-500/30 to-fuchsia-500/10 blur-[1px]" />
          </div>

          <div
            ref={railRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
              flex gap-8
              overflow-x-auto overflow-y-visible
              pb-8 pr-4
              select-none cursor-grab
              no-scrollbar
              relative
            "
            style={{ WebkitOverflowScrolling: "touch" }}
            aria-roledescription="水平时间线"
          >
            {loopData.map((it, i) => (
              <Card key={`${it.title}-${i}`} it={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ it }) {
  return (
    <article
      role="listitem"
      className="snap-start shrink-0 w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] relative group"
    >
      {/* 连接点指示器 */}
      <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-lg shadow-sky-400/25 z-20 group-hover:scale-125 transition-transform duration-300" />
      <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-sky-400 animate-ping opacity-60 z-10" />

      <div
        className="
          relative rounded-2xl border border-white/15 bg-white/[0.035] backdrop-blur-xl
          p-6 md:p-7
          h-[260px] md:h-[270px]
          flex flex-col
          transition-all duration-300 will-change-transform
          group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:z-20
          shadow-[0_8px_32px_-8px_rgba(56,189,248,0.25)]
          group-hover:shadow-[0_20px_60px_-12px_rgba(124,58,237,0.4)]
          overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-sky-500/10 before:via-transparent before:to-violet-600/10
          before:opacity-60 group-hover:before:opacity-80 before:transition-opacity before:duration-300
        "
      >
        {/* 顶部光泽效果 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400/50 via-white/20 to-violet-400/50 rounded-t-2xl" />
        
        {/* 底部光泽效果 */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-400/60 via-fuchsia-400/30 to-violet-500/60 opacity-70 rounded-b-2xl" />

        {/* 悬浮光晕效果 */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 via-purple-500/3 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex flex-col h-full z-10">
          {/* 日期行 */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="flex w-2 h-2">
              <span className="animate-ping absolute inline-flex w-2 h-2 rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-sky-400" />
            </span>
            <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">{it.date}</span>
          </div>

          {/* 标题 */}
          <h3
            className="
              text-lg md:text-xl font-bold leading-tight
              bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-violet-300
              [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden
              mb-3
            "
          >
            {it.title}
          </h3>

          {/* 正文描述 */}
          <p
            className="
              text-sm md:text-[15px] leading-relaxed text-slate-300/90
              [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden
              mb-6 flex-grow
            "
          >
            {it.bullet}
          </p>

          {/* 增强的标签样式 */}
          <div className="mt-auto">
            <div
              className="
                inline-flex items-center px-4 py-2 rounded-2xl
                bg-gradient-to-r from-sky-500/20 to-violet-500/20
                border border-sky-400/30 border-b-violet-400/30
                backdrop-blur-sm
                text-xs font-semibold text-sky-100
                shadow-lg shadow-sky-500/10
                group-hover:shadow-sky-500/20 group-hover:border-sky-400/50
                group-hover:scale-105
                transition-all duration-300
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-500/10 before:to-violet-500/10 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300
              "
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                {it.tag}
              </span>
            </div>
          </div>
        </div>

        {/* 卡片边角装饰 */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-400/30 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-violet-400/30 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-sky-400/20 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400/20 rounded-br-2xl" />
      </div>
    </article>
  );
}