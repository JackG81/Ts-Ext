//functional types 
type option<T> = {type : "some", value : T} | {type : "none", ex : string}

//Interface
interface Array<T> {
    select(this : T[], predicate : (value : T) => boolean) : option<T>;
}

//ExtensionMethods
Array.prototype.select = function<T>(this : T[], predicate : (value : T) => boolean) : option<T>  {
    const element = this.find(predicate)
    if(element){
        return {type : "some", value : element}
    }
    return {type : "none", ex : "not found in array"}
}






