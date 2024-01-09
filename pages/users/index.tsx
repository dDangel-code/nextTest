import { getAllUser, IUser } from "@/service/users";
import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useEffect, useState } from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await getAllUser();
    return {props: { res } }
}


const Users = ({ res }: {
    res: IUser[]
}) => {

    // const usersApi = async () => {
    //     const users = await getUser();
    //     if(users) {
    //         setUsers(users);
    //     } else {
    //         console.log('ошибка');
    //     }
    // }

    // const [users, setUsers] = useState<IUser[]>();


    // useEffect(() => {
    //    usersApi();
    // }, [])


    return (
        <>
            <Head>
                <title>Пользователи</title>
            </Head>
            <div className="m-36 flex gap-4 flex-col">
               {
                res.map((_, index) => (
                    <Link href={`/users/${_.id}`} key={index} className="hover:text-blue-500 cursor-pointer w-max">
                        {
                            `Имя: ${_.name}`
                        }
                    </Link>
                ))
               }
            </div>
        </>

    );
}

export default Users;