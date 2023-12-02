import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCad, ContainerH, FormCad, H1S } from "../style";
import NavP from "../../components/navbar";
import { Link, useNavigate } from "react-router-dom";

const CadastroItem = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogged(false);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
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

  const HandleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setLogged(false);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const item = {
      fornecedor: e.target.fornecedor.value,
      img: e.target.img.value,
      modelo: e.target.modelo.value,
      cor: e.target.cor.value,
      grade: e.target.grade.value,
      custo: Number(e.target.custo.value),
      venda: Number(e.target.venda.value),
    };
    axios
      .post("/catalogo", item, config)
      .then((r) => {

        navigate("/catalogo");
      })
      .catch((e) => console.error(e));
  };

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
            <H1S>CADASTRO ITEM</H1S>

            <FormCad method="POST" onSubmit={HandleSubmit}>
              <input name="img" id="img" placeholder="imagem" />
              <input
                name="fornecedor"
                id="fornecedor"
                placeholder="fornecedor"
              />
              <input name="modelo" id="modelo" placeholder="modelo" />
              <input name="cor" id="cor" placeholder="cor" />
              <input name="grade" id="grade" placeholder="grade" />
              <input name="custo" id="custo" placeholder="custo" />
              <input name="venda" id="venda" placeholder="venda" />

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
