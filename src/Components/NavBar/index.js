import { useHistory } from "react-router-dom";
import { AnimatedTitle } from "../../Pages/Home/style";
import { SecondaryButton } from "../Buttons";
import { ContainerHeader } from "./style";

function NavBar() {
  const history = useHistory();

  return (
    <ContainerHeader>
      <AnimatedTitle time={1} color={"var(--color-primary)"}>
        Kenzie Hub
      </AnimatedTitle>
      <SecondaryButton onClick={() => history.push("/")}>
        Voltar
      </SecondaryButton>
    </ContainerHeader>
  );
}

export default NavBar;
