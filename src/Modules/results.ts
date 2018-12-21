export type option<T> = {type : 'some',  value : T} | {type: "none"}

export type retryableResult<T> = {type : "ok", value : T} | {type: "retry", msg : T} | {type : "failure", ex : T} 

export type result<T> = {type : 'ok',  value : T} | {type: "failure", ex : T}

