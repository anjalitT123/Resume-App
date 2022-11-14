import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Methodology = ({ setmethododlogy, handleAddMethodology, MethodologyRemoveHandler, methododlogy}) => {
  const handleChange = (index, evnt)=>{
      const { name, value } = evnt.target;
    const list = [...methododlogy];
    list[index][name] = value;
    setmethododlogy(list);
        }
const [ methodovalues, setMethododlogyValues] = useState('');
useEffect (() =>{
  let Element = methododlogy[methododlogy.length -1];
  setMethododlogyValues(Element);
}, [methododlogy])
  return (
      <>
       {[false].map((expand) => (
        <Navbar key={expand}  className="mb-3">
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Skill Exposure
                </Offcanvas.Title>
              </Offcanvas.Header>
                 <Nav className="justify-content-end flex-grow-1 pe-3">
                 <Nav>
                  <h5>Skill Exposure</h5>
                </Nav>
                   </Nav>
                   <>
                   {methododlogy.length >0 &&  (methodovalues?.methododlogy === undefined|| methodovalues?.methododlogy !== '' )?
                  <div>
 <Button name='skillExposure' variant="outline-success" onClick={(index)=>handleAddMethodology(index)}>Add Methodology</Button>
                  </div> 
                  :null
                  }
                   </>
                {methododlogy?.map((item, index) => {
               return (
                <Form key={item.id} className="d-flex">
                  <Form.Control
                  key={index}
                    type="text"
                    placeholder="Add skills Methodology"
                    className="me-2"
                    name='methododlogy'
                    value={item.methododlogy}
                    onChange={(evnt)=>handleChange(index, evnt)} 
                    required
                  />
                     <Button  name='techskills' variant="outline-success" onClick={()=>MethodologyRemoveHandler(item.id)}>remove</Button>
                    </Form>
                );
              })}            
            </Navbar.Offcanvas>
        </Navbar>
          ))}
    </>
  );
}
export default Methodology;