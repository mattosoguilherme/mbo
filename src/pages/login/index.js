import ContainerS, { FormS } from "../style";

const Login = () => {
  return (
    <>
      <ContainerS>
        <img
          alt="logo"
          width="200px"
          src="https://i.ibb.co/4F00w7n/MATTOSO.png"
        />

        <FormS>
          <input id="email" type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
        </FormS>

        <button> ENTRAR </button>
      </ContainerS>
    </>
  );
};

export default Login;
