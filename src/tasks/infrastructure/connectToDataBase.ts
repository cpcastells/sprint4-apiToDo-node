import mongoose from "mongoose";

const connectToDatabase = async (mongodbUrl: string): Promise<void> => {
  try {
    mongoose.set("debug", true);
    mongoose.set("toJSON", {
      virtuals: true,
      versionKey: false,
      transform(doc, ret) {
        delete ret._id;
      },
    });

    await mongoose.connect(mongodbUrl);

    console.log("MongoDB Connected...");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }

    process.exit(1);
  }
};

export default connectToDatabase;
