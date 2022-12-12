const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")


inputBtn.addEventListener("click", function() {
    const valueToConvert = inputEl.value

    if (Number(valueToConvert)) {    
        // Length
        lengthConversion(valueToConvert)
        // Volume
        volumeConversion(valueToConvert)
        // Mass
        massConversion(valueToConvert)
    } else {
        const errorMessage = `<p id="error-message">Invalid input</p>`
        lengthEl.innerHTML = errorMessage
        volumeEl.innerHTML = errorMessage
        massEl.innerHTML = errorMessage
    }
})

// Length Conversion
function lengthConversion(input) {
    const convertInput = Math.abs(input)
    const metersToFeet = convertInput * 3.281
    const feetToMeters = convertInput / 3.281
    lengthEl.textContent = `${convertInput} meters = ${metersToFeet.toFixed(3)} feet | ${convertInput} feet = ${feetToMeters.toFixed(3)} meters`
}

// Volume Conversion
function volumeConversion(input) {
    const convertInput = Math.abs(input)
    const litersToGallons = convertInput * 0.264
    const gallonsToLiters = convertInput / 0.264
    volumeEl.textContent = `${convertInput} liters = ${litersToGallons.toFixed(3)} gallons | ${convertInput} gallons = ${gallonsToLiters.toFixed(3)} liters`
}

// Mass Conversion
function massConversion(input) {
    const convertInput = Math.abs(input)
    const kilosToPounds = convertInput * 2.205
    const poundsToKilos = convertInput / 2.205
    massEl.textContent = `${convertInput} kilos = ${kilosToPounds.toFixed(3)} pounds | ${convertInput} pounds = ${poundsToKilos.toFixed(3)} kilos`
}