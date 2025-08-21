export const SocialProof = () => {
  const companies = ["Notion", "Figma", "Stripe", "Vercel", "Linear", "Framer"];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 mb-8 tracking-wide uppercase">
            Trusted by Forward-Thinking Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {companies.map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
