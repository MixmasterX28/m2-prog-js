function globalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

globalFunction();
globalFunction();
globalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!");
        globalFunction();
    }
}

let app = new App();
app.runApplication();