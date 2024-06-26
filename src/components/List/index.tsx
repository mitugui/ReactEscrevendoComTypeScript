import style from './list.module.scss';
import Item from "./Item";
import ITask from "../../interfaces/ITask";

interface ListProps {
    tasks: ITask[]
    selectTask: (selectedTask: ITask) => void
}

const List = ({ tasks, selectTask }: ListProps) => {
    return (
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(task => (
                    <Item
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List