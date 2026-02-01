import badge from "./images/badge 1.svg";
import bestPrice from "./images/best-price 1.svg";
import coffeSeeds from "./images/coffee-beans 1.svg";
import coffeUp from "./images/coffee-cup 1.svg";
import { motion } from "framer-motion";

const cards = [
  {
    img: coffeSeeds ,
    title: "Supreme Beans",
    Description: "Beans that provides great taste",
  },
  {
    img:  badge ,
    title: "High Quality",
    Description: "We provide the highest quality",
  },
  {
    img:  coffeUp ,
    title: "Extraordinary ",
    Description: "Coffee like you have never tasted",
  },
  {
    img:  bestPrice ,
    title: "Affordable Price",
    Description: "Our Coffee prices are easy to afford",
  },
];

export default function Features() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <section className="px-16" id="features">
      <div className="@container px-12">
        <h2 className="text-amber-950 font-bold text-4xl text-center">
          Why are we different?
        </h2>
        <p className="text-[#707070] font-[20px] my-4 text-center">
          We don’t just make your coffee, we make your day!
        </p>
        {/* cards */}
        <div className="mt-6 grid gap-6 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 ">
          {cards.map((card) => {
            return (
              <article class=" bg-[#FFEED8] shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300 text-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="mx-auto my-2"
                />
                <h3 className="text-amber-950 font-bold text-center">
                  {card.title}
                </h3>
                <p class="text-sm w-full text-[#707070] text-center">
                 {card.Description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    </motion.section>
  );
}
