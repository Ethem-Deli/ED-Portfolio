import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function TagalogCV() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0b0c10] pt-24">
      
      {/* Title Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-[#0b0c10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#66fcf1] to-[#45a29e] text-transparent bg-clip-text mb-4">
             {t("") || "Aking Karanasan"}
          </h1>
          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-[#66fcf1] to-[#45a29e] rounded-full" />
        </motion.div>
      </section>

      {/* Profile Summary */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-4"
          >
            Buod ng Profile
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 p-8 rounded-2xl border border-[#66fcf1]/20 backdrop-blur-xl shadow-lg shadow-[#66fcf1]/10"
          >
            <p className="text-white/80 leading-relaxed">
              Isang masinop at may karanasan sa Data Management at Operations
              Specialist na may higit 11 taon ng karanasan sa inventory control,
              document management, data entry, at operational support.
              Sanay sa Microsoft Office, SAP, EDMS at web technologies.
              May malakas na analytical, organizational, at communication skills
              at marunong sa maraming wika.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-6"
          >
            Pangunahing Kasanayan
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b0c10]/70 rounded-xl p-6 border border-[#66fcf1]/20"
            >
              <h3 className="text-xl font-semibold text-[#66fcf1] mb-3">
                Technical & Data Management
              </h3>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Microsoft Office Suite</li>
                <li>SAP & EDMS</li>
                <li>Data Entry & Document Control</li>
                <li>HTML, CSS, JavaScript</li>
                <li>IT Troubleshooting & Networking</li>
              </ul>
            </motion.div>

            {/* Operations Skills */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b0c10]/70 rounded-xl p-6 border border-[#66fcf1]/20"
            >
              <h3 className="text-xl font-semibold text-[#66fcf1] mb-3">
                Operations & Analysis
              </h3>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Inventory at Stock Control</li>
                <li>Demand Forecasting</li>
                <li>Quality Assurance</li>
                <li>Data Validation</li>
                <li>Workflow Optimization</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-8"
          >
            Propesyonal na Karanasan
          </motion.h2>

          {[
            {
              role: "Inventory Controller / Store Manager",
              company: "Khonaysser Power Factory",
              date: "Ene 2022 – Mar 2025",
              tasks: [
                "Nangasiwa sa inventory at purchasing operations",
                "Nag-forecast ng supply at nagreplenish ng stock",
                "Nag-manage ng logistics, stock transfer at deliveries",
                "Gumawa ng supply chain at pricing reports",
                "Nagsanay at nag-supervise ng store staff",
              ],
            },
            {
              role: "Purchasing Officer / Storekeeper",
              company: "United Food Services",
              date: "Set 2020 – Dis 2021",
              tasks: [
                "Nag-manage ng store team at nagpanatili ng compliance",
                "Nangasiwa sa suppliers at SAP bookings",
                "Nagsagawa ng inventory checking at reporting",
                "Nagpanatili ng warehouse hygiene at equipment",
              ],
            },
            {
              role: "Senior Document Controller / Data Encoder",
              company: "Blue Chip Trading",
              date: "Set 2016 – Ago 2020",
              tasks: [
                "Nag-ayos, nag-backup at nag-store ng documents",
                "Nag-enter ng data nang may mataas na accuracy",
                "Nag-manage ng contracts at technical files",
                "Gumawa ng reports habang pinapanatili ang confidentiality",
              ],
            },
            {
              role: "Data Encoder",
              company: "RUMCO Trading & Contracting",
              date: "Hul 2013 – Hul 2016",
              tasks: [
                "Data entry at validation",
                "Error checking at data backup",
                "Pagbuo ng reports at data security",
                "Pag-manage ng file organization",
              ],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 p-6 mb-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
            >
              <h3 className="text-2xl font-semibold text-[#66fcf1]">{job.role}</h3>
              <p className="text-white/50 italic">{job.company}</p>
              <p className="text-white/40 text-sm mb-4">{job.date}</p>

              <ul className="list-disc ml-6 text-white/70 space-y-1">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-8"
          >
            Edukasyon
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b0c10]/70 p-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
          >
            <ul className="list-disc ml-6 text-white/70 leading-relaxed space-y-2">
              <li>Bachelor’s in Software Development – BYU Idaho (Nagpapatuloy)</li>
              <li>Associate Degree in Software Development – BYU Idaho (Nagpapatuloy)</li>
              <li>Sertipiko: Web & Computer Programming – Natapos</li>
              <li>Sertipiko: Web Development – Inaasahan 2026</li>
              <li>Sertipiko: Software Development – Inaasahan 2026</li>
              <li>BYU Pathway Connect – Nakumpleto</li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
