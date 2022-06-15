import NavBar from "../../Components/NavBar";
import { AnimatedTitle } from "../Home/style";
import { Container, ContainerContent } from "./style";
import NewInput from "../../Components/Inputs";
import {
  StyledDiv,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "../../Components/Inputs/style";
import { PrimaryButton } from "../../Components/Buttons";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/data";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function RegisterUser() {
  const history = useHistory();

  const onSubmit = (data) => {
    const newUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };

    api
      .post("/users", newUser)
      .then(
        (res) => {
          toast.success(`Obrigado ${newUser.name}. Você será redirecionado(a) a área de login.`);
          history.push("/login");
        }
      )
      .catch(
        (err) =>
        toast.error("Ops, parece que algo deu errado.")
      );
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome!"),
    email: yup
      .string()
      .required("Digite seu e-mail!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Digite uma senha forte!")
      .min(8, "Sua senha deve ter no mínimo 8 caracteres")
      .matches(
         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].\S{8,36}$/,
         "Sua senha deve conter no mínimo; 8 caracteres, 1 numero, 1 letra maiúscula e 1 minúscula, 1 caractere especial."
       ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não correspondem!"),
    bio: yup.string().required("Nos conte um pouco sobre você!"),
    contact: yup
      .string()
      .required("Nos informe seu melhor numero para contato."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <NavBar />
      <ContainerContent onSubmit={handleSubmit(onSubmit)}>
        <AnimatedTitle>Crie sua conta</AnimatedTitle>

        <AnimatedTitle color={"var(--grey-1)"} weigth={200} size={15}>
          Rápido e gratis, vamos nessa
        </AnimatedTitle>

        <NewInput
          label={"Nome"}
          placeholder={"Digite aqui seu nome"}
          register={register}
          name={"name"}
          errors={errors?.name}
        ></NewInput>

        <NewInput
          label={"E-mail"}
          placeholder={"Digite aqui seu email"}
          register={register}
          name={"email"}
          errors={errors?.email}
        ></NewInput>

        <NewInput
          type="password"
          label={"Senha"}
          placeholder={"Digite aqui sua senha"}
          register={register}
          name={"password"}
          errors={errors?.password}
        ></NewInput>

        <NewInput
          type="password"
          label={"Confirme a senha"}
          placeholder={"Confirme sua senha"}
          register={register}
          name={"confirmPasword"}
          errors={errors?.confirmPassword}
        ></NewInput>

        <NewInput
          label={"Bio"}
          placeholder={"Fale um pouco sobre você."}
          register={register}
          name={"bio"}
          errors={errors?.bio}
        ></NewInput>

        <NewInput
          label={"Contato"}
          placeholder={"Digite um numero para contato"}
          register={register}
          name={"contact"}
          errors={errors?.contact}
        ></NewInput>

        <StyledDiv>
          <StyledLabel>Selecionar módulo</StyledLabel>
          <StyledSelect {...register("course_module")}>
            <StyledOption value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </StyledOption>
            <StyledOption value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </StyledOption>
            <StyledOption value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </StyledOption>
            <StyledOption value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </StyledOption>
          </StyledSelect>
        </StyledDiv>

        <StyledDiv>
          <PrimaryButton type="submit" width={"90%"}>
            Cadastrar
          </PrimaryButton>
        </StyledDiv>
      </ContainerContent>
    </Container>
  );
}

export default RegisterUser;
