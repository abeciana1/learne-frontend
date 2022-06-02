import React from 'react';
import cx from 'classnames'

interface IButtonProps {
    text: string;
    href?: string; //* leave optional for none anchor buttons
    color: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const SolidButton = ({
    text,
    href,
    color,
    onClick
}: IButtonProps) => {
    return (
        <button></button>
    )
}