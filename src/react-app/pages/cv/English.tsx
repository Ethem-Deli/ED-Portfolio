import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function EnglishCV() {
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
            {t("") || "My Experience"}
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
            Profile Summary
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 p-8 rounded-2xl border border-[#66fcf1]/20 backdrop-blur-xl shadow-lg shadow-[#66fcf1]/10"
          >
            <p className="text-white/80 leading-relaxed">
              Detail-oriented Data Management & Operations Specialist with 11+
              years of experience in inventory control, document management,
              data entry, and operational support. Skilled in Microsoft Office,
              SAP, EDMS, and web technologies. Strong analytical, organizational,
              and communication abilities with multilingual proficiency.
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
            Key Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category */}
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
                <li>Troubleshooting & Networking</li>
              </ul>
            </motion.div>

            {/* Category */}
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
                <li>Inventory & Stock Control</li>
                <li>Demand Forecasting</li>
                <li>Quality Assurance</li>
                <li>Data Validation</li>
                <li>Workflow Automation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-8"
          >
            Professional Experience
          </motion.h2>

          {/* Experience Cards */}
          {[
            {
              role: "Inventory Controller / Store Manager",
              company: "Khonaysser Power Factory",
              date: "Jan 2022 – Mar 2025",
              tasks: [
                "Managed inventory and purchasing operations",
                "Forecasted supply and replenished stock",
                "Oversaw logistics, stock transfers, delivery coordination",
                "Generated supply chain and pricing reports",
                "Trained and supervised store staff",
              ],
            },
            {
              role: "Purchasing Officer / Storekeeper",
              company: "United Food Services",
              date: "Sep 2020 – Dec 2021",
              tasks: [
                "Managed store team and ensured compliance",
                "Handled supplier coordination & SAP bookings",
                "Performed inventory checks and reporting",
                "Oversaw warehouse hygiene and equipment",
              ],
            },
            {
              role: "Senior Document Controller / Data Encoder",
              company: "Blue Chip Trading",
              date: "Sep 2016 – Aug 2020",
              tasks: [
                "Handled document sorting, backups, storage",
                "Entered and validated data with high accuracy",
                "Managed contracts, templates, and technical files",
                "Generated reports and maintained confidentiality",
              ],
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/50 p-6 mb-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
            >
              <h3 className="text-2xl font-semibold text-[#66fcf1]">
                {job.role}
              </h3>
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
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b0c10]/70 p-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
          >
            <ul className="list-disc ml-6 text-white/70 leading-relaxed space-y-2">
              <li>BSc Software Development – BYU Idaho (Ongoing)</li>
              <li>Associate Degree in Software Development – BYU Idaho (Ongoing)</li>
              <li>Certificate: Web & Computer Programming – Awarded</li>
              <li>Certificate: Web Development – Expected 2026</li>
              <li>Certificate: Software Development – Expected 2026</li>
              <li>BYU Pathway Connect – Completed</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
