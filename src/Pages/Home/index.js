import { AnimatedTitle, MessageContainer, FatherContainer, ButtonContainer } from './style';
import { PrimaryButton } from '../../Components/Buttons';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

 

function Home() {

    const history = useHistory();

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        >
            <FatherContainer>

            <h1 className='title'>Kenzie Hub</h1>

            <MessageContainer>
                <AnimatedTitle time={1.5} color={'var(--grey-0)'}>Gerencie</AnimatedTitle>
                <AnimatedTitle time={2} color={'var(--grey-0)'}>com sucesso,</AnimatedTitle>
                <AnimatedTitle time={2.5} color={'var(--grey-0)'}>suas habilidades</AnimatedTitle>
                <AnimatedTitle time={3} color={'var(--grey-0)'}>adquiridas na</AnimatedTitle><AnimatedTitle color={'rgba(13,95,255,0.91)'} size={45}> Kenzie</AnimatedTitle>
            </MessageContainer>

            <ButtonContainer>

                <PrimaryButton width={'133.33px'} onClick={()=> history.push("/login")}>Login</PrimaryButton>
                <PrimaryButton width={'133.33px'} onClick={()=> history.push("/registerUser")}>Cadastre-se</PrimaryButton>

            </ButtonContainer>

            </FatherContainer>
        </motion.div>
    )
}

export default Home;