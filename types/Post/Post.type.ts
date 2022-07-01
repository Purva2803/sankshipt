import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type PostMeta from "./PostMeta.type";
interface Post {
    data: MDXRemoteSerializeResult;
    meta: PostMeta;
}

export default Post;
