import styled from "styled-components";
import { color, fontSize, width } from "styles/functions";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${width("xlarge")};
    padding: 2rem 0px;
    display: flex;
    flex-direction: column;

    gap: 2rem;

    .heading {
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1 {
            font-size: 3rem;
            text-align: center;
        }
    }
`;

export const ImageWrapper = styled.div`
    img {
        transition: all 0.3s ease-in-out;
        border-radius: 7px;
        z-index: 1;
    }
`;

export const ContentWrapper = styled.div`
    /* max-width: 70%; */
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-size: ${fontSize("md")};
    }
    h3 {
        font-size: ${fontSize("sm")};
    }

    p {
        font-size: 1.2rem;
    }
    a {
        color: ${color("accent")};
        text-decoration: none;
    }
`;
