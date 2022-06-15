import { StyledDiv, StyledInput, StyledLabel } from "./style";

function NewInput({label, placeholder, register, name, type, errors}) {
    return(
        <StyledDiv>
            {errors?.message ? (<StyledLabel color={"var(--feedback-negative)"}>{errors?.message}</StyledLabel>) : (<StyledLabel>{label}</StyledLabel>)}
            <StyledInput {...register(name)} placeholder={placeholder} type={type && type}></StyledInput>
        </StyledDiv>
    )
}

export default NewInput;