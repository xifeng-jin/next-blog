import React from "react";
import Header from "@/component/header";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="text-black">
            <Header />
            <div>{children}</div>
        </div>
    )
}