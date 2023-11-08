// Write your solution here!
//.pop() last and .shift() first for removing 
//.push() at the end  and .unshift() at the begining for add element 
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}


function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    const newCats = cats.slice()
    newCats.push(name)
    return newCats
}

function prependCat(name){
    const newCats = cats.slice()
    newCats.unshift(name)
    return newCats
}

function removeLastCat(){
    const newCats = cats.slice()
    newCats.pop()
    return newCats
}

function removeFirstCat(){
    const newCats = cats.slice()
    newCats.shift()
    return newCats
}