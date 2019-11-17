// DATA
const dataDiOggi = document.getElementById('data_richiesta')

// DISPLAY TODAY'S DATE IN TITLE
let dataCompleta = new Date();
let giornoDellaSettimana = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][dataCompleta.getDay()];
let formatDataDiOggi = dataCompleta.getDate() + '-' + (dataCompleta.getMonth() + 1) + '-' + dataCompleta.getFullYear();
dataDiOggi.innerHTML = giornoDellaSettimana + ' ' + formatDataDiOggi;

// VARIABLES 
let btnLogin = document.getElementById('btnLogin');
let btnLogout = document.getElementById('btnLogout');
let txtEmail = document.getElementById('email');
let txtPassword = document.getElementById('password');
let status = document.getElementById('status');

let data_da = document.getElementById('data_da');
let data_a = document.getElementById('data_a');
let btnFerie = document.getElementById('btnFerie');

let ore_dalle = document.getElementById('ore_dalle');
let ore_alle = document.getElementById('ore_alle');
let btnPermessi = document.getElementById('btnPermessi');


// LOG IN
btnLogin.addEventListener('click', (event) => {
    console.log(txtEmail.value);
    console.log(txtPassword.value);
    event.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    auth.signInWithEmailAndPassword(email, password)
        .then(cred => status.innerHTML = cred.user)
        .catch(error => status.innerHTML = error.message)
});

// REAL-TIME LISTENER
auth.onAuthStateChanged(cred => {
    cred ? status.innerHTML = 'user: ' + cred.email : status.innerHTML = 'user not logged';
});

// LOG OUT
btnLogout.addEventListener('click', (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out')
    })
});

// INVIA FERIE
btnFerie.addEventListener('click', () => {
    console.log(status.innerText, dataDiOggi.innerText, data_da.value, data_a.value)
})

// INVIA PERMESSI
btnPermessi.addEventListener('click', () => {
    console.log(status.innerText, ore_dalle.value, ore_alle.value);
})

