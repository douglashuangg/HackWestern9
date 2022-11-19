import express from "express";
import cors from "cors";
import userinfo from "./api/userinfo.route.js";

const app = express();

app.use(cors());
app.use(express.json());
// server accepts json in body of request, server can read json

app.use("/api/v1/userinfo", userinfo);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
// returns 404 page if the req was not found

export default app;
