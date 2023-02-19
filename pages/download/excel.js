import React, {useEffect, useRef, useState} from 'react';

const Excel = () =>  {
    const [resumes,setResumes]=useState([]);
    useEffect(()=>{
        
        let cvs = JSON.parse(localStorage.getItem('cvs'));
        setResumes(cvs);
    },[]);

        return (
            <div>
               {resumes && "exist"}
               <div>
                local storage
               </div>
            </div>
        );
    }


export default Excel;