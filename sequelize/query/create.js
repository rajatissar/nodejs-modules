import sequelize from '../connection';
import User from '../model/user';

sequelize
  .query('INSERT INTO table1(first_name,last_name) VALUES(:first_name,:last_name)', {
    raw: true,
    replacements: { first_name: 'Rajat', last_name: 'Parashar' },
  })
  .then((result) => {
    console.log('\x1b[32m', 'result');
    console.log('\x1b[0m', JSON.parse(JSON.stringify(result)));
  })
  .catch((err) => {
    console.log('\x1b[31m', err);
  });

const createQuery = { first_name: 'Rajat', last_name: 'Kumar' };

User.create(createQuery)
  .then((result) => {
    console.log('\x1b[32m', 'result');
    console.log('\x1b[0m', JSON.parse(JSON.stringify(result)));
  })
  .catch((err) => {
    console.log('\x1b[31m', err);
  });
