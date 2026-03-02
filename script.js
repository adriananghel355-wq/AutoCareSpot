// Funzione per scrollare a una sezione
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Gestione del form di prenotazione
document.getElementById('formBooking').addEventListener('submit', function(e) {
    e.preventDefault();

    // Raccogliere i dati del form
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        auto: document.getElementById('auto').value,
        servizio: document.getElementById('servizio').value,
        data: document.getElementById('data').value,
        ora: document.getElementById('ora').value,
        indirizzo: document.getElementById('indirizzo').value,
        data_prenotazione: new Date().toLocaleString('it-IT')
    };

    // Salvataggio nel localStorage (per dimostra)
    let prenotazioni = JSON.parse(localStorage.getItem('prenotazioni')) || [];
    prenotazioni.push(formData);
    localStorage.setItem('prenotazioni', JSON.stringify(prenotazioni));

    // Mostrare messaggio di conferma
    const form = document.getElementById('formBooking');
    const messaggio = document.getElementById('messaggio-conferma');
    
    form.style.display = 'none';
    messaggio.style.display = 'block';

    // Reset form per nuovo submit
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        messaggio.style.display = 'none';
    }, 3000);

    // Qui potremmo inviare i dati al server
    console.log('Prenotazione confermata:', formData);
});

// Imposta data minima a oggi
window.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('data');
    const today = new Date().toISOString().split('T')[0];
    dataInput.min = today;
});

// Effetto parallasse per il hero (opzionale)
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    }
});
