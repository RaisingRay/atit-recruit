import { storeContext } from "@/store/storeContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
export default function Home() {
  const { store, setStore } = useContext(storeContext);
  const { segments, setSetgments } = useState(new Map());
  useEffect(() => {
    console.log('twice')
  }, []);
  return (
    <>
      Home Page <Link href="/status"> Next</Link>
      {store}
    </>
  )
}
