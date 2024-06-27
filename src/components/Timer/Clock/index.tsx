import style from './clock.module.scss';

interface ClockProps {
    time: number | undefined
}

const Clock = ({ time = 0 }: ClockProps) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, "0")
    const [secondTen, secontUnit] = String(seconds).padStart(2, "0")
    return (
        <>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{minuteUnit}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secontUnit}</span>
        </>
    )
}

export default Clock