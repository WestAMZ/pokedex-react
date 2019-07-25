import React,{Component} from 'react';
import './PokemonList.css';
//Api
const conn =  require('../Repository/Connection');

class PokemonList extends Component
{
    constructor()
    {
        super();
        this.offset=0;
        this.limit=20;
        this.getList = this.getList.bind(this);
        this.state =
        {
            pokemons : []
        };
        this.getList()
    }
    render(){
        const list = this.state.pokemons.map((pokemon,index)=>
            {
                return(
                    <div className="col s6 m4 l3">
                        <div className="card ">

                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={"https://pokeres.bastionbot.org/images/pokemon/" + (index+1 ) + ".png"} img />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{pokemon.name}<i className="material-icons right">more_vert</i></span>
                                <p><a href="#">See more</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>Description</p>
                            </div>

                        </div>
                    </div>
                        ); 
            });
        return (
        <div className="container">
            <div className="row">
            {list}
            </div>
        </div>
        )
    }
    getList()
    {
        conn.getPokemons(this.limit,this.offset)
        .then((res)=>{
            if(this.offset===0)
            {
                this.setState({pokemons:[... res]});
            }
            else
            {
                this.setState({pokemons:[this.state.pokemons,... res]});
            }
            this.offset += 20;
        });   
    }
    
}
export default PokemonList;
