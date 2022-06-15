import NavBar from "../../Components/NavBar";
import { AnimatedTitle } from "../Home/style";
import { Container, ContainerContent } from "../RegisterUser/style";
import NewInput from "../../Components/Inputs";
import { StyledDiv } from "../../Components/Inputs/style";
import { PrimaryButton, SecondaryButton } from "../../Components/Buttons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/data";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

function Login({ setAuth, setUser }) {

  const history = useHistory();

  const handleLogin = (data) => {
    const newUser = {
      email: data.email,
      password: data.password,
    };

    api
      .post("/sessions", newUser)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@KenzieHb:token", res.data.token);
        toast.success("Login realizado!");
        setUser(res.data);
        setAuth(true);
      })
      .catch((err) => toast.error("Parece que algo deu errado no login."));
  };

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Digite seu e-mail!"),
    password: yup.string().required("Digite sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <NavBar />
      <ContainerContent onSubmit={handleSubmit(handleLogin)}>
        <AnimatedTitle>Login</AnimatedTitle>

        <NewInput
          label={"E-mail"}
          placeholder={"Digite aqui seu email"}
          register={register}
          name="email"
          errors={errors?.email}
        ></NewInput>

        <NewInput
          label={"Senha"}
          placeholder={"Digite aqui sua senha"}
          register={register}
          name="password"
          type="password"
          errors={errors?.password}
        ></NewInput>

        <StyledDiv>
          <PrimaryButton type="submit" width={"90%"}>
            Entrar
          </PrimaryButton>
        </StyledDiv>

        <AnimatedTitle size={13} weigth={500}>Ainda não possui uma conta?</AnimatedTitle>
        <PrimaryButton width={"81%"} color={"var(--grey-1)"} onClick={()=> history.push("/registerUser")}>Cadastre-se</PrimaryButton>
      </ContainerContent>
    </Container>
  );
}

export default Login;
