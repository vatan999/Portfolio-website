import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  Navbar,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
