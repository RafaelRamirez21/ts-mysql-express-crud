import express,{Application} from 'express';
import moviesRoutes from '../routes/movies';
import cors from 'cors';
import db from '../db/connection';
import homeRoutes from '../routes/home'


class Server{
  private app:Application;
  private port:string;
  private apiPaths={
    movies:'/movies',
    home:'/',
    // movies:'/',
  };

  constructor(){
    this.app=express();
    this.port=process.env.PORT || '8000';
    this.dbConnection();
    this.middlewares();
    this.routes();
    this.routes_h();
    
  }
  middlewares(){      
    //Cors
    this.app.use(cors());
  
    //read body
    this.app.use(express.json());

    //dist folder
    this.app.use(express.static('public'));

  } 

  async dbConnection(){
    try {
      await db.authenticate();
      console.log('Database is online');

    } catch (error) {
      throw new Error('this error '+error);
      
    }
  }

  routes(){
    this.app.use(this.apiPaths.movies,moviesRoutes)
  }
  routes_h(){
    this.app.use(this.apiPaths.home,homeRoutes)
  }

  listen(){
    this.app.listen(this.port,()=>{
      console.log('this server in in the port !!' +this.port)
    })
  }
}

export default Server;