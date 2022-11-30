'use strict';

const { sequelize } = require('.');;
const DataTypes = require('sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  followersId: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  }
}, {
  tableName: 'Users',
  createdAt: true,
  updatedAt: true
});

module.exports = { User };
