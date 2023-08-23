// Dialog
const modalOpen = document.querySelector(".button-modal-open")
const modalClose = document.querySelector(".button-modal-close")
const dialog = document.querySelector(".modal-window")

modalOpen.addEventListener("click", function() {
    // dialog.showModal()
    dialog.show()
})

modalClose.addEventListener("click", function() {
    dialog.close()
})
