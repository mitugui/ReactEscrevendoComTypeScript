import React from "react";
import Button from "../Button";
import style from './form.module.scss';

const Form = () => {
    return (
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input 
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button
                text="Adicionar"
            />
        </form>
    )
}

export default Form