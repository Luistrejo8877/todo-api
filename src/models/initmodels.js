import User from "./users.models.js";
import Task from "./tasks.models.js";
import Category from "./categories.models.js";


const initmodels = () => {

  User.hasMany(Task, {foreignKey: 'userId'})
  Task.belongsTo(User, {foreignKey: 'userId'})

  User.hasMany(Category, { foreignKey: 'userId'})
  Category.belongsTo(User, {foreignKey: 'user_id'})

  Task.belongsToMany(Category, { through:"TaskCategories"})
  Category.belongsToMany(Task, {through: "TaskCategories"})

}



export default initmodels