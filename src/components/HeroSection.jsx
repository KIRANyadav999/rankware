import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight space-y-2">
            <span className="block opacity-0 text-glow animate-fade-in">
              We Don’t Follow the Future -
            </span>
            <span className="block text-primary text-glow opacity-0 animate-fade-in-delay-1">
              We Build It.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            AI Strategy · Autonomous Agents · Enterprise Consulting · Smart
            Chatbots
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://cal.com/rankware-eopgp9"
              className="cosmic-button bg-[#1e3a8a] hover:bg-[#1e40af] glow-borderr text-white font-semibold py-3 px-6 rounded-4xl transition duration-300 shadow-md hover:shadow-lg"
            >
              Schedule a Quick Call!
            </a>
            <div className="text-lg md:text-xl text-muted-foreground text-glow max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-4">
              <span className="">It's free</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
