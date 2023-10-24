import styled from "styled-components";

const ContainerS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  height: 100vh;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
    height: 80vh;
  }

  img {
    background-color: white;
    border-radius: 50px;
  }
`;

export const FormS = styled.form`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
padding:1rem;
justify-content: space-around;

#email{
    margin-bottom:1rem
}
input{
    width:15rem;
    height:2rem;
    border:none;
    padding: 0 0 0 5px;
    border-radius: 20px 0 20px 0;
}

`;

export default ContainerS;
