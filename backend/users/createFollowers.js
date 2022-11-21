'use strict';

export function createFollowers(user) {
  const iterationCount = Math.floor(Math.random() * 150);

  if (iterationCount <= 50) {
    return user;
  }

  for (let i = 0; i <= iterationCount; i++) {
    const randomUserId = Math.floor(Math.random() * 200);

    user.followersId.push(randomUserId);
  }

  return user;
}
