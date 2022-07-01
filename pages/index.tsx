import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Wave } from "components/Wave";
import * as Styles from "styles/pages";
import { PostMeta } from "types/Post";
import { PostCard } from "components/PostCard";
import { PageHeading } from "components/PageHeading";
import { getAllStories } from "services/story.service";

const Home: NextPage<{ posts: PostMeta[] }> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Shankshipt | Stories</title>
            </Head>
            <Styles.Wrapper>
                <Styles.EntryPage>
                    <Wave />
                    <div className="text">
                        <h1>
                            Taking control of your daily life is easy when you
                            know how!
                        </h1>
                    </div>
                </Styles.EntryPage>

                <Styles.RecentPostWrapper>
                    <PageHeading heading="Recent Posts" />

                    <Styles.PostsGrid>
                        {posts.map((postMeta) => {
                            return (
                                <PostCard
                                    key={postMeta.slug}
                                    postMeta={postMeta}
                                />
                            );
                        })}
                    </Styles.PostsGrid>
                </Styles.RecentPostWrapper>
            </Styles.Wrapper>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await getAllStories();

    return {
        props: {
            posts,
        },
    };
};
