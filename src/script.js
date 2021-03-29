// const picture1 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png';
// const picture2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';

const urls = {
    allOriginalPokemonUrl: 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0',
    pokemonDataByName: function (name) { return `https://pokeapi.co/api/v2/pokemon/${name}/` },
    pokemonDataById: function (id) { return `https://pokeapi.co/api/v2/pokemon/${id}/` },
    pokemonPictureByIdUrl: function (pokemonId) { return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` }
};

function getData(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(e => console.log('ERROR_ON_GET_DATA', e));
    });
}

const httpMethod = {
    get: function(url) { return getData(url) }
};

/** INIT APP **/

const initApp = async () => {
    const originalPokemons = await httpMethod.get(urls.allOriginalPokemonUrl);
    console.log('ORIGINAL_POKEMONS', originalPokemons);

    const pikachu = await httpMethod.get(urls.pokemonDataByName('pikachu'));
    console.log('PICACHU_DATA_BY_NAME', pikachu);

    const pikachuById = await httpMethod.get(urls.pokemonDataById(25));
    console.log('PICACHU_DATA_BY_ID', pikachuById);

    const pikachuPictureUrl = await httpMethod.get(urls.pokemonPictureByIdUrl(25));
    console.log('PIKACHU_PICTURE_URL', pikachuPictureUrl)
};

initApp();
