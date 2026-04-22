
import { postService } from "@/lib/api/services/postsService";

export default async function Posts() {
    const postAll = await postService.getAllPosts();
    console.log(postAll, 'kkk')
    return (
        <>
            post
        </>
    )
}