import connection from "../data/db.js";

function index(req, res) {
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, results) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server INDEX function',
            });

        res.json(results);

        // console.log(req.imagePath);

        // const movies = results.map((movie) => {
        //     return {
        //         ...movie,
        //         image: req.imagePath + movie.title
        //     };
        // });

        // res.json(movies);
    });
};

function show(req, res) {
    const { id } = req.params;
    const movieSql = "SELECT * FROM movies WHERE id = ?";
    const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(movieSql, [id], (err, results) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server SHOW function'
            });

        if (results.length === 0)
            return res.status(404).json({
                error: 'Movie not found',
            });

        const movie = results[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err)
                return res.status(500).json({
                    error: 'Errore lato server SHOW function'
                });

            movie.reviews = reviewsResults;

            res.json(movie);

            // res.json({
            //     ...movie,
            //     image: req.imagePath + movie.image
            // });

            // res.json(movie);
        });
    });
};

function update(req, res) {
    const { id } = req.params;
    const { image } = req.body;

    const sql = `
    UPDATE movies
    SET image = ?
    WHERE id = ?;
    `

    connection.query(sql, [image, id], (err) => {
        if (err)
            return res.status(500).json({
                error: 'Errore lato server UPDATE function'
            });

        res.json({ message: "Movie update successfully" });
    })
};

export { index, show, update };