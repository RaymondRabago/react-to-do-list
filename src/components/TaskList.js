import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Task from './Task';

const TaskList = ({tasks, onDelete, onComplete}) => {

    const renderedTasks = (
        <TransitionGroup >
            {
                tasks.map((task) => {

                    return(
                        <CSSTransition key={task.id} timeout={500} classNames="task">
                            <Task 
                                task={task} 
                                id={task.id} 
                                onDelete={onDelete} 
                                onComplete={onComplete}
                            />
                        </CSSTransition>
                    );
                })              
            }
        </TransitionGroup>
    )

    return ( 
        <div className="alltasks">
            {
                renderedTasks
            }
        </div>
    );
}
 
export default TaskList;