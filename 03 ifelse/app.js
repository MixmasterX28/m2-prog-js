class App
{

        runapplication()
        {
            //je tags oproepen om in javascript te gebruiken met id en class//
            let title = document.getElementById("newstitle");
            console.log(title);
            
            let randomGetal = Math.random();
            console.log(randomGetal);
            let newsitem1 = document.getElementsByClassName("gamenews")[0]

            let newsitem2 = document.getElementsByClassName("gamenews")[1]


            if(randomGetal < 0.2)
            {
                title.style.backgroundColor = "#FF0000";
            }
            else if(randomGetal > 0.2)
            {
                title.style.backgroundColor = "#D800FF";
            }else{

            }

            if(randomGetal < 0.2)
            {
                newsitem1.style.backgroundColor = "#32FF00"
            }
            else if(randomGetal > 0.2)
            {
                newsitem1.style.backgroundColor = "#FFB600"
            }

            if(randomGetal < 0.2)
            {
                newsitem2.style.backgroundColor = "#FF0087"
            }
            else if(randomGetal > 0.2)
            {
                newsitem2.style.backgroundColor = "#0017FF"
            }
        }
}


let app = new App();
app.runapplication();