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

export class WorkDurationClass {
  constructor(public month: string, public year: string) {}
}

export class WorkClass {
  constructor(
    public name: string,
    public link: string,
    public role: string,
    public timeline: {
      start: WorkDurationClass;
      end: WorkDurationClass | undefined;
    },
    public content: string | { description?: string; list: string[] },
    public image: string
  ) {}
}

export class AccordionClass {
  constructor(
    public Heading: string | React.ReactNode,
    public Content: string | React.ReactNode
  ) {}
}

export const toRadians = (deg: number) => (Math.PI / 180) * deg;
