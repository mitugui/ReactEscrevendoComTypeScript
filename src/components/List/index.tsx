import style from './list.module.scss';
import Item from "./Item";
import iTask from "../../interfaces/iTask";

interface ListProps {
    tasks: iTask[]
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