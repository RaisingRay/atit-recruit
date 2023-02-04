import { useEffect, useState } from "react";
const Segments = ({ checks, onClick }) => {

    return (
        <div div className="segments-wrapper" >
            {
                [...checks.keys()].map(key => <button key={key} className={checks.get(key) ? "active" : "inactive"} onClick={() => { onClick(key) }}>{key}</button>)
            }
        </div >
    );
}

export default Segments;