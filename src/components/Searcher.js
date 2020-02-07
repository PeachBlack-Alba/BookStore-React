import React, { Component } from "react";

export class Searcher extends Component {
  render() {
    return (
      <div class="topnav">
        <input
          type="text"
          id="searchbar"
          onkeyup="filter()"
          placeholder="Busca tu libro..."
        />
      </div>
    );
  }
}

export default Searcher;
