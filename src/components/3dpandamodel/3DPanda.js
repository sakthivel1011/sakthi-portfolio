import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function PandaModel({ isTyping, isSubmitted }) {
  const group = useRef();
  const leftArm = useRef();
  const rightArm = useRef();

  // Animation Logic
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (isTyping) {
      // Waving animation
      leftArm.current.rotation.x = Math.sin(time * 3) * 0.3;
      group.current.rotation.y = Math.sin(time) * 0.2;
    } else {
      // Return to rest position
      leftArm.current.rotation.x += (0 - leftArm.current.rotation.x) * 0.1;
      group.current.rotation.y += (0 - group.current.rotation.y) * 0.1;
    }

    if (isSubmitted) {
      // Celebration animation
      rightArm.current.rotation.x = Math.sin(time * 5) * 0.5;
      leftArm.current.rotation.x = Math.cos(time * 5) * 0.5;
    }
  });

  return (
    <group ref={group}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" />

        {/* Ears */}
        <mesh position={[-0.7, 0.7, 0.5]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.7, 0.7, 0.5]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.3, 0.2, 0.9]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.3, 0.2, 0.9]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 0, 1]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </mesh>

      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Arms */}
      <group ref={leftArm} position={[-1.2, 0.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

      <group ref={rightArm} position={[1.2, 0.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.5, -1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.5, -1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
