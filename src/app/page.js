import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className='container mx-auto mt-4 px-12 py-4'>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
