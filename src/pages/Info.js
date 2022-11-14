import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Info = ({changeState, userName, userRole, userEmail, userPhone, userLocation, userRelExp, userTotalExp, userSummary, userObjective, handleChangeImage, fileimage}) => {

  return (
  
        <>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3"> 
              <Navbar.Toggle><h2>Info</h2> </Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Intro
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav >
                    Name
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="text"
                      name="name"
                      value={userName}
                      onChange={changeState}
                    />
                  
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>Image</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="file"
                     
                      //accept="image/png, image/jpeg"
                      accept=".jpg,.jpeg,.png,.gif,image/jpeg"
                      className="me-2"
                      value={fileimage}
                      name="image"
                      onChange={handleChangeImage}
                    />
                      {/* <img src={file} alt="error"/> */}
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>Role</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      value={userRole}
                      name="role"
                      onChange={changeState}
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Email</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name='email'
                      placeholder='abc@gmail.com'
                      value={userEmail}
                      onChange={changeState}
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Phone</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="tel"
                      className="me-2"
                      name="phone"
                      value={userPhone}
                      onChange={changeState}
                      minlength="9" maxlength="10" size="10"
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Location</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="text"
                      className="me-2"
                      name="location"
                      value={userLocation}
                      onChange={changeState}
                    />
                  </Form>
                  
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Relevant Experience</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="number"
                      className="me-2"
                      name="relevantexperience"
                      value={userRelExp}
                      onChange={changeState}
                      maxlength="2"
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Total Experience</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="number"
                      className="me-2"
                      name="totalexperince"
                      value={userTotalExp}
                      onChange={changeState}
                      maxlength="2"
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Summary</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control 
                     as="textarea"
                      type="text"
                      rows={6}
                      className="me-2"
                      name="summary"
                      value={userSummary}
                      onChange={changeState}
                    />
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Objective</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                  <Form.Control as="textarea"
                  type="text"
                  rows={6}
                  className="me-2"
                  name="objective"
                  value={userObjective}
                  onChange={changeState} />
                    </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          ))}
         </>
  );
}
export default Info;