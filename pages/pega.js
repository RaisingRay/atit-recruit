import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const Pega = () => {
    return (
        <div className="content-inner">
            <h1>Do you know Pega?</h1>
            <div className="link-wrapper-between">
            <Link href="/exp"><button>Yes</button></Link>
            <Link href="/userInfo"><button>No</button></Link>
            </div>
        </div>
    );
}

export default Pega;