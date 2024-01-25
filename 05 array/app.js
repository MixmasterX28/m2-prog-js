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

            for (let i = 0; i < array.length; i++){
                const element = array2[i];
                const bigmath = element + 1;
                console.log(bigmath)
            }
        }
}


let app = new App();
app.runapplication();