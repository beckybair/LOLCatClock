$(document).ready(function(){
/*
LOL Cat Clock
Shows different pictures of cats with messages
for different times of the day
*/

var time = new Date().getHours();  // MAGIC CODE: 24 hr clock
var messageText;
var image;

var wakeUp = 8; // 9am
var lunch = 11; // 11am
var noon = 12; // 12pm
var nap = lunch + 2; // 2pm
var evening = 17;  // 5pm

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

var updateClock = function() {
  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImage = document.getElementById("lolcat");

  if (time == wakeUp) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake Up!";
  }
  else if (time == lunch) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Lunch Time!";
  }
  else if (time == noon) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "It's Noon!";
  }
  else if (time == nap) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Nap Time!";
  }
  else if (time == evening) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good evening!";
  }
  else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Party Time!";
  }

  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();
}

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// *************** Events *************** //

var partyTime = 18;

var partyEvent = function()
{
    if (partyTime < 0)
    {
        partyTime = new Date().getHours();
        // text in the button should read "Party Over"
        partyTimeButton.innerText = "Party Over";

        // color of the button should be "#0A8DAB" (bonus!)
        partyTimeButton.style.background = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        // text in the button should read "PARTY TIME!"
        partyTimeButton.innerText = "PARTY TIME!";

        // color of the button should be "#222" (bonus!)
        partyTimeButton.style.background = "#222";
    }
};
partyEvent();

  $("#partyTimeButton").click(partyEvent);

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUp = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunch = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function()
{
    nap = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);

});
