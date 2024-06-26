import style from '../list.module.scss'
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
        <li className={`${style.item} ${selected ? style.selectedItem : ""}`}
            onClick={() => selectTask({
                name,
                time,
                completed,
                selected,
                id
            })}>
            <h3> {name} </h3>
            <span> {time}</span>
        </li>
    )
}

export default Item