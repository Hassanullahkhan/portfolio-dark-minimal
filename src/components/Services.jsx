import { Monitor, Server, Pen, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Front-End Dev",
      description:
        "Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.",
    },
    {
      icon: Server,
      title: "Back-End Dev",
      description:
        "I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run seamlessly and efficiently.",
    },
    {
      icon: Pen,
      title: "UI/UX Design",
      description:
        "I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user behavior, accessibility, and aesthetics to deliver a polished digital experience.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Slow websites lose visitors! I enhance website performance with code optimization, caching strategies, and SEO measures to ensure the best possible user experience and search rankings.",
    },
  ];

  return (
    <section id="services" className="w-8/12 mx-auto py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              style={{
                color: "var(--text-color)",
              }}
              className="text-5xl font-bold text-white mb-6"
            >
              My Services
            </h2>
            <p
              style={{
                color: "var(--text-color)",
              }}
              className="text-white text-lg mb-8 leading-relaxed"
            >
              Explore my range of services designed to go beyond aesthetics. I
              craft visually appealing and fully functional websites tailored to
              your business needs and goals.
            </p>
            <button className="mx-auto px-12 py-3 dark:bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 border-b border-gray-400/50 transition-colors"
              >
                <div className="shrink-0">
                  <div className="w-6 flex items-center justify-center bg-gray-700/50 rounded-lg">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      color: "var(--text-color)",
                    }}
                    className="text-4xl font-semibold text-white mb-3"
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-color)",
                    }}
                  className="text-xl text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
