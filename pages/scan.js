import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const Scan = () => {
    const { store, setStore } = useContext(storeContext);
    console.log(store);
    return (<>
        Scan

        <Link href="/thank">Next</Link>
    </>);
}

export default Scan;