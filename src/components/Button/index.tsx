import React from "react";
import style from './button.module.scss';

interface ButtonProps {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button className={style.button}>
            {text}
        </button>
    )
}

export default Button;