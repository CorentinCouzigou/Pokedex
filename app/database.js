const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        dialect: 'postgres',
        timestamps: false,
  
    },
    dialectOptions: {
        require: true,
        rejectUnauthorized: false
    }

});

module.exports = sequelize;