function chargePage(){
    var date = new Date();
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = date.getMonth()+"/"+date.getDay();
    
    //createCalendar();
}

function changeTitleGeneral(){
    var date = new Date();
    var month = "";
    switch (date.getMonth()){
        case 0:
            month="Jan";
            break;
        case 1:
            month="Feb";
            break;
        case 2:
            month="Mar";
            break;
        case 3:
            month="Abr";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="Jun";
            break;
        case 6:
            month="Jul";
            break;
        case 7:
            month="Ago";
            break;
        case 8:
                month="Sep";
                break;
        case 4:
                month="Oct";
                break;
        case 5:
                month="Nov";
                break;
        case 6:
                month="Dec";
                break;         
    }

    alert(date.toString());

    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = date.getDay()+"de "+month;
    
}

function changeTitlePersonal(){
    var date = new Date();
    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = date.getMonth()+"/"+date.getDay();
}

function previousWeek(){
    var today = new Date();
    alert(today.getDay());

}

function nextWeek(){
    
}