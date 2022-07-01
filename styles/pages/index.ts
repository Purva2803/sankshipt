import styled from "styled-components";

import { color, fontSize, space } from "styles/functions";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1320px;
    background-color: ${color("light")};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% auto;
`;

export const EntryPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .text {
        text-align: center;
        max-width: 65%;
        position: absolute;
        font-size: 1.8rem;
    }
`;

export const RecentPostWrapper = styled.div`
    display: grid;
    grid-template-rows: 10% auto;
`;

export const PostsGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    .image-wrapper {
        border: solid 1px black;
    }
`;
