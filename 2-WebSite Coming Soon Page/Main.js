let days = document.querySelector(".days>p");
let hours =document.querySelector(".hours>p");
let minutes = document.querySelector(".minutes>p");
let secs = document.querySelector(".secs>p");

let OpeningTime = new Date("11-5-2023").getTime();
let x =setInterval(()=>{
    let now = new Date().getTime();
    let Difference = OpeningTime -now;
    secs.innerHTML = Math.floor(Difference/1000%(60));
    minutes.innerHTML = Math.floor(Difference%(1000*60*60)/1000/60);
    hours.innerHTML = Math.floor(Difference%(1000*60*60*24)/1000/60/60);
    days.innerHTML = Math.floor(Difference/1000/60/60/24);

    if(Difference<0){
        clearInterval(x);
        secs.innerHTML = "00";
        minutes.innerHTML = "00";
        hours.innerHTML = "00";
        days.innerHTML = "00";    
    }

},1000)
