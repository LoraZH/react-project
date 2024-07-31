import * as request from "../lib/request"
const baseUrl = 'http://localhost:3030/data/art'


export const getAll = async () => {
    const result = await request.get( baseUrl );

    return result;
};

export const getOne = async (artId) => {
    const result = await request.get(`${baseUrl}/${artId}`);
    return result;
};

export const sell = async (artData) => {
    const result = await request.post(baseUrl, artData);;
    return result;
};

export const edit = async (artId, artData) => {
    const result = await request.put(`${baseUrl}/${artId}`, artData);;
    return result;
};
export const remove = async (artId) => {
    const result = await request.remove(`${baseUrl}/${artId}`);;
    return result;
};
