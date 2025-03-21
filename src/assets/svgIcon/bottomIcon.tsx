
type BottomIconProps = {
    className?: string;
};
export const BottomIcon: React.FC<BottomIconProps> = ({className}) => {
    return (
        <svg
            className={className}
            width="20" height="20" fill="#494949" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#9e9e9e">
            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"></path>
            </g>
        </svg>
    );
}

