import React from "react";
import style from './button.module.scss';

interface ButtonProps {
    text: string
    type?: "button" | "submit"
}

const Button = ({ text, type="button" }: ButtonProps) => {
    return (
        <button className={style.button} type={type}>
            {text}
        </button>
    )
}

export default Button;