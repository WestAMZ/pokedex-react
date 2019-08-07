import React,{Component} from 'react';
import './PokemonList.css';
import { Link } from 'react-dom';
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
        this.loadDescription = this.loadDescription.bind(this);
        this.state =
        {
            pokemons : []
        };
        this.getList();
        this.props.observer.observe(this.image);
    }
    render(){
        const list = this.state.pokemons.map((pokemon,index)=>
            {
                return(
                    <div className="col s6 m4 l3 pokemon" key={index+1}>
                        <div className="card ">

                            <div className="card-image waves-effect waves-block waves-light" onClick={this.loadDescription.bind(this,index)}>
                                <img className="activator" src={"https://pokeres.bastionbot.org/images/pokemon/" + (index+1 ) + ".png"} 
                                ref={node => { this.image = node }} img  />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{pokemon.name}<i className="material-icons right">more_vert</i></span>
                                <p><a href={"/info/"+(pokemon.name)}>See more</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                <p>{(pokemon.description)?pokemon.description:"Description"}</p>
                            </div>

                        </div>
                    </div>
                        ); 
            });
        return (
        <div pokemonlist container-fluid>
            <div className="pokemonlist container">
                <div className="row">
                {list}
                </div>
            </div>
            <a id="scale-demo" href="#!" className="btn-floating btn-large scale-transition">
                <i className="material-icons" onClick={this.getList}>add</i>
            </a>

            
            <a id="scale-demo" href="#!" className="btn-floating btn-large scale-transition scale-out">
                <i className="material-icons">add</i>
            </a>
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
                this.setState((state)=>{
                    return {pokemons:[...state.pokemons,... res]}
                });
                console.log(this.state.pokemons);
                this.render();
            }
            this.offset += 20;
        });   
    }
    loadDescription(index)
    {
        
         let desc = conn.getPokemonInfo(this.state.pokemons[index].name);
         console.log(desc);
        //  if(desc)
        //  {
        //      this.setState((state)=>
        //      {
        //          state.pokemon[index].description = desc;
        //      });
        //  }
    }
    componentDidMount () {
        this.props.observer.observe(this.image)
      }
    
}
export default PokemonList;
