import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h2>React Router Mini</h2>
        <div>
          <Link className="" exact to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="" exact to="/About">
            About
          </Link>
        </div>
        <div>
         <Link className="" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
