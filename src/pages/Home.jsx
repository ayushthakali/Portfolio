import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Skills from "@/components/Skills";
import ExperienceSnapshot from "@/components/ExperienceSnapshot";
import ContactCta from "@/components/ContactCta";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Skills index="02" tone="muted" />
      <ExperienceSnapshot />
      <ContactCta />
    </>
  );
}

export default Home;
