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
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
    height: 100%;
  }

  img {
    background-color: white;
    border-radius: 50px;
  }

  .card {
    width: 12rem;
  }
`;

export const ContainerCad = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  height: 100vh;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
    background-color: #2f4699;
    height: 100vh;
    height: 110vh;
  }

  img {
    background-color: white;
    border-radius: 50px;
  }

  .card {
    width: 12rem;
  }
`;

export const H1S = styled.h1`
  background-color: #2f4699;
  color: #edecd1;
  padding: 0.5rem;
  border-radius: 10px;
  margin-top: 1rem;

  @media (max-width: 420px) {
    background-color: white;
    color: #2f4699;
    padding: 0.5rem;
    border-radius: 10px;
  }
`;

export const ContainerList = styled.main`
  width: 100%;
  height: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 420px) {
  }
`;

export const ContainerH = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  height: 100vh;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  button {
    width: 10rem;
    height: 4rem;
    background-color: #2f4699;
    border-radius: 5px;
    align-items: center;
    color: #edecd1;
    border-color: #edecd1;
  }

  button:hover {
    background: transparent;
    color: black;
  }

  img {
    width: 10rem;
  }
`;

export const ButtonP = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: #2f4699;
  border-radius: 5px;
  align-items: center;
  color: #edecd1;
  border-color: #edecd1;
  margin-bottom: 3rem;
  margin-top: 5rem;

  &:hover {
    background: transparent;
    color: black;
  }
`;

export const FormS = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  justify-content: space-around;

  #email {
    margin-bottom: 1rem;
  }
  input {
    width: 15rem;
    height: 2rem;
    border: none;
    padding: 0 0 0 5px;
    border-radius: 10px;
  }

  button {
    margin-top: 1rem;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    background-color: #2f4699;
    border-radius: 10px;
    color: white;
  }

  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
  }
`;

export const FormCad = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  background-color: #2f4699;
  padding: 0.5rem;
  border-radius: 1rem;

  @media (max-width: 420px) {
    width: 100%;
  }

  input {
    margin-bottom: 0.5rem;
    height: 2.5rem;
    border-radius: 10px;
    padding-left: 0.2rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  button {
    margin-top: 1rem;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    background-color: #2f4699;
    border-radius: 10px;
    color: white;
    width: 8rem;
  }
  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
  }

  img {
    width: 8rem;
    align-self: center;
    margin: 10px 0 10px 0;
  }

  .excluir:hover {
    color: red !important;
  }
`;

export const TableS = styled.table`
  width: 100%;

  thead th {
    background-color: #2f4699;
    border: none;
    color: white;
  }
  thead tr {
    background-color: #756dd4;
    borde-color: #756dd4;
  }
`;

export const ContainerP = styled.main`
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
  justify-content: flex-start;
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
  }

  img {
    background-color: white;
    border-radius: 50px;
  }
`;
export const NavS = styled.nav`
  a {
    text-decoration: none;
    color: #2f4699;
    font-size: 2rem;

    @media (max-width: 420px) {
      color: #blue;
    }
  }

  button {
    border-width: 2px;
  }

  .offcanvas-header,
  .offcanvas-body {
    background-color: #edecd1;
    color: #374370;
  }

  .offcanvas-body a {
    color: #374370;
    text-decoration: none;
  }
`;

export const CardCat = styled.div`
  width: 15rem;
  padding: 0.5rem;
  background-color: #2f4699;
  color: white;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    width: 11.5rem;
  }

  img {
    width: 90%;
  }

  h5 {
    align-self: center;
    text-align: center;
    color: #2f4699;
    background-color: #edecd1;
    border-radius: 5px;
    padding: 5px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0;
  }

  button {
    background: transparent;
    border: none;
    margin-left: 0;
    color: white;
    font-size: 1.2rem;
  }

  button:hover {
    color: yellow;
  }

  .excluir {
    background: transparent;
    border: none;
    margin-left: 0;
    color: white;
    padding: 0;
    font-size: 1.2rem;
  }

  .excluir:hover {
    color: red !important;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const CardCli = styled.div`
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  width: 15em;
  padding: 1rem;
  border-radius: 10px;
  background-color: #2f4699;
  color: #edecd1;

  button {
    margin-top: 1rem;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    background-color: #2f4699;
    border-radius: 10px;
    color: white;
  }

  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  h3 {
    color: #2f4699;
    background-color: #edecd1;
    text-align: center;
    border-radius: 10px;
  }
`;

export const ModalS = styled.div`
  .cor-fundo {
    border: none;
    background-color: #2f4699;
  }

  .modal-body {
    font-size: 2rem;
    text-align: center;
    color: #edecd1;
  }

  .modal-footer {
    display: flex;
    justify-content: space-around;
  }

  .modal-footer button {
    margin-top: 1rem;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    background-color: #2f4699;
    border-radius: 10px;
    color: white;
    width: 8rem;
  }
  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
  }

  .titulo {
    font-size: 2rem;
    color: #edecd1;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border: none;

  @media (max-width: 420px) {
  }

  input {
    margin-bottom: 0.5rem;
    height: 2.5rem;
    border-radius: 10px;
    padding-left: 0.2rem;
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  button {
    margin-top: 1rem;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    background-color: #2f4699;
    border-radius: 10px;
    color: white;
    width: 8rem;
    font-size: 1.5rem;
  }
  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
  }

  img {
    width: 8rem;
    align-self: center;
    margin: 10px 0 10px 0;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export default ContainerS;
