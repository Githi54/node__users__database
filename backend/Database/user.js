'use strict';

import { sequelize } from './db.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('User', {
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
  tableName: 'users',
  createdAt: true,
  updatedAt: true
});


