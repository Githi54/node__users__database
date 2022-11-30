'use strict';

const { faker } = require('@faker-js/faker');

function createRandomUser(id) {
  const gender = faker.name.sexType();
  const firstName = faker.name.firstName(gender);
  const followersId = [];
  const createdAt = new Date();
  const updatedAt = new Date();

  return {
    id,
    firstName,
    gender,
    followersId,
    createdAt,
    updatedAt
  };
};

function createFollowers(user) {
  const iterationCount = Math.floor(Math.random() * 150);

  if (iterationCount <= 50) {
    user.followersId.push(-1);

    return user;
  }

  for (let i = 0; i <= iterationCount; i++) {
    const randomUserId = Math.floor(Math.random() * 200);

    user.followersId.push(randomUserId);
  }

  return user;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];

    for (let i = 1; i <= 200; i++) {
      const user = createRandomUser(i);
    
      users.push(user);
    };

    users.map(user => createFollowers(user));

    console.log(users);

   return queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
