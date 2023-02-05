import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useState } from "react";

const Gruaduation = () => {
    const { store, setStore } = useContext(storeContext);
    const [educationLevel, setEducationLevel] = useState("");
    const [speciality, setSpeciality] = useState("");

    const handleEducation = ({ target }) => {
        const value = target.value;
        setEducationLevel(value);
    }

    const handleSpeciality = ({ target }) => {
        const value = target.value;
        setSpeciality(value);
    }

    const handlePost = () => {
        const dup = { ...store };
        dup.educationLevel = educationLevel;
        dup.speciality = speciality;

        setStore(dup);

    }
    return (
    <div className="inner-content">
        <h1>Which graduate you have?</h1>
        <div className="user-form">
            <Input name="educationLevel" onChange={handleEducation} placehoder="Education Level" value={educationLevel} />
            <Input name="speciality" onChange={handleSpeciality} placehoder="Speciality" value={speciality} />
        </div>
        <Link href="/it"><button onClick={handlePost}>Next</button></Link>
    </div>

   );
}

export default Gruaduation;