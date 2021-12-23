const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");
class Type extends Model { }

Type.init({
    id: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, unique: true },
    old_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    color: { type: DataTypes.STRING(6), allowNull: false },
}, {
    sequelize,
    tableName: 'type'
});

module.exports = Type;