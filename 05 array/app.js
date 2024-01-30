class App
{

        runapplication()
        {
            console.log("hello world")
            let array = ["imagine dragons", "Panic! at the disco", "Bring me the horizon"]
            console.log(array)
            let array2 = [96, 21, 47]
            console.log(array2)

            for (let i = 0; i < array.length; i++){
                const element = array[i];
                console.log(i + ": " + element);

            }

            array.push("Dylan bob", "prince")

            for (let i = 0; i < array.length; i++){
                const element = array[i];
                console.log(i + ": " + element);

            }

            array.pop()
            array.pop()

            for (let i = 0; i < array.length; i++){
                const element = array[i];
                console.log(i + ": " + element);

            }

            array.push("NAOKI", "Mili")

            for (let i = 0; i < array.length; i++){
                const element = array[i];
                console.log(i + ": " + element);

            }



            for (let i = 0; i < array.length; i++){
                const element = array2[i];
                const bigmath = element + 1;
                console.log(bigmath)
            }

            let headers = document.getElementsByTagName("h1")

            for (let i = 0; i < array.length; i++){
                const element = headers[i];
                console.log(element);

            }

            let headersclass = document.getElementsByClassName("bandname");

            for (let i = 0; i < array.length; i++){
                const element = headersclass[i];
                console.log(element.innerText = "Huh???");

            }

            headersclass[0].innerText = "nieuws";
            headersclass[1].innerText = "reviews";
            headersclass[2].innerText = "commentaar"
            headersclass[3].innerText = "Ballin"
            headersclass[4].innerText = "Rock"
        }
}


let app = new App();
app.runapplication();