// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
    { name: "Victor Almeida", username: "vyctorh75", password: "sa12t3h45" },
    { name: "Nicolas Tesla", username: "mr.nickT", password: "243a2sdf5" },
    { name: "Gabrielly Silva", username: "gabbys88", password: "53ds453hhgh" },
    { name: "Tahanny Jahrar", username: "TJah12", password: "23dsdd325h" },
  ]);

}
