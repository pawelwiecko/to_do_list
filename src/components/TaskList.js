import React from 'react'
import Task from './Task'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done= props.tasks.filter(task => !task.active)

    done.sort((a,b) => b.finishDate - a.finishDate )

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if (a <b) return -1;
            if (a > b) return 1;
            return 0
        })
    }
  
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
    return ( 
        <>
        <div className="active">
        <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Brak dodanych zadań</p> } 
        </div>
        <div className="done">
        <h1>Zadania zrobione {done.length > 0 ? done.length : null}</h1>
        {done.length>20 && <span>Wyświetlonych jest jedynie 20 ostatni elementów</span>}
        {doneTasks.slice(0,8)} 
        </div>

        </>
     );
}
 
export default TaskList;