
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Testimonial } from "@/components/Testimonial";
import { FinalCTA } from "@/components/FinalCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <FeatureShowcase />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
