import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Verificar se cliente já possui dados de login armazenado no navegador (localStorage)
    useEffect(() => {
        //setUser({ name: "Victor Almeida", username: "victorh74", password: "12#45" });

        setLoading(false);
        /*
        const recoveredUser = localStorage.getItem("user");
        //const recoveredtoken = localStorage.getItem("token");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
        */
    }, []);

    const login = (user) => {

        // validar user com api ----

        // Pegar usuário e token ----

        // Armazenar usuário e token em localStorage ----

        // Setar header com o token ----

        // Direcionar para home ----

        setUser(user);
        router.push("/");
    }

    const logout = () => {
        //localStorage.removeItem("user")
        //localStorage.removeItem("token")

        console.log("Logout")

        // Setar header para null ----

        setUser(null);
        router.push("login");
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}