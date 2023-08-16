const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portofolio', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const TaskModel = require('./Task')(sequelize);

module.exports = {
  sequelize,
  Task: TaskModel
};