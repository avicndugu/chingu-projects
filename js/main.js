// DATE AND TIME AUTOMATIC UPDATE
function updateClock() {
    var nowDateTime= new Date();
    var day=nowDateTime.getDate();
    var month=nowDateTime.toLocaleString('en-us', { month: 'long' });
    var year=nowDateTime.getFullYear();
    var hour= nowDateTime.getHours();
    var minute= nowDateTime.getMinutes();
    var twelveHour;

    // DOM INSERTION VARIABLES
    const hours=document.getElementById("hours");
    const minutes=document.getElementById("minutes");
    const amPm=document.getElementById("am-pm");
    const viewDay=document.getElementById("day");
    const viewMonth=document.getElementById("month");
    const viewYear=document.getElementById("year");

    // Choose if AM or PM
    if (hour>=12) {
        if (minute==0){
            twelveHour="PM";        
        }
        else{
            twelveHour="PM";
        }    
    }
    else {
        twelveHour="AM";
    }

    // Convert time from 24 hours to 12 hour system
    if (hour>12){
        hour=hour-12;
    }
    else if (hour==0){
        hour=12;  
    }
    else {
        hour=hour;
    }

    // Adds a zero if minutes are below 10
    if (minute<10){
        minute="0"+minute;
    }
    // Updating the view data.
    minutes.innerText=minute;
    hours.innerText=hour;
    amPm.innerText=twelveHour;
    viewDay.innerText=day;
    viewMonth.innerText=month+" ";
    viewYear.innerText=" "+year;
}
updateClock();
// Udating every 1.1 seconds
setInterval(updateClock,1100);

////////////////COLORS LISTED ///////////////////////
var colors = ["#8be9fc","#74f27c","#f7b76b","#ed76c5","#bd93f9","#f8f8f2","#e6db74"];



// Switching between pull requests and issues github tab
var pullReqItem= document.getElementsByClassName("pull-request-item");
// console.log(pullReqItem);
var issueItem= document.getElementsByClassName("issue-item");
var notification=document.getElementById("notification");
// console.log(issueItem);
// console.log(pullReqItem.length);
document.getElementById("pull-request").addEventListener("click", function (){
    for (n=0;n<pullReqItem.length;n++) {
        pullReqItem[n].style.display="block";
    }
    for (m=0;m<issueItem.length;m++) {
        issueItem[m].style.display="none";
    }
});
// function toPullRequest()

document.getElementById("issues").addEventListener("click", function (){
    for (n=0;n<pullReqItem.length;n++) {
        pullReqItem[n].style.display="none";
    }
    for (m=0;m<issueItem.length;m++) {
        issueItem[m].style.display="block";
    }
});


// Hide notification under time
document.getElementById("hide-notification").addEventListener("click",function(){
    notification.style.display="none";
});