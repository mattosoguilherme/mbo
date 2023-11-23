import { useEffect, useState } from "react";
import Cardcatalogo from ".";
import { ContainerH, ContainerList } from "../../pages/style";
import axios from "axios";

const ListCard = () => {
  const token = localStorage.getItem("token");
  const [logged, setLogged] = useState(false);
  const [catalogo, setCatologo] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    async function GetList() {
      axios
        .get("/catalogo", config)
        .then((r) => {
          setLogged(true);
          setCatologo(r.data);
        })
        .catch((e) => {});
    }
    GetList();
  }, []);

  return (
    <>
      {!logged && (
        <ContainerH>
          <img alt="gif" src="https://s5.gifyu.com/images/SRWs7.gif" />
        </ContainerH>
      )}
      {logged && (
        <ContainerList>
         {catalogo.map((item) => ( 
          <Cardcatalogo data={item} key={item.id} />
         ))}
        </ContainerList>
      )}
    </>
  );
};

export default ListCard;
