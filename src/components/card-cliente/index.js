import { CardCli } from "../../pages/style";
import { Link } from "react-router-dom";

const CardCliente = (props) => {
  const cliente = props.data;

  return (
    <>
      <CardCli>
        {cliente.User.role == "ADMIN" ? (
          <>
            <h3> ADMIN </h3>
          </>
        ) : (
          <>
            <h3> {cliente.User.nome} </h3>
          </>
        )}

        <h4> {cliente.nome}</h4>
        <h4> {cliente.contato} </h4>

        <div>
          {/* interrogação é para se for verdade. os dois ponto é para se for mentira */}
          {cliente.id && (
            <>
              <Link to={`/cliente/${cliente.id}`}>
                <button type="button">EDITAR</button>
              </Link>
            </>
          )}
        </div>
      </CardCli>
    </>
  );
};

export default CardCliente;
