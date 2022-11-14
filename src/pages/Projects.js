import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Projects = ({handleSubmit, ProjectRemoveHandler, toDoList, handleChange, resetForm}) => {

    return (
        <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand}>
             <Navbar.Toggle><h2>Projects</h2> </Navbar.Toggle> 
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Projects Lists
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <form onSubmit={handleSubmit} >
      
                        <input className='form-control' name="task" type="text" onChange={handleChange} placeholder="Add Project list here..." required/>
                        <button>Submit</button> 
                         <button type="reset" onClick={resetForm}> Reset Form </button>
                    </form>
                    <div>
                      {toDoList?.map((item, index)=>{
                      return(
                      <li>
                          {/* {index} */}
                      <p>{item.task}</p> 
                          <Button  variant="outline-success" onClick={()=>ProjectRemoveHandler(item.id)}>remove</Button>
                      </li>
                      )
                      })}
                  </div>
             </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
       
        </Navbar>
      ))}
        </>
    );
};

export default Projects;
