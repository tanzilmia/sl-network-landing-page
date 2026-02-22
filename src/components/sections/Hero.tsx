"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState, useRef, useCallback } from "react";

const slides = [
  {
    id: 1,
    bgGradient: "from-slate-900 via-cyan-950 to-slate-900",
    bgImage: "",
    overlay: "bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent",
    badge: "Fiber-Powered • 24/7 Support",
    title: "Ultra-Fast Internet for",
    highlight: "Home & Business",
    description:
      "Experience buffer-free streaming, lag-free gaming, and reliable connectivity.",
  },
  {
    id: 2,
    bgGradient: "from-cyan-950 via-slate-900 to-teal-950",
    bgImage: "",
    overlay: "bg-gradient-to-r from-cyan-950/90 via-slate-900/70 to-transparent",
    badge: "Optical Fiber Connection",
    title: "Professional-Grade",
    highlight: "Broadband Service",
    description:
      "SL Network delivers high-speed internet with optical fiber and dedicated support.",
  },
  {
    id: 3,
    bgGradient: "from-teal-950 via-slate-900 to-cyan-950",
    bgImage: "",
    overlay: "bg-gradient-to-r from-teal-950/90 via-slate-900/70 to-transparent",
    badge: "Buffer-less • Low Ping",
    title: "Stream, Game & Work",
    highlight: "Without Limits",
    description:
      "Connect all your devices. Perfect for remote work, streaming, and online gaming.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TILT_INTENSITY = 12;
const SPRING_CONFIG = { damping: 25, stiffness: 150 };

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, SPRING_CONFIG);
  const rotateY = useSpring(mouseX, SPRING_CONFIG);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x * TILT_INTENSITY);
      mouseY.set(y * TILT_INTENSITY);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] min-h-[600px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            {/* 3D Water-like background - responds to cursor */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                className="absolute inset-0 -m-[5%] w-[110%] h-[110%]"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
                />
                {/* Animated gradient orbs for water effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute w-[80%] h-[80%] rounded-full opacity-30 blur-3xl -top-1/2 -left-1/2 bg-cyan-500/40"
                    style={{ filter: "blur(60px)" }}
                  />
                  <div
                    className="absolute w-[60%] h-[60%] rounded-full opacity-20 blur-3xl top-1/2 right-0 bg-teal-500/50"
                    style={{ filter: "blur(80px)" }}
                  />
                </div>
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                {slide.bgImage && (
                  <Image
                    src={slide.bgImage}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${slide.overlay}`} />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay - positioned over slider */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="container mx-auto px-4 lg:px-8 pointer-events-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeIndex}
              className="max-w-2xl"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-medium text-white mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                {currentSlide.badge}
              </motion.div>
              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
              >
                {currentSlide.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400">
                  {currentSlide.highlight}
                </span>
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed"
              >
                {currentSlide.description} SL Network delivers professional-grade
                broadband with optical fiber and 24/7 customer support.
              </motion.p>
              <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                <Link href="/portal/register">
                  <motion.span
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/30"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                  </motion.span>
                </Link>
                <Link href="/contact">
                  <motion.span
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white/50 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white"
                    whileHover={{
                      borderColor: "rgb(34 211 238)",
                      backgroundColor: "rgba(6, 182, 212, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <div className="hidden lg:flex justify-center items-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Image
                    src="/globe.svg"
                    alt=""
                    width={120}
                    height={120}
                    className="invert opacity-40"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Image
                    src="/window.svg"
                    alt=""
                    width={48}
                    height={48}
                    className="invert opacity-60"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
