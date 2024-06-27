import React from "react";
import style from './button.module.scss';

interface ButtonProps {
    text: string
    type?: "button" | "submit"
    onClick?: () => void
}

const Button = ({ text, type = "button", onClick }: ButtonProps) => {
    return (
        <button
            className={style.button}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;