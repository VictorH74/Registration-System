import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const getUsers = () => {
    return api.get("/users");
}

// insert(){}

// update(){}

// fecthAll(){}

// getUserById(){}

// getUserByName(){}

// delete(){}
