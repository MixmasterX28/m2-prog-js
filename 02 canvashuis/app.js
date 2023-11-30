class App
{
    runapplication()
    {
        console.log("hello world")
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");

        g.fillStyle = "red";
        g.fillRect(0,0,canvas.width,canvas.height);

        g.fillStyle = "black";
        g.fillRect(0,0,10,10);

        console.log(canvas)
    }
}

let app = new App();
app.runapplication();