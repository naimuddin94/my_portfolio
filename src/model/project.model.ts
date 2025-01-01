import { IProject } from "@/interface";
import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true,
  },
  live_link: {
    type: String,
    required: true,
  },
  frontend_github: {
    type: String,
    required: true,
  },
  backend_github: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    remove: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
});

const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export default Project;
