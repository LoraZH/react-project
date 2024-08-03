import * as request from "../lib/request"
const baseUrl = 'http://localhost:3030/jsonstore/comments'


export const getAll = async (artId) => {
 const query = new URLSearchParams({
    where: `artId="${artId}"`
 });
 const result = await request.get(`${baseUrl}`);

 return Object.values(result).filter(comment => comment.artId === artId); 
};

export const create = async (artId, username, text) => {
    const newComment = await request.post(baseUrl, {
        artId,
        username,
        text
    });
    return newComment;
};
