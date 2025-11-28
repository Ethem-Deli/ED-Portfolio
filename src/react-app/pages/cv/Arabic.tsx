import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ArabicCV() {
  const {  } = useTranslation();

  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0c10] pt-24">
      {/* Title Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 bg-[#0b0c10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#66fcf1] to-[#45a29e] text-transparent bg-clip-text mb-4">
            خبرتي المهنية
          </h1>
          <div className="w-28 h-1 mx-auto bg-gradient-to-r from-[#66fcf1] to-[#45a29e] rounded-full" />
        </motion.div>
      </section>

      {/* Profile Summary */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-4"
          >
            الملخص المهني
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 p-8 rounded-2xl border border-[#66fcf1]/20 backdrop-blur-xl shadow-lg shadow-[#66fcf1]/10"
          >
            <p className="text-white/80 leading-relaxed">
              متخصص دقيق ومنظم في إدارة البيانات والعمليات مع أكثر من 11 سنة من
              الخبرة في ضبط المخزون، وإدارة الوثائق، وإدخال البيانات، ودعم
              العمليات. متمكن من Microsoft Office و SAP و EDMS، إضافة إلى مهارات
              في تقنيات الويب. أمتلك قدرات تحليلية وتنظيمية عالية، ومهارات اتصال
              ممتازة، وأتحدث العربية والإنجليزية والتركية بطلاقة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-6"
          >
            المهارات الأساسية
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b0c10]/70 rounded-xl p-6 border border-[#66fcf1]/20"
            >
              <h3 className="text-xl font-semibold text-[#66fcf1] mb-3">
                المهارات التقنية وإدارة البيانات
              </h3>
              <ul className="list-disc mr-5 text-white/70 space-y-1">
                <li>Microsoft Office Suite</li>
                <li>SAP و EDMS</li>
                <li>إدخال البيانات وإدارة الوثائق</li>
                <li>HTML, CSS, JavaScript</li>
                <li>استكشاف الأخطاء وإصلاحها</li>
              </ul>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b0c10]/70 rounded-xl p-6 border border-[#66fcf1]/20"
            >
              <h3 className="text-xl font-semibold text-[#66fcf1] mb-3">
                العمليات والتحليل
              </h3>
              <ul className="list-disc mr-5 text-white/70 space-y-1">
                <li>مراقبة وإدارة المخزون</li>
                <li>توقع الطلب وتحسين العمليات</li>
                <li>مراقبة الجودة والتحقق من البيانات</li>
                <li>تطوير التقارير وتحليل البيانات</li>
                <li>تحسين سير العمل ورفع الكفاءة</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#0b0c10]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-8"
          >
            الخبرة العملية
          </motion.h2>

          {[
            {
              role: "مشرف المخزون / مدير المستودع",
              company: "Khonaysser Power Factory",
              date: "يناير 2022 – مارس 2025",
              tasks: [
                "إدارة عمليات المخزون والشراء",
                "توقع الاحتياجات وتجديد المخزون",
                "تنسيق عمليات النقل والتسليم",
                "إعداد تقارير وتحليلات سلاسل الإمداد",
                "تدريب وإدارة فريق العمل",
              ],
            },
            {
              role: "مسؤول مشتريات / أمين مستودع",
              company: "United Food Services",
              date: "سبتمبر 2020 – ديسمبر 2021",
              tasks: [
                "إدارة فريق المستودع وضمان الامتثال",
                "التنسيق مع الموردين وتحديث SAP",
                "التحقق من المخزون وإعداد التقارير",
                "الإشراف على السلامة ونظافة المستودع",
              ],
            },
            {
              role: "مسؤول توثيق / مدخل بيانات",
              company: "Blue Chip Trading",
              date: "سبتمبر 2016 – أغسطس 2020",
              tasks: [
                "إدارة المستندات والنسخ الاحتياطي والأرشفة",
                "إدخال البيانات بدقة عالية",
                "إدارة العقود والقوالب والوثائق الفنية",
                "إعداد التقارير وضمان سرية المعلومات",
              ],
            },
            {
              role: "مدخل بيانات",
              company: "RUMCO Trading & Contracting",
              date: "يوليو 2013 – يوليو 2016",
              tasks: [
                "إدخال البيانات والتحقق من دقتها",
                "تصحيح الأخطاء وتنفيذ النسخ الاحتياطي",
                "إعداد التقارير وضمان سلامة البيانات",
                "إدارة الملفات والوثائق الحساسة",
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

              <ul className="list-disc mr-6 text-white/70 space-y-1">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#66fcf1] mb-8"
          >
            التعليم
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b0c10]/70 p-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
          >
            <ul className="list-disc mr-6 text-white/70 leading-relaxed space-y-2">
              <li>بكالوريوس تطوير البرمجيات – جامعة BYU Idaho (قيد الدراسة)</li>
              <li>دبلوم تطوير البرمجيات – جامعة BYU Idaho (قيد الدراسة)</li>
              <li>شهادة: البرمجة وتطوير الويب – مُنجزة</li>
              <li>شهادة: تطوير الويب – متوقع 2026</li>
              <li>شهادة: تطوير البرمجيات – متوقع 2026</li>
              <li>برنامج BYU Pathway – مُنجز</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
