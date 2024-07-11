import * as request from "../lib/request"
const baseUrl = 'http://localhost:3030/jsonstore/art'


export const getAll = async () => {
    const result = await request.get( baseUrl );

    return Object.values(result);
};

export const getOne = async (artId) => {
    const result = await request.get(`${baseUrl}/${artId}`);

    return result;
};

export const sell = async (artData) => {
    const result = await request.post(baseUrl, artData);;
    return result;
};