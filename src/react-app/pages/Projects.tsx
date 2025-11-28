import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// School project images
import CSE110 from "@/assets/images/CSE-110.png";
import CSE111 from "@/assets/images/CSE-111.png";
import CSE210 from "@/assets/images/CSE-210.png";

// Personal project images (add your actual images)
import PortfolioImg from "@/assets/images/personal/portfolio.png";
import AppImg from "@/assets/images/personal/app.png";
import GameImg from "@/assets/images/personal/game.png";

// Client project images (add your actual images)
import Website1Img from "@/assets/images/client/website1.png";
import DashboardImg from "@/assets/images/client/dashboard.png";
import MobileImg from "@/assets/images/client/mobile.png";

export default function Projects() {
  const projectCategories = [
    {
      title: "School Projects",
      link: "/projects/school-projects",
      images: [CSE110, CSE111, CSE210], // Use imported images, not strings
    },
    {
      title: "Personal Projects",
      link: "/projects/personal-projects",
      images: [PortfolioImg, AppImg, GameImg], // Use imported images
    },
    {
      title: "Client Projects",
      link: "/projects/client-projects",
      images: [Website1Img, DashboardImg, MobileImg], // Use imported images
    },
  ];

  const [indexes, setIndexes] = useState<number[]>(
    projectCategories.map(() => 0)
  );

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  // auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((current) =>
        current.map((idx, i) => (idx + 1) % projectCategories[i].images.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const openModal = (images: string[], startIndex: number) => {
    setModalImages(images);
    setModalIndex(startIndex);
    setModalOpen(true);
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setModalIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-6 flex flex-col gap-8 items-center bg-[#0b0c10] overflow-y-auto">

      {/** PROJECT BOXES */}
      {projectCategories.map((category, i) => (
        <motion.div
          key={i}
          className="w-full max-w-4xl bg-[#1a1b1f] border-2 border-[#66fcf1] rounded-2xl p-6 shadow-lg
                     flex flex-col md:flex-row md:items-center justify-between gap-6
                     hover:shadow-[0_0_20px_#66fcf1] transition-all"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <Link to={category.link}>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#66fcf1] hover:text-[#45a29e] transition-colors">
                {category.title}
              </h2>
            </Link>
            <p className="text-gray-300 text-sm md:text-base">
              Some highlighted works from my {category.title}.
            </p>
          </div>

          {/* RIGHT IMAGE BOX */}
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
          >
            <div
              className="w-full h-48 md:h-64 bg-[#141518] border border-[#66fcf1] rounded-xl overflow-hidden 
                         flex items-center justify-center p-3 cursor-pointer"
              onClick={() => openModal(category.images, indexes[i])}
            >
              <motion.img
                key={indexes[i]}
                src={category.images[indexes[i]]}
                alt={`${category.title} preview ${indexes[i] + 1}`}
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                onError={() => {
                  console.error(`Failed to load image: ${category.images[indexes[i]]}`);
                  // You can set a fallback image here
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/** MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            {/* MODAL CONTENT */}
            <div className="relative w-[90%] max-w-3xl p-4" onClick={(e) => e.stopPropagation()}>
              {/* CLOSE BUTTON */}
              <button
                className="absolute top-2 right-2 text-white text-3xl hover:text-[#66fcf1] z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>

              {/* IMAGE */}
              <motion.img
                key={modalIndex}
                src={modalImages[modalIndex]}
                alt={`Project image ${modalIndex + 1}`}
                className="w-full max-h-[75vh] object-contain mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* PREV / NEXT BUTTONS */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={prevImage}
                  className="text-white text-4xl hover:text-[#66fcf1] bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ❮
                </button>
              </div>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={nextImage}
                  className="text-white text-4xl hover:text-[#66fcf1] bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ❯
                </button>
              </div>

              {/* IMAGE COUNTER */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {modalIndex + 1} / {modalImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}