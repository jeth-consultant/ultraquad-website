'use client';

import testimonials from "@/data/testimonial";
import { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSlider: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: right, -1: left

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses we've helped transform through innovative solutions
          </p>
        </motion.div>

        {/* Expanded card container with animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white p-12 rounded-xl shadow-2xl border border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 max-w-6xl mx-auto"
        >
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-sky-400/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-sky-400/10 rounded-full blur-xl"></div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="overflow-hidden"
            >
              {/* Testimonial Content */}
              <div className="text-center mb-10 px-8">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sky-400 mb-6"
                >
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-5xl mx-auto"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>
              </div>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center mt-12"
              >
                <div className="relative h-24 w-24 mb-6 overflow-hidden rounded-full border-2 border-sky-400 p-0.5">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover rounded-full"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sky-400 font-medium text-lg mt-2">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 transition-all shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 transition-all shadow-lg"
            aria-label="Next testimonial"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-14 space-x-3"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === currentIndex ? "bg-sky-400 scale-125" : "bg-sky-400/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;