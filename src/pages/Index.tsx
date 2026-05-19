import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BenvenuttiSection, BrandStorySection } from '@/components/BrandStorySection';
import { CollectionsSection } from '@/components/CollectionsSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import logoImage from '@/assets/logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="flex justify-center py-12 bg-background">
          <img src={logoImage} alt="Logo" className="h-32 w-auto object-contain" />
        </div>
        <BenvenuttiSection />
        <BrandStorySection />
        <CollectionsSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
