import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function TurkishCV() {
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
            {t("") || "Deneyimlerim"}
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
            Profil Özeti
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 p-8 rounded-2xl border border-[#66fcf1]/20 backdrop-blur-xl shadow-lg shadow-[#66fcf1]/10"
          >
            <p className="text-white/80 leading-relaxed">
              Stok kontrolü, dökümantasyon yönetimi, veri girişi ve operasyonel
              destek alanlarında 11+ yıllık deneyime sahip, detay odaklı Veri ve
              Operasyon Uzmanı. Microsoft Office, SAP, EDMS ve web teknolojilerinde
              yetkin. Güçlü analiz, organizasyon ve iletişim becerilerine sahip;
              Arapça, İngilizce ve Türkçe konuşabilen profesyonel.
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
            Temel Beceriler
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0b0c10]/70 rounded-xl p-6 border border-[#66fcf1]/20"
            >
              <h3 className="text-xl font-semibold text-[#66fcf1] mb-3">
                Teknik & Veri Yönetimi
              </h3>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Microsoft Office Suite</li>
                <li>SAP & EDMS</li>
                <li>Veri Girişi & Doküman Kontrolü</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Teknik Destek & Ağ Sorun Giderme</li>
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
                Operasyon & Analiz
              </h3>
              <ul className="list-disc ml-5 text-white/70 space-y-1">
                <li>Stok ve Envanter Kontrolü</li>
                <li>Talepleri Tahmin Etme</li>
                <li>Kalite Güvencesi</li>
                <li>Veri Doğrulama</li>
                <li>İş Akışı Optimizasyonu</li>
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
            Profesyonel Deneyim
          </motion.h2>

          {[
            {
              role: "Stok Kontrolörü / Depo Müdürü",
              company: "Khonaysser Power Factory",
              date: "Ocak 2022 – Mart 2025",
              tasks: [
                "Stok ve satın alma operasyonlarını yönetmek",
                "Tedarik tahmini yapmak ve stok yenilemek",
                "Lojistik, transfer ve teslimat süreçlerini yönetmek",
                "Tedarik zinciri ve fiyatlandırma raporları hazırlamak",
                "Depo personelini eğitmek ve yönetmek",
              ],
            },
            {
              role: "Satın Alma Görevlisi / Depo Sorumlusu",
              company: "United Food Services",
              date: "Eylül 2020 – Aralık 2021",
              tasks: [
                "Depo ekibini yönetmek ve prosedürlere uyumu sağlamak",
                "Tedarikçilerle iletişim ve SAP güncellemeleri",
                "Stok kontrolü ve raporlama",
                "Depo hijyeni ve ekipman takibi",
              ],
            },
            {
              role: "Kıdemli Doküman Kontrolörü / Veri Giriş Uzmanı",
              company: "Blue Chip Trading",
              date: "Eylül 2016 – Ağustos 2020",
              tasks: [
                "Doküman sıralama, yedekleme ve arşivleme",
                "Yüksek doğrulukla veri girişi",
                "Sözleşme ve teknik dosya yönetimi",
                "Raporlama ve gizlilik sağlama",
              ],
            },
            {
              role: "Veri Giriş Uzmanı",
              company: "RUMCO Trading & Contracting",
              date: "Temmuz 2013 – Temmuz 2016",
              tasks: [
                "Veri girişi ve doğrulama",
                "Hata kontrolü ve veri yedekleme",
                "Rapor hazırlama ve veri güvenliği",
                "Dosya ve bilgi düzeni yönetimi",
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
            Eğitim
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b0c10]/70 p-8 rounded-2xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5"
          >
            <ul className="list-disc ml-6 text-white/70 leading-relaxed space-y-2">
              <li>Yazılım Geliştirme Lisansı – BYU Idaho (Devam ediyor)</li>
              <li>Yazılım Geliştirme Ön Lisans – BYU Idaho (Devam ediyor)</li>
              <li>Sertifika: Web ve Bilgisayar Programlama – Tamamlandı</li>
              <li>Sertifika: Web Geliştirme – Beklenen 2026</li>
              <li>Sertifika: Yazılım Geliştirme – Beklenen 2026</li>
              <li>BYU Pathway Connect – Tamamlandı</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
