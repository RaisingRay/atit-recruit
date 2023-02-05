import Segments from "@/component/Segments";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useState } from "react";

const IT = () => {
    const { store, setStore } = useContext(storeContext);
    const [segments, setSetgments] = useState(new Map([
        ['java', false],
        ['c#', false],
        ['mysql', false],
        ['postgres', false],
        ['python', false],
    ]));
    const handleSegments = (key) => {
        const dup = new Map(segments)
        dup.set(key, !dup.get(key));
        setSetgments(dup);
    }
    const handlePost = () => {
        const arr = Array.from(segments, function (entry) {
            return { key: entry[0], value: entry[1] };
        });
        const dup = { ...store };
        dup.IT = arr;
        setStore(dup);

    }
    return (<>
        <div className="inner-content">
            <h1>Any IT skills?</h1>
            <div className="link-wrapper">
                <Segments checks={segments} onClick={handleSegments} />
                <Link href="/userInfo"><button onClick={handlePost}>Next</button></Link>
            </div>
        </div>
    </>);
}

export default IT;