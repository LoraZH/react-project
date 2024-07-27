
import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/users';

export const login = async (email, psw) => {
    const result = await request.post(`${baseUrl}/login`,{
        email,
        psw
    });

    return result;
};

export const register = (email, psw) =>  
      request.post(`${baseUrl}/register`,{
        email,
        psw
    });