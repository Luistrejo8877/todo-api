import db from "../utils/database.js";
import { DataTypes } from "sequelize";

const Task = db.define('tasks', {

    title:{
        type: DataTypes.STRING(50),
        allowNull:false,
    },

    description:{
        type :DataTypes.TEXT,
        allowNull: false,
    },

    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
    userId:{
        type: DataTypes.INTEGER ,
        allowNull: false,
        field:"user_id"
    },
   
})

export default Task;