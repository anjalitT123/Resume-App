import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Education = ({changeState,masters, Mstream, Muniversity, Myear, Mscore, graduate, stream, university, year, score}) => {
    
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand}>
           <Navbar.Toggle><h2>Education</h2> </Navbar.Toggle> 
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Education
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                     title="Masters"
                    >
                      <label>Subject</label>
                    <Form className="d-flex">
                    
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="masters"
                    value={masters}
                      onChange={changeState}
                      
                    />
                     </Form>
                     <label>Stream</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="Mstream"
                      value={Mstream}
                      onChange={changeState}
                    />
                     </Form>
                     <label>University </label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="Muniversity"
                      value={Muniversity}
                      onChange={changeState}
                    />
                     </Form>
                     <label>Passing Year</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder='Enter Only Number'
                      className="me-2"
                      name="Myear"
                      value={Myear}
                      onChange={changeState}
                    />
                     </Form>
                     <label>Score</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="number"
                      placeholder='Enter Your score in %'
                      className="me-2"
                      name="Mscore"
                      value={Mscore}
                      onChange={changeState}
                    />
                     </Form>
                    </NavDropdown>
                    <NavDropdown
                     title="Degree"
                    >
                      <label>Subject</label>
                    <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="graduate"
                      value={graduate}
                      onChange={changeState}
                    />
                     </Form>
                     <label>Stream</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="stream"
                      value={stream}
                      onChange={changeState}
                    />
                     </Form>
                     <label>University</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="university"
                      value={university}
                      onChange={changeState}
                    />
                     </Form>
                     <label>Passing Year</label>
                     <Form className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder='Enter Only Number'
                      className="me-2"
                      name="year"
                      value={year}
                      onChange={changeState}
                    />
                     </Form>
                     <label>Score</label>
                     <Form className="d-flex">
                    <Form.Control
                     type="number"
                      className="me-2"
                      name="score"
                      value={score}
                      onChange={changeState}
                      placeholder='Enter Your score as CGPA'
                    />
                     </Form>
                    </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
       
        </Navbar>
      ))}
    </>
  );
}

 
export default Education;