import Link from "next/link";
import React from "react";
import { storeContext } from "@/store/storeContext";
import { useState } from "react"
import Image from "next/image";
export default function Layout({ children }) {
    const [store, setStore] = useState();
    return (
        <>
            <React.StrictMode>
                <storeContext.Provider value={{ store, setStore }}>
                    {/* <Link className="header-link" href="/"><button>Reset just for testing</button></Link> */}
                    <header><Link className="header-link" href="/"><button>Home</button></Link></header>
                    <main>{children}</main>
                </storeContext.Provider>

            </React.StrictMode>
        </>
    )
}