import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const Status = () => {
    const { store, setStore } = useContext(storeContext);
    const handleStatus = (value) => {
        const dup = { ...store }
        dup.status = value;
        setStore(dup);
    }
    return (<>
        <div className="inner-content">
            <h1>What's your status?</h1>
            <div className="link-wrapper">
                <Link href={{ pathname: '/university', query: { prevChoice: 'student' } }}><button onClick={() => { handleStatus("Student") }}>Student</button></Link>
                <Link href={{ pathname: '/university', query: { prevChoice: 'fresh' } }}><button onClick={() => { handleStatus("Fresh Graduate") }}>Fresh Graduate</button></Link>
                <Link href="/domain"><button onClick={() => { handleStatus("Worker") }}>Worker</button></Link>
            </div>
        </div>


    </>);
}

export default Status;