const express = require('express');
const { response } = require('../app');
const Movie = require('../models/movie.model');
const router = express.Router();


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next)=>{
    Movie.find({}, 'title image')
    .then((response)=>{
        //console.log(response);
        res.render("movies.hbs",{
            allMovies: response
        })
    })
    .catch((error) => {
        console.error("Error fetching movies:", error);
    })
})

router.get('/movies/:movieId', (req,res,next)=>{
let movieId = req.params.movieId
console.log(movieId);

Movie.findById(movieId)
.then((response)=>{
    console.log(response)
    
    res.render("showmore.hbs",{
        movieId:response
    })
})
.catch((error)=>{
    next(error)
})
})

module.exports = router;
