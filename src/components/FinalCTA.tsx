import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Ready to Take the Momentum?
        </h2>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4 h-auto"
        >
          Start Your 14-Day Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
