import { AnimatedTitle } from "../../Pages/Home/style";
import { SecondaryButton } from "../Buttons";
import { Card, ListDiv } from "./style";
import { FaRegTrashAlt } from 'react-icons/fa';

function Cards({
  techs,
  openEditModal,
  deleteTech,
  setFalse
}) {

  return (
    <ListDiv>
      {techs.length > 0 ? (
        techs.map((tech) => (
          <div className="card-father">
          <Card key={tech.id} onClick={()=> {
            openEditModal(tech);
          }}>
            <AnimatedTitle size={15}>{tech.title}</AnimatedTitle>
            <AnimatedTitle size={13} weigth={200}>
              {tech.status}
            </AnimatedTitle>
          </Card>
            <SecondaryButton
              onClick={(e) => {
              deleteTech(e, tech.id);
              }}
            >
              <FaRegTrashAlt/>
            </SecondaryButton>
          </div>
        ))
      ) : (
          <div className="card-father">
          <Card>
            <AnimatedTitle size={15}>Nada aqui por enquanto. Que tal adicionar uma tecnologia clicando no '{'+'}' acima.</AnimatedTitle>
          </Card>
          </div>
      )}
        
    </ListDiv>
  );
}

export default Cards;
