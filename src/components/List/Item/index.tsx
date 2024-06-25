import style from '../list.module.scss'

interface ItemProps {
    name: string,
    time: string
}

const Item = ({ name, time }: ItemProps) => {
    return (
        <li className={style.item}>
            <h3> {name} </h3>
            <span> {time}</span>
        </li>
    )
}

export default Item