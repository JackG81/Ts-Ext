//Functional types 
import {option} from './results'

declare global { 
    //Interface
    interface Array<T> {
        select(this : T[], predicate : (value : T) => boolean) : option<T>;
        contains(this : T[], predicate : (value : T) => boolean) : boolean;
        last(this : T[]) : T;
        first(this: T[]) : T;
        count(this : T[]) : number;
        distinct(this : T[]) : T[]
        selectAll(this : T[], predicate : (value : T) => boolean) : T[]
    }
}

//ExtensionMethods
Array.prototype.select = function<T>(this : T[], predicate : (value : T) => boolean) : option<T>  {
    const element = this.find(predicate)
    if(element){
        return {type : "some", value : element}
    }
    return {type : "none"}
}

Array.prototype.contains = function<T>(this : T[], predicate : (value : T) => boolean) : boolean {
    return !!this.find(predicate)
}

Array.prototype.first = function<T>(this: T[]) : T {
    const [first] = this;
    return first
}

Array.prototype.count = function<T>(this : T[]) : number {
    return this.length - 1
}

Array.prototype.last = function<T>(this : T[]) : T {
    return this[this.count()]
}

Array.prototype.distinct = function<T>(this : T[]) : T[] {
    return [...new Set(this)];
}

Array.prototype.selectAll = function<T>(this : T[], predicate : (value : T) => boolean) : (T | undefined)[] {
    const x = this.map(item => {
        if(predicate(item)){
            return item
        }
        else {
            return 
        }
    })
    return x.filter(Boolean);
}




export {}
