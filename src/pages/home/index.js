import { ContainerH } from "../style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ContainerH>
        <Link to={"/catalogo"}>
          <button> CATALOGO </button>
        </Link>

        <Link to={"/pedido"}>
          <button> PEDIDO </button>
        </Link>

        <Link to={"/dashboard"}>
          <button> DASHBOARD </button>
        </Link>

        <Link to={"/cliente"}>
          <button> CLIENTE </button>
        </Link>
      </ContainerH>
    </>
  );
};

export default Home;
