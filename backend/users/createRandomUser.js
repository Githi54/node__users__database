'use strict';
import { faker } from '@faker-js/faker';

export function createRandomUser(id) {
  const gender = faker.name.sexType();
  const firstName = faker.name.firstName(gender);
  const followersId = [];

  return {
    id,
    firstName,
    gender,
    followersId
  };
};
