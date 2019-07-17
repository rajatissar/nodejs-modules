import sequelize from '../connection';
import User from '../model/user';
import Company from '../model/company';

sequelize.transaction((transaction1) => {
  console.log('>> chain all your queries here. make sure you return them');
  return User.create({
    first_name: 'Rajat',
    last_name: 'Transaction',
  }, { transaction: transaction1 }).then(() => {
    console.log('Second Query');
    return Company.create({
      city: 'Hisar',
      state: 'Haryana',
      countr: 'India',
    }, { transaction: transaction1 });
  });
}).then((result) => {
  const cloneResult = JSON.parse(JSON.stringify(result));
  console.log('Transaction has been committed', cloneResult);
}).catch((err) => {
  console.log('Transaction has been rolled back', err);
});
