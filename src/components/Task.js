import React from 'react';

const Task = ({task, onDelete, id, onComplete}) => {
    
    let completeClass = task.completed === true ? 'task--complete' : '';
    let completeCheck = task.completed === true ? true : false;

    return ( 
        <div className={`task ${completeClass}`}>
            <div className="checkbox">
                <input type="checkbox" id={id} className="checkbox__input" onClick={(event) => onComplete(id)} checked={completeCheck}/>
                <span className="checkbox__marker"></span>
            </div>
            <label htmlFor={id} className="task__content"> {task.task}</label>
            <button className="task__delete" onClick={() => onDelete(id)}><i className="icon icon-trash"></i></button>
        </div>
    );
}
 
export default Task;