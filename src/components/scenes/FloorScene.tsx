import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { RockyGround } from "./RockyGrounds";
import { Group } from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export const toRadians = (deg: number) => (Math.PI / 180) * deg;

const Scene: React.FC = () => {
  const floorRef = useRef<Group>(null);
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state, d) => {
    if (floorRef.current) floorRef.current.rotateY(0.005);
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
        maxAzimuthAngle={toRadians(45)}
        minAzimuthAngle={toRadians(-45)}
        ref={orbitControlsRef}
      />

      {/* <group scale={0.6} position={[-1.5, 0.5, 0.2]}>
        <Text3D font="/Gumela_Regular.json" size={0.5} position={[-3, 1, 0]}>
          Hi! I'm Prince
          <meshPhysicalMaterial color={"gold"} />
        </Text3D>
        <Text3D
          font="/b Bike to Work_Regular.json"
          size={0.5}
          position={[-3, 0, 0]}
        >
          I'm a software developer
          <meshPhysicalMaterial color={"white"} />
        </Text3D>
      </group> */}

      <RockyGround position={[0, -1, 1]} ref={floorRef} scale={7} />

      <ambientLight args={["white", 0.5]} />
      <directionalLight args={["indigo", 1]} position={[-5, 1, 0]} />
    </>
  );
};

export default Scene;
