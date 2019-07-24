import React,{Component} from 'react';

//Api
const conn =  require('../Repository/Connection');

class PokemonList extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            pokemons : [],
            lista : ""
        };
        this.getList = this.getList.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        this.getList({});
        return (
        <div className=" card">
            {pokemons}
            {console.log(pokemons)}
            <strong>PokemonList</strong>
        </div>
        )
    }
    getList(params)
    {
        conn.getPokemons()
        .then((res)=>{
            this.setState({pokemons:... res});
            this.setState()= this.state.pokemons.map((pokemon,index)=>
        {
            return(
                <div className="col-md-4" key={index}>
                        <div className="card mt-4">
                            <div className="card-header">
                                <h3>{pokemon.name}</h3>
                                <span className="badge badge-pill badge-danger ml-2">.
                                </span>
                            </div>
                            <div className="card-body">
                                <strong>{pokemon.url}</strong>
                            </div>
                        </div>
                    </div>
                    ); 
        });
        });
    }
}
export default PokemonList;
