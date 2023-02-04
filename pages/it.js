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
        console.log(arr);
        const dup = { ...store };
        dup.IT = arr;
        console.log(dup);
        setStore(dup);

    }
    return (<>
        it
        <Segments checks={segments} onClick={handleSegments} />
        <Link href="/userInfo"><button onClick={handlePost}>Next</button></Link>
    </>);
}

export default IT;