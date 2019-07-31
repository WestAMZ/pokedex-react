const axios = require('axios');
const base_URL = "https://pokeapi.co/api/v2/";
const base_URL2 = "https://pokeapi.bastionbot.org/v1/pokemon/"

module.exports =
{
    getPokemons: async function (limit,offset) 
    {
        return await axios.get(base_URL+"pokemon/?limit="+limit+"&offset="+offset)
        .then(function(response){
            console.log("offset: "+offset);
           return response.data.results;
        })
        .catch(function(err)
        {
            return null;
        });
       
    },

    getPokemonInfo: async function (name) 
    {
        return await axios.get(base_URL2+'/'+name)
        .then(function(response){
            console.log(response);
           return response.data.results;
        })
        .catch(function(err)
        {
            return null;
        });
       
    }
}


