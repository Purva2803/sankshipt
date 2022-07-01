interface PostMeta {
    date: string;
    title: string;
    seo_title: string;
    slug: string;
    description: string;
    category: string;
    tags: string[];
    image: {
        img: any;
        css: any;
    };
    cta: string;
    path: string;
}

export default PostMeta;
