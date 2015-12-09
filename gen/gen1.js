let arr = [1,2,3,[4,5,[6,7,8,9]]];

function *flat(array){
    for(let v of array){
        if(typeof v != "number")
            yield* flat(v);
        else
            yield v;
    }
}

let gen = flat(arr);
for(let v of gen)
    console.log(v);
