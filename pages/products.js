import React, { useState } from "react";
import Layout from "../components/Layout";


export default function ProductsPage() {
    const [products, setProducts] = useState(null);

    function listarTodos() {

    }

    function buscarPorId(id) {

    }

    function buscarPorNome(nome) {

    }

    function limpar() {
        
    }

    return (
        <Layout>
            <div className="products-page container">
                <div className="data-container">
                    {
                        products ?
                            <table>
                                <thead>
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Descrição</td>
                                        <td>Preço</td>
                                        <td>Categoria</td>
                                        <td>Editar</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.category}</td>
                                                    <td>{product.price}</td>
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
                                value="Buscar por nome"
                                onClick={() => buscarPorNome((prompt("Nome:")))}
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