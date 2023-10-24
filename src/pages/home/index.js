import ContainerS from "../style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ContainerS>
        <Link to={"/catalogo"}>
          <button> catalogo </button>
        </Link>

        <Link to={"/pedido"}>
          <button> pedido </button>
        </Link>

        <Link to={"/dashboard"}>
          <button> dashboard </button>
        </Link>

        <Link to={"/cliente"}>
          <button> cliente </button>
        </Link>
      </ContainerS>
    </>
  );
};

export default Home;
