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
        <>
            scholar
            <Input name="scholar" onChange={handleScholar} placehoder="Scholar" value={scholar} />
            <Link href={{ pathname: '/speciality', query: { prevChoice: 'scholar' } }} > <button onClick={handlePost}>Next </button></Link>
        </>);
}

export default Scholar;