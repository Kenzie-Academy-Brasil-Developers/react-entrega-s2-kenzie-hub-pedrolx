import { Container } from "../RegisterUser/style";
import NavBar from "../../Components/NavBar/index";
import { DashHeader, DashMain, CardsDiv } from "./style";
import { AnimatedTitle } from "../Home/style";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from 'react-icons/bs'
import Cards from "../../Components/Cards";
import { useState } from "react";
import api from "../../Services/data";
import AddModalComponent from "../../Components/AddModal";
import EditModalComponent from "../../Components/EditModal";
import { SecondaryButton } from "../../Components/Buttons";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function Dashboard({ setAuth, user }) {
  const [addTech, setAddTech] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [token] = useState(localStorage.getItem("@KenzieHb:token") || "");
  const [techs, setTechs] = useState(user.user.techs || []);
  const [techToEdit, setTechToEdit] = useState();
  const [status, setStatus] = useState();

  const setFalse = () => {
    setAddTech(!addTech);
  };

  const openEditModal = (tech) => {
    setOpenEdit(!openEdit);
    setTechToEdit(tech);
  };

  const editTechOnApi = (e) => {
    e.preventDefault();
    const newStatus = {
      status: status,
    };
    api
      .put(`/users/techs/${techToEdit.id}`, newStatus, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      })
      .then((res) => {
        loadTechs();
        openEditModal();
      })
      .catch((err) => console.log(err));
  };

  const deleteTech = (e, id) => {
    e.preventDefault();
    console.log(id);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      })
      .then((res) => {
        toast('Tech Deletada!', {
          icon: <BsFillTrashFill style={{color: 'var(--feedback-negative)'}}/>,
        });
        loadTechs();
      })
      .catch((err) => console.log(err));
  };

  const loadTechs = () => {
    api
      .get(`/users/${user.user.id}`)
      .then((res) => setTechs(res.data.techs))
      .catch((err) => console.log(err));
  };

  const addTechToList = (data) => {
    const newTech = {
      title: data.title,
      status: data.status,
    };

    api
      .post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tech Adicionada");
        loadTechs();
        setAddTech(false);
      })
      .catch((err) => console.log(err));
  };

  // const formSchema = yup.object().shape({
  //   title: yup.string().required("Digite o nome da tecnologia!"),
  // });

  // const { register, handleSubmit } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    >
      <Container>
        <NavBar message="Sair" />

        <DashHeader>
          <AnimatedTitle size={23}>Olá, {user.user.name}</AnimatedTitle>
          <AnimatedTitle size={14} weigth={300}>
            {user.user.course_module}
          </AnimatedTitle>
        </DashHeader>

        <DashMain>
          <div className="div-dash-header">
            <div className="div-list-tech">
              <AnimatedTitle size={18}>Tecnologias</AnimatedTitle>
              <SecondaryButton width={50} height={27} onClick={setFalse}>
                <AnimatedTitle>
                  <AiOutlinePlus />
                </AnimatedTitle>
              </SecondaryButton>
            </div>

            {addTech === true ? (<AddModalComponent loadTechs={loadTechs} setFalse={setFalse} addTechToList={addTechToList}></AddModalComponent>) : (<></>)}

            {openEdit === true ? (<EditModalComponent openEditModal={openEditModal} techToEdit={techToEdit} setStatus={setStatus} editTechOnApi={editTechOnApi} status={status}></EditModalComponent>) : (<></>)}
          </div>
          <CardsDiv>
            <Cards
              techs={techs}
              token={token}
              openEditModal={openEditModal}
              deleteTech={deleteTech}
              setFalse={setFalse}
            />
          </CardsDiv>
        </DashMain>
      </Container>
    </motion.div>
  );
}

export default Dashboard;
