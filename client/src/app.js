import express from "express";
import dbConnectToDB from "./config/dbConnection.js";

const app = express();
const connection = await dbConnectToDB();

connection.on("error", (error) => {
    console.error("Connection failed, error below: \n" + error);
});

connection.once("open", () => {
    console.log(`conection is on with mongoDB\n`);
});


export default app;
