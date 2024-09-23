import { motion } from "framer-motion";

const ComponentTwo = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-white flex items-center justify-center">
        <motion.h3
          className="uppercase text-[#992B2B] hooskai text-[24px] my-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Ensures the animation happens once when the component is in view
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Добро &nbsp; пожаловать &nbsp; в &nbsp; мир &nbsp; Железного &nbsp;
          Человека
        </motion.h3>
      </div>
    </section>
  );
};

export default ComponentTwo;
