import React from 'react';

const Date = () => {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
    /* ORDINAL INDICATOR */ 
    const nth = (date) => {
        switch (date) {
            case 1:
            case 21:
            case 31:
                return 'st';
            case 2:
            case 22:
                return 'nd';
            case 3:
            case 23:
                return 'rd';
            default:
                return 'th';
        }
    }

    let date = new window.Date();
    let dateDays = days[date.getDay()];
    let dateMonth = months[date.getMonth()];
    let dateNum = date.getDate();
    let dateNth = nth(dateNum);


    return (
        <h1 className="date">
            <span className="date__day">{`${dateDays}, `}</span>
            <span className="date__month">{`${dateMonth} ${dateNum}${dateNth}`}</span>
        </h1>        
    );
}


export default Date;