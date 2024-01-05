import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: 0,
  },
})
export class Opinion {
  @prop({ default: () => new Date() })
  createdAt: Date;

  @prop({ default: () => new Date() })
  updatedAt: Date;

  @prop()
  _id: string;

  @prop()
  name: string;

  @prop()
  rank: number;

  @prop()
  comment: string;

  @prop()
  email: string;

  @prop()
  doctorName: string;

  @prop()
  doctorId: string;

  @prop({ default: false })
  aproved: boolean;
}

export const OpinionModel = getModelForClass(Opinion);
