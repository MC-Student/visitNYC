"use strict";

function showTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("timeNow").innerHTML = time.toLocaleString();
}
showTime();
setInterval("showTime()", 1000);


/*AS OF JAN 2022: This code shows what I was trying to do originally - set the time to Manhattan time, no matter where the browser is opened.
It ended up showing the number of milliseconds since January 1, 1970 etc, and I know why, but I was not able to turn it
back into a time. I spent a couple of hours trying to figure it out. In the end, I just decided to have it show the
current time for NYC.

function Time() {
    var d = new Date();
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var time = utc + (3600000 * -5);
    document.getElementById("timeNow").innerHTML = "The local time in Manhattan is" +
        time.toLocaleString("en-US",{dateStyle: "full"});
}

Time();
setInterval("Time()", 1000);*/


