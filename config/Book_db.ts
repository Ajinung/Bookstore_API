import mongoose from "mongoose";

const URI = "mongodb://localhost";

const lifeURI: string =
  "mongodb+srv://Izick:Bashiware97@cluster0.xntposv.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log(`database connection established`);
  })
  .once("error", (error) => {
    console.log(`error connecting to database`);
  });
