import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbconfig.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
const app = express();
dotenv.config({});

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // is used  to parse incoming request with URL-encoded payloads. and as it is true will allow parsing of nested objects and arrays using qs library
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",

  credentials: true,
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;

// User API call
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
