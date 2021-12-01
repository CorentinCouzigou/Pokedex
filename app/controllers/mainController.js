const { Pokemon, Type } = require('../models');

const mainController = {
  async homePage(_, res) {
    try {
      const allPokemons = await Pokemon.findAll();
      res.render('index.ejs', { allPokemons });
    } catch (e) {
      console.log(e)
      res.status(500).send('Erreur ! ');
    }
  },

  async detailsPokemon(req, res) {
    try {
      const pokemonId = Number(req.params.id);
      const getOnePokemon = await Pokemon.findByPk(pokemonId, {
        include: [{
          association: "types",
        }]
      });
      console.log(getOnePokemon)
      res.render('detailPokemon', { onePokemon: getOnePokemon })
    } catch (e) {
      console.log(e)
      res.status(500).send('Erreur ! ');
    }
  },

  async handleAllTypes(_, res) {
    try {
      const getAllTypes = await Type.findAll();
      res.render('type', { allTypes: getAllTypes })
    } catch (e) {
      console.log(e)
      res.status(500).send('Erreur ! ');
    }
  },

  async handlePokemonsByTypes(req, res) {
    try {
      const typeId = Number(req.params.id);
      const getPokemonsWithOneType = await Type.findByPk(typeId, {
        include: [{
          association: "pokemons",
          include: [{
            association: "types"
          }]
        }]
      })
      console.log('getPokemonsWithOneType', getPokemonsWithOneType.pokemons[0].types)
      res.render('oneType', { allPokemons: getPokemonsWithOneType.pokemons })
    } catch (e) {
      console.log(e);
    }
  }
};

module.exports = mainController;