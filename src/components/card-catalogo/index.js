import { CardCat } from "../../pages/style";

const Cardcatalogo = (props) => {
  const item = props.data;
  console.log(item);
  return (
    <>
      <CardCat>
        <button>
          <img src="https://uploaddeimagens.com.br/images/004/671/383/thumb/pencil_013-removebg-preview.png?1700697931" />
        </button>

        <img src={item.img} alt="imagem tenis" />

        <div className="card-body">
          <h5> {item.modelo} </h5>
          <span> GRADE: {item.grade} </span>
          <span> PREÇO: R$ {item.venda} </span>
          <span> CUSTO: R$ {item.custo} </span>
        </div>
      </CardCat>
    </>
  );
};

export default Cardcatalogo;
