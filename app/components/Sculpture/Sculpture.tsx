import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Sculpture() {
  const gltf = useLoader(GLTFLoader, "marble_bust_01_4k.gltf");

  // Set initial position and speed of the floating animation
  const initialPosition = 0;
  const floatingSpeed = 1.5; // Adjust the speed for a more subtle effect
  const floatingAmplitude = 0.1; // Adjust the amplitude for a more subtle effect

  // Use useFrame to animate the sculpture
  useFrame(({ clock }) => {
    // Calculate the new Y position based on time
    const newY = initialPosition + Math.sin(clock.getElapsedTime() * floatingSpeed) * floatingAmplitude;

    // Update the sculpture's position
    gltf.scene.position.y = newY;
  });

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
