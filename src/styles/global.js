import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
    }

    ol, ul {
        list-style: none;
    }

    button:hover {
        cursor: pointer;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --feedback-success: #3fe864;
        --feedback-nefative: #e83f5b;
    }

    body {
        background-color: var(--grey-4);
        color: var(--grey-0);
    }
`;
