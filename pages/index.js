import Segments from "@/component/Segments";
import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
export default function Home() {
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
    console.log(key, dup.get(key));
    dup.set(key, !dup.get(key));
    setSetgments(dup);
  }
  return (
    <>
      Home Page <Link href="/status"> Next</Link>
      {/* <Segments checks={segments} onClick={handleSegments} /> */}
    </>
  )
}
