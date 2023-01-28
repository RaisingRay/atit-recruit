import Link from "next/link";

const Status = () => {
    return (<>
        status
        <Link href={{ pathname: '/university', query: { prevChoice: 'student' } }}>Student</Link>
        <Link href={{ pathname: '/university', query: { prevChoice: 'fresh' } }}>Fresh Graduate</Link>
        <Link href="/">Woker</Link>
    </>);
}

export default Status;