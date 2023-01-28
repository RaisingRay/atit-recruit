import Link from "next/link";
import { useRouter } from "next/router";

const University = () => {
    const router = useRouter();
    console.log(router.query);
    return (<>
        University
        {router.query.prevChoice == "student" &&
            <Link href="/scholar">Next</Link>}
        {router.query.prevChoice == "fresh" &&
            <Link href="/graduation">Next</Link>}
    </>);
}

export default University;