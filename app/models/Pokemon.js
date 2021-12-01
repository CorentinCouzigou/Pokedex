const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Pokemon extends Model { }

Pokemon.init({
    id: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false, unique: true },
    nom: { type: DataTypes.TEXT, allowNull: false, unique: true },
    pv: { type: DataTypes.INTEGER, allowNull: false, },
    attaque: { type: DataTypes.INTEGER, allowNull: false, },
    defense: { type: DataTypes.INTEGER, allowNull: false, },
    attaque_spe: { type: DataTypes.INTEGER, allowNull: false, },
    defense_spe: { type: DataTypes.INTEGER, allowNull: false, },
    vitesse: { type: DataTypes.INTEGER, allowNull: false, },
    numero: { type: DataTypes.INTEGER, allowNull: false, unique: true },
},
    {
        sequelize,
        tableName: "pokemon"
    });

module.exports = Pokemon;