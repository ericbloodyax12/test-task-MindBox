import React from 'react';

import './header.scss'

type THeaderProps = {}

export const Header: React.FC<THeaderProps> = ({}) => {

    return (
        <header className="header">
            <h1 className="header__title">todos</h1>
        </header>
    );
}

