import { ITechnology } from "@/interface";
import mongoose, { Schema } from "mongoose";

const technologySchema = new Schema<ITechnology>({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    remove: true,
  },
});

const Technology =
  mongoose.models.Technology ||
  mongoose.model<ITechnology>("Technology", technologySchema);

export default Technology;
