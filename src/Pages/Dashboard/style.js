import styled from "styled-components";

export const DashHeader = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;

    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    padding: 1rem;

    border-bottom: 3px solid var(--grey-2);

    h1 {
      font-size: ${(props) => props.size};
    }
  }

  @media screen and (min-width: 769px) {
    width:100%;

    height: 150px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    border-bottom: 3px solid var(--grey-2);
  }
`;
export const DashMain = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;

    .div-dash-header{
      width: 90%;

      margin: 0 auto;

      padding: 1rem;
    }

    .div-list-tech {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }

  @media screen and (min-width: 769px) {
    width: 100%;

    .div-dash-header{
      width: 100%;

      margin: 0 auto;

      padding: 1rem;
    }

    .div-list-tech {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        font-size: 10px;
        font-weight: 400;
        text-align: center;
      }
    }
  }
`;

export const CardsDiv = styled.div`
  @media screen and (max-width: 768px) {
    width: 90%;

    background-color: var(--grey-3);

    margin: 1.5rem auto ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    gap: .5rem;

    border-radius: 5px;

    padding: 1rem;
  }

  @media screen and (min-width: 769px) {
    width: 100%;

    background-color: var(--grey-3);

    margin: 1.5rem auto ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    gap: .5rem;

    border-radius: 5px;

    padding: 1rem;
  }
`;

export const AddModal = styled.div`
  @media screen and (max-width: 768px) {
    width: 80%;

    background-color: var(--grey-2);

    position: fixed;

    top: 20%;
    left: 10%;

    border-radius: 5px;

    header {
      width: 100%;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 1.7rem;

      color: var(--grey-0);

      button {
        width: 50px;

        font-weight: 900;
      }
    }

    form {
      width: 100%;

      button {
        width: 270px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    width: 30%;

    background-color: var(--grey-2);

    position: fixed;

    top: 20%;
    left: 33%;

    border-radius: 5px;

    header {
      width: 100%;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 1.7rem;

      color: var(--grey-0);

      button {
        width: 50px;

        font-weight: 900;
      }
    }

    form {
      width: 100%;

      button {
        width: 270px;
      }
    }
  }
`;
