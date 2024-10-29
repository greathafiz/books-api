import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/books.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api/v1/books", router);
const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
