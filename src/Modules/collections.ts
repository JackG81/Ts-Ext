//functional types 
type option<T> = {type : "some", value : T} | {type : "none", ex : string}

//Interface
interface Array<T> {
    select(this : T[], predicate : (value : T) => boolean) : option<T>;
    contains(this : T[], predicate : (value : T) => boolean) : boolean;
    last(this : T[]) : T
    first(this: T[]) : T
}

//ExtensionMethods
Array.prototype.select = function<T>(this : T[], predicate : (value : T) => boolean) : option<T>  {
    const element = this.find(predicate)
    if(element){
        return {type : "some", value : element}
    }
    return {type : "none", ex : "not found in array"}
}

Array.prototype.contains = function<T>(this : T[], predicate : (value : T) => boolean) : boolean {
    return !!this.find(predicate)
}

Array.prototype.last = function<T>(this : T[]) : T {
    return this[this.length - 1]
}

Array.prototype.first = function<T>(this: T[]) : T {
    return this[0]
}





