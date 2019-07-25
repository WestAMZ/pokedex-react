import React,{Component} from 'react';
//import logo from './logo.svg';
//Materialize
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
//Customized
import './App.css';
//Components
import PokemonList from './Components/PokemonList';


class App extends Component {
  constructor()
  {
    super();
    this.state = {};
  }

  render()
  {
    return (
      <div className="App container-fluid">
           <nav>
            <div className="nav-wrapper blue fixed">
              <div className="container">
                <a href="#" className="brand-logo">Pokedex</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
              </div>
            </div>
          </nav> 
          <PokemonList/> 
      </div>
    );
  }  
}

export default App;
