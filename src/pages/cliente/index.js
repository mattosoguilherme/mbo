import Listclient from "../../components/card-cliente/list";
import NavP from "../../components/navbar";
import ContainerS, { ButtonP } from "../style";

const Cliente = () => {
  return (
    <>
      <NavP />
      <ContainerS>
        <ButtonP> + cliente </ButtonP>
        <Listclient />
      </ContainerS>
    </>
  );
};

export default Cliente;
