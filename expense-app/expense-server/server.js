import express from "express";

const app = express();

app.use(express.json()); //middleware

app.use("/register", (req, res) => {});
