import React, { FC } from "react";
import { ModelType } from "../../types";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";

const ServiceItems: FC<{
  model: ModelType;
}> = ({ model }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position-z={0.5} />
      <OrbitControls
        makeDefault
        target={model.props.position}
        enableZoom={false}
        enablePan={false}
      />
      <model.component {...model.props} />
      <ambientLight args={["white", 0.3]} />
      <directionalLight args={["white", 2]} position={[-1, 2, 1]} castShadow>
        {/* <Sphere scale={0.2} /> */}
      </directionalLight>
    </>
  );
};

export default ServiceItems;
