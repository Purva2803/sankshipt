import { PostMeta } from "types/Post";
import * as Styles from "./PostCard.style";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ postMeta }: { postMeta: PostMeta }) => {
    return (
        <Styles.Wrapper>
            <Styles.ImageWrapper>
                <Link href={`/stories/${postMeta.slug}`}>
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
                                ...postMeta.image.css,
                            }}
                        />
                        <Image {...postMeta.image.img} loading="lazy" />
                    </div>
                </Link>

                <div className="background"></div>
            </Styles.ImageWrapper>
            <Styles.PostDetails>
                <div className="date-time">
                    <CalenderIcon />
                    <p>{postMeta.date.substring(0, 15)}</p>
                </div>
                <div className="title-summary">
                    <div className="title">
                        <Link href={`/stories/${postMeta.slug}`}>
                            <h1>{postMeta.title}</h1>
                        </Link>
                    </div>
                    <div className="summary">
                        <p>{postMeta.description}</p>
                    </div>
                </div>
                <div className="genre-wrapper">
                    {postMeta.tags.map((genre, index) => {
                        return (
                            <div className="genre" key={index}>
                                {genre}
                            </div>
                        );
                    })}
                </div>
            </Styles.PostDetails>
        </Styles.Wrapper>
    );
};

export default PostCard;

const CalenderIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-calendar-event"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="5" width="16" height="16" rx="2"></rect>
            <line x1="16" y1="3" x2="16" y2="7"></line>
            <line x1="8" y1="3" x2="8" y2="7"></line>
            <line x1="4" y1="11" x2="20" y2="11"></line>
            <rect x="8" y="15" width="2" height="2"></rect>
        </svg>
    );
};
