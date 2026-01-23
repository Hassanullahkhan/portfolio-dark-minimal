import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 bg-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-600 to-gray-700">
                <User size={120} className="text-gray-500" />
              </div>
            </div>
          </div>

          <div
            style={{
              color: "var(--text-color)",
            }}
          >
            <h2 className="text-4xl font-bold  mb-6">
              I am Rakesh, a full stack web developer and a programmer working
              remotely in my home at Dhaka, Bangladesh
            </h2>

            <div
              className="space-y-4 text-gray-600 leading-relaxed"
              style={{
                color: "var(--text-color)",
              }}
            >
              <p>
                I've spent the last 3+ years learning and working across
                different areas of development: front-end development, back-end
                development, UI/UX design and currently working for Monipuri
                School and College Science Club as a Web Developer.
              </p>

              <p>
                These days my time is spent researching, designing, building
                websites, and coding. I also love to learn and experiment with
                new new things.
              </p>
            </div>

            <button className="mt-8 px-8 py-3 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
