import style from './list.module.scss';
import Item from "./Item";
import ITask from "../../interfaces/ITask";

interface ListProps {
    tasks: ITask[]
}

const List = ({ tasks }: ListProps) => {
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