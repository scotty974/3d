"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Sculpture from "./components/Sculpture/Sculpture";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import {
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
import Header from "./components/Header/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
      className="min-h-screen "
    >
      <div className="flex justify-center items-center absolute -z-10">
        <Canvas dpr={[1, 2]} shadows>
          <ambientLight intensity={2} />
          <directionalLight
            color="#7f00ff"
            position={[0, 0, 10]}
            intensity={2}
          />
          <PerspectiveCamera position={[0, -2.5, 0]}>
            <Suspense fallback={null}>
              <Sculpture />
              <EffectComposer >
                <Glitch
                  delay={[1.5, 3.5]}
                  duration={[0.6, 1.0]}
                  strength={[0.3, 0.8]}
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
      <section className="container m-auto z-50 min-h-screen">
        <Header></Header>
        <div className="h-screen flex items-center ">
          <nav className="text-white flex justify-between w-full">
            <Link
              href="/Work"
              className="text-4xl hover:underline hover:cursor-pointer"
            >
              WORKS
            </Link>
            <Link href='/About' className="text-4xl hover:underline hover:cursor-pointer">
              ABOUT
            </Link>
          </nav>
        </div>
      </section>
    </motion.main>
  );
}
