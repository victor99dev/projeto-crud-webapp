import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {

    const {method} = req;

    switch (method) {
        case "GET":
            res.json("getting a unique tasks");
        break;

        case "PUT":
            res.json("updating a unique tasks");
        break;

        case "DELETE":
            res.json("Deleting a unique task");

        break;

        default:
            res.status(400).json("Method not allowed");
    }
}