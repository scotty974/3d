"use client";
import Header from "../components/Header/Header";
import CardWorks from "../components/CardWorks/CardWorks";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Sculpture from "../components/Sculpture/Sculpture";
import {
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import { GlitchMode, BlendFunction } from "postprocessing";
import { useState, useEffect } from "react";
export default function Page() {
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });
  const [cursorVariant, setcursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePostion({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setcursorVariant("text");
  const textExit = () => setcursorVariant("default");
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen "
    >
      <div className="flex justify-center items-center absolute -z-10">
        <Canvas>
          <ambientLight intensity={1.5} />
          <directionalLight
            color="#7f00ff"
            position={[0, 0, 10]}
            intensity={2}
          />
          <PerspectiveCamera position={[0, -2.5, 0]}>
            <Suspense fallback={null}>
              <Sculpture />
              <EffectComposer>
                <Glitch
                  delay={[0.5, 1.5]}
                  duration={[0.6, 1.0]}
                  strength={[0.3, 1]}
                  ratio={0.85}
                  mode={GlitchMode.SPORADIC}
                  active
                />
                <Noise premultiply blendFunction={BlendFunction.ADD} />
                <Scanline density={8.5} />
              </EffectComposer>
            </Suspense>
          </PerspectiveCamera>
        </Canvas>
      </div>
      <section className="z-50 min-h-screen container m-auto">
        <Header></Header>
        <section className="flex justify-between ">
          <div className="flex flex-col mt-2 text-white">
            <h1
              className="text-bigTitle inline-block text-white"
              onMouseEnter={textEnter}
              onMouseLeave={textExit}
            >
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
              href={"/"}
              className="text-white text-4xl hover:underline "
              onMouseEnter={textEnter}
              onMouseLeave={textExit}
            >
              HOME
            </Link>
          </div>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>
        </section>
      </section>
    </motion.main>
  );
}
