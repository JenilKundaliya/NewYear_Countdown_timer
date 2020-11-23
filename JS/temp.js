console.log('Hey There');
     
// console.log(today);
var day = document.getElementById('days');
var hours = document.getElementById('hours');
var mins = document.getElementById('min');
var secs = document.getElementById('sec');
const newYear = '1 Jan 2021';
const newYearDate = new Date(newYear)
// console.log(newYearDate - today);
function countdown(){
    var today = new Date();
    var diff = newYearDate - today;
    var seconds = diff/1000;
    var sec = lessthanten(Math.floor(seconds)%60);
    var min = lessthanten(Math.floor(seconds/60)%60);
    var hour = lessthanten(Math.floor(seconds/3600)%24);
    var days = Math.floor(seconds/3600/24);
    console.log(sec,min,hour,days);
    function lessthanten(time){
        return time<10?`0${time}`:`${time}`;
    }
   day.innerHTML = days
   hours.innerHTML = hour
   mins.innerHTML = min
   secs.innerHTML = sec
    

}
setInterval(countdown,1000);