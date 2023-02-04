import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useState } from "react";

// name, onChange, placehoder, value 
const UnerInfo = () => {
    const [user, SetUser] = useState({});
    const { store, setStore } = useContext(storeContext);

    const handleInput = ({ target }) => {
        console.log(target.name);
        const userDup = { ...user };
        userDup[target.name] = target.value;
        SetUser(userDup);
        console.log(user);
    }
    const handlePost = () => {
        const dup = { ...store };
        dup.user = user;
        setStore(dup);
    }
    return (
        <>
            User Info
            <div className="user-form">
                <Input name="firstName" onChange={handleInput} placehoder="First Name" value={user["firstName"]} />
                <Input name="lastName" onChange={handleInput} placehoder="Last Name" value={user["lastName"]} />
                <Input name="phone" onChange={handleInput} placehoder="Phone" value={user["phone"]} />
                <Input name="email" onChange={handleInput} placehoder="Email" value={user["email"]} />
                <Input name="nationality" onChange={handleInput} placehoder="Nationality" value={user["nationality"]} />
                <Input name="coutryOfResidence" onChange={handleInput} placehoder="Coutry Of Residence" value={user["coutryOfResidence"]} />
            </div>
            <Link href="/scan"><button onClick={handlePost}>Next </button></Link>
        </>
    );
}

export default UnerInfo;