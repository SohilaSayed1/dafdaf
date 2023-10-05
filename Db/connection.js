import { Sequelize, DataTypes } from 'sequelize';
export const sequelize = new Sequelize('daf_ums', 'daf_ums_user', 'tspH5wZUWCaV1v7LlAQct2anaNQhma1a', {
    host:'dpg-ckf9vtol3its73bem01g-a',
    port:5432,
    dialect:'postgres'
  });

export const connectDB = async () => {
  try {
    
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync({alter:true});
    

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};