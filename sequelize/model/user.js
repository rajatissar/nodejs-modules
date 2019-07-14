import Sequelize from 'sequelize';

import sequelize from '../connection';

const User = sequelize.define('table1', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
    field: 'last_name',
  },
  fieldWithUnderScoreName: {
    type: Sequelize.STRING,
    field: 'field_with_underscore_name',
  },
});

User.sync();

export default User;
