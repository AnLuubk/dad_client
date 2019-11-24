import React from 'react';
import { Link } from 'react-router-dom';

import '../static/css/narbar.css';

export default class Narbar extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
      <h1 className="test">abc</h1>
        <nav className="z-depth-0" style={{ backgroundColor: '#f5ab35' }}>
          {/* <div className="nav-wrapper white">
            <Link to="/" style={{ fontFamily: 'monospace' }} className="col s5 brand-logo center black-text">
              <i className="material-icons">code</i>
              hoigiday
            </Link>
          </div> */}
          <div class="nav-wrapper">
            <Link
              to="/"
              className="col s5 brand-logo left black-text brand-logo"
              style={{ fontFamily: 'Pacifico', marginLeft: 20, fontWeight: 'bold' }}>
              <span style={{ color: '#fff' }}>Hoigiday</span>
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
