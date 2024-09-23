import { motion } from "framer-motion";
import Image from "next/image";
const ComponentSeven = () => {
  const textOne = "это больше, чем просто персонаж.";
  const textTwo = "Это символ мужества, инноваций и самоотверженности.";

  // Variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts off hidden, with words below their normal position
    visible: {
      opacity: 1,
      y: 0, // Moves to its normal position
      transition: {
        type: "tween",
        duration: 0.4, // Speed of each word appearing
      },
    },
  };
  // Variant for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 }, // Paragraph starts hidden and below its normal position
    visible: {
      opacity: 1,
      y: 0, // Moves to normal position
      transition: {
        duration: 0.6, // Duration for the paragraph's animation
        ease: "easeOut",
      },
    },
  };

  // Variant for the image
  const imageVariants = {
    hidden: { opacity: 0, y: 100 }, // Image starts hidden and below its normal position
    visible: {
      opacity: 1,
      y: 0, // Moves to normal position
      transition: {
        duration: 0.8, // Duration for the image's animation
        ease: "easeOut",
        delay: 0.6, // Delay the image until the paragraph is fully visible
      },
    },
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full relative mt-16">
      <div className="w-[1200px] flex flex-col items-center justify-center">
        <div className="w-full mb-12">
          <motion.p
            className="hooskai text-[24px] text-center"
            style={{ wordSpacing: "10px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Delay between each word appearing
                },
              },
            }}
          >
            {textOne.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
                style={{ marginRight: "8px" }} // Adds space between words
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            className="hooskai text-[24px] text-center"
            style={{ wordSpacing: "10px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Delay between each word appearing
                },
              },
            }}
          >
            {textTwo.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
                style={{ marginRight: "8px" }} // Adds space between words
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <motion.p
            className="hooskai text-[32px] text-center mt-16 text-[#FFCF53]"
            style={{ wordSpacing: "10px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
          >
            &#8220;Пока я жив, мне всё по плечу&#8222;
          </motion.p>

          {/* Animated Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <Image src="/tony_4.png" alt="" height={200} width={300} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComponentSeven;
