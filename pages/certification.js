import Link from "next/link";
import Segments from "@/component/Segments";
import { storeContext } from "@/store/storeContext";
import { useContext, useState } from "react";

const Certification = () => {
    const { store, setStore } = useContext(storeContext);
    const [segments, setSetgments] = useState(new Map([
        ['SA', false],
        ['SSA', false],
        ['LSA', false],
        ['BA', false],
        ['No Certification', false],
    ]));
    const handleSegments = (key) => {

        const dup = new Map(segments)
        dup.set(key, !dup.get(key));
        if (key == "No Certification") {
            for (let k of dup.keys()) {
                if (k != "No Certification")
                    dup.set(k, false);
            }
        } else dup.set("No Certification", false);
        setSetgments(dup);
    }

    const handlePost = () => {
        const arr = Array.from(segments, function (entry) {
            return { key: entry[0], value: entry[1] };
        });
        const dup = { ...store };
        dup.Certification = arr;
        setStore(dup);
    }
    return (
        <div className="content-inner">
        <h1>What Pega certifications you have?</h1>
            <Segments checks={segments} onClick={handleSegments} />
            <div className="link-wrapper">
            <Link href="/userInfo" ><button onClick={handlePost}>Next</button> </Link>
        </div>
        </div>
    );
}

export default Certification;