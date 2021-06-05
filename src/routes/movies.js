const { Router } = require('express');
const router = Router();
const under = require('underscore');

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.send(movies);
});

router.post('/', (req, res) => {
    const { tittle, director, year, rating } = req.body;
    if(tittle &&director && year && rating){
        const id = movies.length + 2
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.json(movies);
    } else {
        // ERROR MESSAGE EXAMPLE
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { tittle, director, year, rating } = req.body;
    if(tittle && director && year && rating){
        under.each(movies, (movie, id_move) => {
            if(movie.id == id){
                movie.tittle = tittle;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    under.each(movies, (movie, id_move) => {
        if(movie.id == id){
            movies.splice(id_move, 1);
        }
    });
    res.send(movies);
});

module.exports = router;