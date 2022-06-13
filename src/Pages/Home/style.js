import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes` 
    from {
        opacity: 0;
        transform: translateY(-350px)
    }
    
    to {
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const AnimatedTitle = styled.h1`
  animation: ${appearFromTop} ${(props) => props.time}s;

  color: ${(props) => props.color};

  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weigth};
`;

export const MessageContainer = styled.div`
  @media screen and (max-width: 768px) {
    background-color: var(--gray-2);

    position: fixed;

    top: 27%;
    left: 25%;
  }

  @media screen and (min-width: 769px) {
    background-color: var(--gray-2);

    position: fixed;

    top: 30%;
    left: 17%;
  }
`;

export const FatherContainer = styled.div`
  @media screen and (max-width: 768px) {
    .title {
      text-align: center;

      margin-top: 5rem;

      opacity: .9;
      color: var(--color-primary);
    }
  }

  @media screen and (min-width: 769px) {
    .title {
      text-align: center;

      margin-top: 2.5rem;
      margin-right: 2rem;

      opacity: .9;
      color: var(--color-primary);
    }
  }

`;

export const ButtonContainer = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;

    width: 100%;

    top: 80%;

    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 769px) {
    position: fixed;

    height: 50%;

    top: 20%;
    left: 69%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
