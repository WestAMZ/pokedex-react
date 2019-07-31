import React,{Component} from 'react';
import {Router,Route,browserHistory} from 'react-router';
//import logo from './logo.svg';
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
    this.state = {};
  }
  getName=()=>
  {
    var url_string = window.location;
    var url = new URL(url_string);
    var name = url.searchParams.get("name");
    console.log(name);
    return name;
  }
  render()
  {
    return (
      <div className="App container-fluid">
          <Nav/>
          <Router history={browserHistory}>
            <Route path={'/'} component={PokemonList}>
            </Route>
            <Route path={'/:name'} component={<PokemonInfo name={this.getName}/>}>
            </Route>
          </Router>
      </div>
    );
  }  
}

export default App;
