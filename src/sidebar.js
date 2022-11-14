import React, { useEffect, useState } from 'react';
import Info from './pages/Info';
import Skills from './pages/Skills';
import Social from './pages/Social';
import Experince from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Rewards from './pages/Rewards';


const Sidebar = () => {
   const [username, setUsername] = useState(()=>{
    const savedItem = localStorage.getItem("username");
    if (savedItem) {
      return JSON.parse(savedItem);
    } else {
      return [];
      
    }
  });
  
  const changeState = (e, index) => {
    e.preventDefault();
    const value = [e.target.value];
    setUsername({
      ...username,
      [(e.target.name)]: value
    });
    
  }
////Experince .......................................................
  //   const [inputFields, setInputFields] = useState([{
  //    companyName:'Company1',
  //     designation:'Senior react js developer',
  //     jobroles:'Use my extensive experience with front end development to define the structure and components for the project, making sure they are reusable'  
  // } ]);
  const [inputFields, setInputFields] = useState(()=>{
    const s = localStorage.getItem("inputFields");
    if (s) {
      return JSON.parse(s);
    } else {
      return [];
      
    }
  });
 
  const addInputField = (e) => {
    e.preventDefault();
    if (inputFields !== "") {
      setInputFields([...inputFields, { id: inputFields.length + 1, companyName: '',
      designation: '',
      jobroles: ''}
      ]);
 }
   }
  const removeInputFields = (id)=>{
   // console.log(id);
    const list = inputFields.filter((data) =>data.id !== id);
    setInputFields(list);
  }
  const handleChangee = (index, evnt)=>{
  
  const { name, value } = evnt.target;
  const list = [...inputFields];
  list[index][name] = value;
  setInputFields(list);
     
  }
  //skill exposure.....................................................
  const [inputSkill, setInputSkill] = useState(()=>{
    const exp = localStorage.getItem("inputSkill");
    if (exp) {
      return JSON.parse(exp);
    } else {
      return [];
      
    }
  });
 // console.log(inputFields);
 
 const addInputSkill = ()=>{
  let skillexpo = [...inputSkill];
  skillexpo = [...skillexpo, { id: inputSkill.length + 1, techskills: ''}];
    setInputSkill(skillexpo);
    
 }
 const removeInputSkill = (id)=>{
  const rows = inputSkill.filter((name) => name.id !== id );
  setInputSkill(rows);
  }
  //console.log(username);

  ///Tech skillss....................................................................
  const [inputList, setInputList] = useState(()=>{
    const tech = localStorage.getItem("inputList");
    if (tech) {
      return JSON.parse(tech);
    } else {
      return [];
      
    }
  });
  const handleAdd=(e)=>{
    let techskil = [...inputList];
  
     techskil = [...techskil, { id: inputList.length + 1, techskills: ''}];
    setInputList(techskil);
 
  }

  const removeHandler =(id) => {
      const skil = inputList.filter((item) =>item.id !== id);
    setInputList(skil);
     }

  ///methododlogy..............................................................
     const[methododlogy, setmethododlogy] = useState(()=>{
      const meth = localStorage.getItem("methododlogy");
      if (meth) {
        return JSON.parse(meth);
      } else {
        return [];
        
      }
    });

    const handleAddMethodology=()=>{

      let metho = [...methododlogy];
      metho = [...metho, { id: methododlogy.length + 1, methododlogy: ''}];
      setmethododlogy(metho);
        }
      // console.log("this is skills array",methododlogy);
      
      const MethodologyRemoveHandler =(id) => {
        const met = methododlogy.filter((item) => item.id !== id);
        setmethododlogy(met);
      }

 // projects...................................................................
       const [ userInput, setUserInput ] = useState();
      const [ toDoList, setToDoList ] = useState(()=>{
        const p = localStorage.getItem("toDoList");
        if (p) {
          return JSON.parse(p);
        } else {
          return [];
          
        }
      });
     //console.log(toDoList);
       const handleChange = (e) => {
           setUserInput(e.currentTarget.value);
           
       }
   
         const addTask = (userInput ) => {
           let copy = [...toDoList];
           copy = [...copy, { id: toDoList.length + 1, task: userInput}];
           setToDoList(copy);
          
           
         }
        //  console.log("this is my task",toDoList);
       const handleSubmit = (e) => {
        e.preventDefault();
           addTask(userInput);
           setUserInput ({});  
                  
       }
       const resetForm = e => setUserInput([{ task: '' }])

       const ProjectRemoveHandler =(id) => {
        const newList = toDoList.filter((item) => item.id !== id);
        setToDoList(newList);
         }
           
//Rewards...............................................................................
const [ inputReward, setRewardsInput ] = useState('');
const [ rewardList, setRewardList ] = useState(()=>{
  const r = localStorage.getItem("rewardList");
  if (r) {
    return JSON.parse(r);
  } else {
    return [];
    
  }
});
const handleChangeReward = (e) => {
  setRewardsInput(e.currentTarget.value)
}
const resetRewardForm = e => setRewardsInput([{ certificate: '' }])

const addReward = (inputReward ) => {
  let copy = [...rewardList];
  copy = [...copy, { id: rewardList.length + 1, certificate: inputReward}];
  setRewardList(copy);
}
// console.log("this is my task",rewardList);
const handleRewardSubmit = (e) => {
  e.preventDefault();
  addReward(inputReward);
  setRewardsInput("");
}
const RewardRemoveHandler =(id) => {
  const list = rewardList.filter((item) =>item.id !== id);
  setRewardList(list);
 
}
//Image file uploader.............................................
const [file, setFile]  = useState(localStorage.getItem('fileimage'));

const handleChangeImage=(e, i)=> {
    //console.log(e.target.files[0]);
    const files =e.target.files[0];
    var reader = new FileReader();
  reader.readAsDataURL(files);
  reader.onload = function () {
    console.log(reader.result);
    setFile(reader.result)
    localStorage.setItem("fileimage",reader.result)
  };
  reader.onerror = function (error) {
    //console.log('Error: ', error);
  };
   }

useEffect(() => {
  localStorage.setItem("username", JSON.stringify(username));
  localStorage.setItem("inputFields", JSON.stringify(inputFields));
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  localStorage.setItem("rewardList", JSON.stringify(rewardList));
  localStorage.setItem("inputList", JSON.stringify(inputList));
  localStorage.setItem("methododlogy", JSON.stringify(methododlogy));
  localStorage.setItem("inputSkill", JSON.stringify(inputSkill));
//  localStorage.setItem("fileimage",file);
}, [username, inputFields, toDoList, rewardList, inputList, methododlogy, inputSkill]);

  return (
    <>

      <div className='container-fluid'>
        <div className="sidenav" >

          <h2>
          <Info
          changeState={changeState}
          userName={username.name}
          userRole={username.role}
          userEmail={username.email}
          userPhone={username.phone}
          userLocation={username.location}
          userRelExp={username.relevantexperience}
          userTotalExp={username.totalexperince}
          userSummary={username.summary}
          userObjective={username.objective}
          handleChangeImage={handleChangeImage}
        
          />
          </h2>
          <h2> 
          <Social
          changeState={changeState}
          linkedin={username.linkedin}
          facebook={username.facebook}
          github={username.github}
          behance={username.behance}
          instagram={username.instagram}
          />
          </h2>
          <h2> <Skills 
          changeState={changeState}
          removeHandler={removeHandler}
          handleAdd={handleAdd}
          inputList={inputList}
           methododlogy={methododlogy}
          setmethododlogy={setmethododlogy}
          MethodologyRemoveHandler={MethodologyRemoveHandler}
          handleAddMethodology={handleAddMethodology}
          addInputSkill={addInputSkill}
          removeInputSkill={removeInputSkill}
          inputSkill={inputSkill}
           setInputSkill={setInputSkill}
           setInputList={setInputList}
          /></h2>
          <h2>
         <Experince 
         changeState={changeState}
         handleChangee={handleChangee}
         addInputField={addInputField}
         removeInputFields={removeInputFields}
          inputFields={inputFields}
          setInputFields={setInputFields}
          companyName={inputFields.companyName}
          /></h2>
          <h2> 
            <Education
             changeState={changeState}
             masters={username.masters}
             Mstream={username.Mstream}
             Muniversity={username.Muniversity}
             Myear={username.Myear}
             Mscore={username.Mscore}
             graduate={username.graduate}
             stream={username.stream}
             university={username.university}
             year={username.year}
             score={username.score}
             
             />
             </h2>
          <h2>
            <Projects 
            toDoList={toDoList}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            ProjectRemoveHandler={ProjectRemoveHandler}
            resetForm={resetForm}

            />
            </h2>
            <h2>
              <Rewards 
              handleChangeReward={handleChangeReward}
              handleRewardSubmit={handleRewardSubmit}
              RewardRemoveHandler={RewardRemoveHandler}
              rewardList={rewardList}
              resetRewardForm={resetRewardForm}


              />
            </h2>
        </div>
        <Resume 
        username={username}
        inputList={inputList}
        inputFields={inputFields}
        toDoList={toDoList}
        rewardList={rewardList}
        methododlogy={methododlogy}
        inputSkill={inputSkill}
        linkedin={username.linkedin}
        file={file}
     
        />
      </div>

    </>
  );
}

export default Sidebar;