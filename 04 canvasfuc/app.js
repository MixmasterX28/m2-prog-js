class App
{
    
    runapplication()
    {
        let canvas = document.getElementById("canvasid");
        let g = canvas.getContext("2d");
       this.tekenHuis(g,200,6)
    }

    tekenHuis(g,x,y){
        console.log("hello world");

        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(70+x,20+y)
        g.lineTo(80+x,30+y)
        g.lineTo(60+x,40+y)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "lightblue"
        g.moveTo(20+x,35+y);
        g.lineTo(60+x,45+y);
        g.lineTo(60+x,55+y);
        g.lineTo(20+x,45+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        console.log(canvas);
    }
}

let app = new App();
app.runapplication();