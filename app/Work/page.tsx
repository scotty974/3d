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
export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.2 }}
      className="container m-auto"
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
      <Header></Header>
      <section className="flex justify-between">
        <div className="flex flex-col mt-2 text-white">
          <h1 className="text-bigTitle inline-block text-white">WORKS</h1>
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
