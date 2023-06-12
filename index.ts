import express = require("express");
import bodyParser = require("body-parser");
import { AppDataSource } from "./src/data-source";
import { Blog } from "./src/entity/Blog";
import router from "./src/routers/web.router";

const PORT = 8888;

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

export const BlogRepo = AppDataSource.getRepository(Blog);

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

app.use(router)

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
})