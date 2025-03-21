import { ComponentPropsWithoutRef, forwardRef} from 'react'
import {classNames} from "@/helpers";

import './index.scss'


export type InputProps = {
    fullWidth?: boolean
    label?: string
    variant?: 'default'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        children,
        className,
        fullWidth,
        variant = 'default',
        ...rest
    } = props
    const cls = classNames('inputContainer',{fullWidth: fullWidth && 'fullWidth'})
    const clsInput = classNames("default", {className:className})
    return (
        <div className={cls}>
            <input
                className={clsInput}
                type={variant}
                {...rest}
                ref={ref}
            />
                {children}
        </div>
    )
})
