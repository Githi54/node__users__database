'use strict';

import { createFollowers } from './createFollowers';
import { createRandomUser } from './createRandomUser';

const users = [];

for (let i = 1; i <= 200; i++) {
  const user = createRandomUser(i);

  users.push(user);
};

users.map(user => createFollowers(user));

export default { users };
