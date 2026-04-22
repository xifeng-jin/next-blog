"use client";
import dynamic from "next/dynamic";

import NavigationButton from "@/component/button/navigateButton";

export const Test = () => undefined;

export const uuid = new Array(5).fill(0).map(() => Math.floor(Math.random() * 10)).join('');

function BlogPageComponent() {
    return (
        <div className="px-4">
            <h3>Blog Page</h3>
            <Test />
            <div className="flex flex-row gap-4 justify-start">
                <NavigationButton title="go back" href={`./blog/${uuid}`} />
                <NavigationButton title="go posts" href={`./posts`} />
                <NavigationButton title="go back" href={`./blog/${uuid}`} disabled />
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