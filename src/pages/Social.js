import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Social = ({changeState, instagram, behance, github, facebook, linkedin}) => {
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand}>
                <Navbar.Toggle><h2>Social</h2> </Navbar.Toggle> 
        <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Social
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">{linkedin}</Nav.Link>
                      </Nav>
                    <Form className="d-flex" >
                      <Form.Control
                      target="_blank"
                        type="text"
                        className="me-2"
                        name='linkedin'
                        value={linkedin}
                        onChange={changeState}
                      />   
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">{github}</Nav.Link>
                      </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        className="me-2"
                        name='github'
                        value={github}
                        onChange={changeState}
                      />
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">{facebook}</Nav.Link>
                      </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        className="me-2"
                        name='facebook'
                        value={facebook}
                        onChange={changeState}
                      />
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">{behance}</Nav.Link>
                      </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        className="me-2"
                        name='behance'
                        value={behance}
                        onChange={changeState}
                      />
                    </Form>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">{instagram}</Nav.Link>
                      </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        className="me-2"
                        name='instagram'
                        value={instagram}
                        onChange={changeState}
                      />
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
           
            </Navbar>
          ))}
        </>
      );
    }
export default Social;