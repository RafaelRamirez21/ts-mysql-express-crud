import {Request,Response} from 'express';
import Movie from '../models/movie';



export const getMovies= async (req:Request,res:Response)=>{
  const movies=await Movie.findAll();

  res.json(movies);
}
export const getMovie=async(req:Request,res:Response)=>{
  const {id}=req.params;

  const movie=await Movie.findByPk(id);

  res.json(movie)
}
export const postMovie=async (req:Request,res:Response)=>{
  const {body}=req;

  try {
       //validate
      const existTitle=await Movie.findOne({
        where:{
          mov_title:body.mov_title
        }
      });
      if (existTitle){
        return res.status(400).json({
          msg:'There is a movie with this title' +body.mov_title
        })
      }


    const movie =Movie.build(body);
    await movie.save()
    res.json(movie)
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg:'ERROR IN THE SERVER. CONTACT WITH ADMIN',
    })
    
  }
}
export const putMovie=async(req:Request,res:Response)=>{
  const{id}=req.params;
  const {body}=req;

  try {
    const movie=await Movie.findByPk(id);
    if(!movie){
      return res.status(404).json({
        msg:'There are not a user with this id ' + id
      })
    }
    await movie.update(body);
    res.json(movie);


 
} catch (error) {
 console.log(error)
 res.status(500).json({
   msg:'ERROR IN THE SERVER. CONTACT WITH ADMIN',
 })
 
}

}
export const deleteMovie=async(req:Request,res:Response)=>{
  const {id} = req.params;
  const movie=await Movie.findByPk(id);
    if(!movie){
      return res.status(404).json({
        msg:'There are not a user with this id ' + id
      })
    }
    // await movie.update({})
    await movie.destroy();


  res.json(movie)
}