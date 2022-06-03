import React from 'react';
import cx from 'classnames'

interface IButtonProps {
    text: string;
    href?: string; //* leave optional for none anchor buttons
    color: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

//! create separate buttons for href and onClick

export const SolidClickButton = ({
    text,
    color,
    onClick
}: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className=""
        >
            { text }
        </button>
    )
}