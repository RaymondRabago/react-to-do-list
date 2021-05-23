import React from 'react';
import Date from './Date';

const Header = ({totalTasks, totalPending}) => {

    let tasksCount = '';

    if((totalTasks === 1 && totalPending === 1) || totalTasks === 0) {
        tasksCount = `${totalTasks} Task Pending`;
    } else  if (totalPending === 0 && totalTasks === 1) {
        tasksCount = `${totalPending} Task Pending`;
    } else if (totalTasks === totalPending) {
        tasksCount = `${totalTasks} Tasks Pending`;
    } else {
        tasksCount = `${totalPending} of ${totalTasks} Tasks Pending`;
    }

    return ( 
        <div className="header">
            <Date/> 
            <p className="header__count">{tasksCount}</p>
        </div>
    );
}
 
export default Header;