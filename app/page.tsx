"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Sculpture from "./components/Sculpture/Sculpture";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from 'postprocessing'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center items-center">
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
              <EffectComposer>
                <Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.3, 0.8]} ratio={0.85} mode={GlitchMode.SPORADIC} active/>
              </EffectComposer>
            </Suspense>
          </PerspectiveCamera>
        </Canvas>
      </div>
    </main>
  );
}
