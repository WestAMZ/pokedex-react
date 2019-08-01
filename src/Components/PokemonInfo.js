import React,{Component} from 'react';
import './PokemonList.css';
//Api
const conn =  require('../Repository/Connection');

class PokemonInfo extends Component
{
    constructor(props)
    {
        super(props); 
        this.state = {
            name:props.name,
            info:{

            }
        }
    }
    render()
    {
        this.getInfo();
        return(
            <div className="info">
                <img className="activator" src={"https://pokeres.bastionbot.org/images/pokemon/" + (this.state.info.number) + ".png"} img />
            </div>
        );
    }
    getInfo=()=>
    {
        conn.getPokemonInfo(this.state.name)
        .then((res)=>{
            this.setState((state)=>{
                state.info = res;
                console.log(res);
            });
        });
    }

}
export default PokemonInfo;