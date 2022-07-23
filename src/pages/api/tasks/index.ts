import { NextApiRequest, NextApiResponse } from 'next';
import {conn} from 'src/utils/datebase';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:NextApiRequest, res:NextApiResponse) => {

    const {method, body} = req;

    switch (method) {
        case "GET": {
            try {
                
                const query = 'SELECT * FROM WA_COLABORADOR';
                const response = await conn.query(query);
              
                res.status(200).json(response.rows);

            } catch (error) {
                console.log(error);
            }
        }

        case "POST":
            try {

                const {ID_COL, NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR} = body;
            
                const query = 
                'INSERT INTO WA_COLABORADOR(ID_COL, NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *';
                const values = [ID_COL, NOME, IDADE, SEXO, CPF, CID, UF, TELE_COL, EMAIL, SENHA, DEPA, GRUPO, STATUS, R_SOCIAL, DESCR];

                const response = await conn.query(query, values);
          
                res.status(200).json(response.row[0]);

            } catch (error) {
                console.log(error);
            }
    }
};