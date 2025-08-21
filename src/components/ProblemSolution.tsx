import { Lightbulb, Clock, Zap } from "lucide-react";

export const ProblemSolution = () => {
  const solutions = [
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: "Tired of the Blank Page?",
      description:
        "Say goodbye to creative burnout. Our AI learns your brand's unique voice and visual style by training on your best content. It generates an endless stream of authentic ideas and drafts that sound and look like you.",
    },
    {
      icon: <Zap className="h-8 w-8 text-teal-500" />,
      title: "Feeling a Step Behind?",
      description:
        "Stop chasing trends and start setting them. The Opportunity Feed is your strategic radar, bringing breaking news, competitor moves, and viral conversations directly to your dashboard before they peak.",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Stuck in the Workflow Weeds?",
      description:
        "Collapse your workflow from hours to minutes. Go from a real-time insight to a fully-drafted, multi-platform post in a single click with our integrated Campaign Canvas. No more juggling tabs.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
