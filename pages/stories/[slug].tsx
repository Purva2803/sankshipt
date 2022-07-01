import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllStories, getStoryBySlug } from "services/story.service";
import type { Post } from "types/Post";

import { MDXRemote } from "next-mdx-remote";

const Story = ({ story }: { story: Post }) => {
    return (
        <div>
            <div>{story.meta.title}</div>
            <MDXRemote {...story.data} />
        </div>
    );
};

export default Story;

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    const story = await getStoryBySlug(params?.slug);

    return {
        props: {
            story,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allStories = await getAllStories();
    return {
        paths: allStories.map((post) => `/stories/${post.slug}`),
        fallback: false,
    };
};
