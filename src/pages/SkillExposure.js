import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SkillExposure = ({ addInputSkill,
  removeInputSkill,
  inputSkill,
   setInputSkill}) => {
    
  const handleChange = (index, evnt)=>{
  const { name, value } = evnt.target;
  const list = [...inputSkill];
    list[index][name] = value;
    setInputSkill(list);
    }
    const [skillvalue, setSkillvalue] = useState([]);
    useEffect(() =>{
      let LastElement = inputSkill[inputSkill.length -1];
      setSkillvalue(LastElement);
    }, [inputSkill])
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
                <Nav>
                  <h5>Skill Exposure</h5>
                 
                </Nav>
                <>
           {inputSkill.length >= 0  &&( skillvalue?.skillExposure !== undefined || skillvalue?.skillExposure ==="" )?  
           <div>
                <Button variant="outline-success" onClick={addInputSkill}>Add skillExposure</Button>
                </div>
                :null
                }
             </>
               {inputSkill?.map((item, index) => {
               return (
                <Form key={item.id} className="d-flex">
               
                   <Form.Control
               className="me-2"
                type="text" onChange={(evnt)=>handleChange(index, evnt)}  name="skillExposure"   value={item?.skillExposure} placeholder="skillExposure"
                  />
                     <Button variant="outline-success" onClick={()=>removeInputSkill(item.id)}>remove</Button>
                  </Form>
                );
              })}
              </Navbar.Offcanvas>
             </Navbar>
          ))}
    </>
  );
}

export default SkillExposure;
  
