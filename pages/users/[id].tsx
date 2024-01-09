import Head from "next/head";
import { getUser, getAllUser, IUser } from "@/service/users";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useRouter } from "next/router";

// const {pathname} = useRouter();
// console.log(pathname);
export const getServerSideProps = (async (context) => {
    console.log(context.query);
    const { id } = context.query;
    const res = id && await getUser(id);
    return {props: { res } }

})satisfies GetServerSideProps

const User = ({res}: {
    res: IUser
}) => {
    return (
        <>
            <Head>
                <title>Пользователи</title>
            </Head>
            <div className="m-36 flex gap-4 flex-col">
                <h1>
                    {res.phone}
                </h1>
            </div>
        </>
    );
}

export default User;