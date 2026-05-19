import { getExperiences, getProfile, getSkills } from '@/app/composition';
import { About } from '@/app/presentation/components/About';
import { Experience } from '@/app/presentation/components/Experience';
import { Footer } from '@/app/presentation/components/Footer';
import { Header } from '@/app/presentation/components/Header';
import { Hero } from '@/app/presentation/components/Hero';
import { Skills } from '@/app/presentation/components/Skills';

export default async function Page() {
  const [profile, experiences, skills] = await Promise.all([
    getProfile.execute(),
    getExperiences.execute(),
    getSkills.execute(),
  ]);

  return (
    <div className="bg-white text-zinc-900 font-sans">
      <Header siteName={profile.name} />
      <main>
        <Hero name={profile.name} tagline={profile.tagline} />
        <About profile={profile} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
