actividadesGenerales = [
    {
      nombre: 'Ex. cono',
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

  examenes = [
    {
      nombre: 'Ex. cono',
      color: '#93c47d'
    }
  ];

actsGenerales = document.getElementsByClassName('actGeneral');
actsPersonales = document.getElementsByClassName('actPers');

var contador = 0;


function chargePage(){

    getWeek();
    var aux = "GPB CALENDAR - Calendario General";
    document.getElementById('general').innerHTML = aux;
    setPopupOptions();
}

function changeTitleGeneral(){

    localStorage.setItem('tipoCalendar', JSON.stringify('general'));
    cuenta = JSON.parse(localStorage.getItem('tipoCuenta'));
    chargePage();

    document.getElementById("exam").style.visibility="visible";
    document.getElementById("examlabel").style.visibility="visible";
    document.getElementById("examCheck").style.visibility="visible";
    
    
    if(cuenta == 'profesor'){
      document.getElementById('optionList').innerHTML=`
          <div>
          <a class="optionDpButton" id="button" data-modal="modalOne">Crear clase</a>

          <div id="modalOne" class="modal">
            <div class="modal-content">
              <div class="contact-form">
                <a class="close">&times;</a>
                <form>
                  <h2>Crear clase</h2>
                  <div>
                    <input type="text" name="name" placeholder="Nombre de la clase">
                    <input type="text" name="name" placeholder="Grupo">
                    <input type="date" name="name" placeholder="Fecha">
                    <input type="text" name="name" placeholder="Lugar"><br>
                    Horario de inicio
                    <input type="time" name="name" placeholder="Horario"><br>
                    Horario de fin
                    <input type="time" name="name" placeholder="Horario">
                  </div>
                  <button>Enviar</button>
                  <button class="close1">Cerrar</button>
                </form>
              </div>
            </div>
          </div>

      </div>
          <a class="optionDpButton" id="button" data-modal="modal2">Crear grupo</a>
          <div id="modal2" class="modal">
            <div class="modal-content">
              <div class="contact-form">
                <a class="close">&times;</a>
                <form>
                  <h2>Crear grupo</h2>
                  <div>
                    <input type="text" name="name" placeholder="Numero del grupo">
                    <input type="text" name="name" placeholder="Tamaño">
                  </div>
                  <button>Enviar</button>
                  <button class="close1">Cerrar</button>
                </form>
              </div>
            </div>
          </div>
          <a class="optionDpButton" id="button" data-modal="modal3">Crear asignatura</a>
          <div id="modal3" class="modal">
            <div class="modal-content">
              <div class="contact-form">
                <a class="close">&times;</a>
                <form>
                  <h2>Crear asignatura</h2>
                  <div>
                    <input type="text" name="name" placeholder="Nombre de la asignatura">
                    <input type="date" name="name" placeholder="Fecha">
                    <input type="text" name="name" placeholder="Lugar de clases">
                  </div>
                  <button>Enviar</button>
                  <button class="close1">Cerrar</button>
                </form>
              </div>
            </div>
          </div>
          <a class="optionDpButton" id="button" data-modal="modal4">Crear encuesta</a>
          <div id="modal4" class="modal">
            <div class="modal-content">
              <div class="contact-form">
                <a class="close">&times;</a>
                <form>
                  <h2>Crear encuesta</h2>
                  <div>
                    <input type="text" name="name" placeholder="Nombre de la Encuesta">
                    <input type="text" name="name" placeholder="Opciones"><br>
                    Horario de inicio
                    <input type="time" name="name" placeholder="Horario"><br>
                    Horario de fin
                    <input type="time" name="name" placeholder="Horario">
                  </div>
                  <button>Enviar</button>
                  <button class="close1">Cerrar</button>
                </form>
              </div>
            </div>
          </div>
      `
      setPopupOptions();
    }else{
      document.getElementById("optionsDropdown").style.visibility = "hidden";
    }

    addActivitiesGeneral();
}

function changeTitlePersonal(){
    
    localStorage.setItem('tipoCalendar', JSON.stringify('personal'));

    chargePage();
    
    document.getElementById("exam").style.visibility="hidden";
    document.getElementById("examlabel").style.visibility="hidden";
    document.getElementById("examCheck").style.visibility="hidden";

    var aux = "GPB CALENDAR - Calendario Personal";
    document.getElementById('general').innerHTML = aux;
    document.getElementById("optionsDropdown").style.visibility = "visible";
    document.getElementById('exam').checked = false;
    document.getElementById('optionList').innerHTML = `
        <div>
        <a class="optionDpButton" id="button" data-modal="modalOne">Crear actividad</a>

        <div id="modalOne" class="modal">
          <div class="modal-content">
            <div class="contact-form">
              <a class="close">&times;</a>
              <form>
                <h2>Crear actividad</h2>
                <div>
                  <input type="text" name="name" placeholder="Nombre de la actividad">
                  <input type="date" name="name" placeholder="Fecha">
                  <input type="text" name="name" placeholder="Lugar"><br>
                  Horario de inicio
                  <input type="time" name="name" placeholder="Horario"><br>
                  Horario de fin
                  <input type="time" name="name" placeholder="Horario">
                </div>
                <button>Enviar</button>
                <button class="close1">Cerrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `
    setPopupOptions();
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

function deleteNotExams(){

  var tipo = JSON.parse(localStorage.getItem('tipoCalendar'));
  
  var checkbox = document.getElementById('exam');

  if(checkbox.checked==true){
  
  for(let act in actsGenerales){
    var bool = false;
    for(let act2 of examenes){
      
      if(actividadesGenerales[act].nombre == act2.nombre){
        bool = true;
      }
    }
    if(!bool){
      actsGenerales[act].innerHTML=""
      actsGenerales[act].style.backgroundColor = "white";
    }
  }
  }else{
    if(tipo=='general'){
      addActivitiesGeneral();
    }
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
    document.getElementById('exam').checked = false;
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
    document.getElementById('exam').checked = false;
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

/* Popups opciones */

function setPopupOptions(){
  let modalBtns = [...document.querySelectorAll("#button")];

  modalBtns.forEach( (btn) => {

    btn.onclick = () => {

      let modal = btn.getAttribute('data-modal');
      document.getElementById(modal)
        .style.display = "block";
    }

  });

  let closeBtns = [...document.querySelectorAll(".close1"), ...document.querySelectorAll(".close")];

  closeBtns.forEach((btn) => {

    btn.onclick = () => {
      let modal = btn.closest('.modal');
      modal.style.display = "none";
    }
    
  });

}
