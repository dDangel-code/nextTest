import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

import { useRouter } from "next/router";
import { text } from "stream/consumers";
import Image from "next/image";

const Nav = () => {
    const { pathname } = useRouter();
    const link = [
        {
            name: 'Домой',
            path: '/',
            img: <FaHome />
        },
        {
            name: 'Посты',
            path: '/posts',
            img: <MdEmail />
        },
        {
            name: 'Пользователи',
            path: '/users',
            img: <PiUsersThreeFill />
        },
    ]

    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
        bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className="flex w-full xl:flex-col items-center justify-between xl: justify-center gap-y-10 px-4 md: px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl: rounded-full">
                {
                    link.map((l, index) => (
                        <Link href={l.path} key={index}
                            className={`${l.path == pathname && 'text-blue-600'} relative flex items-center group
                         hover:text-blue-500 transition-all duration-300`}
                        >
                            {l.img}
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
}

export default Nav;