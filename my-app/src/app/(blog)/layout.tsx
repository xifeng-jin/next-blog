import React from "react";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div className="text-black">{children}</div>
    )
}