"use client";

import { Canvas } from "@react-three/fiber";
import Sculpture from "./components/Sculpture/Sculpture";
import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [delay, setDelay] = useState({ delay: { min: 1, max: 1.5 } });

  const handleNavigateWorks = () => {
    setDelay({ delay: { min: 0, max: 0 } });
    setTimeout(() => {
      router.push("/Work");
    }, 3000);
  };

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
                  delay={[delay.delay.min, delay.delay.max]}
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
      <section className="container m-auto z-50 min-h-screen">
        <Header></Header>
        <div className="h-screen flex items-center ">
          <nav className="text-white flex justify-between w-full">
            <span className="text-4xl hover:underline hover:cursor-pointer" onClick={handleNavigateWorks}>
              WORKS
            </span>
            <Link
              href="/About"
              className="text-4xl hover:underline hover:cursor-pointer"
            >
              ABOUT
            </Link>
          </nav>
        </div>
      </section>
    </motion.main>
  );
}
