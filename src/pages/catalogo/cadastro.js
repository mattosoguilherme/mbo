import axios from "axios";
import { useEffect, useState } from "react";
import ContainerS, { ContainerCad, ContainerH, FormCad } from "../style";
import NavP from "../../components/navbar";
import { Link } from "react-router-dom";

const CadastroItem = () => {
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
  }, []);

 

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
          <ContainerCad>
            <h1>CADASTRO ITEM</h1>

            <script>$("#custo").maskMoney()</script>

            <FormCad>
              <input id="imagem" placeholder="imagem" />
              <input id="fornecedor" placeholder="fornecedor" />
              <input id="modelo" placeholder="modelo" />
              <input id="cor" placeholder="cor" />
              <input id="grade" placeholder="grade" />
              <input type="text"  id="custo" placeholder="custo" />
              <input id="venda" placeholder="venda" />

              <div>
                <Link to={"/catalogo"}>
                  <button> VOLTAR</button>
                </Link>
                <button> SALVAR</button>
              </div>
            </FormCad>
          </ContainerCad>
        </>
      )}
    </>
  );
};

export default CadastroItem;
