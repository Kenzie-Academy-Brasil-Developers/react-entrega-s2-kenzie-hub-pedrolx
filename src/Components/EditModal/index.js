import { AiOutlineClose } from "react-icons/ai";
import { AnimatedTitle } from "../../Pages/Home/style";
import { ContainerContent } from "../../Pages/RegisterUser/style";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { StyledDiv, StyledInput, StyledLabel, StyledOption, StyledSelect } from "../Inputs/style";
import { AddModal } from "../../Pages/Dashboard/style";

function EditModalComponent({ openEditModal, techToEdit, setStatus, editTechOnApi, status }) {


    return(
            <AddModal>
              <header>
                <AnimatedTitle size={15}>Detalhes da Tecnologia</AnimatedTitle>
                <SecondaryButton onClick={openEditModal}>
                  <AiOutlineClose />
                </SecondaryButton>
              </header>
              <body>
                <ContainerContent>
                  <StyledDiv>
                    <StyledLabel>Nome</StyledLabel>
                    <StyledInput
                      placeholder={techToEdit.title}
                      disabled
                    ></StyledInput>
                  </StyledDiv>

                  <StyledDiv>
                    <StyledLabel>Selecionar Status</StyledLabel>
                    <StyledSelect onChange={(e) => {
                      setStatus(e.target.value)
                      }}>
                      <StyledOption value="Iniciante">
                        Iniciante
                      </StyledOption>
                      <StyledOption value="Intermediário">
                        Intermediario
                      </StyledOption>
                      <StyledOption value="Avançado">Avançado</StyledOption>
                    </StyledSelect>
                  </StyledDiv>
                  <PrimaryButton onClick={(e) => editTechOnApi(e)}>
                    Editar Tecnologia
                  </PrimaryButton>
                </ContainerContent>
              </body>
            </AddModal>
    )
}

export default EditModalComponent;