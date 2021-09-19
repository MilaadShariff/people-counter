let countEl = document.getElementById("count-el")
let count = 0
let savedEl= document.getElementById("saved-el")
function increment() {
    
    count += 1
    countEl.innerHTML = count
    console.log(count)

}

function save() {

    const entries = count + " - "
    savedEl.innerHTML += entries 


    console.log("saved " + count)
}

function reset() {
    count = 0 
    countEl.innerHTML = count
    console.log(count)
}

