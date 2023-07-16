import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import React, { useMemo, useRef, useEffect } from "react";
import { toRadians } from "../../utils";
import { Easel } from "./Easel";
import { useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { Variants } from "framer-motion";
import { gsap } from "gsap";
import { Group } from "three";

const AboutContentEaselScene = () => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const modelRef = useRef<Group>(null);
  useFrame((state, _) => {
    orbitControlRef.current?.update();
  });
  const easelVariants = useMemo<Variants>(
    () => ({
      initial: {
        z: -58,
        rotation: { y: -180 },
      },
      final: {
        z: [-38, -18, -0, 0],
        rotation: [{ y: -180 }, { y: -90 }, { y: -45 }],
      },
    }),
    []
  );

  const animateModel = () => {
    const tml = gsap.timeline();
    const tml2 = gsap.timeline();

    if (!modelRef.current) return;

    gsap.set(modelRef.current.position, {
      z: -4,
    });
    gsap.set(modelRef.current.rotation, {
      y: toRadians(-180),
    });

    tml.to(modelRef.current.rotation, {
      y: toRadians(-180),
    });
    tml2.to(modelRef.current.position, {
      z: -4,
    });

    tml.to(
      modelRef.current.rotation,
      {
        y: toRadians(-90),
      },
      ">"
    );
    tml2.to(
      modelRef.current.position,
      {
        z: -2,
      },
      ">"
    );

    tml.to(
      modelRef.current.rotation,
      {
        y: toRadians(-45),
        animationFillMode: "forwards",
      },
      ">"
    );
    tml2.to(
      modelRef.current.position,
      {
        z: -0,
        animationFillMode: "forwards",
      },
      ">"
    );
  };
  useEffect(() => {
    animateModel();
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1, 0.5]} />
      <OrbitControls
        makeDefault
        target={[0, -1, 0]}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        ref={orbitControlRef}
      />
      {/* <motion.group 
        variants={easelVariants}
        initial="initial"
        animate="final"
        transition={{ type: "keyframes", duration: 1 }}
  > */}
      <Easel
        position={[0.3, -1.535, -4]}
        scale={5.2}
        rotation={[0, toRadians(-180), 0]}
        ref={modelRef}
      ></Easel>
      {/* </motion.group> */}
      <ambientLight args={["white", 1]} />
      <directionalLight args={["#8fb2ff", 2]} position={[-1, 2, 3]} castShadow>
        <Sphere scale={0.2} />
      </directionalLight>
    </>
  );
};

export default AboutContentEaselScene;
