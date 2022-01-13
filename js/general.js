function openNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'block';
    // Updates: set window background color black
}

function closeNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'none';
}

function changeCalendar(tipo){

    localStorage.setItem('tipoCalendar', JSON.stringify(tipo));
    window.location='calendar.html'
}