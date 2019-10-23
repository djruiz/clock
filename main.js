setInterval(setClock, 1000);

const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");
console.log(hourHand);
console.log(secondHand);
console.log(minuteHand);

function setClock() {
  //analog clock

  //get ratios so that hands of the clock move gradually
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);

  //digital clock
  let hour = currentDate.getHours();
  let end = "";

  //if hours are past 12 then set to PM and take mod of hours to get current time
  if (hour > 12) {
    hour = hour % 12;
    end = "PM";
  } else {
    end = "AM";
  }
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  //console.log(hour);
  //console.log(minute);
  //console.log(seconds);
  const time = hour + ":" + minute + ":" + seconds + " " + end;
  const digital = document.querySelector("#digital");
  //console.log(digital);
  digital.innerHTML = time;
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

//call setClock() so that clockhands start in the correct position when page loads
setClock();
