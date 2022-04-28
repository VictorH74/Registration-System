import React, { useState } from "react";
import Layout from "../components/Layout";

export default function CategoriesPage() {
    const [categories, setcategories] = useState(null);

    function listarTodos(){

        // MOK
        setcategories([
            {
                id: 23,
                name: "eletronic"
            },
            {
                id: 11,
                name: "music"
            }
        ]);

    };

    function limpar(){};


    return (
        <Layout>
            <div className="categories-page container">
                <div className="data-container">
                    {
                        categories ?
                            <table>
                                <thead>
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Editar</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map(cat => (
                                            <tr key={cat.id}>
                                                <td>{cat.id}</td>
                                                <td>{cat.name}</td>
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
                                value="Buscar por nome"
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