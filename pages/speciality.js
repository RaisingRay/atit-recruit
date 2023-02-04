import Link from "next/link";
import { useRouter } from "next/router";

const IT = () => {
    const router = useRouter();

    return (<>
        speciality
        {router.query.prevChoice == "scholar" &&
            <Link href="/it">Next</Link>}
        {router.query.prevChoice == "domain" &&
            <Link href="/pega">Next</Link>}
    </>);
}


export default IT;