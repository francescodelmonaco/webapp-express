import express from "express";
import cors from "cors";

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Server "movies" tutto a posto!')
});

import movieRouter from "./routes/movieRouter.js";
import imagePathMiddleware from "./middlewares/imagePath.js";

// middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(imagePathMiddleware);
// cors
app.use(
    cors({
        origin: process.env.FRONTEND_APP,
    })
);

app.use("/movies", movieRouter);

// attivazione server
app.listen(port, () => {
    console.log(`Server "movies" in funzione sulla porta: ${port}`);
});