import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: ${(props) => props.width};
  height: 48px;

  border-radius: 10px;
  border: none;

  background-color: var(--color-primary);
  color: var(--grey-0);

  &&:hover {
    background-color: var(--color-primary-focus);
    border: 3px solid var(--color-primary);
  }
`;

export const SecondaryButton = styled.button`
  width: 99.49px;
  height: 32px;

  border-radius: 5px;
  border: none;

  background-color: var(--grey-3);
  color: var(--grey-0);

  &&:hover {
    background-color: var(--grey-4);
    border: 3px solid var(--grey-3);
  }
`;
