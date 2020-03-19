const Sequelize = require('sequelize');

const sequelize = new Sequelize('crudpet', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}