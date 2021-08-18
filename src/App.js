import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Create from './Create.js';
import VideogameList from './VideogameList.js';
import VideogameDetail from './VideogameDetail.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
         <Switch>
            <Route exact path='/' component={VideogameList} />
            <Route  path='/videogames/:id' component={VideogameDetail} />
            <Route  path='/create' component={Create} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
