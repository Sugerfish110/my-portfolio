import React, { useState } from "react";

// ⬇️ 生成静态资源路径
const createAssetUrl = (filename) => new URL(`../assets/${filename}`, import.meta.url).href;

// 视频资源
const videos = {
  v001: createAssetUrl("001.mp4"),
  v002: createAssetUrl("002.mp4"),
  // ✅ 改为外链地址（喵宫）
  v003: "https://www.bilibili.com/video/BV1GL1NBmE3J?vd_source=2c012f082821ca93b20adb333ab8ce6c",
  v004: createAssetUrl("004.mp4"),
  v005: createAssetUrl("005.mp4"),
  v006: createAssetUrl("006.mp4"),
};

// 图片资源
const images = {
  i001: createAssetUrl("001.jpg"),
  i002: createAssetUrl("002.png"),
  i003: createAssetUrl("003.png"),
  i004: createAssetUrl("004.png"),
  i005: createAssetUrl("005.png"),
  i006: createAssetUrl("006.png"),
};

export default function ShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const cards = [
    {
      title: "AI概念艺术宣传片-雪碧",
      desc: "用AI制作的雪碧概念艺术短片，采用大量切镜、主体替换等技巧，由简到繁，注重节奏卡点与画面艺术呈现。",
      tags: ["即梦", "Nanobanna", "剪映", "达芬奇", "Topza video AI"],
      videoUrl: videos.v001,
      coverClass: "bg-gradient-to-br from-blue-500/20 to-purple-600/20",
      thumbnail: images.i001,
    },
    {
      title: "AI宣传片-皇家古法口红",
      desc: "以古代背景为题，讲述古法口红的制作工艺与文化传承，融合AI影像与叙事风格。",
      tags: ["即梦", "可灵", "剪映", "海螺AI", "Topza video AI"],
      videoUrl: videos.v002,
      coverClass: "bg-gradient-to-br from-green-500/20 to-cyan-600/20",
      thumbnail: images.i002,
    },
    {
      title: "AI艺术短片-喵宫",
      desc: "以“喵”为主题的艺术短片，背景为古代皇宫，讲述宫廷盛宴——喵粮的制作工艺，风格夸张细腻。",
      tags: ["即梦", "海螺AI", "剪映", "达芬奇", "Topza video AI"],
      videoUrl: videos.v003, // ✅ 外链
      coverClass: "bg-gradient-to-br from-orange-500/20 to-red-600/20",
      thumbnail: images.i003,
    },
    {
      title: "AI宣传片-国台龙酒",
      desc: "国台龙酒AI宣传片，以传统工艺与现代视觉融合，打造沉浸式品牌印象。",
      tags: ["Midjourney", "Stable Diffusion", "即梦", "Comfyui"],
      videoUrl: videos.v004,
      coverClass: "bg-gradient-to-br from-pink-500/20 to-rose-600/20",
      thumbnail: images.i004,
    },
    {
      title: "AI概念艺术短片-香水",
      desc: "香水概念艺术短片，运用首尾帧衔接打造丝滑转场与梦境般的光影。",
      tags: ["即梦", "首尾帧", "剪映", "可灵", "Topza video AI"],
      videoUrl: videos.v005,
      coverClass: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20",
      thumbnail: images.i005,
    },
    {
      title: "AI宣传片-迈凯伦",
      desc: "迈凯伦AI宣传片，结合AE与PS分解设计，展示高性能机械美学。",
      tags: ["AE", "PS", "剪映", "可灵", "即梦", "Topza video AI"],
      videoUrl: videos.v006,
      coverClass: "bg-gradient-to-br from-indigo-500/20 to-blue-600/20",
      thumbnail: images.i006,
    },
  ];

  // 点击卡片时：若为外链则新开标签页，否则打开模态框
  const openVideo = (videoUrl, title) => {
    if (videoUrl.startsWith("http") && !videoUrl.endsWith(".mp4")) {
      window.open(videoUrl, "_blank", "noopener,noreferrer"); // ✅ 外链跳转
    } else {
      setSelectedVideo({ url: videoUrl, title });
    }
  };

  const closeVideo = () => setSelectedVideo(null);

  return (
    <section id="showcase" className="relative w-full px-6 md:px-10 lg:px-16 py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-slate-400 mb-3">
            PORTFOLIO SHOWCASE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
            AI 代表作品
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            不只是“会工具”，更是“能交付成片 + 视频落地”的实战能力展示
          </p>
        </header>

        {/* 第一组 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-200 mb-8 text-center">核心创作项目</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {cards.slice(0, 3).map((card, i) => (
              <ShowcaseCard key={i} card={card} onCardClick={openVideo} />
            ))}
          </div>
        </div>

        {/* 第二组 */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.slice(3, 6).map((card, i) => (
            <ShowcaseCard key={i + 3} card={card} onCardClick={openVideo} />
          ))}
        </div>
      </div>

      {/* 本地视频模态框 */}
      {selectedVideo && <VideoModal video={selectedVideo} onClose={closeVideo} />}
    </section>
  );
}

function ShowcaseCard({ card, onCardClick }) {
  const isImageUrl = typeof card.thumbnail === "string" && card.thumbnail.startsWith("http");

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
      onClick={() => onCardClick(card.videoUrl, card.title)}
    >
      <div className={`relative h-48 ${card.coverClass} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          {isImageUrl ? (
            <img
              src={card.thumbnail}
              alt={card.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
            />
          ) : (
            <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
              {card.thumbnail}
            </div>
          )}
        </div>

        {/* 悬浮播放按钮 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium whitespace-nowrap">
              点击播放视频
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-slate-300/90 leading-relaxed mb-4 flex-grow">{card.desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {card.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-slate-800/60 text-slate-200 backdrop-blur-sm hover:bg-slate-700/60 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-sky-400 font-mono opacity-80 group-hover:opacity-100 transition-opacity">
            点击查看完整案例
          </span>
          <svg
            className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transform group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 via-purple-500/3 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sky-400/70 via-fuchsia-400/40 to-violet-500/70 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}

// ✅ 本地视频专用模态框
function VideoModal({ video, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-800/50">
          <h3 className="text-xl font-bold text-white">{video.title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-red-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="aspect-video bg-black">
          <video controls autoPlay className="w-full h-full" onEnded={onClose}>
            <source src={video.url} type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>

        <div className="p-6 bg-slate-800/30 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">视频演示 - 按 ESC 或关闭按钮退出</span>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              关闭视频
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
}
