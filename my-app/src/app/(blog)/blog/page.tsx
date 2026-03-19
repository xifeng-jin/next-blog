"use client";

import useRandomTime from "@/app/_hooks/useRandomTime";
import dynamic from "next/dynamic";

function BlogPageComponent() {
    const { color } = useRandomTime();
    return (
        <>
            <h3>Blog Page</h3>
            <div>{color}</div>
            
        </>
    )
}

const BlogPageCSR = dynamic(() => Promise.resolve(BlogPageComponent), {
    ssr: false,
    loading: () => <div>loading...</div>
});

export default function BlogPage() {
    
    return <BlogPageCSR />
}