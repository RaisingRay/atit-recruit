import Link from "next/link";

const Domain = () => {
    return (

        <div className="content-inner">
            <h1>What is your work domain?</h1>
            <div className="link-wrapper-between">
                <Link href="/itDomain"><button>IT</button></Link>
                <Link href="/otherDomain"><button> Other </button></Link>
            </div>
        </div>
    );
}

export default Domain;