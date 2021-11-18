let aufschlagen = document.getElementById("mwsAufschlagen");
let abziehen = document.getElementById("mwsAbziehen");
let neunZehn = document.getElementById("19%");
let sieben = document.getElementById("7%");
let input = document.getElementById("input");
let mwsBetrag = document.getElementById("mwsBetrag");
let endPreis = document.getElementById("endPreis");


berechnen = () => {
    if (aufschlagen.checked && neunZehn.checked) {
        endPreis.innerHTML = Number(input.value) * 1.19;
        let test = Number(input.value) * 1.19;
        mwsBetrag.innerHTML = test - input.value;

    } else if (aufschlagen.checked && sieben.checked) {
        endPreis.innerHTML = Number(input.value) * 1.07;
        let test = Number(input.value) * 1.07;
        mwsBetrag.innerHTML = test - input.value;
    } else if (abziehen.checked && neunZehn.checked) {
        endPreis.innerHTML = Number(input.value) - 1.19;
        let test = Number(input.value) - 1.19;
        mwsBetrag.innerHTML = test - input.value;
    } else if (abziehen.checked && sieben.checked) {
        endPreis.innerHTML = Number(input.value) - 1.07;
        let test = Number(input.value) - 1.07;
        mwsBetrag.innerHTML = test - input.value;
    }

}