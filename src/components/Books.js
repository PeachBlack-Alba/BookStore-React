import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Books extends React.Component {
  state = {
    show: false,
    input: "",
    filteredBooks: []
  };

  handleShow = index => {
    console.log("index", index);
    this.setState({
      show: {
        [index]: true
      }
    });
  };
  search = (event, books) => {
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ input: event.target.value });
    console.log(this.state.input);
    console.log(books);
    // const filtered = books.filter(oneBook => {
    //   return oneBook.titulo
    //     .toLowerCase()
    //     .includes(this.state.input.toLowerCase());
    // });
    const filtered = [];
    for (let i = 0; i < books.length; i++) {
      if (
        books[i].titulo.toLowerCase().includes(this.state.input.toLowerCase())
      ) {
        filtered.push(books[i]);
      }
    }
    console.log("filtered", filtered);
    this.setState({ filteredBooks: filtered });
  };

  render() {
    const books = this.props.booksData;

    const handleClose = () => {
      this.setState({ show: false });
    };
    return (
      <div>
        <Form inline>
          <Form.Control
            type="text"
            placeholder="Busca tu libro"
            className="mr-sm-2"
            value={this.state.input}
            onChange={event => this.search(event, books)}
          />
          <Button Button variant="outline-dark">
            Buscar
          </Button>
        </Form>
        <Row className="justify-content-md-center">
          {this.state.filteredBooks.length === 0 &&
            books.map((book, index) => {
              return (
                <div key={index} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img className="coverImg" src={book.portada} />
                    </div>
                    <div className="flip-card-back">
                      <p>{book.descripcion}</p>
                      <Button
                        variant="primary"
                        onClick={() => this.handleShow(index)}
                      >
                        Más información
                      </Button>

                      <Modal show={this.state.show[index]} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body className="detailHolder">
                          <img
                            className="detalle"
                            src={book.detalle}
                            alt="detalle"
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              );
            })}
          {this.state.filteredBooks.map((book, index) => {
            return (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="coverImg" src={book.portada} />
                  </div>
                  <div className="flip-card-back">
                    <p>{book.descripcion}</p>
                    <Button
                      variant="primary"
                      onClick={() => this.handleShow(index)}
                    >
                      Más información
                    </Button>

                    <Modal show={this.state.show[index]} onHide={handleClose}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body className="detailHolder">
                        <img
                          className="detalle"
                          src={book.detalle}
                          alt="detalle"
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            );
          })}
          }
        </Row>
      </div>
    );
  }
}
export default Books;
