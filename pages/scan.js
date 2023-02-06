import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";

const Scan = () => {
    const { store, setStore } = useContext(storeContext);

    useEffect(()=>{
        setTimeout(()=>{window.location.href="/"},2000);

    },[]);
    
    return (
        <div className="content-inner">
            <h1>Your application is submitted. Thank you.</h1>
            <div className="swal-icon swal-icon--success">
                <span className="swal-icon--success__line swal-icon--success__line--long"></span>
                <span className="swal-icon--success__line swal-icon--success__line--tip"></span>
                <div className="swal-icon--success__ring"></div>
                <div className="swal-icon--success__hide-corners"></div>
            </div>
            <Image className="Hero-ATIT-LOGO-End" src="/logo.png" alt="logo" layout="fill" />

            <div className="end-footer">
                <p>T, +966554402288</p>
                <p>King Abdulaziz Road, Al Ghadir -Riyadh</p>
                <p>1331, Kingdom of Saudi Arabia</p>
                <p>Contact@atit-sa.com</p>
                <br />
                <br />
                <br />
                <p>www.atit-sa.com</p>
            </div>
        </div>
    );
}

export default Scan;