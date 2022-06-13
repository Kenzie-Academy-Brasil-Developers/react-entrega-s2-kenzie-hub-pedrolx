import styled from "styled-components";

export const ContainerHeader = styled.div` 
    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2rem;

        width: 100%;
        height: 80px;

        border-bottom: 3px solid var(--grey-2);
    }

    @media screen and (min-width: 769px) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2rem;

        width: 100%;
        height: 80px;

        border-bottom: 3px solid var(--grey-2);
    }
`

