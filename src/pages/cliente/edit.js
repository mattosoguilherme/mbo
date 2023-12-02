import { useState } from "react";
import { ContainerCad, ContainerH, FormCad, H1S, ModalS } from "../style";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const EditClient = () => {
  const { id } = useParams("id");
  const token = localStorage.getItem("token");
  const [logged, setLogged] = useState(false);
  const [cliente, setCliente] = useState();
  const [user, setUsers] = useState();
  const [admin, setAdmin] = useState();
  const [vendedor, setVendedor] = useState();
  const navigate = useNavigate();

  useEffect(() => {
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
          setAdmin(r.data);
        })
        .catch((e) => {
          setLogged(false);
        });
    }

    async function GetUsers() {
      await axios
        .get("/user", config)
        .then((r) => {
          setUsers(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    async function GetClient() {
      await axios
        .get(`/cliente/${id}`, config)
        .then((r) => {
          setCliente(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    GetUser();
    GetClient();
    GetUsers();
  }, [logged]);

  const HandleDelete = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .delete(`/cliente/${id}`, config)
      .then((r) => {
        alert(" Cadastrado Cliente Deletado");
        navigate("/cliente");
      })
      .catch((e) => console.error(e));
  };

  const HandleEdit = async (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const cliente = {
      nome: e.target.nome.value,
      contato: e.target.contato.value,
      userId: vendedor,
    };

    console.log(cliente);

    axios
      .patch(`/cliente/${id}`, cliente, config)
      .then((r) => {
        console.log(r);
        alert("Cadastro atualizado");
        navigate("/cliente");
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
          <ContainerCad>
            <H1S>Atualizando Cadastrado</H1S>
            <FormCad onSubmit={HandleEdit}>
              {cliente && (
                <>
                  <input id="nome" defaultValue={cliente.nome} />
                  <input id="contato" defaultValue={cliente.contato} />
                  {admin.role == "ADMIN" && (
                    <>
                      <select
                        onChange={(e) => setVendedor(e.target.value)}
                        name="vendedor"
                        id="vendedor"
                      >
                        <option disabled selected>
                          {cliente.User.nome}
                        </option>
                        {user && (
                          <>
                            {" "}
                            {user.map((u) => (
                              <>
                                <option value={u.id}>{u.nome}</option>
                              </>
                            ))}
                          </>
                        )}
                      </select>
                    </>
                  )}{" "}
                </>
              )}

              <div>
                <Link to={"/cliente"}>
                  <button> Voltar</button>
                </Link>
                <button> Salvar</button>
              </div>
            </FormCad>
            <button
              type="button"
              className="excluir"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalDelete"
            >
              EXCLUIR
            </button>

            <ModalS
              className="modal fade"
              id="exampleModalDelete"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header cor-fundo">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="cor-fundo modal-body">
                    {" "}
                    Deseja excluir item?
                  </div>
                  <div className="modal-footer cor-fundo">
                    <button type="button" data-bs-dismiss="modal">
                      FECHAR
                    </button>
                    <button onClick={HandleDelete} data-bs-dismiss="modal" type="button">
                      EXCLUIR
                    </button>
                  </div>
                </div>
              </div>
            </ModalS>
          </ContainerCad>
        </>
      )}
    </>
  );
};

export default EditClient;
