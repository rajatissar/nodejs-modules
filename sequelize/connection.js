import Sequelize from 'sequelize';

const sequelize = new Sequelize(null, 'root', '1',
  {
    dialect: 'mysql',
    database: 'demo1',
    define: {
      timestamps: false, // createdAt and updatedAt fields will be ommited
      freezeTableName: true, // table name will not be pluralize
      underscored: true, // table names will be seperated by underscore
      // logging: false, // will hide sql quering from console
      pool: {
        min: 0,
        max: 5,
        idle: 10000,
      },
    },
  });

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to the database:', JSON.stringify(err)));

export default sequelize;
