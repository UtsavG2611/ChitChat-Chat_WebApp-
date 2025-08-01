import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "CHIT_CHAT",
    })
    .then(() => {
        console.log("Connected to database.");
    })
    .catch((err)=>{
        console.log(`Error connecting to database: ${err.message || err}`);
    });
};