// Defina a data da viagem aqui (AAAA, MM-1, DD, HH, MM, SS)
const viagemData = new Date(2026, 8, 15, 5, 0, 0).getTime();

const countdown = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = viagemData - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = dias.toString().padStart(2, '0');
    document.getElementById("hours").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = segundos.toString().padStart(2, '0');

    if (distancia < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerText = "Estamos na viagem! ✈️💕";
    }
}, 1000);
