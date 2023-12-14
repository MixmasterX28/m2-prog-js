class App
{
    runapplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasid");
        let g = canvas.getContext("2d");

        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(70,20)
        g.lineTo(80,30)
        g.lineTo(60,40)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "lightblue"
        g.moveTo(20,35);
        g.lineTo(60,45);
        g.lineTo(60,55);
        g.lineTo(20,45);
        g.closePath();
        g.stroke();
        g.fill();
        
        console.log(canvas);
    }
}

let app = new App();
app.runapplication();