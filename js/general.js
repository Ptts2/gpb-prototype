function openNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'block';
    // Updates: set window background color black
}

function closeNotification(){

    var el = document.getElementById('notificationPopup');
    el.style.display = 'none';
}

function chargePage(){
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    document.getElementById('weeks').innerHTML = "ww/mm";
    //createCalendar();
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

function createCalendar(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    /*let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);*/

    /*var idF=0;
    var idC=0;
    var aux="", auxF="";
    
    for(idF=0; idF<10; idF++){
        var idC=0;
        auxF = idF+""+idC;
        auxF=document.createElement('tr')
        for(idC=0; idC<10; idC++){
            
            aux = idF+""+idC;
            aux = document.createElement('td');
            aux = "prueba";

            auxF.appendChild(aux)

        }
        tbody.appendChild(auxF);
    }


    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('calendar').appendChild(table);*/
}