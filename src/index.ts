import './Modules/collections'

const x = ["a", ""]

const a =  x.select(r => r === "a")
switch(a.type) {
    case "some" : 
        console.log(a.value)
        break;
    case "none" : 
        console.log(a.ex)
        break;
    default : 
        throw "type not supported"
}

const j = Object.getOwnPropertyNames(x)
console.log(j);



