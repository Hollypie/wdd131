const temperature = 40;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
    
    return 35.74 + (0.6215*temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16)) ;
}

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerHTML = `${windChill.toFixed(2)}`;

} else {
    document.getElementById("windChill").innerHTML = "N/A";
}

