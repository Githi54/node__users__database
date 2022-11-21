'use strict';

import { faker } from '@faker-js/faker';

function createRandomUser() {
  const gender = faker.name.sexType();
  const firstName = faker.name.firstName(gender);
  const followerId = [];

  return {
    firstName,
    gender,
    followerId
  };
};

const users = [];

for (let i = 1; i <= 200; i++) {
  const user = createRandomUser();

  user.id = i;
  users.push(user);
};

function createFollowers(user) {
  const iterationCount = Math.floor(Math.random() * 150);

  if (iterationCount <= 50) {
    return user;
  }

  for (let i = 0; i <= iterationCount; i++) {
    const randomUserId = Math.floor(Math.random() * 200);

    user.followerId.push(randomUserId);
  }

  return user;
}

users.map(user => createFollowers(user));

export default { users };

console.log(users);
