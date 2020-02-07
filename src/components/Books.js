import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { render } from "@testing-library/react";
class Books extends React.Component {
  state = {
    show: false
  };

  handleShow = index => {
    console.log("index", index);
    this.setState({
      show: {
        [index]: true
      }
    });
  };
  render() {
    console.log(this.props);
    const books = this.props.booksData;

    const handleClose = () => {
      this.setState({ show: false });
    };
    return (
      <div>
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
                      Launch demo modal
                    </Button>

                    <Modal show={this.state.show[index]} onHide={handleClose}>
                      <Modal.Header closeButton></Modal.Header>
                      <Modal.Body>
                        <img src={book.detalle} alt="detalle" />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* <button
                    className="button"
                    type="button"
                    onClick={createGallery}
                    id={book.id}
                  >
                    More Info
                  </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Books;
