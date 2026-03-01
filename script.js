// Data da viagem: 05 de setembro de 2026 à meia-noite
const viagemData = new Date(2026, 8, 5, 0, 0, 0).getTime();

// Atualiza a contagem regressiva a cada segundo
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

// Criar corações animados
function criarCoracoes() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heart.style.width = heart.style.height = (10 + Math.random() * 20) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

// Criar corações a cada 300ms
setInterval(criarCoracoes, 300);
