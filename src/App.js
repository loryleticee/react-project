import React, { Component } from 'react';
import Home from './Home';
import TodoList from './Todo/TodoList';
import Footer from './Footer';
import Form from './form';
import './server';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Home name="Leticee" lol="moi"/>
        <TodoList />
        <Form />
        <Footer />
      </div>
    )

  }
}

export default App;
