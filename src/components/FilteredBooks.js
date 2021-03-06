import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Books from "./Books";

export class FilteredBooks extends React.Component {
  state = {
    show: false
  };

  handleShow = index => {
    this.setState({
      show: {
        [index]: true
      }
    });
  };

  render() {
    const books = this.props.booksData;
    const handleClose = () => {
      this.setState({ show: false });
    };

    return (
      <div>
        {
          <Row className="justify-content-md-center">
            {books.map((book, index) => {
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

                      <Modal
                        show={this.state.show[index]}
                        onHide={this.handleClose}
                      >
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
          </Row>
        }
      </div>
    );
  }
}

export default FilteredBooks;
