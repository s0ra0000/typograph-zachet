import Image from "next/image";
const ComponentFour = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-[#FFCF53] text-black flex items-center gap-4 justify-center hooskai">
        <div className="flex items-center gap-4 py-2">
          <div>
            <Image src={"/tony_5.png"} alt={""} height={50} width={50} />
          </div>
          <p className="">Железный Человек</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <div>
            <Image src={"/tony_5.png"} alt={""} height={50} width={50} />
          </div>
          <p className="">Железный Человек</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <div>
            <Image src={"/tony_5.png"} alt={""} height={50} width={50} />
          </div>
          <p className="">Железный Человек</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <div>
            <Image src={"/tony_5.png"} alt={""} height={50} width={50} />
          </div>
          <p className="">Железный Человек</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <div>
            <Image src={"/tony_5.png"} alt={""} height={50} width={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentFour;
