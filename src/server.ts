import express, { Request, Response } from "express";
import { router as receivableRoute } from "./routes/receivables";
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/entry", receivableRoute);
app.use("/", (request: Request, response: Response) => {
    response.json({
      message: "Hello World!",
    });
  });

app.listen(PORT, () => {
  console.log(`App listening in ${PORT} port`);
});
