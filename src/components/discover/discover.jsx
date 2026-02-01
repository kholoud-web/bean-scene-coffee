import { href } from "react-router-dom";
import coffe from "./images/stylized-cup-coffee-out-coffee-beans-flat-lay 1.svg";
import { motion } from "framer-motion";

export default function Discover() {


  const handleLearnMore =()=>{
    const featuresSction = document.getElementById("features");
    featuresSction?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className="py-20 px-4 sm:px-8 md:px-16" id="dicover">
        <div className="@container flex flex-col-reverse md:flex-row items-center md:justify-around gap-8 md:gap-16  ">
          <div className="w-full md:w-1/2 sm:text-center md:text-left">
            <h2 className="text-amber-950 font-bold text-3xl sm:text-4xl md:text-5xl">
              Discover the best coffee
            </h2>
            <p className="text-[#707070] font-[20px] my-4">
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>
            <button onClick={handleLearnMore}
            className="bg-[#F9C06A] text-black  rounded-4xl my-8 p-3 font-semibold cursor-pointer">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2  flex justify-center">
            <img src={coffe} alt="coffe" />
          </div>
        </div>
      </section>
    </motion.section>
  );
}
