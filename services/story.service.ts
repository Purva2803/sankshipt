import { getPlaiceholder } from "plaiceholder";
import matter from "gray-matter";
import { postPaths } from "utils/mdxUtils";
import fs from "fs";
import type { Post, PostMeta } from "types/Post";
import { serialize } from "next-mdx-remote/serialize";

export const getAllStories = async () => {
    return await Promise.all(
        postPaths.slice(0, 5).map(async (paths) => {
            const source = fs.readFileSync(paths.file, "utf8");
            const { data } = matter(source);
            data.date = data.date.toString();
            const imagePath = paths.image;

            const { img, css } = await getPlaiceholder(imagePath);

            return {
                ...data,
                image: {
                    img,
                    css,
                },
                path: paths.file,
            } as PostMeta;
        })
    );
};

export const getStoryBySlug = async (slug: string | undefined | string[]) => {
    const allPaths = await Promise.all([
        postPaths.find(async (paths) => {
            const source = fs.readFileSync(paths.file, "utf8");
            const { data } = matter(source);
            return data.slug === slug;
        }),
    ]);

    const source = fs.readFileSync(allPaths[0]?.file as string, "utf8");
    const { data, content } = matter(source);

    data.date = data.date.toString();
    const imagePath = allPaths[0]?.image as string;

    const { img, css } = await getPlaiceholder(imagePath);

    const mdData = await serialize(content, {
        mdxOptions: { format: "md" },
    });

    const story: Post = {
        data: mdData,
        meta: {
            ...data,
            image: {
                img,
                css,
            },
            path: imagePath,
        } as PostMeta,
    };

    return story;
};
