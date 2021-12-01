import express from "express";

const app = express();
const port = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello from the API!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
