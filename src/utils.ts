import React, { ReactNode } from "react";
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

export class ArticleClass {
  constructor(
    public title: string,
    public content: string,
    public image: string,
    public URL: string,
    public tags: string[]
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
    public id: string,
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
    public id: string,
    public className?: string,
    public is3D?: boolean
  ) {
    super(image, name, description, skills, links, id, className);
  }
}

export class CertificationClass {
  public ["certificate-name"]: string;
  public ["certificate-Id"]: string;
  public ["certificate-URL"]: string;
  public ["certificate-image"]: string;
  public ["certificate-issuedBy"]: string;
  constructor(
    name: string,
    certificateId: string,
    certificateURL: string,
    image: string,
    issuedBy: string
  ) {
    this["certificate-name"] = name;
    this["certificate-Id"] = certificateId;
    this["certificate-URL"] = certificateURL;
    this["certificate-image"] = image;
    this["certificate-issuedBy"] = issuedBy;
  }
}

export class TestimonialClass {
  constructor(
    public name: string,
    public title: string | ReactNode,
    public review: string,
    public image: string
  ) {}
}

export class ServicesOptionClass {
  constructor(public label: string, public id: string) {}
}

export class SocialLinks {
  constructor(
    public name: string,
    public icon: string | React.ReactNode,
    public url: string
  ) {}
}

export const toRadians = (deg: number) => (Math.PI / 180) * deg;
