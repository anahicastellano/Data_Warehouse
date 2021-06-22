  
const { Sequelize } = require("sequelize")

const db = new Sequelize ("data_ware", "root", "", { 
    host: "localhost",
    port: 3306,
    dialect: "mysql"
}
)

module.exports = { db }