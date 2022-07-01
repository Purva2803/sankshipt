import styled from "styled-components";

export const HeadingWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    .heading {
        font-size: 2.6rem;
        font-weight: bold;
        z-index: 1;
    }

    .line-wrapper {
        position: absolute;
        overflow: hidden;
        width: 200px;
        top: 48%;
    }
`;
