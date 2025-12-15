import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
// Web & Computer Programming
import CSE111 from "@/assets/images/CSE-111.png";
import CSE210 from "@/assets/images/CSE-210.png";
import CSE110 from "@/assets/images/CSE-110.png";
import GS170 from  "@/assets/images/GS-170.png" ;
import WDD130 from "@/assets/images/WDD-130.png";
import WDD131 from "@/assets/images/WDD-131.png";
import WDD231 from "@/assets/images/WDD-231.png";

// Web Development
import CSE341 from "@/assets/images/CSE-341.png";
import WDD330 from "@/assets/images/WDD-330.png";
import WDD430 from "@/assets/images/WDD-430.png";
import CSE340 from "@/assets/images/CSE-340.png";
import ITM111 from "@/assets/images/ITM-111.png";

// Software Development
import CSE212 from "@/assets/images/CSE-212.png";
import CSE270 from "@/assets/images/CSE-270.png";
import CSE310 from "@/assets/images/CSE-310.png";
import CSE370 from "@/assets/images/CSE-370.png";
import CSE325 from "@/assets/images/CSE-325.png";
import CSE300 from "@/assets/images/CSE-300.png";

import GESCI110 from "@/assets/images/GESCI-110.png";
import ART101 from "@/assets/images/ART-101.png";
import FAML160 from "@/assets/images/FAML-160.png";
import PUBH132 from "@/assets/images/PUBH-132.png";
import WRIT101 from "@/assets/images/WRIT-101.png";
import BUS301 from "@/assets/images/BUS-301.png";
import BUSPC115 from "@/assets/images/BUSPC-115.png";
import CYBER340 from "@/assets/images/CYBER-340.png";
import MATH108X from "@/assets/images/MATH-108X.png";

// TYPES
type Project = {
  title: string;
  description: string;
  img: string;
  grade: string;
  credit: number;
  live: string;
  path: string;
};

// SKILL GENERATION
const generateSkills = (title: string) => {
  if (title.startsWith("CSE")) return ["Programming", "Software"];
  if (title.startsWith("WDD")) return ["Web Development", "Frontend"];
  if (title.startsWith("ITM")) return ["Database", "SQL"];
  if (title.startsWith("BUS") || title.startsWith("BUSPC")) return ["Business", "Office"];
  if (title.startsWith("MATH")) return ["Math", "Excel"];
  return ["General"];
};

