import express from "express";
import { Router } from "./routes";

const app = express();
app.use(express.json());
app.use(Router);

app.get("/", (req, res) => {
  return res.send("success to access library api");
});

app.listen(8080, () => {
  console.log("server running in 8080");
});
