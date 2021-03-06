import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import lazyLoadImageCallback, { config } from './Config/LazyLoad'
//Materialize
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
//Customized
import './App.css';
//Components
import PokemonList from './Components/PokemonList';
import Nav from './Components/Nav';
import PokemonInfo from './Components/PokemonInfo';

class App extends Component {
  
  constructor()
  {
    super();
    this.state = {"":null};
    
    
  }
  render()
  {
    var observer = new window.IntersectionObserver(lazyLoadImageCallback, config);
    const info = ({match})=>
    (
      <div>
        <h1>{match.params.name}</h1>
        <PokemonInfo name={match.params.name}/> 
      </div>
       
    )
    console.log(observer);
    return (
      <div className="App container-fluid">
          <Nav/>
          <Router>
            <Route exact path={'/'} component={()=><PokemonList observer={observer}/>}/>
            <Route path={'/info/:name'} component={info}/>
          </Router>
      </div>
    );
  }  
}

export default App;
