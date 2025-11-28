import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// School project images
import CSE110 from "@/assets/images/CSE-110.png";
import CSE111 from "@/assets/images/CSE-111.png";
import CSE210 from "@/assets/images/CSE-210.png";
import CSE310 from "@/assets/images/CSE-310.png";

export default function SchoolProjects() {
  const projects = [
    {
      title: "CSE-110 — Intro to Programming",
      description:
        "Learned programming fundamentals using Python, logic, and error control structures.",
      img: CSE110,
      grade: "A-",
      credit: 2,
      live: "#",
      path: "/projects/school/cse110",
    },
    {
      title: "CSE-111 — Programming with Functions",
      description:
        "Developed modular programming and software solutions using functions.",
      img: CSE111,
      grade: "A",
      credit: 3,
      live: "#",
      path: "/projects/school/cse111",
    },
    {
      title: "CSE-210 — Programming with Classes",
      description:
        "Built class-based applications, OOP principles, and data structure usage.",
      img: CSE210,
      grade: "A",
      credit: 2,
      live: "#",
      path: "/projects/school/cse210",
    },
    {
      title: "CSE-310 — Applied Programming 1",
      description:
        "Learned advanced software development skills through applied projects.",
      img: CSE310,
      grade: "A",
      credit: 3,
      live: "#",
      path: "/projects/school/cse310",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] flex flex-col">
      <main className="flex-grow pt-28 pb-20 px-4 md:px-10">
        
        {/* PAGE TITLE */}
        <motion.h1
          className="text-center text-4xl md:text-5xl text-[#66fcf1] font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          School Projects
        </motion.h1>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1b1f] border border-[#45a29e] rounded-xl p-5 flex flex-col shadow-md hover:shadow-[0_0_20px_#66fcf1] transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* IMAGE */}
              <div className="w-full h-48 bg-[#0b0c10] rounded-lg flex items-center justify-center overflow-hidden border border-[#66fcf1] mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x200/1a1b1f/66fcf1?text=Image+Not+Found';
                  }}
                />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-xl font-semibold text-[#66fcf1] mt-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 flex-grow">
                {project.description}
              </p>

              {/* GRADE + CREDIT */}
              <div className="mt-3 flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  Grade: <span className="text-[#66fcf1] font-semibold">{project.grade}</span>
                </span>
                <span className="text-gray-400 text-sm">
                  Credit: <span className="text-[#66fcf1] font-semibold">{project.credit}</span>
                </span>
              </div>

              {/* BUTTONS */}
              <div className="mt-4 flex gap-3">
                <Link
                  to={project.path}
                  className="flex-1 px-4 py-2 bg-[#66fcf1] text-black font-semibold rounded-lg hover:bg-[#45a29e] transition-all text-center"
                >
                  Case Study
                </Link>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-[#66fcf1] text-[#66fcf1] rounded-lg hover:bg-[#66fcf1] hover:text-black transition-all text-center"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EMPTY STATE - Just In case if projects array is empty */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl text-[#66fcf1] mb-4">No Projects Found</h2>
            <p className="text-gray-400">Check back later for school projects.</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}