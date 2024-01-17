


function myOwnMath(u,h,l)
{
    let logY = Math.log(l)+ h + Math.pow(u,2);
    return logY
}

let z1 = myOwnMath(9,8,15);
console.log(z1);

let z2 = myOwnMath(8,10,25)
console.log(z2)

let z3 = myOwnMath(4,2,5)
console.log(z3)

function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) + c;
    return y
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);



function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;

}

let HetResultaat = heeftEenResultaat();
    console.log(HetResultaat);
    console.log(heeftEenResultaat());


function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super shout out");
argumentsAreHandy("Just lean")
argumentsAreHandy("632146HS")

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

    newClassFunction()
    {
        console.log("hi world in new class")
    }

    functionwithargument(aArgument)
    {
        console.log("Argument get over here!!")
        console.log("here:")
        console.log(aArgument)
    }
}

let app = new App();
app.runApplication();

let classapp = new App();
classapp.newClassFunction();

app.functionwithargument("OBJECTION!! Your argument is invalid");