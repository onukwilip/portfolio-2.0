import React from "react";
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

export class AchievementClass {
  constructor(
    public image: string,
    public name: string,
    public description: string,
    public skills: string[],
    public links: [string, string],
    public className?: string
  ) {}
}

export class ProjectClass extends AchievementClass {
  constructor(
    public image: string,
    public name: string,
    public description: string,
    public skills: string[],
    public links: [string, string],
    public className?: string,
    public is3D?: boolean
  ) {
    super(image, name, description, skills, links, className);
  }
}

export const toRadians = (deg: number) => (Math.PI / 180) * deg;
