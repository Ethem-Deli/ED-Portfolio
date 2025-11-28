import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, Database, Wrench, Terminal, Palette, Smartphone, Server, Cloud, GitBranch, Cpu, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import SkillCard from '@/react-app/components/SkillCard';
import cvData from '@/react-app/data/cv-data.json';

// TypeScript interfaces for the CV data
interface CVExperience {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface CVEducation {
  degree: string;
  institution: string;
  year: string;
}

interface CVContent {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: CVExperience[];
  education: CVEducation[];
  skills: string[];
}

interface CVData {
  en: CVContent;
  ar: CVContent;
  tr: CVContent;
  tl: CVContent;
}

interface Language {
  code: keyof CVData;
  name: string;
  flag: string;
}

export default function Home() {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<keyof CVData>('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' }
  ];

  const frontendSkills = [
    { name: 'React', icon: Code2 },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Next.js', icon: Code2 },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Responsive Design', icon: Smartphone },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'REST APIs', icon: Cloud },
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: GitBranch },
    { name: 'VS Code', icon: Terminal },
    { name: 'Docker', icon: Cloud },
    { name: 'Linux', icon: Cpu },
    { name: 'Figma', icon: Wrench },
  ];

  const generateCV = async (lang: keyof CVData) => {
    try {
      const cvContent = (cvData as CVData)[lang];
      const selectedLang = languages.find(l => l.code === lang);
      
      if (!selectedLang) {
        alert('Language not found');
        return;
      }

      // simulate the download
      alert(`Downloading CV in ${selectedLang.name}...`);
      
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      // Add profile picture
      const imgData = '/path/to/your/profile-picture.jpg';
      doc.addImage(imgData, 'JPEG', 15, 15, 30, 30);
      
      // CV content
      doc.setFontSize(20);
      doc.text(cvContent.name, 60, 25);
      doc.setFontSize(14);
      doc.text(cvContent.title, 60, 35);
      doc.text(cvContent.email, 60, 45);
      doc.text(cvContent.phone, 60, 55);
      doc.text(cvContent.location, 60, 65);
      
      // Add more sections...
      
      doc.save(`CV_${cvContent.name}_${lang}.pdf`);
      
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Error generating CV. Please try again.');
    }
  };

  const handleLanguageSelect = (lang: keyof CVData) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    generateCV(lang);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#66fcf1]/5 via-transparent to-[#45a27e]/35" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#66fcf1]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#45a29e]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-animated-gradient">
                {t('hero.name')}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl text-[#66fcf1]/80 font-semibold mb-6"
            >
              <span className="text-animated-gradient">
                {t('hero.subtitle')}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
            >
              {t('hero.profession')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Download CV with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] rounded-lg font-semibold text-[#0b0c10] shadow-lg shadow-[#66fcf1]/50 hover:shadow-[#66fcf1]/70 transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>{t('hero.downloadCV')}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </motion.button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#1f2833] border border-[#66fcf1]/20 rounded-lg shadow-2xl shadow-[#66fcf1]/10 backdrop-blur-lg z-50"
                  >
                    <div className="p-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language.code)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-3 ${
                            selectedLanguage === language.code
                              ? 'bg-[#66fcf1]/20 text-[#66fcf1]'
                              : 'text-white/80 hover:bg-[#66fcf1]/10 hover:text-[#66fcf1]'
                          }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="font-medium">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-[#66fcf1] rounded-lg font-semibold text-[#66fcf1] hover:bg-[#66fcf1]/10 transition-all duration-300 flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{t('hero.viewProjects')}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#66fcf1]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#66fcf1] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b0c10] to-[#0b0c10]/95">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#66fcf1] to-[#45a29e] bg-clip-text text-transparent mb-4">
              {t('skills.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] mx-auto rounded-full" />
          </motion.div>

          {/* Frontend Skills */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3"
            >
              <div className="w-2 h-8 bg-gradient-to-b from-[#66fcf1] to-[#45a29e] rounded-full" />
              <span>{t('skills.frontend')}</span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3"
            >
              <div className="w-2 h-8 bg-gradient-to-b from-[#66fcf1] to-[#45a29e] rounded-full" />
              <span>{t('skills.backend')}</span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 flex items-center space-x-3"
            >
              <div className="w-2 h-8 bg-gradient-to-b from-[#66fcf1] to-[#45a29e] rounded-full" />
              <span>{t('skills.tools')}</span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {toolsSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b0c10]/95 to-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#66fcf1] to-[#45a29e] bg-clip-text text-transparent mb-4">
              {t('summary.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 backdrop-blur-lg p-8 sm:p-12 rounded-2xl border border-[#66fcf1]/20 shadow-2xl shadow-[#66fcf1]/10"
          >
            <p className="text-lg text-white/80 leading-relaxed text-center">
              {t('summary.description')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}