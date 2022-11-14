import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SkillExposure from './SkillExposure';
import Methodology from './Methodology';

const Skills = ({setInputList, changeState, removeHandler, handleAdd, inputList, setmethododlogy,handleAddMethodology, MethodologyRemoveHandler, methododlogy,addInputSkill,
  removeInputSkill,
  inputSkill,
   setInputSkill}) => {
   const [ values, setvalues] = useState([]);
    const handleChange = (index, evnt)=>{
      const { name, value } = evnt.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
      }
      useEffect(()=>{
        let lastElement = inputList[inputList.length-1];
      setvalues(lastElement);
      },[inputList])
 return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
            <Navbar.Toggle><h2>Skills</h2> </Navbar.Toggle> 
              <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Technical Skill
                </Offcanvas.Title>
              </Offcanvas.Header>            
                 <Offcanvas.Body>
                 <Nav>
                  <h5>Technical Expertise</h5>
                </Nav>
                 <>
                   {inputList.length >= 0  && (values?.techskills ===undefined||values?.techskills !=="")?  
                    <div>
                        <Button variant="outline-success" onClick={handleAdd}>Add Technical Expertise</Button>
                </div>
                                                 
               :  null}
                </>
                   {inputList?.map((item, index) => {
                          return (
                          <>
                            <Form key={item.id} className="d-flex">
                            <Form.Control
                              type="text"
                              placeholder="Add tech skills"
                              className="me-2"
                              name='techskills'
                              value={item.techskills}
                            //  value={inputList}
                              onChange={(evnt)=>handleChange(index, evnt)} 
                              required
                            />
                              <Button variant="outline-success" onClick={()=>removeHandler(item.id)}>remove</Button>
                            </Form>
                          </>
                          );
                        })}
                <div className="d-flex ">
                  
                      <SkillExposure 
                      addInputSkill={addInputSkill}
                      removeInputSkill={removeInputSkill}
                      inputSkill={inputSkill}
                        setInputSkill={setInputSkill}
                      />
                      </div>
                      <div className="d-flex">
                      < Methodology 
                      methododlogy={methododlogy}
                      setmethododlogy={setmethododlogy}
                      MethodologyRemoveHandler={MethodologyRemoveHandler}
                      handleAddMethodology={handleAddMethodology}
                      changeState={changeState}
                      />
                      </div> 
              </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
            ))}
    </>
     
  );
}
export default Skills;