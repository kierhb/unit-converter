const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")


inputBtn.addEventListener("click", function() {
    let valueToConvert = inputEl.value

})

inputBtn.addEventListener("click", function() {
    const valueToConvert = inputEl.value
    
    // Length
    const metersToFeet = valueToConvert * 3.281
    const feetToMeters = valueToConvert / 3.281
    lengthEl.textContent = `${valueToConvert} meters = ${metersToFeet.toFixed(3)} feet | ${valueToConvert} feet = ${feetToMeters.toFixed(3)} meters`
    
    // Volume
    const litersToGallons = valueToConvert * 0.264
    const gallonsToLiters = valueToConvert / 0.264
    volumeEl.textContent = `${valueToConvert} liters = ${litersToGallons.toFixed(3)} gallons | ${valueToConvert} gallons = ${gallonsToLiters.toFixed(3)} liters`
    
    // Mass
    const kilosToPounds = valueToConvert * 2.205
    const poundsToKilos = valueToConvert / 2.205
    massEl.textContent = `${valueToConvert} kilos = ${kilosToPounds.toFixed(3)} pounds | ${valueToConvert} pounds = ${poundsToKilos.toFixed(3)} kilos`

})