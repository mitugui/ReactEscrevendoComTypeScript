import React, { useState } from "react";
import Button from "../Button";
import style from './form.module.scss';
import ITask from "../../interfaces/ITask";
import {v4 as uuidv4} from "uuid";

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = ({ setTasks }: FormProps) => {
    const [task, setTask] = useState("")
    const [time, setTime] = useState("00:00:00")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newTask: ITask = {
            name: task,
            time: time,
            selected: false,
            completed: false,
            id: uuidv4()
        }

        setTasks((previousTasks) =>
            [...previousTasks, newTask],
        )

        setTask("")
        setTime("00:00:00")
    }

    return (
        <form className={style.newTask} onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
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
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button
                type="submit"
                text="Adicionar"
            />
        </form>
    )
}

export default Form