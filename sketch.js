const saveButton = document.querySelector('button#save');
const colorInput = document.querySelector('input#color');
console.log(colorInput);

let paintColor = '#ff6347';
colorInput.value = paintColor;

function setup() {
    createCanvas(windowWidth * 0.48, windowHeight * 0.48).parent('sketch');
    background(255);

    saveButton.addEventListener("click", () => {
        console.log('clicked');
        save('image.png');
    });

    colorInput.addEventListener("input", () => {
        console.log(colorInput.value);
        paintColor = colorInput.value;
    });
}

function draw() {
}

function mouseDragged() {
    fill(paintColor);

    let starSize = 30;
    beginShape();
    for (let i = 0; i < 5; i++) {
        let angle = TWO_PI * i / 5 - HALF_PI;
        let x = mouseX + cos(angle) * starSize;
        let y = mouseY + sin(angle) * starSize;
        vertex(x, y);

        angle += TWO_PI / 10;
        x = mouseX + cos(angle) * (starSize / 2);
        y = mouseY + sin(angle) * (starSize / 2);
        vertex(x, y);
    }
    endShape(CLOSE);
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        save('image.png');
    }
}

function windowResized() {
    resizeCanvas(windowWidth * 0.48, windowHeight * 0.48);
}

window.addEventListener('resize', windowResized);
