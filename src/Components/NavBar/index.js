import { useHistory } from "react-router-dom";
import { AnimatedTitle } from "../../Pages/Home/style";
import { SecondaryButton } from "../Buttons";
import { ContainerHeader } from "./style";

function NavBar({ message }) {
  const history = useHistory();

  return (
    <ContainerHeader>
      <AnimatedTitle time={1} color={"var(--color-primary)"}>
        Kenzie Hub
      </AnimatedTitle>
      <SecondaryButton onClick={() => { 
        history.push("/");
        localStorage.clear();
        }}>
        {message || 'Voltar'}
      </SecondaryButton>
    </ContainerHeader>
  );
}

export default NavBar;
