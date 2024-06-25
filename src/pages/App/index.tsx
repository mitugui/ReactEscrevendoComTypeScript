import React, { useState } from 'react';
import Form from '../../components/Form';
import List from '../../components/List';
import Timer from '../../components/Timer';
import style from './app.module.scss';
import iTask from '../../interfaces/iTask';

const App = () => {
  const [tasks, setTasks] = useState<iTask[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
