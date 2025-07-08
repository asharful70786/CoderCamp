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

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});