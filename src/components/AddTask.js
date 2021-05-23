import React, { useState } from 'react';

const AddTask = ({onAddTask}) => {

    const [inputValue, setInputValue] = useState('');

    // WHEN THE TASK IS SUBMITTED
    const onFormSubmit = (event) => {
        event.preventDefault();

        if(!isEmptyOrSpaces(inputValue)) {
            onAddTask(inputValue);
            setInputValue('');
        }

    }

    // CHECKING IF THE INPUT VALUE IS NULL OR EMPTY SPACE
    const isEmptyOrSpaces = (str) => {
        return str === null || str.match(/^ *$/) !== null;
    }

    return ( 
        <form onSubmit={onFormSubmit}>
            <div className="addtask">

                <input 
                    type="text" 
                    placeholder="Enter your task" 
                    required
                    className="addtask__input" 
                    value={inputValue} 
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button className="addtask__button">Add New <i className="icon icon-plus"></i></button>
            </div>
        </form>  
    );
}
 
export default AddTask;