import { motion } from "framer-motion";
const ComponentFive = () => {
  const paragraphText =
    "Пути Тони Старка завершились трагически, но его наследие живет. Каждый раз, когда мир нуждается в герое, его образ вдохновляет новые поколения. Его технологии продолжают менять мир, а память о его жертве напоминает нам о настоящем героизме.";

  const words = paragraphText.split(" "); // Split the paragraph into words
  const containerVariants = {
    hidden: { opacity: 1 }, // Keep initial opacity
    visible: {
      transition: {
        staggerChildren: 0.1, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const words_1 = [
    "Иногда",
    "нужно",
    "пойти",
    "на",
    "жертвы,", // This word will not animate and is in the span
    "чтобы",
    "сделать",
    "мир",
    "лучше", // This word will not animate and is in the span
  ];

  // Variants for the words that will animate from left to right
  const wordVariants_1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Variant for blinking effect
  const blinkVariants = {
    visible: {
      opacity: [1, 0, 1], // Alternates between visible and invisible
      transition: {
        repeat: Infinity, // Repeat blinking
        duration: 1.6, // Total duration of one blink cycle (on -> off -> on)
        ease: "linear", // Smooth transition with equal timing for both states
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center w-full relative py-32">
      <div className="w-[1200px] flex flex-wrap items-center justify-center">
        <h1 className="text-[#FFCF53] w-full grafmassaRegular text-[44px]">
          Бессмертный &nbsp; Герой
        </h1>
        <div className="w-[800px] flex items-center justify-center">
          <motion.div
            style={{ wordSpacing: "10px" }}
            className="hooskai text-right text-[28px] mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.1 }} // Stagger animation of words
          >
            {/* Words that come from the left */}
            {words_1.map((word, index) => {
              if (word.includes("жертвы,")) {
                return (
                  <motion.span
                    key={index}
                    className="text-[#FFCF53] italic"
                    variants={blinkVariants}
                  >
                    жертвы,
                    <br />
                  </motion.span>
                );
              } else if (word.includes("лучше")) {
                return (
                  <motion.span
                    key={index}
                    className="text-[#FFCF53] italic"
                    variants={blinkVariants}
                  >
                    лучше
                  </motion.span>
                );
              } else {
                return (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={wordVariants_1}
                    style={{ marginRight: "4px", wordSpacing: "10px" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                );
              }
            })}

            {/* Line break */}
            <br />

            {/* Continuation of text */}
          </motion.div>
        </div>
        <div className="w-[400px] flex items-center justify-center pr-8">
          {/* <Image src="/tone_3.png" alt="" height={200} width={300} /> */}
          <motion.div
            className="hooskai mt-24 leading-8 text-[12px]"
            style={{ wordSpacing: "10px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // Ensures the animation happens only once
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                viewport={{ once: false }}
                variants={wordVariants}
                style={{ display: "inline-block", marginRight: "8px" }} // Adding margin for word spacing
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] flex items-center justify-center"></div>
    </section>
  );
};

export default ComponentFive;
