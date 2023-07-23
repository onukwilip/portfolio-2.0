import { ModelType, Stacktype } from "./types";

export class MenuClass {
  constructor(public name: string, public link: string, public icon: string) {}
}

export class ServiceClass {
  constructor(public name: string, public model: ModelType) {}
}

export class EachStackClass {
  constructor(
    public name: string,
    public image: string,
    public description: string,
    public style?: React.CSSProperties
  ) {}
}

export class EachSkillClass {
  constructor(
    public name: string,
    public image: string,
    public stack: Stacktype
  ) {}
}

export const toRadians = (deg: number) => (Math.PI / 180) * deg;
