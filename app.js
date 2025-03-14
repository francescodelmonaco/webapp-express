import express from "express";

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Server "movies" tutto a posto!')
});

import movieRouter from "./routes/movieRouter.js";
import imagePathMiddleware from "./middlewares/imagePath.js";

// middlewares
app.use(express.static("public"));
app.use('/img', express.static('img'));
app.use(express.json());
app.use(imagePathMiddleware);

app.use("/movies", movieRouter);

// attivazione server
app.listen(port, () => {
    console.log(`Server "movies" in funzione sulla porta: ${port}`);
});