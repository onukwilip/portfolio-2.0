import { GroupProps } from "@react-three/fiber";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Group } from "three";

export type useLoadImageType = (params: { images: string[] }) => {
  loading: boolean;
};
export type ModelType = {
  component: ForwardRefExoticComponent<
    Omit<GroupProps, "ref"> & RefAttributes<Group>
  >;
  props: JSX.IntrinsicElements["group"];
};
