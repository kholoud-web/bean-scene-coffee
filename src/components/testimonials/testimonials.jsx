import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { motion } from "framer-motion";



const testimonials = [
  {
    name: 'Jane Doe',
    text: 'The taste amazing and deliver quality.',
  },
  {
    name: 'John Smith',
    text: 'The team was professional and delivered above expectations.',
  },
  {
    name: 'Alice Johnson',
    text: 'I loved the attention to detail and fast communication.',
  },
]

export default function TestimonialsSlider() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <section className=" px-16 py-20 " id='testimonials'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-amber-950 font-bold text-4xl mb-6">What Our Clients Say</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className='mt-4'
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center bg-[#F9C06A] p-8 rounded-xl shadow-md max-w-xl mx-auto">
                <p className="text-gray-700 mb-4 text-center">"{t.text}"</p>
                <h3 className="text-gray-900 font-semibold">{t.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </motion.section>
  )
}
