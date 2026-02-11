import bg from "../../assets/images/coffee_image.svg";
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
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={bg}
        alt="Coffee background"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className=" md:px-12 sm:px-8  relative z-10">
        <div className=" min-w-1/2 py-20 md:px-12 mt-10  sm:px-1 z-10">
          <h3 className="text-[#FFFFFF] font-medium">
            We’ve got your morning covered with
          </h3>
          <h1 className="text-[#FFFFFF] my-7 text-9xl ">Coffe</h1>
          <p className="text-[#FFFFFF] opacity-90">
            It is best to start your day with a cup of coffee. Discover the
            <br />
            best flavours coffee you will ever have. We provide the best for our
            customers.
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
    </section>
  );
}
