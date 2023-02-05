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

    return (
        <div className="inner-content">

            <div className="link-wrapper">
                <h1> What's your speciality?</h1>
                <Input name="speciality" onChange={handleSpeciality} placehoder="speciality" value={speciality} />
                {router.query.prevChoice == "scholar" &&
                    <Link href="/it"><button onClick={handlePost}>Next</button></Link>}
                {router.query.prevChoice == "itDomain" &&
                    <Link href="/userInfo"><button onClick={handlePost}>Next</button></Link>} </div>

        </div>

    );
}


export default speciality;