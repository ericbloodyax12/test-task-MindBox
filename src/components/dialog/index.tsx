import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import "./index.scss";

type TDialogProps = {
    header?: string;
    visible: boolean;
    appendTo?: "self" | HTMLElement;
    onHide: () => void;
    children: ReactNode;
    className?: string;
};

export const Dialog: FC<TDialogProps> = ({ header, visible, appendTo = "self", onHide, children }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onHide();
        };
        if (visible) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [visible, onHide]);

    if (!visible) return null;

    const dialogContent = (
        <div className="dialog-overlay" onClick={onHide}>
            <div className="dialog-container" onClick={(e) => e.stopPropagation()}>
                {header && <div className="dialog-header">{header}</div>}
                <div className="dialog-body">{children}</div>
                <button className="dialog-close-btn" onClick={onHide}>✖</button>
            </div>
        </div>
    );

    return appendTo === "self" ? dialogContent : createPortal(dialogContent, document.body);
};
