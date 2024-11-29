"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React, { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconCode, IconArrowDown } from "@tabler/icons-react";
import { LampContainer } from "@/components/ui/lamp";
import Link from 'next/link'

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Flux IDE",
    description: "New modern IDE designed for productivity",
    header: <Skeleton />,
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    badge: "Coming Soon",
  },
];

export default function Home() {
  const productsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute inset-0 bg-black text-white min-h-screen">
      <HeroHighlight containerClassName="h-[100vh] bg-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mt-8 text-center"
        >
          Maximizing Developer&apos;s Productivity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ delay: 1, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-4 text-lg sm:text-2xl text-gray-300 text-center"
        >
          <span className="underline bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-4xl">
            Coming Soon
          </span>
        </motion.p>

        <motion.button
          onClick={scrollToProducts}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="mt-16 mx-auto flex items-center justify-center w-7 h-7 rounded-full border-2 border-white text-white shadow-lg cursor-pointer"
          aria-label="Scroll Down"
        >
          <IconArrowDown className="h-5 w-5 text-white justify-center" />
        </motion.button>
      </HeroHighlight>

      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent z-10">
        <div className="text-lg sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-cyan-300 to-sky-600">
          Operion
        </div>
        <div className="hidden sm:flex space-x-8 text-white text-lg">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-600 ease-in-out"
          >
            Home
          </Link>
        </div>
      </nav>

      <div
        ref={productsSectionRef}
        className="bg-black flex flex-col items-center justify-center min-h-screen"
      >
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center mb-4">
              <Highlight className="text-black dark:text-white">
                <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 text-transparent bg-clip-text font-bold text-4xl">
                  Products
                </span>
              </Highlight>
            </div>
            <BentoGrid className="max-w-4xl mx-auto mt-5">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  badge={item.badge}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </LampContainer>
      </div>

      <footer className="mt-auto py-4 text-center bg-black">
        <span className="text-gray-400 text-sm">© 2024 Operion</span>
      </footer>
    </div>
  );
}
