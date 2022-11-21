'use strict';

import { createFollowers } from './createFollowers.js';
import { createRandomUser } from './createRandomUser.js';

const users = [];

for (let i = 1; i <= 200; i++) {
  const user = createRandomUser(i);

  users.push(user);
};

users.map(user => createFollowers(user));

export default { users };
