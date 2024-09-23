import { motion } from "framer-motion";
const ComponentThree = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each element appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className="flex flex-col items-center justify-center w-full relative py-32">
      <div className="w-[1200px] flex items-center justify-center">
        <motion.div
          className="w-[800px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Ensures animation happens only once when in view
        >
          {/* h1 */}
          <motion.h1
            className="text-[#FFCF53] grafmassaRegular text-[64px]"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Тони Старк
          </motion.h1>

          {/* First p */}
          <motion.p
            className="hooskai text-[20px]"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Это не просто имя.
          </motion.p>

          {/* Additional p tags */}
          <div className="mt-8 tracking-widest">
            <motion.p
              className="hooskai text-[32px] text-[#FFCF53] ml-4"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Гений
            </motion.p>

            <motion.p
              className="hooskai text-[32px] text-[#FFCF53] ml-16 mt-2"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              миллиардер
            </motion.p>

            <motion.p
              className="hooskai text-[32px] text-[#FFCF53] ml-28 mt-2"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              плейбой
            </motion.p>

            <motion.p
              className="hooskai text-[32px] text-[#FFCF53] ml-40 mt-2"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              филантроп
            </motion.p>
          </div>
        </motion.div>

        <div className="w-[400px] flex items-center justify-center">
          <div className="hooskai w-[150px]">
            <p className="text-[96px]">Я</p>
          </div>
          <div className="hooskai text-[20px]">
            <motion.p
              className="text-[18px] font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }} // Allows the animation to trigger every time the element is in view
              transition={{ duration: 1, ease: "easeIn" }} // Scale from 0 to 1 with ease-in transition
            >
              Железный человек который спасет мир
            </motion.p>
          </div>
          {/* <Image src="/tone_2.png" alt="" height={200} width={300} /> */}
        </div>
      </div>
    </section>
  );
};
// Это символ инноваций и смелости. Наследник
//             огромного состояния и гениальный инженер, Тони создал не одну
//             революционную технологию. Но его путь к героизму начался в плену,
//             где он, с помощью своего разума и воли, создал первый железный
//             костюм. Этот момент изменил его жизнь и мир навсегда.
export default ComponentThree;
