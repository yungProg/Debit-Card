let cardNum = document.querySelector(".card-number-wrapper");
console.log(cardNum.children);

let inputNum = document.getElementById("card-number")

let holderDisplay = document.querySelector(".card-holder")
let holder = document.getElementById("card-name")

let month = document.getElementById("mo");
let year = document.getElementById("yr");

let cvvDisplay = document.querySelector(".cvv-display")
let cvvInput = document.querySelector(".card-wrapper")
let cvv = document.getElementById("cvv")

function handleCardNumber () {
    if (this.value.length > 0 && this.value.length < this.maxLength + 1) {
        cardNum.children[this.value.length - 1].innerText = this.value[this.value.length - 1]
    } else {cardNum.children[this.value.length - 1].innerText = "#"}
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength)
    }
}

function handleHolder () {
    if (this.value.length > 0 && this.value.length < this.maxLength + 1) {
        holderDisplay.innerText = this.value.toUpperCase()
    }else {
        holderDisplay.innerText = "NAME"
    }
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength)
    }
}

const flipBack = () => {
    cvvInput.classList.add("flip")
}

const flipFront = () => {
    cvvInput.classList.remove("flip")
}

const handleCvvDisplay = () => {
    if (this.cvv.value.length < this.cvv.maxLength) {
        cvvDisplay.innerText = this.cvv.value
    } else {
        this.cvv.value = this.cvv.value.slice(0, this.cvv.maxLength)
        cvvDisplay.innerText = this.cvv.value
    }
}

month.addEventListener("input", function() {
    document.getElementById("mm").innerText = this.value
})

year.addEventListener("input", function() {
    document.getElementById("yy").innerText = this.value
})

inputNum.addEventListener("input", handleCardNumber)
holder.addEventListener("input", handleHolder)
cvv.addEventListener("focusin", flipBack)
cvv.addEventListener("focusout", flipFront)
cvv.addEventListener("input", handleCvvDisplay)