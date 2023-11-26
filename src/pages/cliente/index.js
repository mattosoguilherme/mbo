import { Link } from "react-router-dom";
import Listclient from "../../components/card-cliente/list";
import NavP from "../../components/navbar";
import ContainerS, { ButtonP, FormModal, ModalS } from "../style";

const Cliente = () => {
  return (
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
                <FormModal>
                  <input placeholder="Nome" />
                  <input placeholder="Telefone" />

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
  );
};

export default Cliente;
