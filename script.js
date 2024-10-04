function updateCountdown() {
    const today = new Date(); // Fecha actual
    const year = today.getFullYear();

    // Fijar la fecha de Navidad (25 de diciembre del año actual o próximo si ya pasó)
    let christmasDate = new Date(year, 11, 25); // Mes 11 es diciembre en JS

    // Si la fecha actual es posterior a Navidad, contar para la Navidad del próximo año
    if (today > christmasDate) {
        christmasDate = new Date(year + 1, 11, 25);
    }

    // Calcular la diferencia en milisegundos
    const diffTime = christmasDate - today;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    // Actualizar la interfaz con los valores calculados
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Ejecutar la función cada segundo
setInterval(updateCountdown, 1000);
