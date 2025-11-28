import { motion } from "framer-motion";

export default function ClientProjects() {
  const clientProjects = [
    {
      title: "Business Landing Page",
      description:
        "Designed and developed a modern landing page for a small business client.",
      tech: "React · TailwindCSS",
      caseStudy: "#",
      live: "#",
    },
    {
      title: "E-commerce Product Showcase",
      description:
        "Built a product display interface with responsive UI and animations.",
      tech: "React · API Integration",
      caseStudy: "#",
      live: "#",
    },
    {
      title: "Company Dashboard",
      description:
        "Interactive dashboard with analytics, charts, and user management tools.",
      tech: "React · Recharts · Firebase",
      caseStudy: "#",
      live: "#",
    },

    // ------------------------------------------------
    // ⭐ Add more CLIENT PROJECTS here
    // ------------------------------------------------
  ];

  return (
    <section className="min-h-screen bg-[#0b0c10] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Client Projects
        </h1>
        <p className="text-gray-300 mb-10">
          Professional projects completed for clients and organizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientProjects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-[#141518] rounded-xl border border-[#66fcf1] shadow-md p-6 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h2 className="text-lg font-semibold text-[#66fcf1] mb-2">
                {proj.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

              <p className="text-xs text-gray-400 mb-4">
                Tech: <span className="text-white">{proj.tech}</span>
              </p>

              <div className="flex gap-3 mt-auto">
                <a
                  href={proj.caseStudy}
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90"
                >
                  Case Study
                </a>
                <a
                  href={proj.live}
                  className="px-4 py-2 bg-[#66fcf1] text-black rounded-lg text-sm font-medium hover:opacity-80"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="text-center text-gray-400 text-sm mt-12">
          © 2025 Ethem Deli — Built with care.
        </footer>
      </div>
    </section>
  );
}