import axios from "axios";
import { ContainerList } from "../../pages/style/index.js";
import CardCliente from "../card-cliente/index.js";
import { useEffect, useState } from "react";

const Listclient = () => {
  const [cliente, setClientes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    async function GetList() {
      await axios
        .get("/cliente", config)
        .then((r) => {
          setClientes(r.data);
        })
        .catch((e) => {
        
        });
    }

    GetList();
  }, []);

  return (
    <>
      <ContainerList>
        {cliente.map((c) => (
          <>
            <CardCliente data={c} key={c.id} />
          </>
        ))}
      </ContainerList>
    </>
  );
};

export default Listclient;
