"use client"
import { useState, useMemo, useCallback } from "react"
import BasicImg from "@/component/imgs/BasicImg"

type PostObj = {
    body: string;
    id: number;
    title: string;
    userId: number;
}

type Props = {
    posts: PostObj[]
}
export default function PostContent({ posts }: Props) {
    const [page, setPage] = useState(1);

    const memoPosts = useMemo(() => {
        if(!Array.isArray(posts)) return [];
        const start = (page - 1) * 10;
        const end = page * 10;
        return posts.slice(start, end);
    }, [posts, page]);
    console.log(memoPosts, 'memoPosts')

    return (
        <div className="mb-2 px-4 sm:px-0 min-w-md">
            {
                memoPosts.map(item => {
                    return (
                        <div key={item.id} className="pb-2 grid grid-cols-12 gap-2">
                            <div className="col-span-2 flex items-center"><BasicImg className="rounded-full" /></div>
                            <div className="col-span-10 min-w-0">
                                <p className="py-2 truncate">{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <button onClick={() => setPage(page => page + 1)}>next</button>
                <button onClick={() => setPage(page => page - 1)}>up</button>
            </div>
        </div>
    )
    
}
