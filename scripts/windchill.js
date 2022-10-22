const temp = document.querySelector("#temp");
const speed = document.querySelector("#speed");
const windChillOutput = document.querySelector("#windchill");

const speedInput = 12
const tempInput = 42

function getWindChill(speedInput, tempInput) {
    let windChill = "N/A";

    if (speedInput > 3 && tempInput <=50){
        windChill = (
            35.74 + 0.6215 * tempInput -
            35.75 * speedInput ** 0.16 +
            0.4275 * tempInput * speedInput ** 0.16
        ).toFixed(2);

        windChill = '$(windChill) °F';
    }
    return windChill;

}
speed.textContent = `${speedInput}`;
temp.textContent = `${tempInput}`;
windChillOutput.textContent = getWindChill(speedInput,tempInput);