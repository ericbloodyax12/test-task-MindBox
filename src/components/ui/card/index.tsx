import {ComponentPropsWithoutRef, forwardRef} from "react";

import "./index.scss"

export type CardProps = {
  variant?: string,
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>((
  {children, variant, className, ...restProps}, ref
) => {
  return (
    <div className={`card ${variant}`} ref={ref} {...restProps}>
      {children}
    </div>
  );
})
