import { ModelType } from "./types";

export class MenuClass {
  constructor(public name: string, public link: string, public icon: string) {}
}

export class ServiceClass {
  constructor(public name: string, public model: ModelType) {}
}

export const toRadians = (deg: number) => (Math.PI / 180) * deg;
