import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 80%;

    .heading-wrapper {
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        .breadcumbs {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
`;
