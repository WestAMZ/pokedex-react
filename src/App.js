import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import lazyLoadImageCallback, { config } from './lazyLoad'
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
    var observer = new window.IntersectionObserver(lazyLoadImageCallback, config);
  }
  lazyLoadImageCallback=(entries, observer)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        entry.target.src = entry.target.dataset.src
      }
    })
  }
  render()
  {
    const info = ({match})=>
    (
      <div>
        <h1>{match.params.name}</h1>
        <PokemonInfo name={match.params.name}/> 
      </div>
       
    )
    
    return (
      <div className="App container-fluid">
          <Nav/>
          <Router>
            <Route exact path={'/'} component={function(){<PokemonList observer={this.observer}/>}}/>
            <Route path={'/info/:name'} component={info}/>
          </Router>
      </div>
    );
  }  
}

export default App;
