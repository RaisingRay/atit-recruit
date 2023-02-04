import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

// name, onChange, placehoder, value 
const speciality = () => {
    const router = useRouter();
    const [speciality, setSpeciality] = useState("");
    const { store, setStore } = useContext(storeContext);

    const handleSpeciality = ({ target }) => {
        const value = target.value;
        setSpeciality(value);
    }

    const handlePost = () => {
        const dup = { ...store };
        dup.speciality = speciality;
        setStore(dup);
    }

    return (<>
        speciality
        <Input name="speciality" onChange={handleSpeciality} placehoder="specciality" value={speciality} />
        {router.query.prevChoice == "scholar" &&
            <Link href="/it"><button onClick={handlePost}>Next</button></Link>}
        {router.query.prevChoice == "domain" &&
            <Link href="/pega">Next</Link>}
    </>);
}


export default speciality;