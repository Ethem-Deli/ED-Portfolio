import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
// Web & Computer Programming
import CSE111 from "@/assets/images/CSE-111.png";
import CSE210 from "@/assets/images/CSE-210.png";
import CSE110 from "@/assets/images/CSE-110.png";
import GS170 from "@/assets/images/GS-170.png";
import WDD130 from "@/assets/images/WDD-130.png";
import WDD131 from "@/assets/images/WDD-131.png";
import WDD231 from "@/assets/images/WDD-231.png";

// Web Development
import CSE341 from "@/assets/images/CSE-341.png";
import WDD330 from "@/assets/images/WDD-330.png";
import WDD0330 from "@/assets/images/WDD-330-1.png";
import WDD430 from "@/assets/images/WDD-430.png";
import CSE340 from "@/assets/images/CSE-340.png";
import ITM111 from "@/assets/images/ITM-111.png";
import Nextjs from "@/assets/images/nextjs.png";

// Software Development
import CSE212 from "@/assets/images/CSE-212.png";
import CSE270 from "@/assets/images/CSE-270.png";
import CSE310 from "@/assets/images/CSE-310.png";
import CSE370 from "@/assets/images/CSE-370.png";
import CSE325 from "@/assets/images/CSE-325.png";
import CSE300 from "@/assets/images/CSE-300.png";

// Other
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
  outcomes: string[];
};

// HELPERS

const extractCourseCode = (title: string): string => {
  // Finds: CSE-111, WDD430, BUSPC-115, MATH-108X, CYBER-340, ITM111, etc.
  const match = title.match(/([A-Z]{2,6})-?(\d{3})([A-Z])?/);
  if (!match) return "";

  const prefix = match[1];
  const num = match[2];
  const suffix = match[3] ?? "";

  // normalize: WDD430 -> WDD-430
  return `${prefix}-${num}${suffix}`;
};

const extractPrefix = (title: string): string => {
  const code = extractCourseCode(title);
  if (!code) return title.split(" ")[0]; // fallback
  return code.split("-")[0]; // CSE, WDD, BUSPC, etc.
};

// SKILL GENERATION
const generateSkills = (title: string) => {
  const prefix = extractPrefix(title);

  if (prefix === "CSE") return ["Programming", "Software"];
  if (prefix === "WDD") return ["Web Development", "Frontend"];
  if (prefix === "ITM") return ["Database", "SQL"];
  if (prefix === "BUS" || prefix === "BUSPC") return ["Business", "Office"];
  if (prefix === "MATH") return ["Math", "Excel"];
  if (prefix === "CYBER") return ["Networking", "Security"];
  if (prefix === "GS") return ["Career", "Professional"];
  return ["General"];
};

