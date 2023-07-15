import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { toRadians } from "../../utils";
import { PisaTower } from "./PisaTower";
import { useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Group, Vector3 } from "three";

const AboutPisaScene = () => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const pisaRef = useRef<Group>(null);

  useFrame(({ camera }) => {
    if (pisaRef.current) {
      //   orbitControlRef.current.target.x = 0.5;
      pisaRef.current.rotateY(0.005);
    }
    orbitControlRef.current?.update();
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />
      <OrbitControls
        makeDefault
        ref={orbitControlRef}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        maxAzimuthAngle={toRadians(15)}
        minAzimuthAngle={toRadians(-15)}
        maxPolarAngle={toRadians(-90)}
        minPolarAngle={toRadians(90)}
      />
      <PisaTower scale={0.03} position={[0.5, -0.9, 0]} ref={pisaRef}>
        <meshStandardMaterial color={"#8fb2ff"} />
      </PisaTower>

      <ambientLight args={["#8fb2ff", 0.1]} />
      <directionalLight args={["#8fb2ff", 2]} position={[-1, 2, 3]} castShadow>
        <Sphere scale={0.2} />
      </directionalLight>
    </>
  );
};

export default AboutPisaScene;
