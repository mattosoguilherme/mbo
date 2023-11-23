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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #edecd1;

  @media (max-width: 420px) {
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
  }

  img {
    background-color: white;
    border-radius: 50px;
  }

  .card {
    width: 12rem;
  }
`;

export const ContainerList = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
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
  width: 18rem;
  background-color: #2f4699;
  padding: 1rem;
  border-radius: 1rem;

  input {
    margin-bottom: 0.5rem;
    height: 1.8rem;
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
  }
  button:hover {
    background-color: transparent;
    cursor: pointer;
    color: black;
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
  width: 10rem;
  padding: 1rem;
  background-color: #2f4699;
  color: white;
  margin-bottom: 0.5rem;
  border-radius: 10px;

  img {
    width: 100%;
  }

  h5 {
    align-self: center;
    text-align: center;
    color: #2f4699;
    background-color: #edecd1;
    border-radius: 5px;
    padding: 5px;
    font-size: 0.8rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }

  button {
    background: transparent;
    border: none;
    position: absolute;
    margin-left: 7rem;
    width: 1.5rem;
  }
`;

export const CardCli = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  width: 15em;
  padding: 1rem;
  border-radius: 10px;

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
`;

export default ContainerS;
