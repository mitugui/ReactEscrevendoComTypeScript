import { useEffect, useState } from "react";
import ITask from "../../interfaces/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss';
import { timetoSeconds } from "../../common/utils/time";

interface TimerProps {
    selected: ITask | undefined,
    finishTask: () => void
}

const Timer = ({ selected, finishTask }: TimerProps) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timetoSeconds(selected.time))
        }
    }, [selected])

    const countDown = (counter: number = 0) => {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1)
                return countDown(counter - 1)
            }
            finishTask()
        }, 1000)
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button
                onClick={() => countDown(time)}
                text="Começar!"
            />
        </div>
    )
}

export default Timer