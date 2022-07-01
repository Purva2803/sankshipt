import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllStories, getStoryBySlug } from "services/story.service";
import type { Post } from "types/Post";

import { MDXRemote } from "next-mdx-remote";
import * as Styles from "styles/pages/stories/story";

import Image from "next/image";

const Story = ({ story }: { story: Post }) => {
    return (
        <Styles.Wrapper>
            <div className="heading">
                <h1>{story.meta.title} lorem</h1>
            </div>
            <Styles.ImageWrapper>
                <div
                    style={{
                        position: "relative",
                        display: "block",
                        overflow: "hidden",
                        borderRadius: "10px",
                    }}
                >
                    <div
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            transform: "scale(1.5)",
                            filter: "blur(40px)",
                            ...story.meta.image.css,
                        }}
                    />
                    <Image {...story.meta.image.img} loading="lazy" />
                </div>
            </Styles.ImageWrapper>
            <Styles.ContentWrapper>
                <MDXRemote {...story.data} />
            </Styles.ContentWrapper>
        </Styles.Wrapper>
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
