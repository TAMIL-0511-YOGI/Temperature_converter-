function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let convertedC, convertedF, convertedK;

  if (unit === "C") {
    convertedF = (temp * 9/5) + 32;
    convertedK = temp + 273.15;
    resultDiv.innerHTML = `
      🔥 Fahrenheit: ${convertedF.toFixed(2)}°F<br>
      ❄️ Kelvin: ${convertedK.toFixed(2)}K
    `;
  } else if (unit === "F") {
    convertedC = (temp - 32) * 5/9;
    convertedK = convertedC + 273.15;
    resultDiv.innerHTML = `
      🌡️ Celsius: ${convertedC.toFixed(2)}°C<br>
      ❄️ Kelvin: ${convertedK.toFixed(2)}K
    `;
  } else if (unit === "K") {
    convertedC = temp - 273.15;
    convertedF = (convertedC * 9/5) + 32;
    resultDiv.innerHTML = `
      🌡️ Celsius: ${convertedC.toFixed(2)}°C<br>
      🔥 Fahrenheit: ${convertedF.toFixed(2)}°F
    `;
  }
}