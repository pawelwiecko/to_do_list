import React from 'react'

const Task = (props) => {

    const style = {
       color:'red',
    }

    const {text, date, id, active, important, finishDate} = props.task;
    if(active) {
    return ( 
        <div className="done-task">
            <p>
               <strong style={important ? style : null }>{text}</strong><span> - do {date}</span>
            </p>
            <div>
                <button onClick={() => props.change(id)} className="done-btn" ><i class="far fa-check-circle fa-3x"></i></button>
                <button  onClick={() => props.delete(id)} className="exit" ><i class="far fa-times-circle fa-3x"></i></button >
            </div>               
        </div>
     );
    } else {
        const finish = new Date(finishDate).toLocaleDateString()
        return (
           <div className="done_tasks" >
               <p><strong>{text}</strong>(zrobić do {date}) - potwierdzenie wykonania <span>{finish}</span></p>
                <button  onClick={() => props.delete(id)} className="end">Usuń</button>
           </div>
        )
    }
}
 
export default Task;