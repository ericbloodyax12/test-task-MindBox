import {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';

import {classNames} from "@/helpers";

import "./index.scss"


type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'; // если нужно дополнить вариант кнопки
  children: ReactNode;
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {as: Component = 'button', variant = 'primary', children, onFilterChange, ...rest} = props;
  const cls = classNames('mind-box-button', {}, [variant]);

  return (
    <Component className={cls} onClick={onFilterChange} {...rest}>
      {children}
    </Component>

  );
}

