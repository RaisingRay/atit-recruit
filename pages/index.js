import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { storeContext } from "@/store/storeContext";
export default function Home() {
  const { store, setStore } = useContext(storeContext);
  useEffect(() => {
    setStore({});
  }, [])
  return (
    <div className="content-inner starterHero">
      <Image className="Hero-ATIT-LOGO" src="/logo.png" alt="logo" layout="fill" />
      {/* <Image src="/banner.png" alt="test" width={300} height={65} / */}
      <h1>Hi!</h1>
      <h1>Are you  </h1>
      <h1 className="large-header">interested </h1><h1>to work with Atit?</h1>
      <Link href="/status"> <button onClick={() => { setStore({ first: true }) }}> Yes </button></Link>
    </div>

  )
}
