import React from "react";
import style from './list.module.scss';
import Item from "./Item";

const List = () => {
    const tasks = [{
        name: "React",
        time: "02:00:00"
    }, {
        name: "JavaScript",
        time: "01:00:00"
    }, {
        name: "TypeScript",
        time: "03:00:00"
    }]

    return (
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
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