import React, {PropsWithChildren} from 'react';

import {Header} from "./header";
import {Footer} from "./footer";

import './layout.scss';


type TLayoutProps = PropsWithChildren<{}>

export const Layout: React.FC<TLayoutProps> = ({children}) => {
  const mainLayoutContainerCN = [
    "main-layout-container",
  ].join(" ")
  return (
    <div className={mainLayoutContainerCN}>
      <div className={"main-layout-container__header"}>
        <Header/>
      </div>
      <main className={"main-layout-container__content"}>
        {children}
      </main>
      <div className={"main-layout-container__footer"}>
        <Footer/>
      </div>
    </div>
  );
}

