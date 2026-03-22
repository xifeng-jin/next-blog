"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import useRandomTime from "@/app/_hooks/useRandomTime";
import NavigationButton from "@/component/button/navigateButton";

function BlogPageComponent() {
    const { color } = useRandomTime();
    const uuid = new Array(5).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
    return (
        <div className="px-4">
            <h3>Blog Page</h3>
            <div className="flex flex-row gap-4 justify-start">
                {/* <Link href={`./blog/${uuid}`}>go slug</Link> */}
                <NavigationButton title="go slug" href={`./blog/${uuid}`} />
                <NavigationButton title="go slug" href={`./blog/${uuid}`} />
            </div>
            
        </div>
    )
}

const BlogPageCSR = dynamic(() => Promise.resolve(BlogPageComponent), {
    ssr: false,
    loading: () => <div>loading...</div>
});

export default function BlogPage() {
    
    return <BlogPageCSR />
}