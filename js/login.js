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
    window.location.href = './calendar.html';
}