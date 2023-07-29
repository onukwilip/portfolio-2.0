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
export type Stacktype = "frontend" | "backend" | "database";
export type Skilltype =
  | "HTML 5"
  | "CSS 3"
  | "Semantic UI"
  | "Bootstrap"
  | "SCSS"
  | "Javascript"
  | "Typescript"
  | "Webpack"
  | "Three Js"
  | "React Js"
  | "Next Js"
  | "Node Js"
  | "C#"
  | "ASP.NET"
  | "Microsoft SQL"
  | "Mongo DB"
  | "Redis"
  | "Firebase"
  | "Git"
  | "GitHub"
  | "Docker";
export type SelectedSkillType =
  | {
      stack: Stacktype;
      skill?: Skilltype;
      // | string;
    }
  | undefined;
