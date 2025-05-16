import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-6xl font-bold mb-8 text-center space-y-1">
      <span className="block">
        About <span className="text-primary text-glow">RankWare</span>
      </span>
    </h2>

    <p className="text-center text-glow max-w-3xl mx-auto text-muted-foreground text-5xl mb-16 leading-relaxed">
      RankWare is a next-gen AI agency that empowers businesses to automate intelligently and transform customer experiences.
    </p>

    {/* Rest of the AboutSection content */}
  </div>
</section>



  );
};
