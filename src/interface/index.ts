import { ObjectId } from "mongoose";

export interface ITechnology {
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
