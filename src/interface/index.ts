import { ObjectId } from "mongoose";

export interface ISkill {
  name: string;
  url: string;
  image: string;
}

export interface IProject {
  title: string;
  live_link: string;
  frontend_github: string;
  backend_github: string;
  images: string[];
  description: string;
  technologies: ObjectId[];
}

export interface ITechnology {
  name: string;
  image: string;
}
