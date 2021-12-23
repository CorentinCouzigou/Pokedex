const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        dialect: 'postgres',
        timestamps: false,
    }
});

module.exports = sequelize;