"use client";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Sculpture from "../components/Sculpture/Sculpture";
import {
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
export default function Page() {
  const router = useRouter();
  const [delay, setDelay] = useState({ delay: { min: 1, max: 1.5 } });
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
  const handleNavigateHome = () => {
    setDelay({ delay: { min: 0, max: 0 } });
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };
  const textEnter = () => setcursorVariant("text");
  const textExit = () => setcursorVariant("default");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen container m-auto"
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
      <Header></Header>
      <section className="flex justify-between h-screen">
        <div className="flex flex-col mt-2 text-white">
          <h1
            className="text-bigTitle inline-block text-white"
            onMouseEnter={textEnter}
            onMouseLeave={textExit}
          >
            About
          </h1>
          <div>
          <span
            className="text-white text-4xl hover:underline hover:cursor-pointer"
            onMouseEnter={textEnter}
            onMouseLeave={textExit}
            onClick={handleNavigateHome}
          >
            HOME
          </span>
          </div>
         
        </div>
        <div className="flex justify-center items-center">
          <p
            className="text-white text-2xl w-96"
            onMouseEnter={textEnter}
            onMouseLeave={textExit}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            quos assumenda iure vero adipisci quae voluptas vitae laudantium, ad
            iusto aliquam dicta nostrum porro eius consequatur. Repudiandae ut
            aut laboriosam?
          </p>
        </div>
      </section>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </motion.section>
  );
}
