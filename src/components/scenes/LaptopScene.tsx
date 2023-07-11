import React, { useRef } from "react";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { toRadians } from "./FloorScene";
import { MacbookProWhite } from "./MackBookProWhite";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const LaptopScene = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);
  const laptopGroupRef = useRef<Group>(null);
  useFrame(({ mouse: { x, y } }, _) => {
    if (orbitControlsRef.current)
      orbitControlsRef.current.setAzimuthalAngle(-(x * toRadians(90)));
    orbitControlsRef.current?.update();
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        maxPolarAngle={toRadians(90)}
        minPolarAngle={toRadians(90)}
        ref={orbitControlsRef}
      />
      <group
        position={[-0.5, -0.8, 0]}
        ref={laptopGroupRef}
        rotation={[0, toRadians(-80), 0]}
      >
        <MacbookProWhite
          position={[0, -0.3, 0]}
          scale={8}
          rotation={[toRadians(30), 0, 0]}
        />
        <MacbookProWhite
          position={[0, 2.5, -1.5]}
          scale={8}
          rotation={[toRadians(210), 0, 0]}
        />
      </group>

      <ambientLight args={["white", 1]} />
      <directionalLight args={["white", 1]} position={[0, 1, 1]} />
      <pointLight args={["white", 1]} position={[0, 10, 1]} />
    </>
  );
};

export default LaptopScene;
