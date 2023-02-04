import Link from "next/link";
import React from "react";
import { storeContext } from "@/store/storeContext";
import { useState } from "react";
export default function Layout({ children }) {
    const [store, setStore] = useState();
    return (
        <>
            <React.StrictMode>
                <storeContext.Provider value={{ store, setStore }}>
                    <Link href="/">Origin</Link>
                    <main>{children}</main>
                </storeContext.Provider>

            </React.StrictMode>
        </>
    )
}