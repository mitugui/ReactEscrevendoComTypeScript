import style from './item.module.scss'
import ITask from '../../../interfaces/ITask'

interface ItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void
}

const Item = (
    {
        name,
        time,
        completed,
        selected,
        id,
        selectTask
    }: ItemProps) => {
    return (
        <li className={`${style.item} ${selected ? style.selectedItem : ""} ${completed ? style.completedItem : ""}`}
            onClick={() => !completed && selectTask({
                name,
                time,
                completed,
                selected,
                id
            })}>
            <h3> {name} </h3>
            <span> {time}</span>
            {completed && <span className={style.concluded} aria-label="tarefa completada"></span>}
        </li>
    )
}

export default Item