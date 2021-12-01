const Pokemon = require('./Pokemon');
const Type = require('./Type');

Pokemon.belongsToMany(Type, {
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
    as: 'types',
    through: 'pokemon_type',
})

Type.belongsToMany(Pokemon, {
    foreignKey: 'type_id',
    otherKey: 'pokemon_id',
    through: 'pokemon_type',
    as: 'pokemons',

})

module.exports = {
    Pokemon,
    Type
};