import { Dbcon } from "./src/config/configration.js";
import chalk from "chalk";
import { config } from "dotenv";
import express, { json, urlencoded } from "express";
import cors from "cors";

Dbcon();

const app = express();
const coreConfig = {
  origin: "*",
  Credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};
app.use(json());
app.use(cors(coreConfig));
app.options("", cors(coreConfig));
app.use(urlencoded({ extended: false }));
const port = process.env.PORT || 8010;

app.get("/", (_, res) => res.send("Learn GraphQL!"));

app.listen(port, () =>
  console.log(
    chalk.bgHex("#193547").hex("#ecf4f8")(
      "Blogging app port",
      chalk.bgHex("#FFA500").hex("#000")(`http://localhost:${port}/`)
    )
  )
);
