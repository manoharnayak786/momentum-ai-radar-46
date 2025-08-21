import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
          <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
            "Momentum AI changed the game for us. I went from spending 80% of my
            time searching for ideas to 80% of my time engaging with our
            community on content I knew would perform. It's like having a
            brilliant strategist on my team."
          </blockquote>
          <cite className="text-lg text-gray-600">
            — Sarah J., Head of Social,{" "}
            <span className="font-medium">TechFlow</span>
          </cite>
        </div>
      </div>
    </section>
  );
};
