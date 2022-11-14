import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useRef } from 'react';
import { jsPDF } from 'jspdf';
const Resume = (props) => {
const reportTemplateRef = useRef(null);
 
	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'A4',
			unit: 'pt',
		});
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('print.pdf');
			},
  width: 550,
  windowWidth:1200
		});
	};
  return (
    <>
    <div className="content" >
    <button type="button" onClick={handleGeneratePdf}>
        Download Resume as PDF
      </button>
      <div  className="col-sm-12 m-5 pb-2 border border-dark" ref={reportTemplateRef} >
        <div  id='download-content' className="row">
          <div className="col-sm-8 border-end border-primary" >
            <div className="row">
            <div className="col-sm-2 m-1 text-black">
            <img  className="avtarimg" src={props?.file}alt="error"/>
              </div>
              <div className="col-sm-5 text-black m-2 text-start">
              <h4 className='text-primary text-start'>{props?.username?.name}</h4>
                <h5 className='text-primary text-start'>{props?.username?.role}</h5>
               <>
                   {props?.username?.relevantexperience < 1  ?  
                  <p className='text-start'>Relevant Experience: {props?.username?.relevantexperience} Month</p>
                  :null}
                  { props?.username?.relevantexperience == 1 ?                         
                  <p className='text-start'>Relevant Experience: {props?.username?.relevantexperience} Year</p> 
                   : null } 
                  { props?.username?.relevantexperience > 1 ?
                 <p className='text-start'>Relevant Experience: {props?.username?.relevantexperience} Years</p>
                 :null
                   }
              </>
              <>
                   {props?.username?.totalexperince < 1  ?  
                   <p className='text-start'> Total Experience: {props?.username?.totalexperince} Month</p>
                  :null}
                  { props?.username?.totalexperince == 1 ?                         
                  <p className='text-start'> Total Experience: {props?.username?.totalexperince} Year</p>
                   : null } 
                  { props?.username?.totalexperince > 1 ?
                 <p className='text-start'> Total Experience: {props?.username?.totalexperince} Years</p>
                 :null
                   }
              </>
                

              </div>
              <div className="col-sm-4">
                <h6 className='text-start m-3'>Mob: {props?.username?.phone}</h6>
                <h6 className='text-start m-3'>E-mail: {props?.username?.email}</h6>
                <h6 className='text-start m-3'> Location: {props?.username?.location}</h6>
              </div>
            </div>

            <div className='hr col-12'></div>
            <div className=" col-sm-12 list-group list-group-horizontal">
             
               <h6 className='m-5'><SocialIcon network={props?.username?.linkedin} />  </h6>
              <h6 className='m-5'><SocialIcon network={props?.username?.github}/></h6>
              <h6 className='m-5'> <SocialIcon network={props?.username?.facebook} /> </h6>
              <h6 className='m-5'><SocialIcon network={props?.username?.behance} /></h6>
              <h6 className='m-5'><SocialIcon network={props?.username?.instagram} /></h6>
            </div>
            <div className='hr col-12'></div>

            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Experience</h5>

              <div className="p-2">
                <ul className="text-start">
               
              {props?.inputFields?.map((item, i) => {
               return (
                  <span className="text-black">
                     <h4 className='text-start'>{item.companyName}</h4>
                     <h5 className='text-start'> {item.designation}</h5>
                     <li className='text-start'> {item.jobroles} </li>
                   </span>
                );
              })}
              </ul>
                </div>
            </div>
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Key Projects / Involvements</h5>
              <div className="p-2">
              {props?.toDoList?.map((item, i)=>{
              return(
                <ul className="text-start">
                  <li  key={i}>
                      {/* {i} */}
                      {item.task}
                         </li>
                  </ul>
              )
              })}
          </div>
           </div>
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Certificates and Awards</h5>
              <div >
              {props?.rewardList?.map((item, index)=>{
              return(
                <ul className="text-start">
                  <li  key={index}>
                      {/* {index} */}
                      {item.certificate}
                                      
                  </li>
                  </ul>
                )
                })}
          </div>
              
            </div>
          </div>
         
          <div className="col-sm-4">

            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>About Me</h5>
              <div className="p-2">
              <p> {props?.username?.summary}</p>

              </div>
            </div>
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Career Objective</h5>
              <div className="p-2">
                <p> {props?.username?.objective}</p>
             
              </div>
            </div>
           
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Technical Expertise</h5>
              {props?.inputList?.map((name, index) => {
               return (
                <div  className="p-=2">
               <h5 className='text-start'>{name.techskills}</h5>
                </div>
                );
              })}
            </div>
            
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Skills / Exposure</h5>
              <div  className="grid">
              {props?.inputSkill?.map((name, i) => {
               return (
               
                <span className="badge m-1 text-black border border-success">
                     <h5>{name.skillExposure}</h5>
                     </span>
                
                );
              })}
               </div>
             
            </div>
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Methodology / Approach</h5>
              <div  className="grid">
              {props?.methododlogy?.map((name, i) => {
               return (
                  <span className="badge m-1 text-black border border-success">
                     <h5>{name.methododlogy}</h5>
                     </span>
                );
              })}
               </div>
            </div>
            <div className='hr col-12'></div>
            <div className='hr col-12'></div>
            <div className="d-grid gap-3 p-3">
              <h5 className='text-primary'>Education</h5>
              <div className="row">
                <div className="col-sm-4">
                  <p>{props?.username?.masters} </p>
                  <p>{props?.username?.Mstream}</p>
                  <p>{props?.username?.Muniversity}</p>
                </div>
                <div className="col-sm-4 ms-auto">
                  <p>{props?.username?.Myear}</p>
                  <p className='p-4'>{props?.username?.Mscore}%</p>
                </div>
              </div>
            </div>
            <div className='hr col-12'></div>
            <div className="row">
              <div className="col-sm-4">
                <p>{props?.username?.graduate}</p>
                <p>{props?.username?.stream}</p>
                <p>{props?.username?.university}</p>
              </div>
              <div className="col-sm-4 ms-auto">
                <p>{props?.username?.year}</p>
                <p className='p-3'>{props?.username?.score} CGPA</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}
export default Resume;