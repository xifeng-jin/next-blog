"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import useRandomTime from "@/app/_hooks/useRandomTime";

function BlogPageComponent() {
    const { color } = useRandomTime();
    return (
        <>
            <h3>Blog Page</h3>
            <div>
                <Link href='/blog/111'>go slug</Link>
            </div>
            
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