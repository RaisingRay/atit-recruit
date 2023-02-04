import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

// name, onChange, placehoder, value 
const University = () => {
    const router = useRouter();
    const { store, setStore } = useContext(storeContext);
    const [university, setUniversity] = useState("");


    const handeleUniversity = ({ target }) => {
        const value = target.value;
        setUniversity(value);
    }

    const handlePost = () => {
        const dup = { ...store };
        dup.University = university;
        setStore(dup);
    }
    return (<>
        University
        <Input name="university" onChange={handeleUniversity} placeholder="university" value={university} />
        {router.query.prevChoice == "student" &&
            <Link href="/scholar"><button onClick={handlePost}>Next</button></Link>}
        {router.query.prevChoice == "fresh" &&
            <Link href="/graduation" ><button onClick={handlePost}>Next</button></Link>}
    </>);
}

export default University;