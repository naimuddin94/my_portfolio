import { ISkill } from "@/interface";
import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema<ISkill>({
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

const Skill =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", skillSchema);

export default Skill;
