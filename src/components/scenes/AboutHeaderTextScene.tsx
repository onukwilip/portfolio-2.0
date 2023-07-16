import React, { useMemo, useRef } from "react";
import {
  PerspectiveCamera,
  OrbitControls,
  Text3D,
  Sphere,
} from "@react-three/drei";
import { toRadians } from "../../utils";
import { useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { Variants } from "framer-motion";

const AboutHeaderTextScene = () => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  useFrame((state, _) => {
    if (orbitControlRef.current) {
      const {
        mouse: { x, y },
      } = state;
      orbitControlRef.current.setAzimuthalAngle(x * toRadians(5));
      //   orbitControlRef.current.setPolarAngle(y * toRadians(5));
    }
    orbitControlRef.current?.update();
  });
  const textSize = window.innerWidth > 650 ? 1.7 : 1.2;
  const meTextPositionY = window.innerWidth > 650 ? 0 : -1.5;
  const meTextPositionX = window.innerWidth > 650 ? 0 : -4.0;
  const aboutTextPositionX = window.innerWidth > 650 ? -9 : -5.5;

  const textVariants = useMemo<Variants>(
    () => ({
      up: {
        y: 100,
      },
      down: {
        y: 0,
      },
    }),
    []
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enablePan={false}
        makeDefault
        enableZoom={false}
        maxAzimuthAngle={toRadians(5)}
        minAzimuthAngle={toRadians(-5)}
        maxPolarAngle={toRadians(90)}
        ref={orbitControlRef}
      />
      <group position-x={3}>
        <motion.group
          variants={textVariants}
          initial="up"
          animate="down"
          transition={{
            duration: 1,
            type: "spring",
            mass: 0.35,
          }}
        >
          <Text3D
            font={"/fonts/Goma Block_Regular.json"}
            size={textSize}
            height={1}
            castShadow
            position-x={aboutTextPositionX}
            rotation-y={toRadians(10)}
          >
            ABOUT
            <meshStandardMaterial color={"#8fb2ff"} />
          </Text3D>
        </motion.group>

        <motion.group
          variants={textVariants}
          initial="up"
          animate="down"
          transition={{
            duration: 1,
            type: "spring",
            mass: 0.34,
            delay: 0.4,
          }}
        >
          <Text3D
            font={"/fonts/Block Helvetica_Regular.json"}
            size={textSize}
            height={1}
            castShadow
            rotation-y={toRadians(-10)}
            position-y={meTextPositionY}
            position-x={meTextPositionX}
          >
            ME
            <meshStandardMaterial color={"#8fb2ff"} />
          </Text3D>
        </motion.group>
      </group>

      <ambientLight args={["white", 0.1]} />
      <directionalLight args={["#8fb2ff", 2]} position={[-1, 2, 3]} castShadow>
        {/* <Sphere scale={0.2} /> */}
      </directionalLight>
    </>
  );
};

export default AboutHeaderTextScene;
