import { GroupProps } from "@react-three/fiber";
import { ForwardRefExoticComponent, RefAttributes, ChangeEvent } from "react";
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
export type Stacktype = "frontend" | "backend" | "database" | "other";
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

export type InputType = {
  className?: string;
  activeClassName?: string;
  label?: string;
  icon?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | undefined;
  onBlur?: () => void;
  name?: string;
  type?: string;
  placeholder?: string;
  id: string;
  hideLabel?: boolean;
  error?:
    | {
        content: string;
        position?: {
          top?: string | number;
          left?: string | number;
          bottom?: string | number;
          right?: string | number;
        };
      }
    | boolean;
};

export type FileUploadType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: () => any;
  value?: File | string;
  label: string;
  className?: string | any;
};

export type ImgUploadType = {
  onChange: (a: any) => any;
  value?: string | any;
  label?: string;
  className?: string | any;
  triggerReset: boolean;
  initialImage?: string | null;
  removeInitialImage?: Function;
};

export type MenuReducer = {
  display: boolean;
};

export type SelectorType = {
  menu: MenuReducer;
};
