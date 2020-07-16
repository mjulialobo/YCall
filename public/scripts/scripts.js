//==Force the user to choose from to select where==//
function changeToOptions(event) {
    const toSelect = document.getElementById("to")
    for (i = toSelect.length - 1; i >= 0; i--) {
        const fromSelected = document.getElementById("from").value
        if (fromSelected == "011") {
            toSelect.disabled = false

        } else {
            toSelect.remove(2)
            toSelect.disabled = false

        }
    }
}
//reset from select//
function resetFrom(from) {
    from.selectedIndex = 0;
}


//receiving user inputs and calculating value with company plan//


//calculating whithout plan
//sending info back to frontend//


//==MODAL - with backend info==/
const simulation = document.querySelector("button")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal a")
simulation.addEventListener("click", () => {
    modal.classList.remove("hide")
})
close.addEventListener("click", () => {
    modal.classList.add("hide")
})