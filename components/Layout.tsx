import React, { ReactElement, ReactNode } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Nav from "./Nav";
import { Typography } from "@material-tailwind/react";

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    );
}

export default Layout;