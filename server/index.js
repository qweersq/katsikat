import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import userRoute from "./routes/UserRoute.js";
import shoesRoute from "./routes/ShoesTransactionRoute.js";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

// (async() => {
//   await db.sync();
// })();
 
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}))

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use(express.json());
app.use(userRoute);
app.use(shoesRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running...`);
});