// ✅ OUTCOMES GENERATION (for ALL courses)
const generateOutcomes = (title: string): string[] => {
  const code = extractCourseCode(title);
  const prefix = extractPrefix(title);

  const courseOutcomeMap: Record<string, string[]> = {
    "CSE-111": [
      "Write and call functions to accomplish meaningful tasks.",
      "Research and use functions written by others.",
      "Detect and recover from invalid program conditions.",
      "Debug and test programs using structured techniques.",
    ],
    "CSE-210": [
      "Design object-oriented programs using classes.",
      "Apply abstraction and encapsulation principles.",
      "Organize code into reusable components.",
    ],
    "CSE-110": [
      "Apply core programming concepts to solve problems.",
      "Use variables, conditionals, and loops effectively.",
    ],
    "CSE-212": [
      "Implement fundamental data structures.",
      "Analyze algorithm efficiency and performance.",
    ],
    "CSE-270": [
      "Develop and execute automated software tests.",
      "Apply unit and integration testing strategies.",
    ],
    "CSE-310": [
      "Solve advanced applied programming problems.",
      "Design solutions using appropriate programming techniques.",
    ],
    "CSE-340": [
      "Develop backend systems using server-side programming.",
      "Integrate databases with backend applications.",
    ],
    "CSE-341": [
      "Design and consume RESTful web services.",
      "Implement API-based architectures.",
    ],
    "CSE-370": [
      "Apply software engineering principles.",
      "Collaborate using professional development practices.",
    ],
    "CSE-325": [
      "Develop applications using C# and .NET.",
      "Apply enterprise-level development practices.",
    ],
    "CSE-300": [
      "Demonstrate professional readiness skills.",
      "Apply ethical and communication principles.",
    ],
    "WDD-130": [
      "Create structured HTML documents.",
      "Apply CSS for layout, styling, and accessibility.",
    ],
    "WDD-131": [
      "Build interactive web pages using JavaScript.",
      "Manipulate the DOM dynamically.",
    ],
    "WDD-231": [
      "Design responsive web layouts.",
      "Apply frontend best practices.",
    ],
    "WDD-330": [
      "Build data-driven frontend applications.",
      "Consume APIs using modern JavaScript.",
    ],
    "WDD-430": [
      "Develop full-stack web applications.",
      "Integrate frontend and backend systems.",
    ],
    "ITM-111": [
      "Design relational database schemas.",
      "Write SQL queries to manipulate data.",
    ],
    "BUSPC-115": [
      "Use spreadsheets for business decision-making.",
      "Analyze and summarize business data.",
    ],
    "MATH-108X": [
      "Apply mathematics to real-world problems.",
      "Use Excel to model and analyze data.",
    ],
    "CYBER-340": [
      "Design and analyze network architectures.",
      "Apply networking and security principles.",
    ],
    "GS-170": [
      "Develop career goals and professional plans.",
      "Create resumes and professional documents.",
    ],
  };

  // ✅ Exact course match first
  if (courseOutcomeMap[code]) {
    return courseOutcomeMap[code];
  }

  // 🔁 Fallback (your original logic, unchanged)
  if (prefix === "CSE") {
    return [
      "Write programs to solve meaningful problems using appropriate programming constructs.",
      "Use functions/classes/modules to create clean, reusable, and maintainable code.",
      "Debug and test programs using good software development practices.",
      "Use libraries/tools written by others and follow documentation effectively.",
    ];
  }

  if (prefix === "WDD") {
    return [
      "Build responsive, accessible, and user-friendly web interfaces.",
      "Use modern JavaScript patterns and frontend architecture best practices.",
      "Integrate and consume APIs to power dynamic web applications.",
      "Apply usability, performance, and maintainability principles in web projects.",
    ];
  }

  if (prefix === "ITM") {
    return [
      "Design and query relational databases using SQL.",
      "Organize, analyze, and interpret data to support decisions.",
      "Apply database fundamentals such as tables, keys, relationships, and normalization.",
    ];
  }

  if (prefix === "BUS" || prefix === "BUSPC") {
    return [
      "Use spreadsheets to support informed decision-making in business scenarios.",
      "Organize, analyze, interpret, summarize, and communicate relevant data.",
      "Demonstrate practical use of business productivity tools.",
    ];
  }

  if (prefix === "MATH") {
    return [
      "Apply mathematical reasoning to real-world scenarios.",
      "Model and analyze data using spreadsheets.",
      "Interpret results and communicate conclusions clearly.",
    ];
  }

  if (prefix === "CYBER") {
    return [
      "Design and analyze basic network architectures.",
      "Apply networking concepts to practical scenarios.",
      "Identify common security considerations.",
    ];
  }

  if (prefix === "GS") {
    return [
      "Develop career readiness through professional planning.",
      "Improve workplace communication skills.",
    ];
  }

  return ["Demonstrate subject-specific knowledge and skills."];
};


// PROJECTS

