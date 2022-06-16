import { useHistory } from "react-router-dom";
import { AnimatedTitle } from "../../Pages/Home/style";
import { SecondaryButton } from "../Buttons";
import { ContainerHeader } from "./style";
import toast, { Toaster } from 'react-hot-toast';

function NavBar({ message }) {
  const history = useHistory();

  return (
    <ContainerHeader>
      <AnimatedTitle time={1} color={"var(--color-primary)"}>
        Kenzie Hub
      </AnimatedTitle>
      <SecondaryButton onClick={() => { 
        toast('Esperamos te ver novamente em breve', {
          icon: '😉',
        });
        history.push("/");
        localStorage.clear();
        }}>
        {message || 'Voltar'}
      </SecondaryButton>
    </ContainerHeader>
  );
}

export default NavBar;
