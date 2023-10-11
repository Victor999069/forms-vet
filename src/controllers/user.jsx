import { db } from "../db";

export const getUser = (_, res) => {
    const conexao = "SELECT * FROM cadastro_usuario";

    db.query(conexao,(err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};