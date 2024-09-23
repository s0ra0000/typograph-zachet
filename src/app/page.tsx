"use client";
import ComponentFive from "@/components/ComponentFive";
import ComponentFour from "@/components/ComponentFour";
import ComponentOne from "@/components/ComponentOne";
import ComponentSeven from "@/components/ComponentSeven";
import ComponentSix from "@/components/ComponentSix";
import ComponentThree from "@/components/ComponentThree";
import ComponentTwo from "@/components/ComponentTwo";

export default function Home() {
  return (
    <div className="bg-[#992B2B] w-full min-h-screen text-white ">
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
      <ComponentSix />
      <ComponentSeven />
    </div>
  );
}
