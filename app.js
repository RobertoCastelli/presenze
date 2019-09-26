// VARIABLES
const dataDiOggi = document.getElementById('data_richiesta')

// DISPLAY TODAY'S DATE IN TITLE
let dataCompleta = new Date();
let giornoDellaSettimana = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][dataCompleta.getDay()];
let formatDataDiOggi = dataCompleta.getDate() + '-' + (dataCompleta.getMonth() + 1) + '-' + dataCompleta.getFullYear();
dataDiOggi.innerHTML = giornoDellaSettimana + ' ' + formatDataDiOggi;