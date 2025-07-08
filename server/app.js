import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mailRoutes from "./routes/mailRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
  origin: "https://codercamp.ashraful.in", 
}));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/contact", mailRoutes);
app.use("/api/subscribe", subscribeRoutes);


export default app;
