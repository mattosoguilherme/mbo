import ContainerS, { FormS } from "../style";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <ContainerS>
        <img
          alt="logo"
          width="250"
          src="https://i.ibb.co/4F00w7n/MATTOSO.png"
        />

        <FormS>
          <input id="email" type="email" placeholder="email" />
          <input type="password" placeholder="senha" />

          <Link to={"/home"}>
            <button> ENTRAR </button>
          </Link>
        </FormS>
      </ContainerS>
    </>
  );
};

export default Login;
