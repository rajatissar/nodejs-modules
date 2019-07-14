import sequelize from '../connection';
import User from '../model/user';

sequelize
  .query('SELECT * FROM table1 WHERE id=:id', {
    replacements: { id: 1 },
  })
  .then((result) => {
    console.log('\x1b[32m', 'result');
    console.log('\x1b[0m', JSON.parse(JSON.stringify(result)));
  })
  .catch((err) => {
    console.log('\x1b[31m', err);
  });

User.findAll().then((result) => {
  console.log('\x1b[32m', 'result');
  console.log('\x1b[0m', JSON.parse(JSON.stringify(result)));
})
  .catch((err) => {
    console.log('\x1b[31m', err);
  });
