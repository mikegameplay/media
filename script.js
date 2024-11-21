document.getElementById('calcular').addEventListener('click', () => {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const resultado = document.getElementById('resultado');

    // Verifica se todas as notas foram preenchidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = 'Por favor, insira todas as notas!';
        resultado.className = 'show';
        return;
    }

    const media = nota1 + nota2 + nota3;

    if (media >= 180) {
        resultado.textContent = 'APROVADO';
        resultado.className = 'show aprovado';

        // Efeito de Confete
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.7 },
        });

        // Efeito de Fogos de Artifício
        const fireworks = new Fireworks(document.body, {
            hue: { min: 0, max: 360 },
            rocketsPoint: 50,
            speed: 3,
            acceleration: 1.05,
            friction: 0.95,
            gravity: 1.5,
            particles: 120,
            trace: 3,
            explosion: 5,
        });

        fireworks.start();

        // Para parar os fogos de artifício após 5 segundos
        setTimeout(() => {
            fireworks.stop();
        }, 5000);

    } else {
        resultado.textContent = 'REPROVADO';
        resultado.className = 'show reprovado';
    }
});
