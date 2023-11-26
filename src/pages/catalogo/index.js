import axios from "axios";
import ListCard from "../../components/card-catalogo/list.js";
import NavP from "../../components/navbar";
import ContainerS, { ButtonP, ContainerH } from "../style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catalogo = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetUser() {
      await axios
        .get("/auth", config)
        .then((r) => {
          setLogged(true);
        })
        .catch((e) => {
          setLogged(false);
        });
    }

    GetUser();
  }, [logged]);

  return (
    <>
      {!logged && (
        <>
          <ContainerH>
            <img alt="gif" src="https://s5.gifyu.com/images/SRWs7.gif" />
          </ContainerH>
        </>
      )}

      {logged && (
        <>
          <NavP />
          <ContainerS>
            <Link to={"/catalogo/cadastro"}>
              <ButtonP> + item</ButtonP>
            </Link>
            <ListCard />
          </ContainerS>
        </>
      )}
    </>
  );
};

export default Catalogo;
