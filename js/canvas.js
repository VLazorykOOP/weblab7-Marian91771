let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.globalAlpha = 0.5;
    ctx.strokeRect(0, 0, 600, 400);
    ctx.globalAlpha = 1.0;

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 200);
    ctx.lineTo(580, 200);
    ctx.moveTo(580, 200);
    ctx.lineTo(570, 195);
    ctx.moveTo(580, 200);
    ctx.lineTo(570, 205);
    ctx.moveTo(200, 20);
    ctx.lineTo(200, 390);
    ctx.moveTo(200, 20);
    ctx.lineTo(205, 25);
    ctx.moveTo(200, 20);
    ctx.lineTo(195, 25);
    ctx.stroke();


    let shapes = [
        { type: "circle", x: 100, y: 150, r: 50, fill: "blue", stroke: "black", strokeWidth: 3, animType: "color", colorPhase: 0 },
        { type: "rect", x: 50, y: 200, width: 100, height: 50, fill: "blue", stroke: "black", strokeWidth: 2 },
        { type: "circle", x: 250, y: 150, r: 50, fill: "blue", stroke: "black", strokeWidth: 3, animType: "translate", dx: 2 },
        { type: "rect", x: 300, y: 100, width: 50, height: 50, fill: "blue", stroke: "black", strokeWidth: 2 },
        { type: "rect", x: 350, y: 150, width: 50, height: 50, fill: "blue", stroke: "black", strokeWidth: 2 },
        { type: "rect", x: 200, y: 250, width: 50, height: 50, fill: "blue", stroke: "black", strokeWidth: 2 },
        { type: "rect", x: 400, y: 250, width: 50, height: 50, fill: "blue", stroke: "black", strokeWidth: 2 },
        { type: "rect", x: 250, y: 300, width: 100, height: 50, fill: "blue", stroke: "black", strokeWidth: 2, animType: "scale", scale: 1 },
        { type: "polygon", points: [[300, 250], [350, 200], [400, 250], [350, 300]], fill: "blue", stroke: "black", strokeWidth: 2, animType: "rotate", angle: 0 },
        { type: "text", x: 400, y: 350, text: "Мар'ян Вибираний", font: "15px Arial", fill: "blue" }
    ];

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.globalAlpha = 0.5;
        ctx.strokeRect(0, 0, 600, 400);
        ctx.globalAlpha = 1.0;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(10, 200);
        ctx.lineTo(580, 200);
        ctx.moveTo(580, 200);
        ctx.lineTo(570, 195);
        ctx.moveTo(580, 200);
        ctx.lineTo(570, 205);
        ctx.moveTo(200, 20);
        ctx.lineTo(200, 390);
        ctx.moveTo(200, 20);
        ctx.lineTo(205, 25);
        ctx.moveTo(200, 20);
        ctx.lineTo(195, 25);
        ctx.stroke();

        shapes.forEach(function(shape) {
            ctx.beginPath();
            ctx.strokeStyle = shape.stroke;
            ctx.lineWidth = shape.strokeWidth;
            ctx.fillStyle = shape.fill;

            switch (shape.type) {
                case "circle":
                    ctx.arc(shape.x, shape.y, shape.r, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    break;
                case "rect":
                    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
                    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "polygon":
                    ctx.moveTo(shape.points[0][0], shape.points[0][1]);
                    shape.points.slice(1).forEach(function(point) {
                        ctx.lineTo(point[0], point[1]);
                    });
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                case "text":
                    ctx.font = shape.font;
                    ctx.fillText(shape.text, shape.x, shape.y);
                    break;
            }
        });
    }

    function animate() {
        shapes.forEach(function(shape) {
            if (shape.animType === "color") {
                shape.colorPhase += 0.05;
                shape.fill = `rgb(0, 0, ${Math.abs(Math.sin(shape.colorPhase) * 255)})`;
            } else if (shape.animType === "translate") {
                shape.x += shape.dx;
                if (shape.x > 600) shape.x = -50;
            } else if (shape.animType === "scale") {
                shape.scale = Math.sin(Date.now() / 500) * 0.1 + 1;
                shape.width *= shape.scale;
                shape.height *= shape.scale;
            } else if (shape.animType === "rotate") {
                shape.angle += 0.02;
                var cx = 350;
                var cy = 250;
                shape.points = shape.points.map(function(point, index) {
                    var angle = shape.angle + index * (Math.PI / 2);
                    var x = cx + 50 * Math.cos(angle);
                    var y = cy + 50 * Math.sin(angle);
                    return [x, y];
                });
            }
        });

        drawShapes();
        requestAnimationFrame(animate);
    }

    animate();