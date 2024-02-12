import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Sculpture() {
  const gltf = useLoader(GLTFLoader, "marble_bust_01_4k.gltf");


  return (
    <primitive
      object={gltf.scene}
      scale={10}
      rotation={[0, 0.5, 0]}
      castShadow
      receiveShadow
    />
  );
}
