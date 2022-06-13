import { StyledDiv, StyledInput, StyledLabel } from "./style";

function NewInput({label, placeholder}) {
    return(
        <StyledDiv>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={placeholder}></StyledInput>
        </StyledDiv>
    )
}

export default NewInput;