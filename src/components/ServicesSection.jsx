export const ServicesSection = () => {
  const services = [
    {
      title: "AI Strategy",
      description:
        "Unlock the full potential of artificial intelligence. We work with your leadership to define an actionable AI roadmap, aligning cutting-edge technologies with real business value. Whether you're starting from scratch or scaling your efforts, our strategic insight ensures you're always ahead of the curve.",
    },
    {
      title: "Autonomous Agent Development",
      description:
        "Agents that think, decide, and act — so you don’t have to. We design, build, and deploy autonomous AI agents that can perform complex tasks, make real-time decisions, and self-optimize without human intervention. Boost efficiency, cut costs, and elevate customer experience.",
    },
    {
      title: "Enterprise AI Consulting",
      description:
        "Not just advice — transformation. We help enterprises integrate AI into their operations, from workflows and analytics to automation and optimization. Our consultants are seasoned experts who speak both tech and business fluently, ensuring seamless integration and tangible ROI.",
    },
    {
      title: "Chatbot & Conversational AI",
      description:
        "Say goodbye to basic bots. Our intelligent chatbots provide 24/7 support, sales automation, lead generation, and personalized interaction across platforms. Built on powerful LLMs and customized for your brand, they never sleep — but they always learn.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-primary text-glow">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card p-8 rounded-lg glow-border hover:shadow-lg hover:cursor transition duration-300"

            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">🔹</span> {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
