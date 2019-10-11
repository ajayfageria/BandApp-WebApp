const Sequelize = require('sequelize')
const sequelize=new Sequelize('bandapp','root','root',{
    dialect:'mysql',
})
exports.sequelize = sequelize;
module.exports = sequelize;
//module.exports = sequelize