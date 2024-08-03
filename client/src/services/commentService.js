import * as request from "../lib/request"
const baseUrl = 'http://localhost:3030/data/comments'


export const getAll = async (artId) => {
 const query = new URLSearchParams({
    where: `artId="${artId}"`,
    load:`owner=_ownerId:users`
 });
 const result = await request.get(`${baseUrl}?${query}`);

 return result; 
};

export const create = async (artId, text) => {
    const newComment = await request.post(baseUrl, {
        artId,
        text
    });
    return newComment;
};
