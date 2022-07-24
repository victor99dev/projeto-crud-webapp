import { NextApiRequest, NextApiResponse } from "next";
import {conn} from "src/utils/datebase";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:NextApiRequest, res:NextApiResponse) => {

    const {method, body} = req;

    switch (method) {
        case "GET": {
            try {

                const query = 'SELECT * FROM WA_COLABORADOR';
                const response = await conn.query(query);

                return res.json(response.rows);

            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }
        }

        case "POST":
            try {

                const {NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR} = body;
            
                const query = 
                'INSERT INTO WA_COLABORADOR(NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *';
                const values = [NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR];

                const response = await conn.query(query, values);

                return res.json(response.rows[0]);
            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}