import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;

    background-color: inherit;
  }

  @media screen and (min-width: 769px) {
    margin: 0 auto;

    width: 90vw;
    height: 100vh;

    background-color: inherit;
  }
`;

export const ContainerContent = styled.form`
  @media screen and (max-width: 768px) {
    width: 90%;

    background-color: var(--grey-3);

    margin: 1rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;

    gap: 1rem;

    border-radius: 10px;

    padding: 1rem;
  }

  @media screen and (min-width: 769px) {
    width: 30%;

    background-color: var(--grey-3);

    margin: 1rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;

    gap: 1.5rem;

    border-radius: 3px;

    padding: 1.5rem;

    h1 {
      margin-top: 2rem;
    }
  }
`;
