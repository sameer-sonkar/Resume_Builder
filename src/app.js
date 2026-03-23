import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// how to install cookie-parser ? you can install cookie-parser using npm by running the command `npm install cookie-parser`. This will add cookie-parser to your project's dependencies and allow you to use it in your code to parse cookies from incoming requests.
// how to install cors ? you can install cors using npm by running the command `npm install cors`. This will add cors to your project's dependencies and allow you to use it in your code to enable Cross-Origin Resource Sharing (CORS) for your application, which is necessary when your frontend and backend are hosted on different domains or ports.
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
