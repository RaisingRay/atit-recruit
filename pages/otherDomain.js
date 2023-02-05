import Input from "@/component/Input";
import Segments from "@/component/Segments";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useState } from "react";

const otherDomain = () => {
    const { store, setStore } = useContext(storeContext);
    const [domain,setDomain] =useState("");
    const [segments, setSetgments] = useState(new Map([
        ['Administration & HR', false],
        ['Accounting & Finance', false],
        ['Marketing & Design', false],
        ['Other', false],
    ]));

    const handleSegments = (key) => {
        const dup = new Map(segments);
        for(const k of segments.keys()){
            dup.set(k,false);
        }
        dup.set(key, !dup.get(key));
        setSetgments(dup);
        setDomain(key);
        if(key==="Other") setDomain("");
    }

    const handleDomain=({target})=>{
        const value=target.value;
        console.log(value);
        setDomain(value);
    }
    
    const handlePost = () => {

        const dup = { ...store };
        dup.domain = domain;
        setStore(dup);

    }

    return ( 
    <div className="content-inner">
        <h1>Whats your domain</h1>
        <Segments checks={segments} onClick={handleSegments} />
        <div className="user-form" style={{paddingLeft:"5px"}}>

        {segments.get("Other") && <Input name="other" placeholder="Domain" onChange={handleDomain} value={domain}/> }
        </div>
        <Link href="/userInfo"><button onClick={handlePost}>Next</button></Link>
    </div> 
    );
}
 
export default otherDomain;