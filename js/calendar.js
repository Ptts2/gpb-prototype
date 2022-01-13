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
      color: '#ea9999'
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

var contador = 0;


function chargePage(){

    getWeek();
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    
}

function changeTitleGeneral(){

    localStorage.setItem('tipoCalendar', JSON.stringify('general'));

    chargePage();
    
    addActivitiesGeneral();
}

function changeTitlePersonal(){
    
    localStorage.setItem('tipoCalendar', JSON.stringify('personal'));

    chargePage();
    
    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;

    addActivitiesPersonal();
}

function addActivitiesGeneral(){
  for(let act of actsPersonales){
    act.innerHTML=""
    act.style.backgroundColor = "white";
  }

  for(let act in actsGenerales){
      actsGenerales[act].innerHTML = actividadesGenerales[act].nombre;
      actsGenerales[act].style.backgroundColor = actividadesGenerales[act].color;
  }
}

function addActivitiesPersonal(){
    for(let act of actsGenerales){
        act.innerHTML=""
        act.style.backgroundColor = "white";
    }
    for(let act in actsPersonales){
        actsPersonales[act].innerHTML = actividadesPersonales[act].nombre;
        actsPersonales[act].style.backgroundColor = actividadesPersonales[act].color;
    }
}

function deleteActivitiesGeneral(){
  for(let act of actsGenerales){
    act.innerHTML=""
    act.style.backgroundColor = "white";
  }
  for(let act of actsPersonales){
    act.innerHTML=""
    act.style.backgroundColor = "white";
  }
  
}

var offset = 0;
var today = new Date();
var dayOfWeekOffset = today.getDay();


function getWeek(offset) {
  offset = offset || 0; 
  var firstDay = new Date();
  firstDay.setDate(firstDay.getDate() + 1 - dayOfWeekOffset + (offset * 7));

  var lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + 6);

  console.log(makeDateString(firstDay), makeDateString(lastDay));

  document.getElementById('weeks').innerHTML = makeDateString(firstDay) + ' - ' + makeDateString(lastDay);


}

function makeDateString(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var y = date.getFullYear();
  
    var dateString = dd + '/'+ mm + '/'+ y;
    return dateString;
  
}
  
function previousWeek(){

    var tipo = JSON.parse(localStorage.getItem('tipoCalendar'));
    offset = offset - 1;
    getWeek(offset);

    contador --;

    if(contador != 0){
      deleteActivitiesGeneral();
    }else{
      if(tipo == 'general'){
        addActivitiesGeneral();
      }else{
        addActivitiesPersonal();
      }
    }
}

function nextWeek(){
  var tipo = JSON.parse(localStorage.getItem('tipoCalendar'));
    offset = offset + 1;
    getWeek(offset);

    contador++;

    if(contador != 0){
      deleteActivitiesGeneral();
    }
    else{
      if(tipo == 'general'){
        addActivitiesGeneral();
      }else{
        addActivitiesPersonal();
      }
    }
    
}

