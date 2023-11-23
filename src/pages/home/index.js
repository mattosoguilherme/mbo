import { useState } from "react";
import { ContainerH } from "../style";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    async function GetUser() {
      await axios
        .get("/auth", config)
        .then((r) => {
          setLoading(true);
          setLogged(true);
          console.log("verdade");
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }

    GetUser();
  }, []);

  return (
    <>
      {!loading && (
        <>
          <ContainerH>
            <img alt="gif" src="https://s5.gifyu.com/images/SRWs7.gif" />
          </ContainerH>
        </>
      )}

      {logged && (
        <>
          <ContainerH>
            <Link to={"/catalogo"}>
              <button> CATALOGO </button>
            </Link>

            <Link to={"/pedido"}>
              <button> PEDIDO </button>
            </Link>

            <Link to={"/dashboard"}>
              <button> DASHBOARD </button>
            </Link>

            <Link to={"/cliente"}>
              <button> CLIENTE </button>
            </Link>
          </ContainerH>
        </>
      )}
    </>
  );
};

export default Home;
