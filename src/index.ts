import './Modules/collections'

const x = ["a", "dad", "a", "dad"]

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

const f = x.distinct();

console.log(f)


