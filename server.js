'use strict';

const { Op } = require('sequelize');
const { User } = require('./models/user.js');

function createServer() {
  const express = require('express');
  const cors = require('cors');
  const app = express();

  app.use(cors());

  app.get('/users', express.json(), async (req, res) => {
    try {
      const users = await User.findAll({
        where: {
          followersId: {
            [Op.ne]: ['-1']
          }
        }
      });

      res.send(users);
    } catch (error) {
      res.status(500).json({ error })
    }
  });

  app.get('/users/:userId/friends', express.json(), async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({
        where: {
          id: userId,
        }
      });

      const sortCol = req.query.order_by || 'id';
      const sortDir = req.query.order_type || 'DESC';

      if (!user) {
        res.send(404);
      }

      const userSubs = user.followersId;

      const userFollowers = await User.findAll({
        where: {
          followersId: {
            [Op.contains]: [`${userId}`]
          }
        },
        order: [[sortCol, sortDir]]
      });

      const friends = userFollowers.filter(user => userSubs.includes(user.id))
      const friendsInfo = {
        countOfFriends: friends.length,
        friends: friends
      }

      res.send(friendsInfo)
    } catch (error) {
      res.status(500).json({ error })
    }
  })

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

  app.get('/not-following', express.json(), async (req, res) => {
    try {
      const users = await User.findAll({
        where: {
          followersId: {
            [Op.contains]: ["-1"]
          }
        }
      });

      res.send(users);
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
