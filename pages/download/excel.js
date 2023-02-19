import React, {useEffect, useRef, useState} from 'react';

const Excel = () =>  {
    const [resumes,setResumes]=useState([]);
    const [ls,setLS] =useState("");
    useEffect(()=>{
        setLS(localStorage.getItem('cvs'));
        let cvs = JSON.parse(localStorage.getItem('cvs'));
        setResumes(cvs);
    },[]);

        return (
            <div>
                {ls}
            </div>
        );
    }


export default Excel;