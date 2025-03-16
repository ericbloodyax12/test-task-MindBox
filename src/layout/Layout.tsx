import React from 'react';
import {Header} from "./header/Header.tsx";
import {Footer} from "./footer/Footer.tsx";
import App from "../App.tsx";

import './layout.scss'

type TLayoutProps = {}

export const Layout: React.FC<TLayoutProps> = ({}) => {
    const mainLayoutContainerCN = [
        "main-layout-container",
    ].join(" ")
    return (
        <div className={mainLayoutContainerCN}>
            <div className={"main-layout-container__header"}>
                <Header/>
            </div>
            <main className={"main-layout-container__content"}>
             <App/>
            </main>
            <div className={"main-layout-container__footer"}>
                <Footer/>
            </div>
        </div>
    );
}

