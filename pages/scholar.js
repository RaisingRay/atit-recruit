import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useState } from "react";

// name, onChange, placehoder, value 
const Scholar = () => {
    const [scholar, setScholar] = useState("");
    const { store, setStore } = useContext(storeContext);
    const handleScholar = ({ target }) => {
        const value = target.value;
        setScholar(value);
    }

    const handlePost = () => {
        const dup = { ...store };
        dup.scholar = scholar;
        setStore(dup);
    }
    return (
        <div className="inner-content">
            <h1> What's your scholar level?</h1>

            <div className="link-wrapper">
                <Input name="scholar" onChange={handleScholar} placehoder="Scholar level" value={scholar} />
                <Link href={{ pathname: '/speciality', query: { prevChoice: 'scholar' } }} > <button onClick={handlePost}>Next </button></Link>
            </div>
        </div>);
}

export default Scholar;