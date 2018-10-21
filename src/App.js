import React, { Component } from 'react';
import Home from './Home';
import TodoList from './Todo/TodoList';
import Footer from './Footer';
import Form from './form';
import Balise from './Balise';
import './server';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <TodoList />
        <Form />
        <Balise />
        <Footer lastName="LETICEE" firstName="lory"/>

      </div>
    )

  }
}

export default App;
