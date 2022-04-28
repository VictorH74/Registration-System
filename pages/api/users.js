export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(201).json([
            { id: 1, name: "Victor Almeida", email: "victorh.almeida7@gmail.com", username: "vyctorh75", password: "sa12t3h45" },
            { id: 2,name: "Nicolas Tesla", email: "mr.tesla@yahoo.com", username: "mr.nickT", password: "243a2sdf5" },
            { id: 3,name: "Gabrielly Silva", email: "gabbyzinha7@outlok.com", username: "gabbys88", password: "53ds453hhgh" },
            { id: 4,name: "Tahanny Jahrar", email: "tahanny@hotmail.com", username: "TJah12", password: "23dsdd325h" },
            { id: 5,name: "João Victor", email: "victor@gmail.com", username: "vik367", password: "23dsdd325h" },
        ]);
    }
}