const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('undone', 'done'),
      allowNull: false,
      defaultValue: 'undone'
    }
  });

  return Task;
};
