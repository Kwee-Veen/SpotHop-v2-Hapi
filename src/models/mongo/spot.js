import { Schema, model } from "mongoose";
const spotSchema = new Schema({
    name: String,
    description: String,
    img: String,
    category: String,
    latitude: Number,
    longitude: Number,
    userid: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
export const SpotMongoose = model("Spot", spotSchema);
