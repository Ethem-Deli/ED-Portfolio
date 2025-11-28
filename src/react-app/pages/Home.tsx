import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Code2, Database, Wrench, Terminal, Palette, Smartphone, Server, Cloud, GitBranch, Cpu } from 'lucide-react';
import SkillCard from '@/react-app/components/SkillCard';

export default function Home() {
  const { t } = useTranslation();

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
              className="text-2xl sm:text-3xl text-[#66fcf1]/80 font-semibold mb-6">
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
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#66fcf1] to-[#45a29e] rounded-lg font-semibold text-[#0b0c10] shadow-lg shadow-[#66fcf1]/50 hover:shadow-[#66fcf1]/70 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>{t('hero.downloadCV')}</span>
              </motion.a>

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
