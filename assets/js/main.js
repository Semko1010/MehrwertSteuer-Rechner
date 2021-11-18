let aufschlagen = document.getElementById("mwsAufschlagen");
let abziehen = document.getElementById("mwsAbziehen");
let neunZehn = document.getElementById("19%");
let sieben = document.getElementById("7%");
let input = document.getElementById("input");
let mwsBetrag = document.getElementById("mwsBetrag");
let endPreis = document.getElementById("endPreis");
let nettoBrutto = document.getElementById("nettoBrutto");


const berechnen = () => {
    if (aufschlagen.checked && neunZehn.checked) {
        let endergebnis = Number(input.value) * 1.19;
        endPreis.innerHTML = endergebnis.toFixed(2) + "€";
        let differenz = endergebnis - input.value
        mwsBetrag.innerHTML = differenz.toFixed(2) + "€";

    } else if (aufschlagen.checked && sieben.checked) {
        let endergebnis2 = Number(input.value) * 1.07;
        endPreis.innerHTML = endergebnis2.toFixed(2) + "€";
        let differenz2 = endergebnis2 - input.value
        mwsBetrag.innerHTML = differenz2 - input.value + "€";
    } else if (abziehen.checked && neunZehn.checked) {

        let endergebnis3 = Number(input.value) / 1.19;
        endPreis.innerHTML = endergebnis3.toFixed(2) + "€";
        let differenz3 = input.value - endergebnis3;
        mwsBetrag.innerHTML = differenz3.toFixed(2) + "€";


    } else if (abziehen.checked && sieben.checked) {
        let endergebnis4 = Number(input.value) / 1.07;
        endPreis.innerHTML = endergebnis4.toFixed(2) + "€";
        let differenz4 = input.value - endergebnis4;
        mwsBetrag.innerHTML = differenz4.toFixed(2) + "€";
    }


}

const abziehenF = () => {
    if (abziehen.checked) {
        nettoBrutto.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
    }
}
const aufschlagenF = () => {
    if (aufschlagen.checked) {
        nettoBrutto.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
    }
}