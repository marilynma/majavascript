

function moveClock() {

    const theTime = new Date();
    var hour = theTime.getHours();
    var minute = theTime.getMinutes();
    var second = theTime.getSeconds();

    if (hour<10){
    hour="0"+hour;
}
   if (minute<10){
    minute="0"+minute;
}
   if (second<10){
    second="0"+second;
}

document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = ":"+minute;
    document.getElementById("second").innerHTML = ":"+second;
}
 setInterval(moveClock,100);
