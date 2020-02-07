import React, { Component } from "react";
import Books from "./components/Books";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = () => {
    fetch("https://api.myjson.com/bins/1h3vb3")
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            books: data.books
          });
          // console.log(this.state.books);
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Searcher></Searcher>
        <Books booksData={this.state.books} text="hi alba"></Books>
      </div>
    );
  }
}

export default App;
