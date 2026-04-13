import path from 'node:path';
import { faker } from '@faker-js/faker';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');



export const createFakeContact = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
};
