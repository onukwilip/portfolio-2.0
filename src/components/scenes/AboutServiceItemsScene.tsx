import React, { FC, useMemo, useRef } from "react";
import { ModelType } from "../../types";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Variants } from "framer-motion";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { toRadians } from "../../utils";

const ServiceItems: FC<{
  model: ModelType;
}> = ({ model }) => {
  const orbitControlRef = useRef<OrbitControlsImpl>(null);
  const serviceItemVariants = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    }),
    []
  );
  useFrame((state, _) => {
    if (orbitControlRef.current) {
      const { x, y } = state.mouse;
      orbitControlRef.current.setAzimuthalAngle(x * toRadians(45));
      orbitControlRef.current.setAzimuthalAngle((y + 1) * toRadians(60));
    }
    orbitControlRef.current?.update();
  });
  return (
    <>
      <PerspectiveCamera makeDefault position-z={0.5} />
      <OrbitControls
        makeDefault
        target={model.props.position}
        ref={orbitControlRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <motion.group
        variants={serviceItemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <model.component {...model.props} />
      </motion.group>

      <ambientLight args={["white", 0.3]} />
      <directionalLight args={["white", 2]} position={[-1, 2, 1]} castShadow>
        {/* <Sphere scale={0.2} /> */}
      </directionalLight>
    </>
  );
};

export default ServiceItems;
