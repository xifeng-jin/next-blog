
import { postService } from "@/lib/api/services/postsService";
import Container from "@/component/container";

import PostContent from "./component/PostContent";

export default async function Posts() {
    const postAll = await postService.getAllPosts();
    console.log(postAll, 'kkk')
    return (
        <Container>
            <PostContent posts={postAll} />
        </Container>
    )
}