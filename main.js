
let date = document.querySelector('.date')
let time = document.querySelector('.time')


setInterval(() => {
    DisplayDate();
}, 1000);




function DisplayDate(){
    let today = new Date()
    let days = ['SUN','MON','TUE','WED','THUR','FRI','SAT'];
let months = ['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUG','SEP','OCT','NOV','DEC'];


let currentTime = ` ${today.getHours() <=9 ? `0`+today.getHours() : today.getHours() } : ${today.getMinutes() <=9 ? `0`+today.getMinutes() : today.getMinutes()} : ${today.getSeconds() <=9 ? `0`+today.getSeconds() : today.getSeconds()}`;
let CurrentDate = `${days[today.getDay()]} : ${today.getDate()} , ${months[today.getMonth()]} , ${today.getFullYear()}`;

time.innerHTML = currentTime;
date.innerHTML = CurrentDate;
}



