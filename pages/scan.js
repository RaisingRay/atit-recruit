import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext } from "react";

const Scan = () => {
    const {store,setStore} = useContext(storeContext);
    console.log(store);
    return (
        <div className="content-inner">
            <h1>Your application is submitted. Thank you.</h1>
            <div class="swal-icon swal-icon--success">
    <span class="swal-icon--success__line swal-icon--success__line--long"></span>
    <span class="swal-icon--success__line swal-icon--success__line--tip"></span>
    <div class="swal-icon--success__ring"></div>
    <div class="swal-icon--success__hide-corners"></div>
</div>
        </div>
  );
}

export default Scan;