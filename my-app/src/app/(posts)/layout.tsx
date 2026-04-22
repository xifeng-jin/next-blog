import React from "react";

import Header from "@/component/header";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="text-black bg-gray-50">
            <Header>222</Header>
            <div>{children}</div>
        </div>
    )
}