// PROJECTS
const projects: Project[] = [
  {
    title: "CSE-111 — Programming with Functions",
    description: "Developed modular programming solutions using functions.",
    img: CSE111,
    grade: "A*",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-210 — Programming with Classes",
    description: "Built object-oriented applications using classes.",
    img: CSE210,
    grade: "A*",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-110 — Introduction to Programming",
    description: "Learned core programming fundamentals.",
    img: CSE110,
    grade: "A",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "GS-170 — Career Development",
    description: "Professional readiness and career planning.",
    img: GS170,
    grade: "A*",
    credit: 1,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-130 — Web Fundamentals",
    description: "HTML, CSS, and accessibility basics.",
    img: WDD130,
    grade: "C+",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-131 — Dynamic Web Fundamentals",
    description: "Interactive JavaScript-based applications.",
    img: WDD131,
    grade: "A*",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-231 — Web Frontend Development I",
    description: "Responsive frontend design techniques.",
    img: WDD231,
    grade: "A-",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-341 — Web Services",
    description: "RESTful APIs and backend integration.",
    img: CSE341,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-330 — Web Frontend Development II",
    description: "Advanced frontend frameworks and patterns.",
    img: WDD330,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-430 — Web Full-Stack Development",
    description: "End-to-end full-stack applications.",
    img: WDD430,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-340 — Web Backend Development",
    description: "Backend architecture and database integration.",
    img: CSE340,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "ITM-111 — Introduction to Databases",
    description: "SQL queries and relational database design.",
    img: ITM111,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-212 — Programming with Data Structures",
    description: "Core data structures and algorithms.",
    img: CSE212,
    grade: "A*",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-270 — Software Testing",
    description: "Unit, integration, and automation testing.",
    img: CSE270,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-310 — Applied Programming",
    description: "Advanced applied programming techniques.",
    img: CSE310,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-370 — Software Engineering Principles",
    description: "Software design patterns and teamwork.",
    img: CSE370,
    grade: "A",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-325 — .NET Software Development",
    description: "Enterprise development with C# and .NET.",
    img: CSE325,
    grade: "In Progress",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CSE-300 — Professional Readiness",
    description: "Professional skills, ethics, and communication.",
    img: CSE300,
    grade: "In Progress",
    credit: 1,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "GESCI-110 — Sustaining Human Life",
    description: "Natural science course exploring principles related to sustaining human life.",
    img: GESCI110,
    grade: "Future",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "ART-101 — History of the Fine Arts",
    description: "Study of major artistic movements and historical visual culture.",
    img: ART101,
    grade: "Future",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "FAML-160 — Family Relations",
    description: "Examines family relationships, development, and social interaction.",
    img: FAML160,
    grade: "Future",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "PUBH-132 — Personal Health & Wellness",
    description: "Focuses on personal health, wellness, and lifestyle choices.",
    img: PUBH132,
    grade: "Future",
    credit: 2,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "WRIT-101 — Writing in Professional Contexts",
    description: "Develops professional and workplace writing skills.",
    img: WRIT101,
    grade: "Future",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "BUS-301 — Advanced Writing in Professional Contexts",
    description: "Advanced techniques for professional and business writing.",
    img: BUS301,
    grade: "Future",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "BUSPC-115 — Business Applications",
    description: "Applied business software tools including spreadsheets, documents, and presentations.",
    img: BUSPC115,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CYBER-340 — Network Design",
    description: "Designed and analyzed computer networks aligned with CompTIA networking concepts.",
    img: CYBER340,
    grade: "B",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "MATH-108X — Math for the Real World",
    description: "Applied mathematics with real-world problem solving and an Excel-based project.",
    img: MATH108X,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
];

// Sort by technical strength: CSE > WDD > ITM > BUS > MATH > others
const sortedProjects = [...projects].sort((a, b) => {
  const order = ["CSE", "WDD", "ITM", "BUS", "MATH", "GS", "ART", "FAML", "PUBH", "WRIT"];
  const aPrefix = a.title.split("-")[0];
  const bPrefix = b.title.split("-")[0];
  return order.indexOf(aPrefix) - order.indexOf(bPrefix);
});

export default function SchoolProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  const activeProject = activeIndex !== null ? sortedProjects[activeIndex] : null;

  const next = () => {
    setZoom(1);
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % sortedProjects.length));
  };

  const prev = () => {
    setZoom(1);
    setActiveIndex((i) => (i === null ? sortedProjects.length - 1 : (i - 1 + sortedProjects.length) % sortedProjects.length));
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] pt-28 pb-20 px-4 md:px-10">
      <h1 className="text-center text-5xl text-[#66fcf1] font-bold mb-12">
        School Projects
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sortedProjects.map((project, index) => {
          const skills = generateSkills(project.title);
          const isExcel = project.title.includes("MATH-108X"); // Highlight Excel project
          return (
            <motion.div
              key={index}
              className={`bg-[#1a1b1f] border border-[#45a29e] rounded-xl p-5 hover:scale-105 transition relative ${
                isExcel ? "border-yellow-400 shadow-lg" : ""
              }`}
            >
              <div
                className={`h-48 border rounded-lg cursor-pointer ${
                  isExcel ? "border-yellow-400" : "border-[#66fcf1]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <h3 className="text-[#66fcf1] text-xl font-semibold mt-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mt-2">{project.description}</p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-[#0b0c10] border border-[#45a29e] text-[#66fcf1] cursor-pointer"
                    whileHover={{ scale: 1.2, backgroundColor: "#66fcf1", color: "#000" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="bg-[#1a1b1f] border border-[#66fcf1] rounded-xl max-w-4xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
            >
              {/* CLOSE */}
              <button
                className="absolute top-3 right-3 text-[#66fcf1] text-xl"
                onClick={() => setActiveIndex(null)}
              >
                ✕
              </button>

              {/* TITLE */}
              <h2 className="text-2xl text-[#66fcf1] font-bold mb-2">{activeProject.title}</h2>

              {/* META */}
              <div className="flex gap-6 text-gray-300 mb-2">
                <span>
                  Grade: <strong className="text-[#66fcf1]">{activeProject.grade}</strong>
                </span>
                <span>
                  Credit: <strong className="text-[#66fcf1]">{activeProject.credit}</strong>
                </span>
              </div>

              {/* LINKS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66fcf1] underline hover:text-yellow-400"
                >
                  🔗 Live
                </a>
                <a
                  href={activeProject.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66fcf1] underline hover:text-yellow-400"
                >
                  📄 Case Study
                </a>
              </div>

              {/* IMAGE */}
              <div className="overflow-hidden border border-[#45a29e] rounded-lg bg-black flex justify-center">
                <motion.img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="max-h-[70vh] object-contain cursor-grab"
                  style={{ scale: zoom }}
                  drag
                  dragElastic={0.2}
                />
              </div>

              {/* CONTROLS */}
              <div className="flex justify-between items-center mt-4">
                <button onClick={prev} className="text-[#66fcf1]">
                  ⬅ Prev
                </button>

                <div className="flex gap-3">
                  <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))}>➖</button>
                  <button onClick={() => setZoom((z) => Math.min(3, z + 0.2))}>➕</button>
                </div>

                <button onClick={next} className="text-[#66fcf1]">
                  Next ➡
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
