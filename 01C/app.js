class App
{

        runapplication()
        {
            this.greeting = "starting up";
            this.appname = "ZeroApp";
            this.versienummer = "Ver1.0";
            this.versiedatum = "21-11-2023";
            this.autheur = "Jamal";
            this.copyright = "jamal corp";
            this.distributor = "none";
            this.darkmode = "true";
            let boolean = true
            let string = "this is a string"
            let numbervar = 5
            this.boolean = false
            this.string = "this is not a string"
            this.numbervar = 10
            console.log(boolean)
            console.log(string)
            console.log(numbervar)
        }
}


let app = new App();
app.runapplication();


console.log(app.greeting);
console.log("appname: " + app.appname);
console.log("versienummer: " + app.versienummer)
console.log("versiedatum: " + app.versiedatum)
console.log("autheur: " + app.autheur)
console.log("copyright: " + app.copyright)
console.log("distributor: " + app.distributor)
console.log("darkmode: " + app.darkmode)
console.log("Boolean: " + app.boolean)
console.log("string: " + app.string)
console.log("number: " + app.numbervar)