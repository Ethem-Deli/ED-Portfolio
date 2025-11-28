import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CV() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("");

  const languages = [
    { name: "English", path: "/cv/English" },
    { name: "Arabic", path: "/cv/Arabic" },
    { name: "Turkish", path: "/cv/Turkish" },
    { name: "Tagalog", path: "/cv/Tagalog" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langPath = e.target.value;
    setSelectedLang(langPath);
    if (langPath) {
      navigate(langPath);
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0c10] text-center px-4">
      {/* Photo */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full border-2 border-[#66fcf1] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Ethem Deli
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-white/70 text-lg mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Developer • Web Designer • App Creator
      </motion.p>

      {/* Language Selection Card */}
      <motion.div
        className="p-8 rounded-2xl border border-[#66fcf1]/40 bg-[#0b0c10]/60 backdrop-blur-xl shadow-lg shadow-[#66fcf1]/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h2 className="text-[#66fcf1] text-xl font-semibold mb-4 flex items-center justify-center gap-2">
          <Globe className="w-5 h-5" /> Select CV Language
        </h2>

        <select
          className="w-48 mx-auto px-4 py-3 bg-[#66fcf1] text-[#0b0c10] font-bold rounded-lg cursor-pointer"
          value={selectedLang}
          onChange={handleChange}
        >
          <option value="">-- Choose Language --</option>
          {languages.map((lang) => (
            <option key={lang.name} value={lang.path}>
              {lang.name}
            </option>
          ))}
        </select>
      </motion.div>
    </div>
  );
}