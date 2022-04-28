import { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import Private from "../components/Private";
import { AuthContext } from "../contexts/auth";

export default function Home() {
    const { authenticated, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    let intante = new Date();

    useEffect(() => {
        if (user) {
            setLoading(false)
        }
    }, [user]);

    return (
        <>
            {
                loading ?
                    <Private>
                        <div className="loading">Loading</div>
                    </Private>
                    :
                    <Layout>
                        <div className="home-page">
                            {user ? <h1>Seja bem-vindo, {user.username}!</h1> : ""}
                            <p>Usuário logado: {String(authenticated)}</p>
                            <h2 className="intant">{intante.getDate()}/{intante.getMonth() + 1}/{intante.getFullYear()}</h2>
                        </div>
                    </Layout>
            }

        </>

    );
}