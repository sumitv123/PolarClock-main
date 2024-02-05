function getTime() {
    const date = new Date();
    // console.log(date);


    var sec = date.getSeconds();
    var secString = sec.toString();
    var lesSecond = sec - 1;
    var lesSecondString = lesSecond.toString();
    if (secString === '0') {
        lesSecondString  = '59'
    }
    var lesetId = document.getElementById(lesSecondString).style.backgroundColor = 'rgb(36, 35, 35)'
    var id = document.getElementById(secString).style.backgroundColor = '#B1D512'


    var minute = date.getMinutes();
    var leserMinute = minute - 1;
    leserMinute = leserMinute.toString();
    if(leserMinute === '0'){
        leserMinute = '59' 
    }
    leserMinute = 'm' + leserMinute;
    var minutesString = minute.toString();
    minutesString = 'm' + minutesString;
    var lesetMinuteId = document.getElementById(leserMinute).style.backgroundColor = 'rgb(36, 35, 35)'
    var minuteid = document.getElementById(minutesString).style.backgroundColor ='#FF00FF'


    var hour = date.getHours()
    var leserHour = hour - 1;
    leserHour = leserHour.toString();
    if(leserHour === '0'){
        leserHour = '23'
    }
    leserHour = 'h' + leserHour;
    hour = hour.toString();
    hour = 'h' + hour;
    var lesethourId = document.getElementById(leserHour).style.backgroundColor = 'rgb(36, 35, 35)'
    var minuteid = document.getElementById(hour).style.backgroundColor ='#00A6FF'


    var day = date.getDay();
    var lesrday = day - 1;
    lesrday = lesrday.toString();
    if (lesrday === '-1') {
        lesrday = '6'
    }
    lesrday = 'd'+ lesrday;
    day = day.toString();
    day = 'd' + day;
    var lesetdayId = document.getElementById(lesrday).style.backgroundColor = 'rgb(36, 35, 35)'
    var dayid = document.getElementById(day).style.backgroundColor ='#F46036'


    
    var currentdate = date.getDate();
    var lesrcurrentdate = currentdate - 1;
    lesrcurrentdate = lesrcurrentdate.toString();
    if (lesrcurrentdate === '1') {
        lesrcurrentdate = '31'
    }
    lesrcurrentdate = 'da'+ lesrcurrentdate;
    currentdate = currentdate.toString();
    currentdate = 'da' + currentdate;
    var lesetcurrentdateId = document.getElementById(lesrcurrentdate).style.backgroundColor = 'rgb(36, 35, 35)'
    var currentdateid = document.getElementById(currentdate).style.backgroundColor ='#9F2020'
  


    var month = date.getMonth()
    var leserMonth = month - 1;
    leserMonth = leserMonth.toString();
    if (leserMonth === '0') {
        leserMonth = '11'
    }
    leserMonth = 'mo'+ leserMonth;
    month = month.toString();
    month = 'mo' + month;
    var lesetmonthId = document.getElementById(leserMonth).style.backgroundColor = 'rgb(36, 35, 35)'
    var monthid = document.getElementById(month).style.backgroundColor ='#1A9020'
}

setInterval(getTime, 1000);