import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Rewards = ({handleRewardSubmit, inputReward, handleChangeReward, RewardRemoveHandler, rewardList, resetRewardForm}) => {

    return (
        <>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand}>
               <Navbar.Toggle><h2>Rewards</h2> </Navbar.Toggle> 
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Certificate and Rewards
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                        <form onSubmit={handleRewardSubmit}>
                        <input  name="certificate" type="text" value={inputReward} onChange={handleChangeReward} placeholder="Add Reward list here..." required/>
                        <button>Submit</button>
                        <button type="reset" onClick={resetRewardForm}> Reset Form </button>
                    </form>
                    <div>
            {rewardList?.map((item, i)=>{
            return(
                <li key={i}>
                    {/* {index} */}
                <p>{item.certificate}
                    <Button  variant="outline-success" onClick={()=>RewardRemoveHandler(item.id)}>remove</Button></p> 
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
export default Rewards;

