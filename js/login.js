usuarios = [
    {
        nombre: 'profesor',
        pass: 'profe1',
        username: 'Profesor',
        realName:'Alberto',
        apellidos:'Perez',
        email:'AlbertoPerez@gmail.com',
        password:'******'
    },
    {
        nombre: 'alumno',
        pass: 'alumno1',
        username: 'Alumno',
        realName:'Jose',
        apellidos:'Sanchez',
        email:'JoseSanchez@gmail.com',
        password:'*******'
    }
]

tipoCuenta = 'none';
loggedUser = '-1'

window.onload = ()=>{
    //Set uname and pw in header

    if ( !document.URL.includes("login.html") ) {

        tipoCuenta = JSON.parse(localStorage.getItem('tipoCuenta'));
        loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        document.getElementById('loggedUsername').innerHTML = usuarios[loggedUser].username
    }
    
    if ( document.URL.includes("profile.html") ) {
        
        document.getElementById('nombre').innerHTML = usuarios[loggedUser].realName
        document.getElementById('apellidos').innerHTML = usuarios[loggedUser].apellidos
        document.getElementById('username').innerHTML = usuarios[loggedUser].username
        document.getElementById('email').innerHTML = usuarios[loggedUser].email
        document.getElementById('passw').innerHTML = usuarios[loggedUser].password
    }

    if( document.URL.includes("acc-adm-panel.html") ){
        document.getElementById('nombreRD').placeholder = usuarios[loggedUser].realName
        document.getElementById('surnameRD').placeholder = usuarios[loggedUser].apellidos
        document.getElementById('unameRD').placeholder = usuarios[loggedUser].username
        document.getElementById('emailRD').placeholder = usuarios[loggedUser].email
    }

}

function openLogin(){

    closeRegister();
    var el = document.getElementById('loginPopup');
    el.style.display = 'block';
    // Updates: set window background color black
}

function closeLogin(){

    var el = document.getElementById('loginPopup');
    el.style.display = 'none';
}

function openRegister(){

    closeLogin();
    var el = document.getElementById('registerPopup');
    el.style.display = 'block';
    // Updates: set window background color black
}

function closeRegister(){

    var el = document.getElementById('registerPopup');
    el.style.display = 'none';
}

function register(){
    alert("Los registros estan cerrados");
}

function login(){

    inputUname = document.getElementById('unameInputL').value;
    inputPw = document.getElementById('pwInputL').value;

    if(inputUname == usuarios[0].nombre && inputPw == usuarios[0].pass){
        tipoCuenta = 'profesor';
        loggedUser = 0;

        localStorage.setItem('tipoCuenta', JSON.stringify(tipoCuenta));
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        window.location.href = './calendar.html';
    }else if(inputUname == usuarios[1].nombre && inputPw == usuarios[1].pass){
        tipoCuenta = 'alumno';
        loggedUser = 1;

        localStorage.setItem('tipoCuenta', JSON.stringify(tipoCuenta));
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        window.location.href = './calendar.html';
    }else{
        alert("Usuario o contraseña incorrectos.");
    }
    
}