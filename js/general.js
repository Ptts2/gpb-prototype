function openNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'block';
    // Updates: set window background color black
}

function closeNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'none';
}

function changeTitleGeneral(){
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = "ww/mm";
}

function changeTitlePersonal(){
    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = "ww/mm";
}

createCalendar()