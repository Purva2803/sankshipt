import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts");
const allDirs = fs.readdirSync(POSTS_PATH);

export const postPaths = allDirs.map((dir) => {
    const rawPath = path.join(POSTS_PATH, dir);
    const paths = {
        file: "",
        image: "",
    };
    fs.readdirSync(rawPath).map((file) => {
        if (file.endsWith(".md")) {
            paths.file = path.join(rawPath, file);
        } else {
            const imageDir = path.join(rawPath, file);
            const imageFiles = fs.readdirSync(imageDir);
            // paths.image = path.join(imageDir, imageFiles[0]);
            paths.image = "/images/62-how-to-stay-consistent/images/how-to-stay-consistent.jpg";
        }
        return paths;
    });

    return paths;
});
