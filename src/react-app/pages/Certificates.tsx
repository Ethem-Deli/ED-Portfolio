import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Certificate images
import CERT1 from "@/assets/images/cert1.png";
import CERT2 from "@/assets/images/cert2.png";
import CERT3 from "@/assets/images/cert3.png";
import CERT4 from "@/assets/images/cert4.png";
import CERT5 from "@/assets/images/cert5.png";
import CERT6 from "@/assets/images/cert6.png";
import CERT7 from "@/assets/images/cert7.png";
import CERT8 from "@/assets/images/cert8.png";
import CERT9 from "@/assets/images/cert9.png";
import CERT10 from "@/assets/images/cert10.png";

type Certificate = {
  title: string;
  img: string;
  description?: string;
  issuer?: string;
  date?: string;
  skills?: string[];
};

export default function Certificates() {
  const { t } = useTranslation();

  const certificates: Certificate[] = [
    {
      title: "Certificate 1",
      img: CERT1,
      issuer: "BYU-Idaho",
      date: "Jan 2024",
      skills: ["JavaScript", "React"],
    },
    {
      title: "Certificate 2",
      img: CERT2,
      issuer: "CompTIA",
      date: "Feb 2024",
      skills: ["Networking", "Subnetting"],
    },
    {
      title: "Certificate 3",
      img: CERT3,
      issuer: "Coursera",
      date: "Mar 2024",
      skills: ["Excel", "Data Analysis"],
    },
    { title: "Certificate 4", img: CERT4 },
    { title: "Certificate 5", img: CERT5 },
    { title: "Certificate 6", img: CERT6 },
    { title: "Certificate 7", img: CERT7 },
    { title: "Certificate 8", img: CERT8 },
    { title: "Certificate 9", img: CERT9 },
    { title: "Certificate 10", img: CERT10 },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const prevCertificate = () =>
    setActiveIndex(
      (prev) => (prev !== null ? (prev - 1 + certificates.length) % certificates.length : null)
    );
  const nextCertificate = () =>
    setActiveIndex((prev) => (prev !== null ? (prev + 1) % certificates.length : null));

  return (
    <div className="min-h-screen bg-[#0b0c10] pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#66fcf1] mb-8">{t("nav.certificates")}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1b1f] border border-[#45a29e] rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-[0_0_20px_#66fcf1] transition-all duration-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(index)}
            >
              <div className="w-full h-48 bg-[#0b0c10] rounded-lg overflow-hidden flex items-center justify-center border border-[#66fcf1] mb-4">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200/1a1b1f/66fcf1?text=Image+Not+Found";
                  }}
                />
              </div>

              <h3 className="text-xl font-semibold text-[#66fcf1] text-center">{cert.title}</h3>
              {cert.description && (
                <p className="text-gray-300 text-sm mt-2 text-center">{cert.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-[#66fcf1] text-3xl font-bold z-50"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <TransformWrapper>
                  <TransformComponent>
                    <img
                      src={certificates[activeIndex].img}
                      alt={certificates[activeIndex].title}
                      className="max-h-[70vh] mx-auto object-contain"
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>

              <div className="mt-4 text-center text-white/80">
                <h2 className="text-2xl font-bold text-[#66fcf1]">
                  {certificates[activeIndex].title}
                </h2>
                {certificates[activeIndex].description && (
                  <p className="mt-2">{certificates[activeIndex].description}</p>
                )}

                {certificates[activeIndex].issuer && (
                  <p className="mt-1 text-sm text-gray-400">
                    Issued by: <span className="text-[#66fcf1]">{certificates[activeIndex].issuer}</span>
                  </p>
                )}
                {certificates[activeIndex].date && (
                  <p className="text-sm text-gray-400">
                    Completion date: <span className="text-[#66fcf1]">{certificates[activeIndex].date}</span>
                  </p>
                )}

                {certificates[activeIndex].skills && (
                  <div className="flex flex-wrap gap-2 mt-3 justify-center">
                    {certificates[activeIndex].skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-[#0b0c10] border border-[#45a29e] text-[#66fcf1]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 left-4 text-4xl cursor-pointer text-[#66fcf1]"
                onClick={prevCertificate}
              >
                &#10094;
              </div>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-4 text-4xl cursor-pointer text-[#66fcf1]"
                onClick={nextCertificate}
              >
                &#10095;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
