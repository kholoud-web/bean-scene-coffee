import bg from "./images/coffee_image.svg";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);

  const handleOrderBtn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Menu is ready!");
    }, 1500);
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div
        className="min-h-screen bg-cover bg-center relative py-20"
        style={{ backgroundImage: `url(${bg})` }}
        id="home"
      >
        <div className="@container px-12">
          <div className=" min-w-1/2 py-20 md:px-12 mt-10  sm:px-1">
            <h3 className="text-[#FFFFFF] font-medium">
              We’ve got your morning covered with
            </h3>
            <h1 className="text-[#FFFFFF] my-7 text-9xl">Coffe</h1>
            <p className="text-[#FFFFFF] opacity-90">
              It is best to start your day with a cup of coffee. Discover the
              <br />
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            <button
              onClick={handleOrderBtn}
              className="bg-[#F9C06A] text-black  rounded-4xl my-8 p-3 font-semibold cursor-pointer m-auto"
            >
              {" "}
              {loading ? "Loading..." : "Order Now"}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
