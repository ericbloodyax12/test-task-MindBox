import {ComponentPropsWithoutRef, forwardRef} from "react";

import "./index.scss"

export type CardProps = {
  variant?: "todoListContainer",
  extraClassName?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>((
  {children, variant, extraClassName, ...restProps}, ref
) => {
  return (
    <div className={`card ${variant} ${extraClassName}`} ref={ref} {...restProps}>
      {children}
    </div>
  );
})
