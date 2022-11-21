'use strict';

import { faker } from '@faker-js/faker';

function createRandomUser() {
  const gender = faker.name.sexType();
  const firstName = faker.name.firstName(gender);
  const friendsId = [];

  return {
    firstName,
    gender,
    friendsId
  };
};

const users = [];

for (let i = 1; i <= 200; i++) {
  const user = createRandomUser();

  user.id = i;
  users.push(user);
};

export default { users };
