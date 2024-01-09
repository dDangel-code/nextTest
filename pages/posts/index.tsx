import Head from "next/head";

import { getUser } from "@/service/users";
import { useEffect } from "react";

const Posts = () => {

    return (
        <>
            <Head>
                <title>Посты</title>
            </Head>
            <div className="mt-4">
                <h1>
                    Posts
                </h1>
            </div>
        </>

    );
}

export default Posts;
