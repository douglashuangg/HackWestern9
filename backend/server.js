// import express from "express";
// import cors from "cors";
// import userinfo from "./api/userinfo.route.js";

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api" , (req , res) => {
    res.json({ message: "ligma balls" });
})

app.listen(PORT , () => {
    console.log(`Server listening on ${PORT}`);
});

// app.use(cors());
// app.usehttp://localhost:3001/api(express.json());
// server accepts json in body of request, server can read json

// app.use("/api/v1/userinfo", userinfo);
// app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
// returns 404 page if the req was not found

// export default app;
