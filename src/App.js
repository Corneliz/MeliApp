import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Nav from './components/Nav';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.filterUser = this.filterUser.bind(this);
    this.state = { items: [], search: '' };
  }

  filterUser(itemsValue, searchValue) {
    this.setState({
      items: itemsValue,
      search: searchValue
    });
  }

  render() {
    return (
      <div>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
              <Nav filterUser={this.filterUser} />
            </Route>
            <Route exact path="/items">
              <Layout filterUser={this.filterUser} items={this.state.items} search={this.state.search} />
            </Route>
            <Route exact path="/items/:id" render={(props) => <Layout filterUser={this.filterUser} id={props.match.params.id} search={this.state.search}/> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
