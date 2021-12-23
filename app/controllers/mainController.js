const { Pokemon, Type } = require('../models');

const mainController = {
  async homePage(_, res) {
    try {
      const allPokemons = await Pokemon.findAll();
      res.render('index.ejs', { allPokemons });
    } catch (e) {
      console.error(e)
      res.status(500).send('Erreur enregistrement pour la page d\'accueil ! ');
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
      res.render('detailPokemon', { onePokemon: getOnePokemon })
    } catch (e) {
      console.error(e)
      res.status(500).send('Erreur ! ');
    }
  },

  async handleAllTypes(_, res) {
    try {
      const getAllTypes = await Type.findAll();
      res.render('type', { allTypes: getAllTypes })
    } catch (e) {
      console.error(e)
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
      res.render('oneType', { allPokemons: getPokemonsWithOneType.pokemons })
    } catch (e) {
      console.error(e);
    }
  }
};

module.exports = mainController;