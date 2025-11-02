import express from "express";
import dbConnectToDB from "./config/dbConnection.js";
import routes from "./routers/index.js";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());

routes(app);

const connection = await dbConnectToDB();

connection.on("error", (error) => {
    console.error("Connection failed, error below: \n" + error);
});

connection.once("open", () => {
    console.log(`conection is on with mongoDB\n`);
});

export default app;
