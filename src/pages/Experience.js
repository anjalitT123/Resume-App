import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Experince = ({ inputFields,addInputField,removeInputFields,setInputFields}) => {
  const handleChange = (index, evnt)=>{
      const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
       
    }
  return (
    
      <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
              <Navbar.Toggle><h2>Experience</h2> </Navbar.Toggle> 
     
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Experience
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {inputFields?.map((data, index)=>{
                    return(
                 <>
                <Button variant="outline-success" onClick={()=>removeInputFields(data.id)}>remove</Button>
                <NavDropdown
                     title="Company" > 
                <Form key={data.id} className="m-1 p-1" >
                  <li>{data.companyName}</li>
                 <Form.Control
                className='m-1'
                type="text" onChange={(evnt)=>handleChange(index, evnt)}  name="companyName"  value={data.companyName} placeholder="Company Name"
                  />
                  <Form.Control
                className='m-1'
                type="email"onChange={(evnt)=>handleChange(index, evnt)}  name="designation" value={data.designation} placeholder="Designation"
                  />
                  <Form.Control
                  as="textarea"
                  rows={4}
                  className="m-1"
                type="text" onChange={(evnt)=>handleChange(index, evnt)}  name="jobroles" value={data.jobroles} placeholder="Job Roles"
                  />
                  </Form>
                </NavDropdown>
                </>
              )
            })
        }
       <div className="row">
                    <div className="col-sm-12">

                    <button className="btn btn-outline-success " onClick={addInputField}>Add Company Deatils here.....  </button>
                    </div>
                </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Navbar>
        ))}
      </>
    );
  }
export default Experince;