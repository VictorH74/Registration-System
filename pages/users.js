import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { getUsers } from "./../services/usersRepository";
import LoadinSVG from "./../public/loading.svg";

export default function UsersPage() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    function listarTodos() {
        setLoading(true);
        setTimeout(() => {
            getUsers().then(res => {
                setUsers(res.data);
                setLoading(false);
            })
        }, 1000);
    }

    function buscarPorId(id) {
        getUsers().then(res => {
            setUsers(() => {
                return res.data.filter((user) => {
                    return user.id === id;
                });
            });
        });
    }

    function buscarPorNome(nome) {
        getUsers().then(res => {
            setUsers(() => {
                return res.data.filter((user) => {
                    return user.name.toLowerCase().includes(nome.toLowerCase());
                });
            });
        });
    }

    function limpar() {
        setUsers(null);
    }

    return (
        <Layout>
            <div className="users-page container">
                <div className="data-container">
                    {
                        loading ?
                            <h1><Image src={LoadinSVG} width="50px" alt="asas"/></h1>
                        :
                            users ?
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>Id</td>
                                                <td>Nome</td>
                                                <td>Email</td>
                                                <td>Nome de usuário</td>
                                                <td>Senha</td>
                                                <td>Editar</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(user => (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.password}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                :
                                <h1>Nenhum conteúdo selecionado... </h1>
                    }

                </div>
                <div className="entity-menu">
                    <ul>
                        <li>
                            <input type="button" value="Listar todos" onClick={listarTodos} />
                        </li>
                        <li>
                            <input
                                type="button"
                                value="Buscar por Id"
                                onClick={() => buscarPorId(parseInt(prompt("Id:")))}
                            />
                        </li>
                        <li>
                            <input
                                type="button"
                                value="Buscar por Nome"
                                onClick={() => buscarPorNome(prompt("Nome:"))}
                            />
                        </li>
                        <li>
                            <input type="button" value="Cadastrar" />
                        </li>
                        <li>
                            <input type="button" value="Imprimir" />
                        </li>
                        <li>
                            <input type="button" value="Limpar" onClick={limpar} />
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}