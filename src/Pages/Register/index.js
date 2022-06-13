import NavBar from '../../Components/NavBar';
import { AnimatedTitle } from '../Home/style';
import { Container, ContainerContent } from './style';
import NewInput from '../../Components/Inputs'
import { StyledDiv, StyledLabel, StyledOption, StyledSelect } from '../../Components/Inputs/style';
import { PrimaryButton } from '../../Components/Buttons';

function Register() {

    return(
        <Container>
            <NavBar/>
            <ContainerContent>

                <AnimatedTitle>Crie sua conta</AnimatedTitle>

                <AnimatedTitle color={'var(--grey-1)'} weigth={200} size={15}>Rápido e gratis, vamos nessa</AnimatedTitle>

                <NewInput label={'Nome'} placeholder={'Digite aqui seu nome'}></NewInput>

                <NewInput label={'E-mail'} placeholder={'Digite aqui seu email'}></NewInput>

                <NewInput label={'Senha'} placeholder={'Digite aqui sua senha'}></NewInput>

                <NewInput label={'Confirme a senha'} placeholder={'Confirme sua senha'}></NewInput>

                <NewInput label={'Bio'} placeholder={'Fale um pouco sobre você.'}></NewInput>

                <NewInput label={'Contato'} placeholder={'Digite um numero para contato'}></NewInput>

                <StyledDiv>
                    <StyledLabel>Selecionar módulo</StyledLabel>
                    <StyledSelect>
                        <StyledOption>Primeiro Módulo</StyledOption>
                        <StyledOption>Segundo Módulo</StyledOption>
                        <StyledOption>Terceiro Módulo</StyledOption>
                        <StyledOption>Quarto Módulo</StyledOption>
                        <StyledOption>Quinto Módulo</StyledOption>
                        <StyledOption>Sexto Módulo</StyledOption>
                    </StyledSelect>
                </StyledDiv>

                <StyledDiv>
                    <PrimaryButton width={'90%'}>Cadastrar</PrimaryButton>
                </StyledDiv>
            </ContainerContent>
        </Container>
    )
}

export default Register;