const baseProjects = [
  {
    title: "CSE-111 — Programming with Functions",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
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
    title: "WDD-330 — Web Frontend Development II",
    description: "Advanced frontend frameworks and patterns.",
    img: WDD0330,
    grade: "A",
    credit: 3,
    live: "https://ethem-deli.github.io/WDD330-Project-Deli/",
    path: "https://casestudylink.com",
  },
  {
    title: "WDD-430 — Web Full-Stack Development",
    description: "End-to-end full-stack applications.",
    img: WDD430,
    grade: "A",
    credit: 3,
    live: "https://team4-handcrafted-haven.onrender.com/",
    path: "https://casestudylink.com",
  },
  {
    title: "Nextjs — WDD430 - Web Full-Stack Development",
    description: "End-to-end full-stack applications.",
    img: Nextjs,
    grade: "A",
    credit: 3,
    live: "https://nextjs-dashboard-eta-lemon-95.vercel.app/",
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
    title: "BUSPC-115 — Business Applications",
    description:
      "Applied business software tools including spreadsheets, documents, and presentations.",
    img: BUSPC115,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "CYBER-340 — Network Design",
    description:
      "Designed and analyzed computer networks aligned with CompTIA networking concepts.",
    img: CYBER340,
    grade: "B",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
  {
    title: "MATH-108X — Math for the Real World",
    description:
      "Applied mathematics with real-world problem solving and an Excel-based project.",
    img: MATH108X,
    grade: "A",
    credit: 3,
    live: "https://www.livelink.com",
    path: "https://casestudylink.com",
  },
];

// Create final projects WITH outcomes for all courses
const projects: Project[] = baseProjects.map((p) => ({
  ...p,
  outcomes: generateOutcomes(p.title),
}));

// Sort by technical strength: CSE > WDD > ITM > BUS/BUSPC > MATH > CYBER > GS > others
const sortedProjects = [...projects].sort((a, b) => {
  const order = ["CSE", "WDD", "ITM", "BUS", "BUSPC", "MATH", "CYBER", "GS"];
  const aPrefix = extractPrefix(a.title);
  const bPrefix = extractPrefix(b.title);

  const ai = order.indexOf(aPrefix);
  const bi = order.indexOf(bPrefix);

  // Unknown prefixes go to the end
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});

export default function SchoolProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  useEffect(() => {
  if (activeIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [activeIndex]);

  const activeProject = activeIndex !== null ? sortedProjects[activeIndex] : null;

  const next = () => {
    setZoom(1);
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % sortedProjects.length));
  };

  const prev = () => {
    setZoom(1);
    setActiveIndex((i) =>
      i === null ? sortedProjects.length - 1 : (i - 1 + sortedProjects.length) % sortedProjects.length
    );
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
          const isExcel = extractCourseCode(project.title) === "MATH-108X";

          return (
            <motion.div
              key={index}
              className={`bg-[#1a1b1f] border rounded-xl p-5 hover:scale-105 transition relative ${
                isExcel ? "border-yellow-400 shadow-lg" : "border-[#45a29e]"
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
  className="
    bg-[#1a1b1f]
    border border-[#66fcf1]
    rounded-xl
    max-w-4xl
    w-full
    p-6
    relative

    max-h-[90vh]
    overflow-y-auto

    sm:max-h-[85vh]
    md:max-h-[80vh]
  "
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
              <h2 className="text-2xl text-[#66fcf1] font-bold mb-2">
                {activeProject.title}
              </h2>

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
                  className="max-h-[55vh] object-contain cursor-grab"
                  style={{ scale: zoom }}
                  drag
                  dragElastic={0.2}
                />
              </div>

              {/* ✅ OUTCOMES */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#66fcf1] mb-2">
                  Course Learning Outcomes
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {activeProject.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>

              {/* CONTROLS */}
              <div className="flex justify-between items-center mt-4">
                <button onClick={prev} className="text-[#66fcf1]">
                  ⬅ Prev
                </button>

                <div className="flex gap-3 text-white">
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
