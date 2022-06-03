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
            className={cx("px-3 py-1 rounded-md text-3xl", {
                ["bg-altYellow text-altBlack"]: color === "altYellow",
                ["bg-altGreen text-altGray"]: color === "altGreen",
                ["bg-altBlue text-altGray"]: color === "altBlue",
                ["bg-altRed text-altGray"]: color === "altRed",
                ["bg-altBlack text-altGray"]: color === "altBlack",
            })}
        >
            { text }
        </button>
    )
}

export const SolidHrefButton = ({
    text,
    color,
    href
}: IButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener"
        >
            <button
                className={cx("px-3 py-2 rounded-md text-3xl", {
                    ["bg-altYellow text-altBlack"]: color === "altYellow",
                    ["bg-altGreen text-altGray"]: color === "altGreen",
                    ["bg-altBlue text-altGray"]: color === "altBlue",
                    ["bg-altRed text-altGray"]: color === "altRed",
                    ["bg-altBlack text-altGray"]: color === "altBlack",
                })}
            >
                { text }
            </button>
        </a>
    )
}

export const OutlineClickButton = ({
    text,
    color,
    onClick
}: IButtonProps) => {
    return (
        <button
            onClick={onClick}
                className={cx("bg-altGray px-3 py-1 rounded-md text-3xl", {
                    ["border-4 border-altYellow text-altYellow"]: color === "altYellow",
                    ["border-4 border-altGreen text-altGreen"]: color === "altGreen",
                    ["border-4 border-altBlue text-altBlue"]: color === "altBlue",
                    ["border-4 border-altRed text-altRed"]: color === "altRed",
                    ["border-4 border-altBlack text-altBlack"]: color === "altBlack",
                })}
        >
            { text }
        </button>
    )
}

export const OutlineHrefButton = ({
    text,
    color,
    href
}: IButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener"
        >
            <button
                className={cx("bg-altGray px-3 py-1 rounded-md text-3xl", {
                    ["border-4 border-altYellow text-altYellow"]: color === "altYellow",
                    ["border-4 border-altGreen text-altGreen"]: color === "altGreen",
                    ["border-4 border-altBlue text-altBlue"]: color === "altBlue",
                    ["border-4 border-altRed text-altRed"]: color === "altRed",
                    ["border-4 border-altBlack text-altBlack"]: color === "altBlack",
                })}
            >
                { text }
            </button>
        </a>
    )
}