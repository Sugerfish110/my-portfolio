import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ShowcaseSection from "./components/ShowcaseSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ExperienceTimelinePro from "./components/ExperienceTimelinePro";

export default function App() {
  return (
    <div className="bg-[#0F172A] text-slate-200 scroll-smooth">
      <NavBar />

      <main className="flex flex-col">
        <HeroSection />
        <ShowcaseSection />
        <ExperienceTimelinePro />
        <SkillsSection />
        <ProjectsSection />

        {/* 工作经历时间轴（已经在画布中写好样式） */}
        <section id="experience">
          <ExperienceTimeline />
        </section>

        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
