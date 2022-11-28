'use strict';

const { User } = require('./Database/user.js');

function createServer() {
  const express = require('express');
  const cors = require('cors');
  const app = express();

  app.use(cors());

  app.get('/users', express.json(), async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.send(users);
    } catch (error) {
      res.status(500).json({ error })
    }
  });

  app.get('/max-following', express.json(), async (req, res) => {
    try {
      const users = await User.findAll({
        order: [['followersId', 'DESC']]
      });
  
      res.send(users.slice(0, 5));
    } catch (error) {
      res.status(500).json({ error })
    }
  });

  return app;
};

const PORT = process.env.PORT || 8080;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
