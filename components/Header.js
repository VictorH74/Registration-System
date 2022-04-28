import React from "react";
import Link from 'next/link'
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";


export default function NavBar() {
    const { logout } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <ul className="menu">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/users">Usuários</Link></li>
                    <li><Link href="/products">Produtos</Link></li>
                    <li><Link href="/categories">Categorias</Link></li>
                    <li><a onClick={logout}>Sair</a></li>
                </ul>
            </nav>
        </header>
    );
}