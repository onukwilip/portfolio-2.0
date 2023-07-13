import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import { toRadians } from "../../utils";
import { Easel } from "./Easel";
import css from "../../styles/About.module.scss";
import { useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import useType from "../../hooks/useType";
import { motion } from "framer-motion-3d";
import { Variants } from "framer-motion";

const AboutContentEaselScene = () => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const { typedText } = useType(
    `I'm a seasoned software engineer with a track record of delivering
            high-quality software products. With two years of experience, I have
            developed a plethora of industry-level applications, including
            GOPack, NigTrak, and Online Auction. My problem-solving skills have
            led to elegant solutions that drive business results and empower
            users. I specialize in 3D web development using tools like Three Js,
            React Js, Next Js, and other frameworks, staying updated with the
            latest industry trends. Throughout my career, I have achieved a 90%
            customer satisfaction rate and consistently delivered projects
            within agreed timelines.`,
    3
  );
  useFrame((state, _) => {
    if (orbitControlRef.current) {
      const {
        mouse: { x, y },
      } = state;
    }
    orbitControlRef.current?.update();
  });
  const easelVariants = useMemo<Variants>(
    () => ({
      initial: {
        z: -58,
      },
      final: { z: [-38, -18, -0, 0], rotate: [] },
    }),
    []
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1, 0.5]} />
      <OrbitControls
        makeDefault
        target={[0, -1, 0]}
        enableZoom={false}
        maxAzimuthAngle={toRadians(-80)}
        minAzimuthAngle={toRadians(80)}
        maxPolarAngle={toRadians(1)}
        minPolarAngle={toRadians(1)}
        ref={orbitControlRef}
      />
      <motion.group
        variants={easelVariants}
        initial="initial"
        animate="final"
        transition={{ type: "keyframes", duration: 1 }}
      >
        <Easel
          position-y={-1.535}
          scale={5.2}
          rotation-x={toRadians(0)}
        ></Easel>
        <Html position={[-0.17, -0.82, 0]}>
          <div className={css.description}>{typedText}</div>
        </Html>
      </motion.group>
      <ambientLight args={["white", 1]} />
      <directionalLight args={["#8fb2ff", 2]} position={[-1, 2, 3]} castShadow>
        <Sphere scale={0.2} />
      </directionalLight>
    </>
  );
};

export default AboutContentEaselScene;
