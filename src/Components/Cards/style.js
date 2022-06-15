import styled from "styled-components";

export const ListDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    gap: 1rem;

    .card-father {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--grey-4);

      border-radius: 5px;

      padding: 0.5rem;

      button {
        font-size: 15px;
        background-color: var(--grey-4);
        width: 20px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    gap: 1rem;

    &&:hover {
        cursor: pointer;
      }

    .card-father {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--grey-4);

      border-radius: 5px;

      padding: 1rem;

      button {
        font-size: 15px;
        background-color: var(--grey-4);
      }

    }
  }
`;

export const Card = styled.div`
  @media screen and (max-width: 768px) {
    width: 90%;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 769px) {
    width: 90%;
    height: 50px;

    border-radius: 5px;

    background-color: var(--grey-4);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;

    &&:hover {
        background-color: var(--grey-3);
        transform: scale(1.02);
      transition: .7s;
  }
}
`
