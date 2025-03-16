import React, {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';

import "./index.scss"

type ButtonProps<T extends ElementType> = {
    as?: T
    variant?: 'primary' | 'secondary'; // если нужно дополнить вариант кнопки
    children: ReactNode;
    onFilterChange?: React.MouseEventHandler<HTMLButtonElement>
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const {as: Component = 'button', variant = 'primary', children, onFilterChange, ...rest} = props;


//

    return (
        <Component className={`button ${variant}`}  onClick={onFilterChange} {...rest}>
            {children}
        </Component>

    );
}

