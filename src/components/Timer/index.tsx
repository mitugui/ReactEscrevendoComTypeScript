import { useEffect, useState } from "react";
import ITask from "../../interfaces/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss';
import { timetoSeconds } from "../../common/utils/time";

interface TimerProps {
    selected: ITask | undefined
}

const Timer = ({ selected }: TimerProps) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timetoSeconds(selected.time))
        }
    }, [selected])

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            {/* Tempo: {time} */}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button
                text="Começar!"
            />
        </div>
    )
}

export default Timer