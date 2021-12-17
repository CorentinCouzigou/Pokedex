
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        dialect: 'postgres',
        timestamps: false,
    }
});

module.exports = sequelize;