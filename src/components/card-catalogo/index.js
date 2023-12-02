import { Link, useNavigate } from "react-router-dom";
import { CardCat, ModalS } from "../../pages/style";
import axios from "axios";

const Cardcatalogo = (props) => {
  const item = props.data;
  const navigate = useNavigate();

  const HandleDelete = () => {
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete(`/catalogo/${item.id}`, config)
      .then((r) => {
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <CardCat>
        <nav>
          <button
            type="button"
            className="excluir"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-trash"></i>
          </button>

          <Link to={`/catalogo/${item.id}`}>
            <button>
              <i className="bi bi-pencil-fill"></i>
            </button>
          </Link>
        </nav>

        <img src={item.img} alt="imagem tenis" />

        <div className="card-body">
          <h5> {item.modelo} </h5>
          <span> GRADE: {item.grade} </span>
          <span> PREÇO: R$ {item.venda} </span>
          <span> CUSTO: R$ {item.custo} </span>
        </div>
      </CardCat>

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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="cor-fundo modal-body"> Deseja excluir item?</div>
            <div className="modal-footer cor-fundo">
              <button type="button" data-bs-dismiss="modal">
                FECHAR
              </button>
              <button onClick={HandleDelete} type="button">
                EXCLUIR
              </button>
            </div>
          </div>
        </div>
      </ModalS>
    </>
  );
};

export default Cardcatalogo;
