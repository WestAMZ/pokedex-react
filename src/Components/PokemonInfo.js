import React,{Component} from 'react';
import './PokemonList.css';
//Api
const conn =  require('../Repository/Connection');

class PokemonInfo extends Component
{
    constructor()
    {
        super(); 
        this.state = {
            name:'',
            info:{

            }
        }
    }
    render()
    {
        return(
            <div className="info">
                <img className="activator" src={"https://pokeres.bastionbot.org/images/pokemon/" + (this.info.number) + ".png"} img />
            </div>
        );
    }
    getInfo=()=>
    {
        conn.getPokemonInfo(this.state.name)
        .then((res)=>{
            this.setState((state)=>{
                state.info = res;
            });
        });
    }

}
export default PokemonInfo;