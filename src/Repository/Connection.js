const axios = require('axios');
const base_URL = "https://pokeapi.co/api/v2/";

module.exports =
{
    getPokemons: async function () 
    {
        return await axios.get(base_URL+"pokemon")
        .then(function(response){
            console.log("Todo bien");
           return response.data.results;
        })
        .catch(function(err)
        {
            return null;
        });
       
    }
}


