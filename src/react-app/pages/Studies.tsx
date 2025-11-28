import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Studies() {
  const { t } = useTranslation();

  const studiesList = [
    {
      degree: t("studies.bachelor"),
      school: t("studies.school1"),
      year: "2019 - 2023",
    },
    {
      degree: t("studies.master"),
      school: t("studies.school2"),
      year: "2023 - 2025",
    },
    {
      degree: t("studies.certification"),
      school: t("studies.institute"),
      year: "2022",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#1f1f1f] text-white min-h-screen">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("studies.title")}
      </motion.h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {studiesList.map((study, index) => (
          <motion.div
            key={index}
            className="p-6 bg-[#0b0c10] rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{study.degree}</h3>
            <p className="text-gray-400">{study.school}</p>
            <p className="text-gray-500">{study.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
