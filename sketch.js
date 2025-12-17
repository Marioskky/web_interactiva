// Lista de partículas que se mostrarán en el canvas
let particles = [];
const NUM_PARTICLES = 150; // Número de partículas

function setup() {
    // Crear canvas del tamaño de la ventana y ubicarlo dentro del div p5Canvas
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5Canvas');
    noStroke(); // Sin borde en las partículas

    // Crear partículas iniciales con posición, tamaño, velocidad y color aleatorios
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    // Fondo oscuro con algo de transparencia para efecto "trailing"
    background(11, 12, 27, 50);

    // Actualizar y dibujar cada partícula
    for (let p of particles) {
        p.update(); // Movimiento
        p.show();   // Dibujar
    }
}

// Ajuste de canvas al redimensionar ventana
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Clase que define cada partícula
class Particle {
    constructor() {
        this.x = random(width); // Posición X aleatoria
        this.y = random(height); // Posición Y aleatoria
        this.size = random(4, 10); // Tamaño variable
        this.speedX = random(-1, 1); // Velocidad horizontal aleatoria
        this.speedY = random(0.5, 2); // Velocidad vertical
        // Color azul neón con algo de transparencia
        this.color = color(random(0,50), random(150,255), 255, 180);
    }

    update() {
        // Movimiento con efecto de parallax según posición del ratón
        this.x += this.speedX + map(mouseX - width / 2, -width/2, width/2, -2, 2);
        this.y -= this.speedY;

        // Reaparecer en pantalla si sale del canvas
        if (this.y < 0) this.y = height;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
    }

    show() {
        // Dibujar partícula
        fill(this.color);
        circle(this.x, this.y, this.size);
    }
}

/* Fuente original inspirada en OpenProcessing.org
   Modificada para:
   - Colores neón
   - Tamaños variables
   - Interacción con el ratón (parallax)
   - Efecto visual más espectacular y moderno */
