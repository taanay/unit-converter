/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btn = document.getElementById("btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btn.addEventListener('click', function(){
    conversionLength(Number(inputEl.value))
    conversionVolume(Number(inputEl.value))
    conversionMass(Number(inputEl.value))
})

function conversionLength(val) {
    
    let meter = val * 3.281
    let feet = val / 3.281
    
    lengthEl.innerHTML = `${val} meters = ${meter.toFixed(3)} feet | 
                            ${val} feet = ${feet.toFixed(3)} meters`
}

function conversionVolume(val) {
    
    let liters = val * 0.264
    let gallons = val / 0.264
    
    volumeEl.innerHTML =  `${val} liters = ${liters.toFixed(3)} gallons |
                            ${val} gallons = ${gallons.toFixed(3)} liters`
}

function conversionMass(val) {
    
    let kilogram = val * 2.204
    let pound = val / 2.204
    
    massEl.innerHTML = `${val} kilos = ${kilogram.toFixed(3)} pounds |
                        ${val} pounds = ${pound.toFixed(3)} kilos`
    // console.log(val)    
}