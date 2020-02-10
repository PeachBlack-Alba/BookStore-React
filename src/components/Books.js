import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FilteredBooks from "./FilteredBooks";

class Books extends React.Component {
  state = {
    show: false,
    input: ""
    // filteredBooks: []
  };

  handleShow = index => {
    console.log("index", index);
    this.setState({
      show: {
        [index]: true
      }
    });
  };
  // search = event => {
  //   const books = this.props.booksData;
  //   //this.setState({ input: event.target.value });
  //   console.log(this.state.input);
  //   const filtered = books.filter(oneBook => {
  //     return oneBook.titulo
  //       .toLowerCase()
  //       .includes(this.state.input.toLowerCase());
  //   });

  //   // const filtered = [];
  //   // for (let i = 0; i < books.length; i++) {
  //   //   if (
  //   //     books[i].titulo.toLowerCase().includes(this.state.input.toLowerCase())
  //   //   ) {
  //   //     filtered.push(books[i]);
  //   //   }
  //   // }
  //   console.log("filtered", filtered);
  //   this.setState({ filteredBooks: filtered });
  // };

  render() {
    const books = this.props.booksData;

    const handleClose = () => {
      this.setState({ show: false });
    };
    const filtered = books.filter(oneBook => {
      return oneBook.titulo
        .toLowerCase()
        .includes(this.state.input.toLowerCase());
    });
    return (
      <div>
        <Form inline>
          <Form.Control
            type="text"
            placeholder="Busca tu libro"
            className="mr-sm-2"
            value={this.state.input}
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
          />
        </Form>
        <Row className="justify-content-md-center">
          {this.state.input === "" ? (
            <FilteredBooks booksData={books} />
          ) : (
            <FilteredBooks booksData={filtered} />
          )}
        </Row>
      </div>
    );
  }
}
export default Books;
