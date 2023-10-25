import NavP from "../../components/navbar";
import ContainerS, { TableS } from "../style";
const Pedido = () => {
  return (
    <>
      <NavP/>
      <ContainerS>
        <TableS className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">cliente</th>
              <th scope="col">modelo</th>
              <th scope="col">cor</th>
              <th scope="col">n°</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sarah</td>
              <td>Dunk Nike</td>
              <td>creme e preto</td>
              <td>42</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Sarah</td>
              <td>Dunk Nike</td>
              <td>creme e preto</td>
              <td>42</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Sarah</td>
              <td>Dunk Nike</td>
              <td>creme e preto</td>
              <td>42</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Sarah</td>
              <td>Dunk Nike</td>
              <td>creme e preto</td>
              <td>42</td>
            </tr>
          </tbody>
        </TableS>
      </ContainerS>
    </>
  );
};

export default Pedido;
