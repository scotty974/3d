"use client";
import Header from "../components/Header/Header";
import CardWorks from "../components/CardWorks/CardWorks";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <motion.section
    initial={{ opacity: 0, x: "-100%" }}
    animate={{ opacity: 1, x: "0%" }}
    exit={{ opacity: 0, x: "100%" }}
    transition={{ duration: 0.2 }}
      className="container m-auto"
    >
      <Header></Header>
      <section className="flex justify-between">
        <div className="flex flex-col mt-2 text-white">
          <h1 className="text-bigTitle bg-gradient-to-b from-white to-black inline-block text-transparent bg-clip-text">
            WORKS
          </h1>
          <div className="flex flex-col overflow-scroll">
            <CardWorks
              name="Space Quizz"
              link="https://space-quiz.popcorn-esd.com/"
            ></CardWorks>
            <CardWorks
              name="Visualizer"
              link="https://visual.fetheve.fr/"
            ></CardWorks>
            <CardWorks
              name="MindBrush"
              link="https://mindbrush.fetheve.fr/"
            ></CardWorks>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-white text-4xl hover:underline hover:cursor-pointer"
          >
            HOME
          </Link>
        </div>
      </section>
    </motion.section>
  );
}
