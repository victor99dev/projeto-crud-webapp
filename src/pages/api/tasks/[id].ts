import { constants } from 'buffer';
import { NextApiRequest, NextApiResponse } from 'next';
import {conn} from '../../../utils/datebase';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, query, body} = req;

    console.log(req.query)

    switch (method) {
        case "GET":
           try {

            const text ='SELECT * FROM WA_COLABORADOR WHERE ID_COL = $1';
            const values = [query.id];
            const result = await conn.query(text, values);

            if (result.rows.length === 0)
                return res.status(404).json({message: "Task not found"});

            return res.json(result.rows[0]);
            
           } catch (error: any) {
            return res.status(500).json({message: error.message});
            }      

        case "PUT":
            try {

                const {NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR} = body;
                const text = 'UPDATE WA_COLABORADOR SET NOME = $1, IDADE = $2, SEXO = $3, CPF = $4, CID = $5, UF = $6, TELE_COL = $7, EMAIL = $8, SENHA = $9, DEPA = $10, GRUPO = $11, STATUS = $12, R_SOCIAL = $13, DESCR = $14 WHERE ID_COL = $15 RETURNING *';
                const values = [NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR, query.id];
                const result = await conn.query(text, values);
    
                if (result.rows.length === 0)
                    return res.status(404).json({message: "Task not found"});
    
                return res.json(result.rows[0]);
                
                } catch (error: any) {
                return res.status(500).json({message: error.message});
                }

        case "DELETE":
            try {

                const text ='DELETE FROM WA_COLABORADOR WHERE ID_COL = $1 RETURNING *';
                const values = [query.id];
                const result = await conn.query(text, values);

                console.log(result);
    
                if (result.rowsCount === 0)
                    return res.status(404).json({ message: "Task not found" });

                return res.json(result.rows[0]);
               
                } catch (error: any) {
                return res.status(500).json({message: error.message});
                }     

        default:
            res.status(400).json("Method not allowed");
    }
}