const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("user-input");
const metreToFeet = 3.281;
const litreToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(userInput.value);
    
      if (isNaN(baseValue)) {
        // If not a valid number, set HTML elements to display original values
        lengthEl.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`;
        volumeEl.textContent = `0 litres = 0.000 gallons | 0 gallons = 0.000 litres`;
        massEl.textContent = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`;
        return; // Exit the function early
    }


    if (baseValue > 1) {
        lengthEl.textContent = `${baseValue} metres = ${(baseValue * metreToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / metreToFeet).toFixed(3)} metres`;
    } else {
        lengthEl.textContent = `${baseValue} metre = ${(baseValue * metreToFeet).toFixed(3)} feet | ${baseValue} foot = ${(baseValue / metreToFeet).toFixed(3)} metres`;
    }

    if (baseValue > 1) {
        volumeEl.textContent = `${baseValue} litres = ${(baseValue * litreToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / litreToGallon).toFixed(3)} litres`;
    } else {
        volumeEl.textContent = `${baseValue} litre = ${(baseValue * litreToGallon).toFixed(3)} gallons | ${baseValue} gallon = ${(baseValue / litreToGallon).toFixed(3)} litres`;
    }

    if (baseValue > 1) {
        massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms`;
    } else {
        massEl.textContent = `${baseValue} kilogram = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilograms`;
    }
});