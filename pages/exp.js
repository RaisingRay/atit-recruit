import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const Experience = () => {
    const { store, setStore } = useContext(storeContext);
    const handlePost = (value) => {
        const dup = { ...store };
        dup.Experience = value;
        setStore(dup);
    }
    return (
        <div className="content-inner">
            <h1>What experience you have in Pega?</h1>
            <div className="link-wrapper">
                <Link href="/certification"><button onClick={() => handlePost("More than 3 years")}>more than 3 years</button></Link>
                <Link href="/certification"><button onClick={() => handlePost("Less than 3 years")}>less than 3 years</button></Link>
                <Link href="/userInfo"><button onClick={() => handlePost("Never worked in pega")}>Never Worked in pega</button></Link>
            </div>
        </div>
        );
}

export default Experience;