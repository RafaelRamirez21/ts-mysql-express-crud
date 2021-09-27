import { DataTypes } from "sequelize";
import db from "../db/connection";

const Movie=db.define('movie',{
  mov_title:{
    type:DataTypes.STRING
  },
  mov_year:{
    type:DataTypes.INTEGER
  },
  mov_time:{
    type:DataTypes.INTEGER
  },
  mov_lang:{
    type:DataTypes.STRING
  },
  mov_dt_rel:{
    type:DataTypes.DATE
  },
  mov_rel_country:{
    type:DataTypes.STRING
  },

},{
  freezeTableName:true
});

export default Movie;