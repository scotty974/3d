"use client";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.2 }}
      className="container m-auto"
    >
      <Header></Header>
      <section className="flex justify-between h-screen">
        <div className="flex flex-col mt-2 text-white">
          <h1 className="text-bigTitle inline-block text-white">
            About
          </h1>
          <Link
            href="/"
            className="text-white text-4xl hover:underline hover:cursor-pointer"
          >
            HOME
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-2xl w-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            quos assumenda iure vero adipisci quae voluptas vitae laudantium, ad
            iusto aliquam dicta nostrum porro eius consequatur. Repudiandae ut
            aut laboriosam?
          </p>
        </div>
      </section>
    </motion.section>
  );
}
