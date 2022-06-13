import { AnimatedTitle, MessageContainer, FatherContainer, ButtonContainer } from './style';
import { PrimaryButton } from '../../Components/Buttons';
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    return(
        <FatherContainer>

        <h1 className='title'>Kenzie Hub</h1>

        <MessageContainer>
            <AnimatedTitle time={1.5} color={'var(--grey-0)'}>Gerencie</AnimatedTitle>
            <AnimatedTitle time={2} color={'var(--grey-0)'}>com sucesso,</AnimatedTitle>
            <AnimatedTitle time={2.5} color={'var(--grey-0)'}>suas</AnimatedTitle>
            <AnimatedTitle time={3} color={'var(--grey-0)'}>habilidades</AnimatedTitle>
            <AnimatedTitle color={'rgba(0,0,255,.9)'} size={45}>Kenzie</AnimatedTitle>
        </MessageContainer>

        <ButtonContainer>

            <PrimaryButton width={'133.33px'} onClick={()=> history.push("/login")}>Login</PrimaryButton>
            <PrimaryButton width={'133.33px'} onClick={()=> history.push("/register")}>Cadastre-se</PrimaryButton>

        </ButtonContainer>

        </FatherContainer>
    )
}

export default Home;