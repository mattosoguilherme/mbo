import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCad, ContainerH, FormCad, H1S } from "../style";
import NavP from "../../components/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditCatalogo = () => {
  const [logged, setLogged] = useState(false);
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLogged(false);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    async function GetItem() {
      await axios
        .get(`/catalogo/${id}`, config)
        .then((r) => {
          setItem(r.data);
          console.log(r.data);
        })
        .catch((e) => console.error(e));
    }
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

    GetItem();
    GetUser();
  }, [logged]);

  const HandleEdit = (e) => {
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
      .patch(`/catalogo/${id}`, item, config)
      .then((r) => {
        console.log(r);
        alert("Item atualizado");
        navigate("/catalogo");
      })
      .catch((e) => console.error(e));
  };

  const HandleDelete = () => {
    const token = localStorage.token;
    console.log("delete");
    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete(`/catalogo/${id}`, config)
      .then((r) => {
        alert("Item apagado");
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

      {item && (
        <>
          <NavP />
          <ContainerCad>
            <H1S>CADASTRO ITEM</H1S>

            <FormCad onSubmit={HandleEdit}>
              <img src={item.img} alt="foto tenis" />
              <input
                name="img"
                id="img"
                placeholder="imagem"
                defaultValue={item.img}
                required
              />
              <input
                name="fornecedor"
                id="fornecedor"
                placeholder="fornecedor"
                defaultValue={item.fornecedor}
                required
              />
              <input
                name="modelo"
                id="modelo"
                placeholder="modelo"
                defaultValue={item.modelo}
                required
              />
              <input
                name="cor"
                id="cor"
                placeholder="cor"
                defaultValue={item.cor}
                required
              />
              <input
                name="grade"
                id="grade"
                placeholder="grade"
                defaultValue={item.grade}
                required
              />
              <input
                name="custo"
                id="custo"
                placeholder="custo"
                defaultValue={item.custo}
                required
              />
              <input
                name="venda"
                id="venda"
                placeholder="venda"
                defaultValue={item.venda}
                required
              />

              <div>
                <Link to={"/catalogo"}>
                  <button> VOLTAR</button>
                </Link>
                <button> SALVAR</button>
              </div>
            </FormCad>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ContainerCad>
        </>
      )}
    </>
  );
};

export default EditCatalogo;
