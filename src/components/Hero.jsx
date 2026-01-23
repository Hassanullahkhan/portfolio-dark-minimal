import { MapPin } from "lucide-react";

const Hero = () => {
  const technologies = [
    "JavaScript",
    "ReactJS",
    "Node",
    "Express",
    "Bootstrap",
    "jQuery",
    "PHP",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Figma",
    "WordPress",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="mt-30 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin size={20} />
            <span className="font-semibold text-xl">Karachi, Pakistan</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold  mb-4 leading-24">
            I'm Hassan Khan Web Developer
          </h1>
          <p
            style={{ color: "var(--text-color)" }}
            className="mb-8 mx-auto text-xl font-semibold"
          >
            I specialize in researching and analyzing your brand and provide you
            a beautiful and effective website for making a digital standing
            among your competitors
          </p>
          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="px-8 py-3 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors">
              Get yours now
            </button>
            <button
              className="px-8 py-3 border bg-black border-gray-600 text-white rounded font-medium hover:bg-gray-800 hover:text-white transition-colors"
              id="/projects"
            >
              See my works
            </button>
          </div>

          <div className="mt-34">
            <h1
              style={{ color: "var(--text-color)" }}
              className="text-md tracking-wider mb-8"
            >
              Technologies I use
            </h1>
          </div>

          <div className="flex flex-wrap gap-6 justify-center max-w-7xl">
            {technologies.map((tech, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded bg-neutral-950 text-gray-300 hover:border-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
