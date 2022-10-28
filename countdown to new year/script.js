const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');




function updatetime(){
    const currentyear = new Date().getFullYear();
// To change dynamically in next year we should concat and using ($ symbol)
const newyear = new Date(`January 1 ${currentyear+1} 00:00:00`);

const currentdate =new Date();

const diff = newyear-currentdate;

// to get how many days in difference we have to divide it by seconds, minutes, hours, day
const d = Math.floor(diff/1000/60/60/24);//to remove decimal points use math.floor function
const h = Math.floor((diff/1000/60/60)%24);
const m = Math.floor((diff/1000/60)%60);
const s = Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

// console.log( d + " " +h + " " + m + " " + s);

// 1000ms = 1s 
// 60s = 1min
// 60min = 1hour
// 24hrs = 1day


}

updatetime();
setInterval(updatetime, 1000);