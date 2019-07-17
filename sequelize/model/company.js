import Sequelize from 'sequelize';

import sequelize from '../connection';

const Company = sequelize.define('table2', {
  name: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
});

Company.sync();

export default Company;
