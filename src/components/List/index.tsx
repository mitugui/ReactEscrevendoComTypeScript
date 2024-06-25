import React, { useState } from "react";
import style from './list.module.scss';
import Item from "./Item";
import iTask from "../../interfaces/iTask";

const List = () => {
    const [tasks, setTasks] = useState<iTask[]>([])

    const addTask = () => {
        const newTask: iTask = { name: "", time: "" }
        setTasks([...tasks, newTask])
    }

    return (
        <aside className={style.tasksList}>
            <h2 onClick={addTask}>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List