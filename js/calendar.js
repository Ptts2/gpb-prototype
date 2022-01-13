actividadesGenerales = [
    {
      nombre: 'cono',
      color: '#93c47d'
    },
    {
      nombre: 'lengua',
      color: '#3d85c6'
    },
    {
      nombre: 'mates',
      color: '#f1c232'
    },
    {
      nombre: 'accesibilidad',
      color: '#9fc5e8'
    },
    {
      nombre: 'geografia',
      color: '#cc0000'
    }
  ];
  
 actividadesPersonales = [
    {
      nombre: 'Mates',
      color: '#d0e0e3'
    },
    {
      nombre: 'Fiesta',
      color: '#f6b26b'
    },
    {
      nombre: 'Comida',
      color: '#a64d79'
    },
    {
      nombre: 'Gym',
      color: '#76a5af'
    },
    {
      nombre: 'Bici',
      color: '#ffe599'
    }
  ];

actsGenerales = document.getElementsByClassName('actGeneral');
actsPersonales = document.getElementsByClassName('actPers');

var date = new Date();
var pr = date.toString();
var month = date.getMonth()+1;
var year = date.getFullYear();
var day = pr.substring(8,10), day1 = 0;
var contador = 0;


function chargePage(){
    contador = 0;
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
    contador = 0;
    chargePage();
    
    for(let act of actsPersonales){
        act.innerHTML=""
        act.style.backgroundColor = "white";
    }
    for(let act in actsGenerales){
        actsGenerales[act].innerHTML = actividadesGenerales[act].nombre;
        actsGenerales[act].style.backgroundColor = actividadesGenerales[act].color;
    }
}

function changeTitlePersonal(){
    
    localStorage.setItem('tipoCalendar', JSON.stringify('general'));
    contador = 0;
    chargePage();
    
    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;
    
    for(let act of actsGenerales){
        act.innerHTML=""
        act.style.backgroundColor = "white";
    }
    for(let act in actsPersonales){
        actsPersonales[act].innerHTML = actividadesPersonales[act].nombre;
        actsPersonales[act].style.backgroundColor = actividadesPersonales[act].color;
    }

}

function previousWeek(){
    var monthS = "";
    var day = pr.substring(8,10), day1 = 0;

    if(contador ==0){

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
        contador = 1;
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


    day = day-7;
    day1 = day1-7;

    if(month == 12){
        year = year-1;
    }
    
    document.getElementById('weeks').innerHTML = day+" - "+day1+" de "+monthS+ " de "+year;

}

function nextWeek(){
    var monthS = "";
    if(contador == 0){
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

        contador = 1;
    }

    day = day+7;
    day1 = day1+7;

    

    /*if(month != 12){
        month = month+1;
    }else{
        month = 1;
    }*/

    switch (month){
        case 1:
            monthS = "Jan";
            if(day == 31){
                day1 = 6;
            }else if(day == 30){
                day1 = 5;
            }else if(day == 29){
                day1 = 4;
            }else if(day == 28){
                day1 = 3;
            }else if(day == 27){
                day1 = 2;
            }else if(day == 26){
                day1 = 1;
            }
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

    if(month == 1){
        year = year+1;
    }
    
    document.getElementById('weeks').innerHTML = day+" - "+day1+" de "+monthS+ " de "+year;
}