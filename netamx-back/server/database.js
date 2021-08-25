const Sequelize = require('sequelize')
const initModels = require('./store/models/init-models')
require('./config/config');

var db = {}
const sequelize = new Sequelize(process.env.NAME_DATABASE, process.env.USER_DATABASE , process.env.PASSWORD_DATABASE, {
    host: process.env.DATABASE_URL,
    port: '3306',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: 0,
    //timezone: '00:00'
    //timezone:"America/Monterrey",
    //charset: 'utf8',
    //collate: 'utf8_general_ci',
})
/*
let models = [
    require('./store/models/catalog_actions.js'),
    require('./store/models/superheroe.js'),
    require('./store/models/rol.js'),
]
*/

// Initialize models
/*
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})
*/
// Apply associations
/*
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})
*/
db = { ...initModels(sequelize) }
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
