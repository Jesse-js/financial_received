import express, { Request, Response } from "express";
import { router as receuvableRoute } from "./routes/receivables";
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/entry", receuvableRoute);
app.use("/", (request: Request, response: Response) => {
    response.json({
      message: "Hello World!",
    });
  });

app.listen(PORT, () => {
  console.log(`App listening in ${PORT} port`);
});
