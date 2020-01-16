import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route,  } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <nav>
        <Navigation/>
      </nav>

      {/* Home Route */}
      <Route exact path="/" component={Home} />
      {/* About Route */}
      <Route path="/About" component={About} />
      {/* Contact Route */}
      <Route path="/Contact" component={Contact} />

    </div>


);
};

export default App;
