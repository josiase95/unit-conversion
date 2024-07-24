/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    let lengthInFeet = (baseValue * meterToFeet).toFixed(2)
    let volumeInGallons = (baseValue * literToGallon).toFixed(2)
    let massInPounds = (baseValue * kiloToPound).toFixed(2)
    
    lengthEl.textContent = `${baseValue} meter = ${lengthInFeet} feet`
    volumeEl.textContent = `${baseValue} liter = ${volumeInGallons} gallon`
    massEl.textContent = `${baseValue} kilo = ${massInPounds} pound`
})


