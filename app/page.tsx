import { getProfile, getProjects, getSkills } from '@/app/composition';
import { About } from '@/app/presentation/components/About';
import { Footer } from '@/app/presentation/components/Footer';
import { Header } from '@/app/presentation/components/Header';
import { Hero } from '@/app/presentation/components/Hero';
import { Projects } from '@/app/presentation/components/Projects';
import { Skills } from '@/app/presentation/components/Skills';

export default async function Page() {
  const [profile, projects, skills] = await Promise.all([
    getProfile.execute(),
    getProjects.execute(),
    getSkills.execute(),
  ]);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <Header siteName={profile.name} />
      <main>
        <Hero name={profile.name} headline={profile.headline} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
