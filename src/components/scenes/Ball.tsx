import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { FC } from "react";

const Ball = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 1]} />
      <OrbitControls
        makeDefault
        //   enableZoom={false} enablePan={false}
      />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 30, 30]} />
        <meshStandardMaterial color="#fff8eb" />
      </mesh>
      <ambientLight color={"white"} intensity={0.1} />
      <directionalLight position={[0, 0, 0.05]} args={["white", 1]} />
    </>
  );
};

export default Ball;
