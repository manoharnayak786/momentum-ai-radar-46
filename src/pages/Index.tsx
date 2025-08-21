import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Testimonial } from "@/components/Testimonial";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteLayout } from "@/components/SiteLayout";

const Index = () => {
  return (
    <SiteLayout>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <FeatureShowcase />
      <Testimonial />
      <FinalCTA />
    </SiteLayout>
  );
};

export default Index;
