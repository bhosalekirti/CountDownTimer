let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secondsEl = document.getElementById("seconds");
let inputDate = "";
let dateConvertedToTimestamp,
  TotalsecondsManul,
  enddateConvertedToTimestamp = "";
const newYears = "1 Jan 2023";
function countdown() {
  //taking values from coustomer
  var inputDate = document.getElementById("startdate-input").value;
  var dateConvertedToTimestamp = new Date(inputDate).getTime();
  var endinputDate = document.getElementById("endtdate-input").value;
  var enddateConvertedToTimestamp = new Date(endinputDate).getTime();
  //Checking the date time filled or not
  if (inputDate != "" && endinputDate != "") {
    var TotalsecondsManul =
      (enddateConvertedToTimestamp - dateConvertedToTimestamp) / 1000;
    let days = Math.floor(TotalsecondsManul / 3600 / 24);
    let hours = Math.floor((TotalsecondsManul / 3600) % 24);
    let minutes = Math.floor(TotalsecondsManul / 60) % 60;
    let seconds = Math.floor(TotalsecondsManul % 60);
    //ading values on place of number
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }
  //if date is not selected run our main function
  else {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let Totalseconds = (newYearsDate - currentDate) / 1000;
    let days = Math.floor(Totalseconds / 3600 / 24);
    let hours = Math.floor((Totalseconds / 3600) % 24);
    let minutes = Math.floor(Totalseconds / 60) % 60;
    let seconds = Math.floor(Totalseconds % 60);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function reset() {
  document.getElementById("startdate-input").value = "";
  var inputDate = document.getElementById("startdate-input").value;
  document.getElementById("endtdate-input").value = "";
  var endinputDate = document.getElementById("endtdate-input").value;
  if (
    inputDate.type === "datetime-local" &&
    endinputDate.type === "datetime-local"
  ) {
    inputDate.value = "";
    inputDate.type = "datetime-local";
    endinputDate.value = "";
    endinputDate.type = "datetime-local";
  }
}
countdown();

setInterval(countdown, 1000);
var myVar = setInterval(countdown, 1000);

clearInterval(myVar);
