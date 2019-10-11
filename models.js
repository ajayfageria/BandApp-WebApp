const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const userinfo=sequelize.define('userinfos',{
    name:Sequelize.STRING,
    comp:Sequelize.STRING,
    dob:Sequelize.DATEONLY,
    email:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    password:Sequelize.STRING
})


const band=sequelize.define('bands',{
    title:Sequelize.STRING,
    description:Sequelize.STRING,
    email:Sequelize.STRING
})

module.exports={
    userinfo,
    band,
    sequelize
}