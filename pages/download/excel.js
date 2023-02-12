import React, {useEffect, useRef, useState} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

const Excel = () =>  {
    const tableRef = useRef(null);
    const [resumes,setResumes]=useState([]);
    useEffect(()=>{
        
        let cvs = JSON.parse(localStorage.getItem('cvs'));
        setResumes(cvs);
    },[]);
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'AtitResumes',
        sheet: 'Resumes'
    })

        return (
            <div>
                <button onClick={onDownload}> Export excel </button>

                 <table  ref={tableRef}>
                  <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Country of residence</th>
                        <th>Mail</th>
                        <th>Status</th>
                        <th>University</th>
                        <th>Scholar Level</th>
                        <th>Speciality</th>
                        <th>Domain</th>
                        <th>Pega Experience</th>
                        <th>Certifications /IT Skills</th>
                    </tr>
                    <tr>
                        {/* <td>Edison</td>
                        <td>Padilla</td>
                        <td>20</td> */}
                    </tr>

{
    resumes.map(r=>{
        return (
            <tr>
                <td>{r.user.firstName}</td>
                <td>{r.user.lastName}</td>
                <td>{r.user.phone}</td>
                <td>{r.user.coutryOfResidence[0].label}</td>
                <td>{r.user.email}</td>
                <td>{r.status}</td>
                <td>{r.University}</td>
                <td>{r.scholar}</td>
                <td>{r.speciality}</td>
                <td>{r.domain}</td>
                <td>{r.Experience}</td>
                <td>{r.Certification&&r.Certification.map(c=>{if(c.value) return c.key+","})}{r.IT&&r.IT.map(c=>{if(c.value) return c.key+","})}</td>
            </tr>
        )
    })
}
                  </tbody>
                </table>

            </div>
        );
    }


export default Excel;