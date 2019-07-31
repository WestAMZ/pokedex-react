import React,{Component} from 'react';
class Nav extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
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
        );
    }
}
export default Nav;