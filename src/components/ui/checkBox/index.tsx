import React, { ComponentPropsWithoutRef } from 'react';

import "./index.scss";

type CheckBoxProps = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
} & ComponentPropsWithoutRef<'input'>;

export const CheckBox: React.FC<CheckBoxProps> = ({
                                                      label,
                                                      checked,
                                                      onChange,
                                                      className = '',
                                                      ...rest
                                                  }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    };

    return (
        <label className={`checkbox-container ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                {...rest}
            />
            <span className="checkbox-mark" />
            {label && <span className="checkbox-label">{label}</span>}
        </label>
    );
};
