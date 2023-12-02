import { useNavigate } from "react-router-dom";
import Listclient from "../../components/card-cliente/list";
import NavP from "../../components/navbar";
import ContainerS, { ButtonP, FormModal, ModalS, ContainerH } from "../style";
import { useState, useEffect } from "react";
import axios from "axios";

const Cliente = () => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

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
          setUser(r.data);
        })
        .catch((e) => {
          setLogged(false);
        });
    }

    GetUser();
  }, [logged]);
  const HandleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const cliente = {
      nome: e.target.nome.value,
      contato: e.target.contato.value,
      userId: user.id,
    };

    axios
      .post("/cliente", cliente, config)
      .then((r) => {
        alert("Cliente Cadastrado");
        window.location.reload();
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
          <ContainerS>
            <ButtonP
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              + CLIENTE
            </ButtonP>

            <Listclient />

            <ModalS
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header cor-fundo">
                    <h1 className="titulo" id="exampleModalLabel">
                      Cadastro Cliente
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body cor-fundo ">
                    <FormModal method="POST" onSubmit={HandleSubmit}>
                      <input id="nome" name="nome" placeholder="Nome" />
                      <input
                        id="contato"
                        name="contato"
                        placeholder="Telefone"
                      />

                      <div>
                        <button type="button" data-bs-dismiss="modal">
                          Fechar
                        </button>
                        <button type="submit">Salvar</button>
                      </div>
                    </FormModal>
                  </div>
                </div>
              </div>
            </ModalS>
          </ContainerS>
        </>
      )}
    </>
  );
};

export default Cliente;
