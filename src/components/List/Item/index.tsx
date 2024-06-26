import style from '../list.module.scss'
import ITask from '../../../interfaces/ITask'

const Item = ({ name, time, completed, selected, id }: ITask) => {
    // console.log({ name, time, completed, selected, id })
    return (
        <li className={style.item}>
            <h3> {name} </h3>
            <span> {time}</span>
        </li>
    )
}

export default Item