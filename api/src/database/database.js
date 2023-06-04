import Sequelize from 'sequelize'; 


export const sequelize = new Sequelize(
    'supervisa', 
    'postgres', 
    '1085325163', 
{
host:  'localhost',
dialect: 'postgres'
})
  