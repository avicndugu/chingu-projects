// DATE AND TIME AUTOMATIC UPDATE
var nowDateTime= new Date();
console.log (nowDateTime);
var day=nowDateTime.getDate();
var month=nowDateTime.getMonth();
var year=nowDateTime.getFullYear();
var hour= nowDateTime.getHours();
var minute= nowDateTime.getMinutes();

// Choose if AM or PM
if (hour>12) {
    console.log("PM");
}
else {
    console.log("AM");
}

// Convert time from 24 hours to 12 hour system
if (hour>12){
    hour=hour-12;
    console.log(hour);
}
else {
    console.log(hour);
}
