import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projectCategories = [
    {
      title: "School Projects",
      link:"projects/school-projects",
      images: [
        "assets/images/CSE-110.png",
        "assets/images/CSE-111.png",
        "assets/images/CSE-210.png",
        // add more images here...
      ],
    },
    {
      title: "Personal Projects",
      link: "/projects/personal-projects",
      images: [
        "src/assets/images/personal/portfolio.png",
        "src/assets/images/personal/app.png",
        "src/assets/images/personal/game.png",
        // add more images here...
      ],
    },
    {
      title: "Client Projects",
      link: "/projects/client-projects",
      images: [
        "src/assets/images/client/website1.png",
        "src/assets/images/client/dashboard.png",
        "src/assets/images/client/mobile.png",
        // add more images here...
      ],
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
            <a href={category.link}>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#66fcf1]">
              {category.title}
              </h2>
              </a>
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
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
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
          >
            {/* MODAL CONTENT */}
            <div className="relative w-[90%] max-w-3xl p-4">
              {/* CLOSE BUTTON */}
              <button
                className="absolute top-2 right-2 text-white text-3xl hover:text-[#66fcf1]"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>

              {/* IMAGE */}
              <motion.img
                key={modalIndex}
                src={modalImages[modalIndex]}
                className="w-full max-h-[75vh] object-contain mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* PREV / NEXT BUTTONS */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <button
                  onClick={prevImage}
                  className="text-white text-4xl hover:text-[#66fcf1]"
                >
                  ❮
                </button>
              </div>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <button
                  onClick={nextImage}
                  className="text-white text-4xl hover:text-[#66fcf1]"
                >
                  ❯
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}