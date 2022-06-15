import { AiOutlineClose } from "react-icons/ai";
import { AnimatedTitle } from "../../Pages/Home/style";
import { ContainerContent } from "../../Pages/RegisterUser/style";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { StyledDiv, StyledInput, StyledLabel, StyledOption, StyledSelect } from "../Inputs/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddModal } from "../../Pages/Dashboard/style";

function AddModalComponent({ setFalse, addTechToList }) {

  
    const formSchema = yup.object().shape({
        title: yup.string().required("Digite o nome da tecnologia!"),
      });
    
      const { register, handleSubmit } = useForm({
        resolver: yupResolver(formSchema),
      });

    return(
            <AddModal>
              <header>
                <AnimatedTitle size={15}>Cadastrar Tecnologia</AnimatedTitle>
                <SecondaryButton onClick={setFalse}>
                  <AiOutlineClose />
                </SecondaryButton>
              </header>
              <body>
                <ContainerContent onSubmit={handleSubmit(addTechToList)}>
                  <StyledDiv>
                    <StyledLabel>Nome</StyledLabel>
                    <StyledInput
                      {...register("title")}
                      placeholder="Ex: Typescript"
                    ></StyledInput>
                  </StyledDiv>

                  <StyledDiv>
                    <StyledLabel>Selecionar Status</StyledLabel>
                    <StyledSelect {...register("status")}>
                      <StyledOption value="Iniciante">Iniciante</StyledOption>
                      <StyledOption value="Intermediário">
                        Intermediario
                      </StyledOption>
                      <StyledOption value="Avançado">Avançado</StyledOption>
                    </StyledSelect>
                  </StyledDiv>
                  <PrimaryButton type="submit">
                    Cadastrar Tecnologia
                  </PrimaryButton>
                </ContainerContent>
              </body>
            </AddModal>
    )
}

export default AddModalComponent;