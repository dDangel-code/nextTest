import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


interface IGeo {
    lat: number,
    lang: number,
}

interface IAdress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo,
}

interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdress,
    phone: string,
    website: string,
    company: ICompany
}

export const getAllUser = async (): Promise<IUser[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}
export const getUser = async (id: string[] | string | number): Promise<IUser> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}