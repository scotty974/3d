"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [delay, setDelay] = useState({ delay: { min: 1, max: 1.5 } });
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });
  const [cursorVariant, setcursorVariant] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigateWorks = () => {
    setDelay({ delay: { min: 0, max: 0 } });
    setTimeout(() => {
      router.push("/Work");
    }, 2000);
  };

  const handleNavigateAbout = () => {
    setDelay({ delay: { min: 0, max: 0 } });
    setTimeout(() => {
      router.push("/About");
    }, 2000);
  };

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePostion({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", checkMobile);
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
  return isMobile ? (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-white">This site is only available on desktop</h1>
    </div>
  ) : (
    <>
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
          <div className="min-h-screen flex items-center ">
            <nav className="text-white flex justify-between w-full items-center h-screen">
              <span
                className="text-4xl hover:underline "
                onClick={handleNavigateWorks}
                onMouseEnter={textEnter}
                onMouseLeave={textExit}
              >
                WORKS
              </span>

              <span
                onClick={handleNavigateAbout}
                className="text-4xl hover:underline "
                onMouseEnter={textEnter}
                onMouseLeave={textExit}
              >
                ABOUT
              </span>
            </nav>
          </div>
        </section>
      </motion.main>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </>
  );
}
