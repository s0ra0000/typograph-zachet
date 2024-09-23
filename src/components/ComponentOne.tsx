import Image from "next/image";
import { motion } from "framer-motion";
const ComponentOne = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full relative">
      <div className="w-[1200px] flex items-center justify-center">
        <Image src="/tone_1.png" alt="" height={200} width={350} />
      </div>
      <div className="absolute bottom-[150px] w-[1200px] flex flex-col items-center justify-center -mt-[200px]">
        <div className="flex justify-center">
          {/* Motion for h1 (ЖЕЛЕЗНЫЙ ЧЕЛОВЕК) */}
          <motion.h1
            className="quantum text-[56px] flex space-x-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              ЖЕЛЕЗНЫЙ
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              ЧЕЛОВЕК
            </motion.span>
          </motion.h1>
        </div>

        {/* Motion for h2 (Легенда Воплоти) */}
        <motion.h2
          style={{ fontFamily: "var(--font-roboto-condensed), sans-serif" }}
          className="font-semibold text-[24px] italic"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Легенда Воплоти
        </motion.h2>
      </div>
    </section>
  );
};

export default ComponentOne;
