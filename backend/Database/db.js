'use strict';

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'papamama',
  {
    host: 'localhost',
    port: 5432,
    schema: 'public',
    dialect: 'postgres',
  }
);