import axios from "axios";
import ContainerS, { FormS } from "../style";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputLogin = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await axios
      .post("/auth", inputLogin)
      .then((r) => {
        const token = r.data.token;

        localStorage.setItem("token", token);
        if (token) {
          navigate("/home");
        }
      })
      .catch((e) => {
        console.log(e);
        alert(e.response.data.message);
      });
  };

  return (
    <>
      <ContainerS>
        <img
          alt="logo"
          width="250"
          src="https://i.ibb.co/4F00w7n/MATTOSO.png"
        />

        <FormS method="POST" onSubmit={HandleSubmit}>
          <input id="email" type="email" placeholder="email" required />
          <input id="password" type="password" placeholder="senha" required />

          <button type="submit"> ENTRAR </button>
        </FormS>
      </ContainerS>
    </>
  );
};

export default Login;
