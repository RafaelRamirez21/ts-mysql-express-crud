import { Router } from "express";
import { deleteMovie, getMovie, getMovies, postMovie, putMovie } from "../controllers/movies";
const router =Router();

router.get('/',        getMovies)
router.get('/:id',     getMovie)         //get-read
router.post('/',       postMovie)        //create
router.put('/:id',     putMovie)         //update-replace
router.delete('/:id',  deleteMovie)       //delete







export default router;