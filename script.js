const count = () => {
    const endDate = new Date("Sept 29, 2023 04:00:00").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

    // if (timeDays == "00" && timeHours == "00" && timeMinutes == "00" && timeSeconds == "00"){
    //     document.getElementById("days").innerHTML = "00";
    //     document.getElementById("hours").innerHTML = "00";
    //     document.getElementById("minutes").innerHTML = "00";
    //     document.getElementById("seconds").innerHTML = "00";
    // } 
    // how????????????
}

setInterval(count, 1000);