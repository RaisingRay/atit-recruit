import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const ItDomain = () => {
    const { store, setStore } = useContext(storeContext);

    const handlePost = (value) => {
        const dupe = { ...store };
        dupe.domain = value;
        setStore(dupe);
    }

    return (
        <div className="content-inner">
              <h1>What is your specialty?</h1>
              <div className="link-wrapper-grid">
              <Link href="/pega" >
                <button onClick={() => { handlePost("Dev") }}>Dev</button>
            </Link>
            <Link href="/pega" >
                <button onClick={() => { handlePost("BA") }}>BA</button>
            </Link>
            <Link href="/pega" >
                <button onClick={() => { handlePost("QA") }}>QA</button>
            </Link>
            <Link href="/pega" >
                <button onClick={() => { handlePost("DevOp") }}>DevOp</button>
            </Link>
            <Link href="/pega" >
                <button onClick={() => { handlePost("PM") }}>PM</button>
            </Link>
            <Link href={{ pathname: '/speciality', query: { prevChoice: 'itDomain' } }}>
                <button>Other</button>
            </Link>
              </div>
            
        </div>
          
    );
}

export default ItDomain;