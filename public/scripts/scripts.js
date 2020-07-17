//force user to choose from first
function changeToOptions(event) {
    const toSelect = document.getElementById("to")
    for (i = toSelect.length - 1; i >= 0; i--) {
        const fromSelected = document.getElementById("from").value
        if (fromSelected == "selectFrom") {
            toSelect.disabled = true

        } else {
            toSelect.disabled = false

        }
    }
}


//==SELECT ACTIVE ==//


//==MODAL==//
const simulation = document.querySelector("button")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal a")
simulation.addEventListener("click", () => {
    modal.classList.remove("hide")

})
close.addEventListener("click", () => {
    modal.classList.add("hide")
})