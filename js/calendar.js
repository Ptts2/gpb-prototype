var date = new Date();
    var pr = date.toString();
    
    var month = date.getMonth()+1;

function chargePage(){

    var date = new Date();
    var pr = date.toString();
    var day = pr.substring(8,10), day1 = 0;
    var month = pr.substring(3,7);

    switch (pr.substring(0,3)){
        case "Mon":
            day1 = parseInt(day)+6;
            day = day;
            
            break;
        case "Tue":
            day1 = parseInt(day)+5;
            day = day-1;
            
            break;
        case "Wed":
            day1 = parseInt(day)+4;
            day = day-2;
            
            break;
        case "Thu":
            day1 = parseInt(day)+3;
            day = day-3;
            
            break;
        case "Fri":
            day1 = parseInt(day)+2;
            day = day-4;
            
            break;
        case "Sat":
            day1 = parseInt(day)+1;
            day = day-5;
            
            break;
        case "Sun":
            day1 = parseInt(day);
            day = day-6;
            
            break;

    }
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = day+" - "+day1+" de "+month+ " de "+pr.substring(11,15);
    
    //createCalendar();
}

function changeTitleGeneral(){

    localStorage.setItem('tipoCalendar', JSON.stringify('general'));
    chargePage();
    

}

function changeTitlePersonal(){
    
    localStorage.setItem('tipoCalendar', JSON.stringify('general'));

    chargePage();
    
    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;
    
    

}

function previousWeek(){
    var monthS = "";
    var day = pr.substring(8,10), day1 = 0;

    switch (pr.substring(0,3)){
        case "Mon":
            day1 = parseInt(day)+6;
            day = day;
            
            break;
        case "Tue":
            day1 = parseInt(day)+5;
            day = day-1;
            
            break;
        case "Wed":
            day1 = parseInt(day)+4;
            day = day-2;
            
            break;
        case "Thu":
            day1 = parseInt(day)+3;
            day = day-3;
            
            break;
        case "Fri":
            day1 = parseInt(day)+2;
            day = day-4;
            
            break;
        case "Sat":
            day1 = parseInt(day)+1;
            day = day-5;
            
            break;
        case "Sun":
            day1 = parseInt(day);
            day = day-6;
            
            break;
    }

    if(month != 1){
        month = month-1;
    }else{
        month = 12;
    }

    switch (month){
        case 1:
            monthS = "Jan";
            break;
        case 2:
            monthS = "Feb";
            break;
        case 3:
            monthS = "Mar";
            break;
        case 4:
            monthS = "Apr";
            break;
        case 5:
            monthS = "May";
            break;
        case 6:
            monthS = "Jun";
            break;
        case 7:
            monthS = "Jul";
            break;
        case 8:
            monthS = "Aug";
            break;
        case 9:
            monthS = "Sep";
            break;
        case 10:
            monthS = "Oct";
            break;
        case 11:
            monthS = "Nov";
            break;
        case 12:
            monthS = "Dec";
            break;
    }
    
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = day+" - "+day1+" de "+monthS+ " de "+pr.substring(11,15);

}

function nextWeek(){
    
}