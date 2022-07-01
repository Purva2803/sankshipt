import styled from "styled-components";
import { color } from "styles/functions";
export const Wrapper = styled.div``;

export const ImageWrapper = styled.div`
    padding: 2rem;
    position: relative;

    &:hover img {
        cursor: pointer;
        transform: scale(1.1) rotate(-2deg);
        filter: grayscale(0);
    }

    img {
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        z-index: 1;
        filter: grayscale(1);
        /* backdrop-filter: blur(10px); */
    }

    .background {
        height: calc(100% - 4rem);
        border-radius: 10px;
        width: 100%;
        z-index: 0;
        position: absolute;
        background-color: white;
        left: 0;
        top: 4rem;
    }
`;

export const PostDetails = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .date-time {
        display: flex;
        gap: 1rem;
    }

    .title-summary {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .title {
            color: rgb(0, 0, 0, 0.8);
            transition: all 0.3s ease-in-out;
            &:hover {
                cursor: pointer;
                color: ${color("accent")};
            }
        }

        .summary {
            color: rgb(0, 0, 0, 0.8);
            font-size: 1.2rem;
        }
    }
    .genre-wrapper {
        gap: 1rem;
        display: flex;

        .genre {
            padding: 10px;
            border-radius: 5px;
            background-color: #fdebe4;
            transition: all 0.3s ease-in-out;
            font-size: 0.8rem;
            color: #5e5d5c;
            &:hover {
                cursor: pointer;
                background-color: ${color("accent")};
                color: white;
            }
        }
    }
`;
