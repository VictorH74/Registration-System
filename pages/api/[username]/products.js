export default function handler(req, res) {
    try {
        const { method, query } = req;

        /* 
        SELECT User.Products* FROM Users
        WHERE User == query
        */

        switch (method) {
            case "GET":
                res.status(201).json([
                    { name: "Computador", price: 2500, ...query },
                    { name: "Monitor", price: 300, ...query },
                    { name: "Fones de ouvido", price: 80, ...query },
                ]);
        break;
            case "POST":
        break;
            case "PUT":
        break;
            case "DELETE":
        break;
            default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
    } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
}
};