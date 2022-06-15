import styled from "styled-components";

export const StyledDiv = styled.div` 
    width: 90%;

    background-color: var(--grey-3);

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledInput = styled.input`

    width: 90%;
    height: 42px;

    background-color: var(--grey-2);

    border-radius: 5px;
    border: none;

    margin-top: .4rem;

    &&::placeholder {
        color: var(--grey-1);
        text-align: center;
    }
`

export const StyledLabel = styled.label`
    width: 85%;

    margin-left: .5rem;
    margin-top: .1rem;

    text-align: justify;

    font-weight: ${(props)=> props.weight};
    font-size: 15px;

    color: ${(props)=> props.color};
`

export const StyledSelect = styled.select`

    width: 90%;
    height: 42px;

    background-color: var(--grey-2);

    border-radius: 5px;
    border: none;

    margin-top: .4rem;
    color: var(--grey-1);

    &&::placeholder {
        color: var(--grey-1);
        text-align: center;
    }
`

export const StyledOption = styled.option`

    width: 90%;
    height: 22px;

    background-color: var(--grey-2);
    color: var(--grey-1);

    border-radius: 5px;
    border: none;

    &&::placeholder {
        color: var(--grey-1);
        text-align: center;
    }
`