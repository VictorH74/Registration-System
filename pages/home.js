import { useContext } from "react";
import Layout from "../components/Layout";
import { AuthContext } from "../contexts/auth";


export default function Home() {
  const { user , authenticated } = useContext(AuthContext);

  let intante = new Date();

  console.log(user);
  return (
    <>
      <Layout>
        <div className="home-page">
          <h1 className="welMsg"> Seja bem vindo, {user.name}! </h1>
          <p>Usuário logado: {String(authenticated)}</p>
          <h2 className="intant">{intante.getDate()}/{intante.getMonth() + 1}/{intante.getFullYear()}</h2>
        </div>
      </Layout>
    </>

  );
}