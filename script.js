let sHand = document.querySelector(".s-hand");
let mHand = document.querySelector(".m-hand");
let hHand = document.querySelector(".h-hand");

function displayTime(){

    //system date
    let date = new Date();

    //system hours, minutes and seconds
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    //getting values for hour, minute and second
    let hRotation = 30*h + (m/2) + (s/12) ;  // 1 hour = 30 deg [30*12 = 360 deg]             ; 60 min = 30 deg [of hour hand] => 1 min = 1/2 deg     ;  360 sec = 30 deg [of hour hand] => 1 sec = 1/12deg
    let mRotation = 6*m + s/10;              // 60 min = 360 deg => 1 min = 6deg              ; 60 sec = 6 deg [of min hand] => 1 sec = 1/10 deg
    let sRotation = 6*s;                     // 60 sec = 360 deg => 1 sec = 6deg (sec hand)

    hHand.style.transform = `rotate(${hRotation}deg)`;
    mHand.style.transform = `rotate(${mRotation}deg)`;
    sHand.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);