const axios = require('axios');
const base_URL = "https://pokeapi.co/api/v2/";

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
       
    }
}


